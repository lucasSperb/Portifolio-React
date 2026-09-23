import "./Services.css";

const services = [
  {
    icon: "01",
    title: "Landing Pages & Sites Institucionais",
    description:
      "Páginas rápidas, responsivas e pensadas para apresentar sua marca e transformar visitantes em clientes.",
  },
  {
    icon: "02",
    title: "Dashboards & Painéis Administrativos",
    description:
      "Interfaces claras para acompanhar indicadores, vendas, finanças, estoque e outras informações importantes.",
  },
  {
    icon: "03",
    title: "Sistemas Web Personalizados",
    description:
      "Soluções sob medida com CRUDs, autenticação, integrações e fluxos adaptados ao processo do seu negócio.",
  },
  {
    icon: "04",
    title: "Manutenção & Otimização Web",
    description:
      "Correção de bugs, responsividade, melhorias de performance e evolução de aplicações já existentes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services reveal">
      <div className="section-heading">
        <span>O que eu faço</span>
        <h2>Soluções digitais para o seu negócio</h2>
        <p>
          Do primeiro layout à aplicação completa, desenvolvo experiências
          digitais com foco em clareza, performance e resultado.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-number">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
