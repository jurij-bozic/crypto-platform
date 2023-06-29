
export const storeAccessTokenInSession = (accessToken) => {
    sessionStorage.setItem("accessToken", accessToken)
}

export const checkAccessTokenInSession = (tokenName) => {
    return sessionStorage.getItem(tokenName)
}