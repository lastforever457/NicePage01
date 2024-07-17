import { INavbar } from "../../interface";

function Navigation({ name }: Pick<INavbar, "name">) {
    return (
        <li className="list-group-item">
            <button className="hover:bg-red-400 hover:text-white py-1 px-3 text-black">
                {name}
            </button>
        </li>
    );
}

export default Navigation;
