import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Fourth = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeLeft}
          transition={{ duration: 0.5 }}
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
    </div>
  );
};

export default Fourth;
