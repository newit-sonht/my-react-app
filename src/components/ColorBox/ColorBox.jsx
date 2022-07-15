import React, { useState } from 'react';
import './ColorBox.scss';

function getRandomColor() {
    const COLOR_LIST = [
        'blue','deeppink','lightgreen',
        'yellow','red','coral','purple'];
    const radomIndex = Math.trunc(Math.random() * 7);
    return COLOR_LIST[radomIndex];
}

function ColorBox() {
    const [color,setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink';
        return initColor;
    });

    function handleColorBox(){
        // get random color
        const newColor = getRandomColor();
        // set color
        setColor(newColor);
        // save it to storage
        localStorage.setItem('box-color',newColor);
    }
    
    return (
        <div className="color-box"
            style={{ background:color }}
            onClick={handleColorBox}>
        </div>
    );
}

export default ColorBox;