import { UniversalFunction } from "./UniversalFunction.js";

export class Contact{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>Telefone</span>
                    <span><a href="tel:+55(11)911054439">+55(11)911054439</a></span>
                    <span class='keyword'>Email</span>
                    <span><a href="kaiquedt21@gmail.com">kaiquedt21@gmail.com</a></span>
                    <span class='keyword'>Whatsapp</span>
                    <span><a href="https://wa.me/+5511911054439 target="_blank">+5511911054439</a></span>
                    <span class='keyword'>Telegram</span>
                    <span><a href="https://t.me/jessemp3" target="_blank">@jessemp3</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}