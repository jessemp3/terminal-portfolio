import { UniversalFunction } from "./UniversalFunction.js";

export class Resume{
    constructor(options){
        this.options = options;
        this.parseCommand();
    }

    parseCommand(){
        if(this.options === ""){
            this.displayResume();
            return;
        }
        let parts = this.options.split(" ");
        if(parts.length > 2){
            let errMsg = `resume: too many arguments.<br>type 'resume --help' for help.`;
            new UniversalFunction().updateElement("div", "error", errMsg);
            return;
        }
        switch(parts[0]){
            case "--download":
                this.downloadResume(parts.slice(1).toString().trim());
                break;
            case "--help":
                this.help();
                break;
            default:
                let errMsg = `resume: '${parts[0]}' is not a valid argument.<br>type 'resume --help' for help.`;
                new UniversalFunction().updateElement("div", "error", errMsg);
                break;
        }
    }

    downloadResume(format){
        if(format === "" || format === "pdf") this.downloadFile("KAIQUEALVES.pdf");   
        else{
            let errMsg = `resume: '${format}' is not a valid format.<br>type 'resume --help' for help.`;
            new UniversalFunction().updateElement("div", "error", errMsg);
            return;
        }
    }

    downloadFile(fileName){
        const link = document.createElement("a");
        link.href = `assets/resume/${fileName}`;
        link.setAttribute("download", fileName);
        link.click();
        // free memory
        URL.revokeObjectURL(link.href);
        link.remove();
    }

    help() {
        let outMsg = `resume: Displays or download my resume.<br>
        usage: resume [option]<br>
        options:<br>
        --download to download my resume in format .pdf .<br>
        --help shows this help message.<br>
        type 'resume' to display my resume.`;
        new UniversalFunction().updateElement("div", "output", outMsg);
    }

getHeader(){
        return `<div class="header">
        <h1>Kaique Alves da Silva</h1><hr>
        <p>
            <span>Nacionalidade: Brasileira | </span>
            <span>Data de Nascimento: 25/11/2004 | </span>
            <span>Centro - São Paulo/SP, 01050-020 | </span>
            <span><a href="tel:+5511911054439">(11) 91105-4439</a> | </span>
            <span><a href="mailto:kaiquedt21@gmail.com">kaiquedt21@gmail.com</a> | </span>
            <span><a href="https://www.linkedin.com/in/kaique-alves" target="_blank">LinkedIn</a> | </span>
            <span><a href="https://github.com/kaiquealves" target="_blank">GitHub</a></span>
        </p><hr>
        </div>`;
    }

getMessage(){
    return `<div class="objective">
        <div>
            <h2>OBJETIVO</h2><hr>
        </div>
        <p>Buscando posição que me permita aplicar e expandir conhecimentos em arquitetura de software, metodologias ágeis e múltiplas tecnologias modernas para criar produtos inovadores e de alta qualidade. Experiência com diversas stacks de desenvolvimento e comprometido com a entrega de soluções robustas e escaláveis.</p>
    </div>`;
}

getLanguages(){
       return ` <div class="languages">
            <div>
            <h2>IDIOMAS</h2><hr>
            </div>  
            <ul>
                <li>Português - nativo</li>
                <li>Inglês - Intermediário</li>
             </ul>
        </div>
`
}

    getEducation(){
        return `<div class="education">
            <div>
                <h2>FORMAÇÃO ACADÊMICA</h2><hr>
            </div>
            <div class="education-item">
                <strong>Universidade Anhaguera</strong>  <strong>São Paulo, Brasil</strong>
                <p>Análise e Desenvolvimento de Sistemas – EAD</p>  <p>03/2024–atual</p>
                <p>Carga horária total: 2000h +</p>
            </div>
        </div>`;
    }

