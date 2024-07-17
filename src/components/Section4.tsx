import Button from "./Button";

function Section4() {
    return (
        <div
            id="section4"
            className="px-10 sm:px-20 md:px-30 mx-auto lg:px-40 py-[100px]"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-start gap-4">
                    <h2 className="text-4xl font-bold mb-4">Why Us</h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <Button text="Learn More" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((index) => (
                        <div key={index} className="border rounded-[35px] p-5">
                            <h3 className="text-xl font-semibold mb-2">
                                Sample Headline
                            </h3>
                            <p className="mb-4">
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris.
                            </p>
                            <Button text="more" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Section4;
