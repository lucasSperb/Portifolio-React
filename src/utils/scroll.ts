export const highlightAndScroll = (id: string): void => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });

    section.classList.remove("highlight-section");
    void section.offsetWidth;
    section.classList.add("highlight-section");

    setTimeout(() => {
      section.classList.remove("highlight-section");
    }, 2000);
  }
};