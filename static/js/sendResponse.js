import badResponse from './responses/badResponse.js'
import goodResponse from './responses/goodResponse.js'

const sendResponse = (CONF, status) => {
    if ([0, 2, 3].includes(status)) {
        badResponse(CONF, status);
    } else {
        goodResponse(CONF, status);
    }
}

export default sendResponse;