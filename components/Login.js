import Image from "next/image"
import space from '../images/space.png'
import { signIn } from 'next-auth/client'
function Login() {
    return (
        <div className="grid place-items-center bg-gray-800 min-h-screen">
            <h1 className="text-white text-3xl">Welcome to Halo!</h1>
            <Image  
            src={space}
            height={400}
            width={400}
            objectFit="contain"
            />
            <button className="p-5 text-white bg-red-500 rounded-full cursor-pointer md:hover:bg-red-600" onClick={signIn}>Login with Google or Facebook!</button>
        </div>
    )
}

export default Login
