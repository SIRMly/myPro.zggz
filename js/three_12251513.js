// threejs.org/license
var THREE = {REVISION: "71"};
"object" == typeof module && (module.exports = THREE), void 0 === Math.sign && (Math.sign = function (e) {
    return 0 > e ? -1 : e > 0 ? 1 : +e
}), THREE.log = function () {
    console.log.apply(console, arguments)
}, THREE.warn = function () {
    console.warn.apply(console, arguments)
}, THREE.error = function () {
    console.error.apply(console, arguments)
}, THREE.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
}, THREE.CullFaceNone = 0, THREE.CullFaceBack = 1, THREE.CullFaceFront = 2, THREE.CullFaceFrontBack = 3, THREE.FrontFaceDirectionCW = 0, THREE.FrontFaceDirectionCCW = 1, THREE.BasicShadowMap = 0, THREE.PCFShadowMap = 1, THREE.PCFSoftShadowMap = 2, THREE.FrontSide = 0, THREE.BackSide = 1, THREE.DoubleSide = 2, THREE.NoShading = 0, THREE.FlatShading = 1, THREE.SmoothShading = 2, THREE.NoColors = 0, THREE.FaceColors = 1, THREE.VertexColors = 2, THREE.NoBlending = 0, THREE.NormalBlending = 1, THREE.AdditiveBlending = 2, THREE.SubtractiveBlending = 3, THREE.MultiplyBlending = 4, THREE.CustomBlending = 5, THREE.AddEquation = 100, THREE.SubtractEquation = 101, THREE.ReverseSubtractEquation = 102, THREE.MinEquation = 103, THREE.MaxEquation = 104, THREE.ZeroFactor = 200, THREE.OneFactor = 201, THREE.SrcColorFactor = 202, THREE.OneMinusSrcColorFactor = 203, THREE.SrcAlphaFactor = 204, THREE.OneMinusSrcAlphaFactor = 205, THREE.DstAlphaFactor = 206, THREE.OneMinusDstAlphaFactor = 207, THREE.DstColorFactor = 208, THREE.OneMinusDstColorFactor = 209, THREE.SrcAlphaSaturateFactor = 210, THREE.MultiplyOperation = 0, THREE.MixOperation = 1, THREE.AddOperation = 2, THREE.UVMapping = 300, THREE.CubeReflectionMapping = 301, THREE.CubeRefractionMapping = 302, THREE.EquirectangularReflectionMapping = 303, THREE.EquirectangularRefractionMapping = 304, THREE.SphericalReflectionMapping = 305, THREE.RepeatWrapping = 1e3, THREE.ClampToEdgeWrapping = 1001, THREE.MirroredRepeatWrapping = 1002, THREE.NearestFilter = 1003, THREE.NearestMipMapNearestFilter = 1004, THREE.NearestMipMapLinearFilter = 1005, THREE.LinearFilter = 1006, THREE.LinearMipMapNearestFilter = 1007, THREE.LinearMipMapLinearFilter = 1008, THREE.UnsignedByteType = 1009, THREE.ByteType = 1010, THREE.ShortType = 1011, THREE.UnsignedShortType = 1012, THREE.IntType = 1013, THREE.UnsignedIntType = 1014, THREE.FloatType = 1015, THREE.HalfFloatType = 1025, THREE.UnsignedShort4444Type = 1016, THREE.UnsignedShort5551Type = 1017, THREE.UnsignedShort565Type = 1018, THREE.AlphaFormat = 1019, THREE.RGBFormat = 1020, THREE.RGBAFormat = 1021, THREE.LuminanceFormat = 1022, THREE.LuminanceAlphaFormat = 1023, THREE.RGBEFormat = THREE.RGBAFormat, THREE.RGB_S3TC_DXT1_Format = 2001, THREE.RGBA_S3TC_DXT1_Format = 2002, THREE.RGBA_S3TC_DXT3_Format = 2003, THREE.RGBA_S3TC_DXT5_Format = 2004, THREE.RGB_PVRTC_4BPPV1_Format = 2100, THREE.RGB_PVRTC_2BPPV1_Format = 2101, THREE.RGBA_PVRTC_4BPPV1_Format = 2102, THREE.RGBA_PVRTC_2BPPV1_Format = 2103, THREE.Projector = function () {
    THREE.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function (e, t) {
        THREE.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
    }, this.unprojectVector = function (e, t) {
        THREE.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
    }, this.pickingRay = function (e, t) {
        THREE.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    }
}, THREE.CanvasRenderer = function () {
    THREE.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElement("canvas"), this.clear = function () {
    }, this.render = function () {
    }, this.setClearColor = function () {
    }, this.setSize = function () {
    }
}, THREE.Color = function (e) {
    return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(e)
}, THREE.Color.prototype = {
    constructor: THREE.Color, r: 1, g: 1, b: 1, set: function (e) {
        return e instanceof THREE.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
    }, setHex: function (e) {
        return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
    }, setRGB: function (e, t, r) {
        return this.r = e, this.g = t, this.b = r, this
    }, setHSL: function (e, t, r) {
        if (0 === t)this.r = this.g = this.b = r; else {
            var i = function (e, t, r) {
                return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? e + 6 * (t - e) * r : .5 > r ? t : 2 / 3 > r ? e + 6 * (t - e) * (2 / 3 - r) : e
            }, n = .5 >= r ? r * (1 + t) : r + t - r * t, a = 2 * r - n;
            this.r = i(a, n, e + 1 / 3), this.g = i(a, n, e), this.b = i(a, n, e - 1 / 3)
        }
        return this
    }, setStyle: function (e) {
        if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(e)) {
            var t = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(e);
            return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, this
        }
        if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(e)) {
            var t = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(e);
            return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, this
        }
        if (/^\#([0-9a-f]{6})$/i.test(e)) {
            var t = /^\#([0-9a-f]{6})$/i.exec(e);
            return this.setHex(parseInt(t[1], 16)), this
        }
        if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)) {
            var t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e);
            return this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16)), this
        }
        return /^(\w+)$/i.test(e) ? (this.setHex(THREE.ColorKeywords[e]), this) : void 0
    }, copy: function (e) {
        return this.r = e.r, this.g = e.g, this.b = e.b, this
    }, copyGammaToLinear: function (e, t) {
        return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
    }, copyLinearToGamma: function (e, t) {
        void 0 === t && (t = 2);
        var r = t > 0 ? 1 / t : 1;
        return this.r = Math.pow(e.r, r), this.g = Math.pow(e.g, r), this.b = Math.pow(e.b, r), this
    }, convertGammaToLinear: function () {
        var e = this.r, t = this.g, r = this.b;
        return this.r = e * e, this.g = t * t, this.b = r * r, this
    }, convertLinearToGamma: function () {
        return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
    }, getHex: function () {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    }, getHexString: function () {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    }, getHSL: function (e) {
        var t, r, i = e || {
                h: 0,
                s: 0,
                l: 0
            }, n = this.r, a = this.g, o = this.b, s = Math.max(n, a, o), h = Math.min(n, a, o), l = (h + s) / 2;
        if (h === s)t = 0, r = 0; else {
            var u = s - h;
            switch (r = .5 >= l ? u / (s + h) : u / (2 - s - h), s) {
                case n:
                    t = (a - o) / u + (o > a ? 6 : 0);
                    break;
                case a:
                    t = (o - n) / u + 2;
                    break;
                case o:
                    t = (n - a) / u + 4
            }
            t /= 6
        }
        return i.h = t, i.s = r, i.l = l, i
    }, getStyle: function () {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    }, offsetHSL: function (e, t, r) {
        var i = this.getHSL();
        return i.h += e, i.s += t, i.l += r, this.setHSL(i.h, i.s, i.l), this
    }, add: function (e) {
        return this.r += e.r, this.g += e.g, this.b += e.b, this
    }, addColors: function (e, t) {
        return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
    }, addScalar: function (e) {
        return this.r += e, this.g += e, this.b += e, this
    }, multiply: function (e) {
        return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
    }, multiplyScalar: function (e) {
        return this.r *= e, this.g *= e, this.b *= e, this
    }, lerp: function (e, t) {
        return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
    }, equals: function (e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }, fromArray: function (e) {
        return this.r = e[0], this.g = e[1], this.b = e[2], this
    }, toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
    }, clone: function () {
        return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }
}, THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}, THREE.Quaternion = function (e, t, r, i) {
    this._x = e || 0, this._y = t || 0, this._z = r || 0, this._w = void 0 !== i ? i : 1
}, THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion, _x: 0, _y: 0, _z: 0, _w: 0, get x() {
        return this._x
    }, set x(e) {
        this._x = e, this.onChangeCallback()
    }, get y() {
        return this._y
    }, set y(e) {
        this._y = e, this.onChangeCallback()
    }, get z() {
        return this._z
    }, set z(e) {
        this._z = e, this.onChangeCallback()
    }, get w() {
        return this._w
    }, set w(e) {
        this._w = e, this.onChangeCallback()
    }, set: function (e, t, r, i) {
        return this._x = e, this._y = t, this._z = r, this._w = i, this.onChangeCallback(), this
    }, copy: function (e) {
        return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
    }, setFromEuler: function (e, t) {
        if (e instanceof THREE.Euler == !1)throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var r = Math.cos(e._x / 2), i = Math.cos(e._y / 2), n = Math.cos(e._z / 2), a = Math.sin(e._x / 2), o = Math.sin(e._y / 2), s = Math.sin(e._z / 2);
        return "XYZ" === e.order ? (this._x = a * i * n + r * o * s, this._y = r * o * n - a * i * s, this._z = r * i * s + a * o * n, this._w = r * i * n - a * o * s) : "YXZ" === e.order ? (this._x = a * i * n + r * o * s, this._y = r * o * n - a * i * s, this._z = r * i * s - a * o * n, this._w = r * i * n + a * o * s) : "ZXY" === e.order ? (this._x = a * i * n - r * o * s, this._y = r * o * n + a * i * s, this._z = r * i * s + a * o * n, this._w = r * i * n - a * o * s) : "ZYX" === e.order ? (this._x = a * i * n - r * o * s, this._y = r * o * n + a * i * s, this._z = r * i * s - a * o * n, this._w = r * i * n + a * o * s) : "YZX" === e.order ? (this._x = a * i * n + r * o * s, this._y = r * o * n + a * i * s, this._z = r * i * s - a * o * n, this._w = r * i * n - a * o * s) : "XZY" === e.order && (this._x = a * i * n - r * o * s, this._y = r * o * n - a * i * s, this._z = r * i * s + a * o * n, this._w = r * i * n + a * o * s), t !== !1 && this.onChangeCallback(), this
    }, setFromAxisAngle: function (e, t) {
        var r = t / 2, i = Math.sin(r);
        return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(r), this.onChangeCallback(), this
    }, setFromRotationMatrix: function (e) {
        var t, r = e.elements, i = r[0], n = r[4], a = r[8], o = r[1], s = r[5], h = r[9], l = r[2], u = r[6], c = r[10], E = i + s + c;
        return E > 0 ? (t = .5 / Math.sqrt(E + 1), this._w = .25 / t, this._x = (u - h) * t, this._y = (a - l) * t, this._z = (o - n) * t) : i > s && i > c ? (t = 2 * Math.sqrt(1 + i - s - c), this._w = (u - h) / t, this._x = .25 * t, this._y = (n + o) / t, this._z = (a + l) / t) : s > c ? (t = 2 * Math.sqrt(1 + s - i - c), this._w = (a - l) / t, this._x = (n + o) / t, this._y = .25 * t, this._z = (h + u) / t) : (t = 2 * Math.sqrt(1 + c - i - s), this._w = (o - n) / t, this._x = (a + l) / t, this._y = (h + u) / t, this._z = .25 * t), this.onChangeCallback(), this
    }, setFromUnitVectors: function () {
        var e, t, r = 1e-6;
        return function (i, n) {
            return void 0 === e && (e = new THREE.Vector3), t = i.dot(n) + 1, r > t ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize(), this
        }
    }(), inverse: function () {
        return this.conjugate().normalize(), this
    }, conjugate: function () {
        return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
    }, dot: function (e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }, lengthSq: function () {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }, length: function () {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }, normalize: function () {
        var e = this.length();
        return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
    }, multiply: function (e, t) {
        return void 0 !== t ? (THREE.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
    }, multiplyQuaternions: function (e, t) {
        var r = e._x, i = e._y, n = e._z, a = e._w, o = t._x, s = t._y, h = t._z, l = t._w;
        return this._x = r * l + a * o + i * h - n * s, this._y = i * l + a * s + n * o - r * h, this._z = n * l + a * h + r * s - i * o, this._w = a * l - r * o - i * s - n * h, this.onChangeCallback(), this
    }, multiplyVector3: function (e) {
        return THREE.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
    }, slerp: function (e, t) {
        if (0 === t)return this;
        if (1 === t)return this.copy(e);
        var r = this._x, i = this._y, n = this._z, a = this._w, o = a * e._w + r * e._x + i * e._y + n * e._z;
        if (0 > o ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)return this._w = a, this._x = r, this._y = i, this._z = n, this;
        var s = Math.acos(o), h = Math.sqrt(1 - o * o);
        if (Math.abs(h) < .001)return this._w = .5 * (a + this._w), this._x = .5 * (r + this._x), this._y = .5 * (i + this._y), this._z = .5 * (n + this._z), this;
        var l = Math.sin((1 - t) * s) / h, u = Math.sin(t * s) / h;
        return this._w = a * l + this._w * u, this._x = r * l + this._x * u, this._y = i * l + this._y * u, this._z = n * l + this._z * u, this.onChangeCallback(), this
    }, equals: function (e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }, fromArray: function (e, t) {
        return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
    }, toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
    }, onChange: function (e) {
        return this.onChangeCallback = e, this
    }, onChangeCallback: function () {
    }, clone: function () {
        return new THREE.Quaternion(this._x, this._y, this._z, this._w)
    }
}, THREE.Quaternion.slerp = function (e, t, r, i) {
    return r.copy(e).slerp(t, i)
}, THREE.Vector2 = function (e, t) {
    this.x = e || 0, this.y = t || 0
}, THREE.Vector2.prototype = {
    constructor: THREE.Vector2, set: function (e, t) {
        return this.x = e, this.y = t, this
    }, setX: function (e) {
        return this.x = e, this
    }, setY: function (e) {
        return this.y = e, this
    }, setComponent: function (e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, getComponent: function (e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, copy: function (e) {
        return this.x = e.x, this.y = e.y, this
    }, add: function (e, t) {
        return void 0 !== t ? (THREE.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
    }, addScalar: function (e) {
        return this.x += e, this.y += e, this
    }, addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this
    }, sub: function (e, t) {
        return void 0 !== t ? (THREE.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
    }, subScalar: function (e) {
        return this.x -= e, this.y -= e, this
    }, subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this
    }, multiply: function (e) {
        return this.x *= e.x, this.y *= e.y, this
    }, multiplyScalar: function (e) {
        return this.x *= e, this.y *= e, this
    }, divide: function (e) {
        return this.x /= e.x, this.y /= e.y, this
    }, divideScalar: function (e) {
        if (0 !== e) {
            var t = 1 / e;
            this.x *= t, this.y *= t
        } else this.x = 0, this.y = 0;
        return this
    }, min: function (e) {
        return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this
    }, max: function (e) {
        return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this
    }, clamp: function (e, t) {
        return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this
    }, clampScalar: function () {
        var e, t;
        return function (r, i) {
            return void 0 === e && (e = new THREE.Vector2, t = new THREE.Vector2), e.set(r, r), t.set(i, i), this.clamp(e, t)
        }
    }(), floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    }, ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    }, round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    }, roundToZero: function () {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    }, negate: function () {
        return this.x = -this.x, this.y = -this.y, this
    }, dot: function (e) {
        return this.x * e.x + this.y * e.y
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, distanceTo: function (e) {
        return Math.sqrt(this.distanceToSquared(e))
    }, distanceToSquared: function (e) {
        var t = this.x - e.x, r = this.y - e.y;
        return t * t + r * r
    }, setLength: function (e) {
        var t = this.length();
        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
    }, lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
    }, lerpVectors: function (e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e), this
    }, equals: function (e) {
        return e.x === this.x && e.y === this.y
    }, fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
    }, toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
    }, fromAttribute: function (e, t, r) {
        return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this
    }, clone: function () {
        return new THREE.Vector2(this.x, this.y)
    }
}, THREE.Vector3 = function (e, t, r) {
    this.x = e || 0, this.y = t || 0, this.z = r || 0
}, THREE.Vector3.prototype = {
    constructor: THREE.Vector3, set: function (e, t, r) {
        return this.x = e, this.y = t, this.z = r, this
    }, setX: function (e) {
        return this.x = e, this
    }, setY: function (e) {
        return this.y = e, this
    }, setZ: function (e) {
        return this.z = e, this
    }, setComponent: function (e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, getComponent: function (e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, copy: function (e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this
    }, add: function (e, t) {
        return void 0 !== t ? (THREE.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
    }, addScalar: function (e) {
        return this.x += e, this.y += e, this.z += e, this
    }, addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
    }, sub: function (e, t) {
        return void 0 !== t ? (THREE.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
    }, subScalar: function (e) {
        return this.x -= e, this.y -= e, this.z -= e, this
    }, subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
    }, multiply: function (e, t) {
        return void 0 !== t ? (THREE.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
    }, multiplyScalar: function (e) {
        return this.x *= e, this.y *= e, this.z *= e, this
    }, multiplyVectors: function (e, t) {
        return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
    }, applyEuler: function () {
        var e;
        return function (t) {
            return t instanceof THREE.Euler == !1 && THREE.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."), void 0 === e && (e = new THREE.Quaternion), this.applyQuaternion(e.setFromEuler(t)), this
        }
    }(), applyAxisAngle: function () {
        var e;
        return function (t, r) {
            return void 0 === e && (e = new THREE.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, r)), this
        }
    }(), applyMatrix3: function (e) {
        var t = this.x, r = this.y, i = this.z, n = e.elements;
        return this.x = n[0] * t + n[3] * r + n[6] * i, this.y = n[1] * t + n[4] * r + n[7] * i, this.z = n[2] * t + n[5] * r + n[8] * i, this
    }, applyMatrix4: function (e) {
        var t = this.x, r = this.y, i = this.z, n = e.elements;
        return this.x = n[0] * t + n[4] * r + n[8] * i + n[12], this.y = n[1] * t + n[5] * r + n[9] * i + n[13], this.z = n[2] * t + n[6] * r + n[10] * i + n[14], this
    }, applyProjection: function (e) {
        var t = this.x, r = this.y, i = this.z, n = e.elements, a = 1 / (n[3] * t + n[7] * r + n[11] * i + n[15]);
        return this.x = (n[0] * t + n[4] * r + n[8] * i + n[12]) * a, this.y = (n[1] * t + n[5] * r + n[9] * i + n[13]) * a, this.z = (n[2] * t + n[6] * r + n[10] * i + n[14]) * a, this
    }, applyQuaternion: function (e) {
        var t = this.x, r = this.y, i = this.z, n = e.x, a = e.y, o = e.z, s = e.w, h = s * t + a * i - o * r, l = s * r + o * t - n * i, u = s * i + n * r - a * t, c = -n * t - a * r - o * i;
        return this.x = h * s + c * -n + l * -o - u * -a, this.y = l * s + c * -a + u * -n - h * -o, this.z = u * s + c * -o + h * -a - l * -n, this
    }, project: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Matrix4), e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyProjection(e)
        }
    }(), unproject: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Matrix4), e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyProjection(e)
        }
    }(), transformDirection: function (e) {
        var t = this.x, r = this.y, i = this.z, n = e.elements;
        return this.x = n[0] * t + n[4] * r + n[8] * i, this.y = n[1] * t + n[5] * r + n[9] * i, this.z = n[2] * t + n[6] * r + n[10] * i, this.normalize(), this
    }, divide: function (e) {
        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
    }, divideScalar: function (e) {
        if (0 !== e) {
            var t = 1 / e;
            this.x *= t, this.y *= t, this.z *= t
        } else this.x = 0, this.y = 0, this.z = 0;
        return this
    }, min: function (e) {
        return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this
    }, max: function (e) {
        return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this
    }, clamp: function (e, t) {
        return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this
    }, clampScalar: function () {
        var e, t;
        return function (r, i) {
            return void 0 === e && (e = new THREE.Vector3, t = new THREE.Vector3), e.set(r, r, r), t.set(i, i, i), this.clamp(e, t)
        }
    }(), floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    }, ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    }, round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    }, roundToZero: function () {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    }, negate: function () {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    }, dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, setLength: function (e) {
        var t = this.length();
        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
    }, lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
    }, lerpVectors: function (e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e), this
    }, cross: function (e, t) {
        if (void 0 !== t)return THREE.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
        var r = this.x, i = this.y, n = this.z;
        return this.x = i * e.z - n * e.y, this.y = n * e.x - r * e.z, this.z = r * e.y - i * e.x, this
    }, crossVectors: function (e, t) {
        var r = e.x, i = e.y, n = e.z, a = t.x, o = t.y, s = t.z;
        return this.x = i * s - n * o, this.y = n * a - r * s, this.z = r * o - i * a, this
    }, projectOnVector: function () {
        var e, t;
        return function (r) {
            return void 0 === e && (e = new THREE.Vector3), e.copy(r).normalize(), t = this.dot(e), this.copy(e).multiplyScalar(t)
        }
    }(), projectOnPlane: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Vector3), e.copy(this).projectOnVector(t), this.sub(e)
        }
    }(), reflect: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
        }
    }(), angleTo: function (e) {
        var t = this.dot(e) / (this.length() * e.length());
        return Math.acos(THREE.Math.clamp(t, -1, 1))
    }, distanceTo: function (e) {
        return Math.sqrt(this.distanceToSquared(e))
    }, distanceToSquared: function (e) {
        var t = this.x - e.x, r = this.y - e.y, i = this.z - e.z;
        return t * t + r * r + i * i
    }, setEulerFromRotationMatrix: function (e, t) {
        THREE.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
    }, setEulerFromQuaternion: function (e, t) {
        THREE.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
    }, getPositionFromMatrix: function (e) {
        return THREE.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
    }, getScaleFromMatrix: function (e) {
        return THREE.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
    }, getColumnFromMatrix: function (e, t) {
        return THREE.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
    }, setFromMatrixPosition: function (e) {
        return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
    }, setFromMatrixScale: function (e) {
        var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(), r = this.set(e.elements[4], e.elements[5], e.elements[6]).length(), i = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
        return this.x = t, this.y = r, this.z = i, this
    }, setFromMatrixColumn: function (e, t) {
        var r = 4 * e, i = t.elements;
        return this.x = i[r], this.y = i[r + 1], this.z = i[r + 2], this
    }, equals: function (e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }, fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
    }, toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
    }, fromAttribute: function (e, t, r) {
        return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this
    }, clone: function () {
        return new THREE.Vector3(this.x, this.y, this.z)
    }
},THREE.Vector4 = function (e, t, r, i) {
    this.x = e || 0, this.y = t || 0, this.z = r || 0, this.w = void 0 !== i ? i : 1
},THREE.Vector4.prototype = {
    constructor: THREE.Vector4, set: function (e, t, r, i) {
        return this.x = e, this.y = t, this.z = r, this.w = i, this
    }, setX: function (e) {
        return this.x = e, this
    }, setY: function (e) {
        return this.y = e, this
    }, setZ: function (e) {
        return this.z = e, this
    }, setW: function (e) {
        return this.w = e, this
    }, setComponent: function (e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, getComponent: function (e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, copy: function (e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
    }, add: function (e, t) {
        return void 0 !== t ? (THREE.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
    }, addScalar: function (e) {
        return this.x += e, this.y += e, this.z += e, this.w += e, this
    }, addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
    }, sub: function (e, t) {
        return void 0 !== t ? (THREE.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
    }, subScalar: function (e) {
        return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
    }, subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
    }, multiplyScalar: function (e) {
        return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
    }, applyMatrix4: function (e) {
        var t = this.x, r = this.y, i = this.z, n = this.w, a = e.elements;
        return this.x = a[0] * t + a[4] * r + a[8] * i + a[12] * n, this.y = a[1] * t + a[5] * r + a[9] * i + a[13] * n, this.z = a[2] * t + a[6] * r + a[10] * i + a[14] * n, this.w = a[3] * t + a[7] * r + a[11] * i + a[15] * n, this
    }, divideScalar: function (e) {
        if (0 !== e) {
            var t = 1 / e;
            this.x *= t, this.y *= t, this.z *= t, this.w *= t
        } else this.x = 0, this.y = 0, this.z = 0, this.w = 1;
        return this
    }, setAxisAngleFromQuaternion: function (e) {
        this.w = 2 * Math.acos(e.w);
        var t = Math.sqrt(1 - e.w * e.w);
        return 1e-4 > t ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
    }, setAxisAngleFromRotationMatrix: function (e) {
        var t, r, i, n, a = .01, o = .1, s = e.elements, h = s[0], l = s[4], u = s[8], c = s[1], E = s[5], f = s[9], d = s[2], p = s[6], m = s[10];
        if (Math.abs(l - c) < a && Math.abs(u - d) < a && Math.abs(f - p) < a) {
            if (Math.abs(l + c) < o && Math.abs(u + d) < o && Math.abs(f + p) < o && Math.abs(h + E + m - 3) < o)return this.set(1, 0, 0, 0), this;
            t = Math.PI;
            var T = (h + 1) / 2, g = (E + 1) / 2, v = (m + 1) / 2, R = (l + c) / 4, y = (u + d) / 4, x = (f + p) / 4;
            return T > g && T > v ? a > T ? (r = 0, i = .707106781, n = .707106781) : (r = Math.sqrt(T), i = R / r, n = y / r) : g > v ? a > g ? (r = .707106781, i = 0, n = .707106781) : (i = Math.sqrt(g), r = R / i, n = x / i) : a > v ? (r = .707106781, i = .707106781, n = 0) : (n = Math.sqrt(v), r = y / n, i = x / n), this.set(r, i, n, t), this
        }
        var _ = Math.sqrt((p - f) * (p - f) + (u - d) * (u - d) + (c - l) * (c - l));
        return Math.abs(_) < .001 && (_ = 1), this.x = (p - f) / _, this.y = (u - d) / _, this.z = (c - l) / _, this.w = Math.acos((h + E + m - 1) / 2), this
    }, min: function (e) {
        return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this.w > e.w && (this.w = e.w), this
    }, max: function (e) {
        return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this.w < e.w && (this.w = e.w), this
    }, clamp: function (e, t) {
        return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this.w < e.w ? this.w = e.w : this.w > t.w && (this.w = t.w), this
    }, clampScalar: function () {
        var e, t;
        return function (r, i) {
            return void 0 === e && (e = new THREE.Vector4, t = new THREE.Vector4), e.set(r, r, r, r), t.set(i, i, i, i), this.clamp(e, t)
        }
    }(), floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    }, ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    }, round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    }, roundToZero: function () {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    }, negate: function () {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    }, dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, setLength: function (e) {
        var t = this.length();
        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
    }, lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
    }, lerpVectors: function (e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e), this
    }, equals: function (e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }, fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
    }, toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
    }, fromAttribute: function (e, t, r) {
        return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this.w = e.array[t + 3], this;
    }, clone: function () {
        return new THREE.Vector4(this.x, this.y, this.z, this.w)
    }
},THREE.Euler = function (e, t, r, i) {
    this._x = e || 0, this._y = t || 0, this._z = r || 0, this._order = i || THREE.Euler.DefaultOrder
},THREE.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],THREE.Euler.DefaultOrder = "XYZ",THREE.Euler.prototype = {
    constructor: THREE.Euler,
    _x: 0,
    _y: 0,
    _z: 0,
    _order: THREE.Euler.DefaultOrder,
    get x() {
        return this._x
    },
    set x(e) {
        this._x = e, this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(e) {
        this._y = e, this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(e) {
        this._z = e, this.onChangeCallback()
    },
    get order() {
        return this._order
    },
    set order(e) {
        this._order = e, this.onChangeCallback()
    },
    set: function (e, t, r, i) {
        return this._x = e, this._y = t, this._z = r, this._order = i || this._order, this.onChangeCallback(), this
    },
    copy: function (e) {
        return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
    },
    setFromRotationMatrix: function (e, t, r) {
        var i = THREE.Math.clamp, n = e.elements, a = n[0], o = n[4], s = n[8], h = n[1], l = n[5], u = n[9], c = n[2], E = n[6], f = n[10];
        return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(i(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(E, l), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-i(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(s, f), this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-c, a), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(i(E, -1, 1)), Math.abs(E) < .99999 ? (this._y = Math.atan2(-c, f), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(h, a))) : "ZYX" === t ? (this._y = Math.asin(-i(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(E, f), this._z = Math.atan2(h, a)) : (this._x = 0, this._z = Math.atan2(-o, l))) : "YZX" === t ? (this._z = Math.asin(i(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-c, a)) : (this._x = 0, this._y = Math.atan2(s, f))) : "XZY" === t ? (this._z = Math.asin(-i(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(E, l), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-u, f), this._y = 0)) : THREE.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, r !== !1 && this.onChangeCallback(), this
    },
    setFromQuaternion: function () {
        var e;
        return function (t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, r, i), this
        }
    }(),
    setFromVector3: function (e, t) {
        return this.set(e.x, e.y, e.z, t || this._order)
    },
    reorder: function () {
        var e = new THREE.Quaternion;
        return function (t) {
            e.setFromEuler(this), this.setFromQuaternion(e, t)
        }
    }(),
    equals: function (e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    },
    fromArray: function (e) {
        return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
    },
    toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
    },
    toVector3: function (e) {
        return e ? e.set(this._x, this._y, this._z) : new THREE.Vector3(this._x, this._y, this._z)
    },
    onChange: function (e) {
        return this.onChangeCallback = e, this
    },
    onChangeCallback: function () {
    },
    clone: function () {
        return new THREE.Euler(this._x, this._y, this._z, this._order)
    }
},THREE.Line3 = function (e, t) {
    this.start = void 0 !== e ? e : new THREE.Vector3, this.end = void 0 !== t ? t : new THREE.Vector3
},THREE.Line3.prototype = {
    constructor: THREE.Line3, set: function (e, t) {
        return this.start.copy(e), this.end.copy(t), this
    }, copy: function (e) {
        return this.start.copy(e.start), this.end.copy(e.end), this
    }, center: function (e) {
        var t = e || new THREE.Vector3;
        return t.addVectors(this.start, this.end).multiplyScalar(.5)
    }, delta: function (e) {
        var t = e || new THREE.Vector3;
        return t.subVectors(this.end, this.start)
    }, distanceSq: function () {
        return this.start.distanceToSquared(this.end)
    }, distance: function () {
        return this.start.distanceTo(this.end)
    }, at: function (e, t) {
        var r = t || new THREE.Vector3;
        return this.delta(r).multiplyScalar(e).add(this.start)
    }, closestPointToPointParameter: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (r, i) {
            e.subVectors(r, this.start), t.subVectors(this.end, this.start);
            var n = t.dot(t), a = t.dot(e), o = a / n;
            return i && (o = THREE.Math.clamp(o, 0, 1)), o
        }
    }(), closestPointToPoint: function (e, t, r) {
        var i = this.closestPointToPointParameter(e, t), n = r || new THREE.Vector3;
        return this.delta(n).multiplyScalar(i).add(this.start)
    }, applyMatrix4: function (e) {
        return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
    }, equals: function (e) {
        return e.start.equals(this.start) && e.end.equals(this.end)
    }, clone: function () {
        return (new THREE.Line3).copy(this)
    }
},THREE.Box2 = function (e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector2(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new THREE.Vector2(-(1 / 0), -(1 / 0))
},THREE.Box2.prototype = {
    constructor: THREE.Box2, set: function (e, t) {
        return this.min.copy(e), this.max.copy(t), this
    }, setFromPoints: function (e) {
        this.makeEmpty();
        for (var t = 0, r = e.length; r > t; t++)this.expandByPoint(e[t]);
        return this
    }, setFromCenterAndSize: function () {
        var e = new THREE.Vector2;
        return function (t, r) {
            var i = e.copy(r).multiplyScalar(.5);
            return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
        }
    }(), copy: function (e) {
        return this.min.copy(e.min), this.max.copy(e.max), this
    }, makeEmpty: function () {
        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -(1 / 0), this
    }, empty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y
    }, center: function (e) {
        var t = e || new THREE.Vector2;
        return t.addVectors(this.min, this.max).multiplyScalar(.5)
    }, size: function (e) {
        var t = e || new THREE.Vector2;
        return t.subVectors(this.max, this.min)
    }, expandByPoint: function (e) {
        return this.min.min(e), this.max.max(e), this
    }, expandByVector: function (e) {
        return this.min.sub(e), this.max.add(e), this
    }, expandByScalar: function (e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this
    }, containsPoint: function (e) {
        return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
    }, containsBox: function (e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
    }, getParameter: function (e, t) {
        var r = t || new THREE.Vector2;
        return r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
    }, isIntersectionBox: function (e) {
        return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
    }, clampPoint: function (e, t) {
        var r = t || new THREE.Vector2;
        return r.copy(e).clamp(this.min, this.max)
    }, distanceToPoint: function () {
        var e = new THREE.Vector2;
        return function (t) {
            var r = e.copy(t).clamp(this.min, this.max);
            return r.sub(t).length()
        }
    }(), intersect: function (e) {
        return this.min.max(e.min), this.max.min(e.max), this
    }, union: function (e) {
        return this.min.min(e.min), this.max.max(e.max), this
    }, translate: function (e) {
        return this.min.add(e), this.max.add(e), this
    }, equals: function (e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }, clone: function () {
        return (new THREE.Box2).copy(this)
    }
},THREE.Box3 = function (e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new THREE.Vector3(-(1 / 0), -(1 / 0), -(1 / 0))
},THREE.Box3.prototype = {
    constructor: THREE.Box3, set: function (e, t) {
        return this.min.copy(e), this.max.copy(t), this
    }, setFromPoints: function (e) {
        this.makeEmpty();
        for (var t = 0, r = e.length; r > t; t++)this.expandByPoint(e[t]);
        return this
    }, setFromCenterAndSize: function () {
        var e = new THREE.Vector3;
        return function (t, r) {
            var i = e.copy(r).multiplyScalar(.5);
            return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
        }
    }(), setFromObject: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var r = this;
            return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse(function (t) {
                var i = t.geometry;
                if (void 0 !== i)if (i instanceof THREE.Geometry)for (var n = i.vertices, a = 0, o = n.length; o > a; a++)e.copy(n[a]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e); else if (i instanceof THREE.BufferGeometry && void 0 !== i.attributes.position)for (var s = i.attributes.position.array, a = 0, o = s.length; o > a; a += 3)e.set(s[a], s[a + 1], s[a + 2]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e)
            }), this
        }
    }(), copy: function (e) {
        return this.min.copy(e.min), this.max.copy(e.max), this
    }, makeEmpty: function () {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -(1 / 0), this
    }, empty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }, center: function (e) {
        var t = e || new THREE.Vector3;
        return t.addVectors(this.min, this.max).multiplyScalar(.5)
    }, size: function (e) {
        var t = e || new THREE.Vector3;
        return t.subVectors(this.max, this.min)
    }, expandByPoint: function (e) {
        return this.min.min(e), this.max.max(e), this
    }, expandByVector: function (e) {
        return this.min.sub(e), this.max.add(e), this
    }, expandByScalar: function (e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this
    }, containsPoint: function (e) {
        return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
    }, containsBox: function (e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
    }, getParameter: function (e, t) {
        var r = t || new THREE.Vector3;
        return r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }, isIntersectionBox: function (e) {
        return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
    }, clampPoint: function (e, t) {
        var r = t || new THREE.Vector3;
        return r.copy(e).clamp(this.min, this.max)
    }, distanceToPoint: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var r = e.copy(t).clamp(this.min, this.max);
            return r.sub(t).length()
        }
    }(), getBoundingSphere: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var r = t || new THREE.Sphere;
            return r.center = this.center(), r.radius = .5 * this.size(e).length(), r
        }
    }(), intersect: function (e) {
        return this.min.max(e.min), this.max.min(e.max), this
    }, union: function (e) {
        return this.min.min(e.min), this.max.max(e.max), this
    }, applyMatrix4: function () {
        var e = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function (t) {
            return e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.makeEmpty(), this.setFromPoints(e), this
        }
    }(), translate: function (e) {
        return this.min.add(e), this.max.add(e), this
    }, equals: function (e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }, clone: function () {
        return (new THREE.Box3).copy(this)
    }
},THREE.Matrix3 = function () {
    this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && THREE.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
},THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3, set: function (e, t, r, i, n, a, o, s, h) {
        var l = this.elements;
        return l[0] = e, l[3] = t, l[6] = r, l[1] = i, l[4] = n, l[7] = a, l[2] = o, l[5] = s, l[8] = h, this
    }, identity: function () {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    }, copy: function (e) {
        var t = e.elements;
        return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this
    }, multiplyVector3: function (e) {
        return THREE.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
    }, multiplyVector3Array: function (e) {
        return THREE.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
    }, applyToVector3Array: function () {
        var e = new THREE.Vector3;
        return function (t, r, i) {
            void 0 === r && (r = 0), void 0 === i && (i = t.length);
            for (var n = 0, a = r; i > n; n += 3, a += 3)e.x = t[a], e.y = t[a + 1], e.z = t[a + 2], e.applyMatrix3(this), t[a] = e.x, t[a + 1] = e.y, t[a + 2] = e.z;
            return t
        }
    }(), multiplyScalar: function (e) {
        var t = this.elements;
        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
    }, determinant: function () {
        var e = this.elements, t = e[0], r = e[1], i = e[2], n = e[3], a = e[4], o = e[5], s = e[6], h = e[7], l = e[8];
        return t * a * l - t * o * h - r * n * l + r * o * s + i * n * h - i * a * s
    }, getInverse: function (e, t) {
        var r = e.elements, i = this.elements;
        i[0] = r[10] * r[5] - r[6] * r[9], i[1] = -r[10] * r[1] + r[2] * r[9], i[2] = r[6] * r[1] - r[2] * r[5], i[3] = -r[10] * r[4] + r[6] * r[8], i[4] = r[10] * r[0] - r[2] * r[8], i[5] = -r[6] * r[0] + r[2] * r[4], i[6] = r[9] * r[4] - r[5] * r[8], i[7] = -r[9] * r[0] + r[1] * r[8], i[8] = r[5] * r[0] - r[1] * r[4];
        var n = r[0] * i[0] + r[1] * i[3] + r[2] * i[6];
        if (0 === n) {
            var a = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
            if (t)throw new Error(a);
            return THREE.warn(a), this.identity(), this
        }
        return this.multiplyScalar(1 / n), this
    }, transpose: function () {
        var e, t = this.elements;
        return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
    }, flattenToArrayOffset: function (e, t) {
        var r = this.elements;
        return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e
    }, getNormalMatrix: function (e) {
        return this.getInverse(e).transpose(), this
    }, transposeIntoArray: function (e) {
        var t = this.elements;
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
    }, fromArray: function (e) {
        return this.elements.set(e), this
    }, toArray: function () {
        var e = this.elements;
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]]
    }, clone: function () {
        return (new THREE.Matrix3).fromArray(this.elements)
    }
},THREE.Matrix4 = function () {
    this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && THREE.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
},THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function (e, t, r, i, n, a, o, s, h, l, u, c, E, f, d, p) {
        var m = this.elements;
        return m[0] = e, m[4] = t, m[8] = r, m[12] = i, m[1] = n, m[5] = a, m[9] = o, m[13] = s, m[2] = h, m[6] = l, m[10] = u, m[14] = c, m[3] = E, m[7] = f, m[11] = d, m[15] = p, this
    },
    identity: function () {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    copy: function (e) {
        return this.elements.set(e.elements), this
    },
    extractPosition: function (e) {
        return THREE.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
    },
    copyPosition: function (e) {
        var t = this.elements, r = e.elements;
        return t[12] = r[12], t[13] = r[13], t[14] = r[14], this
    },
    extractBasis: function (e, t, r) {
        var i = this.elements;
        return e.set(i[0], i[1], i[2]), t.set(i[4], i[5], i[6]), r.set(i[8], i[9], i[10]), this
    },
    makeBasis: function (e, t, r) {
        return this.set(e.x, t.x, r.x, 0, e.y, t.y, r.y, 0, e.z, t.z, r.z, 0, 0, 0, 0, 1), this
    },
    extractRotation: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var r = this.elements, i = t.elements, n = 1 / e.set(i[0], i[1], i[2]).length(), a = 1 / e.set(i[4], i[5], i[6]).length(), o = 1 / e.set(i[8], i[9], i[10]).length();
            return r[0] = i[0] * n, r[1] = i[1] * n, r[2] = i[2] * n, r[4] = i[4] * a, r[5] = i[5] * a, r[6] = i[6] * a, r[8] = i[8] * o, r[9] = i[9] * o, r[10] = i[10] * o, this
        }
    }(),
    makeRotationFromEuler: function (e) {
        e instanceof THREE.Euler == !1 && THREE.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var t = this.elements, r = e.x, i = e.y, n = e.z, a = Math.cos(r), o = Math.sin(r), s = Math.cos(i), h = Math.sin(i), l = Math.cos(n), u = Math.sin(n);
        if ("XYZ" === e.order) {
            var c = a * l, E = a * u, f = o * l, d = o * u;
            t[0] = s * l, t[4] = -s * u, t[8] = h, t[1] = E + f * h, t[5] = c - d * h, t[9] = -o * s, t[2] = d - c * h, t[6] = f + E * h, t[10] = a * s
        } else if ("YXZ" === e.order) {
            var p = s * l, m = s * u, T = h * l, g = h * u;
            t[0] = p + g * o, t[4] = T * o - m, t[8] = a * h, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = m * o - T, t[6] = g + p * o, t[10] = a * s
        } else if ("ZXY" === e.order) {
            var p = s * l, m = s * u, T = h * l, g = h * u;
            t[0] = p - g * o, t[4] = -a * u, t[8] = T + m * o, t[1] = m + T * o, t[5] = a * l, t[9] = g - p * o, t[2] = -a * h, t[6] = o, t[10] = a * s
        } else if ("ZYX" === e.order) {
            var c = a * l, E = a * u, f = o * l, d = o * u;
            t[0] = s * l, t[4] = f * h - E, t[8] = c * h + d, t[1] = s * u, t[5] = d * h + c, t[9] = E * h - f, t[2] = -h, t[6] = o * s, t[10] = a * s
        } else if ("YZX" === e.order) {
            var v = a * s, R = a * h, y = o * s, x = o * h;
            t[0] = s * l, t[4] = x - v * u, t[8] = y * u + R, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -h * l, t[6] = R * u + y, t[10] = v - x * u
        } else if ("XZY" === e.order) {
            var v = a * s, R = a * h, y = o * s, x = o * h;
            t[0] = s * l, t[4] = -u, t[8] = h * l, t[1] = v * u + x, t[5] = a * l, t[9] = R * u - y, t[2] = y * u - R, t[6] = o * l, t[10] = x * u + v
        }
        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    },
    setRotationFromQuaternion: function (e) {
        return THREE.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
    },
    makeRotationFromQuaternion: function (e) {
        var t = this.elements, r = e.x, i = e.y, n = e.z, a = e.w, o = r + r, s = i + i, h = n + n, l = r * o, u = r * s, c = r * h, E = i * s, f = i * h, d = n * h, p = a * o, m = a * s, T = a * h;
        return t[0] = 1 - (E + d), t[4] = u - T, t[8] = c + m, t[1] = u + T, t[5] = 1 - (l + d), t[9] = f - p, t[2] = c - m, t[6] = f + p, t[10] = 1 - (l + E), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    },
    lookAt: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Vector3;
        return function (i, n, a) {
            var o = this.elements;
            return r.subVectors(i, n).normalize(), 0 === r.length() && (r.z = 1), e.crossVectors(a, r).normalize(), 0 === e.length() && (r.x += 1e-4, e.crossVectors(a, r).normalize()), t.crossVectors(r, e), o[0] = e.x, o[4] = t.x, o[8] = r.x, o[1] = e.y, o[5] = t.y, o[9] = r.y, o[2] = e.z, o[6] = t.z, o[10] = r.z, this
        }
    }(),
    multiply: function (e, t) {
        return void 0 !== t ? (THREE.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
    },
    multiplyMatrices: function (e, t) {
        var r = e.elements, i = t.elements, n = this.elements, a = r[0], o = r[4], s = r[8], h = r[12], l = r[1], u = r[5], c = r[9], E = r[13], f = r[2], d = r[6], p = r[10], m = r[14], T = r[3], g = r[7], v = r[11], R = r[15], y = i[0], x = i[4], _ = i[8], b = i[12], H = i[1], M = i[5], w = i[9], S = i[13], A = i[2], C = i[6], F = i[10], B = i[14], U = i[3], L = i[7], P = i[11], D = i[15];
        return n[0] = a * y + o * H + s * A + h * U, n[4] = a * x + o * M + s * C + h * L, n[8] = a * _ + o * w + s * F + h * P, n[12] = a * b + o * S + s * B + h * D, n[1] = l * y + u * H + c * A + E * U, n[5] = l * x + u * M + c * C + E * L, n[9] = l * _ + u * w + c * F + E * P, n[13] = l * b + u * S + c * B + E * D, n[2] = f * y + d * H + p * A + m * U, n[6] = f * x + d * M + p * C + m * L, n[10] = f * _ + d * w + p * F + m * P, n[14] = f * b + d * S + p * B + m * D, n[3] = T * y + g * H + v * A + R * U, n[7] = T * x + g * M + v * C + R * L, n[11] = T * _ + g * w + v * F + R * P, n[15] = T * b + g * S + v * B + R * D, this
    },
    multiplyToArray: function (e, t, r) {
        var i = this.elements;
        return this.multiplyMatrices(e, t), r[0] = i[0], r[1] = i[1], r[2] = i[2], r[3] = i[3], r[4] = i[4], r[5] = i[5], r[6] = i[6], r[7] = i[7], r[8] = i[8], r[9] = i[9], r[10] = i[10], r[11] = i[11], r[12] = i[12], r[13] = i[13], r[14] = i[14], r[15] = i[15], this
    },
    multiplyScalar: function (e) {
        var t = this.elements;
        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
    },
    multiplyVector3: function (e) {
        return THREE.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this)
    },
    multiplyVector4: function (e) {
        return THREE.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
    },
    multiplyVector3Array: function (e) {
        return THREE.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
    },
    applyToVector3Array: function () {
        var e = new THREE.Vector3;
        return function (t, r, i) {
            void 0 === r && (r = 0), void 0 === i && (i = t.length);
            for (var n = 0, a = r; i > n; n += 3, a += 3)e.x = t[a], e.y = t[a + 1], e.z = t[a + 2], e.applyMatrix4(this), t[a] = e.x, t[a + 1] = e.y, t[a + 2] = e.z;
            return t
        }
    }(),
    rotateAxis: function (e) {
        THREE.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
    },
    crossVector: function (e) {
        return THREE.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
    },
    determinant: function () {
        var e = this.elements, t = e[0], r = e[4], i = e[8], n = e[12], a = e[1], o = e[5], s = e[9], h = e[13], l = e[2], u = e[6], c = e[10], E = e[14], f = e[3], d = e[7], p = e[11], m = e[15];
        return f * (+n * s * u - i * h * u - n * o * c + r * h * c + i * o * E - r * s * E) + d * (+t * s * E - t * h * c + n * a * c - i * a * E + i * h * l - n * s * l) + p * (+t * h * u - t * o * E - n * a * u + r * a * E + n * o * l - r * h * l) + m * (-i * o * l - t * s * u + t * o * c + i * a * u - r * a * c + r * s * l)
    },
    transpose: function () {
        var e, t = this.elements;
        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
    },
    flattenToArrayOffset: function (e, t) {
        var r = this.elements;
        return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e[t + 9] = r[9], e[t + 10] = r[10], e[t + 11] = r[11], e[t + 12] = r[12], e[t + 13] = r[13], e[t + 14] = r[14], e[t + 15] = r[15], e
    },
    getPosition: function () {
        var e = new THREE.Vector3;
        return function () {
            THREE.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
            var t = this.elements;
            return e.set(t[12], t[13], t[14])
        }
    }(),
    setPosition: function (e) {
        var t = this.elements;
        return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
    },
    getInverse: function (e, t) {
        var r = this.elements, i = e.elements, n = i[0], a = i[4], o = i[8], s = i[12], h = i[1], l = i[5], u = i[9], c = i[13], E = i[2], f = i[6], d = i[10], p = i[14], m = i[3], T = i[7], g = i[11], v = i[15];
        r[0] = u * p * T - c * d * T + c * f * g - l * p * g - u * f * v + l * d * v, r[4] = s * d * T - o * p * T - s * f * g + a * p * g + o * f * v - a * d * v, r[8] = o * c * T - s * u * T + s * l * g - a * c * g - o * l * v + a * u * v, r[12] = s * u * f - o * c * f - s * l * d + a * c * d + o * l * p - a * u * p, r[1] = c * d * m - u * p * m - c * E * g + h * p * g + u * E * v - h * d * v, r[5] = o * p * m - s * d * m + s * E * g - n * p * g - o * E * v + n * d * v, r[9] = s * u * m - o * c * m - s * h * g + n * c * g + o * h * v - n * u * v, r[13] = o * c * E - s * u * E + s * h * d - n * c * d - o * h * p + n * u * p, r[2] = l * p * m - c * f * m + c * E * T - h * p * T - l * E * v + h * f * v, r[6] = s * f * m - a * p * m - s * E * T + n * p * T + a * E * v - n * f * v, r[10] = a * c * m - s * l * m + s * h * T - n * c * T - a * h * v + n * l * v, r[14] = s * l * E - a * c * E - s * h * f + n * c * f + a * h * p - n * l * p, r[3] = u * f * m - l * d * m - u * E * T + h * d * T + l * E * g - h * f * g, r[7] = a * d * m - o * f * m + o * E * T - n * d * T - a * E * g + n * f * g, r[11] = o * l * m - a * u * m - o * h * T + n * u * T + a * h * g - n * l * g, r[15] = a * u * E - o * l * E + o * h * f - n * u * f - a * h * d + n * l * d;
        var R = n * r[0] + h * r[4] + E * r[8] + m * r[12];
        if (0 == R) {
            var y = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
            if (t)throw new Error(y);
            return THREE.warn(y), this.identity(), this
        }
        return this.multiplyScalar(1 / R), this
    },
    translate: function (e) {
        THREE.error("THREE.Matrix4: .translate() has been removed.")
    },
    rotateX: function (e) {
        THREE.error("THREE.Matrix4: .rotateX() has been removed.")
    },
    rotateY: function (e) {
        THREE.error("THREE.Matrix4: .rotateY() has been removed.")
    },
    rotateZ: function (e) {
        THREE.error("THREE.Matrix4: .rotateZ() has been removed.")
    },
    rotateByAxis: function (e, t) {
        THREE.error("THREE.Matrix4: .rotateByAxis() has been removed.")
    },
    scale: function (e) {
        var t = this.elements, r = e.x, i = e.y, n = e.z;
        return t[0] *= r, t[4] *= i, t[8] *= n, t[1] *= r, t[5] *= i, t[9] *= n, t[2] *= r, t[6] *= i, t[10] *= n, t[3] *= r, t[7] *= i, t[11] *= n, this
    },
    getMaxScaleOnAxis: function () {
        var e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, Math.max(r, i)))
    },
    makeTranslation: function (e, t, r) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this
    },
    makeRotationX: function (e) {
        var t = Math.cos(e), r = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1), this
    },
    makeRotationY: function (e) {
        var t = Math.cos(e), r = Math.sin(e);
        return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1), this
    },
    makeRotationZ: function (e) {
        var t = Math.cos(e), r = Math.sin(e);
        return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    makeRotationAxis: function (e, t) {
        var r = Math.cos(t), i = Math.sin(t), n = 1 - r, a = e.x, o = e.y, s = e.z, h = n * a, l = n * o;
        return this.set(h * a + r, h * o - i * s, h * s + i * o, 0, h * o + i * s, l * o + r, l * s - i * a, 0, h * s - i * o, l * s + i * a, n * s * s + r, 0, 0, 0, 0, 1), this
    },
    makeScale: function (e, t, r) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this
    },
    compose: function (e, t, r) {
        return this.makeRotationFromQuaternion(t), this.scale(r), this.setPosition(e), this
    },
    decompose: function () {
        var e = new THREE.Vector3, t = new THREE.Matrix4;
        return function (r, i, n) {
            var a = this.elements, o = e.set(a[0], a[1], a[2]).length(), s = e.set(a[4], a[5], a[6]).length(), h = e.set(a[8], a[9], a[10]).length(), l = this.determinant();
            0 > l && (o = -o), r.x = a[12], r.y = a[13], r.z = a[14], t.elements.set(this.elements);
            var u = 1 / o, c = 1 / s, E = 1 / h;
            return t.elements[0] *= u, t.elements[1] *= u, t.elements[2] *= u, t.elements[4] *= c, t.elements[5] *= c, t.elements[6] *= c, t.elements[8] *= E, t.elements[9] *= E, t.elements[10] *= E, i.setFromRotationMatrix(t), n.x = o, n.y = s, n.z = h, this
        }
    }(),
    makeFrustum: function (e, t, r, i, n, a) {
        var o = this.elements, s = 2 * n / (t - e), h = 2 * n / (i - r), l = (t + e) / (t - e), u = (i + r) / (i - r), c = -(a + n) / (a - n), E = -2 * a * n / (a - n);
        return o[0] = s, o[4] = 0, o[8] = l, o[12] = 0, o[1] = 0, o[5] = h, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = c, o[14] = E, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
    },
    makePerspective: function (e, t, r, i) {
        var n = r * Math.tan(THREE.Math.degToRad(.5 * e)), a = -n, o = a * t, s = n * t;
        return this.makeFrustum(o, s, a, n, r, i)
    },
    makeOrthographic: function (e, t, r, i, n, a) {
        var o = this.elements, s = t - e, h = r - i, l = a - n, u = (t + e) / s, c = (r + i) / h, E = (a + n) / l;
        return o[0] = 2 / s, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 / h, o[9] = 0, o[13] = -c, o[2] = 0, o[6] = 0, o[10] = -2 / l, o[14] = -E, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
    },
    fromArray: function (e) {
        return this.elements.set(e), this
    },
    toArray: function () {
        var e = this.elements;
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
    },
    clone: function () {
        return (new THREE.Matrix4).fromArray(this.elements)
    }
},THREE.Ray = function (e, t) {
    this.origin = void 0 !== e ? e : new THREE.Vector3, this.direction = void 0 !== t ? t : new THREE.Vector3
},THREE.Ray.prototype = {
    constructor: THREE.Ray, set: function (e, t) {
        return this.origin.copy(e), this.direction.copy(t), this
    }, copy: function (e) {
        return this.origin.copy(e.origin), this.direction.copy(e.direction), this
    }, at: function (e, t) {
        var r = t || new THREE.Vector3;
        return r.copy(this.direction).multiplyScalar(e).add(this.origin)
    }, recast: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return this.origin.copy(this.at(t, e)), this
        }
    }(), closestPointToPoint: function (e, t) {
        var r = t || new THREE.Vector3;
        r.subVectors(e, this.origin);
        var i = r.dot(this.direction);
        return 0 > i ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(i).add(this.origin)
    }, distanceToPoint: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var r = e.subVectors(t, this.origin).dot(this.direction);
            return 0 > r ? this.origin.distanceTo(t) : (e.copy(this.direction).multiplyScalar(r).add(this.origin), e.distanceTo(t))
        }
    }(), distanceSqToSegment: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Vector3;
        return function (i, n, a, o) {
            e.copy(i).add(n).multiplyScalar(.5), t.copy(n).sub(i).normalize(), r.copy(this.origin).sub(e);
            var s, h, l, u, c = .5 * i.distanceTo(n), E = -this.direction.dot(t), f = r.dot(this.direction), d = -r.dot(t), p = r.lengthSq(), m = Math.abs(1 - E * E);
            if (m > 0)if (s = E * d - f, h = E * f - d, u = c * m, s >= 0)if (h >= -u)if (u >= h) {
                var T = 1 / m;
                s *= T, h *= T, l = s * (s + E * h + 2 * f) + h * (E * s + h + 2 * d) + p
            } else h = c, s = Math.max(0, -(E * h + f)), l = -s * s + h * (h + 2 * d) + p; else h = -c, s = Math.max(0, -(E * h + f)), l = -s * s + h * (h + 2 * d) + p; else-u >= h ? (s = Math.max(0, -(-E * c + f)), h = s > 0 ? -c : Math.min(Math.max(-c, -d), c), l = -s * s + h * (h + 2 * d) + p) : u >= h ? (s = 0, h = Math.min(Math.max(-c, -d), c), l = h * (h + 2 * d) + p) : (s = Math.max(0, -(E * c + f)), h = s > 0 ? c : Math.min(Math.max(-c, -d), c), l = -s * s + h * (h + 2 * d) + p); else h = E > 0 ? -c : c, s = Math.max(0, -(E * h + f)), l = -s * s + h * (h + 2 * d) + p;
            return a && a.copy(this.direction).multiplyScalar(s).add(this.origin), o && o.copy(t).multiplyScalar(h).add(e), l
        }
    }(), isIntersectionSphere: function (e) {
        return this.distanceToPoint(e.center) <= e.radius
    }, intersectSphere: function () {
        var e = new THREE.Vector3;
        return function (t, r) {
            e.subVectors(t.center, this.origin);
            var i = e.dot(this.direction), n = e.dot(e) - i * i, a = t.radius * t.radius;
            if (n > a)return null;
            var o = Math.sqrt(a - n), s = i - o, h = i + o;
            return 0 > s && 0 > h ? null : 0 > s ? this.at(h, r) : this.at(s, r)
        }
    }(), isIntersectionPlane: function (e) {
        var t = e.distanceToPoint(this.origin);
        if (0 === t)return !0;
        var r = e.normal.dot(this.direction);
        return 0 > r * t ? !0 : !1
    }, distanceToPlane: function (e) {
        var t = e.normal.dot(this.direction);
        if (0 == t)return 0 == e.distanceToPoint(this.origin) ? 0 : null;
        var r = -(this.origin.dot(e.normal) + e.constant) / t;
        return r >= 0 ? r : null
    }, intersectPlane: function (e, t) {
        var r = this.distanceToPlane(e);
        return null === r ? null : this.at(r, t)
    }, isIntersectionBox: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return null !== this.intersectBox(t, e)
        }
    }(), intersectBox: function (e, t) {
        var r, i, n, a, o, s, h = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, c = this.origin;
        return h >= 0 ? (r = (e.min.x - c.x) * h, i = (e.max.x - c.x) * h) : (r = (e.max.x - c.x) * h, i = (e.min.x - c.x) * h), l >= 0 ? (n = (e.min.y - c.y) * l, a = (e.max.y - c.y) * l) : (n = (e.max.y - c.y) * l, a = (e.min.y - c.y) * l), r > a || n > i ? null : ((n > r || r !== r) && (r = n), (i > a || i !== i) && (i = a), u >= 0 ? (o = (e.min.z - c.z) * u, s = (e.max.z - c.z) * u) : (o = (e.max.z - c.z) * u, s = (e.min.z - c.z) * u), r > s || o > i ? null : ((o > r || r !== r) && (r = o), (i > s || i !== i) && (i = s), 0 > i ? null : this.at(r >= 0 ? r : i, t)))
    }, intersectTriangle: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Vector3, i = new THREE.Vector3;
        return function (n, a, o, s, h) {
            t.subVectors(a, n), r.subVectors(o, n), i.crossVectors(t, r);
            var l, u = this.direction.dot(i);
            if (u > 0) {
                if (s)return null;
                l = 1
            } else {
                if (!(0 > u))return null;
                l = -1, u = -u
            }
            e.subVectors(this.origin, n);
            var c = l * this.direction.dot(r.crossVectors(e, r));
            if (0 > c)return null;
            var E = l * this.direction.dot(t.cross(e));
            if (0 > E)return null;
            if (c + E > u)return null;
            var f = -l * e.dot(i);
            return 0 > f ? null : this.at(f / u, h)
        }
    }(), applyMatrix4: function (e) {
        return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
    }, equals: function (e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }, clone: function () {
        return (new THREE.Ray).copy(this)
    }
},THREE.Sphere = function (e, t) {
    this.center = void 0 !== e ? e : new THREE.Vector3, this.radius = void 0 !== t ? t : 0
},THREE.Sphere.prototype = {
    constructor: THREE.Sphere, set: function (e, t) {
        return this.center.copy(e), this.radius = t, this
    }, setFromPoints: function () {
        var e = new THREE.Box3;
        return function (t, r) {
            var i = this.center;
            void 0 !== r ? i.copy(r) : e.setFromPoints(t).center(i);
            for (var n = 0, a = 0, o = t.length; o > a; a++)n = Math.max(n, i.distanceToSquared(t[a]));
            return this.radius = Math.sqrt(n), this
        }
    }(), copy: function (e) {
        return this.center.copy(e.center), this.radius = e.radius, this
    }, empty: function () {
        return this.radius <= 0
    }, containsPoint: function (e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }, distanceToPoint: function (e) {
        return e.distanceTo(this.center) - this.radius
    }, intersectsSphere: function (e) {
        var t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }, clampPoint: function (e, t) {
        var r = this.center.distanceToSquared(e), i = t || new THREE.Vector3;
        return i.copy(e), r > this.radius * this.radius && (i.sub(this.center).normalize(), i.multiplyScalar(this.radius).add(this.center)), i
    }, getBoundingBox: function (e) {
        var t = e || new THREE.Box3;
        return t.set(this.center, this.center), t.expandByScalar(this.radius), t
    }, applyMatrix4: function (e) {
        return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
    }, translate: function (e) {
        return this.center.add(e), this
    }, equals: function (e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }, clone: function () {
        return (new THREE.Sphere).copy(this)
    }
},THREE.Frustum = function (e, t, r, i, n, a) {
    this.planes = [void 0 !== e ? e : new THREE.Plane, void 0 !== t ? t : new THREE.Plane, void 0 !== r ? r : new THREE.Plane, void 0 !== i ? i : new THREE.Plane, void 0 !== n ? n : new THREE.Plane, void 0 !== a ? a : new THREE.Plane]
},THREE.Frustum.prototype = {
    constructor: THREE.Frustum, set: function (e, t, r, i, n, a) {
        var o = this.planes;
        return o[0].copy(e), o[1].copy(t), o[2].copy(r), o[3].copy(i), o[4].copy(n), o[5].copy(a), this
    }, copy: function (e) {
        for (var t = this.planes, r = 0; 6 > r; r++)t[r].copy(e.planes[r]);
        return this
    }, setFromMatrix: function (e) {
        var t = this.planes, r = e.elements, i = r[0], n = r[1], a = r[2], o = r[3], s = r[4], h = r[5], l = r[6], u = r[7], c = r[8], E = r[9], f = r[10], d = r[11], p = r[12], m = r[13], T = r[14], g = r[15];
        return t[0].setComponents(o - i, u - s, d - c, g - p).normalize(), t[1].setComponents(o + i, u + s, d + c, g + p).normalize(), t[2].setComponents(o + n, u + h, d + E, g + m).normalize(), t[3].setComponents(o - n, u - h, d - E, g - m).normalize(), t[4].setComponents(o - a, u - l, d - f, g - T).normalize(), t[5].setComponents(o + a, u + l, d + f, g + T).normalize(), this
    }, intersectsObject: function () {
        var e = new THREE.Sphere;
        return function (t) {
            var r = t.geometry;
            return null === r.boundingSphere && r.computeBoundingSphere(), e.copy(r.boundingSphere), e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
        }
    }(), intersectsSphere: function (e) {
        for (var t = this.planes, r = e.center, i = -e.radius, n = 0; 6 > n; n++) {
            var a = t[n].distanceToPoint(r);
            if (i > a)return !1
        }
        return !0
    }, intersectsBox: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (r) {
            for (var i = this.planes, n = 0; 6 > n; n++) {
                var a = i[n];
                e.x = a.normal.x > 0 ? r.min.x : r.max.x, t.x = a.normal.x > 0 ? r.max.x : r.min.x, e.y = a.normal.y > 0 ? r.min.y : r.max.y, t.y = a.normal.y > 0 ? r.max.y : r.min.y, e.z = a.normal.z > 0 ? r.min.z : r.max.z, t.z = a.normal.z > 0 ? r.max.z : r.min.z;
                var o = a.distanceToPoint(e), s = a.distanceToPoint(t);
                if (0 > o && 0 > s)return !1
            }
            return !0
        }
    }(), containsPoint: function (e) {
        for (var t = this.planes, r = 0; 6 > r; r++)if (t[r].distanceToPoint(e) < 0)return !1;
        return !0
    }, clone: function () {
        return (new THREE.Frustum).copy(this);
    }
},THREE.Plane = function (e, t) {
    this.normal = void 0 !== e ? e : new THREE.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
},THREE.Plane.prototype = {
    constructor: THREE.Plane, set: function (e, t) {
        return this.normal.copy(e), this.constant = t, this
    }, setComponents: function (e, t, r, i) {
        return this.normal.set(e, t, r), this.constant = i, this
    }, setFromNormalAndCoplanarPoint: function (e, t) {
        return this.normal.copy(e), this.constant = -t.dot(this.normal), this
    }, setFromCoplanarPoints: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (r, i, n) {
            var a = e.subVectors(n, i).cross(t.subVectors(r, i)).normalize();
            return this.setFromNormalAndCoplanarPoint(a, r), this
        }
    }(), copy: function (e) {
        return this.normal.copy(e.normal), this.constant = e.constant, this
    }, normalize: function () {
        var e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), this.constant *= e, this
    }, negate: function () {
        return this.constant *= -1, this.normal.negate(), this
    }, distanceToPoint: function (e) {
        return this.normal.dot(e) + this.constant
    }, distanceToSphere: function (e) {
        return this.distanceToPoint(e.center) - e.radius
    }, projectPoint: function (e, t) {
        return this.orthoPoint(e, t).sub(e).negate()
    }, orthoPoint: function (e, t) {
        var r = this.distanceToPoint(e), i = t || new THREE.Vector3;
        return i.copy(this.normal).multiplyScalar(r)
    }, isIntersectionLine: function (e) {
        var t = this.distanceToPoint(e.start), r = this.distanceToPoint(e.end);
        return 0 > t && r > 0 || 0 > r && t > 0
    }, intersectLine: function () {
        var e = new THREE.Vector3;
        return function (t, r) {
            var i = r || new THREE.Vector3, n = t.delta(e), a = this.normal.dot(n);
            if (0 != a) {
                var o = -(t.start.dot(this.normal) + this.constant) / a;
                if (!(0 > o || o > 1))return i.copy(n).multiplyScalar(o).add(t.start)
            } else if (0 == this.distanceToPoint(t.start))return i.copy(t.start)
        }
    }(), coplanarPoint: function (e) {
        var t = e || new THREE.Vector3;
        return t.copy(this.normal).multiplyScalar(-this.constant)
    }, applyMatrix4: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Matrix3;
        return function (i, n) {
            var a = n || r.getNormalMatrix(i), o = e.copy(this.normal).applyMatrix3(a), s = this.coplanarPoint(t);
            return s.applyMatrix4(i), this.setFromNormalAndCoplanarPoint(o, s), this
        }
    }(), translate: function (e) {
        return this.constant = this.constant - e.dot(this.normal), this
    }, equals: function (e) {
        return e.normal.equals(this.normal) && e.constant == this.constant
    }, clone: function () {
        return (new THREE.Plane).copy(this)
    }
},THREE.Math = {
    generateUUID: function () {
        var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = new Array(36), i = 0;
        return function () {
            for (var n = 0; 36 > n; n++)8 == n || 13 == n || 18 == n || 23 == n ? r[n] = "-" : 14 == n ? r[n] = "4" : (2 >= i && (i = 33554432 + 16777216 * Math.random() | 0), e = 15 & i, i >>= 4, r[n] = t[19 == n ? 3 & e | 8 : e]);
            return r.join("")
        }
    }(), clamp: function (e, t, r) {
        return t > e ? t : e > r ? r : e
    }, clampBottom: function (e, t) {
        return t > e ? t : e
    }, mapLinear: function (e, t, r, i, n) {
        return i + (e - t) * (n - i) / (r - t)
    }, smoothstep: function (e, t, r) {
        return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * (3 - 2 * e))
    }, smootherstep: function (e, t, r) {
        return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * e * (e * (6 * e - 15) + 10))
    }, random16: function () {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    }, randInt: function (e, t) {
        return Math.floor(this.randFloat(e, t))
    }, randFloat: function (e, t) {
        return e + Math.random() * (t - e)
    }, randFloatSpread: function (e) {
        return e * (.5 - Math.random())
    }, degToRad: function () {
        var e = Math.PI / 180;
        return function (t) {
            return t * e
        }
    }(), radToDeg: function () {
        var e = 180 / Math.PI;
        return function (t) {
            return t * e
        }
    }(), isPowerOfTwo: function (e) {
        return 0 === (e & e - 1) && 0 !== e
    }, nextPowerOfTwo: function (e) {
        return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e
    }
},THREE.Spline = function (e) {
    function t(e, t, r, i, n, a, o) {
        var s = .5 * (r - e), h = .5 * (i - t);
        return (2 * (t - r) + s + h) * o + (-3 * (t - r) - 2 * s - h) * a + s * n + t
    }

    this.points = e;
    var r, i, n, a, o, s, h, l, u, c = [], E = {x: 0, y: 0, z: 0};
    this.initFromArray = function (e) {
        this.points = [];
        for (var t = 0; t < e.length; t++)this.points[t] = {x: e[t][0], y: e[t][1], z: e[t][2]}
    }, this.getPoint = function (e) {
        return r = (this.points.length - 1) * e, i = Math.floor(r), n = r - i, c[0] = 0 === i ? i : i - 1, c[1] = i, c[2] = i > this.points.length - 2 ? this.points.length - 1 : i + 1, c[3] = i > this.points.length - 3 ? this.points.length - 1 : i + 2, s = this.points[c[0]], h = this.points[c[1]], l = this.points[c[2]], u = this.points[c[3]], a = n * n, o = n * a, E.x = t(s.x, h.x, l.x, u.x, n, a, o), E.y = t(s.y, h.y, l.y, u.y, n, a, o), E.z = t(s.z, h.z, l.z, u.z, n, a, o), E
    }, this.getControlPointsArray = function () {
        var e, t, r = this.points.length, i = [];
        for (e = 0; r > e; e++)t = this.points[e], i[e] = [t.x, t.y, t.z];
        return i
    }, this.getLength = function (e) {
        var t, r, i, n, a = 0, o = 0, s = 0, h = new THREE.Vector3, l = new THREE.Vector3, u = [], c = 0;
        for (u[0] = 0, e || (e = 100), i = this.points.length * e, h.copy(this.points[0]), t = 1; i > t; t++)r = t / i, n = this.getPoint(r), l.copy(n), c += l.distanceTo(h), h.copy(n), a = (this.points.length - 1) * r, o = Math.floor(a), o != s && (u[o] = c, s = o);
        return u[u.length] = c, {chunks: u, total: c}
    }, this.reparametrizeByArcLength = function (e) {
        var t, r, i, n, a, o, s, h, l = [], u = new THREE.Vector3, c = this.getLength();
        for (l.push(u.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
            for (o = c.chunks[t] - c.chunks[t - 1], s = Math.ceil(e * o / c.total), n = (t - 1) / (this.points.length - 1), a = t / (this.points.length - 1), r = 1; s - 1 > r; r++)i = n + r * (1 / s) * (a - n), h = this.getPoint(i), l.push(u.copy(h).clone());
            l.push(u.copy(this.points[t]).clone())
        }
        this.points = l
    }
},THREE.Triangle = function (e, t, r) {
    this.a = void 0 !== e ? e : new THREE.Vector3, this.b = void 0 !== t ? t : new THREE.Vector3, this.c = void 0 !== r ? r : new THREE.Vector3
},THREE.Triangle.normal = function () {
    var e = new THREE.Vector3;
    return function (t, r, i, n) {
        var a = n || new THREE.Vector3;
        a.subVectors(i, r), e.subVectors(t, r), a.cross(e);
        var o = a.lengthSq();
        return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0)
    }
}(),THREE.Triangle.barycoordFromPoint = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Vector3;
    return function (i, n, a, o, s) {
        e.subVectors(o, n), t.subVectors(a, n), r.subVectors(i, n);
        var h = e.dot(e), l = e.dot(t), u = e.dot(r), c = t.dot(t), E = t.dot(r), f = h * c - l * l, d = s || new THREE.Vector3;
        if (0 == f)return d.set(-2, -1, -1);
        var p = 1 / f, m = (c * u - l * E) * p, T = (h * E - l * u) * p;
        return d.set(1 - m - T, T, m)
    }
}(),THREE.Triangle.containsPoint = function () {
    var e = new THREE.Vector3;
    return function (t, r, i, n) {
        var a = THREE.Triangle.barycoordFromPoint(t, r, i, n, e);
        return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
    }
}(),THREE.Triangle.prototype = {
    constructor: THREE.Triangle, set: function (e, t, r) {
        return this.a.copy(e), this.b.copy(t), this.c.copy(r), this
    }, setFromPointsAndIndices: function (e, t, r, i) {
        return this.a.copy(e[t]), this.b.copy(e[r]), this.c.copy(e[i]), this
    }, copy: function (e) {
        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
    }, area: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function () {
            return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
        }
    }(), midpoint: function (e) {
        var t = e || new THREE.Vector3;
        return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }, normal: function (e) {
        return THREE.Triangle.normal(this.a, this.b, this.c, e)
    }, plane: function (e) {
        var t = e || new THREE.Plane;
        return t.setFromCoplanarPoints(this.a, this.b, this.c)
    }, barycoordFromPoint: function (e, t) {
        return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
    }, containsPoint: function (e) {
        return THREE.Triangle.containsPoint(e, this.a, this.b, this.c)
    }, equals: function (e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }, clone: function () {
        return (new THREE.Triangle).copy(this)
    }
},THREE.Clock = function (e) {
    this.autoStart = void 0 !== e ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
},THREE.Clock.prototype = {
    constructor: THREE.Clock, start: function () {
        this.startTime = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(), this.oldTime = this.startTime, this.running = !0
    }, stop: function () {
        this.getElapsedTime(), this.running = !1
    }, getElapsedTime: function () {
        return this.getDelta(), this.elapsedTime
    }, getDelta: function () {
        var e = 0;
        if (this.autoStart && !this.running && this.start(), this.running) {
            var t = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now();
            e = .001 * (t - this.oldTime), this.oldTime = t, this.elapsedTime += e
        }
        return e
    }
},THREE.EventDispatcher = function () {
},THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher, apply: function (e) {
        e.addEventListener = THREE.EventDispatcher.prototype.addEventListener, e.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener, e.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener, e.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
    }, addEventListener: function (e, t) {
        void 0 === this._listeners && (this._listeners = {});
        var r = this._listeners;
        void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t)
    }, hasEventListener: function (e, t) {
        if (void 0 === this._listeners)return !1;
        var r = this._listeners;
        return void 0 !== r[e] && -1 !== r[e].indexOf(t) ? !0 : !1
    }, removeEventListener: function (e, t) {
        if (void 0 !== this._listeners) {
            var r = this._listeners, i = r[e];
            if (void 0 !== i) {
                var n = i.indexOf(t);
                -1 !== n && i.splice(n, 1)
            }
        }
    }, dispatchEvent: function (e) {
        if (void 0 !== this._listeners) {
            var t = this._listeners, r = t[e.type];
            if (void 0 !== r) {
                e.target = this;
                for (var i = [], n = r.length, a = 0; n > a; a++)i[a] = r[a];
                for (var a = 0; n > a; a++)i[a].call(this, e)
            }
        }
    }
},function (e) {
    e.Raycaster = function (t, r, i, n) {
        this.ray = new e.Ray(t, r), this.near = i || 0, this.far = n || 1 / 0, this.params = {
            Sprite: {},
            Mesh: {},
            PointCloud: {threshold: 1},
            LOD: {},
            Line: {}
        }
    };
    var t = function (e, t) {
        return e.distance - t.distance
    }, r = function (e, t, i, n) {
        if (e.raycast(t, i), n === !0)for (var a = e.children, o = 0, s = a.length; s > o; o++)r(a[o], t, i, !0)
    };
    e.Raycaster.prototype = {
        constructor: e.Raycaster, precision: 1e-4, linePrecision: 1, set: function (e, t) {
            this.ray.set(e, t)
        }, setFromCamera: function (t, r) {
            r instanceof e.PerspectiveCamera ? (this.ray.origin.copy(r.position), this.ray.direction.set(t.x, t.y, .5).unproject(r).sub(r.position).normalize()) : r instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, -1).unproject(r), this.ray.direction.set(0, 0, -1).transformDirection(r.matrixWorld)) : e.error("THREE.Raycaster: Unsupported camera type.")
        }, intersectObject: function (e, i) {
            var n = [];
            return r(e, this, n, i), n.sort(t), n
        }, intersectObjects: function (i, n) {
            var a = [];
            if (i instanceof Array == !1)return e.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), a;
            for (var o = 0, s = i.length; s > o; o++)r(i[o], this, a, n);
            return a.sort(t), a
        }
    }
}(THREE),THREE.Object3D = function () {
    Object.defineProperty(this, "id", {value: THREE.Object3DIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = void 0, this.children = [], this.up = THREE.Object3D.DefaultUp.clone();
    var e = new THREE.Vector3, t = new THREE.Euler, r = new THREE.Quaternion, i = new THREE.Vector3(1, 1, 1), n = function () {
        r.setFromEuler(t, !1)
    }, a = function () {
        t.setFromQuaternion(r, void 0, !1)
    };
    t.onChange(n), r.onChange(a), Object.defineProperties(this, {
        position: {enumerable: !0, value: e},
        rotation: {enumerable: !0, value: t},
        quaternion: {enumerable: !0, value: r},
        scale: {enumerable: !0, value: i}
    }), this.rotationAutoUpdate = !0, this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4, this.matrixAutoUpdate = !0, this.matrixWorldNeedsUpdate = !1, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
},THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0),THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    get eulerOrder() {
        return THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order
    },
    set eulerOrder(e) {
        THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order = e
    },
    get useQuaternion() {
        THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    set useQuaternion(e) {
        THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    applyMatrix: function (e) {
        this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    setRotationFromAxisAngle: function (e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    },
    setRotationFromEuler: function (e) {
        this.quaternion.setFromEuler(e, !0)
    },
    setRotationFromMatrix: function (e) {
        this.quaternion.setFromRotationMatrix(e)
    },
    setRotationFromQuaternion: function (e) {
        this.quaternion.copy(e)
    },
    rotateOnAxis: function () {
        var e = new THREE.Quaternion;
        return function (t, r) {
            return e.setFromAxisAngle(t, r), this.quaternion.multiply(e), this
        }
    }(),
    rotateX: function () {
        var e = new THREE.Vector3(1, 0, 0);
        return function (t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    rotateY: function () {
        var e = new THREE.Vector3(0, 1, 0);
        return function (t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    rotateZ: function () {
        var e = new THREE.Vector3(0, 0, 1);
        return function (t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    translateOnAxis: function () {
        var e = new THREE.Vector3;
        return function (t, r) {
            return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(r)), this
        }
    }(),
    translate: function (e, t) {
        return THREE.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
    },
    translateX: function () {
        var e = new THREE.Vector3(1, 0, 0);
        return function (t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    translateY: function () {
        var e = new THREE.Vector3(0, 1, 0);
        return function (t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    translateZ: function () {
        var e = new THREE.Vector3(0, 0, 1);
        return function (t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    localToWorld: function (e) {
        return e.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function () {
        var e = new THREE.Matrix4;
        return function (t) {
            return t.applyMatrix4(e.getInverse(this.matrixWorld))
        }
    }(),
    lookAt: function () {
        var e = new THREE.Matrix4;
        return function (t) {
            e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
        }
    }(),
    add: function (e) {
        if (arguments.length > 1) {
            for (var t = 0; t < arguments.length; t++)this.add(arguments[t]);
            return this
        }
        return e === this ? (THREE.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e instanceof THREE.Object3D ? (void 0 !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({type: "added"}), this.children.push(e)) : THREE.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
    },
    remove: function (e) {
        if (arguments.length > 1)for (var t = 0; t < arguments.length; t++)this.remove(arguments[t]);
        var r = this.children.indexOf(e);
        -1 !== r && (e.parent = void 0, e.dispatchEvent({type: "removed"}), this.children.splice(r, 1))
    },
    getChildByName: function (e) {
        return THREE.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
    },
    getObjectById: function (e) {
        return this.getObjectByProperty("id", e)
    },
    getObjectByName: function (e) {
        return this.getObjectByProperty("name", e)
    },
    getObjectByProperty: function (e, t) {
        if (this[e] === t)return this;
        for (var r = 0, i = this.children.length; i > r; r++) {
            var n = this.children[r], a = n.getObjectByProperty(e, t);
            if (void 0 !== a)return a
        }
    },
    getWorldPosition: function (e) {
        var t = e || new THREE.Vector3;
        return this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (r) {
            var i = r || new THREE.Quaternion;
            return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, i, t), i
        }
    }(),
    getWorldRotation: function () {
        var e = new THREE.Quaternion;
        return function (t) {
            var r = t || new THREE.Euler;
            return this.getWorldQuaternion(e), r.setFromQuaternion(e, this.rotation.order, !1)
        }
    }(),
    getWorldScale: function () {
        var e = new THREE.Vector3, t = new THREE.Quaternion;
        return function (r) {
            var i = r || new THREE.Vector3;
            return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, i), i
        }
    }(),
    getWorldDirection: function () {
        var e = new THREE.Quaternion;
        return function (t) {
            var r = t || new THREE.Vector3;
            return this.getWorldQuaternion(e), r.set(0, 0, 1).applyQuaternion(e)
        }
    }(),
    raycast: function () {
    },
    traverse: function (e) {
        e(this);
        for (var t = 0, r = this.children.length; r > t; t++)this.children[t].traverse(e)
    },
    traverseVisible: function (e) {
        if (this.visible !== !1) {
            e(this);
            for (var t = 0, r = this.children.length; r > t; t++)this.children[t].traverseVisible(e)
        }
    },
    traverseAncestors: function (e) {
        this.parent && (e(this.parent), this.parent.traverseAncestors(e))
    },
    updateMatrix: function () {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function (e) {
        this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || e === !0) && (void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
        for (var t = 0, r = this.children.length; r > t; t++)this.children[t].updateMatrixWorld(e)
    },
    toJSON: function () {
        var e = {metadata: {version: 4.3, type: "Object", generator: "ObjectExporter"}}, t = {}, r = function (r) {
            if (void 0 === e.geometries && (e.geometries = []), void 0 === t[r.uuid]) {
                var i = r.toJSON();
                delete i.metadata, t[r.uuid] = i, e.geometries.push(i)
            }
            return r.uuid
        }, i = {}, n = function (t) {
            if (void 0 === e.materials && (e.materials = []), void 0 === i[t.uuid]) {
                var r = t.toJSON();
                delete r.metadata, i[t.uuid] = r, e.materials.push(r)
            }
            return t.uuid
        }, a = function (e) {
            var t = {};
            if (t.uuid = e.uuid, t.type = e.type, "" !== e.name && (t.name = e.name), "{}" !== JSON.stringify(e.userData) && (t.userData = e.userData), e.visible !== !0 && (t.visible = e.visible), e instanceof THREE.PerspectiveCamera ? (t.fov = e.fov, t.aspect = e.aspect, t.near = e.near, t.far = e.far) : e instanceof THREE.OrthographicCamera ? (t.left = e.left, t.right = e.right, t.top = e.top, t.bottom = e.bottom, t.near = e.near, t.far = e.far) : e instanceof THREE.AmbientLight ? t.color = e.color.getHex() : e instanceof THREE.DirectionalLight ? (t.color = e.color.getHex(), t.intensity = e.intensity) : e instanceof THREE.PointLight ? (t.color = e.color.getHex(), t.intensity = e.intensity, t.distance = e.distance, t.decay = e.decay) : e instanceof THREE.SpotLight ? (t.color = e.color.getHex(), t.intensity = e.intensity, t.distance = e.distance, t.angle = e.angle, t.exponent = e.exponent, t.decay = e.decay) : e instanceof THREE.HemisphereLight ? (t.color = e.color.getHex(), t.groundColor = e.groundColor.getHex()) : e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.PointCloud ? (t.geometry = r(e.geometry), t.material = n(e.material), e instanceof THREE.Line && (t.mode = e.mode)) : e instanceof THREE.Sprite && (t.material = n(e.material)), t.matrix = e.matrix.toArray(), e.children.length > 0) {
                t.children = [];
                for (var i = 0; i < e.children.length; i++)t.children.push(a(e.children[i]))
            }
            return t
        };
        return e.object = a(this), e
    },
    clone: function (e, t) {
        if (void 0 === e && (e = new THREE.Object3D), void 0 === t && (t = !0), e.name = this.name, e.up.copy(this.up), e.position.copy(this.position), e.quaternion.copy(this.quaternion), e.scale.copy(this.scale), e.rotationAutoUpdate = this.rotationAutoUpdate, e.matrix.copy(this.matrix), e.matrixWorld.copy(this.matrixWorld), e.matrixAutoUpdate = this.matrixAutoUpdate, e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate, e.visible = this.visible, e.castShadow = this.castShadow, e.receiveShadow = this.receiveShadow, e.frustumCulled = this.frustumCulled, e.userData = JSON.parse(JSON.stringify(this.userData)), t === !0)for (var r = 0; r < this.children.length; r++) {
            var i = this.children[r];
            e.add(i.clone())
        }
        return e
    }
},THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),THREE.Object3DIdCount = 0,THREE.Face3 = function (e, t, r, i, n, a) {
    this.a = e, this.b = t, this.c = r, this.normal = i instanceof THREE.Vector3 ? i : new THREE.Vector3, this.vertexNormals = i instanceof Array ? i : [], this.color = n instanceof THREE.Color ? n : new THREE.Color, this.vertexColors = n instanceof Array ? n : [], this.vertexTangents = [], this.materialIndex = void 0 !== a ? a : 0
},THREE.Face3.prototype = {
    constructor: THREE.Face3, clone: function () {
        var e = new THREE.Face3(this.a, this.b, this.c);
        e.normal.copy(this.normal), e.color.copy(this.color), e.materialIndex = this.materialIndex;
        for (var t = 0, r = this.vertexNormals.length; r > t; t++)e.vertexNormals[t] = this.vertexNormals[t].clone();
        for (var t = 0, r = this.vertexColors.length; r > t; t++)e.vertexColors[t] = this.vertexColors[t].clone();
        for (var t = 0, r = this.vertexTangents.length; r > t; t++)e.vertexTangents[t] = this.vertexTangents[t].clone();
        return e
    }
},THREE.Face4 = function (e, t, r, i, n, a, o) {
    return THREE.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new THREE.Face3(e, t, r, n, a, o)
},THREE.BufferAttribute = function (e, t) {
    this.array = e, this.itemSize = t, this.needsUpdate = !1
},THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute, get length() {
        return this.array.length
    }, copyAt: function (e, t, r) {
        e *= this.itemSize, r *= t.itemSize;
        for (var i = 0, n = this.itemSize; n > i; i++)this.array[e + i] = t.array[r + i];
        return this
    }, set: function (e, t) {
        return void 0 === t && (t = 0), this.array.set(e, t), this
    }, setX: function (e, t) {
        return this.array[e * this.itemSize] = t, this
    }, setY: function (e, t) {
        return this.array[e * this.itemSize + 1] = t, this
    }, setZ: function (e, t) {
        return this.array[e * this.itemSize + 2] = t, this
    }, setXY: function (e, t, r) {
        return e *= this.itemSize, this.array[e] = t, this.array[e + 1] = r, this
    }, setXYZ: function (e, t, r, i) {
        return e *= this.itemSize, this.array[e] = t, this.array[e + 1] = r, this.array[e + 2] = i, this
    }, setXYZW: function (e, t, r, i, n) {
        return e *= this.itemSize, this.array[e] = t, this.array[e + 1] = r, this.array[e + 2] = i, this.array[e + 3] = n, this
    }, clone: function () {
        return new THREE.BufferAttribute(new this.array.constructor(this.array), this.itemSize)
    }
},THREE.Int8Attribute = function (e, t) {
    return THREE.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(e, t)
},THREE.Uint8Attribute = function (e, t) {
    return THREE.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(e, t)
},THREE.Uint8ClampedAttribute = function (e, t) {
    return THREE.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(e, t)
},THREE.Int16Attribute = function (e, t) {
    return THREE.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(e, t)
},THREE.Uint16Attribute = function (e, t) {
    return THREE.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(e, t)
},THREE.Int32Attribute = function (e, t) {
    return THREE.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(e, t)
},THREE.Uint32Attribute = function (e, t) {
    return THREE.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(e, t)
},THREE.Float32Attribute = function (e, t) {
    return THREE.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(e, t)
},THREE.Float64Attribute = function (e, t) {
    return THREE.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(e, t)
},THREE.DynamicBufferAttribute = function (e, t) {
    THREE.BufferAttribute.call(this, e, t), this.updateRange = {offset: 0, count: -1}
},THREE.DynamicBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype),THREE.DynamicBufferAttribute.prototype.constructor = THREE.DynamicBufferAttribute,THREE.DynamicBufferAttribute.prototype.clone = function () {
    return new THREE.DynamicBufferAttribute(new this.array.constructor(this.array), this.itemSize)
},THREE.BufferGeometry = function () {
    Object.defineProperty(this, "id", {value: THREE.GeometryIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.attributes = {}, this.attributesKeys = [], this.drawcalls = [], this.offsets = this.drawcalls, this.boundingBox = null, this.boundingSphere = null
},THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry, addAttribute: function (e, t) {
        return t instanceof THREE.BufferAttribute == !1 ? (THREE.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void(this.attributes[e] = {
            array: arguments[1],
            itemSize: arguments[2]
        })) : (this.attributes[e] = t, void(this.attributesKeys = Object.keys(this.attributes)))
    }, getAttribute: function (e) {
        return this.attributes[e]
    }, addDrawCall: function (e, t, r) {
        this.drawcalls.push({start: e, count: t, index: void 0 !== r ? r : 0})
    }, applyMatrix: function (e) {
        var t = this.attributes.position;
        void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0);
        var r = this.attributes.normal;
        if (void 0 !== r) {
            var i = (new THREE.Matrix3).getNormalMatrix(e);
            i.applyToVector3Array(r.array), r.needsUpdate = !0
        }
        null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere()
    }, center: function () {
        this.computeBoundingBox();
        var e = this.boundingBox.center().negate();
        return this.applyMatrix((new THREE.Matrix4).setPosition(e)), e
    }, fromGeometry: function (e, t) {
        t = t || {vertexColors: THREE.NoColors};
        var r = e.vertices, i = e.faces, n = e.faceVertexUvs, a = t.vertexColors, o = n[0].length > 0, s = 3 == i[0].vertexNormals.length, h = new Float32Array(3 * i.length * 3);
        this.addAttribute("position", new THREE.BufferAttribute(h, 3));
        var l = new Float32Array(3 * i.length * 3);
        if (this.addAttribute("normal", new THREE.BufferAttribute(l, 3)), a !== THREE.NoColors) {
            var u = new Float32Array(3 * i.length * 3);
            this.addAttribute("color", new THREE.BufferAttribute(u, 3))
        }
        if (o === !0) {
            var c = new Float32Array(3 * i.length * 2);
            this.addAttribute("uv", new THREE.BufferAttribute(c, 2))
        }
        for (var E = 0, f = 0, d = 0; E < i.length; E++, f += 6, d += 9) {
            var p = i[E], m = r[p.a], T = r[p.b], g = r[p.c];
            if (h[d] = m.x, h[d + 1] = m.y, h[d + 2] = m.z, h[d + 3] = T.x, h[d + 4] = T.y, h[d + 5] = T.z, h[d + 6] = g.x, h[d + 7] = g.y, h[d + 8] = g.z, s === !0) {
                var v = p.vertexNormals[0], R = p.vertexNormals[1], y = p.vertexNormals[2];
                l[d] = v.x, l[d + 1] = v.y, l[d + 2] = v.z, l[d + 3] = R.x, l[d + 4] = R.y, l[d + 5] = R.z, l[d + 6] = y.x, l[d + 7] = y.y, l[d + 8] = y.z
            } else {
                var x = p.normal;
                l[d] = x.x, l[d + 1] = x.y, l[d + 2] = x.z, l[d + 3] = x.x, l[d + 4] = x.y, l[d + 5] = x.z, l[d + 6] = x.x, l[d + 7] = x.y, l[d + 8] = x.z
            }
            if (a === THREE.FaceColors) {
                var _ = p.color;
                u[d] = _.r, u[d + 1] = _.g, u[d + 2] = _.b, u[d + 3] = _.r, u[d + 4] = _.g, u[d + 5] = _.b, u[d + 6] = _.r, u[d + 7] = _.g, u[d + 8] = _.b
            } else if (a === THREE.VertexColors) {
                var b = p.vertexColors[0], H = p.vertexColors[1], M = p.vertexColors[2];
                u[d] = b.r, u[d + 1] = b.g, u[d + 2] = b.b, u[d + 3] = H.r, u[d + 4] = H.g, u[d + 5] = H.b, u[d + 6] = M.r, u[d + 7] = M.g, u[d + 8] = M.b
            }
            if (o === !0) {
                var w = n[0][E][0], S = n[0][E][1], A = n[0][E][2];
                c[f] = w.x, c[f + 1] = w.y, c[f + 2] = S.x, c[f + 3] = S.y, c[f + 4] = A.x, c[f + 5] = A.y
            }
        }
        return this.computeBoundingSphere(), this
    }, computeBoundingBox: function () {
        var e = new THREE.Vector3;
        return function () {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3);
            var t = this.attributes.position.array;
            if (t) {
                var r = this.boundingBox;
                r.makeEmpty();
                for (var i = 0, n = t.length; n > i; i += 3)e.set(t[i], t[i + 1], t[i + 2]), r.expandByPoint(e)
            }
            (void 0 === t || 0 === t.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && THREE.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')
        }
    }(), computeBoundingSphere: function () {
        var e = new THREE.Box3, t = new THREE.Vector3;
        return function () {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var r = this.attributes.position.array;
            if (r) {
                e.makeEmpty();
                for (var i = this.boundingSphere.center, n = 0, a = r.length; a > n; n += 3)t.set(r[n], r[n + 1], r[n + 2]), e.expandByPoint(t);
                e.center(i);
                for (var o = 0, n = 0, a = r.length; a > n; n += 3)t.set(r[n], r[n + 1], r[n + 2]), o = Math.max(o, i.distanceToSquared(t));
                this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && THREE.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')
            }
        }
    }(), computeFaceNormals: function () {
    }, computeVertexNormals: function () {
        var e = this.attributes;
        if (e.position) {
            var t = e.position.array;
            if (void 0 === e.normal)this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(t.length), 3)); else for (var r = e.normal.array, i = 0, n = r.length; n > i; i++)r[i] = 0;
            var a, o, s, r = e.normal.array, h = new THREE.Vector3, l = new THREE.Vector3, u = new THREE.Vector3, c = new THREE.Vector3, E = new THREE.Vector3;
            if (e.index)for (var f = e.index.array, d = this.offsets.length > 0 ? this.offsets : [{
                start: 0,
                count: f.length,
                index: 0
            }], p = 0, m = d.length; m > p; ++p)for (var T = d[p].start, g = d[p].count, v = d[p].index, i = T, n = T + g; n > i; i += 3)a = 3 * (v + f[i]), o = 3 * (v + f[i + 1]), s = 3 * (v + f[i + 2]), h.fromArray(t, a), l.fromArray(t, o), u.fromArray(t, s), c.subVectors(u, l), E.subVectors(h, l), c.cross(E), r[a] += c.x, r[a + 1] += c.y, r[a + 2] += c.z, r[o] += c.x, r[o + 1] += c.y, r[o + 2] += c.z, r[s] += c.x, r[s + 1] += c.y, r[s + 2] += c.z; else for (var i = 0, n = t.length; n > i; i += 9)h.fromArray(t, i), l.fromArray(t, i + 3), u.fromArray(t, i + 6), c.subVectors(u, l), E.subVectors(h, l), c.cross(E), r[i] = c.x, r[i + 1] = c.y, r[i + 2] = c.z, r[i + 3] = c.x, r[i + 4] = c.y, r[i + 5] = c.z, r[i + 6] = c.x, r[i + 7] = c.y, r[i + 8] = c.z;
            this.normalizeNormals(), e.normal.needsUpdate = !0
        }
    }, computeTangents: function () {
        function e(e, t, r) {
            A.fromArray(i, 3 * e), C.fromArray(i, 3 * t), F.fromArray(i, 3 * r), B.fromArray(a, 2 * e), U.fromArray(a, 2 * t), L.fromArray(a, 2 * r), c = C.x - A.x, E = F.x - A.x, f = C.y - A.y, d = F.y - A.y, p = C.z - A.z, m = F.z - A.z, T = U.x - B.x, g = L.x - B.x, v = U.y - B.y, R = L.y - B.y, y = 1 / (T * R - g * v), P.set((R * c - v * E) * y, (R * f - v * d) * y, (R * p - v * m) * y), D.set((T * E - g * c) * y, (T * d - g * f) * y, (T * m - g * p) * y), h[e].add(P), h[t].add(P), h[r].add(P), l[e].add(D), l[t].add(D), l[r].add(D)
        }

        function t(e) {
            X.fromArray(n, 3 * e), Y.copy(X), I = h[e], W.copy(I), W.sub(X.multiplyScalar(X.dot(I))).normalize(), j.crossVectors(Y, I), G = j.dot(l[e]), O = 0 > G ? -1 : 1, s[4 * e] = W.x, s[4 * e + 1] = W.y, s[4 * e + 2] = W.z, s[4 * e + 3] = O
        }

        if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv)return void THREE.warn("THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");
        var r = this.attributes.index.array, i = this.attributes.position.array, n = this.attributes.normal.array, a = this.attributes.uv.array, o = i.length / 3;
        void 0 === this.attributes.tangent && this.addAttribute("tangent", new THREE.BufferAttribute(new Float32Array(4 * o), 4));
        for (var s = this.attributes.tangent.array, h = [], l = [], u = 0; o > u; u++)h[u] = new THREE.Vector3, l[u] = new THREE.Vector3;
        var c, E, f, d, p, m, T, g, v, R, y, x, _, b, H, M, w, S, A = new THREE.Vector3, C = new THREE.Vector3, F = new THREE.Vector3, B = new THREE.Vector2, U = new THREE.Vector2, L = new THREE.Vector2, P = new THREE.Vector3, D = new THREE.Vector3;
        0 === this.drawcalls.length && this.addDrawCall(0, r.length, 0);
        var N = this.drawcalls;
        for (b = 0, H = N.length; H > b; ++b) {
            var z = N[b].start, k = N[b].count, V = N[b].index;
            for (x = z, _ = z + k; _ > x; x += 3)M = V + r[x], w = V + r[x + 1], S = V + r[x + 2], e(M, w, S)
        }
        var O, I, G, W = new THREE.Vector3, j = new THREE.Vector3, X = new THREE.Vector3, Y = new THREE.Vector3;
        for (b = 0, H = N.length; H > b; ++b) {
            var z = N[b].start, k = N[b].count, V = N[b].index;
            for (x = z, _ = z + k; _ > x; x += 3)M = V + r[x], w = V + r[x + 1], S = V + r[x + 2], t(M), t(w), t(S)
        }
    }, computeOffsets: function (e) {
        void 0 === e && (e = 65535);
        for (var t = this.attributes.index.array, r = this.attributes.position.array, i = t.length / 3, n = new Uint16Array(t.length), a = 0, o = 0, s = [{
            start: 0,
            count: 0,
            index: 0
        }], h = s[0], l = 0, u = 0, c = new Int32Array(6), E = new Int32Array(r.length), f = new Int32Array(r.length), d = 0; d < r.length; d++)E[d] = -1, f[d] = -1;
        for (var p = 0; i > p; p++) {
            u = 0;
            for (var m = 0; 3 > m; m++) {
                var T = t[3 * p + m];
                -1 == E[T] ? (c[2 * m] = T, c[2 * m + 1] = -1, u++) : E[T] < h.index ? (c[2 * m] = T, c[2 * m + 1] = -1, l++) : (c[2 * m] = T, c[2 * m + 1] = E[T])
            }
            var g = o + u;
            if (g > h.index + e) {
                var v = {start: a, count: 0, index: o};
                s.push(v), h = v;
                for (var R = 0; 6 > R; R += 2) {
                    var y = c[R + 1];
                    y > -1 && y < h.index && (c[R + 1] = -1)
                }
            }
            for (var R = 0; 6 > R; R += 2) {
                var T = c[R], y = c[R + 1];
                -1 === y && (y = o++), E[T] = y, f[y] = T, n[a++] = y - h.index, h.count++
            }
        }
        return this.reorderBuffers(n, f, o), this.offsets = s, this.drawcalls = s, s
    }, merge: function (e, t) {
        if (e instanceof THREE.BufferGeometry == !1)return void THREE.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
        void 0 === t && (t = 0);
        var r = this.attributes;
        for (var i in r)if (void 0 !== e.attributes[i])for (var n = r[i], a = n.array, o = e.attributes[i], s = o.array, h = o.itemSize, l = 0, u = h * t; l < s.length; l++, u++)a[u] = s[l];
        return this
    }, normalizeNormals: function () {
        for (var e, t, r, i, n = this.attributes.normal.array, a = 0, o = n.length; o > a; a += 3)e = n[a], t = n[a + 1], r = n[a + 2], i = 1 / Math.sqrt(e * e + t * t + r * r), n[a] *= i, n[a + 1] *= i, n[a + 2] *= i
    }, reorderBuffers: function (e, t, r) {
        var i = {};
        for (var n in this.attributes)if ("index" != n) {
            var a = this.attributes[n].array;
            i[n] = new a.constructor(this.attributes[n].itemSize * r)
        }
        for (var o = 0; r > o; o++) {
            var s = t[o];
            for (var n in this.attributes)if ("index" != n)for (var h = this.attributes[n].array, l = this.attributes[n].itemSize, u = i[n], c = 0; l > c; c++)u[o * l + c] = h[s * l + c]
        }
        this.attributes.index.array = e;
        for (var n in this.attributes)"index" != n && (this.attributes[n].array = i[n], this.attributes[n].numItems = this.attributes[n].itemSize * r)
    }, toJSON: function () {
        var e = {
            metadata: {version: 4, type: "BufferGeometry", generator: "BufferGeometryExporter"},
            uuid: this.uuid,
            type: this.type,
            data: {attributes: {}}
        }, t = this.attributes, r = this.offsets, i = this.boundingSphere;
        for (var n in t) {
            var a = t[n], o = Array.prototype.slice.call(a.array);
            e.data.attributes[n] = {itemSize: a.itemSize, type: a.array.constructor.name, array: o}
        }
        return r.length > 0 && (e.data.offsets = JSON.parse(JSON.stringify(r))), null !== i && (e.data.boundingSphere = {
            center: i.center.toArray(),
            radius: i.radius
        }), e
    }, clone: function () {
        var e = new THREE.BufferGeometry;
        for (var t in this.attributes) {
            var r = this.attributes[t];
            e.addAttribute(t, r.clone())
        }
        for (var i = 0, n = this.offsets.length; n > i; i++) {
            var a = this.offsets[i];
            e.offsets.push({start: a.start, index: a.index, count: a.count})
        }
        return e
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),THREE.Geometry = function () {
    Object.defineProperty(this, "id", {value: THREE.GeometryIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.hasTangents = !1, this.dynamic = !0, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.tangentsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
},THREE.Geometry.prototype = {
    constructor: THREE.Geometry, applyMatrix: function (e) {
        for (var t = (new THREE.Matrix3).getNormalMatrix(e), r = 0, i = this.vertices.length; i > r; r++) {
            var n = this.vertices[r];
            n.applyMatrix4(e)
        }
        for (var r = 0, i = this.faces.length; i > r; r++) {
            var a = this.faces[r];
            a.normal.applyMatrix3(t).normalize();
            for (var o = 0, s = a.vertexNormals.length; s > o; o++)a.vertexNormals[o].applyMatrix3(t).normalize()
        }
        null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0
    }, fromBufferGeometry: function (e) {
        for (var t = this, r = e.attributes, i = r.position.array, n = void 0 !== r.index ? r.index.array : void 0, a = void 0 !== r.normal ? r.normal.array : void 0, o = void 0 !== r.color ? r.color.array : void 0, s = void 0 !== r.uv ? r.uv.array : void 0, h = [], l = [], u = 0, c = 0; u < i.length; u += 3, c += 2)t.vertices.push(new THREE.Vector3(i[u], i[u + 1], i[u + 2])), void 0 !== a && h.push(new THREE.Vector3(a[u], a[u + 1], a[u + 2])), void 0 !== o && t.colors.push(new THREE.Color(o[u], o[u + 1], o[u + 2])), void 0 !== s && l.push(new THREE.Vector2(s[c], s[c + 1]));
        var E = function (e, r, i) {
            var n = void 0 !== a ? [h[e].clone(), h[r].clone(), h[i].clone()] : [], u = void 0 !== o ? [t.colors[e].clone(), t.colors[r].clone(), t.colors[i].clone()] : [];
            t.faces.push(new THREE.Face3(e, r, i, n, u)), void 0 !== s && t.faceVertexUvs[0].push([l[e].clone(), l[r].clone(), l[i].clone()])
        };
        if (void 0 !== n) {
            var f = e.drawcalls;
            if (f.length > 0)for (var u = 0; u < f.length; u++)for (var d = f[u], p = d.start, m = d.count, T = d.index, c = p, g = p + m; g > c; c += 3)E(T + n[c], T + n[c + 1], T + n[c + 2]); else for (var u = 0; u < n.length; u += 3)E(n[u], n[u + 1], n[u + 2])
        } else for (var u = 0; u < i.length / 3; u += 3)E(u, u + 1, u + 2);
        return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
    }, center: function () {
        this.computeBoundingBox();
        var e = this.boundingBox.center().negate();
        return this.applyMatrix((new THREE.Matrix4).setPosition(e)), e
    }, computeFaceNormals: function () {
        for (var e = new THREE.Vector3, t = new THREE.Vector3, r = 0, i = this.faces.length; i > r; r++) {
            var n = this.faces[r], a = this.vertices[n.a], o = this.vertices[n.b], s = this.vertices[n.c];
            e.subVectors(s, o), t.subVectors(a, o), e.cross(t), e.normalize(), n.normal.copy(e)
        }
    }, computeVertexNormals: function (e) {
        var t, r, i, n, a, o;
        for (o = new Array(this.vertices.length), t = 0, r = this.vertices.length; r > t; t++)o[t] = new THREE.Vector3;
        if (e) {
            var s, h, l, u = new THREE.Vector3, c = new THREE.Vector3;
            for (i = 0, n = this.faces.length; n > i; i++)a = this.faces[i], s = this.vertices[a.a], h = this.vertices[a.b], l = this.vertices[a.c], u.subVectors(l, h), c.subVectors(s, h), u.cross(c), o[a.a].add(u), o[a.b].add(u), o[a.c].add(u)
        } else for (i = 0, n = this.faces.length; n > i; i++)a = this.faces[i], o[a.a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
        for (t = 0, r = this.vertices.length; r > t; t++)o[t].normalize();
        for (i = 0, n = this.faces.length; n > i; i++)a = this.faces[i], a.vertexNormals[0] = o[a.a].clone(), a.vertexNormals[1] = o[a.b].clone(), a.vertexNormals[2] = o[a.c].clone()
    }, computeMorphNormals: function () {
        var e, t, r, i, n;
        for (r = 0, i = this.faces.length; i > r; r++)for (n = this.faces[r], n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(), n.__originalVertexNormals || (n.__originalVertexNormals = []), e = 0, t = n.vertexNormals.length; t > e; e++)n.__originalVertexNormals[e] ? n.__originalVertexNormals[e].copy(n.vertexNormals[e]) : n.__originalVertexNormals[e] = n.vertexNormals[e].clone();
        var a = new THREE.Geometry;
        for (a.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
            if (!this.morphNormals[e]) {
                this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                var o, s, h = this.morphNormals[e].faceNormals, l = this.morphNormals[e].vertexNormals;
                for (r = 0, i = this.faces.length; i > r; r++)o = new THREE.Vector3, s = {
                    a: new THREE.Vector3,
                    b: new THREE.Vector3,
                    c: new THREE.Vector3
                }, h.push(o), l.push(s)
            }
            var u = this.morphNormals[e];
            a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
            var o, s;
            for (r = 0, i = this.faces.length; i > r; r++)n = this.faces[r], o = u.faceNormals[r], s = u.vertexNormals[r], o.copy(n.normal), s.a.copy(n.vertexNormals[0]), s.b.copy(n.vertexNormals[1]), s.c.copy(n.vertexNormals[2])
        }
        for (r = 0, i = this.faces.length; i > r; r++)n = this.faces[r], n.normal = n.__originalFaceNormal, n.vertexNormals = n.__originalVertexNormals
    }, computeTangents: function () {
        function e(e, t, r, i, n, a, o) {
            l = e.vertices[t], u = e.vertices[r], c = e.vertices[i], E = h[n], f = h[a], d = h[o], p = u.x - l.x, m = c.x - l.x, T = u.y - l.y, g = c.y - l.y, v = u.z - l.z, R = c.z - l.z, y = f.x - E.x, x = d.x - E.x, _ = f.y - E.y, b = d.y - E.y, H = 1 / (y * b - x * _), F.set((b * p - _ * m) * H, (b * T - _ * g) * H, (b * v - _ * R) * H), B.set((y * m - x * p) * H, (y * g - x * T) * H, (y * R - x * v) * H), A[t].add(F), A[r].add(F), A[i].add(F), C[t].add(B), C[r].add(B), C[i].add(B)
        }

        var t, r, i, n, a, o, s, h, l, u, c, E, f, d, p, m, T, g, v, R, y, x, _, b, H, M, w, S, A = [], C = [], F = new THREE.Vector3, B = new THREE.Vector3, U = new THREE.Vector3, L = new THREE.Vector3, P = new THREE.Vector3;
        for (i = 0, n = this.vertices.length; n > i; i++)A[i] = new THREE.Vector3, C[i] = new THREE.Vector3;
        for (t = 0, r = this.faces.length; r > t; t++)s = this.faces[t], h = this.faceVertexUvs[0][t], e(this, s.a, s.b, s.c, 0, 1, 2);
        var D = ["a", "b", "c", "d"];
        for (t = 0, r = this.faces.length; r > t; t++)for (s = this.faces[t], a = 0; a < Math.min(s.vertexNormals.length, 3); a++)P.copy(s.vertexNormals[a]), o = s[D[a]], M = A[o], U.copy(M), U.sub(P.multiplyScalar(P.dot(M))).normalize(), L.crossVectors(s.vertexNormals[a], M), w = L.dot(C[o]), S = 0 > w ? -1 : 1, s.vertexTangents[a] = new THREE.Vector4(U.x, U.y, U.z, S);
        this.hasTangents = !0
    }, computeLineDistances: function () {
        for (var e = 0, t = this.vertices, r = 0, i = t.length; i > r; r++)r > 0 && (e += t[r].distanceTo(t[r - 1])), this.lineDistances[r] = e
    }, computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3), this.boundingBox.setFromPoints(this.vertices)
    }, computeBoundingSphere: function () {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere), this.boundingSphere.setFromPoints(this.vertices)
    }, merge: function (e, t, r) {
        if (e instanceof THREE.Geometry == !1)return void THREE.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
        var i, n = this.vertices.length, a = this.vertices, o = e.vertices, s = this.faces, h = e.faces, l = this.faceVertexUvs[0], u = e.faceVertexUvs[0];
        void 0 === r && (r = 0), void 0 !== t && (i = (new THREE.Matrix3).getNormalMatrix(t));
        for (var c = 0, E = o.length; E > c; c++) {
            var f = o[c], d = f.clone();
            void 0 !== t && d.applyMatrix4(t), a.push(d)
        }
        for (c = 0, E = h.length; E > c; c++) {
            var p, m, T, g = h[c], v = g.vertexNormals, R = g.vertexColors;
            p = new THREE.Face3(g.a + n, g.b + n, g.c + n), p.normal.copy(g.normal), void 0 !== i && p.normal.applyMatrix3(i).normalize();
            for (var y = 0, x = v.length; x > y; y++)m = v[y].clone(), void 0 !== i && m.applyMatrix3(i).normalize(), p.vertexNormals.push(m);
            p.color.copy(g.color);
            for (var y = 0, x = R.length; x > y; y++)T = R[y], p.vertexColors.push(T.clone());
            p.materialIndex = g.materialIndex + r, s.push(p)
        }
        for (c = 0, E = u.length; E > c; c++) {
            var _ = u[c], b = [];
            if (void 0 !== _) {
                for (var y = 0, x = _.length; x > y; y++)b.push(_[y].clone());
                l.push(b)
            }
        }
    }, mergeMesh: function (e) {
        return e instanceof THREE.Mesh == !1 ? void THREE.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(), void this.merge(e.geometry, e.matrix))
    }, mergeVertices: function () {
        var e, t, r, i, n, a, o, s, h = {}, l = [], u = [], c = 4, E = Math.pow(10, c);
        for (r = 0, i = this.vertices.length; i > r; r++)e = this.vertices[r], t = Math.round(e.x * E) + "_" + Math.round(e.y * E) + "_" + Math.round(e.z * E), void 0 === h[t] ? (h[t] = r, l.push(this.vertices[r]), u[r] = l.length - 1) : u[r] = u[h[t]];
        var f = [];
        for (r = 0, i = this.faces.length; i > r; r++) {
            n = this.faces[r], n.a = u[n.a], n.b = u[n.b], n.c = u[n.c], a = [n.a, n.b, n.c];
            for (var d = -1, p = 0; 3 > p; p++)if (a[p] == a[(p + 1) % 3]) {
                d = p, f.push(r);
                break
            }
        }
        for (r = f.length - 1; r >= 0; r--) {
            var m = f[r];
            for (this.faces.splice(m, 1), o = 0, s = this.faceVertexUvs.length; s > o; o++)this.faceVertexUvs[o].splice(m, 1)
        }
        var T = this.vertices.length - l.length;
        return this.vertices = l, T
    }, toJSON: function () {
        function e(e, t, r) {
            return r ? e | 1 << t : e & ~(1 << t)
        }

        function t(e) {
            var t = e.x.toString() + e.y.toString() + e.z.toString();
            return void 0 !== E[t] ? E[t] : (E[t] = c.length / 3, c.push(e.x, e.y, e.z), E[t])
        }

        function r(e) {
            var t = e.r.toString() + e.g.toString() + e.b.toString();
            return void 0 !== d[t] ? d[t] : (d[t] = f.length, f.push(e.getHex()), d[t])
        }

        function i(e) {
            var t = e.x.toString() + e.y.toString();
            return void 0 !== m[t] ? m[t] : (m[t] = p.length / 2, p.push(e.x, e.y), m[t])
        }

        var n = {
            metadata: {version: 4, type: "BufferGeometry", generator: "BufferGeometryExporter"},
            uuid: this.uuid,
            type: this.type
        };
        if ("" !== this.name && (n.name = this.name), void 0 !== this.parameters) {
            var a = this.parameters;
            for (var o in a)void 0 !== a[o] && (n[o] = a[o]);
            return n
        }
        for (var s = [], h = 0; h < this.vertices.length; h++) {
            var l = this.vertices[h];
            s.push(l.x, l.y, l.z)
        }
        for (var u = [], c = [], E = {}, f = [], d = {}, p = [], m = {}, h = 0; h < this.faces.length; h++) {
            var T = this.faces[h], g = !1, v = !1, R = void 0 !== this.faceVertexUvs[0][h], y = T.normal.length() > 0, x = T.vertexNormals.length > 0, _ = 1 !== T.color.r || 1 !== T.color.g || 1 !== T.color.b, b = T.vertexColors.length > 0, H = 0;
            if (H = e(H, 0, 0), H = e(H, 1, g), H = e(H, 2, v), H = e(H, 3, R), H = e(H, 4, y), H = e(H, 5, x), H = e(H, 6, _), H = e(H, 7, b), u.push(H), u.push(T.a, T.b, T.c), R) {
                var M = this.faceVertexUvs[0][h];
                u.push(i(M[0]), i(M[1]), i(M[2]))
            }
            if (y && u.push(t(T.normal)), x) {
                var w = T.vertexNormals;
                u.push(t(w[0]), t(w[1]), t(w[2]))
            }
            if (_ && u.push(r(T.color)), b) {
                var S = T.vertexColors;
                u.push(r(S[0]), r(S[1]), r(S[2]))
            }
        }
        return n.data = {}, n.data.vertices = s, n.data.normals = c, f.length > 0 && (n.data.colors = f), p.length > 0 && (n.data.uvs = [p]), n.data.faces = u, n
    }, clone: function () {
        for (var e = new THREE.Geometry, t = this.vertices, r = 0, i = t.length; i > r; r++)e.vertices.push(t[r].clone());
        for (var n = this.faces, r = 0, i = n.length; i > r; r++)e.faces.push(n[r].clone());
        for (var r = 0, i = this.faceVertexUvs.length; i > r; r++) {
            var a = this.faceVertexUvs[r];
            void 0 === e.faceVertexUvs[r] && (e.faceVertexUvs[r] = []);
            for (var o = 0, s = a.length; s > o; o++) {
                for (var h = a[o], l = [], u = 0, c = h.length; c > u; u++) {
                    var E = h[u];
                    l.push(E.clone())
                }
                e.faceVertexUvs[r].push(l)
            }
        }
        return e
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),THREE.GeometryIdCount = 0,THREE.Camera = function () {
    THREE.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4
},THREE.Camera.prototype = Object.create(THREE.Object3D.prototype),THREE.Camera.prototype.constructor = THREE.Camera,THREE.Camera.prototype.getWorldDirection = function () {
    var e = new THREE.Quaternion;
    return function (t) {
        var r = t || new THREE.Vector3;
        return this.getWorldQuaternion(e), r.set(0, 0, -1).applyQuaternion(e)
    }
}(),THREE.Camera.prototype.lookAt = function () {
    var e = new THREE.Matrix4;
    return function (t) {
        e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
    }
}(),THREE.Camera.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Camera), THREE.Object3D.prototype.clone.call(this, e), e.matrixWorldInverse.copy(this.matrixWorldInverse), e.projectionMatrix.copy(this.projectionMatrix), e
},THREE.PerspectiveCamera = function (e, t, r, i) {
    THREE.Camera.call(this), this.type = "PerspectiveCamera", this.zoom = 1, this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== i ? i : 2e3, this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype),THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera,THREE.PerspectiveCamera.prototype.setLens = function (e, t) {
    void 0 === t && (t = 24), this.fov = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e))), this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype.setViewOffset = function (e, t, r, i, n, a) {
    this.fullWidth = e, this.fullHeight = t, this.x = r, this.y = i, this.width = n, this.height = a, this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
    var e = THREE.Math.radToDeg(2 * Math.atan(Math.tan(.5 * THREE.Math.degToRad(this.fov)) / this.zoom));
    if (this.fullWidth) {
        var t = this.fullWidth / this.fullHeight, r = Math.tan(THREE.Math.degToRad(.5 * e)) * this.near, i = -r, n = t * i, a = t * r, o = Math.abs(a - n), s = Math.abs(r - i);
        this.projectionMatrix.makeFrustum(n + this.x * o / this.fullWidth, n + (this.x + this.width) * o / this.fullWidth, r - (this.y + this.height) * s / this.fullHeight, r - this.y * s / this.fullHeight, this.near, this.far)
    } else this.projectionMatrix.makePerspective(e, this.aspect, this.near, this.far)
},THREE.PerspectiveCamera.prototype.clone = function () {
    var e = new THREE.PerspectiveCamera;
    return THREE.Camera.prototype.clone.call(this, e), e.zoom = this.zoom, e.fov = this.fov, e.aspect = this.aspect, e.near = this.near, e.far = this.far, e.projectionMatrix.copy(this.projectionMatrix), e
},THREE.Light = function (e) {
    THREE.Object3D.call(this), this.type = "Light", this.color = new THREE.Color(e)
},THREE.Light.prototype = Object.create(THREE.Object3D.prototype),THREE.Light.prototype.constructor = THREE.Light,THREE.Light.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Light), THREE.Object3D.prototype.clone.call(this, e), e.color.copy(this.color), e
},THREE.Cache = {
    files: {}, add: function (e, t) {
        this.files[e] = t
    }, get: function (e) {
        return this.files[e]
    }, remove: function (e) {
        delete this.files[e]
    }, clear: function () {
        this.files = {}
    }
},THREE.Loader = function (e) {
    this.showStatus = e, this.statusDomElement = e ? THREE.Loader.prototype.addStatusElement() : null, this.imageLoader = new THREE.ImageLoader, this.onLoadStart = function () {
    }, this.onLoadProgress = function () {
    }, this.onLoadComplete = function () {
    }
},THREE.Loader.prototype = {
    constructor: THREE.Loader, crossOrigin: void 0, addStatusElement: function () {
        var e = document.createElement("div");
        return e.style.position = "absolute", e.style.right = "0px", e.style.top = "0px", e.style.fontSize = "0.8em", e.style.textAlign = "left", e.style.background = "rgba(0,0,0,0.25)", e.style.color = "#fff", e.style.width = "120px", e.style.padding = "0.5em 0.5em 0.5em 0.5em", e.style.zIndex = 1e3, e.innerHTML = "Loading ...", e
    }, updateProgress: function (e) {
        var t = "Loaded ";
        t += e.total ? (100 * e.loaded / e.total).toFixed(0) + "%" : (e.loaded / 1024).toFixed(2) + " KB", this.statusDomElement.innerHTML = t
    }, extractUrlBase: function (e) {
        var t = e.split("/");
        return 1 === t.length ? "./" : (t.pop(), t.join("/") + "/")
    }, initMaterials: function (e, t) {
        for (var r = [], i = 0; i < e.length; ++i)r[i] = this.createMaterial(e[i], t);
        return r
    }, needsTangents: function (e) {
        for (var t = 0, r = e.length; r > t; t++) {
            var i = e[t];
            if (i instanceof THREE.ShaderMaterial)return !0
        }
        return !1
    }, createMaterial: function (e, t) {
        function r(e) {
            var t = Math.log(e) / Math.LN2;
            return Math.pow(2, Math.round(t))
        }

        function i(e, i, n, o, s, h, l) {
            var u, c = t + n, E = THREE.Loader.Handlers.get(c);
            if (null !== E ? u = E.load(c) : (u = new THREE.Texture, E = a.imageLoader, E.crossOrigin = a.crossOrigin, E.load(c, function (e) {
                    if (THREE.Math.isPowerOfTwo(e.width) === !1 || THREE.Math.isPowerOfTwo(e.height) === !1) {
                        var t = r(e.width), i = r(e.height), n = document.createElement("canvas");
                        n.width = t, n.height = i;
                        var a = n.getContext("2d");
                        a.drawImage(e, 0, 0, t, i), u.image = n
                    } else u.image = e;
                    u.needsUpdate = !0
                })), u.sourceFile = n, o && (u.repeat.set(o[0], o[1]), 1 !== o[0] && (u.wrapS = THREE.RepeatWrapping), 1 !== o[1] && (u.wrapT = THREE.RepeatWrapping)), s && u.offset.set(s[0], s[1]), h) {
                var f = {repeat: THREE.RepeatWrapping, mirror: THREE.MirroredRepeatWrapping};
                void 0 !== f[h[0]] && (u.wrapS = f[h[0]]), void 0 !== f[h[1]] && (u.wrapT = f[h[1]])
            }
            l && (u.anisotropy = l), e[i] = u
        }

        function n(e) {
            return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2]
        }

        var a = this, o = "MeshLambertMaterial", s = {
            color: 15658734,
            opacity: 1,
            map: null,
            lightMap: null,
            normalMap: null,
            bumpMap: null,
            wireframe: !1
        };
        if (e.shading) {
            var h = e.shading.toLowerCase();
            "phong" === h ? o = "MeshPhongMaterial" : "basic" === h && (o = "MeshBasicMaterial")
        }
        void 0 !== e.blending && void 0 !== THREE[e.blending] && (s.blending = THREE[e.blending]), void 0 !== e.transparent && (s.transparent = e.transparent), void 0 !== e.opacity && e.opacity < 1 && (s.transparent = !0), void 0 !== e.depthTest && (s.depthTest = e.depthTest), void 0 !== e.depthWrite && (s.depthWrite = e.depthWrite), void 0 !== e.visible && (s.visible = e.visible), void 0 !== e.flipSided && (s.side = THREE.BackSide), void 0 !== e.doubleSided && (s.side = THREE.DoubleSide), void 0 !== e.wireframe && (s.wireframe = e.wireframe), void 0 !== e.vertexColors && ("face" === e.vertexColors ? s.vertexColors = THREE.FaceColors : e.vertexColors && (s.vertexColors = THREE.VertexColors)), e.colorDiffuse ? s.color = n(e.colorDiffuse) : e.DbgColor && (s.color = e.DbgColor), e.colorSpecular && (s.specular = n(e.colorSpecular)), e.colorEmissive && (s.emissive = n(e.colorEmissive)), void 0 !== e.transparency && (console.warn("THREE.Loader: transparency has been renamed to opacity"), e.opacity = e.transparency), void 0 !== e.opacity && (s.opacity = e.opacity), e.specularCoef && (s.shininess = e.specularCoef), e.mapDiffuse && t && i(s, "map", e.mapDiffuse, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy), e.mapLight && t && i(s, "lightMap", e.mapLight, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy), e.mapBump && t && i(s, "bumpMap", e.mapBump, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy), e.mapNormal && t && i(s, "normalMap", e.mapNormal, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy), e.mapSpecular && t && i(s, "specularMap", e.mapSpecular, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy), e.mapAlpha && t && i(s, "alphaMap", e.mapAlpha, e.mapAlphaRepeat, e.mapAlphaOffset, e.mapAlphaWrap, e.mapAlphaAnisotropy), e.mapBumpScale && (s.bumpScale = e.mapBumpScale), e.mapNormalFactor && (s.normalScale = new THREE.Vector2(e.mapNormalFactor, e.mapNormalFactor));
        var l = new THREE[o](s);
        return void 0 !== e.DbgName && (l.name = e.DbgName), l
    }
},THREE.Loader.Handlers = {
    handlers: [], add: function (e, t) {
        this.handlers.push(e, t)
    }, get: function (e) {
        for (var t = 0, r = this.handlers.length; r > t; t += 2) {
            var i = this.handlers[t], n = this.handlers[t + 1];
            if (i.test(e))return n
        }
        return null
    }
},THREE.ImageLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader, load: function (e, t, r, i) {
        var n = this, a = THREE.Cache.get(e);
        if (void 0 !== a)return void t(a);
        var o = document.createElement("img");
        return o.addEventListener("load", function (r) {
            THREE.Cache.add(e, this), t && t(this), n.manager.itemEnd(e)
        }, !1), void 0 !== r && o.addEventListener("progress", function (e) {
            r(e)
        }, !1), void 0 !== i && o.addEventListener("error", function (e) {
            i(e)
        }, !1), void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), o.src = e, n.manager.itemStart(e), o
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }
},THREE.LoadingManager = function (e, t, r) {
    var i = this, n = 0, a = 0;
    this.onLoad = e, this.onProgress = t, this.onError = r, this.itemStart = function (e) {
        a++
    }, this.itemEnd = function (e) {
        n++, void 0 !== i.onProgress && i.onProgress(e, n, a), n === a && void 0 !== i.onLoad && i.onLoad()
    }
},THREE.DefaultLoadingManager = new THREE.LoadingManager,THREE.BufferGeometryLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader, load: function (e, t, r, i) {
        var n = this, a = new THREE.XHRLoader(n.manager);
        a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
            t(n.parse(JSON.parse(e)))
        }, r, i)
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, parse: function (e) {
        var t = new THREE.BufferGeometry, r = e.data.attributes;
        for (var i in r) {
            var n = r[i], a = new self[n.type](n.array);
            t.addAttribute(i, new THREE.BufferAttribute(a, n.itemSize))
        }
        var o = e.data.offsets;
        void 0 !== o && (t.offsets = JSON.parse(JSON.stringify(o)));
        var s = e.data.boundingSphere;
        if (void 0 !== s) {
            var h = new THREE.Vector3;
            void 0 !== s.center && h.fromArray(s.center), t.boundingSphere = new THREE.Sphere(h, s.radius)
        }
        return t
    }
},THREE.TextureLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader, load: function (e, t, r, i) {
        var n = this, a = new THREE.ImageLoader(n.manager);
        a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
            var r = new THREE.Texture(e);
            r.needsUpdate = !0, void 0 !== t && t(r)
        }, r, i)
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }
},THREE.DataTextureLoader = THREE.BinaryTextureLoader = function () {
    this._parser = null
},THREE.BinaryTextureLoader.prototype = {
    constructor: THREE.BinaryTextureLoader, load: function (e, t, r, i) {
        var n = this, a = new THREE.DataTexture, o = new THREE.XHRLoader;
        return o.setResponseType("arraybuffer"), o.load(e, function (e) {
            var r = n._parser(e);
            r && (void 0 !== r.image ? a.image = r.image : void 0 !== r.data && (a.image.width = r.width, a.image.height = r.height, a.image.data = r.data), a.wrapS = void 0 !== r.wrapS ? r.wrapS : THREE.ClampToEdgeWrapping, a.wrapT = void 0 !== r.wrapT ? r.wrapT : THREE.ClampToEdgeWrapping, a.magFilter = void 0 !== r.magFilter ? r.magFilter : THREE.LinearFilter, a.minFilter = void 0 !== r.minFilter ? r.minFilter : THREE.LinearMipMapLinearFilter, a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, void 0 !== r.format && (a.format = r.format), void 0 !== r.type && (a.type = r.type), void 0 !== r.mipmaps && (a.mipmaps = r.mipmaps), 1 === r.mipmapCount && (a.minFilter = THREE.LinearFilter), a.needsUpdate = !0, t && t(a, r))
        }, r, i), a
    }
},THREE.Material = function () {
    Object.defineProperty(this, "id", {value: THREE.MaterialIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Material", this.side = THREE.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = THREE.NormalBlending, this.blendSrc = THREE.SrcAlphaFactor, this.blendDst = THREE.OneMinusSrcAlphaFactor, this.blendEquation = THREE.AddEquation, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthTest = !0, this.depthWrite = !0, this.colorWrite = !0, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.overdraw = 0, this.visible = !0, this._needsUpdate = !0
},THREE.Material.prototype = {
    constructor: THREE.Material, get needsUpdate() {
        return this._needsUpdate
    }, set needsUpdate(e) {
        e === !0 && this.update(), this._needsUpdate = e
    }, setValues: function (e) {
        if (void 0 !== e)for (var t in e) {
            var r = e[t];
            if (void 0 !== r) {
                if (t in this) {
                    var i = this[t];
                    i instanceof THREE.Color ? i.set(r) : i instanceof THREE.Vector3 && r instanceof THREE.Vector3 ? i.copy(r) : "overdraw" == t ? this[t] = Number(r) : this[t] = r
                }
            } else THREE.warn("THREE.Material: '" + t + "' parameter is undefined.")
        }
    }, toJSON: function () {
        var e = {
            metadata: {version: 4.2, type: "material", generator: "MaterialExporter"},
            uuid: this.uuid,
            type: this.type
        };
        return "" !== this.name && (e.name = this.name), this instanceof THREE.MeshBasicMaterial ? (e.color = this.color.getHex(), this.vertexColors !== THREE.NoColors && (e.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (e.blending = this.blending), this.side !== THREE.FrontSide && (e.side = this.side)) : this instanceof THREE.MeshLambertMaterial ? (e.color = this.color.getHex(), e.emissive = this.emissive.getHex(), this.vertexColors !== THREE.NoColors && (e.vertexColors = this.vertexColors), this.shading !== THREE.SmoothShading && (e.shading = this.shading), this.blending !== THREE.NormalBlending && (e.blending = this.blending), this.side !== THREE.FrontSide && (e.side = this.side)) : this instanceof THREE.MeshPhongMaterial ? (e.color = this.color.getHex(), e.emissive = this.emissive.getHex(), e.specular = this.specular.getHex(), e.shininess = this.shininess, this.vertexColors !== THREE.NoColors && (e.vertexColors = this.vertexColors), this.shading !== THREE.SmoothShading && (e.shading = this.shading), this.blending !== THREE.NormalBlending && (e.blending = this.blending), this.side !== THREE.FrontSide && (e.side = this.side)) : this instanceof THREE.MeshNormalMaterial ? (this.blending !== THREE.NormalBlending && (e.blending = this.blending), this.side !== THREE.FrontSide && (e.side = this.side)) : this instanceof THREE.MeshDepthMaterial ? (this.blending !== THREE.NormalBlending && (e.blending = this.blending), this.side !== THREE.FrontSide && (e.side = this.side)) : this instanceof THREE.PointCloudMaterial ? (e.size = this.size, e.sizeAttenuation = this.sizeAttenuation, e.color = this.color.getHex(), this.vertexColors !== THREE.NoColors && (e.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (e.blending = this.blending)) : this instanceof THREE.ShaderMaterial ? (e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader) : this instanceof THREE.SpriteMaterial && (e.color = this.color.getHex()), this.opacity < 1 && (e.opacity = this.opacity), this.transparent !== !1 && (e.transparent = this.transparent), this.wireframe !== !1 && (e.wireframe = this.wireframe), e
    }, clone: function (e) {
        return void 0 === e && (e = new THREE.Material), e.name = this.name, e.side = this.side, e.opacity = this.opacity, e.transparent = this.transparent, e.blending = this.blending, e.blendSrc = this.blendSrc, e.blendDst = this.blendDst, e.blendEquation = this.blendEquation, e.blendSrcAlpha = this.blendSrcAlpha, e.blendDstAlpha = this.blendDstAlpha, e.blendEquationAlpha = this.blendEquationAlpha, e.depthTest = this.depthTest, e.depthWrite = this.depthWrite, e.polygonOffset = this.polygonOffset, e.polygonOffsetFactor = this.polygonOffsetFactor, e.polygonOffsetUnits = this.polygonOffsetUnits, e.alphaTest = this.alphaTest, e.overdraw = this.overdraw, e.visible = this.visible, e
    }, update: function () {
        this.dispatchEvent({type: "update"})
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.Material.prototype),THREE.MaterialIdCount = 0,THREE.LineBasicMaterial = function (e) {
    THREE.Material.call(this), this.type = "LineBasicMaterial", this.color = new THREE.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = THREE.NoColors, this.fog = !0, this.setValues(e)
},THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype),THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial,THREE.LineBasicMaterial.prototype.clone = function () {
    var e = new THREE.LineBasicMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.linecap = this.linecap, e.linejoin = this.linejoin, e.vertexColors = this.vertexColors, e.fog = this.fog, e
},THREE.LineDashedMaterial = function (e) {
    THREE.Material.call(this), this.type = "LineDashedMaterial", this.color = new THREE.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(e)
},THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype),THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial,THREE.LineDashedMaterial.prototype.clone = function () {
    var e = new THREE.LineDashedMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.scale = this.scale, e.dashSize = this.dashSize, e.gapSize = this.gapSize, e.vertexColors = this.vertexColors, e.fog = this.fog, e
},THREE.MeshBasicMaterial = function (e) {
    THREE.Material.call(this), this.type = "MeshBasicMaterial", this.color = new THREE.Color(16777215), this.map = null, this.lightMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(e)
},THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial,THREE.MeshBasicMaterial.prototype.clone = function () {
    var e = new THREE.MeshBasicMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.alphaMap = this.alphaMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e
},THREE.MeshLambertMaterial = function (e) {
    THREE.Material.call(this), this.type = "MeshLambertMaterial", this.color = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.wrapAround = !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
},THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial,THREE.MeshLambertMaterial.prototype.clone = function () {
    var e = new THREE.MeshLambertMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.emissive.copy(this.emissive), e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.alphaMap = this.alphaMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
},THREE.MeshPhongMaterial = function (e) {
    THREE.Material.call(this), this.type = "MeshPhongMaterial", this.color = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.specular = new THREE.Color(1118481), this.shininess = 30, this.metal = !1, this.wrapAround = !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new THREE.Vector2(1, 1), this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
},THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial,THREE.MeshPhongMaterial.prototype.clone = function () {
    var e = new THREE.MeshPhongMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.emissive.copy(this.emissive), e.specular.copy(this.specular), e.shininess = this.shininess, e.metal = this.metal, e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.bumpMap = this.bumpMap, e.bumpScale = this.bumpScale, e.normalMap = this.normalMap, e.normalScale.copy(this.normalScale), e.specularMap = this.specularMap, e.alphaMap = this.alphaMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
},THREE.MeshDepthMaterial = function (e) {
    THREE.Material.call(this), this.type = "MeshDepthMaterial",
        this.morphTargets = !1, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
},THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial,THREE.MeshDepthMaterial.prototype.clone = function () {
    var e = new THREE.MeshDepthMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e
},THREE.MeshNormalMaterial = function (e) {
    THREE.Material.call(this, e), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(e)
},THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial,THREE.MeshNormalMaterial.prototype.clone = function () {
    var e = new THREE.MeshNormalMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e
},THREE.MeshFaceMaterial = function (e) {
    this.uuid = THREE.Math.generateUUID(), this.type = "MeshFaceMaterial", this.materials = e instanceof Array ? e : []
},THREE.MeshFaceMaterial.prototype = {
    constructor: THREE.MeshFaceMaterial, toJSON: function () {
        for (var e = {
            metadata: {version: 4.2, type: "material", generator: "MaterialExporter"},
            uuid: this.uuid,
            type: this.type,
            materials: []
        }, t = 0, r = this.materials.length; r > t; t++)e.materials.push(this.materials[t].toJSON());
        return e
    }, clone: function () {
        for (var e = new THREE.MeshFaceMaterial, t = 0; t < this.materials.length; t++)e.materials.push(this.materials[t].clone());
        return e
    }
},THREE.PointCloudMaterial = function (e) {
    THREE.Material.call(this), this.type = "PointCloudMaterial", this.color = new THREE.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = THREE.NoColors, this.fog = !0, this.setValues(e)
},THREE.PointCloudMaterial.prototype = Object.create(THREE.Material.prototype),THREE.PointCloudMaterial.prototype.constructor = THREE.PointCloudMaterial,THREE.PointCloudMaterial.prototype.clone = function () {
    var e = new THREE.PointCloudMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.size = this.size, e.sizeAttenuation = this.sizeAttenuation, e.vertexColors = this.vertexColors, e.fog = this.fog, e
},THREE.ParticleBasicMaterial = function (e) {
    return THREE.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial."), new THREE.PointCloudMaterial(e)
},THREE.ParticleSystemMaterial = function (e) {
    return THREE.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial."), new THREE.PointCloudMaterial(e)
},THREE.ShaderMaterial = function (e) {
    THREE.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.attributes = null, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = THREE.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.setValues(e)
},THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype),THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial,THREE.ShaderMaterial.prototype.clone = function () {
    var e = new THREE.ShaderMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.fragmentShader = this.fragmentShader, e.vertexShader = this.vertexShader, e.uniforms = THREE.UniformsUtils.clone(this.uniforms), e.attributes = this.attributes, e.defines = this.defines, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.fog = this.fog, e.lights = this.lights, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
},THREE.RawShaderMaterial = function (e) {
    THREE.ShaderMaterial.call(this, e), this.type = "RawShaderMaterial"
},THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype),THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial,THREE.RawShaderMaterial.prototype.clone = function () {
    var e = new THREE.RawShaderMaterial;
    return THREE.ShaderMaterial.prototype.clone.call(this, e), e
},THREE.SpriteMaterial = function (e) {
    THREE.Material.call(this), this.type = "SpriteMaterial", this.color = new THREE.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(e)
},THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype),THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial,THREE.SpriteMaterial.prototype.clone = function () {
    var e = new THREE.SpriteMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.rotation = this.rotation, e.fog = this.fog, e
},THREE.Texture = function (e, t, r, i, n, a, o, s, h) {
    Object.defineProperty(this, "id", {value: THREE.TextureIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.sourceFile = "", this.image = void 0 !== e ? e : THREE.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : THREE.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== i ? i : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== n ? n : THREE.LinearFilter, this.minFilter = void 0 !== a ? a : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== h ? h : 1, this.format = void 0 !== o ? o : THREE.RGBAFormat, this.type = void 0 !== s ? s : THREE.UnsignedByteType, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this._needsUpdate = !1, this.onUpdate = null
},THREE.Texture.DEFAULT_IMAGE = void 0,THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping,THREE.Texture.prototype = {
    constructor: THREE.Texture,
    get needsUpdate() {
        return this._needsUpdate
    },
    set needsUpdate(e) {
        e === !0 && this.update(), this._needsUpdate = e
    },
    clone: function (e) {
        return void 0 === e && (e = new THREE.Texture), e.image = this.image, e.mipmaps = this.mipmaps.slice(0), e.mapping = this.mapping, e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.format = this.format, e.type = this.type, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.generateMipmaps = this.generateMipmaps, e.premultiplyAlpha = this.premultiplyAlpha, e.flipY = this.flipY, e.unpackAlignment = this.unpackAlignment, e
    },
    update: function () {
        this.dispatchEvent({type: "update"})
    },
    dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype),THREE.TextureIdCount = 0,THREE.CubeTexture = function (e, t, r, i, n, a, o, s, h) {
    t = void 0 !== t ? t : THREE.CubeReflectionMapping, THREE.Texture.call(this, e, t, r, i, n, a, o, s, h), this.images = e
},THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype),THREE.CubeTexture.prototype.constructor = THREE.CubeTexture,THREE.CubeTexture.clone = function (e) {
    return void 0 === e && (e = new THREE.CubeTexture), THREE.Texture.prototype.clone.call(this, e), e.images = this.images, e
},THREE.CompressedTexture = function (e, t, r, i, n, a, o, s, h, l, u) {
    THREE.Texture.call(this, null, a, o, s, h, l, i, n, u), this.image = {
        width: t,
        height: r
    }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
},THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype),THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture,THREE.CompressedTexture.prototype.clone = function () {
    var e = new THREE.CompressedTexture;
    return THREE.Texture.prototype.clone.call(this, e), e
},THREE.DataTexture = function (e, t, r, i, n, a, o, s, h, l, u) {
    THREE.Texture.call(this, null, a, o, s, h, l, i, n, u), this.image = {data: e, width: t, height: r}
},THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype),THREE.DataTexture.prototype.constructor = THREE.DataTexture,THREE.DataTexture.prototype.clone = function () {
    var e = new THREE.DataTexture;
    return THREE.Texture.prototype.clone.call(this, e), e
},THREE.Group = function () {
    THREE.Object3D.call(this), this.type = "Group"
},THREE.Group.prototype = Object.create(THREE.Object3D.prototype),THREE.Group.prototype.constructor = THREE.Group,THREE.PointCloud = function (e, t) {
    THREE.Object3D.call(this), this.type = "PointCloud", this.geometry = void 0 !== e ? e : new THREE.Geometry, this.material = void 0 !== t ? t : new THREE.PointCloudMaterial({color: 16777215 * Math.random()})
},THREE.PointCloud.prototype = Object.create(THREE.Object3D.prototype),THREE.PointCloud.prototype.constructor = THREE.PointCloud,THREE.PointCloud.prototype.raycast = function () {
    var e = new THREE.Matrix4, t = new THREE.Ray;
    return function (r, i) {
        var n = this, a = n.geometry, o = r.params.PointCloud.threshold;
        if (e.getInverse(this.matrixWorld), t.copy(r.ray).applyMatrix4(e), null === a.boundingBox || t.isIntersectionBox(a.boundingBox) !== !1) {
            var s = o / ((this.scale.x + this.scale.y + this.scale.z) / 3), h = new THREE.Vector3, l = function (e, a) {
                var o = t.distanceToPoint(e);
                if (s > o) {
                    var h = t.closestPointToPoint(e);
                    h.applyMatrix4(n.matrixWorld);
                    var l = r.ray.origin.distanceTo(h);
                    i.push({distance: l, distanceToRay: o, point: h.clone(), index: a, face: null, object: n})
                }
            };
            if (a instanceof THREE.BufferGeometry) {
                var u = a.attributes, c = u.position.array;
                if (void 0 !== u.index) {
                    var E = u.index.array, f = a.offsets;
                    if (0 === f.length) {
                        var d = {start: 0, count: E.length, index: 0};
                        f = [d]
                    }
                    for (var p = 0, m = f.length; m > p; ++p)for (var T = f[p].start, g = f[p].count, v = f[p].index, R = T, y = T + g; y > R; R++) {
                        var x = v + E[R];
                        h.fromArray(c, 3 * x), l(h, x)
                    }
                } else for (var _ = c.length / 3, R = 0; _ > R; R++)h.set(c[3 * R], c[3 * R + 1], c[3 * R + 2]), l(h, R)
            } else for (var b = this.geometry.vertices, R = 0; R < b.length; R++)l(b[R], R)
        }
    }
}(),THREE.PointCloud.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.PointCloud(this.geometry, this.material)), THREE.Object3D.prototype.clone.call(this, e), e
},THREE.ParticleSystem = function (e, t) {
    return THREE.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud."), new THREE.PointCloud(e, t)
},THREE.Line = function (e, t, r) {
    THREE.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new THREE.Geometry, this.material = void 0 !== t ? t : new THREE.LineBasicMaterial({color: 16777215 * Math.random()}), this.mode = void 0 !== r ? r : THREE.LineStrip
},THREE.LineStrip = 0,THREE.LinePieces = 1,THREE.Line.prototype = Object.create(THREE.Object3D.prototype),THREE.Line.prototype.constructor = THREE.Line,THREE.Line.prototype.raycast = function () {
    var e = new THREE.Matrix4, t = new THREE.Ray, r = new THREE.Sphere;
    return function (i, n) {
        var a = i.linePrecision, o = a * a, s = this.geometry;
        if (null === s.boundingSphere && s.computeBoundingSphere(), r.copy(s.boundingSphere), r.applyMatrix4(this.matrixWorld), i.ray.isIntersectionSphere(r) !== !1) {
            e.getInverse(this.matrixWorld), t.copy(i.ray).applyMatrix4(e);
            var h = new THREE.Vector3, l = new THREE.Vector3, u = new THREE.Vector3, c = new THREE.Vector3, E = this.mode === THREE.LineStrip ? 1 : 2;
            if (s instanceof THREE.BufferGeometry) {
                var f = s.attributes;
                if (void 0 !== f.index) {
                    var d = f.index.array, p = f.position.array, m = s.offsets;
                    0 === m.length && (m = [{start: 0, count: d.length, index: 0}]);
                    for (var T = 0; T < m.length; T++)for (var g = m[T].start, v = m[T].count, R = m[T].index, y = g; g + v - 1 > y; y += E) {
                        var x = R + d[y], _ = R + d[y + 1];
                        h.fromArray(p, 3 * x), l.fromArray(p, 3 * _);
                        var b = t.distanceSqToSegment(h, l, c, u);
                        if (!(b > o)) {
                            var H = t.origin.distanceTo(c);
                            H < i.near || H > i.far || n.push({
                                distance: H,
                                point: u.clone().applyMatrix4(this.matrixWorld),
                                index: y,
                                offsetIndex: T,
                                face: null,
                                faceIndex: null,
                                object: this
                            })
                        }
                    }
                } else for (var p = f.position.array, y = 0; y < p.length / 3 - 1; y += E) {
                    h.fromArray(p, 3 * y), l.fromArray(p, 3 * y + 3);
                    var b = t.distanceSqToSegment(h, l, c, u);
                    if (!(b > o)) {
                        var H = t.origin.distanceTo(c);
                        H < i.near || H > i.far || n.push({
                            distance: H,
                            point: u.clone().applyMatrix4(this.matrixWorld),
                            index: y,
                            face: null,
                            faceIndex: null,
                            object: this
                        })
                    }
                }
            } else if (s instanceof THREE.Geometry)for (var M = s.vertices, w = M.length, y = 0; w - 1 > y; y += E) {
                var b = t.distanceSqToSegment(M[y], M[y + 1], c, u);
                if (!(b > o)) {
                    var H = t.origin.distanceTo(c);
                    H < i.near || H > i.far || n.push({
                        distance: H,
                        point: u.clone().applyMatrix4(this.matrixWorld),
                        index: y,
                        face: null,
                        faceIndex: null,
                        object: this
                    })
                }
            }
        }
    }
}(),THREE.Line.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Line(this.geometry, this.material, this.mode)), THREE.Object3D.prototype.clone.call(this, e), e
},THREE.Mesh = function (e, t) {
    THREE.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new THREE.Geometry, this.material = void 0 !== t ? t : new THREE.MeshBasicMaterial({color: 16777215 * Math.random()}), this.updateMorphTargets()
},THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype),THREE.Mesh.prototype.constructor = THREE.Mesh,THREE.Mesh.prototype.updateMorphTargets = function () {
    if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
        this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (var e = 0, t = this.geometry.morphTargets.length; t > e; e++)this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
    }
},THREE.Mesh.prototype.getMorphTargetIndexByName = function (e) {
    return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (THREE.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."), 0)
},THREE.Mesh.prototype.raycast = function () {
    var e = new THREE.Matrix4, t = new THREE.Ray, r = new THREE.Sphere, i = new THREE.Vector3, n = new THREE.Vector3, a = new THREE.Vector3;
    return function (o, s) {
        var h = this.geometry;
        if (null === h.boundingSphere && h.computeBoundingSphere(), r.copy(h.boundingSphere), r.applyMatrix4(this.matrixWorld), o.ray.isIntersectionSphere(r) !== !1 && (e.getInverse(this.matrixWorld), t.copy(o.ray).applyMatrix4(e), null === h.boundingBox || t.isIntersectionBox(h.boundingBox) !== !1))if (h instanceof THREE.BufferGeometry) {
            var l = this.material;
            if (void 0 === l)return;
            var u, c, E, f = h.attributes, d = o.precision;
            if (void 0 !== f.index) {
                var p = f.index.array, m = f.position.array, T = h.offsets;
                0 === T.length && (T = [{start: 0, count: p.length, index: 0}]);
                for (var g = 0, v = T.length; v > g; ++g)for (var R = T[g].start, y = T[g].count, x = T[g].index, _ = R, b = R + y; b > _; _ += 3) {
                    if (u = x + p[_], c = x + p[_ + 1], E = x + p[_ + 2], i.fromArray(m, 3 * u), n.fromArray(m, 3 * c), a.fromArray(m, 3 * E), l.side === THREE.BackSide)var H = t.intersectTriangle(a, n, i, !0); else var H = t.intersectTriangle(i, n, a, l.side !== THREE.DoubleSide);
                    if (null !== H) {
                        H.applyMatrix4(this.matrixWorld);
                        var M = o.ray.origin.distanceTo(H);
                        d > M || M < o.near || M > o.far || s.push({
                            distance: M,
                            point: H,
                            face: new THREE.Face3(u, c, E, THREE.Triangle.normal(i, n, a)),
                            faceIndex: null,
                            object: this
                        })
                    }
                }
            } else for (var m = f.position.array, _ = 0, w = 0, b = m.length; b > _; _ += 3, w += 9) {
                if (u = _, c = _ + 1, E = _ + 2, i.fromArray(m, w), n.fromArray(m, w + 3), a.fromArray(m, w + 6), l.side === THREE.BackSide)var H = t.intersectTriangle(a, n, i, !0); else var H = t.intersectTriangle(i, n, a, l.side !== THREE.DoubleSide);
                if (null !== H) {
                    H.applyMatrix4(this.matrixWorld);
                    var M = o.ray.origin.distanceTo(H);
                    d > M || M < o.near || M > o.far || s.push({
                        distance: M,
                        point: H,
                        face: new THREE.Face3(u, c, E, THREE.Triangle.normal(i, n, a)),
                        faceIndex: null,
                        object: this
                    })
                }
            }
        } else if (h instanceof THREE.Geometry)for (var u, c, E, S = this.material instanceof THREE.MeshFaceMaterial, A = S === !0 ? this.material.materials : null, d = o.precision, C = h.vertices, F = 0, B = h.faces.length; B > F; F++) {
            var U = h.faces[F], l = S === !0 ? A[U.materialIndex] : this.material;
            if (void 0 !== l) {
                if (u = C[U.a], c = C[U.b], E = C[U.c], l.morphTargets === !0) {
                    var L = h.morphTargets, P = this.morphTargetInfluences;
                    i.set(0, 0, 0), n.set(0, 0, 0), a.set(0, 0, 0);
                    for (var D = 0, N = L.length; N > D; D++) {
                        var z = P[D];
                        if (0 !== z) {
                            var k = L[D].vertices;
                            i.x += (k[U.a].x - u.x) * z, i.y += (k[U.a].y - u.y) * z, i.z += (k[U.a].z - u.z) * z, n.x += (k[U.b].x - c.x) * z, n.y += (k[U.b].y - c.y) * z, n.z += (k[U.b].z - c.z) * z, a.x += (k[U.c].x - E.x) * z, a.y += (k[U.c].y - E.y) * z, a.z += (k[U.c].z - E.z) * z
                        }
                    }
                    i.add(u), n.add(c), a.add(E), u = i, c = n, E = a
                }
                if (l.side === THREE.BackSide)var H = t.intersectTriangle(E, c, u, !0); else var H = t.intersectTriangle(u, c, E, l.side !== THREE.DoubleSide);
                if (null !== H) {
                    H.applyMatrix4(this.matrixWorld);
                    var M = o.ray.origin.distanceTo(H);
                    d > M || M < o.near || M > o.far || s.push({
                        distance: M,
                        point: H,
                        face: U,
                        faceIndex: F,
                        object: this
                    })
                }
            }
        }
    }
}(),THREE.Mesh.prototype.clone = function (e, t) {
    return void 0 === e && (e = new THREE.Mesh(this.geometry, this.material)), THREE.Object3D.prototype.clone.call(this, e, t), e
},THREE.Bone = function (e) {
    THREE.Object3D.call(this), this.type = "Bone", this.skin = e
},THREE.Bone.prototype = Object.create(THREE.Object3D.prototype),THREE.Bone.prototype.constructor = THREE.Bone,THREE.Skeleton = function (e, t, r) {
    if (this.useVertexTexture = void 0 !== r ? r : !0, this.identityMatrix = new THREE.Matrix4, e = e || [], this.bones = e.slice(0), this.useVertexTexture) {
        var i;
        i = this.bones.length > 256 ? 64 : this.bones.length > 64 ? 32 : this.bones.length > 16 ? 16 : 8, this.boneTextureWidth = i, this.boneTextureHeight = i, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType), this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter = THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1
    } else this.boneMatrices = new Float32Array(16 * this.bones.length);
    if (void 0 === t)this.calculateInverses(); else if (this.bones.length === t.length)this.boneInverses = t.slice(0); else {
        THREE.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [];
        for (var n = 0, a = this.bones.length; a > n; n++)this.boneInverses.push(new THREE.Matrix4)
    }
},THREE.Skeleton.prototype.calculateInverses = function () {
    this.boneInverses = [];
    for (var e = 0, t = this.bones.length; t > e; e++) {
        var r = new THREE.Matrix4;
        this.bones[e] && r.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(r)
    }
},THREE.Skeleton.prototype.pose = function () {
    for (var e, t = 0, r = this.bones.length; r > t; t++)e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]);
    for (var t = 0, r = this.bones.length; r > t; t++)e = this.bones[t], e && (e.parent ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
},THREE.Skeleton.prototype.update = function () {
    var e = new THREE.Matrix4;
    return function () {
        for (var t = 0, r = this.bones.length; r > t; t++) {
            var i = this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix;
            e.multiplyMatrices(i, this.boneInverses[t]), e.flattenToArrayOffset(this.boneMatrices, 16 * t)
        }
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
    }
}(),THREE.SkinnedMesh = function (e, t, r) {
    THREE.Mesh.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new THREE.Matrix4, this.bindMatrixInverse = new THREE.Matrix4;
    var i = [];
    if (this.geometry && void 0 !== this.geometry.bones) {
        for (var n, a, o, s, h, l = 0, u = this.geometry.bones.length; u > l; ++l)a = this.geometry.bones[l], o = a.pos, s = a.rotq, h = a.scl, n = new THREE.Bone(this), i.push(n), n.name = a.name, n.position.set(o[0], o[1], o[2]), n.quaternion.set(s[0], s[1], s[2], s[3]), void 0 !== h ? n.scale.set(h[0], h[1], h[2]) : n.scale.set(1, 1, 1);
        for (var l = 0, u = this.geometry.bones.length; u > l; ++l)a = this.geometry.bones[l], -1 !== a.parent ? i[a.parent].add(i[l]) : this.add(i[l])
    }
    this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new THREE.Skeleton(i, void 0, r))
},THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype),THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh,THREE.SkinnedMesh.prototype.bind = function (e, t) {
    this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
},THREE.SkinnedMesh.prototype.pose = function () {
    this.skeleton.pose()
},THREE.SkinnedMesh.prototype.normalizeSkinWeights = function () {
    if (this.geometry instanceof THREE.Geometry)for (var e = 0; e < this.geometry.skinIndices.length; e++) {
        var t = this.geometry.skinWeights[e], r = 1 / t.lengthManhattan();
        r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1)
    }
},THREE.SkinnedMesh.prototype.updateMatrixWorld = function (e) {
    THREE.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : THREE.warn("THREE.SkinnedMesh unreckognized bindMode: " + this.bindMode)
},THREE.SkinnedMesh.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture)), THREE.Mesh.prototype.clone.call(this, e), e
},THREE.Sprite = function () {
    var e = new Uint16Array([0, 1, 2, 0, 2, 3]), t = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]), r = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), i = new THREE.BufferGeometry;
    return i.addAttribute("index", new THREE.BufferAttribute(e, 1)), i.addAttribute("position", new THREE.BufferAttribute(t, 3)), i.addAttribute("uv", new THREE.BufferAttribute(r, 2)), function (e) {
        THREE.Object3D.call(this), this.type = "Sprite", this.geometry = i, this.material = void 0 !== e ? e : new THREE.SpriteMaterial
    }
}(),THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype),THREE.Sprite.prototype.constructor = THREE.Sprite,THREE.Sprite.prototype.raycast = function () {
    var e = new THREE.Vector3;
    return function (t, r) {
        e.setFromMatrixPosition(this.matrixWorld);
        var i = t.ray.distanceToPoint(e);
        i > this.scale.x || r.push({distance: i, point: this.position, face: null, object: this})
    }
}(),THREE.Sprite.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Sprite(this.material)), THREE.Object3D.prototype.clone.call(this, e), e
},THREE.Particle = THREE.Sprite,THREE.LensFlare = function (e, t, r, i, n) {
    THREE.Object3D.call(this), this.lensFlares = [], this.positionScreen = new THREE.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, r, i, n)
},THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype),THREE.LensFlare.prototype.constructor = THREE.LensFlare,THREE.LensFlare.prototype.add = function (e, t, r, i, n, a) {
    void 0 === t && (t = -1), void 0 === r && (r = 0), void 0 === a && (a = 1), void 0 === n && (n = new THREE.Color(16777215)), void 0 === i && (i = THREE.NormalBlending), r = Math.min(r, Math.max(0, r)), this.lensFlares.push({
        texture: e,
        size: t,
        distance: r,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 1,
        opacity: a,
        color: n,
        blending: i
    })
},THREE.LensFlare.prototype.updateLensFlares = function () {
    var e, t, r = this.lensFlares.length, i = 2 * -this.positionScreen.x, n = 2 * -this.positionScreen.y;
    for (e = 0; r > e; e++)t = this.lensFlares[e], t.x = this.positionScreen.x + i * t.distance, t.y = this.positionScreen.y + n * t.distance, t.wantedRotation = t.x * Math.PI * .25, t.rotation += .25 * (t.wantedRotation - t.rotation)
},THREE.Scene = function () {
    THREE.Object3D.call(this), this.type = "Scene", this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
},THREE.Scene.prototype = Object.create(THREE.Object3D.prototype),THREE.Scene.prototype.constructor = THREE.Scene,THREE.Scene.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Scene), THREE.Object3D.prototype.clone.call(this, e), null !== this.fog && (e.fog = this.fog.clone()), null !== this.overrideMaterial && (e.overrideMaterial = this.overrideMaterial.clone()), e.autoUpdate = this.autoUpdate, e.matrixAutoUpdate = this.matrixAutoUpdate, e
},THREE.Fog = function (e, t, r) {
    this.name = "", this.color = new THREE.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== r ? r : 1e3
},THREE.Fog.prototype.clone = function () {
    return new THREE.Fog(this.color.getHex(), this.near, this.far)
},THREE.FogExp2 = function (e, t) {
    this.name = "", this.color = new THREE.Color(e), this.density = void 0 !== t ? t : 25e-5
},THREE.FogExp2.prototype.clone = function () {
    return new THREE.FogExp2(this.color.getHex(), this.density)
},THREE.ShaderChunk = {},THREE.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\nfloat square( in float a ) { return a*a; }\nvec2  square( in vec2 a )  { return vec2( a.x*a.x, a.y*a.y ); }\nvec3  square( in vec3 a )  { return vec3( a.x*a.x, a.y*a.y, a.z*a.z ); }\nvec4  square( in vec4 a )  { return vec4( a.x*a.x, a.y*a.y, a.z*a.z, a.w*a.w ); }\nfloat saturate( in float a ) { return clamp( a, 0.0, 1.0 ); }\nvec2  saturate( in vec2 a )  { return clamp( a, 0.0, 1.0 ); }\nvec3  saturate( in vec3 a )  { return clamp( a, 0.0, 1.0 ); }\nvec4  saturate( in vec4 a )  { return clamp( a, 0.0, 1.0 ); }\nfloat average( in float a ) { return a; }\nfloat average( in vec2 a )  { return ( a.x + a.y) * 0.5; }\nfloat average( in vec3 a )  { return ( a.x + a.y + a.z) / 3.0; }\nfloat average( in vec4 a )  { return ( a.x + a.y + a.z + a.w) * 0.25; }\nfloat whiteCompliment( in float a ) { return saturate( 1.0 - a ); }\nvec2  whiteCompliment( in vec2 a )  { return saturate( vec2(1.0) - a ); }\nvec3  whiteCompliment( in vec3 a )  { return saturate( vec3(1.0) - a ); }\nvec4  whiteCompliment( in vec4 a )  { return saturate( vec4(1.0) - a ); }\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n}\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal) {\n	float distance = dot( planeNormal, point-pointOnPlane );\n	return point - distance * planeNormal;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return pointOnLine + lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) );\n}\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n	if ( decayExponent > 0.0 ) {\n	  return pow( saturate( 1.0 - lightDistance / cutoffDistance ), decayExponent );\n	}\n	return 1.0;\n}\n\nvec3 inputToLinear( in vec3 a ) {\n#ifdef GAMMA_INPUT\n	return pow( a, vec3( float( GAMMA_FACTOR ) ) );\n#else\n	return a;\n#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n#ifdef GAMMA_OUTPUT\n	return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n#else\n	return a;\n#endif\n}\n",THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n\n#endif\n",THREE.ShaderChunk.default_vertex = "#ifdef USE_SKINNING\n\n	vec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n	vec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n",THREE.ShaderChunk.map_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	varying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif",THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	#ifdef USE_MORPHNORMALS\n\n	vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n	#else\n\n	vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n	uniform float logDepthBufFC;\n\n#endif",THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif",THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n\n	// Per-Pixel Tangent Space Normal Mapping\n	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n\n	}\n\n#endif\n",THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n	vec4 texelColor = texture2D( map, vUv );\n\n	texelColor.xyz = inputToLinear( texelColor.xyz );\n\n	diffuseColor *= texelColor;\n\n#endif",THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n	diffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n",THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif\n",THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n	vColor.xyz = inputToLinear( color.xyz );\n\n#endif",THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n	#ifdef USE_MORPHTARGETS\n\n	vec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n	#else\n\n	vec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n	#endif\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n\n#endif\n",THREE.ShaderChunk.linear_to_gamma_fragment = "\n	outgoingLight = linearToOutput( outgoingLight );\n",THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif",THREE.ShaderChunk.map_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n\n#endif\n",THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif",THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		vFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n	#endif\n\n#endif",THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif",THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n	// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n	// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;		// normalized\n\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 );\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif\n",THREE.ShaderChunk.defaultnormal_vertex = "#ifdef USE_SKINNING\n\n	vec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n	vec3 objectNormal = morphedNormal;\n\n#else\n\n	vec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n	objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n",THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif",THREE.ShaderChunk.map_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif",THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n	diffuseColor.rgb *= vColor;\n\n#endif",
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n	#ifdef USE_SKINNING\n\n		vec4 worldPosition = modelMatrix * skinned;\n\n	#elif defined( USE_MORPHTARGETS )\n\n		vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n	#else\n\n		vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	#ifdef BONE_TEXTURE\n\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n\n			y = dy * ( y + 0.5 );\n\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n			mat4 bone = mat4( v1, v2, v3, v4 );\n\n			return bone;\n\n		}\n\n	#else\n\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n\n		}\n\n	#endif\n\n#endif\n",THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n	uniform float logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		#extension GL_EXT_frag_depth : enable\n		varying float vFragDepth;\n\n	#endif\n\n#endif",THREE.UniformsUtils = {
    merge: function (e) {
        for (var t = {}, r = 0; r < e.length; r++) {
            var i = this.clone(e[r]);
            for (var n in i)t[n] = i[n]
        }
        return t
    }, clone: function (e) {
        var t = {};
        for (var r in e) {
            t[r] = {};
            for (var i in e[r]) {
                var n = e[r][i];
                n instanceof THREE.Color || n instanceof THREE.Vector2 || n instanceof THREE.Vector3 || n instanceof THREE.Vector4 || n instanceof THREE.Matrix4 || n instanceof THREE.Texture ? t[r][i] = n.clone() : n instanceof Array ? t[r][i] = n.slice() : t[r][i] = n
            }
        }
        return t
    }
},THREE.UniformsLib = {
    common: {
        diffuse: {type: "c", value: new THREE.Color(15658734)},
        opacity: {type: "f", value: 1},
        map: {type: "t", value: null},
        offsetRepeat: {type: "v4", value: new THREE.Vector4(0, 0, 1, 1)},
        lightMap: {type: "t", value: null},
        specularMap: {type: "t", value: null},
        alphaMap: {type: "t", value: null},
        envMap: {type: "t", value: null},
        flipEnvMap: {type: "f", value: -1},
        reflectivity: {type: "f", value: 1},
        refractionRatio: {type: "f", value: .98},
        morphTargetInfluences: {type: "f", value: 0}
    },
    bump: {bumpMap: {type: "t", value: null}, bumpScale: {type: "f", value: 1}},
    normalmap: {normalMap: {type: "t", value: null}, normalScale: {type: "v2", value: new THREE.Vector2(1, 1)}},
    fog: {
        fogDensity: {type: "f", value: 25e-5},
        fogNear: {type: "f", value: 1},
        fogFar: {type: "f", value: 2e3},
        fogColor: {type: "c", value: new THREE.Color(16777215)}
    },
    lights: {
        ambientLightColor: {type: "fv", value: []},
        directionalLightDirection: {type: "fv", value: []},
        directionalLightColor: {type: "fv", value: []},
        hemisphereLightDirection: {type: "fv", value: []},
        hemisphereLightSkyColor: {type: "fv", value: []},
        hemisphereLightGroundColor: {type: "fv", value: []},
        pointLightColor: {type: "fv", value: []},
        pointLightPosition: {type: "fv", value: []},
        pointLightDistance: {type: "fv1", value: []},
        pointLightDecay: {type: "fv1", value: []},
        spotLightColor: {type: "fv", value: []},
        spotLightPosition: {type: "fv", value: []},
        spotLightDirection: {type: "fv", value: []},
        spotLightDistance: {type: "fv1", value: []},
        spotLightAngleCos: {type: "fv1", value: []},
        spotLightExponent: {type: "fv1", value: []},
        spotLightDecay: {type: "fv1", value: []}
    },
    particle: {
        psColor: {type: "c", value: new THREE.Color(15658734)},
        opacity: {type: "f", value: 1},
        size: {type: "f", value: 1},
        scale: {type: "f", value: 1},
        map: {type: "t", value: null},
        offsetRepeat: {type: "v4", value: new THREE.Vector4(0, 0, 1, 1)},
        fogDensity: {type: "f", value: 25e-5},
        fogNear: {type: "f", value: 1},
        fogFar: {type: "f", value: 2e3},
        fogColor: {type: "c", value: new THREE.Color(16777215)}
    },
    shadowmap: {
        shadowMap: {type: "tv", value: []},
        shadowMapSize: {type: "v2v", value: []},
        shadowBias: {type: "fv1", value: []},
        shadowDarkness: {type: "fv1", value: []},
        shadowMatrix: {type: "m4v", value: []}
    }
},THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
        vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "	#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "	#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "	outgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            }, wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}
        }]),
        vertexShader: ["#define LAMBERT", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform float opacity;", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "	#ifdef DOUBLE_SIDED", "		if ( gl_FrontFacing )", "			outgoingLight += diffuseColor.rgb * vLightFront + emissive;", "		else", "			outgoingLight += diffuseColor.rgb * vLightBack + emissive;", "	#else", "		outgoingLight += diffuseColor.rgb * vLightFront + emissive;", "	#endif", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            specular: {type: "c", value: new THREE.Color(1118481)},
            shininess: {type: "f", value: 30},
            wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}
        }]),
        vertexShader: ["#define PHONG", "varying vec3 vViewPosition;", "#ifndef FLAT_SHADED", "	varying vec3 vNormal;", "#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "#ifndef FLAT_SHADED", "	vNormal = normalize( transformedNormal );", "#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "	vViewPosition = -mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["#define PHONG", "uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform vec3 specular;", "uniform float shininess;", "uniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
    },
    particle_basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
        vertexShader: ["uniform float size;", "uniform float scale;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	#ifdef USE_SIZEATTENUATION", "		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );", "	#else", "		gl_PointSize = size;", "	#endif", "	gl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 psColor;", "uniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( psColor, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphatest_fragment, "	outgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                type: "f",
                value: 1
            }, dashSize: {type: "f", value: 1}, totalSize: {type: "f", value: 2}
        }]),
        vertexShader: ["uniform float scale;", "attribute float lineDistance;", "varying float vLineDistance;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "	vLineDistance = scale * lineDistance;", "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	gl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform float dashSize;", "uniform float totalSize;", "varying float vLineDistance;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	if ( mod( vLineDistance, totalSize ) > dashSize ) {", "		discard;", "	}", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.color_fragment, "	outgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
    },
    depth: {
        uniforms: {mNear: {type: "f", value: 1}, mFar: {type: "f", value: 2e3}, opacity: {type: "f", value: 1}},
        vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float mNear;", "uniform float mFar;", "uniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		float depth = gl_FragDepthEXT / gl_FragCoord.w;", "	#else", "		float depth = gl_FragCoord.z / gl_FragCoord.w;", "	#endif", "	float color = 1.0 - smoothstep( mNear, mFar, depth );", "	gl_FragColor = vec4( vec3( color ), opacity );", "}"].join("\n")
    },
    normal: {
        uniforms: {opacity: {type: "f", value: 1}},
        vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float opacity;", "varying vec3 vNormal;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    cube: {
        uniforms: {tCube: {type: "t", value: null}, tFlip: {type: "f", value: -1}},
        vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vWorldPosition = transformDirection( position, modelMatrix );", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform samplerCube tCube;", "uniform float tFlip;", "varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    equirect: {
        uniforms: {tEquirect: {type: "t", value: null}, tFlip: {type: "f", value: -1}},
        vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vWorldPosition = transformDirection( position, modelMatrix );", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform sampler2D tEquirect;", "uniform float tFlip;", "varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "vec3 direction = normalize( vWorldPosition );", "vec2 sampleUV;", "sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );", "sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "gl_FragColor = texture2D( tEquirect, sampleUV );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {", "	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", "	res -= res.xxyz * bit_mask;", "	return res;", "}", "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );", "	#else", "		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );", "	#endif", "}"].join("\n")
    }
},THREE.WebGLRenderer = function (e) {
    function t(e) {
        e.__webglVertexBuffer = Ce.createBuffer(), e.__webglColorBuffer = Ce.createBuffer(), Fe.info.memory.geometries++
    }

    function r(e) {
        e.__webglVertexBuffer = Ce.createBuffer(), e.__webglColorBuffer = Ce.createBuffer(), e.__webglLineDistanceBuffer = Ce.createBuffer(), Fe.info.memory.geometries++
    }

    function i(e) {
        e.__webglVertexBuffer = Ce.createBuffer(), e.__webglNormalBuffer = Ce.createBuffer(), e.__webglTangentBuffer = Ce.createBuffer(), e.__webglColorBuffer = Ce.createBuffer(), e.__webglUVBuffer = Ce.createBuffer(), e.__webglUV2Buffer = Ce.createBuffer(), e.__webglSkinIndicesBuffer = Ce.createBuffer(), e.__webglSkinWeightsBuffer = Ce.createBuffer(), e.__webglFaceBuffer = Ce.createBuffer(), e.__webglLineBuffer = Ce.createBuffer();
        var t = e.numMorphTargets;
        if (t) {
            e.__webglMorphTargetsBuffers = [];
            for (var r = 0, i = t; i > r; r++)e.__webglMorphTargetsBuffers.push(Ce.createBuffer())
        }
        var n = e.numMorphNormals;
        if (n) {
            e.__webglMorphNormalsBuffers = [];
            for (var r = 0, i = n; i > r; r++)e.__webglMorphNormalsBuffers.push(Ce.createBuffer())
        }
        Fe.info.memory.geometries++
    }

    function n(e) {
        var t = e.geometry, r = e.material, i = t.vertices.length;
        if (r.attributes) {
            void 0 === t.__webglCustomAttributesList && (t.__webglCustomAttributesList = []);
            for (var n in r.attributes) {
                var a = r.attributes[n];
                if (!a.__webglInitialized || a.createUniqueBuffers) {
                    a.__webglInitialized = !0;
                    var o = 1;
                    "v2" === a.type ? o = 2 : "v3" === a.type ? o = 3 : "v4" === a.type ? o = 4 : "c" === a.type && (o = 3), a.size = o, a.array = new Float32Array(i * o), a.buffer = Ce.createBuffer(), a.buffer.belongsToAttribute = n, a.needsUpdate = !0
                }
                t.__webglCustomAttributesList.push(a)
            }
        }
    }

    function a(e, t) {
        var r = e.vertices.length;
        e.__vertexArray = new Float32Array(3 * r), e.__colorArray = new Float32Array(3 * r), e.__webglParticleCount = r, n(t)
    }

    function o(e, t) {
        var r = e.vertices.length;
        e.__vertexArray = new Float32Array(3 * r), e.__colorArray = new Float32Array(3 * r), e.__lineDistanceArray = new Float32Array(1 * r), e.__webglLineCount = r, n(t)
    }

    function s(e, t) {
        var r = t.geometry, i = e.faces3, n = 3 * i.length, a = 1 * i.length, o = 3 * i.length, s = h(t, e);
        e.__vertexArray = new Float32Array(3 * n), e.__normalArray = new Float32Array(3 * n), e.__colorArray = new Float32Array(3 * n), e.__uvArray = new Float32Array(2 * n), r.faceVertexUvs.length > 1 && (e.__uv2Array = new Float32Array(2 * n)), r.hasTangents && (e.__tangentArray = new Float32Array(4 * n)), t.geometry.skinWeights.length && t.geometry.skinIndices.length && (e.__skinIndexArray = new Float32Array(4 * n), e.__skinWeightArray = new Float32Array(4 * n));
        var l = null !== et.get("OES_element_index_uint") && a > 21845 ? Uint32Array : Uint16Array;
        e.__typeArray = l, e.__faceArray = new l(3 * a), e.__lineArray = new l(2 * o);
        var u = e.numMorphTargets;
        if (u) {
            e.__morphTargetsArrays = [];
            for (var c = 0, E = u; E > c; c++)e.__morphTargetsArrays.push(new Float32Array(3 * n))
        }
        var f = e.numMorphNormals;
        if (f) {
            e.__morphNormalsArrays = [];
            for (var c = 0, E = f; E > c; c++)e.__morphNormalsArrays.push(new Float32Array(3 * n))
        }
        if (e.__webglFaceCount = 3 * a, e.__webglLineCount = 2 * o, s.attributes) {
            void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []);
            for (var d in s.attributes) {
                var p = s.attributes[d], m = {};
                for (var T in p)m[T] = p[T];
                if (!m.__webglInitialized || m.createUniqueBuffers) {
                    m.__webglInitialized = !0;
                    var g = 1;
                    "v2" === m.type ? g = 2 : "v3" === m.type ? g = 3 : "v4" === m.type ? g = 4 : "c" === m.type && (g = 3), m.size = g, m.array = new Float32Array(n * g), m.buffer = Ce.createBuffer(), m.buffer.belongsToAttribute = d, p.needsUpdate = !0, m.__original = p
                }
                e.__webglCustomAttributesList.push(m)
            }
        }
        e.__inittedArrays = !0
    }

    function h(e, t) {
        return e.material instanceof THREE.MeshFaceMaterial ? e.material.materials[t.materialIndex] : e.material
    }

    function l(e) {
        return e instanceof THREE.MeshPhongMaterial == !1 && e.shading === THREE.FlatShading
    }

    function u(e, t, r) {
        var i, n, a, o, s, h, l, u, c, E, f, d = e.vertices, p = d.length, m = e.colors, T = m.length, g = e.__vertexArray, v = e.__colorArray, R = e.verticesNeedUpdate, y = e.colorsNeedUpdate, x = e.__webglCustomAttributesList;
        if (R) {
            for (i = 0; p > i; i++)a = d[i], o = 3 * i, g[o] = a.x, g[o + 1] = a.y, g[o + 2] = a.z;
            Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglVertexBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, g, t)
        }
        if (y) {
            for (n = 0; T > n; n++)s = m[n], o = 3 * n, v[o] = s.r, v[o + 1] = s.g, v[o + 2] = s.b;
            Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglColorBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, v, t)
        }
        if (x)for (h = 0, l = x.length; l > h; h++) {
            if (f = x[h], f.needsUpdate && (void 0 === f.boundTo || "vertices" === f.boundTo))if (c = f.value.length, o = 0, 1 === f.size)for (u = 0; c > u; u++)f.array[u] = f.value[u]; else if (2 === f.size)for (u = 0; c > u; u++)E = f.value[u], f.array[o] = E.x, f.array[o + 1] = E.y, o += 2; else if (3 === f.size)if ("c" === f.type)for (u = 0; c > u; u++)E = f.value[u], f.array[o] = E.r, f.array[o + 1] = E.g, f.array[o + 2] = E.b, o += 3; else for (u = 0; c > u; u++)E = f.value[u], f.array[o] = E.x, f.array[o + 1] = E.y, f.array[o + 2] = E.z, o += 3; else if (4 === f.size)for (u = 0; c > u; u++)E = f.value[u], f.array[o] = E.x, f.array[o + 1] = E.y, f.array[o + 2] = E.z, f.array[o + 3] = E.w, o += 4;
            Ce.bindBuffer(Ce.ARRAY_BUFFER, f.buffer), Ce.bufferData(Ce.ARRAY_BUFFER, f.array, t), f.needsUpdate = !1
        }
    }

    function c(e, t) {
        var r, i, n, a, o, s, h, l, u, c, E, f, d = e.vertices, p = e.colors, m = e.lineDistances, T = d.length, g = p.length, v = m.length, R = e.__vertexArray, y = e.__colorArray, x = e.__lineDistanceArray, _ = e.verticesNeedUpdate, b = e.colorsNeedUpdate, H = e.lineDistancesNeedUpdate, M = e.__webglCustomAttributesList;
        if (_) {
            for (r = 0; T > r; r++)a = d[r], o = 3 * r, R[o] = a.x, R[o + 1] = a.y, R[o + 2] = a.z;
            Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglVertexBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, R, t)
        }
        if (b) {
            for (i = 0; g > i; i++)s = p[i], o = 3 * i, y[o] = s.r, y[o + 1] = s.g, y[o + 2] = s.b;
            Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglColorBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, y, t)
        }
        if (H) {
            for (n = 0; v > n; n++)x[n] = m[n];
            Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglLineDistanceBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, x, t)
        }
        if (M)for (h = 0, l = M.length; l > h; h++)if (f = M[h], f.needsUpdate && (void 0 === f.boundTo || "vertices" === f.boundTo)) {
            if (o = 0, c = f.value.length, 1 === f.size)for (u = 0; c > u; u++)f.array[u] = f.value[u]; else if (2 === f.size)for (u = 0; c > u; u++)E = f.value[u], f.array[o] = E.x, f.array[o + 1] = E.y, o += 2; else if (3 === f.size)if ("c" === f.type)for (u = 0; c > u; u++)E = f.value[u], f.array[o] = E.r, f.array[o + 1] = E.g, f.array[o + 2] = E.b, o += 3; else for (u = 0; c > u; u++)E = f.value[u], f.array[o] = E.x, f.array[o + 1] = E.y, f.array[o + 2] = E.z, o += 3; else if (4 === f.size)for (u = 0; c > u; u++)E = f.value[u], f.array[o] = E.x, f.array[o + 1] = E.y, f.array[o + 2] = E.z, f.array[o + 3] = E.w, o += 4;
            Ce.bindBuffer(Ce.ARRAY_BUFFER, f.buffer), Ce.bufferData(Ce.ARRAY_BUFFER, f.array, t), f.needsUpdate = !1
        }
    }

    function E(e, t, r, i, n) {
        if (e.__inittedArrays) {
            var a, o, s, h, u, c, E, f, d, p, m, T, g, v, R, y, x, _, b, H, M, w, S, A, C, F, B, U, L, P, D, N, z, k, V, O, I, G, W, j, X, Y, q = l(n), Z = 0, Q = 0, K = 0, J = 0, $ = 0, ee = 0, te = 0, re = 0, ie = 0, ne = 0, ae = 0, oe = 0, se = e.__vertexArray, he = e.__uvArray, le = e.__uv2Array, ue = e.__normalArray, ce = e.__tangentArray, Ee = e.__colorArray, fe = e.__skinIndexArray, de = e.__skinWeightArray, pe = e.__morphTargetsArrays, me = e.__morphNormalsArrays, Te = e.__webglCustomAttributesList, ge = e.__faceArray, ve = e.__lineArray, Re = t.geometry, ye = Re.verticesNeedUpdate, xe = Re.elementsNeedUpdate, _e = Re.uvsNeedUpdate, be = Re.normalsNeedUpdate, He = Re.tangentsNeedUpdate, Me = Re.colorsNeedUpdate, we = Re.morphTargetsNeedUpdate, Se = Re.vertices, Ae = e.faces3, Fe = Re.faces, Be = Re.faceVertexUvs[0], Ue = Re.faceVertexUvs[1], Le = Re.skinIndices, Pe = Re.skinWeights, De = Re.morphTargets, Ne = Re.morphNormals;
            if (ye) {
                for (a = 0, o = Ae.length; o > a; a++)h = Fe[Ae[a]], T = Se[h.a], g = Se[h.b], v = Se[h.c], se[Q] = T.x, se[Q + 1] = T.y, se[Q + 2] = T.z, se[Q + 3] = g.x, se[Q + 4] = g.y, se[Q + 5] = g.z, se[Q + 6] = v.x, se[Q + 7] = v.y, se[Q + 8] = v.z, Q += 9;
                Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglVertexBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, se, r)
            }
            if (we)for (V = 0, O = De.length; O > V; V++) {
                for (ae = 0, a = 0, o = Ae.length; o > a; a++)W = Ae[a], h = Fe[W], T = De[V].vertices[h.a], g = De[V].vertices[h.b], v = De[V].vertices[h.c], I = pe[V], I[ae] = T.x, I[ae + 1] = T.y, I[ae + 2] = T.z, I[ae + 3] = g.x, I[ae + 4] = g.y, I[ae + 5] = g.z, I[ae + 6] = v.x, I[ae + 7] = v.y, I[ae + 8] = v.z, n.morphNormals && (q ? (_ = Ne[V].faceNormals[W], b = _, H = _) : (j = Ne[V].vertexNormals[W], _ = j.a, b = j.b, H = j.c), G = me[V], G[ae] = _.x, G[ae + 1] = _.y, G[ae + 2] = _.z, G[ae + 3] = b.x, G[ae + 4] = b.y, G[ae + 5] = b.z, G[ae + 6] = H.x, G[ae + 7] = H.y, G[ae + 8] = H.z), ae += 9;
                Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[V]), Ce.bufferData(Ce.ARRAY_BUFFER, pe[V], r), n.morphNormals && (Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[V]), Ce.bufferData(Ce.ARRAY_BUFFER, me[V], r))
            }
            if (Pe.length) {
                for (a = 0, o = Ae.length; o > a; a++)h = Fe[Ae[a]], A = Pe[h.a], C = Pe[h.b], F = Pe[h.c], de[ne] = A.x, de[ne + 1] = A.y, de[ne + 2] = A.z, de[ne + 3] = A.w, de[ne + 4] = C.x, de[ne + 5] = C.y, de[ne + 6] = C.z, de[ne + 7] = C.w, de[ne + 8] = F.x, de[ne + 9] = F.y, de[ne + 10] = F.z, de[ne + 11] = F.w, B = Le[h.a], U = Le[h.b], L = Le[h.c], fe[ne] = B.x, fe[ne + 1] = B.y, fe[ne + 2] = B.z, fe[ne + 3] = B.w, fe[ne + 4] = U.x, fe[ne + 5] = U.y, fe[ne + 6] = U.z, fe[ne + 7] = U.w, fe[ne + 8] = L.x, fe[ne + 9] = L.y, fe[ne + 10] = L.z, fe[ne + 11] = L.w, ne += 12;
                ne > 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, fe, r), Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, de, r))
            }
            if (Me) {
                for (a = 0, o = Ae.length; o > a; a++)h = Fe[Ae[a]], E = h.vertexColors, f = h.color, 3 === E.length && n.vertexColors === THREE.VertexColors ? (M = E[0], w = E[1], S = E[2]) : (M = f, w = f, S = f), Ee[ie] = M.r, Ee[ie + 1] = M.g, Ee[ie + 2] = M.b, Ee[ie + 3] = w.r, Ee[ie + 4] = w.g, Ee[ie + 5] = w.b, Ee[ie + 6] = S.r, Ee[ie + 7] = S.g, Ee[ie + 8] = S.b, ie += 9;
                ie > 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglColorBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, Ee, r))
            }
            if (He && Re.hasTangents) {
                for (a = 0, o = Ae.length; o > a; a++)h = Fe[Ae[a]], d = h.vertexTangents, R = d[0], y = d[1], x = d[2], ce[te] = R.x, ce[te + 1] = R.y, ce[te + 2] = R.z, ce[te + 3] = R.w, ce[te + 4] = y.x, ce[te + 5] = y.y, ce[te + 6] = y.z, ce[te + 7] = y.w, ce[te + 8] = x.x, ce[te + 9] = x.y, ce[te + 10] = x.z, ce[te + 11] = x.w, te += 12;
                Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglTangentBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, ce, r)
            }
            if (be) {
                for (a = 0, o = Ae.length; o > a; a++)if (h = Fe[Ae[a]], u = h.vertexNormals, c = h.normal, 3 === u.length && q === !1)for (P = 0; 3 > P; P++)N = u[P], ue[ee] = N.x, ue[ee + 1] = N.y, ue[ee + 2] = N.z, ee += 3; else for (P = 0; 3 > P; P++)ue[ee] = c.x, ue[ee + 1] = c.y, ue[ee + 2] = c.z, ee += 3;
                Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglNormalBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, ue, r)
            }
            if (_e && Be) {
                for (a = 0, o = Ae.length; o > a; a++)if (s = Ae[a], p = Be[s], void 0 !== p)for (P = 0; 3 > P; P++)z = p[P], he[K] = z.x, he[K + 1] = z.y, K += 2;
                K > 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglUVBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, he, r))
            }
            if (_e && Ue) {
                for (a = 0, o = Ae.length; o > a; a++)if (s = Ae[a], m = Ue[s], void 0 !== m)for (P = 0; 3 > P; P++)k = m[P], le[J] = k.x, le[J + 1] = k.y, J += 2;
                J > 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglUV2Buffer), Ce.bufferData(Ce.ARRAY_BUFFER, le, r))
            }
            if (xe) {
                for (a = 0, o = Ae.length; o > a; a++)ge[$] = Z, ge[$ + 1] = Z + 1, ge[$ + 2] = Z + 2, $ += 3, ve[re] = Z, ve[re + 1] = Z + 1, ve[re + 2] = Z, ve[re + 3] = Z + 2, ve[re + 4] = Z + 1, ve[re + 5] = Z + 2, re += 6, Z += 3;
                Ce.bindBuffer(Ce.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), Ce.bufferData(Ce.ELEMENT_ARRAY_BUFFER, ge, r), Ce.bindBuffer(Ce.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), Ce.bufferData(Ce.ELEMENT_ARRAY_BUFFER, ve, r)
            }
            if (Te)for (P = 0, D = Te.length; D > P; P++)if (Y = Te[P], Y.__original.needsUpdate) {
                if (oe = 0, 1 === Y.size) {
                    if (void 0 === Y.boundTo || "vertices" === Y.boundTo)for (a = 0, o = Ae.length; o > a; a++)h = Fe[Ae[a]], Y.array[oe] = Y.value[h.a], Y.array[oe + 1] = Y.value[h.b], Y.array[oe + 2] = Y.value[h.c], oe += 3; else if ("faces" === Y.boundTo)for (a = 0, o = Ae.length; o > a; a++)X = Y.value[Ae[a]], Y.array[oe] = X, Y.array[oe + 1] = X, Y.array[oe + 2] = X, oe += 3
                } else if (2 === Y.size) {
                    if (void 0 === Y.boundTo || "vertices" === Y.boundTo)for (a = 0, o = Ae.length; o > a; a++)h = Fe[Ae[a]], T = Y.value[h.a], g = Y.value[h.b], v = Y.value[h.c], Y.array[oe] = T.x, Y.array[oe + 1] = T.y, Y.array[oe + 2] = g.x, Y.array[oe + 3] = g.y, Y.array[oe + 4] = v.x, Y.array[oe + 5] = v.y, oe += 6; else if ("faces" === Y.boundTo)for (a = 0, o = Ae.length; o > a; a++)X = Y.value[Ae[a]], T = X, g = X, v = X, Y.array[oe] = T.x, Y.array[oe + 1] = T.y, Y.array[oe + 2] = g.x, Y.array[oe + 3] = g.y, Y.array[oe + 4] = v.x, Y.array[oe + 5] = v.y, oe += 6
                } else if (3 === Y.size) {
                    var ze;
                    if (ze = "c" === Y.type ? ["r", "g", "b"] : ["x", "y", "z"], void 0 === Y.boundTo || "vertices" === Y.boundTo)for (a = 0, o = Ae.length; o > a; a++)h = Fe[Ae[a]], T = Y.value[h.a], g = Y.value[h.b], v = Y.value[h.c], Y.array[oe] = T[ze[0]], Y.array[oe + 1] = T[ze[1]], Y.array[oe + 2] = T[ze[2]], Y.array[oe + 3] = g[ze[0]], Y.array[oe + 4] = g[ze[1]], Y.array[oe + 5] = g[ze[2]], Y.array[oe + 6] = v[ze[0]], Y.array[oe + 7] = v[ze[1]], Y.array[oe + 8] = v[ze[2]], oe += 9; else if ("faces" === Y.boundTo)for (a = 0, o = Ae.length; o > a; a++)X = Y.value[Ae[a]], T = X, g = X, v = X, Y.array[oe] = T[ze[0]], Y.array[oe + 1] = T[ze[1]], Y.array[oe + 2] = T[ze[2]], Y.array[oe + 3] = g[ze[0]], Y.array[oe + 4] = g[ze[1]], Y.array[oe + 5] = g[ze[2]], Y.array[oe + 6] = v[ze[0]], Y.array[oe + 7] = v[ze[1]], Y.array[oe + 8] = v[ze[2]], oe += 9; else if ("faceVertices" === Y.boundTo)for (a = 0, o = Ae.length; o > a; a++)X = Y.value[Ae[a]], T = X[0], g = X[1], v = X[2], Y.array[oe] = T[ze[0]], Y.array[oe + 1] = T[ze[1]], Y.array[oe + 2] = T[ze[2]], Y.array[oe + 3] = g[ze[0]], Y.array[oe + 4] = g[ze[1]], Y.array[oe + 5] = g[ze[2]], Y.array[oe + 6] = v[ze[0]], Y.array[oe + 7] = v[ze[1]], Y.array[oe + 8] = v[ze[2]], oe += 9
                } else if (4 === Y.size)if (void 0 === Y.boundTo || "vertices" === Y.boundTo)for (a = 0, o = Ae.length; o > a; a++)h = Fe[Ae[a]], T = Y.value[h.a], g = Y.value[h.b], v = Y.value[h.c], Y.array[oe] = T.x, Y.array[oe + 1] = T.y, Y.array[oe + 2] = T.z, Y.array[oe + 3] = T.w, Y.array[oe + 4] = g.x, Y.array[oe + 5] = g.y, Y.array[oe + 6] = g.z, Y.array[oe + 7] = g.w, Y.array[oe + 8] = v.x, Y.array[oe + 9] = v.y, Y.array[oe + 10] = v.z, Y.array[oe + 11] = v.w, oe += 12; else if ("faces" === Y.boundTo)for (a = 0, o = Ae.length; o > a; a++)X = Y.value[Ae[a]], T = X, g = X, v = X, Y.array[oe] = T.x, Y.array[oe + 1] = T.y, Y.array[oe + 2] = T.z, Y.array[oe + 3] = T.w, Y.array[oe + 4] = g.x, Y.array[oe + 5] = g.y, Y.array[oe + 6] = g.z, Y.array[oe + 7] = g.w, Y.array[oe + 8] = v.x, Y.array[oe + 9] = v.y, Y.array[oe + 10] = v.z, Y.array[oe + 11] = v.w, oe += 12; else if ("faceVertices" === Y.boundTo)for (a = 0, o = Ae.length; o > a; a++)X = Y.value[Ae[a]], T = X[0], g = X[1], v = X[2], Y.array[oe] = T.x, Y.array[oe + 1] = T.y, Y.array[oe + 2] = T.z, Y.array[oe + 3] = T.w, Y.array[oe + 4] = g.x, Y.array[oe + 5] = g.y, Y.array[oe + 6] = g.z, Y.array[oe + 7] = g.w, Y.array[oe + 8] = v.x, Y.array[oe + 9] = v.y, Y.array[oe + 10] = v.z, Y.array[oe + 11] = v.w,
                    oe += 12;
                Ce.bindBuffer(Ce.ARRAY_BUFFER, Y.buffer), Ce.bufferData(Ce.ARRAY_BUFFER, Y.array, r)
            }
            i && (delete e.__inittedArrays, delete e.__colorArray, delete e.__normalArray, delete e.__tangentArray, delete e.__uvArray, delete e.__uv2Array, delete e.__faceArray, delete e.__vertexArray, delete e.__lineArray, delete e.__skinIndexArray, delete e.__skinWeightArray)
        }
    }

    function f(e, t, r, i) {
        for (var n = r.attributes, a = t.attributes, o = t.attributesKeys, s = 0, h = o.length; h > s; s++) {
            var l = o[s], u = a[l];
            if (u >= 0) {
                var c = n[l];
                if (void 0 !== c) {
                    var E = c.itemSize;
                    Ce.bindBuffer(Ce.ARRAY_BUFFER, c.buffer), $e.enableAttribute(u), Ce.vertexAttribPointer(u, E, Ce.FLOAT, !1, 0, i * E * 4)
                } else void 0 !== e.defaultAttributeValues && (2 === e.defaultAttributeValues[l].length ? Ce.vertexAttrib2fv(u, e.defaultAttributeValues[l]) : 3 === e.defaultAttributeValues[l].length && Ce.vertexAttrib3fv(u, e.defaultAttributeValues[l]))
            }
        }
        $e.disableUnusedAttributes()
    }

    function d(e, t, r) {
        var i = e.program.attributes;
        if (-1 !== r.morphTargetBase && i.position >= 0 ? (Ce.bindBuffer(Ce.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[r.morphTargetBase]), $e.enableAttribute(i.position), Ce.vertexAttribPointer(i.position, 3, Ce.FLOAT, !1, 0, 0)) : i.position >= 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, t.__webglVertexBuffer), $e.enableAttribute(i.position), Ce.vertexAttribPointer(i.position, 3, Ce.FLOAT, !1, 0, 0)), r.morphTargetForcedOrder.length)for (var n, a = 0, o = r.morphTargetForcedOrder, s = r.morphTargetInfluences; a < e.numSupportedMorphTargets && a < o.length;)n = i["morphTarget" + a], n >= 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[o[a]]), $e.enableAttribute(n), Ce.vertexAttribPointer(n, 3, Ce.FLOAT, !1, 0, 0)), n = i["morphNormal" + a], n >= 0 && e.morphNormals && (Ce.bindBuffer(Ce.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[o[a]]), $e.enableAttribute(n), Ce.vertexAttribPointer(n, 3, Ce.FLOAT, !1, 0, 0)), r.__webglMorphTargetInfluences[a] = s[o[a]], a++; else {
            var h = [], s = r.morphTargetInfluences, l = r.geometry.morphTargets;
            s.length > l.length && (console.warn("THREE.WebGLRenderer: Influences array is bigger than morphTargets array."), s.length = l.length);
            for (var u = 0, c = s.length; c > u; u++) {
                var E = s[u];
                h.push([E, u])
            }
            h.length > e.numSupportedMorphTargets ? (h.sort(T), h.length = e.numSupportedMorphTargets) : h.length > e.numSupportedMorphNormals ? h.sort(T) : 0 === h.length && h.push([0, 0]);
            for (var n, a = 0, f = e.numSupportedMorphTargets; f > a; a++)if (h[a]) {
                var d = h[a][1];
                n = i["morphTarget" + a], n >= 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[d]), $e.enableAttribute(n), Ce.vertexAttribPointer(n, 3, Ce.FLOAT, !1, 0, 0)), n = i["morphNormal" + a], n >= 0 && e.morphNormals && (Ce.bindBuffer(Ce.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[d]), $e.enableAttribute(n), Ce.vertexAttribPointer(n, 3, Ce.FLOAT, !1, 0, 0)), r.__webglMorphTargetInfluences[a] = s[d]
            } else r.__webglMorphTargetInfluences[a] = 0
        }
        null !== e.program.uniforms.morphTargetInfluences && Ce.uniform1fv(e.program.uniforms.morphTargetInfluences, r.__webglMorphTargetInfluences)
    }

    function p(e, t) {
        return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
    }

    function m(e, t) {
        return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
    }

    function T(e, t) {
        return t[0] - e[0]
    }

    function g(e) {
        if (e.visible !== !1) {
            if (e instanceof THREE.Scene || e instanceof THREE.Group); else if (_(e), e instanceof THREE.Light)_e.push(e); else if (e instanceof THREE.Sprite)Se.push(e); else if (e instanceof THREE.LensFlare)Ae.push(e); else {
                var t = be[e.id];
                if (t && (e.frustumCulled === !1 || je.intersectsObject(e) === !0))for (var r = 0, i = t.length; i > r; r++) {
                    var n = t[r];
                    x(n), n.render = !0, Fe.sortObjects === !0 && (Ye.setFromMatrixPosition(e.matrixWorld), Ye.applyProjection(Xe), n.z = Ye.z)
                }
            }
            for (var r = 0, i = e.children.length; i > r; r++)g(e.children[r])
        }
    }

    function v(e, t, r, i, n) {
        for (var a, o = 0, s = e.length; s > o; o++) {
            var h = e[o], l = h.object, u = h.buffer;
            if (Z(l, t), n)a = n; else {
                if (a = h.material, !a)continue;
                L(a)
            }
            Fe.setMaterialFaces(a), u instanceof THREE.BufferGeometry ? Fe.renderBufferDirect(t, r, i, a, u, l) : Fe.renderBuffer(t, r, i, a, u, l)
        }
    }

    function R(e, t, r, i, n, a) {
        for (var o, s = 0, h = e.length; h > s; s++) {
            var l = e[s], u = l.object;
            if (u.visible) {
                if (a)o = a; else {
                    if (o = l[t], !o)continue;
                    L(o)
                }
                Fe.renderImmediateObject(r, i, n, o, u)
            }
        }
    }

    function y(e) {
        var t = e.object, r = t.material;
        r.transparent ? (e.transparent = r, e.opaque = null) : (e.opaque = r, e.transparent = null)
    }

    function x(e) {
        var t = e.object, r = e.buffer, i = t.geometry, n = t.material;
        if (n instanceof THREE.MeshFaceMaterial) {
            var a = i instanceof THREE.BufferGeometry ? 0 : r.materialIndex;
            n = n.materials[a], e.material = n, n.transparent ? we.push(e) : Me.push(e)
        } else n && (e.material = n, n.transparent ? we.push(e) : Me.push(e))
    }

    function _(e) {
        void 0 === e.__webglInit && (e.__webglInit = !0, e._modelViewMatrix = new THREE.Matrix4, e._normalMatrix = new THREE.Matrix3, e.addEventListener("removed", Rt));
        var i = e.geometry;
        if (void 0 === i || void 0 === i.__webglInit && (i.__webglInit = !0, i.addEventListener("dispose", yt), i instanceof THREE.BufferGeometry ? Fe.info.memory.geometries++ : e instanceof THREE.Mesh ? H(e, i) : e instanceof THREE.Line ? void 0 === i.__webglVertexBuffer && (r(i), o(i, e), i.verticesNeedUpdate = !0, i.colorsNeedUpdate = !0, i.lineDistancesNeedUpdate = !0) : e instanceof THREE.PointCloud && void 0 === i.__webglVertexBuffer && (t(i), a(i, e), i.verticesNeedUpdate = !0, i.colorsNeedUpdate = !0)), void 0 === e.__webglActive)if (e.__webglActive = !0, e instanceof THREE.Mesh) {
            if (i instanceof THREE.BufferGeometry)M(be, i, e); else if (i instanceof THREE.Geometry)for (var n = Ct[i.id], s = 0, h = n.length; h > s; s++)M(be, n[s], e)
        } else e instanceof THREE.Line || e instanceof THREE.PointCloud ? M(be, i, e) : (e instanceof THREE.ImmediateRenderObject || e.immediateRenderCallback) && w(He, e)
    }

    function b(e, t) {
        for (var r, i, n = et.get("OES_element_index_uint") ? 4294967296 : 65535, a = {}, o = e.morphTargets.length, s = e.morphNormals.length, h = {}, l = [], u = 0, c = e.faces.length; c > u; u++) {
            var E = e.faces[u], f = t ? E.materialIndex : 0;
            f in a || (a[f] = {hash: f, counter: 0}), r = a[f].hash + "_" + a[f].counter, r in h || (i = {
                id: Ft++,
                faces3: [],
                materialIndex: f,
                vertices: 0,
                numMorphTargets: o,
                numMorphNormals: s
            }, h[r] = i, l.push(i)), h[r].vertices + 3 > n && (a[f].counter += 1, r = a[f].hash + "_" + a[f].counter, r in h || (i = {
                id: Ft++,
                faces3: [],
                materialIndex: f,
                vertices: 0,
                numMorphTargets: o,
                numMorphNormals: s
            }, h[r] = i, l.push(i))), h[r].faces3.push(u), h[r].vertices += 3
        }
        return l
    }

    function H(e, t) {
        var r = e.material, n = !1;
        (void 0 === Ct[t.id] || t.groupsNeedUpdate === !0) && (delete be[e.id], Ct[t.id] = b(t, r instanceof THREE.MeshFaceMaterial), t.groupsNeedUpdate = !1);
        for (var a = Ct[t.id], o = 0, h = a.length; h > o; o++) {
            var l = a[o];
            void 0 === l.__webglVertexBuffer ? (i(l), s(l, e), t.verticesNeedUpdate = !0, t.morphTargetsNeedUpdate = !0, t.elementsNeedUpdate = !0, t.uvsNeedUpdate = !0, t.normalsNeedUpdate = !0, t.tangentsNeedUpdate = !0, t.colorsNeedUpdate = !0, n = !0) : n = !1, (n || void 0 === e.__webglActive) && M(be, l, e)
        }
        e.__webglActive = !0
    }

    function M(e, t, r) {
        var i = r.id;
        e[i] = e[i] || [], e[i].push({id: i, buffer: t, object: r, material: null, z: 0})
    }

    function w(e, t) {
        e.push({id: null, object: t, opaque: null, transparent: null, z: 0})
    }

    function S(e) {
        var t = e.geometry;
        if (t instanceof THREE.BufferGeometry)for (var r = t.attributes, i = t.attributesKeys, n = 0, a = i.length; a > n; n++) {
            var o = i[n], s = r[o], l = "index" === o ? Ce.ELEMENT_ARRAY_BUFFER : Ce.ARRAY_BUFFER;
            void 0 === s.buffer ? (s.buffer = Ce.createBuffer(), Ce.bindBuffer(l, s.buffer), Ce.bufferData(l, s.array, s instanceof THREE.DynamicBufferAttribute ? Ce.DYNAMIC_DRAW : Ce.STATIC_DRAW), s.needsUpdate = !1) : s.needsUpdate === !0 && (Ce.bindBuffer(l, s.buffer), void 0 === s.updateRange || -1 === s.updateRange.count ? Ce.bufferSubData(l, 0, s.array) : 0 === s.updateRange.count ? console.error("THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually.") : (Ce.bufferSubData(l, s.updateRange.offset * s.array.BYTES_PER_ELEMENT, s.array.subarray(s.updateRange.offset, s.updateRange.offset + s.updateRange.count)), s.updateRange.count = 0), s.needsUpdate = !1)
        } else if (e instanceof THREE.Mesh) {
            t.groupsNeedUpdate === !0 && H(e, t);
            for (var f = Ct[t.id], n = 0, d = f.length; d > n; n++) {
                var p = f[n], m = h(e, p), T = m.attributes && A(m);
                (t.verticesNeedUpdate || t.morphTargetsNeedUpdate || t.elementsNeedUpdate || t.uvsNeedUpdate || t.normalsNeedUpdate || t.colorsNeedUpdate || t.tangentsNeedUpdate || T) && E(p, e, Ce.DYNAMIC_DRAW, !t.dynamic, m)
            }
            t.verticesNeedUpdate = !1, t.morphTargetsNeedUpdate = !1, t.elementsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.tangentsNeedUpdate = !1, m.attributes && C(m)
        } else if (e instanceof THREE.Line) {
            var m = h(e, t), T = m.attributes && A(m);
            (t.verticesNeedUpdate || t.colorsNeedUpdate || t.lineDistancesNeedUpdate || T) && c(t, Ce.DYNAMIC_DRAW), t.verticesNeedUpdate = !1, t.colorsNeedUpdate = !1, t.lineDistancesNeedUpdate = !1, m.attributes && C(m)
        } else if (e instanceof THREE.PointCloud) {
            var m = h(e, t), T = m.attributes && A(m);
            (t.verticesNeedUpdate || t.colorsNeedUpdate || T) && u(t, Ce.DYNAMIC_DRAW, e), t.verticesNeedUpdate = !1, t.colorsNeedUpdate = !1, m.attributes && C(m)
        }
    }

    function A(e) {
        for (var t in e.attributes)if (e.attributes[t].needsUpdate)return !0;
        return !1
    }

    function C(e) {
        for (var t in e.attributes)e.attributes[t].needsUpdate = !1
    }

    function F(e) {
        e instanceof THREE.Mesh || e instanceof THREE.PointCloud || e instanceof THREE.Line ? delete be[e.id] : (e instanceof THREE.ImmediateRenderObject || e.immediateRenderCallback) && B(He, e), delete e.__webglInit, delete e._modelViewMatrix, delete e._normalMatrix, delete e.__webglActive
    }

    function B(e, t) {
        for (var r = e.length - 1; r >= 0; r--)e[r].object === t && e.splice(r, 1)
    }

    function U(e, t, r, i) {
        e.addEventListener("dispose", bt);
        var n = Bt[e.type];
        if (n) {
            var a = THREE.ShaderLib[n];
            e.__webglShader = {
                uniforms: THREE.UniformsUtils.clone(a.uniforms),
                vertexShader: a.vertexShader,
                fragmentShader: a.fragmentShader
            }
        } else e.__webglShader = {uniforms: e.uniforms, vertexShader: e.vertexShader, fragmentShader: e.fragmentShader};
        var o = he(t), s = le(t), h = se(i), l = {
            precision: fe,
            supportsVertexTextures: ht,
            map: !!e.map,
            envMap: !!e.envMap,
            envMapMode: e.envMap && e.envMap.mapping,
            lightMap: !!e.lightMap,
            bumpMap: !!e.bumpMap,
            normalMap: !!e.normalMap,
            specularMap: !!e.specularMap,
            alphaMap: !!e.alphaMap,
            combine: e.combine,
            vertexColors: e.vertexColors,
            fog: r,
            useFog: e.fog,
            fogExp: r instanceof THREE.FogExp2,
            flatShading: e.shading === THREE.FlatShading,
            sizeAttenuation: e.sizeAttenuation,
            logarithmicDepthBuffer: Re,
            skinning: e.skinning,
            maxBones: h,
            useVertexTexture: lt && i && i.skeleton && i.skeleton.useVertexTexture,
            morphTargets: e.morphTargets,
            morphNormals: e.morphNormals,
            maxMorphTargets: Fe.maxMorphTargets,
            maxMorphNormals: Fe.maxMorphNormals,
            maxDirLights: o.directional,
            maxPointLights: o.point,
            maxSpotLights: o.spot,
            maxHemiLights: o.hemi,
            maxShadows: s,
            shadowMapEnabled: Fe.shadowMapEnabled && i.receiveShadow && s > 0,
            shadowMapType: Fe.shadowMapType,
            shadowMapDebug: Fe.shadowMapDebug,
            shadowMapCascade: Fe.shadowMapCascade,
            alphaTest: e.alphaTest,
            metal: e.metal,
            wrapAround: e.wrapAround,
            doubleSided: e.side === THREE.DoubleSide,
            flipSided: e.side === THREE.BackSide
        }, u = [];
        if (n ? u.push(n) : (u.push(e.fragmentShader), u.push(e.vertexShader)), void 0 !== e.defines)for (var c in e.defines)u.push(c), u.push(e.defines[c]);
        for (var c in l)u.push(c), u.push(l[c]);
        for (var E, f = u.join(), d = 0, p = Be.length; p > d; d++) {
            var m = Be[d];
            if (m.code === f) {
                E = m, E.usedTimes++;
                break
            }
        }
        void 0 === E && (E = new THREE.WebGLProgram(Fe, f, e, l), Be.push(E), Fe.info.memory.programs = Be.length), e.program = E;
        var T = E.attributes;
        if (e.morphTargets) {
            e.numSupportedMorphTargets = 0;
            for (var g, v = "morphTarget", R = 0; R < Fe.maxMorphTargets; R++)g = v + R, T[g] >= 0 && e.numSupportedMorphTargets++
        }
        if (e.morphNormals) {
            e.numSupportedMorphNormals = 0;
            var g, v = "morphNormal";
            for (R = 0; R < Fe.maxMorphNormals; R++)g = v + R, T[g] >= 0 && e.numSupportedMorphNormals++
        }
        e.uniformsList = [];
        for (var y in e.__webglShader.uniforms) {
            var x = e.program.uniforms[y];
            x && e.uniformsList.push([e.__webglShader.uniforms[y], x])
        }
    }

    function L(e) {
        e.transparent === !0 ? $e.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha) : $e.setBlending(THREE.NoBlending), $e.setDepthTest(e.depthTest), $e.setDepthWrite(e.depthWrite), $e.setColorWrite(e.colorWrite), $e.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
    }

    function P(e, t, r, i, n) {
        ze = 0, i.needsUpdate && (i.program && At(i), U(i, t, r, n), i.needsUpdate = !1), i.morphTargets && (n.__webglMorphTargetInfluences || (n.__webglMorphTargetInfluences = new Float32Array(Fe.maxMorphTargets)));
        var a = !1, o = !1, s = !1, h = i.program, l = h.uniforms, u = i.__webglShader.uniforms;
        if (h.id !== Ue && (Ce.useProgram(h.program), Ue = h.id, a = !0, o = !0, s = !0), i.id !== Pe && (-1 === Pe && (s = !0), Pe = i.id, o = !0), (a || e !== Ne) && (Ce.uniformMatrix4fv(l.projectionMatrix, !1, e.projectionMatrix.elements), Re && Ce.uniform1f(l.logDepthBufFC, 2 / (Math.log(e.far + 1) / Math.LN2)), e !== Ne && (Ne = e), (i instanceof THREE.ShaderMaterial || i instanceof THREE.MeshPhongMaterial || i.envMap) && null !== l.cameraPosition && (Ye.setFromMatrixPosition(e.matrixWorld), Ce.uniform3f(l.cameraPosition, Ye.x, Ye.y, Ye.z)), (i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshBasicMaterial || i instanceof THREE.ShaderMaterial || i.skinning) && null !== l.viewMatrix && Ce.uniformMatrix4fv(l.viewMatrix, !1, e.matrixWorldInverse.elements)), i.skinning)if (n.bindMatrix && null !== l.bindMatrix && Ce.uniformMatrix4fv(l.bindMatrix, !1, n.bindMatrix.elements), n.bindMatrixInverse && null !== l.bindMatrixInverse && Ce.uniformMatrix4fv(l.bindMatrixInverse, !1, n.bindMatrixInverse.elements), lt && n.skeleton && n.skeleton.useVertexTexture) {
            if (null !== l.boneTexture) {
                var c = Y();
                Ce.uniform1i(l.boneTexture, c), Fe.setTexture(n.skeleton.boneTexture, c)
            }
            null !== l.boneTextureWidth && Ce.uniform1i(l.boneTextureWidth, n.skeleton.boneTextureWidth), null !== l.boneTextureHeight && Ce.uniform1i(l.boneTextureHeight, n.skeleton.boneTextureHeight)
        } else n.skeleton && n.skeleton.boneMatrices && null !== l.boneGlobalMatrices && Ce.uniformMatrix4fv(l.boneGlobalMatrices, !1, n.skeleton.boneMatrices);
        return o && (r && i.fog && V(u, r), (i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshLambertMaterial || i.lights) && (Ze && (s = !0, K(t), Ze = !1), s ? (G(u, Qe), W(u, !0)) : W(u, !1)), (i instanceof THREE.MeshBasicMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshPhongMaterial) && D(u, i), i instanceof THREE.LineBasicMaterial ? N(u, i) : i instanceof THREE.LineDashedMaterial ? (N(u, i), z(u, i)) : i instanceof THREE.PointCloudMaterial ? k(u, i) : i instanceof THREE.MeshPhongMaterial ? O(u, i) : i instanceof THREE.MeshLambertMaterial ? I(u, i) : i instanceof THREE.MeshDepthMaterial ? (u.mNear.value = e.near, u.mFar.value = e.far, u.opacity.value = i.opacity) : i instanceof THREE.MeshNormalMaterial && (u.opacity.value = i.opacity), n.receiveShadow && !i._shadowPass && j(u, t), q(i.uniformsList)), X(l, n), null !== l.modelMatrix && Ce.uniformMatrix4fv(l.modelMatrix, !1, n.matrixWorld.elements), h
    }

    function D(e, t) {
        e.opacity.value = t.opacity, e.diffuse.value = t.color, e.map.value = t.map, e.lightMap.value = t.lightMap, e.specularMap.value = t.specularMap, e.alphaMap.value = t.alphaMap, t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale));
        var r;
        if (t.map ? r = t.map : t.specularMap ? r = t.specularMap : t.normalMap ? r = t.normalMap : t.bumpMap ? r = t.bumpMap : t.alphaMap && (r = t.alphaMap), void 0 !== r) {
            var i = r.offset, n = r.repeat;
            e.offsetRepeat.value.set(i.x, i.y, n.x, n.y)
        }
        e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio
    }

    function N(e, t) {
        e.diffuse.value = t.color, e.opacity.value = t.opacity
    }

    function z(e, t) {
        e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
    }

    function k(e, t) {
        if (e.psColor.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size, e.scale.value = ue.height / 2, e.map.value = t.map, null !== t.map) {
            var r = t.map.offset, i = t.map.repeat;
            e.offsetRepeat.value.set(r.x, r.y, i.x, i.y)
        }
    }

    function V(e, t) {
        e.fogColor.value = t.color, t instanceof THREE.Fog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t instanceof THREE.FogExp2 && (e.fogDensity.value = t.density)
    }

    function O(e, t) {
        e.shininess.value = t.shininess, e.emissive.value = t.emissive, e.specular.value = t.specular, t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB)
    }

    function I(e, t) {
        e.emissive.value = t.emissive, t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB)
    }

    function G(e, t) {
        e.ambientLightColor.value = t.ambient, e.directionalLightColor.value = t.directional.colors, e.directionalLightDirection.value = t.directional.positions, e.pointLightColor.value = t.point.colors, e.pointLightPosition.value = t.point.positions, e.pointLightDistance.value = t.point.distances, e.pointLightDecay.value = t.point.decays, e.spotLightColor.value = t.spot.colors, e.spotLightPosition.value = t.spot.positions, e.spotLightDistance.value = t.spot.distances, e.spotLightDirection.value = t.spot.directions, e.spotLightAngleCos.value = t.spot.anglesCos, e.spotLightExponent.value = t.spot.exponents, e.spotLightDecay.value = t.spot.decays, e.hemisphereLightSkyColor.value = t.hemi.skyColors, e.hemisphereLightGroundColor.value = t.hemi.groundColors, e.hemisphereLightDirection.value = t.hemi.positions
    }

    function W(e, t) {
        e.ambientLightColor.needsUpdate = t, e.directionalLightColor.needsUpdate = t, e.directionalLightDirection.needsUpdate = t, e.pointLightColor.needsUpdate = t, e.pointLightPosition.needsUpdate = t, e.pointLightDistance.needsUpdate = t, e.pointLightDecay.needsUpdate = t, e.spotLightColor.needsUpdate = t, e.spotLightPosition.needsUpdate = t, e.spotLightDistance.needsUpdate = t, e.spotLightDirection.needsUpdate = t, e.spotLightAngleCos.needsUpdate = t, e.spotLightExponent.needsUpdate = t, e.spotLightDecay.needsUpdate = t, e.hemisphereLightSkyColor.needsUpdate = t, e.hemisphereLightGroundColor.needsUpdate = t, e.hemisphereLightDirection.needsUpdate = t
    }

    function j(e, t) {
        if (e.shadowMatrix)for (var r = 0, i = 0, n = t.length; n > i; i++) {
            var a = t[i];
            a.castShadow && (a instanceof THREE.SpotLight || a instanceof THREE.DirectionalLight && !a.shadowCascade) && (e.shadowMap.value[r] = a.shadowMap, e.shadowMapSize.value[r] = a.shadowMapSize, e.shadowMatrix.value[r] = a.shadowMatrix, e.shadowDarkness.value[r] = a.shadowDarkness, e.shadowBias.value[r] = a.shadowBias, r++)
        }
    }

    function X(e, t) {
        Ce.uniformMatrix4fv(e.modelViewMatrix, !1, t._modelViewMatrix.elements), e.normalMatrix && Ce.uniformMatrix3fv(e.normalMatrix, !1, t._normalMatrix.elements)
    }

    function Y() {
        var e = ze;
        return e >= nt && THREE.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + nt), ze += 1, e
    }

    function q(e) {
        for (var t, r, i, n = 0, a = e.length; a > n; n++) {
            var o = e[n][0];
            if (o.needsUpdate !== !1) {
                var s = o.type, h = o.value, l = e[n][1];
                switch (s) {
                    case"1i":
                        Ce.uniform1i(l, h);
                        break;
                    case"1f":
                        Ce.uniform1f(l, h);
                        break;
                    case"2f":
                        Ce.uniform2f(l, h[0], h[1]);
                        break;
                    case"3f":
                        Ce.uniform3f(l, h[0], h[1], h[2]);
                        break;
                    case"4f":
                        Ce.uniform4f(l, h[0], h[1], h[2], h[3]);
                        break;
                    case"1iv":
                        Ce.uniform1iv(l, h);
                        break;
                    case"3iv":
                        Ce.uniform3iv(l, h);
                        break;
                    case"1fv":
                        Ce.uniform1fv(l, h);
                        break;
                    case"2fv":
                        Ce.uniform2fv(l, h);
                        break;
                    case"3fv":
                        Ce.uniform3fv(l, h);
                        break;
                    case"4fv":
                        Ce.uniform4fv(l, h);
                        break;
                    case"Matrix3fv":
                        Ce.uniformMatrix3fv(l, !1, h);
                        break;
                    case"Matrix4fv":
                        Ce.uniformMatrix4fv(l, !1, h);
                        break;
                    case"i":
                        Ce.uniform1i(l, h);
                        break;
                    case"f":
                        Ce.uniform1f(l, h);
                        break;
                    case"v2":
                        Ce.uniform2f(l, h.x, h.y);
                        break;
                    case"v3":
                        Ce.uniform3f(l, h.x, h.y, h.z);
                        break;
                    case"v4":
                        Ce.uniform4f(l, h.x, h.y, h.z, h.w);
                        break;
                    case"c":
                        Ce.uniform3f(l, h.r, h.g, h.b);
                        break;
                    case"iv1":
                        Ce.uniform1iv(l, h);
                        break;
                    case"iv":
                        Ce.uniform3iv(l, h);
                        break;
                    case"fv1":
                        Ce.uniform1fv(l, h);
                        break;
                    case"fv":
                        Ce.uniform3fv(l, h);
                        break;
                    case"v2v":
                        void 0 === o._array && (o._array = new Float32Array(2 * h.length));
                        for (var u = 0, c = h.length; c > u; u++)i = 2 * u, o._array[i] = h[u].x, o._array[i + 1] = h[u].y;
                        Ce.uniform2fv(l, o._array);
                        break;
                    case"v3v":
                        void 0 === o._array && (o._array = new Float32Array(3 * h.length));
                        for (var u = 0, c = h.length; c > u; u++)i = 3 * u, o._array[i] = h[u].x, o._array[i + 1] = h[u].y, o._array[i + 2] = h[u].z;
                        Ce.uniform3fv(l, o._array);
                        break;
                    case"v4v":
                        void 0 === o._array && (o._array = new Float32Array(4 * h.length));
                        for (var u = 0, c = h.length; c > u; u++)i = 4 * u, o._array[i] = h[u].x, o._array[i + 1] = h[u].y, o._array[i + 2] = h[u].z, o._array[i + 3] = h[u].w;
                        Ce.uniform4fv(l, o._array);
                        break;
                    case"m3":
                        Ce.uniformMatrix3fv(l, !1, h.elements);
                        break;
                    case"m3v":
                        void 0 === o._array && (o._array = new Float32Array(9 * h.length));
                        for (var u = 0, c = h.length; c > u; u++)h[u].flattenToArrayOffset(o._array, 9 * u);
                        Ce.uniformMatrix3fv(l, !1, o._array);
                        break;
                    case"m4":
                        Ce.uniformMatrix4fv(l, !1, h.elements);
                        break;
                    case"m4v":
                        void 0 === o._array && (o._array = new Float32Array(16 * h.length));
                        for (var u = 0, c = h.length; c > u; u++)h[u].flattenToArrayOffset(o._array, 16 * u);
                        Ce.uniformMatrix4fv(l, !1, o._array);
                        break;
                    case"t":
                        if (t = h, r = Y(), Ce.uniform1i(l, r), !t)continue;
                        t instanceof THREE.CubeTexture || t.image instanceof Array && 6 === t.image.length ? ee(t, r) : t instanceof THREE.WebGLRenderTargetCube ? te(t, r) : Fe.setTexture(t, r);
                        break;
                    case"tv":
                        void 0 === o._array && (o._array = []);
                        for (var u = 0, c = o.value.length; c > u; u++)o._array[u] = Y();
                        Ce.uniform1iv(l, o._array);
                        for (var u = 0, c = o.value.length; c > u; u++)t = o.value[u], r = o._array[u], t && Fe.setTexture(t, r);
                        break;
                    default:
                        THREE.warn("THREE.WebGLRenderer: Unknown uniform type: " + s)
                }
            }
        }
    }

    function Z(e, t) {
        e._modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld), e._normalMatrix.getNormalMatrix(e._modelViewMatrix)
    }

    function Q(e, t, r, i) {
        e[t] = r.r * i, e[t + 1] = r.g * i, e[t + 2] = r.b * i
    }

    function K(e) {
        var t, r, i, n, a, o, s, h, l = 0, u = 0, c = 0, E = Qe, f = E.directional.colors, d = E.directional.positions, p = E.point.colors, m = E.point.positions, T = E.point.distances, g = E.point.decays, v = E.spot.colors, R = E.spot.positions, y = E.spot.distances, x = E.spot.directions, _ = E.spot.anglesCos, b = E.spot.exponents, H = E.spot.decays, M = E.hemi.skyColors, w = E.hemi.groundColors, S = E.hemi.positions, A = 0, C = 0, F = 0, B = 0, U = 0, L = 0, P = 0, D = 0, N = 0, z = 0, k = 0, V = 0;
        for (t = 0, r = e.length; r > t; t++)if (i = e[t], !i.onlyShadow)if (n = i.color, s = i.intensity, h = i.distance, i instanceof THREE.AmbientLight) {
            if (!i.visible)continue;
            l += n.r, u += n.g, c += n.b
        } else if (i instanceof THREE.DirectionalLight) {
            if (U += 1, !i.visible)continue;
            qe.setFromMatrixPosition(i.matrixWorld), Ye.setFromMatrixPosition(i.target.matrixWorld), qe.sub(Ye), qe.normalize(), N = 3 * A, d[N] = qe.x, d[N + 1] = qe.y, d[N + 2] = qe.z, Q(f, N, n, s), A += 1
        } else if (i instanceof THREE.PointLight) {
            if (L += 1, !i.visible)continue;
            z = 3 * C, Q(p, z, n, s), Ye.setFromMatrixPosition(i.matrixWorld), m[z] = Ye.x, m[z + 1] = Ye.y, m[z + 2] = Ye.z, T[C] = h, g[C] = 0 === i.distance ? 0 : i.decay, C += 1
        } else if (i instanceof THREE.SpotLight) {
            if (P += 1, !i.visible)continue;
            k = 3 * F, Q(v, k, n, s), qe.setFromMatrixPosition(i.matrixWorld), R[k] = qe.x, R[k + 1] = qe.y, R[k + 2] = qe.z, y[F] = h, Ye.setFromMatrixPosition(i.target.matrixWorld), qe.sub(Ye), qe.normalize(), x[k] = qe.x, x[k + 1] = qe.y, x[k + 2] = qe.z, _[F] = Math.cos(i.angle), b[F] = i.exponent, H[F] = 0 === i.distance ? 0 : i.decay, F += 1
        } else if (i instanceof THREE.HemisphereLight) {
            if (D += 1, !i.visible)continue;
            qe.setFromMatrixPosition(i.matrixWorld), qe.normalize(), V = 3 * B, S[V] = qe.x, S[V + 1] = qe.y, S[V + 2] = qe.z, a = i.color, o = i.groundColor, Q(M, V, a, s), Q(w, V, o, s), B += 1
        }
        for (t = 3 * A, r = Math.max(f.length, 3 * U); r > t; t++)f[t] = 0;
        for (t = 3 * C, r = Math.max(p.length, 3 * L); r > t; t++)p[t] = 0;
        for (t = 3 * F, r = Math.max(v.length, 3 * P); r > t; t++)v[t] = 0;
        for (t = 3 * B, r = Math.max(M.length, 3 * D); r > t; t++)M[t] = 0;
        for (t = 3 * B, r = Math.max(w.length, 3 * D); r > t; t++)w[t] = 0;
        E.directional.length = A, E.point.length = C, E.spot.length = F, E.hemi.length = B, E.ambient[0] = l, E.ambient[1] = u, E.ambient[2] = c
    }

    function J(e, t, r) {
        var i;
        r ? (Ce.texParameteri(e, Ce.TEXTURE_WRAP_S, oe(t.wrapS)), Ce.texParameteri(e, Ce.TEXTURE_WRAP_T, oe(t.wrapT)), Ce.texParameteri(e, Ce.TEXTURE_MAG_FILTER, oe(t.magFilter)), Ce.texParameteri(e, Ce.TEXTURE_MIN_FILTER, oe(t.minFilter))) : (Ce.texParameteri(e, Ce.TEXTURE_WRAP_S, Ce.CLAMP_TO_EDGE), Ce.texParameteri(e, Ce.TEXTURE_WRAP_T, Ce.CLAMP_TO_EDGE), (t.wrapS !== THREE.ClampToEdgeWrapping || t.wrapT !== THREE.ClampToEdgeWrapping) && THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( " + t.sourceFile + " )"), Ce.texParameteri(e, Ce.TEXTURE_MAG_FILTER, ae(t.magFilter)), Ce.texParameteri(e, Ce.TEXTURE_MIN_FILTER, ae(t.minFilter)), t.minFilter !== THREE.NearestFilter && t.minFilter !== THREE.LinearFilter && THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( " + t.sourceFile + " )")), i = et.get("EXT_texture_filter_anisotropic"), i && t.type !== THREE.FloatType && t.type !== THREE.HalfFloatType && (t.anisotropy > 1 || t.__currentAnisotropy) && (Ce.texParameterf(e, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, Fe.getMaxAnisotropy())), t.__currentAnisotropy = t.anisotropy)
    }

    function $(e, t) {
        if (e.width > t || e.height > t) {
            var r = t / Math.max(e.width, e.height), i = document.createElement("canvas");
            i.width = Math.floor(e.width * r), i.height = Math.floor(e.height * r);
            var n = i.getContext("2d");
            return n.drawImage(e, 0, 0, e.width, e.height, 0, 0, i.width, i.height), THREE.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + i.width + "x" + i.height, e), i
        }
        return e
    }

    function ee(e, t) {
        if (6 === e.image.length)if (e.needsUpdate) {
            e.image.__webglTextureCube || (e.addEventListener("dispose", xt), e.image.__webglTextureCube = Ce.createTexture(), Fe.info.memory.textures++), Ce.activeTexture(Ce.TEXTURE0 + t), Ce.bindTexture(Ce.TEXTURE_CUBE_MAP, e.image.__webglTextureCube), Ce.pixelStorei(Ce.UNPACK_FLIP_Y_WEBGL, e.flipY);
            for (var r = e instanceof THREE.CompressedTexture, i = e.image[0] instanceof THREE.DataTexture, n = [], a = 0; 6 > a; a++)!Fe.autoScaleCubemaps || r || i ? n[a] = i ? e.image[a].image : e.image[a] : n[a] = $(e.image[a], st);
            var o = n[0], s = THREE.Math.isPowerOfTwo(o.width) && THREE.Math.isPowerOfTwo(o.height), h = oe(e.format), l = oe(e.type);
            J(Ce.TEXTURE_CUBE_MAP, e, s);
            for (var a = 0; 6 > a; a++)if (r)for (var u, c = n[a].mipmaps, E = 0, f = c.length; f > E; E++)u = c[E], e.format !== THREE.RGBAFormat && e.format !== THREE.RGBFormat ? dt().indexOf(h) > -1 ? Ce.compressedTexImage2D(Ce.TEXTURE_CUBE_MAP_POSITIVE_X + a, E, h, u.width, u.height, 0, u.data) : THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : Ce.texImage2D(Ce.TEXTURE_CUBE_MAP_POSITIVE_X + a, E, h, u.width, u.height, 0, h, l, u.data); else i ? Ce.texImage2D(Ce.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, h, n[a].width, n[a].height, 0, h, l, n[a].data) : Ce.texImage2D(Ce.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, h, h, l, n[a]);
            e.generateMipmaps && s && Ce.generateMipmap(Ce.TEXTURE_CUBE_MAP), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
        } else Ce.activeTexture(Ce.TEXTURE0 + t), Ce.bindTexture(Ce.TEXTURE_CUBE_MAP, e.image.__webglTextureCube)
    }

    function te(e, t) {
        Ce.activeTexture(Ce.TEXTURE0 + t), Ce.bindTexture(Ce.TEXTURE_CUBE_MAP, e.__webglTexture)
    }

    function re(e, t, r) {
        Ce.bindFramebuffer(Ce.FRAMEBUFFER, e), Ce.framebufferTexture2D(Ce.FRAMEBUFFER, Ce.COLOR_ATTACHMENT0, r, t.__webglTexture, 0)
    }

    function ie(e, t) {
        Ce.bindRenderbuffer(Ce.RENDERBUFFER, e), t.depthBuffer && !t.stencilBuffer ? (Ce.renderbufferStorage(Ce.RENDERBUFFER, Ce.DEPTH_COMPONENT16, t.width, t.height), Ce.framebufferRenderbuffer(Ce.FRAMEBUFFER, Ce.DEPTH_ATTACHMENT, Ce.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (Ce.renderbufferStorage(Ce.RENDERBUFFER, Ce.DEPTH_STENCIL, t.width, t.height), Ce.framebufferRenderbuffer(Ce.FRAMEBUFFER, Ce.DEPTH_STENCIL_ATTACHMENT, Ce.RENDERBUFFER, e)) : Ce.renderbufferStorage(Ce.RENDERBUFFER, Ce.RGBA4, t.width, t.height)
    }

    function ne(e) {
        e instanceof THREE.WebGLRenderTargetCube ? (Ce.bindTexture(Ce.TEXTURE_CUBE_MAP, e.__webglTexture), Ce.generateMipmap(Ce.TEXTURE_CUBE_MAP), Ce.bindTexture(Ce.TEXTURE_CUBE_MAP, null)) : (Ce.bindTexture(Ce.TEXTURE_2D, e.__webglTexture), Ce.generateMipmap(Ce.TEXTURE_2D), Ce.bindTexture(Ce.TEXTURE_2D, null))
    }

    function ae(e) {
        return e === THREE.NearestFilter || e === THREE.NearestMipMapNearestFilter || e === THREE.NearestMipMapLinearFilter ? Ce.NEAREST : Ce.LINEAR
    }

    function oe(e) {
        var t;
        if (e === THREE.RepeatWrapping)return Ce.REPEAT;
        if (e === THREE.ClampToEdgeWrapping)return Ce.CLAMP_TO_EDGE;
        if (e === THREE.MirroredRepeatWrapping)return Ce.MIRRORED_REPEAT;
        if (e === THREE.NearestFilter)return Ce.NEAREST;
        if (e === THREE.NearestMipMapNearestFilter)return Ce.NEAREST_MIPMAP_NEAREST;
        if (e === THREE.NearestMipMapLinearFilter)return Ce.NEAREST_MIPMAP_LINEAR;
        if (e === THREE.LinearFilter)return Ce.LINEAR;
        if (e === THREE.LinearMipMapNearestFilter)return Ce.LINEAR_MIPMAP_NEAREST;
        if (e === THREE.LinearMipMapLinearFilter)return Ce.LINEAR_MIPMAP_LINEAR;
        if (e === THREE.UnsignedByteType)return Ce.UNSIGNED_BYTE;
        if (e === THREE.UnsignedShort4444Type)return Ce.UNSIGNED_SHORT_4_4_4_4;
        if (e === THREE.UnsignedShort5551Type)return Ce.UNSIGNED_SHORT_5_5_5_1;
        if (e === THREE.UnsignedShort565Type)return Ce.UNSIGNED_SHORT_5_6_5;
        if (e === THREE.ByteType)return Ce.BYTE;
        if (e === THREE.ShortType)return Ce.SHORT;
        if (e === THREE.UnsignedShortType)return Ce.UNSIGNED_SHORT;
        if (e === THREE.IntType)return Ce.INT;
        if (e === THREE.UnsignedIntType)return Ce.UNSIGNED_INT;
        if (e === THREE.FloatType)return Ce.FLOAT;
        if (t = et.get("OES_texture_half_float"), null !== t && e === THREE.HalfFloatType)return t.HALF_FLOAT_OES;
        if (e === THREE.AlphaFormat)return Ce.ALPHA;
        if (e === THREE.RGBFormat)return Ce.RGB;
        if (e === THREE.RGBAFormat)return Ce.RGBA;
        if (e === THREE.LuminanceFormat)return Ce.LUMINANCE;
        if (e === THREE.LuminanceAlphaFormat)return Ce.LUMINANCE_ALPHA;
        if (e === THREE.AddEquation)return Ce.FUNC_ADD;
        if (e === THREE.SubtractEquation)return Ce.FUNC_SUBTRACT;
        if (e === THREE.ReverseSubtractEquation)return Ce.FUNC_REVERSE_SUBTRACT;
        if (e === THREE.ZeroFactor)return Ce.ZERO;
        if (e === THREE.OneFactor)return Ce.ONE;
        if (e === THREE.SrcColorFactor)return Ce.SRC_COLOR;
        if (e === THREE.OneMinusSrcColorFactor)return Ce.ONE_MINUS_SRC_COLOR;
        if (e === THREE.SrcAlphaFactor)return Ce.SRC_ALPHA;
        if (e === THREE.OneMinusSrcAlphaFactor)return Ce.ONE_MINUS_SRC_ALPHA;
        if (e === THREE.DstAlphaFactor)return Ce.DST_ALPHA;
        if (e === THREE.OneMinusDstAlphaFactor)return Ce.ONE_MINUS_DST_ALPHA;
        if (e === THREE.DstColorFactor)return Ce.DST_COLOR;
        if (e === THREE.OneMinusDstColorFactor)return Ce.ONE_MINUS_DST_COLOR;
        if (e === THREE.SrcAlphaSaturateFactor)return Ce.SRC_ALPHA_SATURATE;
        if (t = et.get("WEBGL_compressed_texture_s3tc"), null !== t) {
            if (e === THREE.RGB_S3TC_DXT1_Format)return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT1_Format)return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT3_Format)return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (e === THREE.RGBA_S3TC_DXT5_Format)return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if (t = et.get("WEBGL_compressed_texture_pvrtc"), null !== t) {
            if (e === THREE.RGB_PVRTC_4BPPV1_Format)return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (e === THREE.RGB_PVRTC_2BPPV1_Format)return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (e === THREE.RGBA_PVRTC_4BPPV1_Format)return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (e === THREE.RGBA_PVRTC_2BPPV1_Format)return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (t = et.get("EXT_blend_minmax"), null !== t) {
            if (e === THREE.MinEquation)return t.MIN_EXT;
            if (e === THREE.MaxEquation)return t.MAX_EXT
        }
        return 0
    }

    function se(e) {
        if (lt && e && e.skeleton && e.skeleton.useVertexTexture)return 1024;
        var t = Ce.getParameter(Ce.MAX_VERTEX_UNIFORM_VECTORS), r = Math.floor((t - 20) / 4), i = r;
        return void 0 !== e && e instanceof THREE.SkinnedMesh && (i = Math.min(e.skeleton.bones.length, i), i < e.skeleton.bones.length && THREE.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)")), i
    }

    function he(e) {
        for (var t = 0, r = 0, i = 0, n = 0, a = 0, o = e.length; o > a; a++) {
            var s = e[a];
            s.onlyShadow || s.visible === !1 || (s instanceof THREE.DirectionalLight && t++, s instanceof THREE.PointLight && r++, s instanceof THREE.SpotLight && i++, s instanceof THREE.HemisphereLight && n++)
        }
        return {directional: t, point: r, spot: i, hemi: n}
    }

    function le(e) {
        for (var t = 0, r = 0, i = e.length; i > r; r++) {
            var n = e[r];
            n.castShadow && (n instanceof THREE.SpotLight && t++, n instanceof THREE.DirectionalLight && !n.shadowCascade && t++)
        }
        return t
    }

    console.log("THREE.WebGLRenderer", THREE.REVISION), e = e || {};
    var ue = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"), ce = void 0 !== e.context ? e.context : null, Ee = 1, fe = void 0 !== e.precision ? e.precision : "highp", de = void 0 !== e.alpha ? e.alpha : !1, pe = void 0 !== e.depth ? e.depth : !0, me = void 0 !== e.stencil ? e.stencil : !0, Te = void 0 !== e.antialias ? e.antialias : !1, ge = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0, ve = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1, Re = void 0 !== e.logarithmicDepthBuffer ? e.logarithmicDepthBuffer : !1, ye = new THREE.Color(0), xe = 0, _e = [], be = {}, He = [], Me = [], we = [], Se = [], Ae = [];
    this.domElement = ue, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.shadowMapEnabled = !1, this.shadowMapType = THREE.PCFShadowMap, this.shadowMapCullFace = THREE.CullFaceFront, this.shadowMapDebug = !1, this.shadowMapCascade = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0, this.info = {
        memory: {
            programs: 0, geometries: 0,
            textures: 0
        }, render: {calls: 0, vertices: 0, faces: 0, points: 0}
    };
    var Ce, Fe = this, Be = [], Ue = null, Le = null, Pe = -1, De = "", Ne = null, ze = 0, ke = 0, Ve = 0, Oe = ue.width, Ie = ue.height, Ge = 0, We = 0, je = new THREE.Frustum, Xe = new THREE.Matrix4, Ye = new THREE.Vector3, qe = new THREE.Vector3, Ze = !0, Qe = {
        ambient: [0, 0, 0],
        directional: {length: 0, colors: [], positions: []},
        point: {length: 0, colors: [], positions: [], distances: [], decays: []},
        spot: {
            length: 0,
            colors: [],
            positions: [],
            distances: [],
            directions: [],
            anglesCos: [],
            exponents: [],
            decays: []
        },
        hemi: {length: 0, skyColors: [], groundColors: [], positions: []}
    };
    try {
        var Ke = {alpha: de, depth: pe, stencil: me, antialias: Te, premultipliedAlpha: ge, preserveDrawingBuffer: ve};
        if (Ce = ce || ue.getContext("webgl", Ke) || ue.getContext("experimental-webgl", Ke), null === Ce)throw null !== ue.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
        ue.addEventListener("webglcontextlost", function (e) {
            e.preventDefault(), it(), rt(), be = {}
        }, !1)
    } catch (Je) {
        THREE.error("THREE.WebGLRenderer: " + Je)
    }
    var $e = new THREE.WebGLState(Ce, oe);
    void 0 === Ce.getShaderPrecisionFormat && (Ce.getShaderPrecisionFormat = function () {
        return {rangeMin: 1, rangeMax: 1, precision: 1}
    });
    var et = new THREE.WebGLExtensions(Ce);
    et.get("OES_texture_float"), et.get("OES_texture_float_linear"), et.get("OES_texture_half_float"), et.get("OES_texture_half_float_linear"), et.get("OES_standard_derivatives"), Re && et.get("EXT_frag_depth");
    var tt = function (e, t, r, i) {
        ge === !0 && (e *= i, t *= i, r *= i), Ce.clearColor(e, t, r, i)
    }, rt = function () {
        Ce.clearColor(0, 0, 0, 1), Ce.clearDepth(1), Ce.clearStencil(0), Ce.enable(Ce.DEPTH_TEST), Ce.depthFunc(Ce.LEQUAL), Ce.frontFace(Ce.CCW), Ce.cullFace(Ce.BACK), Ce.enable(Ce.CULL_FACE), Ce.enable(Ce.BLEND), Ce.blendEquation(Ce.FUNC_ADD), Ce.blendFunc(Ce.SRC_ALPHA, Ce.ONE_MINUS_SRC_ALPHA), Ce.viewport(ke, Ve, Oe, Ie), tt(ye.r, ye.g, ye.b, xe)
    }, it = function () {
        Ue = null, Ne = null, De = "", Pe = -1, Ze = !0, $e.reset()
    };
    rt(), this.context = Ce, this.state = $e;
    var nt = Ce.getParameter(Ce.MAX_TEXTURE_IMAGE_UNITS), at = Ce.getParameter(Ce.MAX_VERTEX_TEXTURE_IMAGE_UNITS), ot = Ce.getParameter(Ce.MAX_TEXTURE_SIZE), st = Ce.getParameter(Ce.MAX_CUBE_MAP_TEXTURE_SIZE), ht = at > 0, lt = ht && et.get("OES_texture_float"), ut = Ce.getShaderPrecisionFormat(Ce.VERTEX_SHADER, Ce.HIGH_FLOAT), ct = Ce.getShaderPrecisionFormat(Ce.VERTEX_SHADER, Ce.MEDIUM_FLOAT), Et = Ce.getShaderPrecisionFormat(Ce.FRAGMENT_SHADER, Ce.HIGH_FLOAT), ft = Ce.getShaderPrecisionFormat(Ce.FRAGMENT_SHADER, Ce.MEDIUM_FLOAT), dt = function () {
        var e;
        return function () {
            if (void 0 !== e)return e;
            if (e = [], et.get("WEBGL_compressed_texture_pvrtc") || et.get("WEBGL_compressed_texture_s3tc"))for (var t = Ce.getParameter(Ce.COMPRESSED_TEXTURE_FORMATS), r = 0; r < t.length; r++)e.push(t[r]);
            return e
        }
    }(), pt = ut.precision > 0 && Et.precision > 0, mt = ct.precision > 0 && ft.precision > 0;
    "highp" !== fe || pt || (mt ? (fe = "mediump", THREE.warn("THREE.WebGLRenderer: highp not supported, using mediump.")) : (fe = "lowp", THREE.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp."))), "mediump" !== fe || mt || (fe = "lowp", THREE.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));
    var Tt = new THREE.ShadowMapPlugin(this, _e, be, He), gt = new THREE.SpritePlugin(this, Se), vt = new THREE.LensFlarePlugin(this, Ae);
    this.getContext = function () {
        return Ce
    }, this.forceContextLoss = function () {
        et.get("WEBGL_lose_context").loseContext()
    }, this.supportsVertexTextures = function () {
        return ht
    }, this.supportsFloatTextures = function () {
        return et.get("OES_texture_float")
    }, this.supportsHalfFloatTextures = function () {
        return et.get("OES_texture_half_float")
    }, this.supportsStandardDerivatives = function () {
        return et.get("OES_standard_derivatives")
    }, this.supportsCompressedTextureS3TC = function () {
        return et.get("WEBGL_compressed_texture_s3tc")
    }, this.supportsCompressedTexturePVRTC = function () {
        return et.get("WEBGL_compressed_texture_pvrtc")
    }, this.supportsBlendMinMax = function () {
        return et.get("EXT_blend_minmax")
    }, this.getMaxAnisotropy = function () {
        var e;
        return function () {
            if (void 0 !== e)return e;
            var t = et.get("EXT_texture_filter_anisotropic");
            return e = null !== t ? Ce.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }
    }(), this.getPrecision = function () {
        return fe
    }, this.getPixelRatio = function () {
        return Ee
    }, this.setPixelRatio = function (e) {
        Ee = e
    }, this.setSize = function (e, t, r) {
        ue.width = e * Ee, ue.height = t * Ee, r !== !1 && (ue.style.width = e + "px", ue.style.height = t + "px"), this.setViewport(0, 0, e, t)
    }, this.setViewport = function (e, t, r, i) {
        ke = e * Ee, Ve = t * Ee, Oe = r * Ee, Ie = i * Ee, Ce.viewport(ke, Ve, Oe, Ie)
    }, this.setScissor = function (e, t, r, i) {
        Ce.scissor(e * Ee, t * Ee, r * Ee, i * Ee)
    }, this.enableScissorTest = function (e) {
        e ? Ce.enable(Ce.SCISSOR_TEST) : Ce.disable(Ce.SCISSOR_TEST)
    }, this.getClearColor = function () {
        return ye
    }, this.setClearColor = function (e, t) {
        ye.set(e), xe = void 0 !== t ? t : 1, tt(ye.r, ye.g, ye.b, xe)
    }, this.getClearAlpha = function () {
        return xe
    }, this.setClearAlpha = function (e) {
        xe = e, tt(ye.r, ye.g, ye.b, xe)
    }, this.clear = function (e, t, r) {
        var i = 0;
        (void 0 === e || e) && (i |= Ce.COLOR_BUFFER_BIT), (void 0 === t || t) && (i |= Ce.DEPTH_BUFFER_BIT), (void 0 === r || r) && (i |= Ce.STENCIL_BUFFER_BIT), Ce.clear(i)
    }, this.clearColor = function () {
        Ce.clear(Ce.COLOR_BUFFER_BIT)
    }, this.clearDepth = function () {
        Ce.clear(Ce.DEPTH_BUFFER_BIT)
    }, this.clearStencil = function () {
        Ce.clear(Ce.STENCIL_BUFFER_BIT)
    }, this.clearTarget = function (e, t, r, i) {
        this.setRenderTarget(e), this.clear(t, r, i)
    }, this.resetGLState = it;
    var Rt = function (e) {
        var t = e.target;
        t.traverse(function (e) {
            e.removeEventListener("remove", Rt), F(e)
        })
    }, yt = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", yt), Mt(t)
    }, xt = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", xt), wt(t), Fe.info.memory.textures--
    }, _t = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", _t), St(t), Fe.info.memory.textures--
    }, bt = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", bt), At(t)
    }, Ht = function (e) {
        for (var t = ["__webglVertexBuffer", "__webglNormalBuffer", "__webglTangentBuffer", "__webglColorBuffer", "__webglUVBuffer", "__webglUV2Buffer", "__webglSkinIndicesBuffer", "__webglSkinWeightsBuffer", "__webglFaceBuffer", "__webglLineBuffer", "__webglLineDistanceBuffer"], r = 0, i = t.length; i > r; r++) {
            var n = t[r];
            void 0 !== e[n] && (Ce.deleteBuffer(e[n]), delete e[n])
        }
        if (void 0 !== e.__webglCustomAttributesList) {
            for (var n in e.__webglCustomAttributesList)Ce.deleteBuffer(e.__webglCustomAttributesList[n].buffer);
            delete e.__webglCustomAttributesList
        }
        Fe.info.memory.geometries--
    }, Mt = function (e) {
        if (delete e.__webglInit, e instanceof THREE.BufferGeometry) {
            for (var t in e.attributes) {
                var r = e.attributes[t];
                void 0 !== r.buffer && (Ce.deleteBuffer(r.buffer), delete r.buffer)
            }
            Fe.info.memory.geometries--
        } else {
            var i = Ct[e.id];
            if (void 0 !== i) {
                for (var n = 0, a = i.length; a > n; n++) {
                    var o = i[n];
                    if (void 0 !== o.numMorphTargets) {
                        for (var s = 0, h = o.numMorphTargets; h > s; s++)Ce.deleteBuffer(o.__webglMorphTargetsBuffers[s]);
                        delete o.__webglMorphTargetsBuffers
                    }
                    if (void 0 !== o.numMorphNormals) {
                        for (var s = 0, h = o.numMorphNormals; h > s; s++)Ce.deleteBuffer(o.__webglMorphNormalsBuffers[s]);
                        delete o.__webglMorphNormalsBuffers
                    }
                    Ht(o)
                }
                delete Ct[e.id]
            } else Ht(e)
        }
        De = ""
    }, wt = function (e) {
        if (e.image && e.image.__webglTextureCube)Ce.deleteTexture(e.image.__webglTextureCube), delete e.image.__webglTextureCube; else {
            if (void 0 === e.__webglInit)return;
            Ce.deleteTexture(e.__webglTexture), delete e.__webglTexture, delete e.__webglInit
        }
    }, St = function (e) {
        if (e && void 0 !== e.__webglTexture) {
            if (Ce.deleteTexture(e.__webglTexture), delete e.__webglTexture, e instanceof THREE.WebGLRenderTargetCube)for (var t = 0; 6 > t; t++)Ce.deleteFramebuffer(e.__webglFramebuffer[t]), Ce.deleteRenderbuffer(e.__webglRenderbuffer[t]); else Ce.deleteFramebuffer(e.__webglFramebuffer), Ce.deleteRenderbuffer(e.__webglRenderbuffer);
            delete e.__webglFramebuffer, delete e.__webglRenderbuffer
        }
    }, At = function (e) {
        var t = e.program.program;
        if (void 0 !== t) {
            e.program = void 0;
            var r, i, n, a = !1;
            for (r = 0, i = Be.length; i > r; r++)if (n = Be[r], n.program === t) {
                n.usedTimes--, 0 === n.usedTimes && (a = !0);
                break
            }
            if (a === !0) {
                var o = [];
                for (r = 0, i = Be.length; i > r; r++)n = Be[r], n.program !== t && o.push(n);
                Be = o, Ce.deleteProgram(t), Fe.info.memory.programs--
            }
        }
    };
    this.renderBufferImmediate = function (e, t, r) {
        if ($e.initAttributes(), e.hasPositions && !e.__webglVertexBuffer && (e.__webglVertexBuffer = Ce.createBuffer()), e.hasNormals && !e.__webglNormalBuffer && (e.__webglNormalBuffer = Ce.createBuffer()), e.hasUvs && !e.__webglUvBuffer && (e.__webglUvBuffer = Ce.createBuffer()), e.hasColors && !e.__webglColorBuffer && (e.__webglColorBuffer = Ce.createBuffer()), e.hasPositions && (Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglVertexBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, e.positionArray, Ce.DYNAMIC_DRAW), $e.enableAttribute(t.attributes.position), Ce.vertexAttribPointer(t.attributes.position, 3, Ce.FLOAT, !1, 0, 0)), e.hasNormals) {
            if (Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglNormalBuffer), r instanceof THREE.MeshPhongMaterial == !1 && r.shading === THREE.FlatShading) {
                var i, n, a, o, s, h, l, u, c, E, f, d, p, m, T = 3 * e.count;
                for (m = 0; T > m; m += 9)p = e.normalArray, o = p[m], l = p[m + 1], E = p[m + 2], s = p[m + 3], u = p[m + 4], f = p[m + 5], h = p[m + 6], c = p[m + 7], d = p[m + 8], i = (o + s + h) / 3, n = (l + u + c) / 3, a = (E + f + d) / 3, p[m] = i, p[m + 1] = n, p[m + 2] = a, p[m + 3] = i, p[m + 4] = n, p[m + 5] = a, p[m + 6] = i, p[m + 7] = n, p[m + 8] = a
            }
            Ce.bufferData(Ce.ARRAY_BUFFER, e.normalArray, Ce.DYNAMIC_DRAW), $e.enableAttribute(t.attributes.normal), Ce.vertexAttribPointer(t.attributes.normal, 3, Ce.FLOAT, !1, 0, 0)
        }
        e.hasUvs && r.map && (Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglUvBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, e.uvArray, Ce.DYNAMIC_DRAW), $e.enableAttribute(t.attributes.uv), Ce.vertexAttribPointer(t.attributes.uv, 2, Ce.FLOAT, !1, 0, 0)), e.hasColors && r.vertexColors !== THREE.NoColors && (Ce.bindBuffer(Ce.ARRAY_BUFFER, e.__webglColorBuffer), Ce.bufferData(Ce.ARRAY_BUFFER, e.colorArray, Ce.DYNAMIC_DRAW), $e.enableAttribute(t.attributes.color), Ce.vertexAttribPointer(t.attributes.color, 3, Ce.FLOAT, !1, 0, 0)), $e.disableUnusedAttributes(), Ce.drawArrays(Ce.TRIANGLES, 0, e.count), e.count = 0
    }, this.renderBufferDirect = function (e, t, r, i, n, a) {
        if (i.visible !== !1) {
            S(a);
            var o = P(e, t, r, i, a), s = !1, h = i.wireframe ? 1 : 0, l = "direct_" + n.id + "_" + o.id + "_" + h;
            if (l !== De && (De = l, s = !0), s && $e.initAttributes(), a instanceof THREE.Mesh) {
                var u = i.wireframe === !0 ? Ce.LINES : Ce.TRIANGLES, c = n.attributes.index;
                if (c) {
                    var E, d;
                    c.array instanceof Uint32Array && et.get("OES_element_index_uint") ? (E = Ce.UNSIGNED_INT, d = 4) : (E = Ce.UNSIGNED_SHORT, d = 2);
                    var p = n.offsets;
                    if (0 === p.length)s && (f(i, o, n, 0), Ce.bindBuffer(Ce.ELEMENT_ARRAY_BUFFER, c.buffer)), Ce.drawElements(u, c.array.length, E, 0), Fe.info.render.calls++, Fe.info.render.vertices += c.array.length, Fe.info.render.faces += c.array.length / 3; else {
                        s = !0;
                        for (var m = 0, T = p.length; T > m; m++) {
                            var g = p[m].index;
                            s && (f(i, o, n, g), Ce.bindBuffer(Ce.ELEMENT_ARRAY_BUFFER, c.buffer)), Ce.drawElements(u, p[m].count, E, p[m].start * d), Fe.info.render.calls++, Fe.info.render.vertices += p[m].count, Fe.info.render.faces += p[m].count / 3
                        }
                    }
                } else {
                    s && f(i, o, n, 0);
                    var v = n.attributes.position;
                    Ce.drawArrays(u, 0, v.array.length / v.itemSize), Fe.info.render.calls++, Fe.info.render.vertices += v.array.length / v.itemSize, Fe.info.render.faces += v.array.length / (3 * v.itemSize)
                }
            } else if (a instanceof THREE.PointCloud) {
                var u = Ce.POINTS, c = n.attributes.index;
                if (c) {
                    var E, d;
                    c.array instanceof Uint32Array && et.get("OES_element_index_uint") ? (E = Ce.UNSIGNED_INT, d = 4) : (E = Ce.UNSIGNED_SHORT, d = 2);
                    var p = n.offsets;
                    if (0 === p.length)s && (f(i, o, n, 0), Ce.bindBuffer(Ce.ELEMENT_ARRAY_BUFFER, c.buffer)), Ce.drawElements(u, c.array.length, E, 0), Fe.info.render.calls++, Fe.info.render.points += c.array.length; else {
                        p.length > 1 && (s = !0);
                        for (var m = 0, T = p.length; T > m; m++) {
                            var g = p[m].index;
                            s && (f(i, o, n, g), Ce.bindBuffer(Ce.ELEMENT_ARRAY_BUFFER, c.buffer)), Ce.drawElements(u, p[m].count, E, p[m].start * d), Fe.info.render.calls++, Fe.info.render.points += p[m].count
                        }
                    }
                } else {
                    s && f(i, o, n, 0);
                    var v = n.attributes.position, p = n.offsets;
                    if (0 === p.length)Ce.drawArrays(u, 0, v.array.length / 3), Fe.info.render.calls++, Fe.info.render.points += v.array.length / 3; else for (var m = 0, T = p.length; T > m; m++)Ce.drawArrays(u, p[m].index, p[m].count), Fe.info.render.calls++, Fe.info.render.points += p[m].count
                }
            } else if (a instanceof THREE.Line) {
                var u = a.mode === THREE.LineStrip ? Ce.LINE_STRIP : Ce.LINES;
                $e.setLineWidth(i.linewidth * Ee);
                var c = n.attributes.index;
                if (c) {
                    var E, d;
                    c.array instanceof Uint32Array ? (E = Ce.UNSIGNED_INT, d = 4) : (E = Ce.UNSIGNED_SHORT, d = 2);
                    var p = n.offsets;
                    if (0 === p.length)s && (f(i, o, n, 0), Ce.bindBuffer(Ce.ELEMENT_ARRAY_BUFFER, c.buffer)), Ce.drawElements(u, c.array.length, E, 0), Fe.info.render.calls++, Fe.info.render.vertices += c.array.length; else {
                        p.length > 1 && (s = !0);
                        for (var m = 0, T = p.length; T > m; m++) {
                            var g = p[m].index;
                            s && (f(i, o, n, g), Ce.bindBuffer(Ce.ELEMENT_ARRAY_BUFFER, c.buffer)), Ce.drawElements(u, p[m].count, E, p[m].start * d), Fe.info.render.calls++, Fe.info.render.vertices += p[m].count
                        }
                    }
                } else {
                    s && f(i, o, n, 0);
                    var v = n.attributes.position, p = n.offsets;
                    if (0 === p.length)Ce.drawArrays(u, 0, v.array.length / 3), Fe.info.render.calls++, Fe.info.render.vertices += v.array.length / 3; else for (var m = 0, T = p.length; T > m; m++)Ce.drawArrays(u, p[m].index, p[m].count), Fe.info.render.calls++, Fe.info.render.vertices += p[m].count
                }
            }
        }
    }, this.renderBuffer = function (e, t, r, i, n, a) {
        if (i.visible !== !1) {
            S(a);
            var o = P(e, t, r, i, a), s = o.attributes, h = !1, l = i.wireframe ? 1 : 0, u = n.id + "_" + o.id + "_" + l;
            if (u !== De && (De = u, h = !0), h && $e.initAttributes(), !i.morphTargets && s.position >= 0 ? h && (Ce.bindBuffer(Ce.ARRAY_BUFFER, n.__webglVertexBuffer), $e.enableAttribute(s.position), Ce.vertexAttribPointer(s.position, 3, Ce.FLOAT, !1, 0, 0)) : a.morphTargetBase && d(i, n, a), h) {
                if (n.__webglCustomAttributesList)for (var c = 0, E = n.__webglCustomAttributesList.length; E > c; c++) {
                    var f = n.__webglCustomAttributesList[c];
                    s[f.buffer.belongsToAttribute] >= 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, f.buffer), $e.enableAttribute(s[f.buffer.belongsToAttribute]), Ce.vertexAttribPointer(s[f.buffer.belongsToAttribute], f.size, Ce.FLOAT, !1, 0, 0))
                }
                s.color >= 0 && (a.geometry.colors.length > 0 || a.geometry.faces.length > 0 ? (Ce.bindBuffer(Ce.ARRAY_BUFFER, n.__webglColorBuffer), $e.enableAttribute(s.color), Ce.vertexAttribPointer(s.color, 3, Ce.FLOAT, !1, 0, 0)) : void 0 !== i.defaultAttributeValues && Ce.vertexAttrib3fv(s.color, i.defaultAttributeValues.color)), s.normal >= 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, n.__webglNormalBuffer), $e.enableAttribute(s.normal), Ce.vertexAttribPointer(s.normal, 3, Ce.FLOAT, !1, 0, 0)), s.tangent >= 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, n.__webglTangentBuffer), $e.enableAttribute(s.tangent), Ce.vertexAttribPointer(s.tangent, 4, Ce.FLOAT, !1, 0, 0)), s.uv >= 0 && (a.geometry.faceVertexUvs[0] ? (Ce.bindBuffer(Ce.ARRAY_BUFFER, n.__webglUVBuffer), $e.enableAttribute(s.uv), Ce.vertexAttribPointer(s.uv, 2, Ce.FLOAT, !1, 0, 0)) : void 0 !== i.defaultAttributeValues && Ce.vertexAttrib2fv(s.uv, i.defaultAttributeValues.uv)), s.uv2 >= 0 && (a.geometry.faceVertexUvs[1] ? (Ce.bindBuffer(Ce.ARRAY_BUFFER, n.__webglUV2Buffer), $e.enableAttribute(s.uv2), Ce.vertexAttribPointer(s.uv2, 2, Ce.FLOAT, !1, 0, 0)) : void 0 !== i.defaultAttributeValues && Ce.vertexAttrib2fv(s.uv2, i.defaultAttributeValues.uv2)), i.skinning && s.skinIndex >= 0 && s.skinWeight >= 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, n.__webglSkinIndicesBuffer), $e.enableAttribute(s.skinIndex), Ce.vertexAttribPointer(s.skinIndex, 4, Ce.FLOAT, !1, 0, 0), Ce.bindBuffer(Ce.ARRAY_BUFFER, n.__webglSkinWeightsBuffer), $e.enableAttribute(s.skinWeight), Ce.vertexAttribPointer(s.skinWeight, 4, Ce.FLOAT, !1, 0, 0)), s.lineDistance >= 0 && (Ce.bindBuffer(Ce.ARRAY_BUFFER, n.__webglLineDistanceBuffer), $e.enableAttribute(s.lineDistance), Ce.vertexAttribPointer(s.lineDistance, 1, Ce.FLOAT, !1, 0, 0))
            }
            if ($e.disableUnusedAttributes(), a instanceof THREE.Mesh) {
                var p = n.__typeArray === Uint32Array ? Ce.UNSIGNED_INT : Ce.UNSIGNED_SHORT;
                i.wireframe ? ($e.setLineWidth(i.wireframeLinewidth * Ee), h && Ce.bindBuffer(Ce.ELEMENT_ARRAY_BUFFER, n.__webglLineBuffer), Ce.drawElements(Ce.LINES, n.__webglLineCount, p, 0)) : (h && Ce.bindBuffer(Ce.ELEMENT_ARRAY_BUFFER, n.__webglFaceBuffer), Ce.drawElements(Ce.TRIANGLES, n.__webglFaceCount, p, 0)), Fe.info.render.calls++, Fe.info.render.vertices += n.__webglFaceCount, Fe.info.render.faces += n.__webglFaceCount / 3
            } else if (a instanceof THREE.Line) {
                var m = a.mode === THREE.LineStrip ? Ce.LINE_STRIP : Ce.LINES;
                $e.setLineWidth(i.linewidth * Ee), Ce.drawArrays(m, 0, n.__webglLineCount), Fe.info.render.calls++
            } else a instanceof THREE.PointCloud && (Ce.drawArrays(Ce.POINTS, 0, n.__webglParticleCount), Fe.info.render.calls++, Fe.info.render.points += n.__webglParticleCount)
        }
    }, this.render = function (e, t, r, i) {
        if (t instanceof THREE.Camera == !1)return void THREE.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        var n = e.fog;
        De = "", Pe = -1, Ne = null, Ze = !0, e.autoUpdate === !0 && e.updateMatrixWorld(), void 0 === t.parent && t.updateMatrixWorld(), e.traverse(function (e) {
            e instanceof THREE.SkinnedMesh && e.skeleton.update()
        }), t.matrixWorldInverse.getInverse(t.matrixWorld), Xe.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), je.setFromMatrix(Xe), _e.length = 0, Me.length = 0, we.length = 0, Se.length = 0, Ae.length = 0, g(e), Fe.sortObjects === !0 && (Me.sort(p), we.sort(m)), Tt.render(e, t), Fe.info.render.calls = 0, Fe.info.render.vertices = 0, Fe.info.render.faces = 0, Fe.info.render.points = 0, this.setRenderTarget(r), (this.autoClear || i) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
        for (var a = 0, o = He.length; o > a; a++) {
            var s = He[a], h = s.object;
            h.visible && (Z(h, t), y(s))
        }
        if (e.overrideMaterial) {
            var l = e.overrideMaterial;
            L(l), v(Me, t, _e, n, l), v(we, t, _e, n, l), R(He, "", t, _e, n, l)
        } else $e.setBlending(THREE.NoBlending), v(Me, t, _e, n, null), R(He, "opaque", t, _e, n, null), v(we, t, _e, n, null), R(He, "transparent", t, _e, n, null);
        gt.render(e, t), vt.render(e, t, Ge, We), r && r.generateMipmaps && r.minFilter !== THREE.NearestFilter && r.minFilter !== THREE.LinearFilter && ne(r), $e.setDepthTest(!0), $e.setDepthWrite(!0), $e.setColorWrite(!0)
    }, this.renderImmediateObject = function (e, t, r, i, n) {
        var a = P(e, t, r, i, n);
        De = "", Fe.setMaterialFaces(i), n.immediateRenderCallback ? n.immediateRenderCallback(a, Ce, je) : n.render(function (e) {
            Fe.renderBufferImmediate(e, a, i)
        })
    };
    var Ct = {}, Ft = 0, Bt = {
        MeshDepthMaterial: "depth",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointCloudMaterial: "particle_basic"
    };
    this.setFaceCulling = function (e, t) {
        e === THREE.CullFaceNone ? Ce.disable(Ce.CULL_FACE) : (t === THREE.FrontFaceDirectionCW ? Ce.frontFace(Ce.CW) : Ce.frontFace(Ce.CCW), e === THREE.CullFaceBack ? Ce.cullFace(Ce.BACK) : e === THREE.CullFaceFront ? Ce.cullFace(Ce.FRONT) : Ce.cullFace(Ce.FRONT_AND_BACK), Ce.enable(Ce.CULL_FACE))
    }, this.setMaterialFaces = function (e) {
        $e.setDoubleSided(e.side === THREE.DoubleSide), $e.setFlipSided(e.side === THREE.BackSide)
    }, this.uploadTexture = function (e) {
        void 0 === e.__webglInit && (e.__webglInit = !0, e.addEventListener("dispose", xt), e.__webglTexture = Ce.createTexture(), Fe.info.memory.textures++), Ce.bindTexture(Ce.TEXTURE_2D, e.__webglTexture), Ce.pixelStorei(Ce.UNPACK_FLIP_Y_WEBGL, e.flipY), Ce.pixelStorei(Ce.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), Ce.pixelStorei(Ce.UNPACK_ALIGNMENT, e.unpackAlignment), e.image = $(e.image, ot);
        var t = e.image, r = THREE.Math.isPowerOfTwo(t.width) && THREE.Math.isPowerOfTwo(t.height), i = oe(e.format), n = oe(e.type);
        J(Ce.TEXTURE_2D, e, r);
        var a, o = e.mipmaps;
        if (e instanceof THREE.DataTexture)if (o.length > 0 && r) {
            for (var s = 0, h = o.length; h > s; s++)a = o[s], Ce.texImage2D(Ce.TEXTURE_2D, s, i, a.width, a.height, 0, i, n, a.data);
            e.generateMipmaps = !1
        } else Ce.texImage2D(Ce.TEXTURE_2D, 0, i, t.width, t.height, 0, i, n, t.data); else if (e instanceof THREE.CompressedTexture)for (var s = 0, h = o.length; h > s; s++)a = o[s], e.format !== THREE.RGBAFormat && e.format !== THREE.RGBFormat ? dt().indexOf(i) > -1 ? Ce.compressedTexImage2D(Ce.TEXTURE_2D, s, i, a.width, a.height, 0, a.data) : THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ce.texImage2D(Ce.TEXTURE_2D, s, i, a.width, a.height, 0, i, n, a.data); else if (o.length > 0 && r) {
            for (var s = 0, h = o.length; h > s; s++)a = o[s], Ce.texImage2D(Ce.TEXTURE_2D, s, i, i, n, a);
            e.generateMipmaps = !1
        } else Ce.texImage2D(Ce.TEXTURE_2D, 0, i, i, n, e.image);
        e.generateMipmaps && r && Ce.generateMipmap(Ce.TEXTURE_2D), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
    }, this.setTexture = function (e, t) {
        Ce.activeTexture(Ce.TEXTURE0 + t), e.needsUpdate ? Fe.uploadTexture(e) : Ce.bindTexture(Ce.TEXTURE_2D, e.__webglTexture)
    }, this.setRenderTarget = function (e) {
        var t = e instanceof THREE.WebGLRenderTargetCube;
        if (e && void 0 === e.__webglFramebuffer) {
            void 0 === e.depthBuffer && (e.depthBuffer = !0), void 0 === e.stencilBuffer && (e.stencilBuffer = !0), e.addEventListener("dispose", _t), e.__webglTexture = Ce.createTexture(), Fe.info.memory.textures++;
            var r = THREE.Math.isPowerOfTwo(e.width) && THREE.Math.isPowerOfTwo(e.height), i = oe(e.format), n = oe(e.type);
            if (t) {
                e.__webglFramebuffer = [], e.__webglRenderbuffer = [], Ce.bindTexture(Ce.TEXTURE_CUBE_MAP, e.__webglTexture), J(Ce.TEXTURE_CUBE_MAP, e, r);
                for (var a = 0; 6 > a; a++)e.__webglFramebuffer[a] = Ce.createFramebuffer(), e.__webglRenderbuffer[a] = Ce.createRenderbuffer(), Ce.texImage2D(Ce.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, i, e.width, e.height, 0, i, n, null), re(e.__webglFramebuffer[a], e, Ce.TEXTURE_CUBE_MAP_POSITIVE_X + a), ie(e.__webglRenderbuffer[a], e);
                r && Ce.generateMipmap(Ce.TEXTURE_CUBE_MAP)
            } else e.__webglFramebuffer = Ce.createFramebuffer(), e.shareDepthFrom ? e.__webglRenderbuffer = e.shareDepthFrom.__webglRenderbuffer : e.__webglRenderbuffer = Ce.createRenderbuffer(), Ce.bindTexture(Ce.TEXTURE_2D, e.__webglTexture), J(Ce.TEXTURE_2D, e, r), Ce.texImage2D(Ce.TEXTURE_2D, 0, i, e.width, e.height, 0, i, n, null), re(e.__webglFramebuffer, e, Ce.TEXTURE_2D), e.shareDepthFrom ? e.depthBuffer && !e.stencilBuffer ? Ce.framebufferRenderbuffer(Ce.FRAMEBUFFER, Ce.DEPTH_ATTACHMENT, Ce.RENDERBUFFER, e.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && Ce.framebufferRenderbuffer(Ce.FRAMEBUFFER, Ce.DEPTH_STENCIL_ATTACHMENT, Ce.RENDERBUFFER, e.__webglRenderbuffer) : ie(e.__webglRenderbuffer, e), r && Ce.generateMipmap(Ce.TEXTURE_2D);
            t ? Ce.bindTexture(Ce.TEXTURE_CUBE_MAP, null) : Ce.bindTexture(Ce.TEXTURE_2D, null), Ce.bindRenderbuffer(Ce.RENDERBUFFER, null), Ce.bindFramebuffer(Ce.FRAMEBUFFER, null)
        }
        var o, s, h, l, u;
        e ? (o = t ? e.__webglFramebuffer[e.activeCubeFace] : e.__webglFramebuffer, s = e.width, h = e.height, l = 0, u = 0) : (o = null, s = Oe, h = Ie, l = ke, u = Ve), o !== Le && (Ce.bindFramebuffer(Ce.FRAMEBUFFER, o), Ce.viewport(l, u, s, h), Le = o), Ge = s, We = h
    }, this.readRenderTargetPixels = function (e, t, r, i, n, a) {
        if (!(e instanceof THREE.WebGLRenderTarget))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        if (e.__webglFramebuffer) {
            if (e.format !== THREE.RGBAFormat)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");
            var o = !1;
            e.__webglFramebuffer !== Le && (Ce.bindFramebuffer(Ce.FRAMEBUFFER, e.__webglFramebuffer), o = !0), Ce.checkFramebufferStatus(Ce.FRAMEBUFFER) === Ce.FRAMEBUFFER_COMPLETE ? Ce.readPixels(t, r, i, n, Ce.RGBA, Ce.UNSIGNED_BYTE, a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."), o && Ce.bindFramebuffer(Ce.FRAMEBUFFER, Le)
        }
    }, this.initMaterial = function () {
        THREE.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
    }, this.addPrePlugin = function () {
        THREE.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
    }, this.addPostPlugin = function () {
        THREE.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
    }, this.updateShadowMap = function () {
        THREE.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
    }
},THREE.WebGLRenderTarget = function (e, t, r) {
    this.width = e, this.height = t, r = r || {}, this.wrapS = void 0 !== r.wrapS ? r.wrapS : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== r.wrapT ? r.wrapT : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== r.magFilter ? r.magFilter : THREE.LinearFilter, this.minFilter = void 0 !== r.minFilter ? r.minFilter : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.format = void 0 !== r.format ? r.format : THREE.RGBAFormat, this.type = void 0 !== r.type ? r.type : THREE.UnsignedByteType, this.depthBuffer = void 0 !== r.depthBuffer ? r.depthBuffer : !0, this.stencilBuffer = void 0 !== r.stencilBuffer ? r.stencilBuffer : !0, this.generateMipmaps = !0, this.shareDepthFrom = void 0 !== r.shareDepthFrom ? r.shareDepthFrom : null
},THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget, setSize: function (e, t) {
        this.width = e, this.height = t
    }, clone: function () {
        var e = new THREE.WebGLRenderTarget(this.width, this.height);
        return e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.format = this.format, e.type = this.type, e.depthBuffer = this.depthBuffer, e.stencilBuffer = this.stencilBuffer, e.generateMipmaps = this.generateMipmaps, e.shareDepthFrom = this.shareDepthFrom, e
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),THREE.WebGLRenderTargetCube = function (e, t, r) {
    THREE.WebGLRenderTarget.call(this, e, t, r), this.activeCubeFace = 0
},THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype),THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube,THREE.WebGLExtensions = function (e) {
    var t = {};
    this.get = function (r) {
        if (void 0 !== t[r])return t[r];
        var i;
        switch (r) {
            case"EXT_texture_filter_anisotropic":
                i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case"WEBGL_compressed_texture_s3tc":
                i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case"WEBGL_compressed_texture_pvrtc":
                i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                i = e.getExtension(r)
        }
        return null === i && THREE.warn("THREE.WebGLRenderer: " + r + " extension not supported."), t[r] = i, i
    }
},THREE.WebGLProgram = function () {
    var e = 0, t = function (e) {
        var t, r, i = [];
        for (var n in e)t = e[n], t !== !1 && (r = "#define " + n + " " + t, i.push(r));
        return i.join("\n")
    }, r = function (e, t, r) {
        for (var i = {}, n = 0, a = r.length; a > n; n++) {
            var o = r[n];
            i[o] = e.getUniformLocation(t, o)
        }
        return i
    }, i = function (e, t, r) {
        for (var i = {}, n = 0, a = r.length; a > n; n++) {
            var o = r[n];
            i[o] = e.getAttribLocation(t, o)
        }
        return i
    };
    return function (n, a, o, s) {
        var h = n, l = h.context, u = o.defines, c = o.__webglShader.uniforms, E = o.attributes, f = o.__webglShader.vertexShader, d = o.__webglShader.fragmentShader, p = o.index0AttributeName;
        void 0 === p && s.morphTargets === !0 && (p = "position");
        var m = "SHADOWMAP_TYPE_BASIC";
        s.shadowMapType === THREE.PCFShadowMap ? m = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === THREE.PCFSoftShadowMap && (m = "SHADOWMAP_TYPE_PCF_SOFT");
        var T = "ENVMAP_TYPE_CUBE", g = "ENVMAP_MODE_REFLECTION", v = "ENVMAP_BLENDING_MULTIPLY";
        if (s.envMap) {
            switch (o.envMap.mapping) {
                case THREE.CubeReflectionMapping:
                case THREE.CubeRefractionMapping:
                    T = "ENVMAP_TYPE_CUBE";
                    break;
                case THREE.EquirectangularReflectionMapping:
                case THREE.EquirectangularRefractionMapping:
                    T = "ENVMAP_TYPE_EQUIREC";
                    break;
                case THREE.SphericalReflectionMapping:
                    T = "ENVMAP_TYPE_SPHERE"
            }
            switch (o.envMap.mapping) {
                case THREE.CubeRefractionMapping:
                case THREE.EquirectangularRefractionMapping:
                    g = "ENVMAP_MODE_REFRACTION"
            }
            switch (o.combine) {
                case THREE.MultiplyOperation:
                    v = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case THREE.MixOperation:
                    v = "ENVMAP_BLENDING_MIX";
                    break;
                case THREE.AddOperation:
                    v = "ENVMAP_BLENDING_ADD"
            }
        }
        var R, y, x = n.gammaFactor > 0 ? n.gammaFactor : 1, _ = t(u), b = l.createProgram();
        o instanceof THREE.RawShaderMaterial ? (R = "", y = "") : (R = ["precision " + s.precision + " float;", "precision " + s.precision + " int;", _, s.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", h.gammaInput ? "#define GAMMA_INPUT" : "", h.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + x, "#define MAX_DIR_LIGHTS " + s.maxDirLights, "#define MAX_POINT_LIGHTS " + s.maxPointLights, "#define MAX_SPOT_LIGHTS " + s.maxSpotLights, "#define MAX_HEMI_LIGHTS " + s.maxHemiLights, "#define MAX_SHADOWS " + s.maxShadows, "#define MAX_BONES " + s.maxBones, s.map ? "#define USE_MAP" : "", s.envMap ? "#define USE_ENVMAP" : "", s.envMap ? "#define " + g : "", s.lightMap ? "#define USE_LIGHTMAP" : "", s.bumpMap ? "#define USE_BUMPMAP" : "", s.normalMap ? "#define USE_NORMALMAP" : "", s.specularMap ? "#define USE_SPECULARMAP" : "", s.alphaMap ? "#define USE_ALPHAMAP" : "", s.vertexColors ? "#define USE_COLOR" : "", s.flatShading ? "#define FLAT_SHADED" : "", s.skinning ? "#define USE_SKINNING" : "", s.useVertexTexture ? "#define BONE_TEXTURE" : "", s.morphTargets ? "#define USE_MORPHTARGETS" : "", s.morphNormals ? "#define USE_MORPHNORMALS" : "", s.wrapAround ? "#define WRAP_AROUND" : "", s.doubleSided ? "#define DOUBLE_SIDED" : "", s.flipSided ? "#define FLIP_SIDED" : "", s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", s.shadowMapEnabled ? "#define " + m : "", s.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", s.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", s.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "attribute vec2 uv2;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", ""].join("\n"), y = ["precision " + s.precision + " float;", "precision " + s.precision + " int;", s.bumpMap || s.normalMap || s.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", _, "#define MAX_DIR_LIGHTS " + s.maxDirLights, "#define MAX_POINT_LIGHTS " + s.maxPointLights, "#define MAX_SPOT_LIGHTS " + s.maxSpotLights, "#define MAX_HEMI_LIGHTS " + s.maxHemiLights, "#define MAX_SHADOWS " + s.maxShadows, s.alphaTest ? "#define ALPHATEST " + s.alphaTest : "", h.gammaInput ? "#define GAMMA_INPUT" : "", h.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + x, s.useFog && s.fog ? "#define USE_FOG" : "", s.useFog && s.fogExp ? "#define FOG_EXP2" : "", s.map ? "#define USE_MAP" : "", s.envMap ? "#define USE_ENVMAP" : "", s.envMap ? "#define " + T : "", s.envMap ? "#define " + g : "", s.envMap ? "#define " + v : "", s.lightMap ? "#define USE_LIGHTMAP" : "", s.bumpMap ? "#define USE_BUMPMAP" : "", s.normalMap ? "#define USE_NORMALMAP" : "", s.specularMap ? "#define USE_SPECULARMAP" : "", s.alphaMap ? "#define USE_ALPHAMAP" : "", s.vertexColors ? "#define USE_COLOR" : "", s.flatShading ? "#define FLAT_SHADED" : "", s.metal ? "#define METAL" : "", s.wrapAround ? "#define WRAP_AROUND" : "", s.doubleSided ? "#define DOUBLE_SIDED" : "", s.flipSided ? "#define FLIP_SIDED" : "", s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", s.shadowMapEnabled ? "#define " + m : "", s.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", s.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", ""].join("\n"));
        var H = new THREE.WebGLShader(l, l.VERTEX_SHADER, R + f), M = new THREE.WebGLShader(l, l.FRAGMENT_SHADER, y + d);
        l.attachShader(b, H), l.attachShader(b, M), void 0 !== p && l.bindAttribLocation(b, 0, p), l.linkProgram(b);
        var w = l.getProgramInfoLog(b);
        l.getProgramParameter(b, l.LINK_STATUS) === !1 && THREE.error("THREE.WebGLProgram: shader error: " + l.getError(), "gl.VALIDATE_STATUS", l.getProgramParameter(b, l.VALIDATE_STATUS), "gl.getPRogramInfoLog", w), "" !== w && THREE.warn("THREE.WebGLProgram: gl.getProgramInfoLog()" + w), l.deleteShader(H), l.deleteShader(M);
        var S = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "modelMatrix", "cameraPosition", "morphTargetInfluences", "bindMatrix", "bindMatrixInverse"];
        s.useVertexTexture ? (S.push("boneTexture"), S.push("boneTextureWidth"), S.push("boneTextureHeight")) : S.push("boneGlobalMatrices"), s.logarithmicDepthBuffer && S.push("logDepthBufFC");
        for (var A in c)S.push(A);
        this.uniforms = r(l, b, S), S = ["position", "normal", "uv", "uv2", "tangent", "color", "skinIndex", "skinWeight", "lineDistance"];
        for (var C = 0; C < s.maxMorphTargets; C++)S.push("morphTarget" + C);
        for (var C = 0; C < s.maxMorphNormals; C++)S.push("morphNormal" + C);
        for (var F in E)S.push(F);
        return this.attributes = i(l, b, S), this.attributesKeys = Object.keys(this.attributes), this.id = e++, this.code = a, this.usedTimes = 1,
            this.program = b, this.vertexShader = H, this.fragmentShader = M, this
    }
}(),THREE.WebGLShader = function () {
    var e = function (e) {
        for (var t = e.split("\n"), r = 0; r < t.length; r++)t[r] = r + 1 + ": " + t[r];
        return t.join("\n")
    };
    return function (t, r, i) {
        var n = t.createShader(r);
        return t.shaderSource(n, i), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) === !1 && THREE.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && THREE.warn("THREE.WebGLShader: gl.getShaderInfoLog()", t.getShaderInfoLog(n), e(i)), n
    }
}(),THREE.WebGLState = function (e, t) {
    var r = new Uint8Array(16), i = new Uint8Array(16), n = null, a = null, o = null, s = null, h = null, l = null, u = null, c = null, E = null, f = null, d = null, p = null, m = null, T = null, g = null, v = null;
    this.initAttributes = function () {
        for (var e = 0, t = r.length; t > e; e++)r[e] = 0
    }, this.enableAttribute = function (t) {
        r[t] = 1, 0 === i[t] && (e.enableVertexAttribArray(t), i[t] = 1)
    }, this.disableUnusedAttributes = function () {
        for (var t = 0, n = i.length; n > t; t++)i[t] !== r[t] && (e.disableVertexAttribArray(t), i[t] = 0)
    }, this.setBlending = function (r, i, c, E, f, d, p) {
        r !== n && (r === THREE.NoBlending ? e.disable(e.BLEND) : r === THREE.AdditiveBlending ? (e.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)) : r === THREE.SubtractiveBlending ? (e.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : r === THREE.MultiplyBlending ? (e.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR)) : r === THREE.CustomBlending ? e.enable(e.BLEND) : (e.enable(e.BLEND), e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)), n = r), r === THREE.CustomBlending ? (f = f || i, d = d || c, p = p || E, (i !== a || f !== h) && (e.blendEquationSeparate(t(i), t(f)), a = i, h = f), (c !== o || E !== s || d !== l || p !== u) && (e.blendFuncSeparate(t(c), t(E), t(d), t(p)), o = c, s = E, l = d, u = p)) : (a = null, o = null, s = null, h = null, l = null, u = null)
    }, this.setDepthTest = function (t) {
        c !== t && (t ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST), c = t)
    }, this.setDepthWrite = function (t) {
        E !== t && (e.depthMask(t), E = t)
    }, this.setColorWrite = function (t) {
        f !== t && (e.colorMask(t, t, t, t), f = t)
    }, this.setDoubleSided = function (t) {
        d !== t && (t ? e.disable(e.CULL_FACE) : e.enable(e.CULL_FACE), d = t)
    }, this.setFlipSided = function (t) {
        p !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), p = t)
    }, this.setLineWidth = function (t) {
        t !== m && (e.lineWidth(t), m = t)
    }, this.setPolygonOffset = function (t, r, i) {
        T !== t && (t ? e.enable(e.POLYGON_OFFSET_FILL) : e.disable(e.POLYGON_OFFSET_FILL), T = t), !t || g === r && v === i || (e.polygonOffset(r, i), g = r, v = i)
    }, this.reset = function () {
        for (var e = 0; e < i.length; e++)i[e] = 0;
        n = null, c = null, E = null, f = null, d = null, p = null
    }
},THREE.LensFlarePlugin = function (e, t) {
    function r(t) {
        var r = c.createProgram(), i = c.createShader(c.FRAGMENT_SHADER), n = c.createShader(c.VERTEX_SHADER), a = "precision " + e.getPrecision() + " float;\n";
        return c.shaderSource(i, a + t.fragmentShader), c.shaderSource(n, a + t.vertexShader), c.compileShader(i), c.compileShader(n), c.attachShader(r, i), c.attachShader(r, n), c.linkProgram(r), r
    }

    var i, n, a, o, s, h, l, u, c = e.context, E = function () {
        var e = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]), t = new Uint16Array([0, 1, 2, 0, 2, 3]);
        i = c.createBuffer(), n = c.createBuffer(), c.bindBuffer(c.ARRAY_BUFFER, i), c.bufferData(c.ARRAY_BUFFER, e, c.STATIC_DRAW), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, n), c.bufferData(c.ELEMENT_ARRAY_BUFFER, t, c.STATIC_DRAW), l = c.createTexture(), u = c.createTexture(), c.bindTexture(c.TEXTURE_2D, l), c.texImage2D(c.TEXTURE_2D, 0, c.RGB, 16, 16, 0, c.RGB, c.UNSIGNED_BYTE, null), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST), c.bindTexture(c.TEXTURE_2D, u), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, 16, 16, 0, c.RGBA, c.UNSIGNED_BYTE, null), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST), h = c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
        var E;
        E = h ? {
            vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
        } : {
            vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
            fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
        }, a = r(E), o = {
            vertex: c.getAttribLocation(a, "position"),
            uv: c.getAttribLocation(a, "uv")
        }, s = {
            renderType: c.getUniformLocation(a, "renderType"),
            map: c.getUniformLocation(a, "map"),
            occlusionMap: c.getUniformLocation(a, "occlusionMap"),
            opacity: c.getUniformLocation(a, "opacity"),
            color: c.getUniformLocation(a, "color"),
            scale: c.getUniformLocation(a, "scale"),
            rotation: c.getUniformLocation(a, "rotation"),
            screenPosition: c.getUniformLocation(a, "screenPosition")
        }
    };
    this.render = function (r, f, d, p) {
        if (0 !== t.length) {
            var m = new THREE.Vector3, T = p / d, g = .5 * d, v = .5 * p, R = 16 / p, y = new THREE.Vector2(R * T, R), x = new THREE.Vector3(1, 1, 0), _ = new THREE.Vector2(1, 1);
            void 0 === a && E(), c.useProgram(a), c.enableVertexAttribArray(o.vertex), c.enableVertexAttribArray(o.uv), c.uniform1i(s.occlusionMap, 0), c.uniform1i(s.map, 1), c.bindBuffer(c.ARRAY_BUFFER, i), c.vertexAttribPointer(o.vertex, 2, c.FLOAT, !1, 16, 0), c.vertexAttribPointer(o.uv, 2, c.FLOAT, !1, 16, 8), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, n), c.disable(c.CULL_FACE), c.depthMask(!1);
            for (var b = 0, H = t.length; H > b; b++) {
                R = 16 / p, y.set(R * T, R);
                var M = t[b];
                if (m.set(M.matrixWorld.elements[12], M.matrixWorld.elements[13], M.matrixWorld.elements[14]), m.applyMatrix4(f.matrixWorldInverse), m.applyProjection(f.projectionMatrix), x.copy(m), _.x = x.x * g + g, _.y = x.y * v + v, h || _.x > 0 && _.x < d && _.y > 0 && _.y < p) {
                    c.activeTexture(c.TEXTURE1), c.bindTexture(c.TEXTURE_2D, l), c.copyTexImage2D(c.TEXTURE_2D, 0, c.RGB, _.x - 8, _.y - 8, 16, 16, 0), c.uniform1i(s.renderType, 0), c.uniform2f(s.scale, y.x, y.y), c.uniform3f(s.screenPosition, x.x, x.y, x.z), c.disable(c.BLEND), c.enable(c.DEPTH_TEST), c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0), c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, u), c.copyTexImage2D(c.TEXTURE_2D, 0, c.RGBA, _.x - 8, _.y - 8, 16, 16, 0), c.uniform1i(s.renderType, 1), c.disable(c.DEPTH_TEST), c.activeTexture(c.TEXTURE1), c.bindTexture(c.TEXTURE_2D, l), c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0), M.positionScreen.copy(x), M.customUpdateCallback ? M.customUpdateCallback(M) : M.updateLensFlares(), c.uniform1i(s.renderType, 2), c.enable(c.BLEND);
                    for (var w = 0, S = M.lensFlares.length; S > w; w++) {
                        var A = M.lensFlares[w];
                        A.opacity > .001 && A.scale > .001 && (x.x = A.x, x.y = A.y, x.z = A.z, R = A.size * A.scale / p, y.x = R * T, y.y = R, c.uniform3f(s.screenPosition, x.x, x.y, x.z), c.uniform2f(s.scale, y.x, y.y), c.uniform1f(s.rotation, A.rotation), c.uniform1f(s.opacity, A.opacity), c.uniform3f(s.color, A.color.r, A.color.g, A.color.b), e.state.setBlending(A.blending, A.blendEquation, A.blendSrc, A.blendDst), e.setTexture(A.texture, 1), c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0))
                    }
                }
            }
            c.enable(c.CULL_FACE), c.enable(c.DEPTH_TEST), c.depthMask(!0), e.resetGLState()
        }
    }
},THREE.ShadowMapPlugin = function (e, t, r, i) {
    function n(e, t, i) {
        if (t.visible) {
            var a = r[t.id];
            if (a && t.castShadow && (t.frustumCulled === !1 || d.intersectsObject(t) === !0))for (var o = 0, s = a.length; s > o; o++) {
                var h = a[o];
                t._modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), v.push(h)
            }
            for (var o = 0, s = t.children.length; s > o; o++)n(e, t.children[o], i)
        }
    }

    function a(e, t) {
        var r = new THREE.DirectionalLight;
        r.isVirtual = !0, r.onlyShadow = !0, r.castShadow = !0, r.shadowCameraNear = e.shadowCameraNear, r.shadowCameraFar = e.shadowCameraFar, r.shadowCameraLeft = e.shadowCameraLeft, r.shadowCameraRight = e.shadowCameraRight, r.shadowCameraBottom = e.shadowCameraBottom, r.shadowCameraTop = e.shadowCameraTop, r.shadowCameraVisible = e.shadowCameraVisible, r.shadowDarkness = e.shadowDarkness, r.shadowBias = e.shadowCascadeBias[t], r.shadowMapWidth = e.shadowCascadeWidth[t], r.shadowMapHeight = e.shadowCascadeHeight[t], r.pointsWorld = [], r.pointsFrustum = [];
        for (var i = r.pointsWorld, n = r.pointsFrustum, a = 0; 8 > a; a++)i[a] = new THREE.Vector3, n[a] = new THREE.Vector3;
        var o = e.shadowCascadeNearZ[t], s = e.shadowCascadeFarZ[t];
        return n[0].set(-1, -1, o), n[1].set(1, -1, o), n[2].set(-1, 1, o), n[3].set(1, 1, o), n[4].set(-1, -1, s), n[5].set(1, -1, s), n[6].set(-1, 1, s), n[7].set(1, 1, s), r
    }

    function o(e, t) {
        var r = e.shadowCascadeArray[t];
        r.position.copy(e.position), r.target.position.copy(e.target.position), r.lookAt(r.target), r.shadowCameraVisible = e.shadowCameraVisible, r.shadowDarkness = e.shadowDarkness, r.shadowBias = e.shadowCascadeBias[t];
        var i = e.shadowCascadeNearZ[t], n = e.shadowCascadeFarZ[t], a = r.pointsFrustum;
        a[0].z = i, a[1].z = i, a[2].z = i, a[3].z = i, a[4].z = n, a[5].z = n, a[6].z = n, a[7].z = n
    }

    function s(e, t) {
        var r = t.shadowCamera, i = t.pointsFrustum, n = t.pointsWorld;
        m.set(1 / 0, 1 / 0, 1 / 0), T.set(-(1 / 0), -(1 / 0), -(1 / 0));
        for (var a = 0; 8 > a; a++) {
            var o = n[a];
            o.copy(i[a]), o.unproject(e), o.applyMatrix4(r.matrixWorldInverse), o.x < m.x && (m.x = o.x), o.x > T.x && (T.x = o.x), o.y < m.y && (m.y = o.y), o.y > T.y && (T.y = o.y), o.z < m.z && (m.z = o.z), o.z > T.z && (T.z = o.z)
        }
        r.left = m.x, r.right = T.x, r.top = T.y, r.bottom = m.y, r.updateProjectionMatrix()
    }

    function h(e) {
        return e.material instanceof THREE.MeshFaceMaterial ? e.material.materials[0] : e.material
    }

    var l, u, c, E, f = e.context, d = new THREE.Frustum, p = new THREE.Matrix4, m = new THREE.Vector3, T = new THREE.Vector3, g = new THREE.Vector3, v = [], R = THREE.ShaderLib.depthRGBA, y = THREE.UniformsUtils.clone(R.uniforms);
    l = new THREE.ShaderMaterial({
        uniforms: y,
        vertexShader: R.vertexShader,
        fragmentShader: R.fragmentShader
    }), u = new THREE.ShaderMaterial({
        uniforms: y,
        vertexShader: R.vertexShader,
        fragmentShader: R.fragmentShader,
        morphTargets: !0
    }), c = new THREE.ShaderMaterial({
        uniforms: y,
        vertexShader: R.vertexShader,
        fragmentShader: R.fragmentShader,
        skinning: !0
    }), E = new THREE.ShaderMaterial({
        uniforms: y,
        vertexShader: R.vertexShader,
        fragmentShader: R.fragmentShader,
        morphTargets: !0,
        skinning: !0
    }), l._shadowPass = !0, u._shadowPass = !0, c._shadowPass = !0, E._shadowPass = !0, this.render = function (r, m) {
        if (e.shadowMapEnabled !== !1) {
            var T, R, y, x, _, b, H, M, w, S, A, C, F, B = [], U = 0, L = null;
            for (f.clearColor(1, 1, 1, 1), f.disable(f.BLEND), f.enable(f.CULL_FACE), f.frontFace(f.CCW), e.shadowMapCullFace === THREE.CullFaceFront ? f.cullFace(f.FRONT) : f.cullFace(f.BACK), e.state.setDepthTest(!0), T = 0, R = t.length; R > T; T++)if (F = t[T], F.castShadow)if (F instanceof THREE.DirectionalLight && F.shadowCascade)for (_ = 0; _ < F.shadowCascadeCount; _++) {
                var P;
                if (F.shadowCascadeArray[_])P = F.shadowCascadeArray[_]; else {
                    P = a(F, _), P.originalCamera = m;
                    var D = new THREE.Gyroscope;
                    D.position.copy(F.shadowCascadeOffset), D.add(P), D.add(P.target), m.add(D), F.shadowCascadeArray[_] = P
                }
                o(F, _), B[U] = P, U++
            } else B[U] = F, U++;
            for (T = 0, R = B.length; R > T; T++) {
                if (F = B[T], !F.shadowMap) {
                    var N = THREE.LinearFilter;
                    e.shadowMapType === THREE.PCFSoftShadowMap && (N = THREE.NearestFilter);
                    var z = {minFilter: N, magFilter: N, format: THREE.RGBAFormat};
                    F.shadowMap = new THREE.WebGLRenderTarget(F.shadowMapWidth, F.shadowMapHeight, z), F.shadowMapSize = new THREE.Vector2(F.shadowMapWidth, F.shadowMapHeight), F.shadowMatrix = new THREE.Matrix4
                }
                if (!F.shadowCamera) {
                    if (F instanceof THREE.SpotLight)F.shadowCamera = new THREE.PerspectiveCamera(F.shadowCameraFov, F.shadowMapWidth / F.shadowMapHeight, F.shadowCameraNear, F.shadowCameraFar); else {
                        if (!(F instanceof THREE.DirectionalLight)) {
                            THREE.error("THREE.ShadowMapPlugin: Unsupported light type for shadow", F);
                            continue
                        }
                        F.shadowCamera = new THREE.OrthographicCamera(F.shadowCameraLeft, F.shadowCameraRight, F.shadowCameraTop, F.shadowCameraBottom, F.shadowCameraNear, F.shadowCameraFar)
                    }
                    r.add(F.shadowCamera), r.autoUpdate === !0 && r.updateMatrixWorld()
                }
                F.shadowCameraVisible && !F.cameraHelper && (F.cameraHelper = new THREE.CameraHelper(F.shadowCamera), r.add(F.cameraHelper)), F.isVirtual && P.originalCamera == m && s(m, F), b = F.shadowMap, H = F.shadowMatrix, M = F.shadowCamera, M.position.setFromMatrixPosition(F.matrixWorld), g.setFromMatrixPosition(F.target.matrixWorld), M.lookAt(g), M.updateMatrixWorld(), M.matrixWorldInverse.getInverse(M.matrixWorld), F.cameraHelper && (F.cameraHelper.visible = F.shadowCameraVisible), F.shadowCameraVisible && F.cameraHelper.update(), H.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), H.multiply(M.projectionMatrix), H.multiply(M.matrixWorldInverse), p.multiplyMatrices(M.projectionMatrix, M.matrixWorldInverse), d.setFromMatrix(p), e.setRenderTarget(b), e.clear(), v.length = 0, n(r, r, M);
                var k, V, O;
                for (y = 0, x = v.length; x > y; y++)A = v[y], C = A.object, w = A.buffer, k = h(C), V = void 0 !== C.geometry.morphTargets && C.geometry.morphTargets.length > 0 && k.morphTargets, O = C instanceof THREE.SkinnedMesh && k.skinning, S = C.customDepthMaterial ? C.customDepthMaterial : O ? V ? E : c : V ? u : l, e.setMaterialFaces(k), w instanceof THREE.BufferGeometry ? e.renderBufferDirect(M, t, L, S, w, C) : e.renderBuffer(M, t, L, S, w, C);
                for (y = 0, x = i.length; x > y; y++)A = i[y], C = A.object, C.visible && C.castShadow && (C._modelViewMatrix.multiplyMatrices(M.matrixWorldInverse, C.matrixWorld), e.renderImmediateObject(M, t, L, l, C))
            }
            var I = e.getClearColor(), G = e.getClearAlpha();
            f.clearColor(I.r, I.g, I.b, G), f.enable(f.BLEND), e.shadowMapCullFace === THREE.CullFaceFront && f.cullFace(f.BACK), e.resetGLState()
        }
    }
},THREE.SpritePlugin = function (e, t) {
    function r() {
        var t = u.createProgram(), r = u.createShader(u.VERTEX_SHADER), i = u.createShader(u.FRAGMENT_SHADER);
        return u.shaderSource(r, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), u.shaderSource(i, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), u.compileShader(r), u.compileShader(i), u.attachShader(t, r), u.attachShader(t, i), u.linkProgram(t), t
    }

    function i(e, t) {
        return e.z !== t.z ? t.z - e.z : t.id - e.id
    }

    var n, a, o, s, h, l, u = e.context, c = new THREE.Vector3, E = new THREE.Quaternion, f = new THREE.Vector3, d = function () {
        var e = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]), t = new Uint16Array([0, 1, 2, 0, 2, 3]);
        n = u.createBuffer(), a = u.createBuffer(), u.bindBuffer(u.ARRAY_BUFFER, n), u.bufferData(u.ARRAY_BUFFER, e, u.STATIC_DRAW), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, a), u.bufferData(u.ELEMENT_ARRAY_BUFFER, t, u.STATIC_DRAW), o = r(), s = {
            position: u.getAttribLocation(o, "position"),
            uv: u.getAttribLocation(o, "uv")
        }, h = {
            uvOffset: u.getUniformLocation(o, "uvOffset"),
            uvScale: u.getUniformLocation(o, "uvScale"),
            rotation: u.getUniformLocation(o, "rotation"),
            scale: u.getUniformLocation(o, "scale"),
            color: u.getUniformLocation(o, "color"),
            map: u.getUniformLocation(o, "map"),
            opacity: u.getUniformLocation(o, "opacity"),
            modelViewMatrix: u.getUniformLocation(o, "modelViewMatrix"),
            projectionMatrix: u.getUniformLocation(o, "projectionMatrix"),
            fogType: u.getUniformLocation(o, "fogType"),
            fogDensity: u.getUniformLocation(o, "fogDensity"),
            fogNear: u.getUniformLocation(o, "fogNear"),
            fogFar: u.getUniformLocation(o, "fogFar"),
            fogColor: u.getUniformLocation(o, "fogColor"),
            alphaTest: u.getUniformLocation(o, "alphaTest")
        };
        var i = document.createElement("canvas");
        i.width = 8, i.height = 8;
        var c = i.getContext("2d");
        c.fillStyle = "white", c.fillRect(0, 0, 8, 8), l = new THREE.Texture(i), l.needsUpdate = !0
    };
    this.render = function (r, p) {
        if (0 !== t.length) {
            void 0 === o && d(), u.useProgram(o), u.enableVertexAttribArray(s.position), u.enableVertexAttribArray(s.uv), u.disable(u.CULL_FACE), u.enable(u.BLEND), u.bindBuffer(u.ARRAY_BUFFER, n), u.vertexAttribPointer(s.position, 2, u.FLOAT, !1, 16, 0), u.vertexAttribPointer(s.uv, 2, u.FLOAT, !1, 16, 8), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, a), u.uniformMatrix4fv(h.projectionMatrix, !1, p.projectionMatrix.elements), u.activeTexture(u.TEXTURE0), u.uniform1i(h.map, 0);
            var m = 0, T = 0, g = r.fog;
            g ? (u.uniform3f(h.fogColor, g.color.r, g.color.g, g.color.b), g instanceof THREE.Fog ? (u.uniform1f(h.fogNear, g.near), u.uniform1f(h.fogFar, g.far), u.uniform1i(h.fogType, 1), m = 1, T = 1) : g instanceof THREE.FogExp2 && (u.uniform1f(h.fogDensity, g.density), u.uniform1i(h.fogType, 2), m = 2, T = 2)) : (u.uniform1i(h.fogType, 0), m = 0, T = 0);
            for (var v = 0, R = t.length; R > v; v++) {
                var y = t[v];
                y._modelViewMatrix.multiplyMatrices(p.matrixWorldInverse, y.matrixWorld), y.z = -y._modelViewMatrix.elements[14]
            }
            t.sort(i);
            for (var x = [], v = 0, R = t.length; R > v; v++) {
                var y = t[v], _ = y.material;
                u.uniform1f(h.alphaTest, _.alphaTest), u.uniformMatrix4fv(h.modelViewMatrix, !1, y._modelViewMatrix.elements), y.matrixWorld.decompose(c, E, f), x[0] = f.x, x[1] = f.y;
                var b = 0;
                r.fog && _.fog && (b = T), m !== b && (u.uniform1i(h.fogType, b), m = b), null !== _.map ? (u.uniform2f(h.uvOffset, _.map.offset.x, _.map.offset.y), u.uniform2f(h.uvScale, _.map.repeat.x, _.map.repeat.y)) : (u.uniform2f(h.uvOffset, 0, 0), u.uniform2f(h.uvScale, 1, 1)), u.uniform1f(h.opacity, _.opacity), u.uniform3f(h.color, _.color.r, _.color.g, _.color.b), u.uniform1f(h.rotation, _.rotation), u.uniform2fv(h.scale, x), e.state.setBlending(_.blending, _.blendEquation, _.blendSrc, _.blendDst), e.state.setDepthTest(_.depthTest), e.state.setDepthWrite(_.depthWrite), _.map && _.map.image && _.map.image.width ? e.setTexture(_.map, 0) : e.setTexture(l, 0), u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0)
            }
            u.enable(u.CULL_FACE), e.resetGLState()
        }
    }
},THREE.ImageUtils = {
    crossOrigin: void 0, loadTexture: function (e, t, r, i) {
        var n = new THREE.ImageLoader;
        n.crossOrigin = this.crossOrigin;
        var a = new THREE.Texture(void 0, t);
        return n.load(e, function (e) {
            a.image = e, a.needsUpdate = !0, r && r(a)
        }, void 0, function (e) {
            i && i(e)
        }), a.sourceFile = e, a
    }, loadTextureCube: function (e, t, r, i) {
        var n = [], a = new THREE.ImageLoader;
        a.crossOrigin = this.crossOrigin;
        var o = new THREE.CubeTexture(n, t);
        o.flipY = !1;
        for (var s = 0, h = function (t) {
            a.load(e[t], function (e) {
                o.images[t] = e, s += 1, 6 === s && (o.needsUpdate = !0, r && r(o))
            }, void 0, i)
        }, l = 0, u = e.length; u > l; ++l)h(l);
        return o
    }, loadCompressedTexture: function () {
        THREE.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }, loadCompressedTextureCube: function () {
        THREE.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }, getNormalMap: function (e, t) {
        var r = function (e, t) {
            return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
        }, i = function (e, t) {
            return [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
        }, n = function (e) {
            var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
            return [e[0] / t, e[1] / t, e[2] / t]
        };
        t = 1 | t;
        var a = e.width, o = e.height, s = document.createElement("canvas");
        s.width = a, s.height = o;
        var h = s.getContext("2d");
        h.drawImage(e, 0, 0);
        for (var l = h.getImageData(0, 0, a, o).data, u = h.createImageData(a, o), c = u.data, E = 0; a > E; E++)for (var f = 0; o > f; f++) {
            var d = 0 > f - 1 ? 0 : f - 1, p = f + 1 > o - 1 ? o - 1 : f + 1, m = 0 > E - 1 ? 0 : E - 1, T = E + 1 > a - 1 ? a - 1 : E + 1, g = [], v = [0, 0, l[4 * (f * a + E)] / 255 * t];
            g.push([-1, 0, l[4 * (f * a + m)] / 255 * t]), g.push([-1, -1, l[4 * (d * a + m)] / 255 * t]), g.push([0, -1, l[4 * (d * a + E)] / 255 * t]), g.push([1, -1, l[4 * (d * a + T)] / 255 * t]), g.push([1, 0, l[4 * (f * a + T)] / 255 * t]), g.push([1, 1, l[4 * (p * a + T)] / 255 * t]), g.push([0, 1, l[4 * (p * a + E)] / 255 * t]), g.push([-1, 1, l[4 * (p * a + m)] / 255 * t]);
            for (var R = [], y = g.length, x = 0; y > x; x++) {
                var _ = g[x], b = g[(x + 1) % y];
                _ = i(_, v), b = i(b, v), R.push(n(r(_, b)))
            }
            for (var H = [0, 0, 0], x = 0; x < R.length; x++)H[0] += R[x][0], H[1] += R[x][1], H[2] += R[x][2];
            H[0] /= R.length, H[1] /= R.length, H[2] /= R.length;
            var M = 4 * (f * a + E);
            c[M] = (H[0] + 1) / 2 * 255 | 0, c[M + 1] = (H[1] + 1) / 2 * 255 | 0, c[M + 2] = 255 * H[2] | 0, c[M + 3] = 255
        }
        return h.putImageData(u, 0, 0), s
    }, generateDataTexture: function (e, t, r) {
        for (var i = e * t, n = new Uint8Array(3 * i), a = Math.floor(255 * r.r), o = Math.floor(255 * r.g), s = Math.floor(255 * r.b), h = 0; i > h; h++)n[3 * h] = a, n[3 * h + 1] = o, n[3 * h + 2] = s;
        var l = new THREE.DataTexture(n, e, t, THREE.RGBFormat);
        return l.needsUpdate = !0, l
    }
},THREE.BoxGeometry = function (e, t, r, i, n, a) {
    function o(e, t, r, i, n, a, o, h) {
        var l, u, c, E = s.widthSegments, f = s.heightSegments, d = n / 2, p = a / 2, m = s.vertices.length;
        "x" === e && "y" === t || "y" === e && "x" === t ? l = "z" : "x" === e && "z" === t || "z" === e && "x" === t ? (l = "y", f = s.depthSegments) : ("z" === e && "y" === t || "y" === e && "z" === t) && (l = "x", E = s.depthSegments);
        var T = E + 1, g = f + 1, v = n / E, R = a / f, y = new THREE.Vector3;
        for (y[l] = o > 0 ? 1 : -1, c = 0; g > c; c++)for (u = 0; T > u; u++) {
            var x = new THREE.Vector3;
            x[e] = (u * v - d) * r, x[t] = (c * R - p) * i, x[l] = o, s.vertices.push(x)
        }
        for (c = 0; f > c; c++)for (u = 0; E > u; u++) {
            var _ = u + T * c, b = u + T * (c + 1), H = u + 1 + T * (c + 1), M = u + 1 + T * c, w = new THREE.Vector2(u / E, 1 - c / f), S = new THREE.Vector2(u / E, 1 - (c + 1) / f), A = new THREE.Vector2((u + 1) / E, 1 - (c + 1) / f), C = new THREE.Vector2((u + 1) / E, 1 - c / f), F = new THREE.Face3(_ + m, b + m, M + m);
            F.normal.copy(y), F.vertexNormals.push(y.clone(), y.clone(), y.clone()), F.materialIndex = h, s.faces.push(F), s.faceVertexUvs[0].push([w, S, C]), F = new THREE.Face3(b + m, H + m, M + m), F.normal.copy(y), F.vertexNormals.push(y.clone(), y.clone(), y.clone()), F.materialIndex = h, s.faces.push(F), s.faceVertexUvs[0].push([S.clone(), A, C.clone()])
        }
    }

    THREE.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
        width: e,
        height: t,
        depth: r,
        widthSegments: i,
        heightSegments: n,
        depthSegments: a
    }, this.widthSegments = i || 1, this.heightSegments = n || 1, this.depthSegments = a || 1;
    var s = this, h = e / 2, l = t / 2, u = r / 2;
    o("z", "y", -1, -1, r, t, h, 0), o("z", "y", 1, -1, r, t, -h, 1), o("x", "z", 1, 1, e, r, l, 2), o("x", "z", 1, -1, e, r, -l, 3), o("x", "y", 1, -1, e, t, u, 4), o("x", "y", -1, -1, e, t, -u, 5), this.mergeVertices()
},THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry,THREE.PlaneBufferGeometry = function (e, t, r, i) {
    THREE.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
        width: e,
        height: t,
        widthSegments: r,
        heightSegments: i
    };
    for (var n = e / 2, a = t / 2, o = r || 1, s = i || 1, h = o + 1, l = s + 1, u = e / o, c = t / s, E = new Float32Array(h * l * 3), f = new Float32Array(h * l * 3), d = new Float32Array(h * l * 2), p = 0, m = 0, T = 0; l > T; T++)for (var g = T * c - a, v = 0; h > v; v++) {
        var R = v * u - n;
        E[p] = R, E[p + 1] = -g, f[p + 2] = 1, d[m] = v / o, d[m + 1] = 1 - T / s, p += 3, m += 2
    }
    p = 0;
    for (var y = new (E.length / 3 > 65535 ? Uint32Array : Uint16Array)(o * s * 6), T = 0; s > T; T++)for (var v = 0; o > v; v++) {
        var x = v + h * T, _ = v + h * (T + 1), b = v + 1 + h * (T + 1), H = v + 1 + h * T;
        y[p] = x, y[p + 1] = _, y[p + 2] = H, y[p + 3] = _, y[p + 4] = b, y[p + 5] = H, p += 6
    }
    this.addAttribute("index", new THREE.BufferAttribute(y, 1)), this.addAttribute("position", new THREE.BufferAttribute(E, 3)), this.addAttribute("normal", new THREE.BufferAttribute(f, 3)), this.addAttribute("uv", new THREE.BufferAttribute(d, 2))
},THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry,THREE.SphereGeometry = function (e, t, r, i, n, a, o) {
    THREE.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: r,
        phiStart: i,
        phiLength: n,
        thetaStart: a,
        thetaLength: o
    }, e = e || 50, t = Math.max(3, Math.floor(t) || 8), r = Math.max(2, Math.floor(r) || 6), i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI, a = void 0 !== a ? a : 0, o = void 0 !== o ? o : Math.PI;
    var s, h, l = [], u = [];
    for (h = 0; r >= h; h++) {
        var c = [], E = [];
        for (s = 0; t >= s; s++) {
            var f = s / t, d = h / r, p = new THREE.Vector3;
            p.x = -e * Math.cos(i + f * n) * Math.sin(a + d * o), p.y = e * Math.cos(a + d * o), p.z = e * Math.sin(i + f * n) * Math.sin(a + d * o), this.vertices.push(p), c.push(this.vertices.length - 1), E.push(new THREE.Vector2(f, 1 - d))
        }
        l.push(c), u.push(E)
    }
    for (h = 0; r > h; h++)for (s = 0; t > s; s++) {
        var m = l[h][s + 1], T = l[h][s], g = l[h + 1][s], v = l[h + 1][s + 1], R = this.vertices[m].clone().normalize(), y = this.vertices[T].clone().normalize(), x = this.vertices[g].clone().normalize(), _ = this.vertices[v].clone().normalize(), b = u[h][s + 1].clone(), H = u[h][s].clone(), M = u[h + 1][s].clone(), w = u[h + 1][s + 1].clone();
        Math.abs(this.vertices[m].y) === e ? (b.x = (b.x + H.x) / 2, this.faces.push(new THREE.Face3(m, g, v, [R, x, _])), this.faceVertexUvs[0].push([b, M, w])) : Math.abs(this.vertices[g].y) === e ? (M.x = (M.x + w.x) / 2, this.faces.push(new THREE.Face3(m, T, g, [R, y, x])), this.faceVertexUvs[0].push([b, H, M])) : (this.faces.push(new THREE.Face3(m, T, v, [R, y, _])), this.faceVertexUvs[0].push([b, H, w]), this.faces.push(new THREE.Face3(T, g, v, [y.clone(), x, _.clone()])), this.faceVertexUvs[0].push([H.clone(), M, w.clone()]))
    }
    this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
},THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry;
//# sourceMappingURL=three.min.js.map