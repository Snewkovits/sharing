const darkBgColor = "#0C0C0C";
const darkPriColor = "#C2C2C2";
const lightBgColor = "#DBDBDB";
const lightriColor = "#2C2C2C";

window.onload = () => {
    document.documentElement.style.setProperty("--trans-time", '0');
    let cookies = document.cookie;
    if (cookies.includes("theme")) {
        if (cookies.includes("theme=dark")) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    } else {
        setLightTheme();
    }
    document.documentElement.style.setProperty("--trans-time", '.5s');
}

document.getElementById("toggle-theme").onclick = () => {
    let cookies = document.cookie;
    if (cookies.includes("theme=dark")) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
};

const setDarkTheme = () => {
    document.documentElement.style.setProperty("--background-color", darkBgColor);
    document.documentElement.style.setProperty("--primary-color", darkPriColor);
    document.documentElement.style.setProperty("--dark-filter", 1);
    document.cookie = "theme=dark";
}

const setLightTheme = () => {
    document.documentElement.style.setProperty("--background-color", lightBgColor);
    document.documentElement.style.setProperty("--primary-color", lightriColor);
    document.documentElement.style.setProperty("--dark-filter", 0);
    document.cookie = "theme=light";
}