    getProfessionalExperience(){
        return `<div class="professional-experience">
            <div>
                <h2>EXPERIÊNCIA PROFISSIONAL</h2><hr>
            </div>
            <div class="professional-experience-item">
                <strong>
                     Esfiha Imigrantes
                    </strong> 
                <strong>São Paulo, Brasil</strong>
                <p><strong>Atendimento ao cliente, administração de logística e administração de cupons fiscais</strong></p>
                <p>09/12/2022–08/12/2024</p>
                <ul>
                    <li>Atendimento ao cliente, resolução de problemas</li>
                    <li>Administração de logística via ifood/uber/lalamove</li>
                    <li>Atualizações de software, administração de cupons fiscais</li>
                </ul>
            </div>
            <div class="professional-experience">
                 <div class="professional-experience-item2">
                <strong>
                     Forte Regulações
                    </strong> 
                <strong>São Paulo, Brasil</strong>
                <p><strong>Estágio em Analise da Dados</strong></p>
                <p>27/01/2025–25/03/2025</p>
                <ul>
                    <li>Administração de Softwares internos</li>
                    <li>Criação de macro e vba'a para automoção</li>
                    <li>Utilização de Javascrit para automoções</li>
                    <li>Administração de planilhas exel</li>
                    <li>Power Bi</li>
                </ul>
            </div>
            </div>
`;
    }

    getProjects(){
        return `<div class="projects">
            <div>
                <h2>PROJETOS</h2><hr>
            </div>
            <div class="projects-item">
                <strong>Demo Day - AgeOs | 
                    <a href="https://github.com/kaiquealves/AgeOs" target="_blank">[GitHub]</a>
                </strong>
                <ul>                  
                    <li>Custom rom para telefones androids, que visa <strong>facilitar a navegação de pessoas idosas</strong> com segurança reforçada contra golpes</li>
                </ul>
            </div>
            <div class="projects-item">
                <strong>Buscador de CEP | PHP | 
                    <a href="https://github.com/kaiquealves/BuscadorDeCep" target="_blank">[GitHub]</a>
                </strong>
                <ul>
                    <li>BuscadorDeCep é uma biblioteca PHP para <strong>busca de CEPs</strong> (Códigos de Endereçamento Postal) no Brasil</li>
                </ul>
            </div>
        </div>`;
    }
    
    getSkills(){
        return `<div class="skills">
            <div>
                <h2>CONHECIMENTOS TÉCNICOS</h2><hr>
            </div>
            <ul>
                <li><strong>UI/UX:</strong> Canva, Figma</li>
                <li><strong>Front End:</strong> HTML, CSS, JavaScript, TypeScript, ReactJs, NextJs, Laravel</li>
                <li><strong>Estilização:</strong> Sass, Bootstrap, Tailwind & Styled-components</li>
                <li><strong>Back end:</strong> NodeJs, PHP, Jest (Testes)</li>
                <li><strong>Banco de dados:</strong> MongoDb, MySql & PostgreSql</li>
                <li><strong>Mobile:</strong> React-native</li>
            </ul>
        </div>`;
    }

    getAchievementsAndCertifications(){
        return `<div class="achievements-and-certifications">
            <div>
                <h2>CURSOS E CERTIFICAÇÕES</h2><hr>
            </div>
            <ul>
                <li>
                    <strong>Instituto Proa</strong> – 6/2024 a 12/2024
                    <p>Desenvolvimento Web Java</p>
                    <p>Conteúdo Técnico com Certificação Senac - Carga horária total: 440h</p>
                </li>
                <li>
                    <strong>Onebitcode</strong> – 08/2023 a 02/2024
                    <p>Desenvolvimento Full Stack em Javascript</p>
                    <p>Carga horária total: 200h+</p>
                </li>
                <li>
                    <strong>DIO</strong> – 11/2024 a 01/2025
                    <p>PHP experience</p>
                    <p>Carga horária total: 50h+</p>
                </li>
                <li>
                    <strong>Cisco</strong> – 01/2025 a 01/2025
                    <p>Introdução a cibersegurança</p>
                </li>
                <li>
                    <strong>Solyd</strong> – 10/2024 a 01/2025
                    <p>Hacking e pentester</p>
                </li>
            </ul>
        </div>`;
    }
    toString(){
        return `${this.getHeader()}
        ${this.getMessage()}
        ${this.getLanguages()}
        ${this.getEducation()}
        ${this.getAchievementsAndCertifications()}
        ${this.getProfessionalExperience()}
        ${this.getSkills()}
        ${this.getProjects()}
        `;
    }
    displayResume(){
        new UniversalFunction().updateElement("div", "output resume", this.toString());
        new UniversalFunction().updateElement("div", "output", 
            `<p>Use <em>resume --download [filetype]</em> to download above resume in the specified format.</p>`
        );
    }
}
