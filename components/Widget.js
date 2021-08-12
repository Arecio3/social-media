import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

function Widget() {
    const contacts = [
        { src: "http://links.papareact.com/f0p", name: "Jeff Bezos" },
        { src: "http://links.papareact.com/kxk", name: "Elon Musk" },
        { src: "http://links.papareact.com/zvy", name: "Bill Gates" },
        { src: "http://links.papareact.com/snf", name: "Mark Zuckerberg" },
        { src: "http://links.papareact.com/d0c", name: "Harry Potter" },
        { src: "http://links.papareact.com/6gg", name: "The Queen" },
        { src: "http://links.papareact.com/r57", name: "James Bond" },
    ];
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
            <h2 className="text-xl">Contacts</h2>
            <div className="flex space-x-2">
                <VideoCameraIcon className="h-6" />
                <SearchIcon className="h-6" />
                <DotsHorizontalIcon className="h-6" />
            </div>
        </div>
        {contacts.map((contact) => (
            <Contact key={contact.src} src={contact.src} name={contact.name}/>
        ))}
        </div>
    )
}

export default Widget
