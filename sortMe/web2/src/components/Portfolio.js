import React from "react";
import { Link } from "gatsby";
import setupTags from "../utils/setupTags";

export default function Portfolio({ tags }) {
  const newTags = setupTags(tags);
  console.log("new tags: ");
  console.log(newTags);

  return (
    <div className="max-w-6xl mx-auto py-16">
      <h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
        Check out my portfolio
      </h2>
      <div className="flex">
        <div className="flex mx-auto items-center space-x-4 py-4 capitalize">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link key={index} className="cursor bg-purple-500 rounded-full text-purple-100 px-4 text-center ">
                {text} ({value})
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
