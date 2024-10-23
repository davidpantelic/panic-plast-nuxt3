export const useFocusKontakt = () => {
  function focusKontakt() {
    setTimeout(() => {
      const contactSection = document.querySelector('#kontakt');
      contactSection.setAttribute('tabindex', '-1');
      contactSection.focus();
    }, 200);
  }
  return {
    focusKontakt
  }
}
