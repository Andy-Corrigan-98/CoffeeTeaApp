function createElement(tag) {
    return $(document.createElement(tag));
}

function createElement(tag, className) {
    return $(document.createElement(tag))
        .addClass(className);
}
