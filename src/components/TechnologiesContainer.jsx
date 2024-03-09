import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    customText:
      "Estruturação de páginas web semânticas e acessíveis, utilizando as melhores práticas e seguindo os padrões W3C.",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    customText:
      "Domínio de técnicas avançadas de layout, como flexbox e grid, para criar designs modernos e intuitivos.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    customText:
      "Desenvolvimento de aplicações web interativas e dinâmicas, utilizando as últimas APIs e frameworks.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    customText: "Utilização de frameworks populares como Express e NestJS.",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: <DiMysql />,
    customText:
      "Escrever consultas SQL complexas e eficientes para recuperar e manipular dados.",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    customText:
      "Utilização de componentes reutilizáveis e estado local para facilitar a manutenção e o desenvolvimento.",
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.customText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
