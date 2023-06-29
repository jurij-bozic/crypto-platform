import { checkAccessTokenInSession } from "src/local-storage/sessionStorage";

export const isUserAuthorized = (tokenName) => {
    if (checkAccessTokenInSession(tokenName)) {
        return true
    }
    else {
        return false
    }
}