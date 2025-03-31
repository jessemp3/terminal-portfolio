import { UniversalFunction } from "./UniversalFunction.js";

export class About{
    toString(){
        return `<p>Oi, eu sou o kaique ou o jesse,como queira ,Tenho 20 anos e sou um Desenvolvedor Full Stack e estudante de cibersegurança, atualmente estou estudando Análise e Desenvolvimento de Sistemas. Além disso sou um bom leitor , colecionando livros na sua maior parte de tecnologia é claro sksks e também sou um amante de fotografia analógica e esse é um pouco do meu gosto musical:
        </br>
        </br>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/33dNgOJoTWS2Iv2goiQ1aO?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </p>`;
    }
    
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}