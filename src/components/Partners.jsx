import {useEffect} from "react";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

import ScrollCarousel from "scroll-carousel-react";



const Partners = () => {

    return (
        <div className='bg-white p-10'>
                <h2 className="text-center text-4xl font-bold tracking-tight text-blue-950 sm:text-3xl mt-4 mb-10">
                    Our Key <span className='text-orange-600'>Partners</span>
                </h2>
            <div className='mt-10'>
                <ScrollCarousel
                autoplay
                autoplaySpeed={5}
                speed={5}
                margin={20}
                onReady={() => console.log("I am ready")}
            >
                <div
                    className="rounded">
                    <img className='h-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbKK-e4QUogLpHX6SppvdlnUhOAi-ZrzaeZgJuSyluw&s" alt="" />
                </div>
                <div
                    className="rounded">
                    <img src="https://media.licdn.com/dms/image/C510BAQG1GGAKDKBDgQ/company-logo_200_200/0/1630616579634?e=2147483647&v=beta&t=_DS4hz_xy4I9ac6hSJucmJH0qS4Xe2fRSqA4LnoAyoU" alt="" />
                </div>
                <div
                    className="rounded">
                    <img src="https://media.licdn.com/dms/image/C560BAQERGSDuXrjXxw/company-logo_200_200/0/1677781792974?e=2147483647&v=beta&t=dtpPJjrlYg-XQF18Q2EY_kuvcBlim8xZl-qTRlr7ANc" alt="" />
                </div>
                <div
                    className="rounded">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG2kSY-MC1xNkOmkIbI5TYG0yYHJnypTVFud4_uFB_g&s" alt="" />
                </div>
                <div
                    className="rounded">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5sy8nJNM0wPqaB87HakLL2hr0_3lkqrvlph9fvJwJQ&s" alt="" />
                </div>


            </ScrollCarousel></div>


        </div>
    );
};

export default Partners;

