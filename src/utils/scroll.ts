let highlightTimeout: number | undefined;

export function highlightAndScroll(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  if (highlightTimeout) {
    window.clearTimeout(highlightTimeout);
  }

  element.classList.remove("section-highlight");

  void element.offsetWidth;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  window.setTimeout(() => {
    element.classList.add("section-highlight");

    highlightTimeout = window.setTimeout(() => {
      element.classList.remove("section-highlight");
      highlightTimeout = undefined;
    }, 1400);
  }, 250);
}