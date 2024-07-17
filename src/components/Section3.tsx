import Button from "./Button";

function Section3() {
    return (
        <div
            id="section3"
            className="px-10 sm:px-20 md:px-30 mx-auto lg:px-40 flex flex-col justify-center  py-[20px] "
        >
            <h1 className="mb-[50px] text-5xl text-center">
                We create healthy buildings
            </h1>
            <p className="mx-auto text-xl w-[70%] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                nunc justo sagittis suscipit ultrices. Images from Freepik
            </p>
            <div
                id="cards3"
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-9"
            >
                <div className="card w-full shadow-md p-7 flex flex-col gap-5 bg-white rounded-3xl">
                    <img
                        className="rounded-2xl h-[200px]"
                        src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150762.jpg"
                        alt=""
                    />
                    <h3 className="text-center text-2xl font-bold">Design</h3>
                    <p className="text-center">
                        Suspendisse vulputate eros in velit fermentum cursus.
                        Nulla fringilla justo tellus, at sodales eros laoreet a.
                        Quisque facilisis lorem augue, sit amet
                    </p>
                </div>
                <div className="card w-full shadow-md p-7 flex flex-col gap-5 bg-white rounded-3xl">
                    <img
                        className="rounded-2xl h-[200px]"
                        src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/low-angle-shot-arc-azadi-tower-t.jpg"
                        alt=""
                    />
                    <h3 className="text-center text-2xl font-bold">Design</h3>
                    <p className="text-center">
                        Suspendisse vulputate eros in velit fermentum cursus.
                        Nulla fringilla justo tellus, at sodales eros laoreet a.
                        Quisque facilisis lorem augue, sit amet
                    </p>
                </div>
                <div className="card w-full shadow-md p-7 flex flex-col gap-5 bg-white rounded-3xl">
                    <img
                        className="rounded-2xl h-[200px]"
                        src="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/brilliant-architectural-piece-sh.jpg"
                        alt=""
                    />
                    <h3 className="text-center text-2xl font-bold">Design</h3>
                    <p className="text-center">
                        Suspendisse vulputate eros in velit fermentum cursus.
                        Nulla fringilla justo tellus, at sodales eros laoreet a.
                        Quisque facilisis lorem augue, sit amet
                    </p>
                </div>
            </div>
            <div className="btn text-center py-10">
                <Button text="learn more" />
            </div>
        </div>
    );
}

export default Section3;
