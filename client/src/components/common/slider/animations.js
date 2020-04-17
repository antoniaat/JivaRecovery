document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementsByClassName('HeaderSlider-text')[0];
  let newDom = '';
  const animationDelay = 6;

  for (let i = 0; i < text.innerText.length; i++) {
    newDom
      += `<span class="char">${
        text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]
      }</span>`;
  }

  text.innerHTML = newDom;
  const { length } = text.children;

  for (let i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = `${animationDelay * i}ms`;
  }
});
