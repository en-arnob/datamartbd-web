import React, {useEffect, useState} from "react";
import {FiBox} from "react-icons/fi";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Third from "./Third";
import Fourth from "./Fourth";
import AdditionalServices from "./AdditionalServices";
import Reviews from "./Reviews";
import Turn from "./Turn";
import Faq from "./Faq.jsx";
import {HiOutlineLightningBolt} from "react-icons/hi";
import {CgShutterstock} from "react-icons/cg";
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import Products from "./Products.jsx";


const HomeSections = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const [mod1Visible, setMod1Visible] = useState(false)

    const fadeLeft = {
        hidden: {opacity: 0, x: -100},
        visible: {opacity: 1, x: 0},
    };
    const fadeBottom = {
        hidden: {opacity: 0, y: 100},
        visible: {opacity: 1, y: 0, scale: 0.9},
    };
    const fadeRight = {
        hidden: {opacity: 0, x: 100},
        visible: {opacity: 1, x: 0},
    };
    return (
        <div name='get-started'>
            <Modal open={mod1Visible} onClose={() => setMod1Visible(false)} center>
                <h2 className='text-xl font-bold text-blue-900'>Transforming business with cutting-edge software
                    solutions.</h2>

                <div className='text-black mt-5'>
                    <ul className='list-disc px-5'>
                        <li>Our software product is designed to streamline operations, increase efficiency, and drive
                            growth for your business.
                        </li>
                        <li>With its automated features and user-friendly interface, you can stay ahead of the
                            competition.
                        </li>
                        <li>Experience significant improvements in productivity, accuracy, and overall performance.
                        </li>
                        <li>Streamline your processes, eliminate manual tasks, and optimize resource allocation.
                        </li>
                    </ul>
                </div>
            </Modal>
            <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-left mb-5 text-blue-950 font-bold">Innovate</h1>
                        <motion.h2
                            ref={ref}
                            animate={controls}
                            initial="hidden"
                            variants={fadeLeft}
                            transition={{duration: 0.5}}
                            className="text-2xl text-left font-bold text-gray-900 md:text-3xl"
                        >
                            Transforming business with cutting-edge software solutions.
                        </motion.h2>

                        <p className="text-blue-950 text-left md:mt-4 md:block">
                            Our software product is designed to streamline operations,
                            increase efficiency and drive growth. With its advanced features
                            and user-friendly interface, business can stay ahead of the
                            competition.
                        </p>
                        <div className="flex text-left gap-2 mt-5">
                            <div>
                                <article className="rounded-lg p-2 border border-gray-100 bg-white pt-2">
                  <span className="inline-block rounded text-4xl md:text-5xl font-bold p-2 text-blue-800 ">
                    <HiOutlineLightningBolt/>
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
                                <article className="rounded-lg p-2 border border-gray-100 bg-white   pt-2">
                  <span className="inline-block rounded text-4xl md:text-5xl font-bold p-2 text-blue-900">
                    <CgShutterstock/>
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
              <span
                  onClick={() => setMod1Visible(true)}
                  className="inline-block rounded bg-blue-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer"

              >
                Learn More
              </span>
                        </div>
                    </div>
                </div>

                <motion.img
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={fadeRight}
                    transition={{duration: 0.5}}
                    alt=""
                    src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>

            <Third/>

            <Fourth/>



            <AdditionalServices/>

            <Reviews/>

            <Products/>
            <Turn/>

            {/*<div name='faq' className='bg-gray-200 text-black'>*/}
            {/*    <Faq/>*/}
            {/*</div>*/}
        </div>
    );
};

export default HomeSections;
