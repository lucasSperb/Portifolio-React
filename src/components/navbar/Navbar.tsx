import "./Navbar.css";
import { highlightAndScroll } from "../../utils/scroll";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id") ?? "";
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // executa ao carregar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h2 onClick={() => highlightAndScroll("hero")}>
        Lucas Sperb
      </h2>

      <ul>
        <li
          className={active === "about" ? "active" : ""}
          onClick={() => highlightAndScroll("about")}
        >
          Sobre
        </li>

        <li
          className={active === "skills" ? "active" : ""}
          onClick={() => highlightAndScroll("skills")}
        >
          Skills
        </li>

        <li
          className={active === "projects" ? "active" : ""}
          onClick={() => highlightAndScroll("projects")}
        >
          Projetos
        </li>

        <li
          className={active === "contact" ? "active" : ""}
          onClick={() => highlightAndScroll("contact")}
        >
          Contato
        </li>
      </ul>
    </nav>
  );
}