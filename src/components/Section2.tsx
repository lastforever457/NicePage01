import Button from "./Button";

function Section2() {
    return (
        <div className="px-10 sm:px-20 md:px-30 mx-auto lg:px-40 bg-[#FBECED]">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
                <div className="left p-10">
                    <div className="card bg-white rounded-[30px]">
                        <img
                            className="card-img-top object-cover w-full h-[300px] rounded-t-[30px]"
                            src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/city235.jpg"
                            alt=""
                        />
                        <div className="card-body">
                            <h5 className="card-title p-5 text-center font-bold text-2xl">
                                Bankside Yards
                            </h5>
                            <p className="card-text text-center pb-5">
                                Sample text. Click to select the Text Element.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right p-10 flex flex-col justify-around sm:gap-5">
                    <h1 className="text-5xl">High-performance design</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <Button text="Learn More" />
                </div>
            </div>
        </div>
    );
}

export default Section2;
