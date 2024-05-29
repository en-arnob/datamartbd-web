import {useEffect} from "react";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";


const squareVariants = {
    visible: {opacity: 1, scale: 1, transition: {duration: 0.5}}, hidden: {opacity: 0, scale: 0},
};


const Products = () => {

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

    return (<div name="products">
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-4xl font-bold tracking-tight text-blue-950 sm:text-3xl">
                    Our Ready <span className='text-orange-600'>Products</span>
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
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
                                src="https://media.licdn.com/dms/image/D5612AQHx2fjNzlCxCA/article-cover_image-shrink_720_1280/0/1668338256399?e=2147483647&v=beta&t=bTTFy7ZUM-1a_hQoEE3y7MABk3vKUtW5MVUlLEc0ljM"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />
                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    Enterprise Resource Planning (ERP)
                                </h3>

                                <p className="mt-2 text-sm/relaxed text-gray-500">
                                    Streamline your operations and gain real-time insights with our expert ERP
                                    implementation services, empowering informed decision-making across your entire
                                    organization.
                                </p>

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
                                src="https://snov.io/blog/wp-content/uploads/2021/02/2jT2rNPfndRmSJ9SOdn9VFEchk8AEKpSGvPPM1Xu-1-1-1536x768.png"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    Customer Relationship Management (CRM)
                                </h3>


                                <p className="mt-2 text-sm/relaxed text-gray-500">

                                    Transform customer interactions into lasting loyalty. Our CRM unifies data and
                                    automates workflows, driving sales and elevating service for maximized growth.
                                </p>

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
                                src="https://hrmwage.com/assets/images/laptop-screen1.png"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    Human Resource Management (HRM)
                                </h3>


                                <p className="mt-2 text-sm/relaxed text-gray-500">
                                    Streamline your HR processes and empower your people with our user-friendly HRM
                                    software. Simplify tasks, automate workflows, and gain valuable insights to build a
                                    happier, more productive workforce.
                                </p>

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
                                src="https://d1eipm3vz40hy0.cloudfront.net/images/tier-three/chart_sell_sfa_system.png"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    Sales Force Management
                                </h3>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Empower your sales team to close more deals with our data-driven Sales Force
                                    Management (SFM) solution. Unify lead management, automate workflows, and gain
                                    real-time insights to boost sales performance and drive revenue growth.
                                </p>

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
                                src="https://tfe-bd.sgp1.digitaloceanspaces.com/posts/11466/1669603336.jpg"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    VAT Management Software
                                </h3>


                                <p className="mt-2  text-sm/relaxed text-gray-500">
                                    Unleash the power of our VAT management software. Automate calculations, simplify
                                    reporting, and ensure compliance. Focus on your business, we'll handle the VAT.
                                </p>

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
                                src="https://foodtronix.com/wp-content/uploads/2022/04/POS-Systems.jpg"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">

                                <h3 className="text-lg font-medium text-gray-900">
                                    Other Customized Software Solution
                                </h3>


                                <p className="mt-2  text-sm/relaxed text-gray-500">
                                    Need a customized software solution? We build tools for Document Management, Inventory Control, Accounting, POS & more. Streamline operations, empower your business.
                                </p>

                            </div>
                        </article>
                    </motion.blockquote>

                </div>
            </div>
        </section>
    </div>);
};

export default Products;
