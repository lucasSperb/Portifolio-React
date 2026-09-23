export function highlightAndScroll(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  element.classList.remove("section-highlight");

  void element.offsetWidth;

  element.classList.add("section-highlight");

  window.setTimeout(() => {
    element.classList.remove("section-highlight");
  }, 1400);
}