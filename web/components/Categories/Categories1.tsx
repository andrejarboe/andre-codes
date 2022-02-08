
export default function Categories1({ title = 'Categories' }) {
  return (
    <div className="mt-10 md:pl-4">
      <h2 className="mb-5 text-lg font-medium text-gray-900">{title}</h2>
      <ul>
        {/* {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <li className="flex" key={index}>
              <Link href={`/portfolio:${text}`}>
                <a className="block flex-1 py-2 font-serif text-lg font-thin capitalize text-gray-900">
                  {text}
                </a>
              </Link>
              <span className="p-2 text-lg font-thin text-gray-700">
                {value}
              </span>
            </li>
          )
        })} */}
        <li className="flex">
          <a
            href="#_"
            className="block flex-1 py-2 font-serif text-lg font-thin text-gray-900"
          >
            Lifestyle
          </a>
          <span className="p-2 text-lg font-thin text-gray-700">32</span>
        </li>
      </ul>
    </div>
  )
}
