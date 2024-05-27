import React from 'react'

const Faq = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    <div className="space-y-4">
                        <details
                            className="group [&_summary::-webkit-details-marker]:hidden"
                            open
                        >
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                                <h2 className="font-medium">What is the software?</h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                The software is a powerful tool that helps streamline
                                business processes and increase productivity.
                            </p>
                        </details>
                        <details
                            className="group [&_summary::-webkit-details-marker]:hidden"
                            open
                        >
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                                <h2 className="font-medium">How can I get started?</h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                To get started, simply sign up for a free trial and explore
                                all the features and benefits.
                            </p>
                        </details>
                        <details
                            className="group [&_summary::-webkit-details-marker]:hidden"
                            open
                        >
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                                <h2 className="font-medium">Is the software secure?</h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                Yes, we prioritize the security of your data and have
                                implemented robust measures to protect it.
                            </p>
                        </details>
                        <details
                            className="group [&_summary::-webkit-details-marker]:hidden"
                            open
                        >
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                                <h2 className="font-medium">
                                    Can I customize the software?
                                </h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                Absolutely! Our software is highly customizable to fit the
                                unique needs of your business.
                            </p>
                        </details>

                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                                <h2 className="font-medium">Do you offer support?</h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                Yes, we provide 24/7 customer support to assist you with any
                                questions or issues you may have.
                            </p>
                        </details>
                    </div>
                </div>

                <div className="lg:py-24">
                    <h2 className="text-3xl font-bold sm:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Find answers to common questions about our software to help you
                        make informed decisions.
                    </p>

                    {/* <a
                href="#"
                className="mt-8 inline-block rounded bg-green-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Contact Us
              </a> */}
                </div>
            </div>
        </div>
    )
}
export default Faq
