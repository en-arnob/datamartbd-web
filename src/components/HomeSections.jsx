import React, { useEffect } from "react";
import { FiBox } from "react-icons/fi";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Third from "./Third";
import Fourth from "./Fourth";
import AdditionalServices from "./AdditionalServices";
import Reviews from "./Reviews";
import Turn from "./Turn";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const HomeSections = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, scale: 0.9 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-left mb-5">Innovate</h1>
            <motion.h2
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={fadeLeft}
              transition={{ duration: 0.5 }}
              className="text-2xl text-left font-bold text-gray-900 md:text-3xl"
            >
              Transforming business with cutting-edge software solutions.
            </motion.h2>

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

        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeRight}
          transition={{ duration: 0.5 }}
          alt=""
          src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>

      <Third />

      <Fourth />

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

      <AdditionalServices />

      <section className="pb-5 ">
        <div className=" grid  grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="h-32 text-center justify-center items-center rounded-lg p-4 ">
            <h2 className="text-left justify-start text-xl font-bold tracking-tight text-gray-900 sm:text-4xl p-10">
              Discover Our Impressive Company Achievements and Milestones
            </h2>
          </div>
          <div className="h-32 rounded-lg p-4 ">
            <p className="p-4">
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
      <section className="py-10 "></section>

      <Reviews />

      <Turn />

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <div className="space-y-4">
                <details
                  className="group [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">What is the software?</h2>

                    <svg
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    The software is a powerful tool that helps streamline
                    business processes and increase productivity.
                  </p>
                </details>
                <details
                  className="group [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">How can I get started?</h2>

                    <svg
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    To get started, simply sign up for a free trial and explore
                    all the features and benefits.
                  </p>
                </details>
                <details
                  className="group [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">Is the software secure?</h2>

                    <svg
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    Yes, we prioritize the security of your data and have
                    implemented robust measures to protect it.
                  </p>
                </details>
                <details
                  className="group [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">
                      Can I customize the software?
                    </h2>

                    <svg
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    Absolutely! Our software is highly customizable to fit the
                    unique needs of your business.
                  </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">Do you offer support?</h2>

                    <svg
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    Yes, we provide 24/7 customer support to assist you with any
                    questions or issues you may have.
                  </p>
                </details>
              </div>
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-5xl">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 text-gray-600">
                Find answers to common questions about our software to help you
                make informed decisions.
              </p>

              {/* <a
                href="#"
                className="mt-8 inline-block rounded bg-green-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Contact Us
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSections;
