import { useRouter } from 'next/dist/client/router'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'

export default function DocumentRow({id, fileName, date}) {

    const Router = useRouter();
    return(
        <div 
        onClick={() => Router.push(`/doc/${id}`)}
        class="px-36 h-md shadow-md text-xl py-4  text-[#939694] hover:bg-black hover:text-white">
                      <div class="flex items-center justify-between">

          <div>{fileName}</div>
<div className='grid grid-cols-2 items-center'>
          <div class="text-xl">{date?.toDate().toLocaleDateString()}</div>
          
            <Button
            color="black"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="border-0">
                <Icon name="more_vert" size="3xl"></Icon>
            </Button>
            </div>
          </div>
          
      </div>
    )
}

