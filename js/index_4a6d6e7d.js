var imgCount = 0;
var ImgArrow=["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png","img/9.png","img/10.png","img/11.png","img/12.png"];
var thisPageNow, thisPageAudio, audioArr=[];
!function e(t, n, i) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var c = "function" == typeof require && require;
                if (!a && c)return c(s, !0);
                if (r)return r(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var l = n[s] = {exports: {}};
            t[s][0].call(l.exports, function (e) {
                var n = t[s][1][e];
                return o(n ? n : e)
            }, l, l.exports, e, t, n, i)
        }
        return n[s].exports
    }

    for (var r = "function" == typeof require && require, s = 0; s < i.length; s++)o(i[s]);
    return o
}({
    1: [function (e, t, n) {
        !function (e, i) {
            "use strict";
            "object" == typeof n ? t.exports = i() : "function" == typeof define && define.amd ? define(function () {
                return i()
            }) : "function" == typeof define && define.cmd ? define(function (e, t, n) {
                n.exports = i()
            }) : e.sillyEjs = i()
        }(this, function () {
            "use strict";
            return function (e, t) {
                var n = new Function("_data", 'var __tpl="";with(_data){__tpl+="' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/[\r\n\t]/g, " ").replace(/<%(=?)([\s\S]+?)%>/g, function (e, t, n) {
                        var i = n.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
                        return t ? '"+(""+' + i + ').replace(/</g, "&lt;").replace(/>/g, "&gt;")+"' : '";' + i + '__tpl+="'
                    }) + '"};return __tpl;');
                return n ? n(t).replace(/\s+/g, " ") : ""
            }
        })
    }, {}],
    2: [function (e, t, n) {
        "use strict";
        var i = function () {
            !function (e, t) {
                "function" == typeof define && (define.amd || define.cmd) ? define(function () {
                    return t(e)
                }) : t(e, !0)
            }(this, function (e, t) {
                function n(t, n, i) {
                    e.WeixinJSBridge ? WeixinJSBridge.invoke(t, o(n), function (e) {
                        s(t, e, i)
                    }) : u(t, i)
                }

                function i(t, n, i) {
                    e.WeixinJSBridge ? WeixinJSBridge.on(t, function (e) {
                        i && i.trigger && i.trigger(e), s(t, e, n)
                    }) : i ? u(t, i) : u(t, n)
                }

                function o(e) {
                    return e = e || {}, e.appId = S.appId, e.verifyAppId = S.appId, e.verifySignType = "sha1", e.verifyTimestamp = S.timestamp + "", e.verifyNonceStr = S.nonceStr, e.verifySignature = S.signature, e
                }

                function r(e) {
                    return {
                        timeStamp: e.timestamp + "",
                        nonceStr: e.nonceStr,
                        "package": e["package"],
                        paySign: e.paySign,
                        signType: e.signType || "SHA1"
                    }
                }

                function s(e, t, n) {
                    var i, o, r;
                    switch (delete t.err_code, delete t.err_desc, delete t.err_detail, i = t.errMsg, i || (i = t.err_msg, delete t.err_msg, i = a(e, i, n), t.errMsg = i), n = n || {}, n._complete && (n._complete(t), delete n._complete), i = t.errMsg || "", S.debug && !n.isInnerInvoke && alert(JSON.stringify(t)), o = i.indexOf(":"), r = i.substring(o + 1)) {
                        case"ok":
                            n.success && n.success(t);
                            break;
                        case"cancel":
                            n.cancel && n.cancel(t);
                            break;
                        default:
                            n.fail && n.fail(t)
                    }
                    n.complete && n.complete(t)
                }

                function a(e, t) {
                    var n, i, o, r;
                    if (t) {
                        switch (n = t.indexOf(":"), e) {
                            case f.config:
                                i = "config";
                                break;
                            case f.openProductSpecificView:
                                i = "openProductSpecificView";
                                break;
                            default:
                                i = t.substring(0, n), i = i.replace(/_/g, " "), i = i.replace(/\b\w+\b/g, function (e) {
                                    return e.substring(0, 1).toUpperCase() + e.substring(1)
                                }), i = i.substring(0, 1).toLowerCase() + i.substring(1), i = i.replace(/ /g, ""), -1 != i.indexOf("Wcpay") && (i = i.replace("Wcpay", "WCPay")), o = m[i], o && (i = o)
                        }
                        r = t.substring(n + 1), "confirm" == r && (r = "ok"), "failed" == r && (r = "fail"), -1 != r.indexOf("failed_") && (r = r.substring(7)), -1 != r.indexOf("fail_") && (r = r.substring(5)), r = r.replace(/_/g, " "), r = r.toLowerCase(), ("access denied" == r || "no permission to execute" == r) && (r = "permission denied"), "config" == i && "function not exist" == r && (r = "ok"), t = i + ":" + r
                    }
                    return t
                }

                function c(e) {
                    var t, n, i, o;
                    if (e) {
                        for (t = 0, n = e.length; n > t; ++t)i = e[t], o = f[i], o && (e[t] = o);
                        return e
                    }
                }

                function u(e, t) {
                    if (S.debug && !t.isInnerInvoke) {
                        var n = m[e];
                        n && (e = n), t && t._complete && delete t._complete, console.log('"' + e + '",', t || "")
                    }
                }

                function l() {
                    if (!("6.0.2" > _ || T.systemType < 0)) {
                        var e = new Image;
                        T.appId = S.appId, T.initTime = E.initEndTime - E.initStartTime, T.preVerifyTime = E.preVerifyEndTime - E.preVerifyStartTime, k.getNetworkType({
                            isInnerInvoke: !0,
                            success: function (t) {
                                T.networkType = t.networkType;
                                var n = "https://open.weixin.qq.com/sdk/report?v=" + T.version + "&o=" + T.isPreVerifyOk + "&s=" + T.systemType + "&c=" + T.clientVersion + "&a=" + T.appId + "&n=" + T.networkType + "&i=" + T.initTime + "&p=" + T.preVerifyTime + "&u=" + T.url;
                                e.src = n
                            }
                        })
                    }
                }

                function d() {
                    return (new Date).getTime()
                }

                function h(t) {
                    y && (e.WeixinJSBridge ? t() : g.addEventListener && g.addEventListener("WeixinJSBridgeReady", t, !1))
                }

                function p() {
                    k.invoke || (k.invoke = function (t, n, i) {
                        e.WeixinJSBridge && WeixinJSBridge.invoke(t, o(n), i)
                    }, k.on = function (t, n) {
                        e.WeixinJSBridge && WeixinJSBridge.on(t, n)
                    })
                }

                var f, m, g, w, v, y, x, b, _, E, T, S, I, C, k;
                return e.jWeixin ? void 0 : (f = {
                    config: "preVerifyJSAPI",
                    onMenuShareTimeline: "menu:share:timeline",
                    onMenuShareAppMessage: "menu:share:appmessage",
                    onMenuShareQQ: "menu:share:qq",
                    onMenuShareWeibo: "menu:share:weiboApp",
                    previewImage: "imagePreview",
                    getLocation: "geoLocation",
                    openProductSpecificView: "openProductViewWithPid",
                    addCard: "batchAddCard",
                    openCard: "batchViewCard",
                    chooseWXPay: "getBrandWCPayRequest"
                }, m = function () {
                    var e, t = {};
                    for (e in f)t[f[e]] = e;
                    return t
                }(), g = e.document, w = g.title, v = navigator.userAgent.toLowerCase(), y = -1 != v.indexOf("micromessenger"), x = -1 != v.indexOf("android"), b = -1 != v.indexOf("iphone") || -1 != v.indexOf("ipad"), _ = function () {
                    var e = v.match(/micromessenger\/(\d+\.\d+\.\d+)/) || v.match(/micromessenger\/(\d+\.\d+)/);
                    return e ? e[1] : ""
                }(), E = {
                    initStartTime: d(),
                    initEndTime: 0,
                    preVerifyStartTime: 0,
                    preVerifyEndTime: 0
                }, T = {
                    version: 1,
                    appId: "",
                    initTime: 0,
                    preVerifyTime: 0,
                    networkType: "",
                    isPreVerifyOk: 1,
                    systemType: b ? 1 : x ? 2 : -1,
                    clientVersion: _,
                    url: encodeURIComponent(location.href)
                }, S = {}, I = {_completes: []}, C = {state: 0, res: {}}, h(function () {
                    E.initEndTime = d()
                }), k = {
                    config: function (e) {
                        S = e, u("config", e);
                        var t = S.check === !1 ? !1 : !0;
                        h(function () {
                            var e, i, o;
                            if (t)n(f.config, {verifyJsApiList: c(S.jsApiList)}, function () {
                                I._complete = function (e) {
                                    E.preVerifyEndTime = d(), C.state = 1, C.res = e
                                }, I.success = function () {
                                    T.isPreVerifyOk = 0
                                }, I.fail = function (e) {
                                    I._fail ? I._fail(e) : C.state = -1
                                };
                                var e = I._completes;
                                return e.push(function () {
                                    S.debug || l()
                                }), I.complete = function () {
                                    for (var t = 0, n = e.length; n > t; ++t)e[t]();
                                    I._completes = []
                                }, I
                            }()), E.preVerifyStartTime = d(); else {
                                for (C.state = 1, e = I._completes, i = 0, o = e.length; o > i; ++i)e[i]();
                                I._completes = []
                            }
                        }), S.beta && p()
                    }, ready: function (e) {
                        0 != C.state ? e() : (I._completes.push(e), !y && S.debug && e())
                    }, error: function (e) {
                        "6.0.2" > _ || (-1 == C.state ? e(C.res) : I._fail = e)
                    }, checkJsApi: function (e) {
                        var t = function (e) {
                            var t, n, i = e.checkResult;
                            for (t in i)n = m[t], n && (i[n] = i[t], delete i[t]);
                            return e
                        };
                        n("checkJsApi", {jsApiList: c(e.jsApiList)}, function () {
                            return e._complete = function (e) {
                                if (x) {
                                    var n = e.checkResult;
                                    n && (e.checkResult = JSON.parse(n))
                                }
                                e = t(e)
                            }, e
                        }())
                    }, onMenuShareTimeline: function (e) {
                        i(f.onMenuShareTimeline, {
                            complete: function () {
                                n("shareTimeline", {
                                    title: e.title || w,
                                    desc: e.title || w,
                                    img_url: e.imgUrl,
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    }, onMenuShareAppMessage: function (e) {
                        i(f.onMenuShareAppMessage, {
                            complete: function () {
                                n("sendAppMessage", {
                                    title: e.title || w,
                                    desc: e.desc || "",
                                    link: e.link || location.href,
                                    img_url: e.imgUrl,
                                    type: e.type || "link",
                                    data_url: e.dataUrl || ""
                                }, e)
                            }
                        }, e)
                    }, onMenuShareQQ: function (e) {
                        i(f.onMenuShareQQ, {
                            complete: function () {
                                n("shareQQ", {
                                    title: e.title || w,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl,
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    }, onMenuShareWeibo: function (e) {
                        i(f.onMenuShareWeibo, {
                            complete: function () {
                                n("shareWeiboApp", {
                                    title: e.title || w,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl,
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    }, startRecord: function (e) {
                        n("startRecord", {}, e)
                    }, stopRecord: function (e) {
                        n("stopRecord", {}, e)
                    }, onVoiceRecordEnd: function (e) {
                        i("onVoiceRecordEnd", e)
                    }, playVoice: function (e) {
                        n("playVoice", {localId: e.localId}, e)
                    }, pauseVoice: function (e) {
                        n("pauseVoice", {localId: e.localId}, e)
                    }, stopVoice: function (e) {
                        n("stopVoice", {localId: e.localId}, e)
                    }, onVoicePlayEnd: function (e) {
                        i("onVoicePlayEnd", e)
                    }, uploadVoice: function (e) {
                        n("uploadVoice", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
                    }, downloadVoice: function (e) {
                        n("downloadVoice", {
                            serverId: e.serverId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    }, translateVoice: function (e) {
                        n("translateVoice", {
                            localId: e.localId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    }, chooseImage: function (e) {
                        n("chooseImage", {
                            scene: "1|2",
                            count: e.count || 9,
                            sizeType: e.sizeType || ["original", "compressed"]
                        }, function () {
                            return e._complete = function (e) {
                                if (x) {
                                    var t = e.localIds;
                                    t && (e.localIds = JSON.parse(t))
                                }
                            }, e
                        }())
                    }, previewImage: function (e) {
                        n(f.previewImage, {current: e.current, urls: e.urls}, e)
                    }, uploadImage: function (e) {
                        n("uploadImage", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
                    }, downloadImage: function (e) {
                        n("downloadImage", {
                            serverId: e.serverId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    }, getNetworkType: function (e) {
                        var t = function (e) {
                            var t, n, i, o = e.errMsg;
                            if (e.errMsg = "getNetworkType:ok", t = e.subtype, delete e.subtype, t)e.networkType = t; else switch (n = o.indexOf(":"), i = o.substring(n + 1)) {
                                case"wifi":
                                case"edge":
                                case"wwan":
                                    e.networkType = i;
                                    break;
                                default:
                                    e.errMsg = "getNetworkType:fail"
                            }
                            return e
                        };
                        n("getNetworkType", {}, function () {
                            return e._complete = function (e) {
                                e = t(e)
                            }, e
                        }())
                    }, openLocation: function (e) {
                        n("openLocation", {
                            latitude: e.latitude,
                            longitude: e.longitude,
                            name: e.name || "",
                            address: e.address || "",
                            scale: e.scale || 28,
                            infoUrl: e.infoUrl || ""
                        }, e)
                    }, getLocation: function (e) {
                        e = e || {}, n(f.getLocation, {type: e.type || "wgs84"}, function () {
                            return e._complete = function (e) {
                                delete e.type
                            }, e
                        }())
                    }, hideOptionMenu: function (e) {
                        n("hideOptionMenu", {}, e)
                    }, showOptionMenu: function (e) {
                        n("showOptionMenu", {}, e)
                    }, closeWindow: function (e) {
                        e = e || {}, n("closeWindow", {immediate_close: e.immediateClose || 0}, e)
                    }, hideMenuItems: function (e) {
                        n("hideMenuItems", {menuList: e.menuList}, e)
                    }, showMenuItems: function (e) {
                        n("showMenuItems", {menuList: e.menuList}, e)
                    }, hideAllNonBaseMenuItem: function (e) {
                        n("hideAllNonBaseMenuItem", {}, e)
                    }, showAllNonBaseMenuItem: function (e) {
                        n("showAllNonBaseMenuItem", {}, e)
                    }, scanQRCode: function (e) {
                        e = e || {}, n("scanQRCode", {
                            needResult: e.needResult || 0,
                            scanType: e.scanType || ["qrCode", "barCode"]
                        }, function () {
                            return e._complete = function (e) {
                                var t, n;
                                b && (t = e.resultStr, t && (n = JSON.parse(t), e.resultStr = n && n.scan_code && n.scan_code.scan_result))
                            }, e
                        }())
                    }, openProductSpecificView: function (e) {
                        n(f.openProductSpecificView, {pid: e.productId, view_type: e.viewType || 0}, e)
                    }, addCard: function (e) {
                        var t, i, o, r, s = e.cardList, a = [];
                        for (t = 0, i = s.length; i > t; ++t)o = s[t], r = {
                            card_id: o.cardId,
                            card_ext: o.cardExt
                        }, a.push(r);
                        n(f.addCard, {card_list: a}, function () {
                            return e._complete = function (e) {
                                var t, n, i, o = e.card_list;
                                if (o) {
                                    for (o = JSON.parse(o), t = 0, n = o.length; n > t; ++t)i = o[t], i.cardId = i.card_id, i.cardExt = i.card_ext, i.isSuccess = i.is_succ ? !0 : !1, delete i.card_id, delete i.card_ext, delete i.is_succ;
                                    e.cardList = o, delete e.card_list
                                }
                            }, e
                        }())
                    }, chooseCard: function (e) {
                        n("chooseCard", {
                            app_id: S.appId,
                            location_id: e.shopId || "",
                            sign_type: e.signType || "SHA1",
                            card_id: e.cardId || "",
                            card_type: e.cardType || "",
                            card_sign: e.cardSign,
                            time_stamp: e.timestamp + "",
                            nonce_str: e.nonceStr
                        }, function () {
                            return e._complete = function (e) {
                                e.cardList = e.choose_card_info, delete e.choose_card_info
                            }, e
                        }())
                    }, openCard: function (e) {
                        var t, i, o, r, s = e.cardList, a = [];
                        for (t = 0, i = s.length; i > t; ++t)o = s[t], r = {card_id: o.cardId, code: o.code}, a.push(r);
                        n(f.openCard, {card_list: a}, e)
                    }, chooseWXPay: function (e) {
                        n(f.chooseWXPay, r(e), e)
                    }
                }, t && (e.wx = e.jWeixin = k), k)
            })
        };
        i.call(window), t.exports = window.wx
    }, {}],
    3: [function (e, t, n) {
        !function (i, o) {
            "use strict";
            "object" == typeof n ? t.exports = o(e("./../network/index.js")) : "function" == typeof define && define.cmd ? define(function (e, t, n) {
                n.exports = o(e("cmp/network"))
            }) : (i.UEM = i.UEM || {}, i.UEM.log = o(i.UEM.network))
        }(this, function (e) {
            "use strict";
            function t(e, t) {
                if (!e)throw new Error("argument `" + t + "` is required")
            }

            function n(e, n) {
                if (t(e, n), "string" != typeof e)throw new Error("argument `" + n + "` should be string")
            }

            function i(e, t) {
                return e && t && (e.data = JSON.stringify(t)), e
            }

            function o(e, t) {
                var o = 0, r = {};
                if (t instanceof Array)for (; o < t.length; o++)n(e[o], t[o]), r[t[o]] = e[o];
                return i(r, e[o]), r
            }

            function r(n, r) {
                var a;
                a = r ? function () {
                    e.ping(n, o(arguments, r))
                } : function (o) {
                    t(o), e.ping(n, i({}, o))
                }, s[n] = a;
                var c = ["url"].concat(r), u = n + "Redirect";
                s[u] = function () {
                    e.redirect(e.parseQuery(o(arguments, c), u))
                }
            }

            var s = {};
            return r("log"), r("logVisit", ["page"]), r("logClick", ["clickId"]), r("logEvent", ["category", "action"]), r("logSystem"), s
        })
    }, {"./../network/index.js": 4}],
    4: [function (e, t, n) {
        !function (e, i) {
            "use strict";
            "object" == typeof n ? t.exports = i() : "function" == typeof define && define.amd ? define(function () {
                return i()
            }) : "function" == typeof define && define.cmd ? define(function (e, t, n) {
                n.exports = i()
            }) : (e.UEM = e.UEM || {}, e.UEM.network = i())
        }(this, function () {
            "use strict";
            function e(e) {
                var t;
                return null == e ? t = String(e) : (t = Object.prototype.toString.call(e).toLowerCase(), t = t.substring(8, t.length - 1)), t
            }

            function t(t, n, i) {
                var o, r, s;
                if ("object" == typeof t)if (s = e(t), i = i || t, "array" === s || "arguments" === s || "nodelist" === s) {
                    for (o = 0, r = t.length; r > o; o++)if (n.call(i, t[o], o, t) === !1)return
                } else for (o in t)if (t.hasOwnProperty(o) && n.call(i, t[o], o, t) === !1)return
            }

            function n() {
                var e = {};
                return t(arguments, function (n) {
                    t(n, function (t, n) {
                        e[n] = t
                    })
                }), e
            }

            function i(e, t) {
                t = t || location.search;
                var n, i = t.indexOf("#");
                return i > 0 && (t = t.substr(0, i)), n = t.match(new RegExp("[?|&]" + encodeURIComponent(e) + "=([^&]*)(&|$)")), n ? decodeURIComponent(n[1]) : ""
            }

            function o(e, t) {
                var n, i;
                return t && (n = e.indexOf("#"), n >= 0 ? (i = e.substr(n), e = e.substr(0, n)) : i = "", e += (e.indexOf("?") < 0 ? "?" : "&") + t.replace(/^[?|&]+/, "") + i), e
            }

            function r(e) {
                e = (e || location.queryString).replace(/^\?/, "");
                var t, n, i = e.split("&"), o = {};
                if (i.length)for (t = 0; t < i.length; t++)n = i[t].split("="), 2 === n.length && (o[n[0]] = decodeURIComponent(n[1]));
                return o
            }

            function s(i, o) {
                var s, a, c, u, l = [], d = "", h = "string" === e(o);
                return h && (a = o.indexOf("#"), a >= 0 && (d = o.substr(a), o = o.substr(0, a)), c = o.indexOf("?"), c >= 0 && (u = r(o.substr(c)), i = n(u, i), o = o.substr(0, c))), t(i, function (e, t) {
                    l.push(encodeURIComponent(t) + "=" + encodeURIComponent(void 0 === e ? "" : e))
                }), s = l.join("&").replace(/%20/g, "+"), h ? o + "?" + s + d : s
            }

            function a() {
                try {
                    return {__dt: +new Date - window.performance.timing.navigationStart}
                } catch (e) {
                    return {__t: +new Date}
                }
            }

            function c(i) {
                i = i || {};
                var o, r = i.type || "GET", c = i.url || "", u = n(a(), p, i.data), h = i.success, f = i.error, m = new XMLHttpRequest;
                m.onreadystatechange = function () {
                    var e;
                    4 === m.readyState && (200 === m.status ? (e = JSON.parse(m.responseText), l && l(e), h && h(e)) : f && f(m))
                }, r = "POST" === r.toUpperCase() ? "POST" : "GET";
                try {
                    "POST" === r ? (t(u, function (t) {
                        return "file" === e(t) ? (o = new FormData, !1) : void 0
                    }), m.open(r, d(c), !0), o ? t(u, function (t, n) {
                        n && void 0 !== t && o.append(n, "array" === e(t) ? t.join() : t)
                    }) : (o = s(u), m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"))) : (c = d(s(u, c)), m.open(r, c, !0)), m.send(o)
                } catch (g) {
                    console.error("ajax error", g)
                }
            }

            function u(e) {
                return function (t, n, i, o) {
                    c({type: e, url: t, data: n, success: i, error: o})
                }
            }

            var l, d, h = {}, p = {};
            return d = function () {
                var e, t, n, r, a, c, u, l = 0, d = {};
                if ("wp" === i("fr") || "139" === i("pf") || "140" === i("pf"))for (r = i("uc_param_str"), u = r.length - r.length % 2; u > l;)a = r.substr(l, 2), c = i(a), c.length > 0 && (d[a] = c), l += 2;
                return t = i("entry"), t && (d.entry = t), n = i("origin"), n && (d.origin = n), e = s(d), function (t) {
                    return t = o(t, e), i("uc_param_str", t) || (t = o(t, "uc_param_str=dsdnfrpfbivesscpgimibtbmnisieijblauputogpintnw")), t
                }
            }(), h.ping = function (e, t) {
                var i = new Image, o = n(a(), p, t);
                i.src = d(s(o, e))
            }, h.baseParam = function (t, i) {
                if ("string" === e(t)) {
                    if (1 === arguments.length)return p[t];
                    p[t] = i
                } else"object" === e(t) && (p = n(p, t))
            }, h.baseSuccess = function (t) {
                "function" === e(t) && (l = t)
            }, h.redirect = function (e) {
                e && (location.href = d(s(p, e)))
            }, h.query = i, h.parseObject = r, h.parseQuery = s, h.ucParam = d, h.ajax = c, h.get = u("GET"), h.post = u("POST"), h
        })
    }, {}],
    5: [function (e, t, n) {
        !function (e, i) {
            "use strict";
            e.UEM = e.UEM || {}, e.UEM.query = i(), "object" == typeof n && (t.exports = i())
        }(this, function () {
            "use strict";
            return !function () {
                function e(e) {
                    var n = this;
                    return n.selectors = "", n.els = [], n.promise = new t.Promise, "object" == typeof e ? n.els.push(e) : "string" == typeof e && (e = e.trim(), t.generator.init(n, e) || (n.selectors = e, n._initEls(n, e))), n
                }

                e.prototype._initEls = function (e, n) {
                    var i = t.cache.get(n);
                    i ? e.els = i : (e.els = document.querySelectorAll.call(document, n), e.els && e.els.length && t.cache.set(n, e.els))
                };
                var t = window.$ = function (t) {
                    return new e(t)
                };
                t.init = function () {
                    t.method.setup(e)
                }
            }(), function () {
                function e() {
                    this.state = 1, this._thens = []
                }

                e.prototype.resolve = function () {
                    var e = this._thens.shift();
                    this.state = 1, e && e()
                }, e.prototype.then = function (e) {
                    this.state ? (this.state = 0, e()) : this._thens.push(e)
                }, window.$.Promise = e
            }(), function () {
                function e() {
                    for (var e = i.length, t = []; e--;)t = t.concat(window.$.method[i[e]]);
                    return t
                }

                function t(e, t) {
                    return "find" === e || "get" === e ? !0 : t.length || -1 === o.indexOf(e) ? 1 === t.length && -1 !== r.indexOf(e) ? !0 : "style" === e && t && 1 === t.length && window.$.method.style.isSync(t[0]) ? !0 : void 0 : !0
                }

                function n(e, n) {
                    return function () {
                        var i = this, o = arguments;
                        return t(e, o) ? n(i, o) : (this.promise.then(function () {
                            n(i, o)
                        }), this)
                    }
                }

                var i = ["attribute", "node", "class", "display", "event", "time", "search", "style", "func"], o = ["text", "html", "value", "class"], r = ["attr"];
                window.$.method = {
                    push: function (e) {
                        i.push(e)
                    }, setup: function (t) {
                        for (var i = e(), o = 0; o < i.length;)t.prototype[i[o]] = n(i[o], i[o += 1]), ++o
                    }, exec: function (e, t) {
                        for (var n = 0; n < e.els.length;)t.call(e, e.els[n], n), ++n
                    }
                }
            }(), function () {
                function e(e, t) {
                    for (var n; null !== (n = a.exec(t));)e.setAttribute(n[1], n[2])
                }

                function t(t) {
                    var n = r.exec(t), i = document.createElement(n[1].split(" ")[0]);
                    return e(i, n[1]), i
                }

                function n(t) {
                    var n = s.exec(t), i = document.createElement(n[1].split(" ")[0]);
                    return e(i, n[1]), i.innerHTML = n[2], i
                }

                function i(e) {
                    return !(r.test(e) || s.test(e))
                }

                function o(e, i) {
                    var o;
                    return o = r.test(i) ? t(i) : n(i), e.els.push(o)
                }

                var r = /^<([^>]+)>$/, s = /^<([^>]+)>([\s\S]*)<\/[^>]+>$/, a = /([^=^\s]*)="([^"]*)"/g;
                window.$.generator = {
                    init: function (e, t) {
                        return i(t) ? null : o(e, t)
                    }
                }
            }(), function () {
                var e = {};
                window.$.cache = {
                    get: function (t) {
                        return e[t]
                    }, set: function (t, n) {
                        e[t] = n
                    }, clear: function () {
                        e = {}
                    }
                }
            }(), function () {
                function e(e, t, n) {
                    return function (o, r) {
                        return "attr" !== n && void 0 !== r[0] || "attr" === n && void 0 !== r[1] ? (i.exec(o, function (t) {
                            e(t, r[0], r[1])
                        }), void o.promise.resolve()) : t(o.els[0], r[0])
                    }
                }

                function t(t) {
                    return e(function (e, n) {
                        "html" === t && o.clear(), e[r[t]] = n
                    }, function (e) {
                        return e[r[t]]
                    }, t)
                }

                function n() {
                    return e(function (e, t, n) {
                        e.setAttribute(t, n)
                    }, function (e, t) {
                        return e.getAttribute(t)
                    }, "attr")
                }

                var i = window.$.method, o = window.$.cache, r = {
                    text: "textContent",
                    html: "innerHTML",
                    value: "value",
                    "class": "className"
                };
                i.attribute = function () {
                    var e = [];
                    for (var i in r)r.hasOwnProperty(i) && (e.push(i), e.push(t(i)));
                    return e.push("attr"), e.push(n()), e
                }()
            }(), function () {
                function e(e, t) {
                    i.exec(e, function (e) {
                        n(t[0]).test(e.className) || (e.className += e.className ? " " + t[0] : t[0])
                    }), o.clear(), e.promise.resolve()
                }

                function t(e, t) {
                    i.exec(e, function (e) {
                        e.className = e.className.replace(n(t[0]), " ").trim()
                    }), o.clear(), e.promise.resolve()
                }

                function n(e) {
                    var t = "^" + e + "$|^" + e + "\\s|\\s" + e + "\\s|\\s" + e + "$";
                    return new RegExp(t)
                }

                var i = window.$.method, o = window.$.cache;
                i["class"] = ["addClass", e, "removeClass", t]
            }(), function () {
                function e(e, t) {
                    n.exec(e, function (e) {
                        e.style.display = t[0] || "block"
                    }), e.promise.resolve()
                }

                function t(e) {
                    n.exec(e, function (e) {
                        e.style.display = "none"
                    }), e.promise.resolve()
                }

                var n = window.$.method;
                n.display = ["show", e, "hide", t]
            }(), function () {
                function e(e, t) {
                    n.exec(e, function (e) {
                        e.addEventListener(t[0], t[1], t[2])
                    }), e.promise.resolve()
                }

                function t(e, t) {
                    n.exec(e, function (e) {
                        e.removeEventListener(t[0], t[1], t[2])
                    }), e.promise.resolve()
                }

                var n = window.$.method;
                n.event = ["on", e, "off", t]
            }(), function () {
                var e = window.$.method;
                window.$.method.func = ["exec", function (e, t) {
                    t[0](e), e.promise.resolve()
                }, "each", function (t, n) {
                    e.exec(t, function (e, t) {
                        n[0]($(e), t)
                    })
                }]
            }(), function () {
                function e(e, t) {
                    o.exec(e, function (e) {
                        e.appendChild(t[0].els[0])
                    }), r.clear(), e.promise.resolve()
                }

                function t(e, t) {
                    e.els[0].insertBefore(t[0].els[0], document.querySelector(t[1])), r.clear(), e.promise.resolve()
                }

                function n(e) {
                    o.exec(e, function (e) {
                        e.innerHTML = ""
                    }), r.clear(), e.promise.resolve()
                }

                function i(e, t) {
                    o.exec(e, function (e) {
                        t[0] ? Array.prototype.forEach.call(t[0].els, function (t) {
                            e.removeChild(t)
                        }) : e.parentNode.removeChild(e)
                    }), r.clear(), e.promise.resolve()
                }

                var o = window.$.method, r = window.$.cache;
                o.node = ["append", e, "empty", n, "insert", t, "remove", i]
            }(), function () {
                function e(e) {
                    return e.els
                }

                function t(e) {
                    return e.els[0]
                }

                window.$.method.search = ["find", e, "get", t]
            }(), function () {
                function e(e, i) {
                    var a = i[0], c = i[1];
                    return void 0 !== c || void 0 === c && !r(a) ? (s.exec(e, function (e) {
                        var i = o(a);
                        i ? t(e, i) : n(e, a, c)
                    }), void e.promise.resolve()) : e.els[0].style[a]
                }

                function t(e, t) {
                    for (var n = t.length - 1; n > 0;)e.style[t[n - 1]] = t[n], n -= 2
                }

                function n(e, t, n) {
                    return void 0 === n && r(t) ? e.style[i(t)] : void(e.style[i(t)] = n)
                }

                function i(e) {
                    for (var t = e.split("-"), n = 0, i = !0, o = ""; n < t.length;)t[n] && (i ? (o += t[n], i = !1) : o += t[n][0].toUpperCase() + t[n].substr(1)), ++n;
                    return o
                }

                function o(e) {
                    if (-1 !== e.indexOf(":")) {
                        for (var t, n = e.split(";"), o = n.length, r = []; o--;)n[o] && (t = n[o].split(":"), r.push(i(t[0]).trim()), r.push(t[1].trim()));
                        return r
                    }
                    return null
                }

                function r(e) {
                    return -1 === e.indexOf(":") ? !0 : !1
                }

                var s = window.$.method;
                s.style = ["style", e], s.style.isSync = r
            }(), function () {
                window.$.method.time = ["delay", function (e, t) {
                    setTimeout(function () {
                        e.promise.resolve()
                    }, t[0])
                }]
            }(), function () {
                window.$.init()
            }(), window.$
        })
    }, {}],
    6: [function (e, t, n) {
        !function (i, o) {
            "use strict";
            "object" == typeof n ? t.exports = o(e("./../../ua/src/ua.js"), e("./../../network/index.js"), e("./../../jweixin/src/jweixin.js")) : (i.UEM = i.UEM || {}, i.UEM.net = o(i.UEM.ua, i.net, i.wx))
        }(this, function (e, t, n) {
            "use strict";
            function i(t) {
                t.title = t.title || "", t.desc = t.desc || "", t.link = t.link || "http://uc.cn", o(t), r(t), t.platform = t.platform || "", t.disableTarget = "", t.domId = t.domId || "", t.showWechatMask = t.showWechatMask || function () {
                    }, t.weiboRuleId = t.weiboRuleId || 106, t.weiboActivityId = t.weiboActivityId || 261, e.isIOS() ? t.platform = v[t.platform] : t.disablePlatform && 0 !== t.disablePlatform.length && (t.disableTarget = t.disablePlatform.toString())
            }

            function o(n) {
                -1 === n.link.indexOf("entry=") && (n.link = t.parseQuery({entry: y[e.pf]}, n.link))
            }

            function r(e) {
                -1 === e.link.indexOf("origin=") && (e.link = t.parseQuery({origin: t.query("origin")}, e.link))
            }

            function s(e) {
                n.ready(function () {
                    n.onMenuShareTimeline(e), n.onMenuShareAppMessage(e), n.onMenuShareQQ(e)
                })
            }

            function a(e) {
                window.location.href = "http://connect.qq.com/widget/shareqq/index.html?url=" + encodeURIComponent(e.link) + "&desc=" + encodeURIComponent(e.desc) + "&title=" + encodeURIComponent(e.title) + "&pics=" + encodeURIComponent(e.imgUrl)
            }

            function c(e) {
                window.location.href = "http://rec.uc.cn/actplat/sharetheme/service/index?uc_param_str=nidnssbifrpfuacpve&userId=&ruleId=" + e.weiboRuleId + "&activityId=" + e.weiboActivityId + "&content=" + encodeURIComponent(e.desc) + "&title=" + encodeURIComponent(e.title) + "&url=" + encodeURIComponent(e.link) + "&imgUrl=" + encodeURIComponent(e.imgUrl) + "&backUrl=&site=sina"
            }

            function u(t) {
                try {
                    e.isIOS() ? d(t) : l(t)
                } catch (n) {
                }
            }

            function l(e) {
                ucweb.startRequest("shell.page_share", [e.title, e.desc, e.link, e.platform, e.disableTarget, "", g(e.domId)])
            }

            function d(e) {
                ucbrowser.web_share(e.title, e.desc, e.link, e.platform, "", "", e.domId)
            }

            function h(e) {
                var t = e.offsetTop;
                return t += null != e.offsetParent ? t += h(e.offsetParent) : 0
            }

            function p(e) {
                var t = e.offsetLeft;
                return t += null != e.offsetParent ? p(e.offsetParent) : 0
            }

            function f(e) {
                var t, n = getComputedStyle(e, null).webkitTransform;
                return t = "none" === n ? 0 : parseInt(n.split(",")[5].replace(")", ""), 10), t += "BODY" !== e.parentNode.tagName ? f(e.parentNode) : 0
            }

            function m(e) {
                var t, n = getComputedStyle(e, null).webkitTransform;
                return t = "none" === n ? 0 : parseInt(n.split(",")[4], 10), t += "BODY" !== e.parentNode.tagName ? m(e.parentNode) : 0
            }

            function g(e) {
                var t = document.getElementById(e);
                if (t) {
                    var n = [p(t) + m(t), h(t) + f(t), t.offsetWidth, t.offsetHeight];
                    return n
                }
                return ""
            }

            var w = {};
            w.init = function (t) {
                "WECHAT" === e.pf && (i(t), t.jsApiConf.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ"], n.config(t.jsApiConf), s(t))
            }, w.share = function (t) {
                switch (i(t), e.pf) {
                    case"UC":
                        u(t);
                        break;
                    case"WECHAT":
                        s(t), t.showWechatMask();
                        break;
                    case"WEIBO":
                        c(t);
                        break;
                    default:
                        a(t)
                }
            };
            var v = {
                SinaWeibo: "kSinaWeibo",
                WechatFriends: "kWeixin",
                WechatTimeline: "kWeixinFriend"
            }, y = {UC: "ucshare", WECHAT: "wechatshare", QQ: "qqshare", WEIBO: "weiboshare"};
            return w
        })
    }, {"./../../jweixin/src/jweixin.js": 2, "./../../network/index.js": 4, "./../../ua/src/ua.js": 7}],
    7: [function (e, t, n) {
        !function (e, i) {
            "use strict";
            "object" == typeof n ? t.exports = i() : "function" == typeof define && define.amd ? define(function () {
                return i()
            }) : "function" == typeof define && define.cmd ? define(function (e, t, n) {
                n.exports = i()
            }) : (e.UEM = e.UEM || {}, e.UEM.ua = i())
        }(this, function () {
            "use strict";
            function e() {
                return t.indexOf("iphone") > 0
            }

            var t = window.navigator.userAgent.toLowerCase(), n = e() ? "IOS" : "ANDROID", i = "";
            return i = t.indexOf("ucbrowser") >= 0 ? "UC" : t.indexOf("micromessenger") >= 0 ? "WECHAT" : new RegExp("qq/\\d+\\.\\d+\\.\\d+\\.\\d+", "i").test(t) ? "QQ" : new RegExp("weibo__\\d+\\.\\d+\\.\\d+", "i").test(t) ? "WEIBO" : "OTHERS", {
                isIOS: e,
                os: n,
                pf: i
            }
        })
    }, {}],
    8: [function (e, t, n) {
        "use strict";
        function i() {
            this.index = 0, this.current = 0, this.prev = 0, this.showid = 0, this.width = "0.64", this.dom = null
        }

        function o() {
            var e, t = "";
            for (e = 0; e < r.length; e++)t += '<li data-idx="' + e + '"><div style="background:url(\'' + r[e] + "');background-size: cover\"></div></li>";
            for (e = 0; e < r.length; e++)t += '<li data-idx="' + e + '"><div style="background:url(\'' + r[e] + "');background-size: cover\"></div></li>";
            return t
        }

        var r = window.__CONF__.RESOURCE.TEXTURE.cotem, s = i.prototype;
        s.init = function (e) {
            this.dom = e, this.prev = this.current = 12 * -this.width, this.showid = 12, this.render(), this.update()
        }, s.moveTo = function (e) {
            var t = e - this.index;
            this.showid;
            if (0 !== t) {
                t > 6 ? t -= 12 : -6 > t && (t += 12), this.showid += t, this.showid + 2 > 21 ? (this.prev = this.current = this.current + 12 * this.width, this.showid -= 12) : this.showid - 2 < 0 && (this.prev = this.current = this.current - 12 * this.width, this.showid += 12);
                var n = t * this.width, i = (this.index, this);
                return this.index = e, function (e) {
                    i.current = i.prev - e * n, i.update(), e >= 1 && i.after()
                }
            }
        }, s.update = function () {
            this.dom.style.webkitTransform = "translateX(" + this.current + "rem)", this.dom.style.transform = "translateX(" + this.current + "rem)"
        }, s.after = function () {
            this.prev = this.current
        }, s.render = function () {
            var e = o();
            this.dom.innerHTML = e
        }, s.show = function () {
            this.dom.parentNode.parentNode.style.display = "block"
        }, s.hide = function () {
            this.dom.parentNode.parentNode.style.display = "none"
        }, t.exports = new i
    }, {}],
    9: [function (e, t, n) {
        "use strict";
        var i = {};
        i.pages = {}, i.assign = {}, i.dispatch = function (e, t) {
            t = t || {}, t.actionType = e, (this.assign[e] || function () {
            })(t)
        }, i.register = function (e, t) {
            this.assign[e] = t
        }, i.setupPages = function (e) {
            return this.pages = e
        }, t.exports = i
    }, {}],
    10: [function (e, t, n) {
        "use strict";
        function i() {
            o();
            for (var e = I.length; e--;)++I[e].frame, r(I[e], e)
        }

        function o() {
            C.clearRect(0, 0, C.width, C.height)
        }

        function r(e, t) {
            var n = s(e), i = n.length;
            for (e.pointQueue = n; i--;)i !== n.length - 1 ? v(e, e.path[i], i) : a(e, n[i], i);
            n.length || I.splice(t, 1)
        }

        function s(e) {
            for (var t = [], n = null, i = 0; i < T.QUEUE_SIZE && (n = e.path[e.frame + i]);)t.push(n), ++i;
            return t
        }

        function a(e, t, n) {
            C.beginPath();
            var i = x(n);
            i < T.MIN_POINT_WIDTH || (C.arc(t.x, t.y, i, 0, 2 * Math.PI), C.closePath(), C.fillStyle = b(e, n - 1), C.fill())
        }

        function c(e, t, n) {
            var i = x(n + 1);
            return [_({x: e.x, y: e.y - i}), _({x: e.x, y: e.y + i}), _({x: t.x, y: t.y - i}), _({x: t.x, y: t.y + i})]
        }

        function u(e, t, n) {
            var i = x(n + 1);
            return [_({x: e.x - i, y: e.y}), _({x: e.x + i, y: e.y}), _({x: t.x - i, y: t.y}), _({x: t.x + i, y: t.y})]
        }

        function l(e, t, n, i) {
            var o = t / i;
            return d(e, n) * o / (o - 1)
        }

        function d(e, t) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }

        function h(e, t, n) {
            var i = Math.sqrt(Math.pow(t, 2) - 4 * e * n);
            return [(-t + i) / (2 * e), (-t - i) / (2 * e)]
        }

        function p(e, t, n, i) {
            var o = l(e, t, n, i), r = (e.y - n.y) / (e.x - n.x), s = e.y - (e.y - n.y) / (e.x - n.x) * e.x, a = h(1 + Math.pow(r, 2), -2 * (e.x + r * (e.y - s)), Math.pow(e.x, 2) + Math.pow(e.y - s, 2) - Math.pow(o, 2)), c = 0;
            return c = e.x > n.x ? a[0] < n.x ? a[0] : a[1] : a[0] > n.x ? a[0] : a[1], _({x: c, y: r * c + s})
        }

        function f(e, t, n, i, o) {
            var r = (Math.pow(e, 2) + Math.pow(t, 2) - Math.pow(o, 2) - e * n - t * i) / (t - i), s = (n - e) / (t - i), a = h(1 + Math.pow(s, 2), 2 * ((r - t) * s - e), Math.pow(e, 2) + Math.pow(r - t, 2) - Math.pow(o, 2));
            return [_({x: a[0], y: r + s * a[0]}), _({x: a[1], y: r + s * a[1]})]
        }

        function m(e, t, n, i, o) {
            return f(e.x, e.y, o.x, o.y, t).concat(f(n.x, n.y, o.x, o.y, i))
        }

        function c(e, t, n) {
            var i = x(n + 1);
            return [_({x: e.x, y: e.y - i}), _({x: e.x, y: e.y + i}), _({x: t.x, y: t.y - i}), _({x: t.x, y: t.y + i})]
        }

        function g(e, t) {
            var n = e.pointQueue[t + 1], i = e.pointQueue[t], o = x(t + 1), r = x(t);
            return r < T.MIN_POINT_WIDTH ? [i] : n.x === i.x ? u(n, i, t) : n.y === i.y ? c(n, i, t) : m(n, o, i, r, p(n, o, i, r))
        }

        function w(e, t, n, i) {
            var o = [];
            return o.push(e), o.push(t), d(t, n) < d(t, i) ? (o.push(n), o.push(i)) : (o.push(i), o.push(n)), o
        }

        function v(e, t, n) {
            var i = g(e, n);
            4 === e.lastPathVertex.length && y(w(e.lastPathVertex[0], e.lastPathVertex[1], e.lastPathVertex[2], e.lastPathVertex[3]), e, n), e.lastPathVertex = i, 4 !== i.length
        }

        function y(e, t, n) {
            C.beginPath(), C.moveTo(e[0].x, e[0].y);
            for (var i = 0; i < e.length;)C.lineTo(e[i].x, e[i].y), ++i;
            C.closePath(), C.fillStyle = b(t, n), C.fill()
        }

        function x(e) {
            return e / T.QUEUE_SIZE * T.MAX_POINT_WIDTH
        }

        function b(e, t) {
            return "rgba(253,237,123, " + (t - 1) / e.pointQueue.length + ")"
        }

        function _(e) {
            return e
        }

        var E = e("../utils/interval"), T = {
            FPS: 35,
            MAX_POINT_WIDTH: 13,
            MIN_POINT_WIDTH: 4,
            QUEUE_SIZE: 9,
            OBJECT_SIZE: 5
        }, S = null, I = null, C = null;
        n.run = function (e) {
            C = e, I = [], o(), S = new E(function () {
                i()
            }, 1e3 / T.FPS)
        }, n.stop = function () {
            o(), S.stop(), I = null, C = null
        }, n.addPath = function (e, t) {
            I.length <= T.OBJECT_SIZE && I.push({path: t, frame: 0, lastPathVertex: []})
        }
    }, {"../utils/interval": 31}],
    11: [function (e, t, n) {
        "use strict";
        function i() {
            1 === f && n.stop(), f = 1
        }

        function o(e) {
            h = document.querySelector(e.el), p = h.getContext("2d"), h.width = p.width = e.width, h.height = p.height = e.height, g.ORIGIN = e.origin, g.TERMINAL = e.terminal
        }

        function r() {
            for (x = []; x.length !== y.length;) {
                var e = parseInt(Math.random() * y.length, 10);
                -1 === x.indexOf(y[e]) && x.push(y[e])
            }
        }

        function s() {
            return x && x.length || r(), x[++b % x.length]
        }

        function a() {
            var e = s();
            return {
                x: g.ORIGIN.x,
                y: g.ORIGIN.y,
                velocity: [e * g.MAX_INITIAL_VELOCITY, -1 / 3 * Math.random() * g.MAX_INITIAL_VELOCITY]
            }
        }

        function c(e) {
            var t = Math.sqrt(Math.pow(g.TERMINAL.x - e.x, 2) + Math.pow(g.TERMINAL.y - e.y, 2)), n = g.GRAVITATION_ACC / t;
            return {x: (g.TERMINAL.x - e.x) * n * 1.5, y: (g.TERMINAL.y - e.y) * n}
        }

        function u() {
            for (var e = [a()], t = g.ORIGIN, n = null, i = null, o = null; t.y > 0;)n = e[e.length - 1], i = c(n), o = [n.velocity[0] + i.x, n.velocity[1] + i.y], t = {
                x: n.x + o[0],
                y: n.y + o[1],
                velocity: o
            }, e.push(t);
            return e
        }

        var l = e("./fireworks-render"), d = e("../utils/interval"), h = null, p = null, f = null, m = null, g = {
            INTERVAL: 300,
            SLEEP_TIME: 1e3,
            ONE_TIMES_NUM: 6,
            GRAVITATION_ACC: .8,
            MAX_INITIAL_VELOCITY: 10,
            ORIGIN: null,
            TERMINAL: null
        }, w = 0, v = null;
        n.play = function (e) {
            w = 0, i(), o(e), m = new d(function () {
                w < g.ONE_TIMES_NUM ? (l.addPath(p, u()), ++w) : v || (v = setTimeout(function () {
                    w = 0, v = null
                }, g.SLEEP_TIME))
            }, g.INTERVAL), l.run(p)
        }, n.stop = function () {
            1 === f && (l.stop(), m.stop(), h = null, p = null, f = 0)
        };
        var y = [-1.2, -1.1, -1, -.9, -.8, -.7, -.6, -.5, -.4, -.3, -.2, -.1, 0, .1], x = null, b = 0
    }, {"../utils/interval": 31, "./fireworks-render": 10}],
    12: [function (e, t, n) {
        t.exports = '<section id="mask-loading" class="mask-loading"> <div> <span></span> <p><em class="percent">0</em>%</p> </div> </section>'
    }, {}],
    13: [function (e, t, n) {
        "use strict";
        function i() {
            var e = l.calculatePixel(.71) - document.body.scrollTop;
            return e = 0 > e ? 0 : e, {
                el: ".mask-wechat canvas",
                width: window.innerWidth,
                height: e,
                terminal: {x: l.calculatePixel(.55), y: e / 3},
                origin: {x: l.calculatePixel(.46), y: e + l.calculatePixel(.03)}
            }
        }

        var o = e("../../bower_components/ejs/src/ejs"), r = e("./fireworks"), s = $(e("./loading.html")), a = e("./notice.html"), c = $(e("./wechat.html")), u = {};
        n.blinkNotice = function (e) {
            n.showNotice(e, n.hideNotice)
        }, n.showNotice = function (e, t) {
            u = $(o(a, {notice: e})), $("body").append(u).exec(function () {
                u.style("opacity: 1;").delay(800).exec(t || function () {
                    })
            })
        }, n.hideNotice = function () {
            $("body").remove(u)
        }, n.showLoading = function () {
            $("body").append(s)
        }, n.hideLoading = function () {
            $("body").remove(s)
        }, n.loadingPercent = function (e) {
            $("#mask-loading .percent").text(parseInt(100 * e, 10))
        };
        var l = e("../utils/adaptation");
        n.showWechatMask = function () {
            $("body").append(c), r.play(i())
        }, c.on("touchstart", function (e) {
            r.stop(), $("body").remove(c), e.stopPropagation(), e.preventDefault()
        })
    }, {
        "../../bower_components/ejs/src/ejs": 1,
        "../utils/adaptation": 26,
        "./fireworks": 11,
        "./loading.html": 12,
        "./notice.html": 14,
        "./wechat.html": 15
    }],
    14: [function (e, t, n) {
        t.exports = '<section id="mask-notice" class="mask-notice"> <div><%=notice%></div> </section>'
    }, {}],
    15: [function (e, t, n) {
        t.exports = '<section class="mask-wechat"> <canvas></canvas> </section>'
    }, {}],
    16: [function (e, t, n) {
        "use strict";
        function i() {
            _ = requestAnimationFrame(i), o()
        }

        function o() {
            v.slowReady && v.execSlow(), v.fastReady && v.execFast()
        }

        function r() {
            cancelAnimFrame(_), x.disable(!0)
        }

        function s() {
            x.onTap(document.getElementById("degrade-go"), function () {
                $("#degrade-wrap").hide(), $("#degrade-constellation-wrap").show(), d.dispatch("play")
            }), x.onTap(document.getElementById("degrade-select-btn"), function () {
                v.slowReady || v.fastReady || (r(),
                    d.dispatch("selectStar"), d.dispatch("selectConstellationStar", {constellationId: f.index > 11 ? f.index - 12 : f.index < 0 ? f.index + 12 : f.index}))
            }), x.onTap(document.getElementById("degrade-tips"), function () {
                d.dispatch("download")
            }), x.onSlideLeft(function () {
                c(1)
            }), x.onSlideRight(function () {
                c(-1)
            }), x.onTap(document.getElementById("degrade-banner"), function () {
                d.dispatch("download")
            }), document.getElementById("degrade-tab-slider").addEventListener("touchstart", function (e) {
                e = e || window.event;
                var t = e.target, n = t.getAttribute("data-idx");
                if (null != n) {
                    var i = n - f.index;
                    c(i), e.preventDefault()
                }
            }, !1)
        }

        function a() {
            var e = document.getElementById("degrade-tab-slider"), t = document.getElementById("degrade-con-slider");
            f.init(e), m.init(t)
        }

        function c(e) {
            v.slowReady || v.fastReady || 0 !== e && (e > 6 ? e -= 12 : -6 > e && (e += 12), T += e, u(T, 38))
        }

        function u(e, t) {
            function n(e) {
                v.push(this, function () {
                    i(r[e]), o(r[e])
                }, !0)
            }

            for (var i = f.moveTo(e), o = m.moveTo(e), r = b(t), s = 0; t > s; s++)n(s)
        }

        function l(e) {
            "UC" === g.pf && !y.isLowVersion() || !window.__CONF__.IOS_BANNER_SWITCH && g.isIOS() || (w.render("#degrade-banner", e.MSG.ROLL_BAR, e.MSG.ROLL_TIME), document.getElementById("degrade-banner").parentNode.style.display = "block")
        }

        var d = e("../dispatcher"), h = e("../mask"), p = e("../utils/resource"), f = e("../tab-slider/tab-slider"), m = e("../constellation-slider/constellation-slider"), g = e("./../../bower_components/ua/src/ua.js"), w = e("../utils/roll-text"), v = e("../utils/fnQueue"), y = e("../utils/utils"), x = e("../utils/touch"), b = e("../utils/tweenRatio"), _ = null, E = !1, T = 0;
        n.init = function (e) {
            h.showLoading(), p.loadEssentialResource(e.CONF.RESOURCE.DEGRADE, function () {
                E = !0, a(), s(), i(), l(e), h.hideLoading(), "UC" === g.pf && $("#degrade-tips").hide(), $("#page-degrade").addClass("common-bg"), $("#page-degrade").show()
            }, function (e) {
                h.loadingPercent(e)
            })
        }, n.render = function () {
            E && (i(), $("#page-degrade").show()), x.disable(!1)
        }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            }, window.cancelAnimFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            }
    }, {
        "../constellation-slider/constellation-slider": 8,
        "../dispatcher": 9,
        "../mask": 13,
        "../tab-slider/tab-slider": 24,
        "../utils/fnQueue": 30,
        "../utils/resource": 32,
        "../utils/roll-text": 33,
        "../utils/touch": 34,
        "../utils/tweenRatio": 35,
        "../utils/utils": 36,
        "./../../bower_components/ua/src/ua.js": 7
    }],
    17: [function (e, t, n) {
        "use strict";
        function i() {
        }

        function o(e, t, n) {
            var i = new a.Spline([e, t]);
            return i.reparametrizeByArcLength(n || 128), i.getControlPointsArray()
        }

        var r = e("./constellation"), s = e("../dispatcher"), a = null, c = null, u = e("../utils/fnQueue"), l = e("../utils/touch"), d = i.prototype, h = {
            starWrap: $("#star-wrap"),
            starTag: $("#star-tag"),
            constellationWrap: $("#constellation-wrap")
        };
        d.init = function (e, t, n, i) {
            this.enlarge = !1, this.target = null, this.prev = -1, this.position = [], this.cameraFocus = [], this.mouse = {}, this.camera = e, this.renderer = t, this.controls = new a.TrackballControls(e), this.raycaster = i, this.inited = !1, this.controls.enabled = !0, this.controls.noPan = !0, this.submit = {}, this.setControls(0)
        }, d.go = function () {
            this.setControls(1), h.constellationWrap.show(), this.inited = !0
        }, d.move = function (e) {
            if (this.position.length > 0 || !this.inited || e === this.prev)return !1;
            this.target && this.target.hide(), this.setControls(0), e = Math.min(11, Math.max(0, e)), this.target = r.starStore[e];
            var t = this.camera.position.distanceTo(this.target.cameraPosition), n = Math.floor(t / 20);
            this.position = o(this.camera.position, this.target.cameraPosition, n), this.resetCamera()
        }, d.selectConstellation = function (e) {
            this.target && this.target.hide(), this.target = e, r.hideText(), this.move(this.target.id), h.starTag.text(this.target.name), u.push(this, function () {
                this.focus(e), this.target.show()
            }), u.push(this, function () {
                h.starWrap.show()
            }), s.dispatch("selectConstellation")
        }, d.exit = function () {
            if (this.position.length)return !1;
            this.setControls(0), this.target.hide(), h.starWrap.hide();
            var e = o(this.camera.position, this.target.watchPosition, 50);
            this.camera.up.set(0, 1, 0), this.position = e, u.push(this, function () {
                this.blur(), r.showText()
            })
        }, d.disable = function () {
            l.disable(!0), this.controls.enabled = !1
        }, d.focus = function (e) {
            var t = this.controls;
            this.enlarge = !0, t.target = e.position, u.push(this, function () {
                this.setControls(2)
            })
        }, d.blur = function () {
            this.enlarge = !1, this.target = null, this.controls.target = new a.Vector3, this.setControls(1)
        }, d.getPosition = function () {
            return this.position.length > 0 ? this.position.shift() : !1
        }, d.getFocus = function () {
            return this.cameraFocus.length ? (new a.Vector3).fromArray(this.cameraFocus.shift()) : this.enlarge ? this.target.position : new a.Vector3
        }, d.update = function () {
            this.controls.update()
        }, d.onTap = function (e) {
            if (!(this.position.length > 0 || this.enlarge)) {
                this.mouse.x = e.startX / this.renderer.domElement.clientWidth * 2 - 1, this.mouse.y = 2 * -(e.startY / this.renderer.domElement.clientHeight) + 1, this.raycaster.setFromCamera(this.mouse, this.camera);
                var t, n, i, o = r.cubeStore, s = r.starStore;
                if (t = this.raycaster.intersectObjects(o), t.length > 0)for (n = t[0].object, i = 0; i < o.length; i++)o[i] === n && this.selectConstellation(s[i])
            }
        }, d.setControls = function (e) {
            var t = this.controls;
            0 === e ? (t.minDistance = 0, t.maxDistance = 1 / 0, t.enabled = !1) : 1 === e ? (t.minDistance = 1500, t.maxDistance = 2300, t.enabled = !0) : 2 === e && (t.minDistance = 60, t.maxDistance = 260, t.enabled = !0)
        }, d.resetCamera = function (e) {
            e = e || 30;
            for (var t = this.camera, n = t.up.x, i = t.up.y - 1, o = t.up.z, r = n / e, s = i / e, a = o / e, c = 0; e > c; c++)u.push(this, function () {
                t.up.sub({x: r, y: s, z: a})
            }, !0);
            u.push(this, function () {
                t.up.set(0, 1, 0)
            }, !0)
        }, t.exports = function (t) {
            return c ? c : (a = t, e("../utils/TrackballControls")(a), c = new i)
        }
    }, {
        "../dispatcher": 9,
        "../utils/TrackballControls": 25,
        "../utils/fnQueue": 30,
        "../utils/touch": 34,
        "./constellation": 18
    }],
    18: [function (e, t, n) {
        "use strict";
        function i(e) {
            this.options = e,
                this.group = new p.Group,
                this.particleSystem = null,
                this.particles = null, this.cube = null,
                this.cotem = null, this.line = null, this.text = null,
                this.position = null, this.roration = null, this.vertices = [],
                this.name = e.name, this.cameraPosition = e.cameraPosition,
                this.size = e.size || 8, this.color = e.color || 16777215,
                this.id = h++,
                o(),
                this.build();
                //console.log(c);
                //alert(1);
                this.hide();
        }

        function o() {
            f.uniforms.texture1.value || (f.uniforms.texture1.value = a.light1, f.uniforms.texture2.value = a.light2, f.uniforms.texture3.value = a.light3, f.uniforms.texture4.value = a.light4)
        }

        function r(e, t) {
            var n, i, o = new p.Geometry;
            for (i = e.split(","), n = 0; n < i.length; n++)o.vertices.push(t[i[n]]);
            return new p.Line(o, m)
        }

        function s(e) {
            f.uniforms.timeline.value += e
        }

        var a = e("./materialData"), c = e("../utils/canvasMap"),
            u = e("../utils/fnQueue"), l = [], d = [], h = 0,
            p = null, f = null, m = null, g = i.prototype;
        g.build = function () {
            var e, t = this.vertices;
            for (e = 0; e < this.options.vertices.length; e++)t[e] = (new p.Vector3).fromArray(this.options.vertices[e]);
            this.vertices = t,
                this.position = this.options.position,
                this.watchPosition = this.options.watchPosition,
                this.links = this.options.links,
                this.buildStar(),
                this.buildCube(),
                this.buildText(),
                this.buildLine(),
                d.push(this),
                l.push(this.cube),
                this.group.position.copy(this.options.position),
                this.group.lookAt(this.cameraPosition)
        }, g.buildStar = function () {
            var e, t = this.vertices,
                n = new Float32Array(3 * t.length),
                i = new Float32Array(t.length),
                o = new Float32Array(t.length),
                r = new Float32Array(t.length),
                s = new p.BufferGeometry, a = this.options.sizes,
                c = this.options.materials;
            for (e = 0; e < t.length; e++)n[3 * e] = t[e].x, n[3 * e + 1] = t[e].y, n[3 * e + 2] = t[e].z, i[e] = this.size * a[e], r[e] = c[e], o[e] = e;
            s.addAttribute("position", new p.BufferAttribute(n, 3)), s.addAttribute("idx", new p.BufferAttribute(o, 1)), s.addAttribute("matid", new p.BufferAttribute(r, 1)), s.addAttribute("size", new p.BufferAttribute(i, 1)), this.particleSystem = new p.PointCloud(s, f), this.group.add(this.particleSystem)
        }, g.buildCube = function () {
            var e, t, n, i, o, r, s = this.vertices, a = s.length - 1;
            for (e = s[0].x, t = s[0].x, n = s[0].y, i = s[0].y, o = s[0].z, r = s[0].z; a > 1; a--)e = Math.min(s[a].x, e), t = Math.max(s[a].x, t), n = Math.min(s[a].y, n), i = Math.max(s[a].y, i), o = Math.min(s[a].z, o), r = Math.max(s[a].z, r);
            var c = new p.BoxGeometry(2 * Math.abs(t - e), 2 * Math.abs(i - n), 2 * Math.abs(r - o)), u = new p.MeshBasicMaterial({
                    color: p.NoColors,
                    blending: p.NormalBlending
                }),
                l = new p.Mesh(c, u); //设置物体
            l.visible = !1, l._width = t - e, l._height = i - n, this.cube = l, this.group.add(l)
        }, g.buildCotem = function () {
            var e = window.__CONF__.RESOURCE.TEXTURE.cotem[this.id],
                t = p.ImageUtils.loadTexture(e),
                n = new p.MeshBasicMaterial({
                    map: t,
                    blending: p.AdditiveBlending,
                    side: p.DoubleSide,
                    transparent: !0
                }), i = 72, o = new p.PlaneBufferGeometry(i, i, 8), r = new p.Mesh(o, n);
            r.position.copy(this.cube.position), r.scale.multiplyScalar(1), this.cotem = r, this.hide(), this.group.add(r)
        }, g.buildLine = function () {
            var e, t, n = new p.Group;
            for (e = 0; e < this.links.length; e++)t = r(this.links[e], this.vertices), n.add(t);
            this.line = n, this.group.add(n)
        }, g.buildText = function () {
            var e = p.ImageUtils.loadTexture(ImgArrow[imgCount]);
            imgCount++;
            //var imgObj=[{"img":'img/add_v_50eac169.png'}]
            //var e = p.ImageUtils.loadTexture(imgObj[0].img),
                t = new p.PointCloudMaterial({
                    size: 512,
                    depthTest: !1,
                    map: e,
                    blending: p.AdditiveBlending,
                    transparent: !0
                }), n = new p.Geometry;
            n.vertices.push(new p.Vector3(0, 0, 0));
            var i = new p.PointCloud(n, t);
            this.text = i, this.group.add(i)
        }, g.show = function () {
            function e(e) {
                u.push(n, function () {
                    this.line.children[0].material.opacity = Math.min(e / 100, .2)
                })
            }

            function t(e) {
                u.push(n, function () {
                    this.cotem.material.opacity = e / 100
                })
            }

            for (var n = this, i = 0; 40 > i; i += 1)e(i);
            for (i = 0; 100 > i; i += 2)t(i);
            this.cotem.material.opacity = 0, this.line.children[0].material.opacity = 0, this.cotem.visible = !0, this.line.visible = !0
        }, g.hide = function () {
            this.cotem && (this.cotem.visible = !1), this.line.visible = !1
        }, t.exports.init = function (e) {
            p = e, a = a(), f = new p.ShaderMaterial({
                uniforms: {
                    texture1: {type: "t", value: null},
                    texture2: {type: "t", value: null},
                    texture3: {type: "t", value: null},
                    texture4: {type: "t", value: null},
                    timeline: {type: "f", value: 0}
                },
                attributes: {
                    size: {type: "f", value: null},
                    matid: {type: "f", value: null},
                    idx: {type: "f", value: null}
                },
                vertexShader: document.getElementById("star-vshader").textContent,
                fragmentShader: document.getElementById("star-fshader").textContent,
                blending: p.AdditiveBlending,
                depthTest: !1,
                transparent: !0
            }), m = new p.LineBasicMaterial({
                color: 16777215,
                depthTest: !1,
                transparent: !0,
                opacity: .2,
                linewidth: 1,
                polygonOffset: !0
            })
        }, n.buildCotem = function () {
            for (var e = 0; e < d.length; e++)d[e].buildCotem()
        }, n.showText = function () {
            function e(e) {
                u.push(this, function () {
                    for (var t = 0; t < d.length; t++)d[t].text.material.opacity = e / 100
                }, !0)
            }

            var t;
            for (t = 0; t < d.length; t++)d[t].text.material.opacity = 0, d[t].text.visible = !0;
            for (t = 0; 100 > t; t += .8)e(t)
        }, n.hideText = function () {
            for (var e = 0; e < d.length; e++)d[e].text.visible = !1
        }, n.Star = i, n.cubeStore = l, n.starStore = d, n.updateTimeline = s
    }, {"../utils/canvasMap": 28, "../utils/fnQueue": 30, "./materialData": 19}],
    19: [function (e, t, n) {
        var i = null, o = null;
        t.exports = function (e) {
            if (o)return o;
            i = e;
            var t = window.__CONF__.RESOURCE.TEXTURE;
            return o = {
                Aries: t.cotem[0],
                Taurus: t.cotem[1],
                Cancer: t.cotem[2],
                Virgo: t.cotem[3],
                Libra: t.cotem[4],
                Scorpio: t.cotem[5],
                Pisces: t.cotem[6],
                Capricornus: t.cotem[7],
                Lion: t.cotem[8],
                Gemini: t.cotem[9],
                Aquarius: t.cotem[10],
                Sagittarius: t.cotem[11],
                light1: i.ImageUtils.loadTexture(t.light1),
                light2: i.ImageUtils.loadTexture(t.light2),
                light3: i.ImageUtils.loadTexture(t.light3),
                light4: i.ImageUtils.loadTexture(t.light4),
                spark: i.ImageUtils.loadTexture(t.spark)
            }
        }
    }, {}],
    20: [function (e, t, n) {
        "use strict";
        function i() {
            b = document.createElement("canvas"), b.width = window.innerWidth, b.height = window.innerHeight,
                y = new O.PerspectiveCamera(45, b.width / b.height, 1, 11e3),//设置透视投影的相机,默认情况下相机的上方向为Y轴，右方向为X轴，沿着Z轴朝里（视野角：fov 纵横比：aspect 相机离视体积最近的距离：near 相机离视体积最远的距离：far）
                y.position.set(-684, -1313, -1343),
                v = new O.Scene,//设置场景
                _ = new O.Raycaster,
                x = new O.WebGLRenderer({//生成渲染器对象
                antialias: !0,
                alpha: !0
            }),
                M.init(y, x, b, _),
                window.actionControl = M,
                window.camera = M.camera,
                o(), r(), c(),
                R.disable(!1),
                k.hideText(),
                x.setClearColor(462380),
                x.setSize(b.width, b.height),
                x.setPixelRatio(window.devicePixelRatio),
                document.getElementById("canvas-wrap").appendChild(x.domElement), x.render(v, y)
        }

        function o() {
            for (var e = k.Star, t = 0; t < C.length; t++) {
                var n = new e(C[t]);
                v.add(n.group)
            }
            u(), l(), p()
        }

        function r() {
            U = requestAnimationFrame(r), s()
        }

        function s() {
            var e = M.getPosition();
            e ? e.x ? y.position.copy(e) : y.position.fromArray(e) : L.slowReady && L.execSlow(), L.fastReady && L.execFast(), M.update(), d(), h(.05), k.updateTimeline(.04), y.lookAt(M.getFocus()), x.render(v, y)
        }

        function a() {
            cancelAnimFrame(U)
        }

        function c() {
            R.onTap(document.getElementById("page-index"), function () {
                M.inited || g()
            }), R.onTap(document.getElementById("index-go"), function () {
                M.inited || g()
            }), R.onTap(document.getElementById("star-back"), function () {
                M.exit()
            }), R.onTap(document.getElementById("index-banner"), function () {
                E.dispatch("download")
            }), R.onTap(document.getElementById("confirm-btn"), function () {
                m(), E.dispatch("selectConstellationStar", {constellationId: M.target.id});
                thisPageNow=document.getElementsByClassName("result-wrapper")[M.target.id];
                thisPageNow.style.display="block";
                // setTimeout(function () {
                //     thisPageNow.getElementsByClassName("board_1")[0].style.opacity="1";
                // },1000);
                // thisPageNow.getElementsByClassName("marquee")[0].scrollLeft=0;
                // setTimeout(function() {
                //     var marquee = thisPageNow.getElementsByClassName("marquee")[0]
                //     var distance = marquee.scrollWidth - marquee.clientWidth -1
                //     var iTime=setInterval(function () {
                //         marquee.scrollLeft ++;
                //         if(marquee.scrollLeft>=distance){clearInterval(iTime)}
                //     },18)
                // },3000);
                // setTimeout(function () {
                //     thisPageNow.getElementsByClassName("board_1")[0].style.opacity="0";
                // },17000);
                setTimeout(function(){  
                     document.getElementsByTagName("body")[0].style.overflowX='auto'
                },17780);
                // setTimeout(function () {
                //     thisPageNow.getElementsByClassName("board_2")[0].style.display="block";
                //     setTimeout(function(){
                //         thisPageNow.getElementsByClassName("board_2")[0].style.opacity="1";
                //     },200)
                // },18000);

                thisPageAudio=thisPageNow.getElementsByClassName("music-bg").length;
                musicPlay();
                switch (M.target.id){
                    case 1:
                        var arrowPlay=setTimeout(function () {
                            document.getElementById("music-arrow").play();
                        },8000);
                        $("#audio-control").on("click", function () {
                            if(this.className == "off"){
                                clearTimeout(arrowPlay);
                            }
                        });
                        break;
                    case 5:
                        var soilderPlay=setTimeout(function () {
                            document.getElementById("music_page6_bmg2").play();
                        },6000);
                        $("#audio-control").on("click", function () {
                            if(this.className == "off"){
                                clearTimeout(soilderPlay);
                            }
                        });
                        break;  
                }

            }), R.onTap(document, function (e) {
                V && M.onTap.call(M, e)
            });
            var e = {con: !0, icon: !0};
            document.addEventListener("touchstart", function () {
                e.con && V ? ($(".constellation-wrap").hide(), e.con = !1) : e.icon && M.enlarge && ($(".icon-tips").hide(), e.icon = !1)
            }), window.addEventListener("resize", function () {
                f()
            }, !1)
        }

        function u() {
            var e, t, n, i = I.spark, o = new O.BufferGeometry, r = new Float32Array(3e3);
            for (e = 0; 1e3 > e; e++)r[3 * e + 0] = 3e3 * Math.random() - 1500, r[3 * e + 1] = 3e3 * Math.random() - 1500, r[3 * e + 2] = 3e3 * Math.random() - 1500;
            o.addAttribute("position", new O.BufferAttribute(r, 3)), n = new O.PointCloudMaterial({
                size: 10 * Math.random() + 10,
                color: new O.Color(13421772),
                map: i,
                blending: O.AdditiveBlending,
                opacity: 1,
                depthTest: !1,
                transparent: !0
            }), t = new O.PointCloud(o, n), v.add(t)
        }

        function l() {
            var e, t, n, i, o = I.spark;
            for (j = new O.Geometry, e = 0; 200 > e; e++)t = new O.Vector3, t.x = 3e3 * Math.random() - 1500, t.y = 3e3 * Math.random() - 1500, t.z = 3e3 * Math.random() - 1500, j.vertices.push(t);
            i = new O.PointCloudMaterial({
                size: 10 * Math.random() + 10,
                color: new O.Color(16777215),
                map: o,
                blending: O.AdditiveBlending,
                opacity: .7,
                depthTest: !1,
                transparent: !0
            }), n = new O.PointCloud(j, i), v.add(n)
        }

        function d() {
            var e, t;
            for (e = 0; 100 > e; e++)t = j.vertices[e], t.x += .7, t.y += .7, t.z += .7, t.x = t.x > 1500 ? -1500 : t.x, t.y = t.y > 1500 ? -1500 : t.y, t.z = t.z > 1500 ? -1500 : t.z;
            for (e = 100, t; 200 > e; e++)t = j.vertices[e], t.x += .2, t.y += .1, t.z += .1, t.x = t.x > 1500 ? -1e3 : t.x, t.y = t.y > 1500 ? -1e3 : t.y, t.z = t.z > 1500 ? -1e3 : t.z;
            j.verticesNeedUpdate = !0
        }

        function h(e) {
            if (!M.target && 0 === M.position.length) {
                var t = new O.Matrix4;
                t.makeRotationX(-.017 * e),
                    y.position.applyMatrix4(t), t.makeRotationY(.009 * e),
                    y.position.applyMatrix4(t)
            }
        }

        function p() {
            var e = window.__CONF__.RESOURCE.TEXTURE.sky,
                t = new O.BoxGeometry(4096, 4096, 4096),
                n = O.ImageUtils.loadTextureCube([e[0], e[0], e[1], e[1], e[0], e[0]]),
                i = O.ShaderLib.cube,
                o = new O.ShaderMaterial({
                fragmentShader: i.fragmentShader,
                vertexShader: i.vertexShader,
                uniforms: i.uniforms,
                depthWrite: !1,
                color: new O.Color(69920),
                blending: O.NoBlending,
                side: O.BackSide
            });
            i.uniforms.tCube.value = n;
            var r = new O.Mesh(t, o);
            v.add(r)
        }

        function f() {
            y.aspect = window.innerWidth / window.innerHeight, y.updateProjectionMatrix(), x.setSize(window.innerWidth, window.innerHeight)
        }

        function m() {
            M.disable(), L.clear(), a()
        }

        function g() {
            V || (V = !0, $("#index-wrap").addClass("exit"), k.showText(), M.go(), E.dispatch("play"), setTimeout(function () {
                $("#index-wrap").hide()
            }, 2e3))
        }

        function w(e) {
            "UC" === T.pf && !P.isLowVersion() || !window.__CONF__.IOS_BANNER_SWITCH && T.isIOS() || (A.render("#index-banner", e.MSG.ROLL_BAR, e.MSG.ROLL_TIME), document.getElementById("index-banner").parentNode.style.display = "block")
        }

        var v, y, x, b, _,
            E = e("../dispatcher"),
            T = e("./../../bower_components/ua/src/ua.js"),
            S = e("../mask"), I = e("./materialData"),
            C = e("./starData"),
            k = e("./constellation"),
            M = e("./actionControl"),
            O = null,
            A = e("../utils/roll-text"),
            N = e("../utils/resource"),
            P = e("../utils/utils"),
            R = e("../utils/touch"),
            L = e("../utils/fnQueue"),
            V = !1,
            U = null,
            j = null;
        n.init = function (e) {
            S.showLoading(), N.loadEssentialResource(e.CONF.RESOURCE.INDEX, function () {
                E.dispatch("indexResourceLoaded"), O = window.THREE, e.CONF.CROSS_ORIGIN && (O.ImageUtils.crossOrigin = ""), C = C(O), I = I(O), k.init(O), M = M(O);
                var t = setTimeout(function () {
                    E.dispatch("indexBlocked")
                }, 4e3);
                i(), w(e), S.hideLoading(), $(".page-index").show(), clearTimeout(t), setTimeout(function () {
                    k.buildCotem()
                }, 100)
            }, function (e) {
                S.loadingPercent(e)
            })
        }, n.render = function () {
            V && (M.target && M.exit(), R.disable(!1), r(), $(".page-index").show())
        }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            }, window.cancelAnimFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            }
    }, {
        "../dispatcher": 9,
        "../mask": 13,
        "../utils/fnQueue": 30,
        "../utils/resource": 32,
        "../utils/roll-text": 33,
        "../utils/touch": 34,
        "../utils/utils": 36,
        "./../../bower_components/ua/src/ua.js": 7,
        "./actionControl": 17,
        "./constellation": 18,
        "./materialData": 19,
        "./starData": 21
    }],
    21: [function (e, t, n) {
        t.exports = function (e) {
            return [{
                name: "夜观星象",
                vertices: [[4, 37, -6.42], [-0.6, 20.195, 24.15], [-8.13, 29.885, 30], [15, 22, -30], [4, 21.5, -30], [-4.8, -10.465, 8.7], [15, -36, -20], [18.5, -20, -40], [-9, -35, -30]],
                links: ["0,1,2,3,4,5,6,7,8"],
                cotem: "Aries",
                position: new e.Vector3(800, 0, 0),
                watchPosition: new e.Vector3(2e3, 0, 0),
                cameraPosition: new e.Vector3(1e3, 0, 0),
                index: 0,
                materials: [4, 3, 4, 2, 1, 4, 3, 1, 3],
                sizes: [1, 1, 0.5, 2, 0.5, 1, 1.5, 0.5, 1.5]
            }, {
                name: "火烧藤兵",
                vertices: [[30, -1.5, -6.42], [15, -36, -20], [-0, -10, 30], [-16, -36, -30], [19, -8, -30], [9, 25, 8.7], [6.3, 2, -20], [-26, 3, -40], [-3, -30, 0]],
                links: ["0,1,2,3,4,5,6,7,8"],
                cotem: "Taurus",
                rotateZ: -85,
                position: new e.Vector3(400, 566, -400),
                watchPosition: new e.Vector3(1e3, 1414, -1e3),
                cameraPosition: new e.Vector3(500, 707, -500),
                index: 1,
                materials: [4, 3, 3, 3, 3, 2, 3, 4, 3],
                sizes: [4, 2, 1.5, 1, 0, 1, 1, 3, 2]
            }, {
                name: "馒头“蛮头”",
                vertices: [[-13, 36, -6.42], [-34, 23, 8.7], [-10, -6, 30], [15, -27, -30], [40, -22, -30], [9, 23, 8.7], [4, 15, -20], [-15, -37, -30]],
                links: ["0,1,2,3,4,5,6","2,7"],
                cotem: "Gemini",
                rotateZ: -25,
                position: new e.Vector3(400, -566, -400),
                watchPosition: new e.Vector3(1e3, -1414, -1e3),
                cameraPosition: new e.Vector3(500, -707, -500),
                index: 2,
                materials: [2, 2, 1, 1, 3, 3, 3, 3],
                sizes: [1, 2, 1, 1, 1, 1, 0.5, 1.5]
            }, {
                name: "春耕汉中",
                vertices: [[15, 29, 0], [13, 21, 0], [30, 12, 0], [35, 0, 0], [32.5, -10, -10], [9, -25, 8.7], [22, 6, 0], [0, 2, 10], [-30, -20, 10]],
                links: ["0,1,2,3,4,5,6,7,8"],
                cotem: "Cancer",
                position: new e.Vector3(0, 0, -800),
                watchPosition: new e.Vector3(0, 0, -2e3),
                cameraPosition: new e.Vector3(0, 0, -1e3),
                index: 3,
                materials: [2, 3, 3, 1, 3, 1, 1, 2, 3],
                sizes: [1.5, 1, 0.5, 0.5, 1, 1, 0.5, 1, 1.5]
            }, {
                name: "出师表",
                vertices: [[16, 29, 10], [-3, 34, -10], [-6, 22, -5], [0.2, 18, 0], [-8, 1, -12], [-17, -5.5, -18], [22, 5.6, 14], [19, -5, 18], [-9.5, -22, 20], [-32, -34, 23], [-6, -12, 15]],
                links: ["0,1,2,3,4,5,6,7,8,9,10"],
                cotem: "Lion",
                rotateZ: 22,
                position: new e.Vector3(-400, 566, -400),
                watchPosition: new e.Vector3(-1e3, 1414, -1e3),
                cameraPosition: new e.Vector3(-500, 707, -500),
                index: 4,
                materials: [2, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3],
                sizes: [1, 0.5, .5, .3, .5, .3, .5, .3, 0.5, 1, 1.5]
            }, {
                name: "北伐遥途",
                vertices: [[29, 35.5, -15], [18.5, 20, -8], [16, 5, 0], [-5, 24, -10], [-22, 20, -9], [-18, -2, 8], [-7, -1.5, 5], [14, -30, 22]],
                links: ["0,1,2,3,4,5,6,7"],
                cotem: "Virgo",
                rotateZ: -170,
                position: new e.Vector3(-400, -566, -400),
                watchPosition: new e.Vector3(-1e3, -1414, -1e3),
                cameraPosition: new e.Vector3(-500, -707, -500),
                index: 5,
                materials: [2, 3, 4, 4, 2, 3, 1, 1],
                sizes: [1.5, 1, 0.5, 1, 1, 0.5, 1, 1]
            }, {
                name: "木牛流马",
                vertices: [[13, 11, 0], [-13, -5, 10], [-34, 1, 0], [-13, 22, 6], [-32, 17, 3], [-13, -18, 13], [22, -2, 8], [29, -21, 13]],
                links: ["0,1,2,3,4,5,6,7"],
                cotem: "Libra",
                position: new e.Vector3(-800, 0, 0),
                watchPosition: new e.Vector3(-2e3, 0, 0),
                cameraPosition: new e.Vector3(-1e3, 0, 0),
                index: 6,
                materials: [2, 1, 3, 4, 2, 4, 1, 1],
                sizes: [1.5, 1, 0.3, 1, 0.5, 0.5, 0.5, 1]
            }, {
                name: "衣影思念",
                vertices: [[33, 6, -6], [3, 17, 0], [-32, 17.3, 6], [5.5, 0, 2], [-8, -5, 4], [14, -18, 8], [-4, -23.8, 10]],
                links: ["0,1,2,3,4,5,6"],
                cotem: "Scorpio",
                position: new e.Vector3(-400, 566, 400),
                watchPosition: new e.Vector3(-1e3, 1414, 1e3),
                cameraPosition: new e.Vector3(-500, 707, 500),
                index: 7,
                materials: [2, 3, 2, 4, 1, 1, 4],
                sizes: [1.5, 1, 0.5, 0.3, 1, 0.8, 0.5]
            }, {
                name: "泪斩马谡",
                vertices: [[33, 16, 15], [18, 13, 12], [13, 5, 9], [5, -3, 5], [-10, -9, 2], [-22, -8, 0], [-34, -16, -2]],
                links: ["0,1,2,3,4,5,6"],
                cotem: "Sagittarius",
                rotateZ: 15,
                position: new e.Vector3(-400, -566, 400),
                watchPosition: new e.Vector3(-1e3, -1414, 1e3),
                cameraPosition: new e.Vector3(-500, -707, 500),
                index: 8,
                materials: [2, 4, 5, 1, 2, 4, 1],
                sizes: [1.5, 0.5, 0.3, 0.5, 0.5, 0.5, 0.5]
            }, {
                name: "空城退敌",
                vertices: [[-32, -14, 10], [-21, 14, -4], [-11, 17, -10], [4, 15.5, -4], [13, 18, -8], [29, 18, -10], [21, -14, 0], [1, -16, 8], [0, 0, 6], [-8, 4, 0], [-8, -14, -6]],
                links: ["0,1,2,3,4,5,6,7,8,9,10"],
                cotem: "Capricornus",
                rotateZ: 173,
                position: new e.Vector3(0, 0, 800),
                watchPosition: new e.Vector3(0, 0, 2e3),
                cameraPosition: new e.Vector3(0, 0, 1e3),
                index: 9,
                materials: [1, 4, 3, 4, 2, 4, 3, 4, 4, 1, 2],
                sizes: [1, 1, 0.5, 0.5, 1.5, 0.5, 0.3, 1, 0.3, 1, 1]
            }, {
                name: "梦回草庐",
                vertices: [[-13.4, -14.2, 10], [-11, 10, 0], [14, 10, 0], [14, -15, 10], [24, 2, 0], [34, 3.5, -4], [14, 19, -15], [3, 13, 15], [-10, 18, -12], [-19, 13, 15], [-33, 0, 4]],
                links: ["0,1,2,3,4,5,6,7,8,9,10"],
                cotem: "Aquarius",
                position: new e.Vector3(400, 566, 400),
                watchPosition: new e.Vector3(1e3, 1414, 1e3),
                cameraPosition: new e.Vector3(500, 707, 500),
                index: 10,
                materials: [2, 1, 4, 4, 2, 4, 2, 3, 4, 4, 1],
                sizes: [0.5, 0.1, 0.3, 0.5, 0.5, 0.2, 1, 0.3, 0.5, 0.5, 0.2]
            }, {
                name: "羽化魂归",
                vertices: [[20, 26, -10], [10, 30,-4], [2, 35, 0], [-10, 27, -4.8], [-19, 20, -8.8], [-11, -16, -6], [13, -18, -8], [7, -21, -8.6], [6, -36, -4], [-3, -21, -7], [0, -17, 0]],
                links: ["0,1,2,3,4,5,6,7,8,9,10"],
                cotem: "Pisces",
                position: new e.Vector3(400, -566, 400),
                watchPosition: new e.Vector3(1e3, -1414, 1e3),
                cameraPosition: new e.Vector3(500, -707, 500),
                index: 11,
                materials: [2, 4, 3, 3, 4, 1, 4, 1, 2, 2, 1],
                sizes: [1, 0.5, 0.3, 0.2, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
            }]
        }
    }, {}],
    22: [function (e, t, n) {
        "use strict";
        function i(e) {
            var t =null;
            $(h.horoscope).text(""), $(h.name).text(""), $(h.date).text("")
        }

        function o(e) {
            var t = null;
            $(h.question).html("") , $(h.answer).text("")
        }

        function r(e) {
            e.constellationId = e.constellationId || 0, i(e.constellationId), o(e.constellationId), $(".page-result").style("min-height", window.innerHeight / window.innerWidth * .64 + "rem").addClass("common-bg").show()
        }

        function s(e) {
            l.showLoading(), u.loadEssentialResource(__CONF__.RESOURCE.RESULT, function () {
                l.hideLoading(), r(e), d = !0
            }, function (e) {
                l.loadingPercent(e)
            })
        }

        function a() {
            $(h.btnAgain).on("click", function () {
                c.dispatch("playAgain");
                // thisPageNow.getElementsByClassName("board_2")[0].style.display = "none";
                // thisPageNow.getElementsByClassName("board_2")[0].style.opacity = "0";
                audioArr=[];
                for(var i=0; i<thisPageAudio;i++){
                    audioArr[i]=thisPageNow.getElementsByTagName("audio")[i].src;
                    thisPageNow.getElementsByTagName("audio")[i].src= "";
                    thisPageNow.getElementsByTagName("audio")[i].src =audioArr[i];
                }
            }), $(h.btnShare).on("click", function () {
                c.dispatch("shareToFriend")
            }), $(h.btnUcQuestion).on("click", function () {
                c.dispatch("ucQuestion")
            }), $(h.btnJesseTang).on("click", function () {
                c.dispatch("jesseTang")
            })
        }

        var c = e("../dispatcher"), u = e("../utils/resource"), l = e("../mask"), d = !1, h = {
            horoscope: ".page-result .analysis-cont",
            date: ".page-result .constell-date",
            name: ".page-result .constell-name",
            question: ".page-result .new-wrapper",
            answer: ".page-result .q-answer",
            btnAgain: ".page-result .playagain-btn",
            btnShare: ".page-result .share-btn",
            btnUcQuestion: ".page-result .query-link",
            btnJesseTang: ".page-result .tang-wrap"
        };
        n.init = function (e) {
            a(), s(e)
        }, n.render = function (e) {
            d && r(e)
        }
    }, {"../dispatcher": 9, "../mask": 13, "../utils/resource": 32}],
    23: [function (e, t, n) {
        "use strict";
        function i(e, t) {
            $(".logic-page").hide(), -1 === v.indexOf(e) && (w[e].init && w[e].init(o(t)), v.push(e)), w[e].render && w[e].render(o(t))
        }

        function o(e) {
            e = e || {};
            for (var t in y)y.hasOwnProperty(t) && (e[t] = y[t]);
            return e
        }

        function r() {
            p.register("inited", function () {
                a()
            }), p.register("selectStar", function () {
                d.logClick("ck_star")
            }), p.register("selectConstellationStar", function (e) {
                i("result", o(e)), l(), d.logVisit("result", window.Are.getJsonObj())
            }), p.register("playAgain", function () {
                d.logClick("ck_playAgain"), a()
            }), p.register("shareToFriend", function () {
                d.logClick("ck_shareToFriend"), u()
            }), p.register("download", function () {
                d.logClick("ck_download"), g(y.CONF.DOWNLOAD_SRC)
            }), p.register("play", function () {
                d.logClick("ck_play")
            }), p.register("selectConstellation", function () {
                d.logClick("ck_constellation")
            }), p.register("confirmStar", function () {
                d.logClick("ck_choice")
            }), p.register("ucQuestion", function () {
                d.logClickRedirect(__CONF__.UC_QUESTION_URL, "ck_ucquestion")
            }), p.register("jesseTang", function () {
                d.logClickRedirect(__CONF__.JESSE_TANG_URL, "ck_jessetang")
            }), p.register("indexResourceLoaded", function () {
                d.logVisit("index_loaded", window.Are.getJsonObj()), window.UEM.perf()
            }), p.register("indexBlocked", function () {
                d.logVisit("index_blocked")
            })
        }

        function s() {
            w = {
                index: e("../page-index"),
                result: e("../page-result"),
                degrade: e("../page-degrade")
            }, c(), r(), p.dispatch("inited"), l()
        }

        function a() {
            m.enableWebGL ? (d.logVisit("index"), i("index")) : (d.logVisit("degrade"), i("degrade"))
        }

        function c() {
            y = {};
            for (var e in window.__data)window.__data.hasOwnProperty(e) && (y[e] = window.__data[e]);
            y.CONF = window.__CONF__, y.MSG = window.__MSG__, y.FILTER = window.__FILTER__
        }

        function u() {
            var e = __MSG__.SHARE;
            h.share({
                title: e.title, desc: e.desc, imgUrl: e.imgUrl, link: e.link, showWechatMask: function () {
                    f.showWechatMask()
                }, domId: ""
            })
        }

        function l() {
            var e = __MSG__.SHARE;
            try {
                h.init({jsApiConf: y.jsApiConfig, title: e.title, desc: e.desc, imgUrl: e.imgUrl, link: e.link})
            } catch (t) {
            }
        }

        e("./../../bower_components/query/src/query.js"), e("../utils/adaptation"), e("../utils/are");
        var d = e("./../../bower_components/log/index.js"), h = e("./../../bower_components/share/src/share.js"), p = e("../dispatcher"), f = e("../mask"), m = e("../utils/utils"), g = e("../utils/download"), w = {}, v = [], y = {};
        n.init = function () {
            s()
        }
    }, {
        "../dispatcher": 9,
        "../mask": 13,
        "../page-degrade": 16,
        "../page-index": 20,
        "../page-result": 22,
        "../utils/adaptation": 26,
        "../utils/are": 27,
        "../utils/download": 29,
        "../utils/utils": 36,
        "./../../bower_components/log/index.js": 3,
        "./../../bower_components/query/src/query.js": 5,
        "./../../bower_components/share/src/share.js": 6
    }],
    24: [function (e, t, n) {
        "use strict";
        function i() {
            this.index = 0, this.current = 0, this.prev = 0, this.showid = 0, this.width = "0.12", this.dom = null, this.running = !1
        }

        function o() {
            var e, t = "";
            for (e = 0; e < r.length; e++)t += '<li data-idx="' + e + '">' + r[e].slice(0, 2) + "</li>";
            for (e = 0; e < r.length; e++)t += '<li data-idx="' + e + '">' + r[e].slice(0, 2) + "</li>";
            return t
        }

        var r = null, s = i.prototype;
        s.init = function (e) {
            this.dom = e, this.prev = this.current = 10 * -this.width, this.showid = 12, this.render(), this.update(), this.highlight()
        }, s.moveTo = function (e) {
            var t = e - this.index, n = this.showid;
            if (n === e || this.running)return !1;
            if (0 !== t) {
                t > 6 ? t -= 12 : -6 > t && (t += 12), this.showid += t, this.showid + 2 > 21 ? (this.prev = this.current = this.current + 12 * this.width, this.showid -= 12) : this.showid - 2 < 0 && (this.prev = this.current = this.current - 12 * this.width, this.showid += 12);
                var i = t * this.width, o = (this.index, this);
                return this.index = e, this.highlight(n), this.running = !0, function (e) {
                    o.current = o.prev - e * i, o.update(), e >= 1 && o.after()
                }
            }
        }, s.update = function () {
            this.dom.style.webkitTransform = "translateX(" + this.current + "rem)", this.dom.style.transform = "translateX(" + this.current + "rem)"
        }, s.highlight = function (e) {
            e = e || 0, this.dom.children[e].className = "", this.dom.children[e > 11 ? e - 12 : e + 12].className = "", this.dom.children[this.showid].className = "active", this.dom.children[this.showid > 11 ? this.showid - 12 : this.showid + 12].className = "active"
        }, s.after = function () {
            this.prev = this.current, this.running = !1
        }, s.render = function () {
            var e = o();
            this.dom.innerHTML = e
        }, s.show = function () {
            this.dom.parentNode.parentNode.style.display = "block";
        }, s.hide = function () {
            this.dom.parentNode.parentNode.style.display = "none"
        }, t.exports = new i
    }, {}],
    25: [function (e, t, n) {
        t.exports = function (e) {
            e.TrackballControls = function (t, n) {
                function i(e) {
                    p.enabled !== !1 && (window.removeEventListener("keydown", i), v = w, w === f.NONE && (e.keyCode !== p.keys[f.ROTATE] || p.noRotate ? e.keyCode !== p.keys[f.ZOOM] || p.noZoom ? e.keyCode !== p.keys[f.PAN] || p.noPan || (w = f.PAN) : w = f.ZOOM : w = f.ROTATE))
                }

                function o(e) {
                    p.enabled !== !1 && (w = v, window.addEventListener("keydown", i, !1))
                }

                function r(e) {
                    p.enabled !== !1 && (e.preventDefault(), w === f.NONE && (w = e.button), w !== f.ROTATE || p.noRotate ? w !== f.ZOOM || p.noZoom ? w !== f.PAN || p.noPan || (k.copy(P(e.pageX, e.pageY)), M.copy(k)) : (T.copy(P(e.pageX, e.pageY)), S.copy(T)) : (b.copy(R(e.pageX, e.pageY)), x.copy(b)), document.addEventListener("mousemove", s, !1), document.addEventListener("mouseup", a, !1), p.dispatchEvent(A))
                }

                function s(e) {
                    p.enabled !== !1 && (e.preventDefault(), e.stopPropagation(), w !== f.ROTATE || p.noRotate ? w !== f.ZOOM || p.noZoom ? w !== f.PAN || p.noPan || M.copy(P(e.pageX, e.pageY)) : S.copy(P(e.pageX, e.pageY)) : (x.copy(b), b.copy(R(e.pageX, e.pageY))))
                }

                function a(e) {
                    p.enabled !== !1 && (e.preventDefault(), e.stopPropagation(), w = f.NONE, document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", a), p.dispatchEvent(N))
                }

                function c(e) {
                    if (p.enabled !== !1) {
                        e.preventDefault(), e.stopPropagation();
                        var t = 0;
                        e.wheelDelta ? t = e.wheelDelta / 40 : e.detail && (t = -e.detail / 3), T.y += .01 * t, p.dispatchEvent(A), p.dispatchEvent(N)
                    }
                }

                function u(e) {
                    if (p.enabled !== !1) {
                        switch (e.touches.length) {
                            case 1:
                                w = f.TOUCH_ROTATE, b.copy(R(e.touches[0].pageX, e.touches[0].pageY)), x.copy(b);
                                break;
                            case 2:
                                w = f.TOUCH_ZOOM_PAN;
                                var t = e.touches[0].pageX - e.touches[1].pageX, n = e.touches[0].pageY - e.touches[1].pageY;
                                C = I = Math.sqrt(t * t + n * n);
                                var i = (e.touches[0].pageX + e.touches[1].pageX) / 2, o = (e.touches[0].pageY + e.touches[1].pageY) / 2;
                                k.copy(P(i, o)), M.copy(k);
                                break;
                            default:
                                w = f.NONE
                        }
                        p.dispatchEvent(A)
                    }
                }

                function l(e) {
                    if (p.enabled !== !1)switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
                        case 1:
                            x.copy(b), b.copy(R(e.touches[0].pageX, e.touches[0].pageY));
                            break;
                        case 2:
                            var t = e.touches[0].pageX - e.touches[1].pageX, n = e.touches[0].pageY - e.touches[1].pageY;
                            C = Math.sqrt(t * t + n * n);
                            var i = (e.touches[0].pageX + e.touches[1].pageX) / 2, o = (e.touches[0].pageY + e.touches[1].pageY) / 2;
                            M.copy(P(i, o));
                            break;
                        default:
                            w = f.NONE
                    }
                }

                function d(e) {
                    if (p.enabled !== !1) {
                        switch (e.touches.length) {
                            case 1:
                                x.copy(b), b.copy(R(e.touches[0].pageX, e.touches[0].pageY));
                                break;
                            case 2:
                                I = C = 0;
                                var t = (e.touches[0].pageX + e.touches[1].pageX) / 2, n = (e.touches[0].pageY + e.touches[1].pageY) / 2;
                                M.copy(P(t, n)), k.copy(M)
                        }
                        w = f.NONE, p.dispatchEvent(N)
                    }
                }

                function h(e) {
                    e.preventDefault()
                }

                var p = this, f = {NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4};
                this.object = t, this.domElement = void 0 !== n ? n : document, this.enabled = !0, this.screen = {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = .3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.noUp = !1, this.staticMoving = !1, this.dynamicDampingFactor = .2, this.minDistance = 0, this.maxDistance = 1 / 0, this.keys = [65, 83, 68], this.target = new e.Vector3;
                var m = 1e-6, g = new e.Vector3, w = f.NONE, v = f.NONE, y = new e.Vector3, x = new e.Vector2, b = new e.Vector2, _ = new e.Vector3, E = 0, T = new e.Vector2, S = new e.Vector2, I = 0, C = 0, k = new e.Vector2, M = new e.Vector2;
                this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.up0 = this.object.up.clone();
                var O = {type: "change"}, A = {type: "start"}, N = {type: "end"};
                this.handleResize = function () {
                    if (this.domElement === document)this.screen.left = 0, this.screen.top = 0, this.screen.width = window.innerWidth, this.screen.height = window.innerHeight; else {
                        var e = this.domElement.getBoundingClientRect(), t = this.domElement.ownerDocument.documentElement;
                        this.screen.left = e.left + window.pageXOffset - t.clientLeft, this.screen.top = e.top + window.pageYOffset - t.clientTop, this.screen.width = e.width, this.screen.height = e.height
                    }
                }, this.handleEvent = function (e) {
                    "function" == typeof this[e.type] && this[e.type](e)
                };
                var P = function () {
                    var t = new e.Vector2;
                    return function (e, n) {
                        return t.set((e - p.screen.left) / p.screen.width, (n - p.screen.top) / p.screen.height), t
                    }
                }(), R = function () {
                    var t = new e.Vector2;
                    return function (e, n) {
                        return t.set((e - .5 * p.screen.width - p.screen.left) / (.5 * p.screen.width), (p.screen.height + 2 * (p.screen.top - n)) / p.screen.width), t
                    }
                }();
                this.rotateCamera = function () {
                    var t, n = new e.Vector3, i = new e.Quaternion, o = new e.Vector3, r = new e.Vector3, s = new e.Vector3, a = new e.Vector3;
                    return function () {
                        a.set(b.x - x.x, b.y - x.y, 0), t = a.length(), t > .5 || (t ? (y.copy(p.object.position).sub(p.target), o.copy(y).normalize(), r.copy(p.object.up).normalize(), s.crossVectors(r, o).normalize(), r.setLength(this.noUp ? 0 : b.y - x.y), s.setLength(b.x - x.x), a.copy(r.add(s)), n.crossVectors(a, y).normalize(), t *= p.rotateSpeed, i.setFromAxisAngle(n, t), y.applyQuaternion(i), p.object.up.applyQuaternion(i), _.copy(n), E = t) : !p.staticMoving && E && (E *= Math.sqrt(1 - p.dynamicDampingFactor), y.copy(p.object.position).sub(p.target), i.setFromAxisAngle(_, E), y.applyQuaternion(i), p.object.up.applyQuaternion(i)), x.copy(b))
                    }
                }(), this.zoomCamera = function () {
                    var e;
                    w === f.TOUCH_ZOOM_PAN ? (e = I / C, I = C, y.multiplyScalar(e)) : (e = 1 + (S.y - T.y) * p.zoomSpeed, 1 !== e && e > 0 && (y.multiplyScalar(e), p.staticMoving ? T.copy(S) : T.y += (S.y - T.y) * this.dynamicDampingFactor))
                }, this.panCamera = function () {
                    var t = new e.Vector2, n = new e.Vector3, i = new e.Vector3;
                    return function () {
                        t.copy(M).sub(k), t.lengthSq() && (t.multiplyScalar(y.length() * p.panSpeed), i.copy(y).cross(p.object.up).setLength(t.x), i.add(n.copy(p.object.up).setLength(t.y)), p.object.position.add(i), p.target.add(i), p.staticMoving ? k.copy(M) : k.add(t.subVectors(M, k).multiplyScalar(p.dynamicDampingFactor)))
                    }
                }(), this.checkDistances = function () {
                    p.noZoom && p.noPan || (y.lengthSq() > p.maxDistance * p.maxDistance && (p.object.position.addVectors(p.target, y.setLength(p.maxDistance)), T.copy(S)), y.lengthSq() < p.minDistance * p.minDistance && (p.object.position.addVectors(p.target, y.setLength(p.minDistance)), T.copy(S)))
                }, this.update = function () {
                    y.subVectors(p.object.position, p.target), p.noRotate || p.rotateCamera(), p.noZoom || p.zoomCamera(), p.noPan || p.panCamera(), p.object.position.addVectors(p.target, y), p.checkDistances(), p.object.lookAt(p.target), g.distanceToSquared(p.object.position) > m && (p.dispatchEvent(O), g.copy(p.object.position))
                }, this.reset = function () {
                    w = f.NONE, v = f.NONE, p.target.copy(p.target0), p.object.position.copy(p.position0), p.object.up.copy(p.up0), y.subVectors(p.object.position, p.target), p.object.lookAt(p.target), p.dispatchEvent(O), g.copy(p.object.position)
                }, this.dispose = function () {
                    this.domElement.removeEventListener("contextmenu", h, !1), this.domElement.removeEventListener("mousedown", r, !1), this.domElement.removeEventListener("mousewheel", c, !1), this.domElement.removeEventListener("MozMousePixelScroll", c, !1), this.domElement.removeEventListener("touchstart", u, !1), this.domElement.removeEventListener("touchend", d, !1), this.domElement.removeEventListener("touchmove", l, !1), document.removeEventListener("mousemove", s, !1), document.removeEventListener("mouseup", a, !1), window.removeEventListener("keydown", i, !1), window.removeEventListener("keyup", o, !1)
                }, this.domElement.addEventListener("contextmenu", h, !1), this.domElement.addEventListener("mousedown", r, !1), this.domElement.addEventListener("mousewheel", c, !1), this.domElement.addEventListener("MozMousePixelScroll", c, !1), this.domElement.addEventListener("touchstart", u, !1), this.domElement.addEventListener("touchend", d, !1), this.domElement.addEventListener("touchmove", l, !1), window.addEventListener("keydown", i, !1), window.addEventListener("keyup", o, !1), this.handleResize(), this.update()
            }, e.TrackballControls.prototype = Object.create(e.EventDispatcher.prototype), e.TrackballControls.prototype.constructor = e.TrackballControls
        }
    }, {}],
    26: [function (e, t, n) {
        "use strict";
        function i() {
            o(), s.push(function () {
                o()
            })
        }

        function o() {
            r(), setTimeout(function () {
                r()
            }, 100)
        }

        function r() {
            document.querySelector("html").style.fontSize = window.innerWidth / l + "px", $("body").style("width", "0.64rem")
        }

        var s = [], a = 50, c = window.innerWidth, u = 640, l = u / 1e3;
        window.onresize = function () {
            if (Math.abs(c - window.innerWidth) > a) {
                c = window.innerWidth;
                for (var e = s.length; e--;)s[e]()
            }
        }, n.calculatePixel = function (e) {
            return parseInt(e * window.innerWidth / l, 10)
        }, i()
    }, {}],
    27: [function (e, t, n) {
        "use strict";
        !function () {
            function e(e, t) {
                return "number" == typeof e ? t > 0 ? e.toFixed(t) : e : i
            }

            function t(t, n, i, o) {
                o.forEach(function (o) {
                    var r = 0 !== i.length ? i + o.substring(0, 1).toUpperCase() + o.substring(1) : o;
                    n[r] = e(t[o], 3)
                })
            }

            function n(e, t, n) {
                for (var i in n)n.hasOwnProperty(i) && (e[t + "_" + i] = n[i])
            }

            var i = "unknown", o = ["x", "y", "z"], r = ["alpha", "beta", "gamma"], s = {
                orientation: {
                    acy: i,
                    hrd: i,
                    alpha: i,
                    beta: i,
                    gamma: i
                },
                motion: {
                    intv: i,
                    accX: i,
                    accY: i,
                    accZ: i,
                    accGX: i,
                    accGY: i,
                    accGZ: i,
                    rrAlpha: i,
                    rrBeta: i,
                    rrGamma: i
                },
                support: {isOrient: !1, isMotion: !1}
            }, a = function () {
                var e = 500, t = 0;
                return function () {
                    var n = new Date;
                    return n - t > e ? (t = n, !0) : void 0
                }
            }, c = a(), u = a();
            window.DeviceOrientationEvent && window.addEventListener("deviceorientation", function (n) {
                c() && (s.support.isOrient = !0, s.orientation.acy = e(n.webkitCompassAccuracy), s.orientation.hrd = e(n.webkitCompassHeading, 3), t(n, s.orientation, "", r))
            }, !1), window.DeviceMotionEvent && window.addEventListener("devicemotion", function (n) {
                u() && (s.support.isMotion = !0, s.motion.intv = e(n.interval, 3), n.acceleration && t(n.acceleration, s.motion, "acc", o), n.accelerationIncludingGravity && t(n.accelerationIncludingGravity, s.motion, "accG", o), n.rotationRate && t(n.rotationRate, s.motion, "rr", r))
            }, !1), window.Are = {
                getJsonObj: function () {
                    var e = {};
                    return n(e, "mt", s.motion), n(e, "ot", s.orientation), n(e, "st", s.support), e
                }
            }
        }()
    }, {}],
    28: [function (e, t, n) {
        var i = document.createElement("canvas"), o = i.getContext("2d");
        CanvasRenderingContext2D.prototype.roundRect = function (e, t, n, i, o) {
            var r = Math.min(n, i);
            return o > r / 2 && (o = r / 2), this.beginPath(), this.moveTo(e + o, t), this.arcTo(e + n, t, e + n, t + i, o), this.arcTo(e + n, t + i, e, t + i, o), this.arcTo(e, t + i, e, t, o), this.arcTo(e, t, e + n, t, o), this.closePath(), this
        }, i.width = "512", i.height = "512", n.text = function (e) {
            return o.clearRect(0, 0, 512, 512), o.fillStyle = "#fff", o.font = "70px Georgia", o.fillText(e, 165, 110), i.toDataURL()
        }, n.sky = function () {
            return o.clearRect(0, 0, 512, 512), o.fillStyle = "#18274a", o.fill(), i.toDataURL()
        }
    }, {}],
    29: [function (e, t, n) {
        "use strict";
        var i = e("./../../bower_components/ua/src/ua.js");
        t.exports = function (e) {
            var t = "";
            t = i.isIOS() ? "WECHAT" === i.pf ? e.IOS_WECHAT : e.IOS : "WECHAT" === i.pf ? e.ANDROID_WECHAT : e.ANDROID, window.location.href = t
        }
    }, {"./../../bower_components/ua/src/ua.js": 7}],
    30: [function (e, t, n) {
        "use strict";
        t.exports = {
            fastStore: [], slowStore: [], fastReady: !1, slowReady: !1, push: function (e, t, n) {
                return "function" != typeof t ? !1 : void(n ? (this.fastStore.push(function () {
                    return t.call(e)
                }), this.fastReady = !0) : (this.slowStore.push(function () {
                    return t.call(e)
                }), this.slowReady = !0))
            }, execFast: function () {
                this.fastStore.shift()(), this.fastReady = this.fastStore.length ? !0 : !1
            }, execSlow: function () {
                this.slowStore.shift()(), this.slowReady = this.slowStore.length ? !0 : !1
            }, clear: function () {
                this.fastStore = [], this.slowStore = [], this.fastReady = this.slowReady = !1
            }
        }
    }, {}],
    31: [function (e, t, n) {
        "use strict";
        function i(e, t) {
            var n = this;
            n.status = 1, n.func = e, n.time = t, n.timer = function () {
                setTimeout(function () {
                    n.status && (n.func(), n.timer())
                }, n.time)
            }, n.timer()
        }

        t.exports = i, i.prototype.stop = function () {
            this.status = 0
        }
    }, {}],
    32: [function (e, t, n) {
        "use strict";
        function i() {
            this.createTime = +new Date, this.averageSpeed = b, this.resourceNum = 0, this.waitingNum = 0, this.lastWaitingNum = -1, this.lastPercent = 0, this.virtualFrame = 0, this.lastLogicPercent = 0, this.transitionPercent = 0, this.percent = 0
        }

        function o(e, t, n) {
            t < e.length ? (e[t].onload = function () {
                o(e, ++t, n)
            }, e[t].setAttribute("src", e[t].getAttribute("data-src"))) : n()
        }

        function r(e, t, n) {
            var i = 0, o = setInterval(function () {
                i = s(e), n(i), 1 === i && (clearInterval(o), t(_))
            }, 1e3 / v)
        }

        function s(e) {
            if (0 === e.resourceNum)return 1;
            var t = (e.resourceNum - e.waitingNum) / e.resourceNum, n = u(e), i = l(e), o = 0;
            return c(e), o = n >= i ? t === i ? t : e.lastPercent : e.lastPercent = n, a(e, o)
        }

        function a(e, t) {
            return e.logicPercent !== t && (e.logicPercent = t, e.transitionPercent = (e.logicPercent - e.percent) / x), e.percent += e.transitionPercent, e.percent > e.logicPercent && (e.percent = e.logicPercent), e.percent
        }

        function c(e) {
            e.lastWaitingNum === e.waitingNum ? ++e.virtualFrame : (e.lastWaitingNum = e.waitingNum, e.virtualFrame = 0)
        }

        function u(e) {
            var t = (e.resourceNum - e.waitingNum + e.virtualFrame * e.averageSpeed) / e.resourceNum;
            return e.lastPercent > t ? e.lastPercent : t
        }

        function l(e) {
            var t = 0, n = 4;
            return t = e.waitingNum >= n ? n : e.waitingNum, (e.resourceNum - e.waitingNum + t) / e.resourceNum
        }
        var countFun=0;
        function d(e, t) {
            var n = 0;
            for (e.resourceNum = e.waitingNum = t.length; n < t.length;) {
                var i = _[t[n]];
                if (i)g(e, i, t[n])(); else {
                    switch (m(t[n])) {
                        case"STYLE":
                            i = p(t[n]);
                            break;
                        case"SCRIPT":
                            i = h(t[n]);
                            break;
                        case"AUDIO":
                            i = f(e, t[n]);
                            break;
                        default:
                            i = new Image
                    }
                    i instanceof Audio || (i.onload = g(e, i, t[n])), i.rel || (i.src = t[n])
                }
                ++n
            }
        }

        function h() {
            var e = document.createElement("script");
            return window.document.body.appendChild(e), e
        }

        function p(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet", t.type = "text/css", t.href = e, window.document.getElementsByTagName("head")[0].appendChild(t), t
        }

        function f(e, t) {
            var n = new Audio;
            return n.autoplay = !1, n.preload = !0, g(e, n, t)(), n
        }

        function m(e) {
            var t = 0, n = "";
            for (n in y)if (y.hasOwnProperty(n))for (t = y[n].length; t--;)if (e.indexOf("." + y[n][t]) > 0)return n
        }

        function g(e, t, n) {
            return function () {
                setTimeout(function () {
                    _[n] = t, --e.waitingNum, e.averageSpeed = w(e)
                }, 50)
            }
        }

        function w(e) {
            return (e.resourceNum - e.waitingNum) / ((+new Date - e.createTime) / (1e3 / v))
        }

        var v = 15, y = {
            STYLE: ["css"],
            SCRIPT: ["js"],
            IMG: ["jpg", "png", "gif", "webp"],
            AUDIO: ["mp3", "ogg", "wav"]
        }, x = 4, b = .2, _ = {};
        n.loadEssentialResource = function (e, t, n) {
            var o = new i;
            d(o, e),
                r(o, t || function () {
                }, n || function () {
                })
        }, n.loadContentResource = function (e, t) {
            o(document.querySelectorAll(e + " [data-src]"), 0, t || function () {
                })
        }, n.getResource = function (e) {
            return _[e]
        }
    }, {}],
    33: [function (e, t, n) {
        "use strict";
        function i(e, t) {
            var n = t.length;
            if (!(0 >= n))for (var i = 0; n > i; i++)$(e).append($("<p>" + t[i].title + "</p>"))
        }

        function o(e, t) {
            var n = 0, i = $($(e + " p").find()).get().length;
            $($(e + " p").find()[n]).show(), setInterval(function () {
                ++n >= i && (n = 0);
                for (var t = 0; i > t; t++)$($(e + " p").find()[t]).hide();
                $($(e + " p").find()[n]).show()
            }, t)
        }

        var r = {};
        n.render = function (e, t, n) {
            r[e] || (r[e] = !0, i(e, t), o(e, n))
        }
    }, {}],
    34: [function (e, t, n) {
        function i(e) {
            for (var t = 0; t < e.length; t++)if (e[t].el)for (var n = u; n;)e[t].el === n && e[t].fn(a), n = n.parentNode; else e[t].fn(a)
        }

        var o = [], r = [], s = [], a = {startX: 0, startY: 0, pageX: 0, pageY: 0}, c = !1, u = null, l = function (e) {
            if (c && (e = e || window.event, e.preventDefault(), e.touches.length)) {
                var t = event.touches[0];
                a.startX = a.pageX = t.pageX, a.startY = a.pageY = t.pageY, u = event.target
            }
        }, d = function (e) {
            if (c && (e = e || window.event, e.preventDefault(), e.touches.length)) {
                var t = event.touches[0];
                a.pageX = t.pageX, a.pageY = t.pageY
            }
        }, h = function (e) {
            return c ? (e = e || window.event, e.preventDefault(), Math.sqrt(Math.pow(a.startX - a.pageX, 2) + Math.pow(a.startY - a.pageY, 2)) < 10 ? void i(o) : a.startX - a.pageX > 50 ? void i(r) : a.startX - a.pageX < -50 ? void i(s) : void 0) : void 0
        };
        document.addEventListener("touchstart", l, !1), document.addEventListener("touchmove", d, !1), document.addEventListener("touchend", h, !1), t.exports = {
            onTap: function (e, t) {
                o.push({el: e, fn: t})
            }, onSlideLeft: function (e) {
                r.push({fn: e})
            }, onSlideRight: function (e) {
                s.push({fn: e})
            }, disable: function (e) {
                return c = !e
            }
        }
    }, {}],
    35: [function (e, t, n) {
        "use strict";
        function i(e) {
            if (r[e])return r[e];
            for (var t = 0, n = []; e > t; t++)n.push(o(t / (e - 1)));
            return r[e] = n, n
        }

        function o(e) {
            return .5 > e ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
        }

        var r = {};
        t.exports = i
    }, {}],
    36: [function (e, t, n) {
        "use strict";
        function i() {
            var e = /UCBrowser\/(\d+\.\d+\.\d+\.\d+)\s/i, t = e.exec(window.navigator.userAgent);
            return t && t.length >= 2 ? t[1] : void 0
        }

        function o() {
            var e = document.createElement("canvas"), t = null, n = !1;
            try {
                t = e.getContext("webgl") || e.getContext("experimental-webgl")
            } catch (i) {
            }
            return t && (n = !0), e = t = null, n
        }

        function r() {
            var e = !0, t = window.__CONF__.WHITE_REG, n = window.__CONF__.BLACK_REG, i = navigator.userAgent.toLowerCase();
            return t.test(i) ? e = !0 : n.test(i) && (e = !1), e
        }

        function s() {
            return r() && o() && !0
        }

        var a = e("./../../bower_components/ua/src/ua.js");
        n.numConvertToBitString = function (e, t) {
            t = t || 2, e += "";
            for (var n = t - (e + "").length; n--;)e = "0" + e;
            return e
        }, n.isLowVersion = function (e) {
            try {
                var t = e || i(), n = a.isIOS() ? window.__CONF__.NEW_VERSION.ios : window.__CONF__.NEW_VERSION.android, o = 0;
                for (t = t.split("."), n = n.split("."); o < n.length;) {
                    if (parseInt(t[o], 10) > parseInt(n[o], 10))return !1;
                    if (parseInt(t[o], 10) < parseInt(n[o], 10))return !0;
                    ++o
                }
                return !1
            } catch (r) {
                return !0
            }
        }, n.enableWebGL = s()
    }, {"./../../bower_components/ua/src/ua.js": 7}],
    37: [function (e, t, n) {
        "use strict";
        e("../../components/store").init(), window.packageVersion = 1451552661074
    }, {"../../components/store": 23}]
}, {}, [37]);
function musicPlay(){
    for(var i = 0; i< thisPageAudio; i++){
        thisPageNow.getElementsByClassName("music-bg")[i].play();
    } 
}
$("#audio-control").on("click", function () {
    if(this.className == "off"){
        musicPlay();
        this.className = "";
    }else {
        for(var i = 0; i< thisPageAudio; i++){
            thisPageNow.getElementsByClassName("music-bg")[i].pause();
        };
        this.className = "off"
    }
});
$(".toBuy-btn").on("click", function () {
    $(".page-result").hide(200);
    $(".buy-ticket").show();
    audioArr=[];
    for(var i=0; i<thisPageAudio;i++){
        audioArr[i]=thisPageNow.getElementsByTagName("audio")[i].src;
        thisPageNow.getElementsByTagName("audio")[i].src= "";
        thisPageNow.getElementsByTagName("audio")[i].src =audioArr[i];
    }
});