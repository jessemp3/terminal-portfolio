import { UniversalFunction } from "./UniversalFunction.js";

export class Projects {
    toString(){
        return `<p class="two-col">

                <span class='keyword'>Package qrcode-generator</span>
                <span><a href="https://www.npmjs.com/package/qrcode-password-generator" target="_blank">qrcode-generator</a></span>
                 
                <span class='keyword'>AgeOS</span>
                <span><a href="https://github.com/AgeOS/AgeOs" target="_blank">AgeOS</a></span>

                <span class='keyword'>Buscador de CEP's</span>
                <span><a href="https://github.com/jessemp3/BuscadorDeCep" target="_blank">Buscador de CEP's</a></span>

                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}