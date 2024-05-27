import React, {useEffect, useState} from "react";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {TiLockOpenOutline} from "react-icons/ti";
import {Modal} from "react-responsive-modal";

const squareVariants = {
    visible: {opacity: 1, scale: 1, transition: {duration: 0.5}}, hidden: {opacity: 0, scale: 0},
};


const AdditionalServices = () => {

    const [soft, setSoft] = useState(false)

    const controls = useAnimation();
    const [ref, inView] = useInView();

    const controls2 = useAnimation();
    const [ref2, inView2] = useInView();

    const controls3 = useAnimation();
    const [ref3, inView3] = useInView();

    const controls4 = useAnimation();
    const [ref4, inView4] = useInView();

    const controls5 = useAnimation();
    const [ref5, inView5] = useInView();


    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    useEffect(() => {
        if (inView2) {
            controls2.start("visible");
        }
    }, [controls2, inView2]);

    useEffect(() => {
        if (inView3) {
            controls3.start("visible");
        }
    }, [controls3, inView3]);

    useEffect(() => {
        if (inView4) {
            controls4.start("visible");
        }
    }, [controls4, inView4]);

    useEffect(() => {
        if (inView5) {
            controls5.start("visible");
        }
    }, [controls5, inView5]);

    return (<div name="services">
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-4">
                    Discover Our Services
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <Modal open={soft} onClose={() => setSoft(false)} center>
                        <div className='p-2'>
                            <img
                                alt=""
                                src="https://blog.appsumo.com/wp-content/uploads/2020/09/AS-BLOG-small-business-management-software-1536x614px.jpg"
                                className="mt-10 mb-5 h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />
                            <h2 className='text-xl font-bold text-blue-950'>Custom Software Development</h2>

                            <div className='text-black mt-5'>
                                <p className=''>
                                    This is the process of creating software applications that are specifically
                                    designed to meet the
                                    needs of a particular business or organization. Custom software can be used to
                                    automate
                                    tasks,improve efficiency, and give businesses a competitive edge.
                                </p>

                                <img
                                    alt=""
                                    src="https://decode.agency/wp-content/uploads/2022/12/Custom-software-development-process-infographic.png"
                                    className="mt-4 mb-5 h-100 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                                />
                            </div>
                        </div>
                    </Modal>
                    <motion.blockquote
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={squareVariants}
                        transition={{duration: 0.5}}
                        className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
                    >
                        <article className="group">
                            <img
                                alt=""
                                src="https://blog.appsumo.com/wp-content/uploads/2020/09/AS-BLOG-small-business-management-software-1536x614px.jpg"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />
                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    Custom Software Development
                                </h3>


                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    This is the process of creating software applications that are specifically
                                    designed to meet the
                                    needs of a particular business or organization. Custom software can be used to
                                    automate
                                    tasks,improve efficiency, and give businesses a competitive edge.
                                </p>
                                <button
                                    onClick={() => setSoft(true)}
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600"
                                >
                                    Learn More
                                    <span
                                        aria-hidden="true"
                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                    >
                      &rarr;
                    </span>
                                </button>
                            </div>
                        </article>
                    </motion.blockquote>
                    <motion.blockquote
                        ref={ref2}
                        animate={controls2}
                        initial="hidden"
                        variants={squareVariants}
                        transition={{duration: 0.5}}
                        className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
                    >
                        <article className="group">
                            <img
                                alt=""
                                src="https://os-system.com/blog/wp-content/uploads/2021/09/Full-Stack-Development-1-1024x576.jpg"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">
                                <a href="#">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Web Application Development
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Web applications are software applications that are delivered over the internet.
                                    They can be
                                    accessed from any device with a web browser, which makes them a convenient and
                                    cost-effective way to
                                    deliver software to users.
                                </p>
                                <a
                                    href="#"
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600"
                                >
                                    Read More
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
                        ref={ref3}
                        animate={controls3}
                        initial="hidden"
                        variants={squareVariants}
                        transition={{duration: 0.5}}
                        className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
                    >
                        <article className="group">
                            <img
                                alt=""
                                src="https://www.addevice.io/storage/ckeditor/uploads/images/64477f9642c9d_best.cross.platform.app.development.frameworks.jpg"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">
                                <a href="#">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Mobile Application Development
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Mobile applications are software applications that are designed to run on
                                    smartphones and tablets.
                                    They are a great way to reach customers on the go and provide them with a
                                    convenient way to interact
                                    with your business.
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
                    <motion.blockquote
                        ref={ref4}
                        animate={controls4}
                        initial="hidden"
                        variants={squareVariants}
                        transition={{duration: 0.5}}
                        className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
                    >
                        <article className="group">
                            <img
                                alt=""
                                src="https://cdn.sanity.io/images/v6oximkk/production/6ecb1237e1333ec11bbefa21d1f70c47c4ade8e9-1600x1105.jpg?w=1600&h=1105&auto=format"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">
                                <a href="#">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Data Analysis Services
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Data analysis services allow businesses to get their data collected, processed
                                    and presented to them in the form of actionable insights while avoiding
                                    investments in the development and administration of an analytics solution.
                                </p>
                                <button

                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600"
                                >
                                    Learn More
                                    <span
                                        aria-hidden="true"
                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                    >
                      &rarr;
                    </span>
                                </button>
                            </div>
                        </article>
                    </motion.blockquote>
                    <motion.blockquote
                        ref={ref5}
                        animate={controls5}
                        initial="hidden"
                        variants={squareVariants}
                        transition={{duration: 0.5}}
                        className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
                    >
                        <article className="group">
                            <img
                                alt=""
                                src="https://treku23.com/wp-content/uploads/2021/02/1.jpg"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">
                                <a href="#">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        IT Consultant
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    IT consultants provide businesses with expert guidance to leverage technology
                                    for success. They offer services like strategic IT planning, network and cloud
                                    management, cybersecurity solutions, software selection and implementation, and
                                    ongoing IT support. By utilizing their expertise, businesses can achieve
                                    cost-efficiency, improve operational efficiency, and stay ahead of the
                                    technology curve.
                                </p>
                                <button

                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600"
                                >
                                    Learn More
                                    <span
                                        aria-hidden="true"
                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                    >
                      &rarr;
                    </span>
                                </button>
                            </div>
                        </article>
                    </motion.blockquote>

                </div>
            </div>
        </section>
    </div>);
};

export default AdditionalServices;
