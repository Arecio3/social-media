import Image from "next/image";
import space from "../images/space.png";
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/client'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
    const [session] = useSession();
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex items-center text-gray-600">
                <Image src={space} width={50} height={50} layout="fixed" cursor="pointer"/>
                <div className="flex ml-4 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-400"/>
                    <input type="text" placeholder="Search" className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"/>
                </div>
            </div>

            {/* Center*/}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                <Image
                src={session.user.image}
                onClick={signOut}
                height={40}
                width={40}
                className="rounded-full cursor-pointer"
                layout="fixed"
                />
                <p className="whitespace-nowrap font-semibold pr-3 text-red-500 italic">{session.user.name}</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>
        </div>
    )
}

export default Header
