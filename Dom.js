/**
 * creer les elements avec ses attributs
 * @param {string} tagName 
 * @param {object} properties 
 */
export function createElements(tagName,properties={}){
    var element = document.createElement(tagName);
    for (const [key,value] of Object.entries(properties)) {
        element.setAttribute(key,value)
    }
    return element;
}