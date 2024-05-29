import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {FaArrowDown} from "react-icons/fa6";

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
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <motion.img
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={fadeBottom}
                  transition={{duration: 0.5}}
                  alt=""
                  src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
                  className="absolute inset-0 h-full w-full"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-left text-3xl font-bold tracking-tight text-blue-950 sm:text-5xl mt-4">
                Client <span className='text-orange-600'>Support</span>
              </h2>
              <div className="flex justify-start items-left text-blue-950 text-2xl mt-10">
                <ul className="text-left list-disc list-md text-semibold pl-5">
                  <li>24x7 Online support</li>
                  <li>Dedicated Account Managers</li>
                  <li>Customer Satisfaction Surveys</li>
                  <li>Customer-Centric Culture</li>
                  <li>Cross Functional Collaboration</li>
                  <li>Continuous Improvement</li>
                </ul>
              </div>

              {/*<button*/}

              {/*    className="mt-8 inline-block rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white transition  "*/}
              {/*>*/}
              {/*  <span className='flex gap-1'>*/}
              {/*    Contact <FaArrowDown className='text-md mt-1' />*/}
              {/*  </span>*/}

              {/*</button>*/}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Turn;
