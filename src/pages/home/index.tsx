import { Link } from "react-router-dom"
//import ButtonFatec from "../../components/buttonfatec/ButtonFatec"
//import InputFatec from "../../components/inputFatec"

export default function Home() {
    return (
        <div>
            <hr />
            <Link to="/contato">Contato</Link>
            <hr />
            <Link to="/sobre">Sobre</Link>
            <hr />
            <Link to="/inicial">Página Inicial</Link>
            <hr />
            <Link to="/taref">Atividade</Link>
            <hr/>
            
        </div>
    )
}