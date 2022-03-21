import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { db } from "../firebase";
import { useRouter } from "next/dist/client/router";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { Configuration, OpenAIApi } from "openai";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function TextEditor() {
  const [session] = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;

  const [snapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
    }
  }, [snapshot]);

  async function question(question) {

    const configuration = new Configuration({
        apiKey: "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",
    })
    const openai = new OpenAIApi(configuration)

    const response = await openai.createCompletion("text-davinci-001", {
        prompt: `${question}`,
        max_tokens: 100,
    })

    let newString = ""

    // add the text objects into one string
    for (const responseText of response.data.choices) {
        newString = newString.concat(responseText.text)
    }

    console.log("IN CALL: "+newString)

    return newString
  }


  const onEditorStateChange = async (editorState) => {



    setEditorState(editorState)

    let rawEditorContents = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    console.log(rawEditorContents)
    console.log(editorState.getCurrentContent().getPlainText("\n"))



    if (rawEditorContents.indexOf("/a") !== -1) {


      //auto complete
      const plainText = editorState.getCurrentContent().getPlainText("\n")
      const autocompletePrompt = plainText.indexOf("/a")
      let lastSentence = ""
      const textBeforePrompt = plainText.substring(0, autocompletePrompt)
      console.log("test before prompt"+textBeforePrompt)
      if(textBeforePrompt.includes(".")) {
          lastSentence = textBeforePrompt.substring(textBeforePrompt.lastIndexOf(".")+1, textBeforePrompt.length)
      } else lastSentence = textBeforePrompt

      if (lastSentence.includes("\n")) {
        lastSentence = lastSentence.substring(lastSentence.lastIndexOf("\n"), lastSentence.length)
        console.log("last sentence before prompt" + lastSentence.replace(/(\r\n|\n|\r)/gm, ""))
      }
      
      lastSentence = lastSentence.replace(/(\r\n|\n|\r)/gm, "")
      let answer = await question(lastSentence)
      rawEditorContents = rawEditorContents.replace(lastSentence, answer.replace(/(\r\n|\n|\r)/gm, ""))
      rawEditorContents = rawEditorContents.replace("/a", "")
      console.log(rawEditorContents)
      setEditorState(
          EditorState.createWithContent(
              convertFromRaw(JSON.parse(rawEditorContents))
          )
      );
    }

    await db.collection("userDocs")
        .doc(session.user.email)
        .collection("docs")
        .doc(id)
        .set(
            {
              editorState: convertToRaw(editorState.getCurrentContent()),
            },
            {
              merge: true,
            }
        );
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-7xl mx-auto mb-12 min-h-screen"
      />
    </div>
  );
}

export default TextEditor;