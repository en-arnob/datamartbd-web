import {useEffect, useState} from "react";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

import {Modal} from "react-responsive-modal";

import CSD from "../assets/CustomSD.png"
import WD from "../assets/WebD.png"
import MAD from "../assets/MAD.png"
import DAS from "../assets/DAS.jpg"
import ITC from "../assets/ITC.png"

const squareVariants = {
    visible: {opacity: 1, scale: 1, transition: {duration: 0.5}}, hidden: {opacity: 0, scale: 0},
};


const AdditionalServices = () => {

    // states for modals
    const [soft, setSoft] = useState(false)
    const [web, setWeb] = useState(false)
    const [mob, setMob] = useState(false)
    const [dataAnalysis, setDataAnalysis] = useState(false)
    const [itCon, setItCon] = useState(false)

    // states for inView Animations
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

    // useEffects for inView Animations
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
                <h2 className="text-center text-4xl font-bold tracking-tight text-blue-950 sm:text-3xl mt-4">
                    Discover Our <span className='text-orange-600'>Services</span>
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <Modal open={soft} onClose={() => setSoft(false)} center>
                        <div className='p-2'>
                            <img
                                alt=""
                                src={CSD}
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
                                    src={WD}
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
                                src={CSD}
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

                    <Modal open={web} onClose={() => setWeb(false)} center>
                        <div className='p-2 pt-5'>
                            <img
                                alt=""
                                src={WD}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />
                            <h2 className='text-xl font-bold text-blue-950'>Web Application Development</h2>
                            <div className='text-black mt-5'>
                                <p className=''>
                                    Do you have a great idea for a web application but lack the technical expertise to
                                    bring it to life? Our full-stack development services can help. We have a team of
                                    experienced developers skilled in a variety of technologies, including Node.js,
                                    React, JavaScript, Python/Django, and PHP/Laravel, MSSQL, MySQL, MongoDB and more.
                                    We can help you with every stage of the development process, from initial concept to
                                    deployment and ongoing support.
                                </p>
                                <p className='mt-1 text-green-600 font-semibold'>Let us turn your vision into a reality.
                                    Contact us today to learn more about our full-stack development services.</p>

                                {/*<img*/}
                                {/*    alt=""*/}
                                {/*    src="https://decode.agency/wp-content/uploads/2022/12/Custom-software-development-process-infographic.png"*/}
                                {/*    className="mt-4 mb-5 h-100 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </Modal>
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
                                src={WD}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    Web Application Development
                                </h3>


                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Web applications are software applications that are delivered over the internet.
                                    They can be
                                    accessed from any device with a web browser, which makes them a convenient and
                                    cost-effective way to
                                    deliver software to users.
                                </p>
                                <button
                                    onClick={() => setWeb(true)}
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600"
                                >
                                    Read More
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

                    <Modal open={mob} onClose={() => setMob(false)} center>
                        <div className='p-2 pt-5'>
                            <img
                                alt=""
                                src={MAD}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />
                            <h2 className='text-xl font-bold text-blue-950'>Bring Your Mobile App Idea to Life</h2>
                            <div className='text-black mt-5'>
                                <p className=''>
                                    Looking to create a groundbreaking mobile app but unsure where to start? Our mobile
                                    app development services can turn your vision into reality. We offer a range of
                                    development options to fit your needs, including native Android and iOS apps, or
                                    cross-platform solutions like Flutter and React Native.

                                    Our team of skilled developers possesses expertise in crafting intuitive and
                                    user-friendly mobile experiences. We'll guide you through every stage of the
                                    process, from initial concept and design to development, testing, deployment, and
                                    ongoing support.

                                </p>
                                <p className='mt-1 text-green-600 font-semibold'> Don't let your mobile app idea stay
                                    just an idea. Contact us today to discuss your project and explore how we can help
                                    you build a successful mobile application.</p>

                                {/*<img*/}
                                {/*    alt=""*/}
                                {/*    src="https://decode.agency/wp-content/uploads/2022/12/Custom-software-development-process-infographic.png"*/}
                                {/*    className="mt-4 mb-5 h-100 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </Modal>
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
                                src={MAD}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    Mobile Application Development
                                </h3>


                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Mobile applications are software applications that are designed to run on
                                    smartphones and tablets.
                                    They are a great way to reach customers on the go and provide them with a
                                    convenient way to interact
                                    with your business.
                                </p>
                                <button
                                    onClick={() => setMob(true)}
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600"
                                >
                                    Get Started
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

                    <Modal open={dataAnalysis} onClose={() => setDataAnalysis(false)} center>
                        <div className='p-2 pt-5'>
                            <img
                                alt=""
                                src={DAS}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />
                            <h2 className='text-xl font-bold text-blue-950'>Unleash the Power of Your Data</h2>
                            <div className='text-black mt-5'>
                                <p className=''>
                                    Drowning in data but thirsty for insights? Our data analysis services can help you
                                    unlock the hidden potential within your information. We are a team of data experts
                                    skilled in extracting, transforming, and analyzing complex datasets to generate
                                    actionable intelligence.

                                    Whether you have mountains of customer data, website analytics, or internal metrics,
                                    we can help you identify trends, uncover patterns, and gain a deeper understanding
                                    of your business. We leverage a variety of tools and techniques, including:
                                    <br/>
                                    1. Data cleaning and preparation
                                    <br/>
                                    2. Statistical analysis and modeling
                                    <br/>
                                    3. Data visualization dashboards
                                    <br/>
                                    4. Machine learning and predictive analytics
                                </p>
                                <p className='mt-1 text-green-600 font-semibold'> Our goal is to transform your raw data
                                    into clear, concise, and actionable insights that can inform strategic
                                    decision-making, improve operational efficiency, and drive business growth.</p>
                                {/*<img*/}
                                {/*    alt=""*/}
                                {/*    src="https://decode.agency/wp-content/uploads/2022/12/Custom-software-development-process-infographic.png"*/}
                                {/*    className="mt-4 mb-5 h-100 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </Modal>
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
                                src={DAS}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    Data Analysis Services
                                </h3>


                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Data analysis services allow businesses to get their data collected, processed
                                    and presented to them in the form of actionable insights while avoiding
                                    investments in the development and administration of an analytics solution.
                                </p>
                                <button
                                    onClick={() => setDataAnalysis(true)}
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
                    <Modal open={itCon} onClose={() => setItCon(false)} center>
                        <div className='p-2 pt-5'>
                            <img
                                alt=""
                                src={ITC}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />
                            <h2 className='text-xl font-bold text-blue-950'>Bridge the Gap Between Business and
                                Technology</h2>
                            <div className='text-black mt-5'>
                                <p className=''>
                                    Technology is constantly evolving, but is it propelling your business forward? Our
                                    IT consulting services can help you bridge the gap between your business goals and
                                    the power of technology. We offer a comprehensive suite of services designed to:
                                    <ol>
                                        <li><span className='font-semibold'>Align IT Strategy:</span> We work
                                            collaboratively with you to understand your unique business objectives and
                                            develop a customized IT strategy that maximizes your return on investment
                                            (ROI).
                                        </li>
                                        <li><span
                                            className='font-semibold'>Optimize Technology Infrastructure:</span> Our IT
                                            specialists will assess your existing infrastructure and recommend solutions
                                            to improve efficiency, security, and scalability.
                                        </li>
                                        <li> <span className='font-semibold'>Unlock Innovation:
</span> We stay at the forefront of emerging technologies and can help you identify and implement innovative solutions
                                            that give you a competitive edge.
                                        </li>
                                    </ol>
                                </p>
                                <p className='mt-1 text-green-600 font-semibold'> With a team of experienced and certified consultants, we provide a vendor-agnostic approach, ensuring the best solutions for your specific needs.  Let us help you navigate the ever-changing IT landscape and unlock the full potential of technology for your business success.</p>

                                {/*<img*/}
                                {/*    alt=""*/}
                                {/*    src="https://decode.agency/wp-content/uploads/2022/12/Custom-software-development-process-infographic.png"*/}
                                {/*    className="mt-4 mb-5 h-100 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </Modal>
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
                                src={ITC}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    IT Consultant
                                </h3>


                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    IT consultants provide businesses with expert guidance to leverage technology
                                    for success. They offer services like strategic IT planning, network and cloud
                                    management, cybersecurity solutions, software selection and implementation, and
                                    ongoing IT support. By utilizing their expertise, businesses can achieve
                                    cost-efficiency, improve operational efficiency, and stay ahead of the
                                    technology curve.
                                </p>
                                <button
                                    onClick={() => setItCon(true)}
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
