/**
 * Dynamically loading a script
 * @param scriptname
 */
function loadScript(scriptname) {
    var snode = document.createElement('script');
    snode.setAttribute('type', 'text/javascript');
    snode.setAttribute('src', scriptname);
    document.getElementsByTagName('head')[0].appendChild(snode);
}

//loadScript('http://www.sruttloff.de/meinScript.js');
/**
 * Eigenschaften des Number Object
 */
function showWertebereich() {
    var out = 'Number.MAX_VALUE ' + Number.MAX_VALUE + '\r\n';
    out += 'Number.MIN_VALUE ' + Number.MIN_VALUE + '\r\n';
    out += 'Number.POSITIVE_INFINITY ' + Number.POSITIVE_INFINITY + '\r\n';
    out += 'Number.NEGATIVE_INFINITY ' + Number.NEGATIVE_INFINITY + '\r\n';
    out += 'Number.NAN ' + Number.NaN + '\r\n';
    alert(out);
}
