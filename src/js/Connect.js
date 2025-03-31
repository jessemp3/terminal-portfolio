import { UniversalFunction } from "./UniversalFunction.js";

export class Connect{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>GitHub</span>
                    <span><a href="https://github.com/jessemp3" target="_blank">github.com/jessemp3</a></span>
                    <span class='keyword'>LinkedIn</span>
                    <span><a href="https://www.linkedin.com/in/kaique-alves-/" target="_blank">linkedin.com/in/kaique-alves-/</a></span>
            
                     <span class='keyword'>tryhackme</span>
                    <span><a href="https://tryhackme.com/p/jessemp3" target="_blank">tryhackme.com/p/jessemp3</a></span>
            
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}