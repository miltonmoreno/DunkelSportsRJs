import logo from "../../assets/logo_Mesa de trabajo 1.png"
import "../NavBar/NavBar.css"
import CarWidget from "../CarWidget/CarWidget"
import { NavLink, Link } from "react-router-dom" 

const NavBar = () => {

    return (
        <nav>
            <Link to="/" className="divLogo">
                <img className="logo" src={logo} alt="Logo de Dunkel Sports" />
            </Link>
            <ul className="categorias">
                <NavLink to="/category/ropa" className={ ( {isActive} ) => isActive ? "category-active" : "category"}>Ropa</NavLink>
                <NavLink to="/category/calzado" className={ ( {isActive} ) => isActive ? "category-active" : "category"}>Calzado</NavLink>
                <NavLink to="/category/accesorios" className={ ( {isActive} ) => isActive ? "category-active" : "category"}>Accesorios</NavLink>
            </ul>
            <CarWidget/>
        </nav>
    )
}

export default NavBar