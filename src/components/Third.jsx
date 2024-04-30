import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBox } from "react-icons/fi";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Third = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <section className="bg-white">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
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
        </motion.div>
      </section>
    </div>
  );
};

export default Third;
