import Button from "./Button";

function Section1() {
    return (
        <div className="px-10 sm:px-20 md:px-30 mx-auto lg:px-40 pt-[50px] pb-[70px] my-[20px] ">
            <h1 className="mb-[50px] text-6xl text-center">
                Designing spaces that inspire
            </h1>
            <p className="text-xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                nunc justo sagittis suscipit ultrices. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </p>
            <div className="btn text-center py-10">
                <Button text="learn more" />
            </div>
        </div>
    );
}

export default Section1;
