import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact reveal">
      <h2>Contato</h2>

      <div className="contact-card">
        <p>Email: lucas305.sperb@gmail.com</p>

        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/lucasSperb" target="_blank">
            linkedin.com/in/lucasSperb
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a href="https://github.com/lucasSperb" target="_blank">
            github.com/lucasSperb
          </a>
        </p>

        <p>
          WhatsApp:{" "}
          <a href="https://wa.me/5551995157275" target="_blank">
            Lucas Sperb
          </a>
        </p>
      </div>
    </section>
  );
}