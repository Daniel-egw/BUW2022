const darkTheme = matchMedia("(prefers-color-scheme: dark)").matches
console.log("dark theme: " + darkTheme)

document.styleSheets = "style.css"