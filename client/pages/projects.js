import React from 'react';
import { sanityClient } from '../lib/sanity';
import MainLayout from '../components/Layouts/MainLayout';

const projectsQuery = `*[ _type == 'projects']{
  _id,
  title,
  slug,
  mainImage,
  description,
  tags
}`;


export default function projects() {
  return (
    <div>
      <MainLayout>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Portfolio projects={projects} />
        </div>
      </MainLayout>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { projects } };
}