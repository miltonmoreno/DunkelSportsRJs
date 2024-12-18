import "./Loading.css"
import { PropagateLoader } from "react-spinners"

const Loading = () => {

    return (
        <>
            <div className="loadingContainer">
                <h2>Cargando ...</h2>
                <PropagateLoader color="#4648C9" />
            </div>
        </>
    )
}

export default Loading