import "./Hero.css";
import { useEffect, useState } from "react";
import { highlightAndScroll } from "../../utils/scroll";

const whatsappUrl =
  "https://wa.me/5551995157275?text=Olá%20Lucas,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20orçamento.";

export default function Hero() {
  const text = "Desenvolvimento Web & Sistemas Personalizados";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = window.setInterval(() => {
      setDisplayText(text.slice(0, i));
      i += 1;

      if (i > text.length) {
        window.clearInterval(typing);
      }
    }, 45);

    return () => window.clearInterval(typing);
  }, []);

  return (
    <section id="hero" className="hero reveal">
      <div className="hero-content">
        <span className="hero-eyebrow">Lucas Sperb · Front-end / Full-stack Júnior</span>

        <h1>
          {displayText}
          <span className="cursor">|</span>
        </h1>

        <p className="hero-description">
          Crio sites, dashboards e sistemas web modernos para transformar
          necessidades reais do negócio em soluções rápidas, responsivas e
          fáceis de usar.
        </p>

        <div className="hero-tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>Python</span>
        </div>

        <div className="hero-buttons">
          <a className="hero-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Solicitar orçamento
          </a>

          <button
            className="outline"
            onClick={() => highlightAndScroll("projects")}
          >
            Ver projetos
          </button>
        </div>

        <div className="hero-proof">
          <span>⚡ Interfaces modernas</span>
          <span>▣ Sistemas personalizados</span>
          <span>✓ Foco em resultado</span>
        </div>
      </div>

      <div className="hero-glow" />
      <div className="hero-grid" />
    </section>
  );
}
