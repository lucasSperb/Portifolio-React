import "./About.css";

export default function About() {
  return (
    <section id="about" className="about reveal">
      <h2>Sobre mim</h2>

      <p>
        Desenvolvedor focado em criar aplicações modernas com React, integradas
        a APIs e pensadas para performance e usabilidade.
      </p>

      <div className="about-cards">
        <div>
          <h3>Performance</h3>
          <p>Interfaces rápidas e otimizadas</p>
        </div>

        <div>
          <h3>UI/UX</h3>
          <p>Experiência moderna e intuitiva</p>
        </div>

        <div>
          <h3>Integração</h3>
          <p>Conexão com APIs e sistemas reais</p>
        </div>
      </div>
    </section>
  );
}