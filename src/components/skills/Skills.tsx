import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Git & GitHub", level: 70 },
    { name: "Vite", level: 70 },
    { name: "CSS", level: 90 },
    { name: "HTML5", level: 90 }
  ];

  return (
    <section id="skills" className="skills reveal">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}