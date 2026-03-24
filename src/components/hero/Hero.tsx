import "./Hero.css";
import { useEffect, useState } from "react";
import { highlightAndScroll } from "../../utils/scroll";

export default function Hero() {
  const text = "Desenvolvedor Frontend";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(typing);
    }, 70);

    return () => clearInterval(typing);
  }, []);

  return (
    <section id="hero" className="hero reveal">
      
      <div className="hero-content">
        
        <h1>
          {displayText}
          <span className="cursor">|</span>
        </h1>

        <p>
          Desenvolvo interfaces modernas integradas a APIs, com foco em
          performance, usabilidade e experiência real do usuário.
        </p>

        <div className="hero-tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>APIs</span>
          <span>UI/UX</span>
        </div>

        <div className="hero-buttons">
          
          <button onClick={() => highlightAndScroll("projects")}>
            Ver Projetos
          </button>

          <button
            className="outline"
            onClick={() => highlightAndScroll("contact")}
          >
            Contato
          </button>

        </div>

      </div>

      <div className="hero-glow"></div>

    </section>
  );
}