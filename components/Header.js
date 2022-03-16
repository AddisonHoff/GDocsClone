import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'

function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center px-4 shadow-md bg-white">
            <Button
            color="black"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="md:inline-flex h-20 w-20 border-0"
            >
                <Icon name="arrow_forward_ios" size="3xl"></Icon>
            </Button>
            <button
                    class="rounded-full focus:outline-none h-10 w-10 flex items-center justify-center">
                    <img src='/logo.png'
                        className="pokeball" alt="logo" />
                </button>
            {/* <Icon name="description" size="5xl" color="blue"></Icon> */}
            <h1 className='ml-2 text-black text-2xl font-semibold pr-5'>Divination</h1>

            <div className='mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 rounded-lg'>
                <Icon name="search" size="3xl" color="darkgray"></Icon>
                <input className='bg-transparent px-5 flex-grow outline-none' type="text" placeholder='search'></input>
            </div>

            <Button
            color="black"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="ml-5 md:ml-20 h-20 w-20 border-0">
                <Icon name="apps" size="3xl" color="black"></Icon>
            </Button>

            <img
            loading='lazy'
            className="hidden md-inline-flex cursor-pointer h-12 w-12 rounded-full"
            src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg"
            alt=""></img>
        </header>

    )
}

export default Header