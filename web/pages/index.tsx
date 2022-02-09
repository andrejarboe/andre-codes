import Head from 'next/head'
import Card1 from '../components/Cards/Card1'
import Categories1 from '../components/Categories/Categories1'
import Hero1 from '../components/Hero/Hero1'

import MainLayout from '../components/Layouts/MainLayout'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Andre's Portfolio | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Hero1 />
        <section>
          <div className="mx-auto max-w-7xl">
            <h1 className="font-header text-center text-4xl font-semibold uppercase text-red-400 sm:text-5xl lg:text-6xl">
              Check out my Portfolio
            </h1>
            <div className="grid grid-cols-12 ">
              <div className="col-span-12 md:col-span-8">
                {/* {projects.map((project, index) => { */}
                {/* return ( */}
                <Card1 />
                {/* ) */}
                {/* })} */}
              </div>
              <div className="col-span-12 md:col-span-4">
                {/* <Tags /> */}
                {/* <TagsList projects={projects} /> */}
                <Categories1 />
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  )
}
