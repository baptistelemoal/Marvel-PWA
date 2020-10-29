export function isDevEnv() {
    return process.env.NODE_ENV === "development";
}

export function isSecureCookie() {
    return !isDevEnv();
}
