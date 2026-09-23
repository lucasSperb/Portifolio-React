import "./Contact.css";

const whatsappUrl =
  "https://wa.me/5551995157275?text=Olá%20Lucas,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20orçamento.";

export default function Contact() {
  return (
    <section id="contact" className="contact reveal">
      <div className="contact-inner">
        <div>
          <span className="contact-label">Vamos conversar?</span>
          <h2>Tem uma ideia ou precisa melhorar seu sistema?</h2>
          <p>
            Me conte o que você precisa. Posso transformar sua necessidade em
            uma solução web moderna e personalizada.
          </p>
        </div>

        <a className="contact-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Falar pelo WhatsApp ↗
        </a>
      </div>

      <div className="contact-links">
        <a href="mailto:lucas305.sperb@gmail.com">lucas305.sperb@gmail.com</a>
        <a href="https://www.linkedin.com/in/lucas-sperb-779a5a243/?isSelfProfile=true" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/lucasSperb" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span>© {new Date().getFullYear()} Lucas Sperb</span>
      </div>
    </section>
  );
}
