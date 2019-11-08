'use strict'

console.log(html `<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(text, ...chars) {
    let result = text[0];
    for (let i = 0; i < chars.length; ++i) {
        result += `${escape(chars[i])}${text[i + 1]}`;
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;");
}
