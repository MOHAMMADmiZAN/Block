export const isObjEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export function deapClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
