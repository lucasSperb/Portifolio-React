import "./Projects.css";

type Project = {
  type: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    type: "SaaS",
    title: "Sistema de Controle de Estoque e Vendas",
    subtitle: "Gestão de produtos, vendas e processos para pequenos negócios.",
    problem:
      "Centralizar estoque, produtos, clientes e vendas em uma interface simples e prática.",
    solution:
      "Sistema web com módulos de gestão, dashboard e arquitetura preparada para evoluir como produto por assinatura.",
    tech: ["React", "TypeScript", "FastAPI", "Python", "SQLAlchemy", "PostgreSQL"],
    image: "/img-dash-financeiro.png",
    demo: "#",
    github: "https://github.com/lucasSperb/estoque-pro",
  },
  {
    type: "Projeto Pessoal",
    title: "Dashboard Financeiro Pro",
    subtitle: "Controle financeiro visual para acompanhar receitas e despesas.",
    problem:
      "Transformar lançamentos financeiros em uma visão rápida de saldo, entradas, saídas e evolução.",
    solution:
      "Dashboard responsivo com estado global, máscara de moeda, gráficos e feedback visual para tornar o controle financeiro mais simples.",
    tech: ["React", "TypeScript", "Vite", "Zustand", "Recharts", "Framer Motion"],
    image: "/img-dash-react.png",
    demo: "https://dashboard-financeiro-react.vercel.app/",
    github: "https://github.com/lucasSperb/dashboard-financeiro-react",
  },
  {
    type: "Projeto Pessoal",
    title: "Habit Tracker",
    subtitle: "Acompanhamento de hábitos, streaks, metas e progresso.",
    problem:
      "Manter consistência e visualizar a evolução dos hábitos ao longo dos dias.",
    solution:
      "Aplicação com histórico persistente, metas semanais, ranking, progresso e microinterações para incentivar a continuidade.",
    tech: ["React", "TypeScript", "Vite", "Zustand", "Framer Motion", "Recharts"],
    image: "/img-habit.png",
    demo: "https://habit-tracker-kappa-ten.vercel.app/",
    github: "https://github.com/lucasSperb/habit-tracker",
  },
  {
    type: "Projeto Pessoal",
    title: "Convite de Aniversário Online",
    subtitle: "Convite digital responsivo e fácil de compartilhar.",
    problem:
      "Criar uma experiência de convite mais moderna do que um convite estático tradicional.",
    solution:
      "Página mobile-first com apresentação do evento, confirmação e experiência otimizada para compartilhamento.",
    tech: ["React", "TypeScript", "Vite", "CSS3", "Git & GitHub"],
    image: "/img-convite.png",
    demo: "https://convite-aniversario-topaz.vercel.app/",
    github: "https://github.com/lucasSperb/convite-aniversario",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects reveal">
      <div className="section-heading">
        <span>Projetos selecionados</span>
        <h2>Projetos que demonstram solução e produto</h2>
        <p>
          Mais do que mostrar tecnologias, cada projeto representa um problema
          transformado em uma experiência web funcional.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={`Preview do projeto ${project.title}`} />
              <span className="project-badge">{project.type}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              <div className="project-story">
                <div>
                  <strong>O Problema</strong>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <strong>A Solução</strong>
                  <p>{project.solution}</p>
                </div>
              </div>

              <div className="techs">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.demo !== "#" ? (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Ver demonstração ↗
                  </a>
                ) : (
                  <span className="project-unavailable">Em desenvolvimento</span>
                )}

                <a
                  className="github"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Código fonte
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
