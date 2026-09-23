import "./About.css";

export default function About() {
  return (
    <section id="about" className="about reveal">
      <div className="about-intro">
        <span>Sobre o trabalho</span>
        <h2>Desenvolvimento com foco no problema, não só no código.</h2>
        <p>
          Sou Lucas Sperb, desenvolvedor Front-end / Full-stack Júnior.
          Transformo ideias e processos reais em interfaces modernas e
          aplicações web organizadas, responsivas e fáceis de usar.
        </p>
      </div>

      <div className="about-cards">
        <div>
          <strong>01</strong>
          <h3>Performance</h3>
          <p>Interfaces rápidas, responsivas e pensadas para uma boa experiência.</p>
        </div>
        <div>
          <strong>02</strong>
          <h3>Experiência</h3>
          <p>UI clara e moderna para reduzir atrito e facilitar cada interação.</p>
        </div>
        <div>
          <strong>03</strong>
          <h3>Escalabilidade</h3>
          <p>Arquitetura organizada para evoluir o projeto conforme o negócio cresce.</p>
        </div>
      </div>
    </section>
  );
}
