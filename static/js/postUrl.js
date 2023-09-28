import sendResponse from "./sendResponse.js";

// manage the user interaction
const postUrl = (CONF) => {
    if (CONF.inputButton.innerText === "SHORT") {
        shortUrl(CONF);
    } else if (CONF.inputButton.innerText === "COPY") {
        copyUrl(CONF);
    }
}
// add function
const shortUrl = async (CONF) => {
    try {
        // fetch the add api
        const response = await fetch('/add', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "url": CONF.inputField.value,
                "refer": ""
            }) // take the url
        })

        const statusObject = await response.json();
        sendResponse(CONF, statusObject["status"]);

    } catch (err) {
        sendResponse(CONF, 0);
    }
}

const copyUrl = (CONF) => navigator.clipboard.writeText(`short.urlfy.org/${CONF.inputField.value}`);

export default postUrl;