import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1510851896000-498520af2236?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      <div className="absolute  sm:bg-transparent sm:from-white/95 sm:to-white/25 "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            Transforming business with innovative
            <strong className="block font-extrabold text-rose-600">
              {" "}
              Software Solutions.{" "}
            </strong>
          </h1>

          <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
            Our cutting-edge software empowers business to thrive in the digital
            age.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
