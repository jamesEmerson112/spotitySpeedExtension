// inject.js
// var script = document.createElement('script'); /* Create our dummy script to be inserted with our code variable  */
// script.textContent = code; /* insert our code as the contents of the script */
// document.body.appendChild(script); /* make our script exist on the page as, hopefully, the first script to execute. */
// (document.head||document.documentElement).appendChild(script); /* appends script again(not good practice) as close to top as possible */
// script.remove(); /* idk why i do this */

const nullthrows = (v) => {
    if (v == null) throw new Error("it's a null");
    return v;
}

function injectCode(src) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = function() {
        console.log("chrome extension injected");
        this.remove();
    };

    // This script runs before the <head> element is created,
    // so we add the script to <html> instead.
    nullthrows(document.head || document.documentElement).appendChild(script);
}


injectCode(chrome.runtime.getURL('/content-script.js'));