import { useRouter } from 'next/dist/client/router'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'

export default function DocumentRow({id, fileName, date}) {

    const Router = useRouter();
    return(

      
      <div 
      onClick={() => Router.push(`/doc/${id}`)}
      class="card m-2 cursor-pointer border border-white rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
      <div class="m-3">
        <h2 class="text-lg mb-2 text-white">{fileName}
       <span class="text-sm text-black font-mono bg-white inline rounded-full px-2 align-top float-right animate-pulse">{date?.toDate().toLocaleDateString()}</span></h2>
      </div>
    </div>
    )
}

