import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Turn = () => {
  const fadeBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, scale: 0.9 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div name='contact'>
      <div className="bg-slate-400">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <motion.img
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={fadeBottom}
                transition={{ duration: 0.5 }}
                alt=""
                src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold text-slate-700 sm:text-5xl">
                Take Your Business to Success
              </h2>

              <p className="mt-4 text-gray-600">
                Discover how our software can streamline your operations and
                boost your productivity.
              </p>

              <button

                className="mt-8 inline-block rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turn;
