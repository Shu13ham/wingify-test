function setCookie(name, value, daysToExpire, path = '/') {
    const expires = new Date();
    expires.setTime(expires.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=${path}`;
    document.cookie = cookie;
};

function setFormData(name, value, daysToExpire, path = '/') {
    const expires = new Date();
    expires.setTime(expires.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=${path}`;
    document.cookie = cookie;
};

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
};