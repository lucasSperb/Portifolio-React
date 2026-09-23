import "./Navbar.css";
import { highlightAndScroll } from "../../utils/scroll";
import { useEffect, useState } from "react";

const items = [
  ["about", "Sobre"],
  ["services", "Serviços"],
  ["skills", "Skills"],
  ["projects", "Projetos"],
  ["contact", "Contato"],
] as const;

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "";
      document.querySelectorAll("section").forEach((section) => {
        const top = section.offsetTop - 150;
        const bottom = top + section.clientHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (id: string) => {
    setOpen(false);
    highlightAndScroll(id);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <button className="brand" onClick={() => navigate("hero")} aria-label="Ir para o início">
        <img src="/lsLogo.png" alt="LS" />
        <span>Lucas Sperb</span>
      </button>

      <button
        className={`menu-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={open ? "open" : ""}>
        {items.map(([id, label]) => (
          <li key={id}>
            <button
              className={active === id ? "active" : ""}
              onClick={() => navigate(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
