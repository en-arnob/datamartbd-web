import {useEffect, useState} from "react";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {TfiTarget} from "react-icons/tfi";
import {Modal} from "react-responsive-modal";
import {PiBinoculars} from "react-icons/pi";
import {BsSymmetryVertical} from "react-icons/bs";
import ABT from '../assets/abt.jpg'

const fadeLeft = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0},
};

const Fourth = () => {
    const [missionOpen, setMissionOpen] = useState(false)
    const [visionOpen, setVisionOpen] = useState(false)
    const [valuesOpen, setValuesOpen] = useState(false)

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <div name='about'>
            <section className=" pt-10 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
                <motion.img
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={fadeLeft}
                    transition={{duration: 0.5}}
                    alt=""
                    src={ABT}
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-se-[30px] md:h-[calc(100%_-_4rem)] md:rounded-se-[60px]"
                />
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-center md:text-end text-2xl font-bold md:text-3xl text-blue-950">
                            Who <span className='text-orange-600'>We</span> Are?
                        </h2>
                        <h2 className="mt-1 text-center md:text-end text-md md:text-xl text-blue-950">
                            Committed to give you excellent services.
                        </h2>

                        <p className="mt-4 text-justify text-gray-500 md:mt-4 md:block leading-tight">
                            DataMart BD Limited is a comprehensive IT solutions provider based in Bangladesh, empowering
                            businesses with innovative technology and strategic consulting. We are a one-stop shop for
                            all your
                            digital transformation needs, catering to established enterprises and ambitious startups
                            alike. Our
                            comprehensive suite of services empowers you to streamline operations, optimize workflows,
                            and
                            captivate your target audience – ultimately achieving your digital transformation goals.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-blue-950 sm:text-3xl mt-4">
                        Our <span className='text-orange-600'>Mission</span> and <span
                        className='text-orange-600'>Visions</span>
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                        <Modal open={missionOpen} onClose={() => setMissionOpen(false)} center>

                        <h2 className="flex justify-center items-center mb-2 text-7xl text-blue-950">
                                <TfiTarget/></h2>
                            <h2 className="text-center text-4xl font-bold tracking-tight text-blue-950 sm:text-3xl mt-4">
                                Our <span className='text-orange-600'>Mission</span>
                            </h2>

                            <div className=' mt-5 text-blue-950 font-semibold'>
                                <p>Our mission is to be trusted partner in navigating the ever-evolving IT landscape. We
                                    believe in fostering
                                    long-term relationships with our clients, working collaboratively to understand
                                    their unique needs and
                                    challenges. By leveraging our expertise and innovative solutions, we strive to
                                    optimize operations,
                                    enhance customer experiences, and unlock new possibilities for your business.</p>
                            </div>
                        </Modal>
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <article className="text-center p-2 rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block text-blue-950 rounded text-4xl md:text-5xl font-bold p-2 ">
                  <TfiTarget/>
                </span>
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        Mission
                                    </h3>
                                </a>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    To help every customer have a positive memorable experience.
                                </p>
                                <button
                                    onClick={() => setMissionOpen(true)}
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
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

                        <Modal open={visionOpen} onClose={() => setVisionOpen(false)} center>

                            <h2 className="flex justify-center items-center mb-2 text-7xl text-blue-950">
                                <PiBinoculars/>
                            </h2>
                            <h2 className="text-center text-4xl font-bold tracking-tight text-blue-950 sm:text-3xl mt-4">
                                Our <span className='text-orange-600'>Vision</span>
                            </h2>

                            <div className=' mt-5 text-blue-950 font-semibold'>
                                <p>Our vision is to empower individuals and businesses through innovative software
                                    solutions that simplify
                                    complexity, drive efficiency, and inspire growth. We strive to be at the forefront of technological
                                    advancements, continuously exploring new possibilities and pushing boundaries to shape the future of
                                    software development.
                                    Our commitment to excellence drives us to deliver superior products and services that exceed
                                    expectations, foster long-term partnerships, and create lasting value for our clients. We envision a world
                                    where technology seamlessly integrates into everyday life, enriching experiences and transforming
                                    industries.
                                    With a relentless focus on innovation, collaboration, and customer satisfaction, we aim to be the trusted
                                    partner of choice for organizations seeking to leverage the power of software to achieve their goals and
                                    drive sustainable success.
                                    Together, let's build a brighter future powered by innovation and driven by possibility.</p>
                            </div>
                        </Modal>
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <article className="text-center p-2 rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block text-blue-950 rounded text-4xl md:text-5xl font-bold p-2 ">
                  <PiBinoculars/>
                </span>
                                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                    Vision
                                </h3>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    To have a positive impact on the lives of our customer and our team.
                                </p>
                                <button
                                    onClick={() => setVisionOpen(true)}
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
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

                        <Modal open={valuesOpen} onClose={() => setValuesOpen(false)} center>
                            <h2 className="flex justify-center items-center mb-2 text-7xl text-blue-950">
                                <BsSymmetryVertical /></h2>
                            <h2 className="text-center text-4xl font-bold tracking-tight text-blue-950 sm:text-3xl mt-4">
                                Our <span className='text-orange-600'>Values</span>
                            </h2>

                            <div className=' mt-5 text-blue-950 font-semibold'>
                                <p>To be open, honest and fair.. whatever we do, we do it right, we do it together.</p>
                            </div>
                        </Modal>
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <article className="text-center p-2 rounded-lg border border-gray-100 bg-white pt-2">
                <span className="inline-block text-blue-950 rounded text-4xl md:text-5xl font-bold p-2 ">
                  <BsSymmetryVertical />
                </span>
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        Values
                                    </h3>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    To be open, honest and fair.. whatever we do, we do it right, we do it together.
                                </p>
                                <button
                                    onClick={() => setValuesOpen(true)}
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
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
                </div>
            </section>
        </div>
    );
};

export default Fourth;
