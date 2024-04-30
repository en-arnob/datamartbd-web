import React from "react";
import { FiBox } from "react-icons/fi";

const HomeSections = () => {
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-left mb-5">Innovate</h1>
            <h2 className="text-2xl text-left font-bold text-gray-900 md:text-3xl">
              Transforming business with cutting-edge software solutions.
            </h2>

            <p className=" text-left text-gray-500 md:mt-4 md:block">
              Our software product is designed to streamline operations,
              increase efficiency and drive growth. With its advanced features
              and user-friendly interface, business can stay ahead of the
              competition.
            </p>
            <div className="flex text-left gap-2 mt-5">
              <div>
                <article className="rounded-lg border border-gray-100 bg-white pt-2">
                  <span className="inline-block rounded text-3xl font-bold p-2 ">
                    <FiBox />
                  </span>

                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      Boost Performance
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Experience significant improvements in productivity,
                    accuracy and overall performance with our software.
                  </p>
                </article>
              </div>
              <div>
                <article className="rounded-lg border border-gray-100 bg-white   pt-2">
                  <span className="inline-block rounded text-3xl font-bold p-2 ">
                    <FiBox />
                  </span>

                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      Enhance Efficiency
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Streamline your processes, eliminate manual tasks and
                    optimize resource allocation with our software.
                  </p>
                </article>
              </div>
            </div>

            <div className="text-left mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <img
          alt=""
          src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2> */}

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <article className="text-center rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block rounded text-3xl font-bold p-2 ">
                  <FiBox />
                </span>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Unlock the Power of Our Software
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Exprerience seamless integration and increased productivity.
                </p>
                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Learn More
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </article>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <article className="text-center rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block rounded text-3xl font-bold p-2 ">
                  <FiBox />
                </span>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Streamline Your Workflow with Ease
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Effortlessly manage tasks and collaborate with your team.
                </p>
                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Learn More
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </article>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <article className="text-center rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block rounded text-3xl font-bold p-2 ">
                  <FiBox />
                </span>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Enhance Your Design Making Process
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Access real-time data and gain valuable insights.
                </p>
                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Learn More
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </article>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-se-[30px] md:h-[calc(100%_-_4rem)] md:rounded-se-[60px]"
        />
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-end text-2xl font-bold text-gray-900 md:text-3xl">
              Unlocking the Potential of Your Business
            </h2>

            <p className="text-end text-gray-500 md:mt-4 md:block">
              Our software provides a wide range of benefits for different user
              groups. Whether you're a small business owner or a large
              enterprise, our solution is designed to meet your needs and help
              you achieve your goals.
            </p>
            <div className="mt-5">
              <h2 className="sr-only">Steps</h2>

              <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
                <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
                  <li className="flex items-center gap-2 bg-white p-2">
                    <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                      {" "}
                    </span>

                    <span className="hidden sm:block">
                      {" "}
                      Increase productivity and streamline workflows{" "}
                    </span>
                  </li>

                  <li className="flex items-center gap-2 bg-white p-2">
                    <span className="size-6 rounded-full  text-center text-[10px]/6 font-bold text-white"></span>

                    <span className="hidden sm:block">
                      {" "}
                      Improve collaboration and communication within your team
                    </span>
                  </li>

                  <li className="flex items-center gap-2 bg-white p-2">
                    <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold"></span>

                    <span className="hidden sm:block">
                      {" "}
                      Enhance data security and protect sensitive information{" "}
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Discover the Power of Our User-Friendly Software
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <article className="text-center rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block rounded text-3xl font-bold p-2 ">
                  <FiBox />
                </span>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Effortlessly Manage Your Tasks with Our Intuitive Interface
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Our software simplifies complex processes, making it easy for
                  you to achieve your goals.
                </p>
                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Learn More
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </article>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <article className="text-center rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block rounded text-3xl font-bold p-2 ">
                  <FiBox />
                </span>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Streamline Your Workflow with Our Advanced Features
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Experience the convenience of automated tasks and seamless
                  integrations.
                </p>
                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Learn More
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </article>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <article className="text-center rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block rounded text-3xl font-bold p-2 ">
                  <FiBox />
                </span>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Boost Productivity with Our Customizable Solutions
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Tailor our software to fit your unique business needs and
                  maximize efficiency.
                </p>
                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Learn More
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </article>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Discover Our Additional Services
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <article className="group">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />

                <div className="p-4">
                  <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      Enhance Your Experience
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Our software company provides top-notch customer support and
                    comprehensive training to ensure your success.
                  </p>
                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600"
                  >
                    Learn More
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </article>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <article className="group">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />

                <div className="p-4">
                  <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      Stay Ahead of the Curve
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    With our software company, you'll always have access to the
                    latest updates and advancements in the industry.
                  </p>
                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600"
                  >
                    Sign Up
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </article>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <article className="group">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />

                <div className="p-4">
                  <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      Unlock Your Full Potential
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Our software company offers personalized training programs
                    to help you maximize your productivity and efficiency.
                  </p>
                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600"
                  >
                    Get Started
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </article>
            </blockquote>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="h-32 text-center justify-center items-center rounded-lg p-4 ">
            <h2 className="text-left justify-start text-xl font-bold tracking-tight text-gray-900 sm:text-4xl p-10">
              Discover Our Impressive Company Achievements and Milestones
            </h2>
          </div>
          <div className="h-32 rounded-lg p-4 ">
            <p>
              Over the years, we have accomplished remarkable feats, solidifying
              our position as a leading software company.
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-5">
              <div className="h-32 rounded-lg p-4 ">
                <h2 className="text-left justify-start text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  50%
                </h2>
                <p className="pt-2">
                  Increase in Customer Satisfaction through our Innovative
                  Solutions
                </p>
              </div>
              <div className="h-32 rounded-lg p-4 ">
                <h2 className="text-left justify-start text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  50%
                </h2>
                <p className="pt-2">
                  Reduction in Time and Cost for Businesses with our Software
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSections;
