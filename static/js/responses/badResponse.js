const badResponse = (CONF, status) => {
    console.log(status);
    if (status === 2) {
        invalidUrl(CONF);
    } else if (status === 3) {
        invalidRefer(CONF);
    } else {
        invalidUrl(CONF);
        invalidRefer(CONF);
    }
}
const invalidUrl = (CONF) => {
    // start the error animation
    CONF.inputField.classList.add("invalid");
    // end the error animation
    setTimeout(() => {
        CONF.inputField.classList.remove("invalid");
    }, 600)
}
const invalidRefer = (CONF) => {
    // start the error animation
    CONF.outputField.classList.add("invalid");
    // end the error animation
    setTimeout(() => {
        CONF.outputField.classList.remove("invalid");
    }, 600)
}

export default badResponse;