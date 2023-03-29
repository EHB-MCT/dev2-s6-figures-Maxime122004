'use strict';

import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle{
    constructor(name, size){
        super(name);
        this.size = size;
    }
    get area(){
        return this.size * 4;
    }
    get circumference(){
        return this.size * this.size;
    }
    get htmlString(){
        return `<div class="result">
        <div class="figure rectangle" style="width: ${this.size}px; height: ${this.size}px; border: 2px black solid"></div>
        <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>${this.size} px</dd>
      
            <dt>Width</dt>
            <dd>${this.size} px</dd>
      
            <dt>Area</dt>
            <dd>${this.area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>
      </div>`;
    }
}