const c = require("ansi-colors");

function hellos(name) {
    console.log(c.red(name)+"님 안녕하세요!");
}

hellos("홍길동");