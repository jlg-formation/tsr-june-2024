/**
 * Find an element from a selector or throw an error
 * @param selector
 * @returns the element if found
 */
export const querySelector = (selector: string): Element => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Cannot find element with selector ${selector}`);
  }
  return elt;
};

export const setAttribute = (
  elt: Element,
  attributeName: string,
  attributeValue: number
): void => {
  elt.setAttributeNS(null, attributeName, attributeValue + "");
};
