"use strict";

import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {
        document.getElementById('otherInputs').innerHTML = '';

        if(e.target.value === 'rectangle'){
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
        e.preventDefault();
        const type = document.getElementById('select').value;

        if(type === 'rectangle'){
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;
            const rect = new Rectangle('Rectangle', width, height);
            document.getElementById("results").insertAdjacentHTML('beforeend', rect.htmlString);
        } else if(type === 'circle'){
            const radius = document.getElementById('radius').value;
            const circ = new Circle('Circle', radius);
            document.getElementById("results").insertAdjacentHTML('beforeend', circ.htmlString);
        } else if(type === 'square'){
            const size = document.getElementById('size').value;
            const squa = new Square('Square', size);
            document.getElementById("results").insertAdjacentHTML('beforeend', squa.htmlString);
        }
    }
};

form.init();