const addClassName = (element, className) => element.classList.add(className);
const createDOMElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

const removeChilds = function (element) {
  element.innerHTML = '';
};

export { addClassName, removeChilds, createDOMElement };
