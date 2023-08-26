(function (e, t, n) {
    if (e.snaptr) return; var a = e.snaptr = function () { a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments) };
    a.queue = []; var s = 'script'; r = t.createElement(s); r.async = !0;
    r.src = n; var u = t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r, u);
})(window, document,
    'https://sc-static.net/scevent.min.js');

snaptr('init', 'a28c386d-dd68-4f7c-8c8c-c6094bf11e8f', {
    'user_email': 'www.i-send.co'
});

snaptr('track', 'PAGE_VIEW');