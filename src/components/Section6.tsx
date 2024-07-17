import React from "react";

const testimonials = [
    {
        name: "CELIA ALMEDA",
        text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    },
    {
        name: "FRANK KINNEY",
        text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    },
    {
        name: "SAM PERRY",
        text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    },
];

const Section6: React.FC = () => {
    return (
        <div className="px-10 sm:px-20 md:px-30 mx-auto lg:px-40 bg-[#FBECED] py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-4xl font-bold text-center mb-12">
                    Read what our customers say
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-[30px] shadow-md w-full md:w-1/3"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="bg-pink-200 p-3 rounded-full">
                                    <img
                                        className="w-9 h-9 text-pink-600"
                                        src="data:image/png;base64,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"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <p className="text-center text-gray-700 mb-4">
                                {testimonial.text}
                            </p>
                            <p className="text-center font-bold">
                                {testimonial.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section6;
