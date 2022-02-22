export function renderFamily(family) {
    const div = document.createElement('div');
    div.classList.add('family');
    const h3 = document.createElement('h3');
    h3.textContent = family.name;
    div.append(h3);
    
    return div;
}

export function renderBunny(bunny) {
    const p = document.createElement('p');
    p.classList.add('bunny');
    p.textContent = bunny.name;
    return p;
}