import React, {useEffect, useState} from "react";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {FiBox} from "react-icons/fi";
import {ImPowerCord} from "react-icons/im";
import {GoWorkflow} from "react-icons/go";
import {TiLightbulb, TiLockOpenOutline, TiPointOfInterest} from "react-icons/ti";
import {Modal} from "react-responsive-modal";

const squareVariants = {
    visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
    hidden: {opacity: 0, scale: 0},
};
const Third = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const [unlockOpen, setUnlockOpen] = useState(false)
    const [streamlineOpen, setStreamlineOpen] = useState(false)
    const [enhanceOpen, setEnhanceOpen] = useState(false)


    return (
        <div>
            <section className="bg-white">
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={squareVariants}
                    transition={{duration: 0.5}}
                    className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
                >
                    {/* <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Read trusted reviews from our customers
      </h2> */}

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                        <Modal open={unlockOpen} onClose={() => setUnlockOpen(false)} center>

                            <h2 className="flex justify-center items-center mb-2 text-7xl text-teal-800">
                                <TiLockOpenOutline/></h2>
                            <h2 className='text-xl font-bold text-teal-800'>Unleash Unmatched Efficiency and
                                Productivity.</h2>

                            <div className='text-black mt-5'>
                                <ul className='list-disc px-5'>
                                    <li>Our software is a comprehensive solution designed to streamline your workflow
                                        and empower your team.
                                    </li>
                                    <li>Experience a seamless integration of features that automate tasks, centralize
                                        data, and foster collaboration.
                                    </li>
                                    <li>Increase productivity with intuitive functionalities that minimize manual work
                                        and boost output.
                                    </li>
                                    <li>Enhance decision-making with real-time insights and data visualization tools.
                                    </li>
                                </ul>
                            </div>
                        </Modal>

                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <article className="text-center rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block text-teal-800 rounded text-4xl md:text-5xl font-bold p-2 ">

                  <TiLockOpenOutline/>
                </span>
                                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                    Unlock the Power of Our Software
                                </h3>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-teal-800">
                                    Exprerience seamless integration and increased productivity.
                                </p>
                                <button
                                    onClick={() => setUnlockOpen(true)}
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-800"
                                >
                                    Learn More
                                    <span
                                        aria-hidden="true"
                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                    >
                    &rarr;
                  </span>
                                </button>
                            </article>
                        </blockquote>
                        <Modal open={streamlineOpen} onClose={() => setStreamlineOpen(false)} center>

                            <h2 className="flex justify-center items-center mb-2 text-7xl text-amber-800">
                                <TiLightbulb/></h2>
                            <h2 className='text-xl font-bold text-amber-800'>Simplify Complexities and Achieve More</h2>

                            <div className='text-black mt-5'>
                                <ul className='list-disc px-5'>
                                    <li>Our software empowers effortless task management and seamless collaboration
                                        within your team.
                                    </li>
                                    <li>Assign tasks, track progress, and meet deadlines efficiently with our intuitive
                                        interface.
                                    </li>
                                    <li>Foster a culture of transparency and accountability with clear communication
                                        channels.
                                    </li>
                                    <li>Improve project visibility and streamline handoffs between team members.
                                    </li>
                                </ul>
                            </div>
                        </Modal>
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <article className="text-center rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block text-amber-800 rounded text-4xl md:text-5xl font-bold p-2 ">
                  <TiLightbulb/>
                </span>
                                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                    Streamline Your Workflow with Ease
                                </h3>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-amber-800">
                                    Effortlessly manage tasks and collaborate with your team.
                                </p>
                                <button
                                    onClick={() => setStreamlineOpen(true)}
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-800"
                                >
                                    Learn More
                                    <span
                                        aria-hidden="true"
                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                    >
                    &rarr;
                  </span>
                                </button>
                            </article>
                        </blockquote>
                        <Modal open={enhanceOpen} onClose={() => setEnhanceOpen(false)} center>

                            <h2 className="flex justify-center items-center mb-2 text-7xl text-rose-700">
                                <TiPointOfInterest/></h2>
                            <h2 className='text-xl font-bold text-rose-700'>Empower Creativity and Deliver Exceptional Design Projects</h2>

                            <div className='text-black mt-5'>
                                <ul className='list-disc px-5'>
                                    <li>Our software equips you with the tools and resources to bring your design visions to life.
                                    </li>
                                    <li>Access a comprehensive library of design assets, customizable templates, and industry-standard creation features.
                                    </li>
                                    <li>Collaborate seamlessly with clients and stakeholders through real-time feedback and iteration tools.
                                    </li>
                                    <li>Gain valuable insights with data-driven design analytics for informed decision-making.
                                    </li>
                                </ul>
                            </div>
                        </Modal>
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <article className="text-center rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block text-rose-700 rounded text-4xl md:text-5xl font-bold p-2 ">
                  <TiPointOfInterest/>
                </span>


                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        Enhance Your Design Making Process
                                    </h3>


                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-rose-700">
                                    Access real-time data and gain valuable insights and more.
                                </p>
                                <button
                                    onClick={()=>setEnhanceOpen(true)}
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose-700"
                                >
                                    Learn More
                                    <span
                                        aria-hidden="true"
                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                    >
                    &rarr;
                  </span>
                                </button>
                            </article>
                        </blockquote>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Third;
