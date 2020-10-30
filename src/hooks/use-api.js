import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const publicKey = process.env.REACT_APP_API_PUBLIC_KEY;

export default function useApi() {
    const getHeaders = (contentType = "application/json") => ({
        "Content-Type": contentType,
    });

    const callApi = (method, url, data, contentType = "application/json") => {
        const apiObject = {
            method,
            url: `${apiUrl}${url}&apikey=${publicKey}`,
            timeout: 30000,
            headers: getHeaders(contentType),
        };

        if (data) {
            apiObject.data = data;
        }

        return axios(apiObject);
    };

    const handleError = (error) => {
        console.error(error);
        return Promise.reject(error);
    };

    return {
        get: (url, contentType) => callApi("GET", url, null, contentType).catch((reason) => handleError(reason)),
        post: (url, data = {}, contentType) => callApi("POST", url, data, contentType).catch((reason) => handleError(reason)),
        put: (url, data = {}, contentType) => callApi("PUT", url, data, contentType).catch((reason) => handleError(reason)),
        delete: (url, contentType) => callApi("DELETE", url, null, contentType).catch((reason) => handleError(reason)),
    };
}
