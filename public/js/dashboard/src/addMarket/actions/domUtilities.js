const dom = {
    insertContent: (content, target) => {
        const span = document.createElement("span");
        span.innerHTML = content;
        target.appendChild(span);
    },

    toggleVisibility: (el, criteria) => {
        if (criteria) {
            el.style.visibility = "visible";
            el.style.height = "initial";
        }
        else {
            el.style.visibility = "hidden";
            el.style.height = "0";
        }
    },

    toggleDisplay: (el, criteria) => {
        criteria ?
            el.style.display = 'none' :
            el.style.display = 'block';
    },

    toggleContent: (el, criteria, trueContent, falseContent) => {
        criteria ?
            el.textContent = trueContent :
            el.textContent = falseContent;
    },

    toggleClass: (el, criteria, trueClass, falseClass) => {
        if (criteria) {
            el.classList.remove(falseClass);
            el.classList.add(trueClass);
        }
        else {
            el.classList.remove(trueClass);
            el.classList.add(falseClass);
        }
    }
};

export default dom;
