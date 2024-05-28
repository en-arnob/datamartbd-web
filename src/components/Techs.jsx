import {useEffect} from "react";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {FaNodeJs, FaReact} from "react-icons/fa";
import {
    SiJavascript,
    SiMongodb,
    SiDjango, SiApachetomcat, SiFlutter,
} from "react-icons/si";
import {BsMicrosoft} from "react-icons/bs";

import {FaAndroid, FaAngular, FaAws, FaJava, FaLaravel, FaPython} from "react-icons/fa6";
import {TbBrandNextjs} from "react-icons/tb";
import {GrOracle} from "react-icons/gr";
import {DiDotnet} from "react-icons/di";
import {PiFileSqlBold} from "react-icons/pi";
import ScrollCarousel from "scroll-carousel-react";

const squareVariants = {
    visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
    hidden: {opacity: 0, scale: 0},
};

const Techs = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <div className='bg-white'>
            <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={squareVariants}
                className='flex flex-col  items-center justify-center w-full bg-white'
            >
                <h2 className="text-center text-4xl font-bold tracking-tight text-blue-950 sm:text-3xl mt-4">
                    Technology <span className='text-orange-600'>We</span> Use
                </h2>
                <div
                    className='grid grid-cols-3 md:grid-cols-6 items-center justify-center  w-[50] my-4 flex-wrap p-10  md:gap-3 md:p-12'>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <FaPython size={60} className='text-[#3372A2] '/>
                        <p className='text-md p-2 text-[#3979AA]'>Python</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <SiDjango size={60} className='text-[#143527] '/>
                        <p className='text-md m p-2 text-[#143527]'>Django</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <SiJavascript size={60} className='text-[#F7E02A] bg-black'/>
                        <p className='text-md p-2 text-gray-800'>JavaScript</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <FaNodeJs size={60} className='text-[#57A248] '/>
                        <p className='text-md p-2 text-[#57A248]'>Node.js</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <FaReact size={60} className='text-sky-500 '/>
                        <p className='text-md p-2 text-sky-500'>React</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <FaAndroid size={60} className='text-[#5CE089] '/>
                        <p className='text-md p-2 text-slate-500'>Android</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <TbBrandNextjs size={70} className='text-slate-700 '/>
                        <p className='text-md p-2 text-slate-700'>Next.js</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <FaAngular size={60} className='text-[#C53635] '/>
                        <p className='text-md p-2 text-[#C53635]'>Angular</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <FaJava size={60} className='text-[#3D84C5] '/>
                        <p className='text-md p-2 text-[#EC252D]'>Java</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <GrOracle size={60} className='text-[#ED250C] '/>
                        <p className='text-md p-2 text-[#ED250C]'>Oracle</p>
                    </div>

                    <div className='flex flex-col items-center justify-center m-4'>
                        <FaLaravel size={60} className='text-[#ED2E2B]'/>
                        <p className='text-md p-2 text-[#ED2E2B]'>Laravel</p>
                    </div>

                    <div className='flex flex-col items-center justify-center m-4'>
                        <DiDotnet size={60} className='text-[#3069AF] '/>
                        <p className='text-md p-2 text-[#3069AF]'>Microsoft .NET</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <SiFlutter size={60} className='text-[#5AC7F8] '/>
                        <p className='text-md p-2 text-[#5AC7F8]'>Flutter</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <SiApachetomcat size={60} className='text-[#E26233] '/>
                        <p className='text-md p-2 text-[#E26233]'>Apache Tomcat</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <PiFileSqlBold size={60} className='text-blue-950 '/>
                        <p className='text-md p-2 text-blue-950'>SQL</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <SiMongodb size={60} className='text-[#3B9555] '/>
                        <p className='text-md p-2 text-[#3B9555]'>MongoDB</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <BsMicrosoft size={60} className='text-[#50AEF0] '/>
                        <p className='text-md p-2 text-[#50AEF0]'>Microsoft IIS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center m-4'>
                        <FaAws size={60} className='text-[#2D3541] '/>
                        <p className='text-md p-2 text-[#F29B16]'>Amazon Web Server</p>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default Techs;
