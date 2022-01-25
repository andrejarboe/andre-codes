import React from 'react'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import moment from 'moment';
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio'

export default function portfolio({ projects })  {
    return (
        <Layout>
            <Portfolio
                projects={projects}
            />
            
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
  
  
      return allProjects.sort((a, b) => new moment(a.date).format('YYYY-MM-DD HH:mm:ss') < new moment(b.date).format('YYYY-MM-DD HH:mm:ss'))
  
    }
    // console.log(sortProjects())
  
    return {
      props: {
        projects: sortProjects(),
      },
    };
  };
