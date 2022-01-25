import { useState } from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import moment from 'moment';
import Link from "next/link";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio"
import Hero from '../components/Hero/Hero';
import Hero2 from '../components/Hero/Hero2';



export default function Home({ projects }) {
  const [tag, setTag] = useState('All');
  return (
    <Layout>
      <Head>
        <title>Andre's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero /> */}
      <Hero2 />
      <Portfolio
        projects={projects}
        tag={tag}
        items='6'
      />
      <div className="mx-auto flex justify-center py-10">

        <Link
          href="/portfolio"
        >
          <button
            className=" flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700 md:py-4 md:text-lg md:px-10 cursor-pointer"
          >View All</button>
        </Link>
      </div>
    </Layout>
  )
}


export const getStaticProps = async () => {

  const sortProjects = () => {
    const allProjects = fs.readdirSync("portfolio").map((filename) => {
      const file = fs.readFileSync(path.join("portfolio", filename)).toString();

      const projectData = matter(file);

      function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

      console.log(projectData.data);

      function getTags() {
        console.log();
      }


      // console.log(projectData.data.slug)
      return {
        content: projectData.content,
        title: projectData.data.title,
        featured_image: projectData.data.featured_image,
        date: projectData.data.date,
        slug: projectData.data.slug,
        description: projectData.data.description,
      };
      // console.log(`name: ${data.data.date}`);
    });


    return allProjects.sort(
      (a, b) =>
        new moment(b.date, "YYYY-MM-DD HH:mm:ss") -
        new moment(a.date, "YYYY-MM-DD HH:mm:ss")
    );

  }
  // console.log(sortProjects())

  return {
    props: {
      projects: sortProjects().slice(0, 6),
    },
  };
};