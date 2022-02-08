import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

import Layout from "../components/Layout";


export default function ProjectPage({projectData, content}) {
    return (
        <Layout>
            <Head>
                <title>Andre's Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="project">

            <h1 className="text-3xl md:text-4xl font-bold pt-4">{projectData.title}</h1>

            {/* <img src="http://via.placeholder.com/880x495" alt="" /> */}
            <img src={`/assets/images/${projectData.featured_image}`} alt="" />

            <div dangerouslySetInnerHTML={{ __html: content}} />

            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync("portfolio");
    console.log("Files:", files);
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
    console.log('paths: ', paths);
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({params: {slug}}) => {
    const project = fs.readFileSync(path.join('portfolio', `${slug}.md`)).toString()
    const projectData = matter(project)
    const content = marked(projectData.content)
    console.log(content);
    console.log(projectData.data)
    return {
      props: {
        slug, 
        content,
        projectData: projectData.data
      }
    }
  }