function create_element(element, children = [], attributes = {}) {
    element = document.createElement(element);

    for (let attribute in attributes)
        element.setAttribute(attribute, attributes[attribute]);

    for (let child of children) element.append(child);

    return element;
}

class Life {
    async create_timeline(timeline) {
        const res = await fetch(timeline);
        const moments = await res.json();

        const container = document.querySelector(".timeline");

        for (let moment of moments) {
            const moment_element = create_element(
                "div",
                [moment.name, moment.year],
                {
                    class: "moment",
                }
            );
            container.appendChild(moment_element);
        }

        console.log(moments);
    }
}

const life = new Life();

life.create_timeline("life.json");
