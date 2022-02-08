import Link from 'next/link';
import setupTags from '../../utils/setupTags';

export default function TagsList({ projects }) {
  const newTags = setupTags(projects);

  console.log('new tags: ');
  console.log(newTags);

  return (
    // <div className="">
    //   <h4 className="text-2xl">Recipes</h4>
    //   <div className="flex md:flex-col text-xl capitalize">
    //     {newTags.map((tag, index) => {
    //       const [text, value] = tag;
    //       return (
    //         <Link key={index} href={`/portfolio:${tag}`}>
    //           <a className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900">
    //             {text}
    //             <span className="p-2 text-lg font-thin text-gray-700">
    //               {value}
    //             </span>
    //           </a>
    //         </Link>
    //       );
    //     })}
    //   </div>
    // </div>
    <>
      <div className="mt-10 md:pl-4">
        <h2 className="mb-5 text-lg font-medium text-gray-900">Categories</h2>
        <ul>
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <li className="flex" key={index}>
                <Link href={`/portfolio:${text}`}>
                  <a className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900 capitalize">
                    {text}
                  </a>
                </Link>
                <span className="p-2 text-lg font-thin text-gray-700">{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
