function getElementById(id) {
  const element = document.querySelector(`#${id}`);
  return element;
}

function setInnerText(element, value) {
  element.innerText = value;
}

function addClassList(element, classValue) {
  element.classList.add(classValue, "text-white");
}

function removeClassList(element, classValue) {
  element.classList.remove(classValue, "text-white");
}
