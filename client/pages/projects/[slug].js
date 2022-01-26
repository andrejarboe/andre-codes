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
    tags
}`;

export default function oneProject({ data, preview }) {
  return (
    <div>
      <MainLayout>
        <h1>{project.name}</h1>
      </MainLayout>
    </div>
  );
}

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

export async function getStaticProps({ params }) {
  const { slug } = params;
  const projects = await sanityClient.fetch(projectsQuery, { slug });
  return { props: { data: { projects }, preview: true } };
}
