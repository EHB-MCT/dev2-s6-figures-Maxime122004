"use strict";
//import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {
        document.getElementById('otherInputs').innerHTML = '';

        console.log('change', e.target.value);
        if(e.target.value === 'rectangle'){
            console.log("Rectangle selected");
            form.inputElementsWithLabel('width', 'width');
            form.inputElementsWithLabel('height', 'height');
        }
        else if(e.target.value === 'circle'){
            form.inputElementsWithLabel('radius', 'radius');
        }
        else if(e.target.value === 'square'){
            form.inputElementsWithLabel('size', 'size');
        }
    },
    init() {
        console.log('Form init!');
        document.getElementById('select').addEventListener('change', form.changeSelect);
        document.getElementById('form').addEventListener('submit', form.submitForm);
    },
    inputElementsWithLabel(label, id) {
        let htmlString = 
        `<label> ${label} 
        <input id="${id}" type="number">
        </label>`;
        document.getElementById('otherInputs').insertAdjacentHTML('beforeend', htmlString);
    },
    submitForm(e) {
        //console.log('submitForm!');
        e.preventDefault();
        const type = document.getElementById('select').value;
        //console.log(type);

        if(type === 'rectangle'){
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;
            const rect = new Rectangle('Rectangle', width, height);
            console.log(rect);
            console.log(rect.htmlString);
            document.getElementById("results").insertAdjacentHTML('beforeend', rect.htmlString);
        } else if(type === 'circle'){
            const radius = document.getElementById('radius').value;
            const circ = new Circle('Circle', radius);
            console.log(circ);
            console.log(circ.htmlString);
            document.getElementById("results").insertAdjacentHTML('beforeend', circ.htmlString);
        } else if(type === 'square'){
            const size = document.getElementById('size').value;
            const squa = new Square('Square', size);
            console.log(squa);
            console.log(squa.htmlString);
            document.getElementById("results").insertAdjacentHTML('beforeend', squa.htmlString);
        }

    }
};

form.init();