import React, {useState} from 'react';

const SquareComponent = () => {

    const red = getRandomInt();
    const green = getRandomInt();
    const blue = getRandomInt();
    
    const intialStyles = {
        backgroundColor: `rgb(0, 0, 0)`,
        width: 255,
        height: 255
    }

    const [styles, setStyles] = useState(intialStyles);

    function getRandomInt() {
        return Math.floor(Math.random() * 256);
    }

    function updateBackground() {
        setStyles({
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            width: 255,
            height: 255
        })
    }

    function backStyles() {
        setStyles(intialStyles);
    }

    return (
        <div onMouseEnter={updateBackground} onMouseLeave={backStyles} onDoubleClick={backStyles} style={styles}>

        </div>
    );
}

export default SquareComponent;
