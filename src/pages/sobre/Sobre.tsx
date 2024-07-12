import React, { useState } from "react";
import "./Sobre.css";


interface TeamMember {
  name: string;
  imgSrc: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Carol Cruz",
    imgSrc: "https://avatars.githubusercontent.com/u/145583444?v=4",
    description: "Carol Cruz é uma desenvolvedora dedicada com experiência em frontend."
  },
  {
    name: "Ericles Piana",
    imgSrc: "https://avatars.githubusercontent.com/u/64580059?v=4",
    description: "Ericles Piana é especialista em backend, focado em soluções escaláveis."
  },
  {
    name: "Gabriella",
    imgSrc: "https://avatars.githubusercontent.com/u/56032518?v=4",
    description: "Gabriella é uma engenheira de software com paixão por design e UX."
  },
  {
    name: "James",
    imgSrc: "https://avatars.githubusercontent.com/u/165435440?v=4",
    description: "James tem forte habilidade em DevOps e infraestrutura de TI."
  },
  {
    name: "Kelton",
    imgSrc: "https://avatars.githubusercontent.com/u/85134493?v=4",
    description: "Kelton é um desenvolvedor full-stack com grande interesse em novas tecnologias."
  },
  {
    name: "Weslley",
    imgSrc: "https://avatars.githubusercontent.com/u/146263785?v=4",
    description: "Weslley é um talentoso desenvolvedor de software com foco em segurança."
  },
  {
    name: "Nathalia",
    imgSrc: "https://avatars.githubusercontent.com/u/148877585?v=4",
    description: "Nathalia é uma front-end de grande respeito com foro em design ux"
  }
];

function Sobre() {
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="justificando">
        <div className="h-screen ">
          <div className="pl-14 text-2xl mb-4">
            <h2>Sobre nós</h2>
          </div>
          <div className="flex pl-14 pr-14">
            <div className="w-4/5 text-justify">
              <p>
                O projeto "Jornada Limpa" é uma iniciativa voltada para os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, com o objetivo de conscientizar as pessoas sobre a importância de reduzir a dependência de substâncias nocivas. Nosso foco é estabelecer uma conexão mais significativa entre usuários e provedores de serviços de e-commerce, promovendo um ambiente online seguro e educacional.
              </p>
              <br />
              <p>
                Em geral, buscamos trazer com a tecnologia soluções para problemas nacionais e mundiais com apoio nosso e da comunidade. Desse modo, nosso time busca constantemente crescer e se unir cada vez mais no combate contra as dependências e vícios.
              </p>
            </div>
            <div className="imagem">
             
            </div>
          </div>
        </div>
      </div>

      <section className="segunda">
        <div className="w-1/2 mb-4">
          <h2 className="text-white text-4xl">Quem somos?</h2>
        </div>

        <div className="avatar">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="avatar-item"
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img src={member.imgSrc} alt={member.name} />
            </div>
          ))}
        </div>

        <div className={`member-info ${hoveredMember ? "visible" : ""}`}>
          {hoveredMember && (
            <>
              <h3 className="name">{hoveredMember.name}</h3>
              <p className="description">{hoveredMember.description}</p>
            </>
          )}
        </div>


      
      </section>

    </>
  );
}

export default Sobre;