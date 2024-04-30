import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
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

const AdditionalServices = () => {
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
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Discover Our Additional Services
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <motion.blockquote
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={fadeLeft}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
            >
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
            </motion.blockquote>
            <motion.blockquote
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={squareVariants}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
            >
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
            </motion.blockquote>

            <motion.blockquote
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={fadeRight}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
            >
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
            </motion.blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalServices;
