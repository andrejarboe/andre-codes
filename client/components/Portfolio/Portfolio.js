import React from 'react';
import { urlFor } from '../../lib/sanity';
import Card3 from '../../components/Cards/Card3';
import TagsList from '../Tags/TagsList';

export default function Portfolio({ projects }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 ">
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl uppercase text-center font-semibold py-6">
        Check out my Portfolio
      </h1>

      <div className="grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-8">
          {projects.map((project, index) => {
            return (
              <Card3 key={index} imageUrl={urlFor(project.mainImage).url()} />
            );
          })}
        </div>
        <div className="col-span-12 md:col-span-4">
          {/* <Tags /> */}
          <TagsList projects={projects} />
        </div>
      </div>
    </div>
  );
}
