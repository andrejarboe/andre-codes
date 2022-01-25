import Link from "next/link";
import MovingIcon from "../MovingIcon";


export default function Hero2() {
    return (
        <div className="flex p-10">
            <div className="my-auto flex-1">
                <h1 className="text-4xl md:text-6xl font-bold ">
                    Hi, I'm Andre Jarboe.
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold pt-4">
                    I am a full stack web developer.
                </h1>
                <div className="rounded-md shadow w-60 pt-4">
                    <Link
                        href="/contact"
                    >
                        <a
                            className=" flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                        >
                            Contact Me
                        </a>
                    </Link>
                </div>
            </div>
            <div className="flex-1 hidden md:block">
                <MovingIcon />
            </div>
        </div>
    )
}
