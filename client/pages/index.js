import Head from 'next/head';
import MainLayout from '../components/Layouts/MainLayout';
import Portfolio from '../components/Portfolio/Portfolio';
import { sanityClient, urlFor } from '../lib/sanity';
import Card3 from '../components/Cards/Card3';
import Tags from '../components/Tags/Tags';
import TagsList from '../components/Tags/TagsList';

const projectsQuery = `*[ _type == 'projects']{
  _id,
  title,
  slug,
  mainImage,
  description,
  tags[] -> {
      title
   }
}`;

const data = {
 
  posts: [
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/10800242/pexels-photo-10800242.jpeg?cs=srgb&dl=pexels-mary-10800242.jpg&fm=jpg',
    },
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/10810753/pexels-photo-10810753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/3767370/pexels-photo-3767370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/5835416/pexels-photo-5835416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/6353834/pexels-photo-6353834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/10810753/pexels-photo-10810753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/3767370/pexels-photo-3767370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/5835416/pexels-photo-5835416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/10810753/pexels-photo-10810753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'This is a title',
      imageUrl:
        'https://images.pexels.com/photos/6353834/pexels-photo-6353834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ],
};

export default function Home({ projects }) {
  const { sections, posts } = data;
  console.log('**********************');
  console.log('projects.tags: ');
  console.log('**********************');
  // projects.title.map((title) => {
  //     return title;
  // });
  console.log('**********************');

  return (
    <div>
      <Head>
        <title>Andre Jarboe | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="w-full max-w-6xl mx-auto px-4 py-6 ">
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl uppercase text-center font-semibold py-6">
            Check out my Portfolio
          </h1>

          <div className="grid grid-cols-12 ">
            <div className="col-span-12 md:col-span-8">
              {projects.map((project, index) => {
                return <Card3 key={index} imageUrl={urlFor(project.mainImage).url()} />;
              })}
            </div>
            <div className="col-span-12 md:col-span-4">
              {/* <Tags /> */}
              <TagsList projects={projects} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export async function getStaticProps() {

  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { projects } };
}
