import logo from "../../assets/logo_Mesa de trabajo 1.png"
import "../NavBar/NavBar.css"
import CarWidget from "../CarWidget/CarWidget"

const NavBar = () => {

    return (
        <nav>
            <div className="divLogo">
                <img className="logo" src={logo} alt="Logo de Dunkel Sports" />
            </div>
            <ul className="categorias">
                <li className="categoria">Todos</li>
                <li className="categoria">Hombres</li>
                <li className="categoria">Mujeres</li>
            </ul>
            <CarWidget/>
        </nav>
    )
}

export default NavBar