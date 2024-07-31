export default function Landing() {
  return (
    <>
      <section className="text-gray-600 body-font mt-0 pt-16">
        <div className="container px-5 py-12 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg overflow-hidden mb-5">
              <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
                Full Stack Developer
              </h1>
              <h2 className="font-medium text-base md:text-2xl dark:text-neutral-200 py-4 text-center">
                Digitalizing{' '}
                <span className="bg-gradient-to-r from-[#f6e448] to-[#D3A433] text-transparent bg-clip-text">
                  Ideas
                </span>
                ✨For The Web
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    className="rounded-full"
                    src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*GSEYV8B0P4c8tFTr1Lu8fQ.png"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 dark:text-white text-lg">
                    Liban Osman
                  </h2>
                  <div className="w-12 h-1 bg-gray-500 rounded mt-2 mb-4"></div>
                  {/* <p className="text-base dark:text-white">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p> */}
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 dark:text-white">
                  I'm a highly motivated IT professional with experience in both
                  frontend and backend development. Skilled in crafting
                  user-friendly interfaces with cutting edge web technologies.
                  Adept at building robust backend logic, APIs and RESTful
                  principles. Beyond software development, my hobbies include
                  playing sports, swimming, and enjoying life with my loved
                  ones. My technical experience gives me the confidence to pick
                  up new information rapidly and tackle difficult problems. I'm
                  driven to learn and progress in this ever-evolving field.
                  Ready to digitalize ideas into user friendly,
                  mobile-responsive, elegant projects and solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
