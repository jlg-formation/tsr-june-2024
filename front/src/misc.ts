type Class<T> = new () => T;

/**
 * Find an element from a selector or throw an error
 * @param selector
 * @returns the element if found
 */
export const querySelector = <T extends HTMLElement>(
  selector: string,
  type?: Class<T>
): T => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Cannot find element with selector ${selector}`);
  }
  elt;
  if (type) {
    if (!(elt instanceof type)) {
      throw new Error(`Element found, but type is not ${type}`);
    }
  }
  return elt as T;
};

export const setAttribute = (
  elt: Element,
  attributeName: string,
  attributeValue: number
): void => {
  elt.setAttributeNS(null, attributeName, attributeValue + "");
};

export const getKeys = <Truc extends object>(o: Truc): (keyof Truc)[] => {
  return Object.keys(o) as (keyof Truc)[];
};
