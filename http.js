window.addEventListener(`DOMContentLoaded`, init);
function init(){
    document.getElementById("get").addEventListener("click", get);
    document.getElementById("post").addEventListener("click",post);
    document.getElementById("put").addEventListener("click",put);
    document.getElementById("del").addEventListener("click",del);
    const date = new Date();
}

export function get() {
    const form = new FormData(document.getElementById("form"));
    const xml = new XMLHttpRequest(); 
    xml.onload = function(){
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xml.responseText), null, 3);
    }
    xml.open(`GET`, `https://httpbin.org/get`);
    xml.send(form);
}


export function post(){
    const form = new FormData(document.getElementById("form"));
    const xml = new XMLHttpRequest();

    xml.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xml.responseText), null, 3);
    }
    xml.open("POST", "https://httpbin.org/post");
    xml.send(form);
}

export function put(){
    const form = new FormData(document.getElementById("form"));
    const xml = new XMLHttpRequest();

    xml.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xml.responseText), null, 3);
    }
    xml.open("PUT", "https://httpbin.org/put");
    xml.send(form);
}

export function del(){
    const form = new FormData(document.getElementById("form"));
    const xml = new XMLHttpRequest();

    xml.onload = function() {
        document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xml.responseText), null, 3);
    }
    xml.open("DELETE", "https://httpbin.org/delete");
    xml.send(form);
}