import { useState, useEffect } from 'react';

function Countdown(){

    //propiedades

    ///Segundos objetivos, conteo de los segundos
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(function(){
        if(targetSeconds === null) return;

        ////targetSeconds tiene un valor
        setElapsedSeconds(0);

        let interval = setInterval(function(){
            setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);

        },1000);


        return()=>{
            clearInterval(interval);
        }

    },[targetSeconds]);


    //funcion para capturar el valor
    function parseForm(ev){
        ev.preventDefault();
        let seconds = ev.target.seconds.value; //resivo el formulario que fue enviado
        setTargetSeconds(parseInt(seconds));

    }

    ////el stop
    if(elapsedSeconds > targetSeconds && targetSeconds !== null){
        return(
            <div>
                <p>Terminó el conteo</p>
                <button onClick={() => setTargetSeconds(null)} >Reinicar</button>
            </div>
            
        );
    }



    if(targetSeconds !== null){
        return(
            <p>Faltan {targetSeconds - elapsedSeconds} segundos</p>
        );
    }
    
    
    return(
        <div>
            <p>¿Cuántos segundos quieres contar?</p>
            <form action="#" onSubmit={ ev => parseForm(ev) } >
                <input type="number" name="seconds" />
                <button>Iniciar</button>
            </form>
        </div>
    )
}

export default Countdown;