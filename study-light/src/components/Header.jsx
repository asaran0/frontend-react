import { Link } from "react-router-dom";
import { AppConst } from "../AppConst";

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">{AppConst.APP_NAME}</Link>
        </header>
    )
}