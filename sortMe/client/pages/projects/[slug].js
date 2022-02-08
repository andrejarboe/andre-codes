import { useState } from 'react';
import MainLayout from '../../components/Layouts/MainLayout';
import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from '../../lib/sanity';

const projectsQuery = `*[_type == "projects" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    tags,
    description
}`;

export default function oneProject({ data, preview }) {
  if (!data) return <div>Loading...</div>;
//   const { data: project } = usePreviewSubscription(projectsQuery, {
//     params: { slug: data.project?.slug.current },
//     initialData: data,
//     enabled: preview,
//   });

const { project } = data;

console.log('project: ');
console.log(project.title);

  return (
    <div>
      <MainLayout>
        <h1>{project.title}</h1>
        <main>
          <PortableText blocks={project?.description} className="" />
        </main>
      </MainLayout>
    </div>
  );
}

// gets the url for every project
export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "projects" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  );

  return {
    paths,
    fallback: true,
  };
}

// gets the data and content for every project
export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = await sanityClient.fetch(projectsQuery, { slug });
  return {
    props: {
      data: {
        project,
      },
      preview: true,
    },
  };
}
