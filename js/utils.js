const addClassName = (element, className) => element.classList.add(className);
const removeChilds = (element) => element.innerHTML = '';
const createDOMElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

export { addClassName, removeChilds, createDOMElement };
