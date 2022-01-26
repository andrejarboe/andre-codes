import React from 'react';
import { sanityClient } from '../lib/sanity';
import MainLayout from '../components/Layouts/MainLayout';
import Portfolio from '../components/Portfolio/Portfolio';

const projectsQuery = `*[ _type == 'projects']{
  _id,
  title,
  slug,
  mainImage,
  description,
  tags
}`;

export default function projects({ projects }) {
  return (
    <div>
      <MainLayout>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-6">
            <div className="col-span-4">
              <Portfolio projects={projects} />
            </div>
            {/* about me  */}
            
            <div className="col-span-2">

            abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqustuvwxyz
            abcdefghijklmnopqrstuvwxyz
            </div>


            {/* END about me  */}
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
