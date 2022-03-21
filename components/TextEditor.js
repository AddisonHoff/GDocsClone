import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { db } from "../firebase";
import { useRouter } from "next/dist/client/router";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

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
        apiKey: process.env.OPEN_AI_API_KEY,
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
  }


  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)

    const rawEditorContents = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    console.log(rawEditorContents)
    if(rawEditorContents.indexOf("/a") !== -1) {
      rawEditorContents = rawEditorContents.replace("/a", question(rawEditorContents));
      console.log(rawEditorContents)
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(rawEditorContents))
        )
      );
    }

    db.collection("userDocs")
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