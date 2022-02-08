import Head from 'next/head';
import Layout from "../components/Layout";


export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col pt-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold">Contact Me:</h2>
                <p>
                    {/* Here are a few selected words displaying my skills */}
                </p>
            </div>
            <div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12">
                <div className="max-w-lg mx-auto lg:max-w-none">
                    <form
                        action="https://mailthis.to/andrejarboe"
                        method="POST"
                        encType="multipart/form-data"
                        className="grid grid-cols-1 gap-y-6"
                    >
                        <div>
                            <label htmlFor="full-name" className="sr-only">
                                Full name
                            </label>
                            <input
                                type="text"
                                name="full-name"
                                id="full-name"
                                autoComplete="name"
                                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                placeholder="Name / Company"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                placeholder="Phone"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                placeholder="Message"
                                defaultValue={""}
                            />
                        </div>
                        <div>
                            <input type="hidden" name="_subject" defaultValue="Contact form submitted" />
                            <input type="hidden" name="_after" defaultValue="https://www.andrejarboe.com/" />
                            <input type="hidden" name="_honeypot" defaultValue />
                            <input type="hidden" name="_confirmation" defaultValue />
                            <button
                                type="submit"
                                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

