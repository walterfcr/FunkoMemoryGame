export const div = (parent, attributes) => {
    return tag('div', parent, attributes);
};

export const h1 = (parent, attributes) => {
    return tag('h1', parent, attributes);
};

export const h2 = (parent, attributes) => {
    return tag('h2', parent, attributes);
};

export const p = (parent, attributes) => {
    return tag('p', parent, attributes);
};

export const button = (parent, attributes) => {
    return tag('button', parent, attributes);
};

export const input = (parent, attributes) => {
    return tag('input', parent, attributes);
};

export const select = (parent, attributes) => {
    return tag('select', parent, attributes);
};

export const option = (parent, attributes) => {
    return tag('option', parent, attributes);
};

export const img = (parent, attributes) => {
    return tag('img', parent, attributes);
};

export const span = (parent, attributes) => {
    return tag('span', parent, attributes);
};

export const tag = (type, parent, attributes) => {
    let e = document.createElement(type);

    if (parent) parent.appendChild(e);

    for (const k in attributes) {
        e[k] = attributes[k];
    }

    return e;
};