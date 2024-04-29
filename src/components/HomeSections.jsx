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
    </div>
  );
};

export default HomeSections;
