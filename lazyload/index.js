function addScript(url) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;

    document.body.appendChild(s);
}

function lazyScript(host, scriptPath) {
    return () => {
        addScript(`${host}${scriptPath}`);
    }
}

window.onload = function() {
    const host = window.location.href;
    const scriptPath = 'lazy.js';

    const lazyBtn = document.getElementById('lazyBtn');
    lazyBtn.addEventListener('click', lazyScript(host, scriptPath));
}