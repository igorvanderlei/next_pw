'use client';
import { listarClientes, sayHello } from "../lib/funcoes";

export default function Botao () {


    return ( <button 
                className="btn btn-primary"
                onClick={() => listarClientes().then((response) => {console.log(response)})}
             >
                Click me
            </button>
    );
}