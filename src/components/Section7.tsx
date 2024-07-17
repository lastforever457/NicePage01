import React from "react";
import Button from "./Button";

const Section7: React.FC = () => {
    return (
        <div className="px-10 sm:px-20 md:px-30 mx-auto lg:px-40 py-16">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 text-center mb-12">
                <div className="">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        We create unique, singular spaces
                    </h2>
                </div>
                <div className="">
                    <p className="text-gray-600 mt-4 mb-8">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="bg-transparent text-pink-500 border border-pink-500 rounded-full px-6 py-2 hover:bg-pink-500 hover:text-white transition duration-300">
                        LEARN MORE
                    </button>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center gap-9 items-center">
                <div className="bg-pink-100 p-10 rounded-[30px] shadow-md">
                    <div>
                        <img
                            className="rounded-[30px] object-cover"
                            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/23.jpg"
                            alt="Sample 1"
                            style={{
                                minHeight: "400px",
                            }}
                        />
                    </div>
                    <h3 className="text-5xl py-5 font-semibold mt-4">
                        Sample Headline
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Sample text. Click to select the Text Element.
                    </p>
                    <Button text="learn more" />
                </div>
                <div className="bg-pink-100 p-10 rounded-[30px] shadow-md">
                    <div>
                        <img
                            className="rounded-[30px] object-cover"
                            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/low-angle-shot-modern-building-w.jpg"
                            alt="Sample 2"
                            style={{
                                minHeight: "400px",
                            }}
                        />
                    </div>
                    <h3 className="text-5xl py-5 font-semibold mt-4">
                        Sample Headline
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Sample text. Click to select the Text Element.
                    </p>
                    <Button text="learn more" />
                </div>
            </div>
        </div>
    );
};

export default Section7;
