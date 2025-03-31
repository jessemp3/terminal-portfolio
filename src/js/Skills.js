import { UniversalFunction } from "./UniversalFunction.js";

export class Skills{
    toString(){
        return `
                <p>Estou trabalhando nisso :) </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}