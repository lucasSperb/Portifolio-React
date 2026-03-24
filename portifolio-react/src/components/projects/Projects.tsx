import "./Projects.css";

const projects = [
  {
    title: "Convite de Aniversário Online",
    desc: "Aplicação web para criação e exibição de convites de aniversário digitais, com layout responsivo e design moderno. Desenvolvida em React, permitindo fácil compartilhamento e personalização do evento.",
    tech: ["React", "TypeScript", "Vite", "CSS3", "Git & GitHub"],
    image: "./src/images/img-convite.png",
    demo: "https://convite-aniversario-topaz.vercel.app/",
    github: "https://github.com/lucasSperb/convite-aniversario"
  },
  {
    title: "Dashboard Financeiro",
    desc: "Dashboard financeiro para controle de receitas e despesas, com visualização clara de saldo e dados financeiros. Desenvolvido em React com foco em performance e experiência do usuário.",
    tech: ["React", "TypeScript", "Vite", "CSS3", "Git & GitHub"],
    image: "./src/images/img-dash-financeiro.png",
    demo: "https://lista-tarefas-react-eight.vercel.app/",
    github: "https://github.com/lucasSperb/dashboard-financeiro"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects reveal">
      <h2>Projetos</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">

            <img src={p.image} alt={p.title} />

            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="techs">
                {p.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>

            <div className="project-overlay">
              <div className="buttons">
                <button onClick={() => window.open(p.demo, "_blank")}>
                  Ver Projeto
                </button>

                <button
                  className="github"
                  onClick={() => window.open(p.github, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}