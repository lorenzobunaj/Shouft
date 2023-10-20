import sendResponse from "./sendResponse.js";

// manage the user interaction
const postUrl = (CONF) => {
    console.log('button clicked');
    if (CONF.inputButton.innerText === "SHORT") {
        console.log('--> short');
        shortUrl(CONF);
    } else if (CONF.inputButton.innerText === "COPY") {
        console.log('--> copy');
        copyUrl(CONF);
    }
}
// add function
const shortUrl = async (CONF) => {
    console.log(`url: ${CONF.inputField.value}`);
    try {
        // fetch the add api
        const response = await fetch('/add', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "url": CONF.inputField.value,
                "refer": CONF.outputField.value
            }) // take the url
        })

        const statusObject = await response.json();
        console.log(`status: ${statusObject}`);

        sendResponse(CONF, statusObject["status"]);

    } catch (err) {
        sendResponse(CONF, 0);
    }
}

const copyUrl = (CONF) => navigator.clipboard.writeText(CONF.outputField.value);

export default postUrl;