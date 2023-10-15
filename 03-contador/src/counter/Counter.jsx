import { useState } from "react"; //funcion que servira para el ciclo

function Counter(){
    //estado del componente
    const [contador, setContador] = useState(0);
    return(
        <div>
            <p>
                Haz hecho clic {contador} veces a este botón
            </p>
            <button onClick={ ()=>{ setContador(contador +1) } }>Incrementa</button>
        </div>
    );
}

export default Counter;