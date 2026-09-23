import "./Skills.css";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "CSS", level: 90 },
  { name: "HTML5", level: 90 },
  { name: "Git & GitHub", level: 70 },
  { name: "Vite", level: 70 },
  { name: "Python / FastAPI", level: 65 },
  { name: "PostgreSQL", level: 60 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills reveal">
      <div className="section-heading">
        <span>Stack</span>
        <h2>Tecnologias que uso para construir produtos</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
