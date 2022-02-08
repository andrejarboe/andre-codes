export default function Experience1() {
  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <h1 className="font-header text-center text-4xl font-semibold uppercase text-red-500 sm:text-5xl lg:text-6xl">
          My work experience
        </h1>
      </div>

      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="flex-shrink-0">
                <img
                  src="/assets/img/logo-spotify.svg"
                  className="h-auto w-32"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="bg-grey-70 absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform" />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="md:pl-18 relative flex">
              <span className="border-grey-40 absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 bg-white md:block" />
              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow text-primary hidden md:block" />
                <div className="md:-mt-1 md:pl-8">
                  <span className="font-body text-grey-40 block font-bold">
                    Apr 2015 - Mar 2018
                  </span>
                  <span className="font-header text-primary block pt-2 text-xl font-bold uppercase">
                    Frontend Developer
                  </span>
                  <div className="pt-2">
                    <span className="font-body block text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum mattis felis vitae risus pulvinar tincidunt.
                      Nam ac venenatis enim.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
