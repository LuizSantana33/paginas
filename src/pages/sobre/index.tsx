import { Link } from "react-router-dom" // npm i react-router-dom

export default function Sobre() {
    return (
        <>
            <h1>Sobre</h1>
            <div>
                Desenvolvido por Luiz Fernando Santos Santana.
                Em 03/06/2024
            </div>
            <Link to="/">Voltar para Home</Link>
        </>
    )
}