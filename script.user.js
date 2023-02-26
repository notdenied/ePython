// ==UserScript==
// @name         Python Exec
// @namespace    http://tampermonkey.net/
// @version      0.2
// @run-at       document-start
// @description  i dont like tests lol
// @author       Andrey Ryzhov
// @include      *.yandex.ru/*
// @connect      127.0.0.1
// @grant        GM.xmlHttpRequest
// ==/UserScript==






var exec_token = "VerySecureToken";
var url = "http://127.0.0.1:666/api/exec_code";

(async function () {
    'use strict';
    console.log(document.domain);
    const timer = ms => new Promise(res => setTimeout(res, ms));
    await timer(1000);
    function getSelectionText() {
        var txt = '';
        if (txt = window.getSelection) {
            txt = window.getSelection().toString();
        } else {
            txt = document.selection.createRange().text;
        }
        return txt;
    }
    var old_res = "";
    while (true) {
        try {
            var res = getSelectionText();
            if (res && res != old_res) {
                old_res = res;
                GM.xmlHttpRequest({
                    method: "POST",
                    url: url,
                    data: JSON.stringify({ "token": exec_token, "code": res }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    onload: function (response) {
                        var r = JSON.parse(response.responseText);
                        if (r["status"] == "ok") {
                            alert(r["data"]);
                        }
                        console.log(r);
                    }
                });
            }
        } catch (err) {
            console.log(err);
        }
        await timer(1000);
    }
})();