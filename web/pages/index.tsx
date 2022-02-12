import { sanityClient, urlFor } from '../lib/sanity'
import { Post } from '../lib/typings'
import moment from 'moment'

import Head from 'next/head'
import Card1 from '../components/Cards/Card1'
import Categories1 from '../components/Categories/Categories1'
import Hero1 from '../components/Hero/Hero1'
import MainLayout from '../components/Layouts/MainLayout'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  console.log(posts)
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
            <div className="grid grid-cols-12 px-4 ">
              <div className="col-span-12 md:col-span-8">
                {posts.map((project, index) => {
                  console.log(project.slug.current)

                  return (
                    <Card1
                      key={project._id}
                      href={`/projects/${project.slug.current}`}
                      title={project.title}
                      imageUrl={urlFor(project.mainImage).quality(75).url()!}
                      author={project.author.name}
                      date={moment(project.publishedAt).format('MMMM Do YYYY')}
                    />
                  )
                })}
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

export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    author-> {
      name,
      image
    },
    categories[]->{
      title
    }
  }`

  const posts = await sanityClient.fetch(query)
  // const formatDate = (publishedAt: string) => {
  //   return moment(publishedAt).format('MMMM Do, YYYY')
  // }

  

  // have to define post in typescript
  return {
    props: {
      posts,
    },
  }
}
