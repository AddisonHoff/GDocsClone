import { useRouter } from 'next/dist/client/router'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'

export default function DocumentRow({id, fileName, date}) {

    const Router = useRouter();
    return(
      <tr 
      onClick={() => Router.push(`/doc/${id}`)}
      class="hover:bg-gray-100 border-gray-200">
        <td class="px-4 py-4">{fileName}</td>
        <td class="px-4 py-4">{date?.toDate().toLocaleDateString()}</td>
      </tr>
    )
}

