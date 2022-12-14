import React, { useState, useEffect } from 'react'

const Clock = () => {
    
    const datosIniciales = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Toni',
        apellidos: 'García'
    };

    const [datos, setDatos] = useState(datosIniciales);

    function tick() {
        setDatos((datosIniciales) => {
            let edad = datosIniciales.edad + 1;
            return {
                ...datosIniciales,
                fecha: new Date(),
                edad
            };
        });
    }

    useEffect(() => {
        // Cuando se crea el componente pasa esto (ComponentDidMount):
        const timerID = setInterval (
            () => tick(), 1000
        );

        return () => {
            // Cuando el componente va a desaparecer pasa esto (ComponentWillUnmount):
            clearInterval (timerID);
        };
    }, []);
    
    return (
        <div>
            <h2>
                Hora Actual:
                {datos.fecha.toLocaleTimeString()}
            </h2>
            <h3>{datos.nombre} {datos.apellidos}</h3>
            <h1>Edad: {datos.edad}</h1>
        </div>
    );
};

export default Clock;