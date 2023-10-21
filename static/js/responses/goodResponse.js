const goodResponse = (CONF, refer) => {
    changeColors(CONF);
    CONF.outputField.readOnly = true;
    CONF.outputField.value = `shouft.org/${refer}`;
    CONF.inputButton.querySelector('p').innerText = "copy";
}
// change the color theme (red -> blue)
const changeColors = (CONF) => {
    CONF.root.style.setProperty("--output-border-color", "#00e9e9");
    CONF.root.style.setProperty("--output-shadow-color", "#00e9e9");
    CONF.root.style.setProperty("--invert-icons", 1);

}

export default goodResponse;