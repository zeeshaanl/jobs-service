/**
 * @param {object} object
 * @param {Array<string>=} optional
 * @returns {boolean}
 */
const hasAllProperties = (object, optional = []) => {
    Object.keys(object)
        .forEach(key => {
            if (object[key] === undefined && !optional.includes(key)) {
                const clazz = object.constructor.name;
                throw new Error(`Property '${key}' for object ${clazz} is not defined`);
            }
        });
    return true;
};

export default hasAllProperties;