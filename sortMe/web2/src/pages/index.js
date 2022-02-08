import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import { Link } from "gatsby";
import Portfolio from "../components/Portfolio";

const data = {
  skills: [
    {
      title: "Web development",
      link: "/portfolio:web-development",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "HTML Email development",
      link: "/portfolio:email-development",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "Backend development",
      link: "/portfolio:backend-development",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ],
};

export default function Home() {
  const { skills } = data;

  return (
    <MainLayout>
      {/* skills  */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
          {skills.map((skill, index) => {
            return (
              <Link
                key={index}
                to={skill.link}
                className="shadow px-8 py-12 hover:bg-primary group rounded"
              >
                <div className="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                  <div className="hidden group-hover:block">
                    <img
                      src="../assets/images/icon-development-white.svg"
                      alt="development icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-development-black.svg"
                      alt="development icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold  text-lg lg:text-xl text-primary uppercase pt-8 group-hover:text-yellow">
                    {skill.title}
                  </h3>
                  <p className="text-sm md:text-base text-grey pt-4 group-hover:text-white">
                    {skill.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      {/* skills end */}
      {/* Portfolio  */}
      <Portfolio />
      {/* Portfolio end */}
    </MainLayout>
  );
}
