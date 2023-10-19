const sendResponse = (CONF, status) => {
    if ([0, 2, 3].includes(status)) {
        badResponse(CONF);
    } else {
        goodResponse(CONF, status);
    }
}

const goodResponse = (CONF, refer) => {
    changeColors(CONF);
    CONF.outputField.value = `shouft.org/${refer}`;
    CONF.inputButton.querySelector('p').innerText = "copy";
}
// change the color theme (red <-> blue)
const changeColors = (CONF) => {
    CONF.root.style.setProperty("--input-border-color", "#00e9e9");
    CONF.root.style.setProperty("--input-shadow-color", "#00e9e9");
    CONF.root.style.setProperty("--invert-icons", 1);

}

const badResponse = (CONF) => {
    CONF.root.style.setProperty("--input-width", "100%");
    // start the error animation
    CONF.inputField.classList.add("invalid");
    // end the error animation
    setTimeout(() => {
        CONF.inputField.classList.remove("invalid");
    }, 600)
}

export default sendResponse;