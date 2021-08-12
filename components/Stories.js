import stories1 from '../images/stories1.jpeg';
import StoryCard from './StoryCard';
import { useSession } from 'next-auth/client';



function Stories() {
    const [session] = useSession();
    const stories = [
        {
            name: "Arecio Canton",
            src: stories1,
            profile: session.user.image,
        },
        {
            name: "Elon Musk",
            src: "https://links.papareact.com/4zn",
            profile: "https://links.papareact.com/kxk",
        },
        {
            name: "Jeff Bezos",
            src: "https://links.papareact.com/k2j",
            profile: "https://links.papareact.com/f0p",
        },
        {
            name: "Mark Zuckerberg",
            src: "https://links.papareact.com/xql",
            profile: "https://links.papareact.com/snf",
        },
        {
            name: "Bill Gates",
            src: "https://links.papareact.com/4u4",
            profile: "https://links.papareact.com/zvy",
        },
    ]
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story, i) => (
                <StoryCard 
                name={story.name}
                src={story.src}
                key={i}
                profile={story.profile}
                />
            ))}
        </div>
    )
}

export default Stories
