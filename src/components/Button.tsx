import { IButton } from "../interface";

function Button(props: IButton) {
    return (
        <button className="uppercase px-6 py-2 border-2 border-red-400 text-red-400 rounded-full hover:bg-red-400 hover:text-white transition-colors duration-300">
            {props.text}
        </button>
    );
}

export default Button;
