import Link from "next/link";

export default function Hero() {
    return (
        <div className="hero w-full flex flex-col pt-24 pb-20 text-left md:pt-48">
        <div className="">

            <h1 className="text-4xl md:text-6xl font-bold ">Hi, I'm Andre Jarboe.</h1>
            <h1 className="text-3xl md:text-4xl font-bold pt-4">I am a full stack web developer.</h1>
            {/* <Link href="#"><a className="pt-4 text-xl font-light text-true-gray-500 antialiased">Contact</a></Link> */}
        </div>

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
    )
}
