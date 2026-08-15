(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require2() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // stub:stub
  var require_stub = __commonJS({
    "stub:stub"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/@alt1/base/dist/index.bundle.js
  var require_index_bundle = __commonJS({
    "node_modules/@alt1/base/dist/index.bundle.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["@alt1/base"] = factory();
        else
          root["A1lib"] = factory();
      })(typeof self != "undefined" ? self : exports, function() {
        return (
          /******/
          (function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
              if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
              }
              var module2 = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
              };
              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              module2.l = true;
              return module2.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports2, name, getter) {
              if (!__webpack_require__.o(exports2, name)) {
                Object.defineProperty(exports2, name, { enumerable: true, get: getter });
              }
            };
            __webpack_require__.r = function(exports2) {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
            __webpack_require__.t = function(value, mode) {
              if (mode & 1) value = __webpack_require__(value);
              if (mode & 8) return value;
              if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
              var ns = /* @__PURE__ */ Object.create(null);
              __webpack_require__.r(ns);
              Object.defineProperty(ns, "default", { enumerable: true, value });
              if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key2) {
                return value[key2];
              }.bind(null, key));
              return ns;
            };
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? (
                /******/
                function getDefault() {
                  return module2["default"];
                }
              ) : (
                /******/
                function getModuleExports() {
                  return module2;
                }
              );
              __webpack_require__.d(getter, "a", getter);
              return getter;
            };
            __webpack_require__.o = function(object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 0);
          })({
            /***/
            "./alt1api.ts": (
              /***/
              (function(module2, exports2, __webpack_require__) {
                "use strict";
              })
            ),
            /***/
            "./declarations.ts": (
              /***/
              (function(module2, exports2, __webpack_require__) {
                "use strict";
              })
            ),
            /***/
            "./index.ts": (
              /***/
              (function(module2, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                var imagedetect_namespaceObject = {};
                __webpack_require__.r(imagedetect_namespaceObject);
                __webpack_require__.d(imagedetect_namespaceObject, "imageDataFromUrl", function() {
                  return imageDataFromUrl;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "imageDataFromBase64", function() {
                  return imagedetect_imageDataFromBase64;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "imageDataFromFileBuffer", function() {
                  return imageDataFromFileBuffer;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "isPngBuffer", function() {
                  return isPngBuffer;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "clearPngColorspace", function() {
                  return clearPngColorspace;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "findSubimage", function() {
                  return findSubimage;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "findSubbuffer", function() {
                  return findSubbuffer;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "simpleCompare", function() {
                  return simpleCompare;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "coldif", function() {
                  return coldif;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "asyncMap", function() {
                  return asyncMap;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "webpackImages", function() {
                  return webpackImages;
                });
                __webpack_require__.d(imagedetect_namespaceObject, "ImageDataSet", function() {
                  return imagedetect_ImageDataSet;
                });
                var pasteinput_namespaceObject = {};
                __webpack_require__.r(pasteinput_namespaceObject);
                __webpack_require__.d(pasteinput_namespaceObject, "lastref", function() {
                  return lastref;
                });
                __webpack_require__.d(pasteinput_namespaceObject, "listen", function() {
                  return listen;
                });
                __webpack_require__.d(pasteinput_namespaceObject, "unlisten", function() {
                  return unlisten;
                });
                __webpack_require__.d(pasteinput_namespaceObject, "triggerPaste", function() {
                  return triggerPaste;
                });
                __webpack_require__.d(pasteinput_namespaceObject, "startDragNDrop", function() {
                  return startDragNDrop;
                });
                __webpack_require__.d(pasteinput_namespaceObject, "start", function() {
                  return start;
                });
                __webpack_require__.d(pasteinput_namespaceObject, "fileDialog", function() {
                  return fileDialog;
                });
                var declarations = __webpack_require__("./declarations.ts");
                class imgref_ImgRef {
                  constructor(x, y, w, h) {
                    this.t = "none";
                    this.x = x;
                    this.y = y;
                    this.width = w;
                    this.height = h;
                  }
                  read(x = 0, y = 0, w = this.width, h = this.height) {
                    throw new Error("This imgref (" + this.t + ") does not support toData");
                  }
                  findSubimage(needle, sx = 0, sy = 0, w = this.width, h = this.height) {
                    return imagedetect_namespaceObject.findSubimage(this, needle, sx, sy, w, h);
                  }
                  toData(x = this.x, y = this.y, w = this.width, h = this.height) {
                    return this.read(x - this.x, y - this.y, w, h);
                  }
                  containsArea(rect) {
                    return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + rect.width && this.y + this.height >= rect.y + rect.height;
                  }
                }
                class ImgRefCtx extends imgref_ImgRef {
                  constructor(img, x = 0, y = 0) {
                    if (img instanceof CanvasRenderingContext2D) {
                      super(x, y, img.canvas.width, img.canvas.height);
                      this.ctx = img;
                    } else {
                      super(x, y, img.width, img.height);
                      var cnv = img instanceof HTMLCanvasElement ? img : img.toCanvas();
                      this.ctx = cnv.getContext("2d");
                    }
                    this.t = "ctx";
                  }
                  read(x = 0, y = 0, w = this.width, h = this.height) {
                    return this.ctx.getImageData(x, y, w, h);
                  }
                }
                class imgref_ImgRefBind extends imgref_ImgRef {
                  constructor(handle, x = 0, y = 0, w = 0, h = 0) {
                    super(x, y, w, h);
                    this.handle = handle;
                    this.t = "bind";
                  }
                  read(x = 0, y = 0, w = this.width, h = this.height) {
                    return transferImageData(this.handle, x, y, w, h);
                  }
                }
                class ImgRefData extends imgref_ImgRef {
                  constructor(buf, x = 0, y = 0) {
                    super(x, y, buf.width, buf.height);
                    this.buf = buf;
                    this.t = "data";
                  }
                  read(x = 0, y = 0, w = this.width, h = this.height) {
                    if (x == 0 && y == 0 && w == this.width && h == this.height) {
                      return this.buf;
                    }
                    var r = new ImageData(w, h);
                    for (var b = y; b < y + h; b++) {
                      for (var a = x; a < x + w; a++) {
                        var i1 = (a - x) * 4 + (b - y) * w * 4;
                        var i2 = a * 4 + b * 4 * this.buf.width;
                        r.data[i1] = this.buf.data[i2];
                        r.data[i1 + 1] = this.buf.data[i2 + 1];
                        r.data[i1 + 2] = this.buf.data[i2 + 2];
                        r.data[i1 + 3] = this.buf.data[i2 + 3];
                      }
                    }
                    return r;
                  }
                }
                ;
                class Rect {
                  constructor(x, y, w, h) {
                    this.x = x;
                    this.y = y;
                    this.width = w;
                    this.height = h;
                  }
                  static fromArgs(...args) {
                    if (typeof args[0] == "object") {
                      return new Rect(args[0].x, args[0].y, args[0].width, args[0].height);
                    } else if (typeof args[0] == "number" && args.length >= 4) {
                      return new Rect(args[0], args[1], args[2], args[3]);
                    } else {
                      throw new Error("invalid rect args");
                    }
                  }
                  /**
                   * Resizes this Rect to include the full size of a given second rectangle
                   */
                  union(r2) {
                    var x = Math.min(this.x, r2.x);
                    var y = Math.min(this.y, r2.y);
                    this.width = Math.max(this.x + this.width, r2.x + r2.width) - x;
                    this.height = Math.max(this.y + this.height, r2.y + r2.height) - y;
                    this.x = x;
                    this.y = y;
                    return this;
                  }
                  /**
                   * Resizes this Rect to include a given point
                   */
                  includePoint(x, y) {
                    this.union(new Rect(x, y, 0, 0));
                  }
                  /**
                   * Grows the rectangle with the given dimensions
                   */
                  inflate(w, h) {
                    this.x -= w;
                    this.y -= h;
                    this.width += 2 * w;
                    this.height += 2 * h;
                  }
                  /**
                   * Resizes this Rect to the area that overlaps a given Rect
                   * width and height will be set to 0 if the intersection does not exist
                   */
                  intersect(r2) {
                    if (this.x < r2.x) {
                      this.width -= r2.x - this.x;
                      this.x = r2.x;
                    }
                    if (this.y < r2.y) {
                      this.height -= r2.y - this.y;
                      this.y = r2.y;
                    }
                    this.width = Math.min(this.x + this.width, r2.x + r2.width) - this.x;
                    this.height = Math.min(this.y + this.height, r2.y + r2.height) - this.y;
                    if (this.width <= 0 || this.height <= 0) {
                      this.width = 0;
                      this.height = 0;
                    }
                  }
                  /**
                   * Returns wether this Rect has at least one pixel overlap with a given Rect
                   */
                  overlaps(r2) {
                    return this.x < r2.x + r2.width && this.x + this.width > r2.x && this.y < r2.y + r2.height && this.y + this.height > r2.y;
                  }
                  /**
                   * Returns wether a given Rect fits completely inside this Rect
                   * @param r2
                   */
                  contains(r2) {
                    return this.x <= r2.x && this.x + this.width >= r2.x + r2.width && this.y <= r2.y && this.y + this.height >= r2.y + r2.height;
                  }
                  /**
                   * Returns wether a given point lies inside this Rect
                   */
                  containsPoint(x, y) {
                    return this.x <= x && this.x + this.width > x && this.y <= y && this.y + this.height > y;
                  }
                }
                var __awaiter = function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                function requireNodeCanvas() {
                  if (typeof __require != "undefined") {
                    requireSharp();
                    try {
                      return __require("canvas");
                    } catch (e) {
                    }
                  }
                  return null;
                }
                function requireSharp() {
                  if (typeof __require != "undefined") {
                    try {
                      return require_stub();
                    } catch (e) {
                    }
                  }
                  return null;
                }
                function requireElectronCommon() {
                  if (typeof __require != "undefined") {
                    try {
                      return __require("electron/common");
                    } catch (e) {
                    }
                  }
                  return null;
                }
                function imageDataToDrawable(buf) {
                  let nodecnv = requireNodeCanvas();
                  if (!nodecnv) {
                    throw new Error("couldn't find built-in canvas or the module 'canvas'");
                  }
                  return new nodecnv.ImageData(buf.data, buf.width, buf.height);
                }
                function createCanvas(w, h) {
                  let nodecnv = requireNodeCanvas();
                  if (!nodecnv) {
                    throw new Error("couldn't find built-in canvas or the module 'canvas'");
                  }
                  return nodecnv.createCanvas(w, h);
                }
                function flipBGRAtoRGBA(data) {
                  for (let i = 0; i < data.length; i += 4) {
                    let tmp = data[i + 2];
                    data[i + 2] = data[i + 0];
                    data[i + 0] = tmp;
                  }
                }
                function imageDataToFileBytes(buf, format, quality) {
                  return __awaiter(this, void 0, void 0, function* () {
                    var electronCommon;
                    var sharp;
                    if (electronCommon = requireElectronCommon()) {
                      let nativeImage = electronCommon.nativeImage;
                      let bufcpy = Buffer.from(buf.data.slice(buf.data.byteOffset, buf.data.byteLength));
                      flipBGRAtoRGBA(bufcpy);
                      let nativeimg = nativeImage.createFromBitmap(bufcpy, { width: buf.width, height: buf.height });
                      return nativeimg.toPNG();
                    } else if (sharp = requireSharp()) {
                      let img = sharp(Buffer.from(buf.data.buffer), { raw: { width: buf.width, height: buf.height, channels: 4 } });
                      if (format == "image/png") {
                        img.png();
                      } else if (format == "image/webp") {
                        var opts = { quality: 80 };
                        if (typeof quality == "number") {
                          opts.quality = quality * 100;
                        }
                        img.webp(opts);
                      } else {
                        throw new Error("unknown image format: " + format);
                      }
                      return yield img.toBuffer({ resolveWithObject: false }).buffer;
                    }
                    throw new Error("coulnd't find build-in image compression methods or the module 'electron/common' or 'sharp'");
                  });
                }
                function imageDataFromBase64(base64) {
                  return imageDataFromBuffer(Buffer.from(base64, "base64"));
                }
                function imageDataFromBuffer(buffer) {
                  return __awaiter(this, void 0, void 0, function* () {
                    clearPngColorspace(buffer);
                    var electronCommon;
                    var nodecnv;
                    if (electronCommon = requireElectronCommon()) {
                      let nativeImage = electronCommon.nativeImage;
                      let img = nativeImage.createFromBuffer(buffer);
                      let pixels = img.toBitmap();
                      let size = img.getSize();
                      let pixbuf = new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength);
                      flipBGRAtoRGBA(pixbuf);
                      return new imagedata_extensions_ImageData(pixbuf, size.width, size.height);
                    } else if (nodecnv = requireNodeCanvas()) {
                      return new Promise((done, err) => {
                        let img = new nodecnv.Image();
                        img.onerror = err;
                        img.onload = () => {
                          var cnv = nodecnv.createCanvas(img.naturalWidth, img.naturalHeight);
                          var ctx = cnv.getContext("2d");
                          ctx.drawImage(img, 0, 0);
                          var data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
                          done(new imagedata_extensions_ImageData(data.data, data.width, data.height));
                        };
                        img.src = Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
                      });
                    }
                    throw new Error("couldn't find built-in canvas, module 'electron/common' or the module 'canvas'");
                  });
                }
                var imagedata_extensions_ImageData;
                (function() {
                  var globalvar = typeof self != "undefined" ? self : typeof global != "undefined" ? global : null;
                  var filltype = typeof globalvar.ImageData == "undefined" || typeof globalvar.document == "undefined";
                  var fillconstr = filltype;
                  if (!filltype) {
                    var oldconstr = globalvar.ImageData;
                    try {
                      let data = new Uint8ClampedArray(4);
                      data[0] = 1;
                      let a = new globalvar.ImageData(data, 1, 1);
                      fillconstr = a.data[0] != 1;
                    } catch (e) {
                      fillconstr = true;
                    }
                  }
                  if (fillconstr) {
                    var constr = function ImageDataShim() {
                      var i = 0;
                      var data = arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null;
                      var width = arguments[i++];
                      var height = arguments[i++];
                      if (filltype) {
                        if (!data) {
                          data = new Uint8ClampedArray(width * height * 4);
                        }
                        this.width = width;
                        this.height = height;
                        this.data = data;
                      } else if (fillconstr) {
                        var canvas = document.createElement("canvas");
                        canvas.width = width;
                        canvas.height = height;
                        var ctx = canvas.getContext("2d");
                        var imageData = ctx.createImageData(width, height);
                        if (data) {
                          imageData.data.set(data);
                        }
                        return imageData;
                      }
                    };
                    if (!filltype) {
                      constr.prototype = globalvar.ImageData.prototype;
                    }
                    globalvar.ImageData = constr;
                    imagedata_extensions_ImageData = constr;
                  } else {
                    imagedata_extensions_ImageData = globalvar.ImageData;
                  }
                })();
                imagedata_extensions_ImageData.prototype.toDrawableData = function() {
                  if (typeof document == "undefined") {
                    return imageDataToDrawable(this);
                  } else {
                    return this;
                  }
                };
                imagedata_extensions_ImageData.prototype.putImageData = function(buf, cx, cy) {
                  for (var dx = 0; dx < buf.width; dx++) {
                    for (var dy = 0; dy < buf.height; dy++) {
                      var i1 = (dx + cx) * 4 + (dy + cy) * 4 * this.width;
                      var i2 = dx * 4 + dy * 4 * buf.width;
                      this.data[i1] = buf.data[i2];
                      this.data[i1 + 1] = buf.data[i2 + 1];
                      this.data[i1 + 2] = buf.data[i2 + 2];
                      this.data[i1 + 3] = buf.data[i2 + 3];
                    }
                  }
                };
                imagedata_extensions_ImageData.prototype.pixelOffset = function(x, y) {
                  return x * 4 + y * this.width * 4;
                };
                imagedata_extensions_ImageData.prototype.getPixelHash = function(rect) {
                  if (!rect) {
                    rect = new Rect(0, 0, this.width, this.height);
                  }
                  var hash = 0;
                  for (var x = rect.x; x < rect.x + rect.width; x++) {
                    for (var y = rect.y; y < rect.y + rect.height; y++) {
                      var i = x * 4 + y * 4 * this.width;
                      hash = (hash << 5) - hash + this.data[i] | 0;
                      hash = (hash << 5) - hash + this.data[i + 1] | 0;
                      hash = (hash << 5) - hash + this.data[i + 2] | 0;
                      hash = (hash << 5) - hash + this.data[i + 3] | 0;
                    }
                  }
                  return hash;
                };
                imagedata_extensions_ImageData.prototype.clone = function(rect) {
                  return this.toImage(rect).getContext("2d").getImageData(0, 0, rect.width, rect.height);
                };
                imagedata_extensions_ImageData.prototype.show = function(x = 5, y = 5, zoom = 1) {
                  if (typeof document == "undefined") {
                    console.error("need a document to show an imagedata object");
                    return;
                  }
                  var imgs = document.getElementsByClassName("debugimage");
                  while (imgs.length > imagedata_extensions_ImageData.prototype.show.maxImages) {
                    imgs[0].remove();
                  }
                  var el = this.toImage();
                  el.classList.add("debugimage");
                  el.style.position = "absolute";
                  el.style.zIndex = "1000";
                  el.style.left = x / zoom + "px";
                  el.style.top = y / zoom + "px";
                  el.style.background = "purple";
                  el.style.cursor = "pointer";
                  el.style.imageRendering = "pixelated";
                  el.style.outline = "1px solid #0f0";
                  el.style.width = (this.width == 1 ? 100 : this.width) + "px";
                  el.style.height = (this.height == 1 ? 100 : this.height) + "px";
                  el.style.zoom = "" + zoom;
                  el.onclick = function() {
                    el.remove();
                  };
                  document.body.appendChild(el);
                  return el;
                };
                imagedata_extensions_ImageData.prototype.show.maxImages = 10;
                imagedata_extensions_ImageData.prototype.toImage = function(rect) {
                  if (!rect) {
                    rect = new Rect(0, 0, this.width, this.height);
                  }
                  if (typeof document != "undefined") {
                    var el = document.createElement("canvas");
                    el.width = rect.width;
                    el.height = rect.height;
                  } else {
                    el = createCanvas(rect.width, rect.height);
                  }
                  var ctx = el.getContext("2d");
                  ctx.putImageData(this.toDrawableData(), -rect.x, -rect.y);
                  return el;
                };
                imagedata_extensions_ImageData.prototype.getPixel = function(x, y) {
                  var i = x * 4 + y * 4 * this.width;
                  return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
                };
                imagedata_extensions_ImageData.prototype.getPixelValueSum = function(x, y) {
                  var i = x * 4 + y * 4 * this.width;
                  return this.data[i] + this.data[i + 1] + this.data[i + 2];
                };
                imagedata_extensions_ImageData.prototype.getPixelInt = function(x, y) {
                  var i = x * 4 + y * 4 * this.width;
                  return (this.data[i + 3] << 24) + (this.data[i + 0] << 16) + (this.data[i + 1] << 8) + (this.data[i + 2] << 0);
                };
                imagedata_extensions_ImageData.prototype.getColorDifference = function(x, y, r, g, b, a = 255) {
                  var i = x * 4 + y * 4 * this.width;
                  return Math.abs(this.data[i] - r) + Math.abs(this.data[i + 1] - g) + Math.abs(this.data[i + 2] - b) * a / 255;
                };
                imagedata_extensions_ImageData.prototype.setPixel = function(x, y, ...color) {
                  var r, g, b, a;
                  var [r, g, b, a] = Array.isArray(color[0]) ? color[0] : color;
                  var i = x * 4 + y * 4 * this.width;
                  this.data[i] = r;
                  this.data[i + 1] = g;
                  this.data[i + 2] = b;
                  this.data[i + 3] = a == void 0 ? 255 : a;
                };
                imagedata_extensions_ImageData.prototype.setPixelInt = function(x, y, color) {
                  var i = x * 4 + y * 4 * this.width;
                  this.data[i] = color >> 24 & 255;
                  this.data[i + 1] = color >> 16 & 255;
                  this.data[i + 2] = color >> 8 & 255;
                  this.data[i + 3] = color >> 0 & 255;
                };
                imagedata_extensions_ImageData.prototype.toFileBytes = function(format, quality) {
                  if (typeof HTMLCanvasElement != "undefined") {
                    return new Promise((d) => this.toImage().toBlob((b) => {
                      var r = new FileReader();
                      r.readAsArrayBuffer(b);
                      r.onload = () => d(new Uint8Array(r.result));
                    }, format, quality));
                  } else {
                    return imageDataToFileBytes(this, format, quality);
                  }
                };
                imagedata_extensions_ImageData.prototype.toPngBase64 = function() {
                  if (typeof HTMLCanvasElement != "undefined") {
                    var str = this.toImage().toDataURL("image/png");
                    return str.slice(str.indexOf(",") + 1);
                  } else {
                    throw new Error("synchronous image conversion not supported in nodejs, try using ImageData.prototype.toFileBytes");
                  }
                };
                imagedata_extensions_ImageData.prototype.pixelCompare = function(buf, x = 0, y = 0, max) {
                  return imagedetect_namespaceObject.simpleCompare(this, buf, x, y, max);
                };
                imagedata_extensions_ImageData.prototype.copyTo = function(target, sourcex, sourcey, width, height, targetx, targety) {
                  const targetwidth = target.width | 0;
                  const thiswidth = this.width | 0;
                  const copywidth = width | 0;
                  const fastwidth = Math.floor(width / 4) * 4;
                  const thisdata = new Int32Array(this.data.buffer, this.data.byteOffset, this.data.byteLength / 4);
                  const targetdata = new Int32Array(target.data.buffer, target.data.byteOffset, target.data.byteLength / 4);
                  for (let cy = 0; cy < height; cy++) {
                    let cx = 0;
                    let it = cx + targetx + (cy + targety) * targetwidth;
                    let is = cx + sourcex + (cy + sourcey) * thiswidth;
                    for (; cx < fastwidth; cx += 4) {
                      targetdata[it] = thisdata[is];
                      targetdata[it + 1] = thisdata[is + 1];
                      targetdata[it + 2] = thisdata[is + 2];
                      targetdata[it + 3] = thisdata[is + 3];
                      it += 4;
                      is += 4;
                    }
                    for (; cx < copywidth; cx++) {
                      targetdata[it] = thisdata[is];
                      it += 1;
                      is += 1;
                    }
                  }
                };
                if (typeof HTMLImageElement != "undefined") {
                  HTMLImageElement.prototype.toBuffer = function(x = 0, y = 0, w = this.width, h = this.height) {
                    var cnv = document.createElement("canvas");
                    cnv.width = w;
                    cnv.height = h;
                    var ctx = cnv.getContext("2d");
                    ctx.drawImage(this, -x, -y);
                    return ctx.getImageData(0, 0, w, h);
                  };
                  HTMLImageElement.prototype.toCanvas = function(x = 0, y = 0, w = this.width, h = this.height) {
                    var cnv = document.createElement("canvas");
                    cnv.width = w;
                    cnv.height = h;
                    var ctx = cnv.getContext("2d");
                    ctx.drawImage(this, -x, -y);
                    return cnv;
                  };
                }
                var alt1api = __webpack_require__("./alt1api.ts");
                var wrapper_awaiter = function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                class NoAlt1Error extends Error {
                  constructor() {
                    super();
                    this.message = "This method can not be ran outside of Alt1";
                  }
                }
                ;
                class Alt1Error extends Error {
                }
                var newestversion = "1.5.5";
                var hasAlt1 = typeof alt1 != "undefined";
                var skinName = hasAlt1 ? alt1.skinName : "default";
                var maxtransfer = 4e6;
                function openbrowser(url) {
                  if (hasAlt1) {
                    alt1.openBrowser(url);
                  } else {
                    window.open(url, "_blank");
                  }
                }
                function requireAlt1() {
                  if (!hasAlt1) {
                    throw new NoAlt1Error();
                  }
                }
                function getdisplaybounds() {
                  if (!hasAlt1) {
                    return false;
                  }
                  return new Rect(alt1.screenX, alt1.screenY, alt1.screenWidth, alt1.screenHeight);
                }
                function capture(...args) {
                  if (!hasAlt1) {
                    throw new NoAlt1Error();
                  }
                  var rect = Rect.fromArgs(...args);
                  if (alt1.capture) {
                    return new imagedata_extensions_ImageData(alt1.capture(rect.x, rect.y, rect.width, rect.height), rect.width, rect.height);
                  }
                  var buf = new imagedata_extensions_ImageData(rect.width, rect.height);
                  if (rect.width * rect.height * 4 <= maxtransfer) {
                    var data = alt1.getRegion(rect.x, rect.y, rect.width, rect.height);
                    if (!data) {
                      return null;
                    }
                    decodeImageString(data, buf, 0, 0, rect.width, rect.height);
                  } else {
                    var x1 = rect.x;
                    var ref = alt1.bindRegion(rect.x, rect.y, rect.width, rect.height);
                    if (ref <= 0) {
                      return null;
                    }
                    while (x1 < rect.x + rect.width) {
                      var x2 = Math.min(rect.x + rect.width, Math.floor(x1 + maxtransfer / 4 / rect.height));
                      var data = alt1.bindGetRegion(ref, x1, rect.y, x2 - x1, rect.height);
                      if (!data) {
                        return null;
                      }
                      decodeImageString(data, buf, x1 - rect.x, 0, x2 - x1, rect.height);
                      x1 = x2;
                    }
                  }
                  return buf;
                }
                function captureHold(x, y, w, h) {
                  x = Math.round(x);
                  y = Math.round(y);
                  w = Math.round(w);
                  h = Math.round(h);
                  requireAlt1();
                  var r = alt1.bindRegion(x, y, w, h);
                  if (r <= 0) {
                    throw new Alt1Error("capturehold failed");
                  }
                  return new imgref_ImgRefBind(r, x, y, w, h);
                }
                function captureHoldScreen(x, y, w, h) {
                  x = Math.round(x);
                  y = Math.round(y);
                  w = Math.round(w);
                  h = Math.round(h);
                  requireAlt1();
                  var r = alt1.bindScreenRegion(x, y, w, h);
                  if (r <= 0) {
                    return false;
                  }
                  return new imgref_ImgRefBind(r, x, y, w, h);
                }
                function captureHoldFullRs() {
                  return captureHold(0, 0, alt1.rsWidth, alt1.rsHeight);
                }
                function transferImageData(handle, x, y, w, h) {
                  x = Math.round(x);
                  y = Math.round(y);
                  w = Math.round(w);
                  h = Math.round(h);
                  requireAlt1();
                  if (alt1.bindGetRegionBuffer) {
                    return new imagedata_extensions_ImageData(alt1.bindGetRegionBuffer(handle, x, y, w, h), w, h);
                  }
                  var r = new imagedata_extensions_ImageData(w, h);
                  var x1 = x;
                  while (true) {
                    var x2 = Math.min(x + w, Math.floor(x1 + maxtransfer / 4 / h));
                    var a = alt1.bindGetRegion(handle, x1, y, x2 - x1, h);
                    if (!a) {
                      throw new Alt1Error();
                    }
                    decodeImageString(a, r, x1 - x, 0, x2 - x1, h);
                    x1 = x2;
                    if (x1 == x + w) {
                      break;
                    }
                    ;
                  }
                  return r;
                }
                function decodeImageString(imagestring, target, x, y, w, h) {
                  var bin = atob(imagestring);
                  var bytes = target.data;
                  w |= 0;
                  h |= 0;
                  var offset = 4 * x + 4 * y * target.width;
                  var target_width = target.width | 0;
                  for (var a = 0; a < w; a++) {
                    for (var b = 0; b < h; b++) {
                      var i1 = offset + (a * 4 | 0) + (b * target_width * 4 | 0) | 0;
                      var i2 = (a * 4 | 0) + (b * 4 * w | 0) | 0;
                      bytes[i1 + 0 | 0] = bin.charCodeAt(i2 + 2 | 0);
                      bytes[i1 + 1 | 0] = bin.charCodeAt(i2 + 1 | 0);
                      bytes[i1 + 2 | 0] = bin.charCodeAt(i2 + 0 | 0);
                      bytes[i1 + 3 | 0] = bin.charCodeAt(i2 + 3 | 0);
                    }
                  }
                  return target;
                }
                function encodeImageString(buf, sx = 0, sy = 0, sw = buf.width, sh = buf.height) {
                  var raw = "";
                  for (var y = sy; y < sy + sh; y++) {
                    for (var x = sx; x < sx + sw; x++) {
                      var i = 4 * x + 4 * buf.width * y | 0;
                      raw += String.fromCharCode(buf.data[i + 2 | 0]);
                      raw += String.fromCharCode(buf.data[i + 1 | 0]);
                      raw += String.fromCharCode(buf.data[i + 0 | 0]);
                      raw += String.fromCharCode(buf.data[i + 3 | 0]);
                    }
                  }
                  return btoa(raw);
                }
                function mixColor(r, g, b, a = 255) {
                  return (b << 0) + (g << 8) + (r << 16) + (a << 24);
                }
                function unmixColor(col) {
                  var r = col >> 16 & 255;
                  var g = col >> 8 & 255;
                  var b = col >> 0 & 255;
                  return [r, g, b];
                }
                function identifyApp(url) {
                  if (hasAlt1) {
                    alt1.identifyAppUrl(url);
                  }
                }
                function resetEnvironment() {
                  hasAlt1 = typeof alt1 != "undefined";
                  skinName = hasAlt1 ? alt1.skinName : "default";
                }
                function convertAlt1Version(str) {
                  var a = str.match(/^(\d+)\.(\d+)\.(\d+)$/);
                  if (!a) {
                    throw new RangeError("Invalid version string");
                  }
                  return +a[1] * 1e3 * 1e3 + +a[2] * 1e3 + +a[3] * 1;
                }
                var cachedVersionInt = -1;
                function hasAlt1Version(versionstr) {
                  if (!hasAlt1) {
                    return false;
                  }
                  if (cachedVersionInt == -1) {
                    cachedVersionInt = alt1.versionint;
                  }
                  return cachedVersionInt >= convertAlt1Version(versionstr);
                }
                function getMousePosition() {
                  var pos = alt1.mousePosition;
                  if (pos == -1) {
                    return null;
                  }
                  return { x: pos >>> 16, y: pos & 65535 };
                }
                function addResizeElement(el, left, top, right, bot) {
                  if (!hasAlt1 || !alt1.userResize) {
                    return;
                  }
                  el.addEventListener("mousedown", function(e) {
                    alt1.userResize(left, top, right, bot);
                    e.preventDefault();
                  });
                }
                function on(type, listener) {
                  requireAlt1();
                  if (!alt1.events) {
                    alt1.events = {};
                  }
                  if (!alt1.events[type]) {
                    alt1.events[type] = [];
                  }
                  alt1.events[type].push(listener);
                }
                function removeListener(type, listener) {
                  var elist = alt1.events && alt1.events[type];
                  if (!elist) {
                    return;
                  }
                  var i = elist.indexOf(listener);
                  if (i == -1) {
                    return;
                  }
                  elist.splice(i, 1);
                }
                function once(type, listener) {
                  requireAlt1();
                  var fn = (e) => {
                    removeListener(type, fn);
                    listener(e);
                  };
                  on(type, fn);
                }
                ;
                class wrapper_ImageStreamReader {
                  constructor(reader, ...args) {
                    this.framebuffer = null;
                    this.pos = 0;
                    this.reading = false;
                    this.closed = false;
                    this.pausedindex = -1;
                    this.pausedbuffer = null;
                    this.streamreader = reader;
                    if (args[0] instanceof imagedata_extensions_ImageData) {
                      this.setFrameBuffer(args[0]);
                    } else if (typeof args[0] == "number") {
                      this.setFrameBuffer(new imagedata_extensions_ImageData(args[0], args[1]));
                    }
                  }
                  /**
                   *
                   */
                  setFrameBuffer(buffer) {
                    if (this.reading) {
                      throw new Error("can't change framebuffer while reading");
                    }
                    this.framebuffer = buffer;
                  }
                  /**
                   * Closes the underlying stream and ends reading
                   */
                  close() {
                    this.streamreader.cancel();
                  }
                  /**
                   * Reads a single image from the stream
                   */
                  nextImage() {
                    return wrapper_awaiter(this, void 0, void 0, function* () {
                      if (this.reading) {
                        throw new Error("already reading from this stream");
                      }
                      if (!this.framebuffer) {
                        throw new Error("framebuffer not set");
                      }
                      this.reading = true;
                      var synctime = -Date.now();
                      var starttime = Date.now();
                      var r = false;
                      while (!r) {
                        if (this.pausedindex != -1 && this.pausedbuffer) {
                          r = this.readChunk(this.pausedindex, this.framebuffer.data, this.pausedbuffer);
                        } else {
                          synctime += Date.now();
                          var res = yield this.streamreader.read();
                          synctime -= Date.now();
                          if (res.done) {
                            throw new Error("Stream closed while reading");
                          }
                          var data = res.value;
                          r = this.readChunk(0, this.framebuffer.data, data);
                        }
                      }
                      synctime += Date.now();
                      this.reading = false;
                      return this.framebuffer;
                    });
                  }
                  readChunk(i, framedata, buffer) {
                    i = i | 0;
                    var framesize = framedata.length | 0;
                    var pos = this.pos;
                    var datalen = buffer.length | 0;
                    while (i < datalen) {
                      while (i < datalen && pos < framesize && (pos % 16 != 0 || !((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize))) {
                        var rel = pos;
                        if (pos % 4 == 0) {
                          rel = rel + 2 | 0;
                        }
                        if (pos % 4 == 2) {
                          rel = rel - 2 | 0;
                        }
                        framedata[rel | 0] = buffer[i | 0];
                        i = i + 1 | 0;
                        pos = pos + 1 | 0;
                      }
                      if (pos % 16 == 0) {
                        while ((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize) {
                          framedata[pos + 0 | 0] = buffer[i + 2 | 0];
                          framedata[pos + 1 | 0] = buffer[i + 1 | 0];
                          framedata[pos + 2 | 0] = buffer[i + 0 | 0];
                          framedata[pos + 3 | 0] = buffer[i + 3 | 0];
                          framedata[pos + 4 | 0] = buffer[i + 6 | 0];
                          framedata[pos + 5 | 0] = buffer[i + 5 | 0];
                          framedata[pos + 6 | 0] = buffer[i + 4 | 0];
                          framedata[pos + 7 | 0] = buffer[i + 7 | 0];
                          framedata[pos + 8 | 0] = buffer[i + 10 | 0];
                          framedata[pos + 9 | 0] = buffer[i + 9 | 0];
                          framedata[pos + 10 | 0] = buffer[i + 8 | 0];
                          framedata[pos + 11 | 0] = buffer[i + 11 | 0];
                          framedata[pos + 12 | 0] = buffer[i + 14 | 0];
                          framedata[pos + 13 | 0] = buffer[i + 13 | 0];
                          framedata[pos + 14 | 0] = buffer[i + 12 | 0];
                          framedata[pos + 15 | 0] = buffer[i + 15 | 0];
                          pos = pos + 16 | 0;
                          i = i + 16 | 0;
                        }
                      }
                      if (pos >= framesize) {
                        this.pausedbuffer = null;
                        this.pausedindex = -1;
                        this.pos = 0;
                        if (i != buffer.length - 1) {
                          this.pausedbuffer = buffer;
                          this.pausedindex = i;
                        }
                        return true;
                      }
                    }
                    this.pos = pos;
                    this.pausedbuffer = null;
                    this.pausedindex = -1;
                    return false;
                  }
                }
                function captureAsync(...args) {
                  return wrapper_awaiter(this, void 0, void 0, function* () {
                    requireAlt1();
                    var rect = Rect.fromArgs(...args);
                    if (alt1.captureAsync) {
                      let img = yield alt1.captureAsync(rect.x, rect.y, rect.width, rect.height);
                      return new imagedata_extensions_ImageData(img, rect.width, rect.height);
                    }
                    if (!hasAlt1Version("1.4.6")) {
                      return capture(rect.x, rect.y, rect.width, rect.height);
                    }
                    var url = "https://alt1api/pixel/getregion/" + encodeURIComponent(JSON.stringify(Object.assign(Object.assign({}, rect), { format: "raw", quality: 1 })));
                    var res = yield fetch(url);
                    var imgreader = new wrapper_ImageStreamReader(res.body.getReader(), rect.width, rect.height);
                    return imgreader.nextImage();
                  });
                }
                function captureMultiAsync(areas) {
                  return wrapper_awaiter(this, void 0, void 0, function* () {
                    requireAlt1();
                    var r = {};
                    if (alt1.captureMultiAsync) {
                      let bufs = yield alt1.captureMultiAsync(areas);
                      for (let a2 in areas) {
                        if (!bufs[a2]) {
                          r[a2] = null;
                        }
                        r[a2] = new imagedata_extensions_ImageData(bufs[a2], areas[a2].width, areas[a2].height);
                      }
                      return r;
                    }
                    var capts = [];
                    var captids = [];
                    for (var id in areas) {
                      if (areas[id]) {
                        capts.push(areas[id]);
                        captids.push(id);
                      } else {
                        r[id] = null;
                      }
                    }
                    if (capts.length == 0) {
                      return r;
                    }
                    if (!hasAlt1Version("1.5.1")) {
                      var proms = [];
                      for (var a = 0; a < capts.length; a++) {
                        proms.push(captureAsync(capts[a]));
                      }
                      var results = yield Promise.all(proms);
                      for (var a = 0; a < capts.length; a++) {
                        r[captids[a]] = results[a];
                      }
                    } else {
                      var res = yield fetch("https://alt1api/pixel/getregionmulti/" + encodeURIComponent(JSON.stringify({ areas: capts, format: "raw", quality: 1 })));
                      var imgreader = new wrapper_ImageStreamReader(res.body.getReader());
                      for (var a = 0; a < capts.length; a++) {
                        var capt = capts[a];
                        imgreader.setFrameBuffer(new imagedata_extensions_ImageData(capt.width, capt.height));
                        r[captids[a]] = yield imgreader.nextImage();
                      }
                    }
                    return r;
                  });
                }
                function captureStream(x, y, width, height, fps, framecb, errorcb) {
                  requireAlt1();
                  if (!hasAlt1Version("1.4.6")) {
                    throw new Alt1Error("This function is not supported in this version of Alt1");
                  }
                  var url = "https://alt1api/pixel/streamregion/" + encodeURIComponent(JSON.stringify({ x, y, width, height, fps, format: "raw" }));
                  var res = fetch(url).then((res2) => wrapper_awaiter(this, void 0, void 0, function* () {
                    var reader = new wrapper_ImageStreamReader(res2.body.getReader(), width, height);
                    try {
                      while (!reader.closed && !state.closed) {
                        var img = yield reader.nextImage();
                        if (!state.closed) {
                          framecb(img);
                          state.framenr++;
                        }
                      }
                    } catch (e) {
                      if (!state.closed) {
                        reader.close();
                        if (errorcb) {
                          errorcb(e);
                        } else {
                          throw e;
                        }
                      }
                    }
                    if (!reader.closed && state.closed) {
                      reader.close();
                    }
                  }));
                  var state = {
                    x,
                    y,
                    width,
                    height,
                    framenr: 0,
                    close: () => {
                      state.closed = true;
                    },
                    closed: false
                  };
                  return state;
                }
                var imagedetect_awaiter = function(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                };
                function imageDataFromUrl(url) {
                  return imagedetect_awaiter(this, void 0, void 0, function* () {
                    if (typeof Image != "undefined") {
                      var img = new Image();
                      img.crossOrigin = "crossorigin";
                      return yield new Promise((done, fail) => {
                        img.onload = function() {
                          done(img.toBuffer());
                        };
                        img.onerror = fail;
                        img.src = url;
                      });
                    } else {
                      var hdr = "data:image/png;base64,";
                      if (url.startsWith(hdr)) {
                        return imagedetect_imageDataFromBase64(url.slice(hdr.length));
                      }
                      throw new Error("loading remote images in nodejs has been disabled, load the raw bytes and use imageDataFromNodeBuffer instead");
                    }
                  });
                }
                function imagedetect_imageDataFromBase64(data) {
                  return imagedetect_awaiter(this, void 0, void 0, function* () {
                    if (typeof Image != "undefined") {
                      return imageDataFromUrl("data:image/png;base64," + data);
                    } else {
                      return imageDataFromBase64(data);
                    }
                  });
                }
                function imageDataFromFileBuffer(data) {
                  return imagedetect_awaiter(this, void 0, void 0, function* () {
                    clearPngColorspace(data);
                    if (typeof Image != "undefined") {
                      let blob = new Blob([data], { type: "image/png" });
                      let url = URL.createObjectURL(blob);
                      let r = yield imageDataFromUrl(url);
                      URL.revokeObjectURL(url);
                      return r;
                    } else {
                      return imageDataFromBuffer(data);
                    }
                  });
                }
                function isPngBuffer(bytes) {
                  return bytes[0] == 137 && bytes[1] == 80 && bytes[2] == 78 && bytes[3] == 71;
                }
                function clearPngColorspace(data) {
                  if (!isPngBuffer(data)) {
                    throw new Error("non-png image received");
                  }
                  var i = 8;
                  while (i < data.length) {
                    var length = data[i++] * 16777216 + data[i++] * 65536 + data[i++] * 256 + data[i++];
                    var ancillary = !!(data[i] >> 5 & 1);
                    var chunkname = String.fromCharCode(data[i], data[i + 1], data[i + 2], data[i + 3]);
                    var chunkid = chunkname.toLowerCase();
                    if (chunkid != "trns" && ancillary) {
                      data[i + 0] = "n".charCodeAt(0);
                      data[i + 1] = "o".charCodeAt(0);
                      data[i + 2] = "P".charCodeAt(0);
                      data[i + 3] = "E".charCodeAt(0);
                      var end = i + 4 + length;
                      var crc = 4294967295;
                      var bitcrc = function(bit2) {
                        for (var k = 0; k < 8; k++) {
                          if (bit2 & 1) {
                            bit2 = 3988292384 ^ bit2 >>> 1;
                          } else {
                            bit2 = bit2 >>> 1;
                          }
                        }
                        return bit2;
                      };
                      for (var a = i; a < end; a++) {
                        if (a >= i + 4) {
                          data[a] = 0;
                        }
                        var bit = data[a];
                        crc = bitcrc((crc ^ bit) & 255) ^ crc >>> 8;
                      }
                      crc = crc ^ 4294967295;
                      data[i + 4 + length + 0] = crc >> 24 & 255;
                      data[i + 4 + length + 1] = crc >> 16 & 255;
                      data[i + 4 + length + 2] = crc >> 8 & 255;
                      data[i + 4 + length + 3] = crc >> 0 & 255;
                    }
                    if (chunkname == "IEND") {
                      break;
                    }
                    i += 4;
                    i += length;
                    i += 4;
                  }
                }
                function findSubimage(haystackImgref, needleBuffer, sx = 0, sy = 0, sw = haystackImgref.width, sh = haystackImgref.height) {
                  if (!haystackImgref) {
                    throw new TypeError();
                  }
                  if (!needleBuffer) {
                    throw new TypeError();
                  }
                  var max = 30;
                  if (haystackImgref instanceof imgref_ImgRefBind && hasAlt1 && alt1.bindFindSubImg) {
                    var needlestr = encodeImageString(needleBuffer);
                    var r = alt1.bindFindSubImg(haystackImgref.handle, needlestr, needleBuffer.width, sx, sy, sw, sh);
                    if (!r) {
                      throw new Alt1Error();
                    }
                    return JSON.parse(r);
                  }
                  return findSubbuffer(haystackImgref.read(), needleBuffer, sx, sy, sw, sh);
                }
                function findSubbuffer(haystack, needle, sx = 0, sy = 0, sw = haystack.width, sh = haystack.height) {
                  var r = [];
                  var maxdif = 30;
                  var maxresults = 50;
                  var needlestride = needle.width * 4;
                  var heystackstride = haystack.width * 4;
                  var checkList = [];
                  for (var y = 0; y < needle.height; y++) {
                    for (var x = 0; x < needle.width; x++) {
                      var i = x * 4 + y * needlestride;
                      if (needle.data[i + 3] == 255) {
                        checkList.push({ x, y });
                      }
                      if (checkList.length == 10) {
                        break;
                      }
                    }
                    if (checkList.length == 10) {
                      break;
                    }
                  }
                  var cw = sx + sw - needle.width;
                  var ch = sy + sh - needle.height;
                  var checklength = checkList.length;
                  for (var y = sy; y <= ch; y++) {
                    outer: for (var x = sx; x <= cw; x++) {
                      for (var a = 0; a < checklength; a++) {
                        var i1 = (x + checkList[a].x) * 4 + (y + checkList[a].y) * heystackstride;
                        var i2 = checkList[a].x * 4 + checkList[a].y * needlestride;
                        var d = 0;
                        d = d + Math.abs(haystack.data[i1 + 0] - needle.data[i2 + 0]) | 0;
                        d = d + Math.abs(haystack.data[i1 + 1] - needle.data[i2 + 1]) | 0;
                        d = d + Math.abs(haystack.data[i1 + 2] - needle.data[i2 + 2]) | 0;
                        d *= 255 / needle.data[i2 + 3];
                        if (d > maxdif) {
                          continue outer;
                        }
                      }
                      if (simpleCompare(haystack, needle, x, y, maxdif) != Infinity) {
                        r.push({ x, y });
                        if (r.length > maxresults) {
                          return r;
                        }
                      }
                    }
                  }
                  return r;
                }
                function simpleCompare(bigbuf, checkbuf, x, y, max = 30) {
                  if (x < 0 || y < 0) {
                    throw new RangeError();
                  }
                  if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
                    throw new RangeError();
                  }
                  if (max == -1) {
                    max = 255 * 4;
                  }
                  var dif = 0;
                  for (var step = 8; step >= 1; step /= 2) {
                    for (var cx = 0; cx < checkbuf.width; cx += step) {
                      for (var cy = 0; cy < checkbuf.height; cy += step) {
                        var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
                        var i2 = cx * 4 + cy * checkbuf.width * 4;
                        var d = 0;
                        d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
                        d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
                        d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
                        d *= checkbuf.data[i2 + 3] / 255;
                        if (step == 1) {
                          dif += d;
                        }
                        if (d > max) {
                          return Infinity;
                        }
                      }
                    }
                  }
                  return dif / checkbuf.width / checkbuf.height;
                }
                function coldif(r1, g1, b1, r2, g2, b2, a2) {
                  return (Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)) * a2 / 255;
                }
                function asyncMap(input) {
                  var raw = {};
                  var promises = [];
                  for (var a in input) {
                    if (input.hasOwnProperty(a)) {
                      raw[a] = null;
                      promises.push(input[a].then(function(a2, i) {
                        raw[a2] = i;
                        r[a2] = i;
                      }.bind(null, a)));
                    }
                  }
                  var r = {};
                  var promise = Promise.all(promises).then(() => {
                    r.loaded = true;
                    return r;
                  });
                  Object.defineProperty(r, "loaded", { enumerable: false, value: false, writable: true });
                  Object.defineProperty(r, "promise", { enumerable: false, value: promise });
                  Object.defineProperty(r, "raw", { enumerable: false, value: raw });
                  return Object.assign(r, raw);
                }
                function webpackImages(input) {
                  return asyncMap(input);
                }
                class imagedetect_ImageDataSet {
                  constructor() {
                    this.buffers = [];
                  }
                  matchBest(img, x, y, max) {
                    let best = null;
                    let bestscore = max;
                    for (let a = 0; a < this.buffers.length; a++) {
                      let score = img.pixelCompare(this.buffers[a], x, y, bestscore);
                      if (isFinite(score) && (bestscore == void 0 || score < bestscore)) {
                        bestscore = score;
                        best = a;
                      }
                    }
                    if (best == null) {
                      return null;
                    }
                    return { index: best, score: bestscore };
                  }
                  static fromFilmStrip(baseimg, width) {
                    if (baseimg.width % width != 0) {
                      throw new Error("slice size does not fit in base img");
                    }
                    let r = new imagedetect_ImageDataSet();
                    for (let x = 0; x < baseimg.width; x += width) {
                      r.buffers.push(baseimg.clone(new Rect(x, 0, width, baseimg.height)));
                    }
                    return r;
                  }
                  static fromFilmStripUneven(baseimg, widths) {
                    let r = new imagedetect_ImageDataSet();
                    let x = 0;
                    for (let w of widths) {
                      r.buffers.push(baseimg.clone(new Rect(x, 0, w, baseimg.height)));
                      x += w;
                      if (x > baseimg.width) {
                        throw new Error("sampling filmstrip outside bounds");
                      }
                    }
                    if (x != baseimg.width) {
                      throw new Error("unconsumed pixels left in film strip imagedata");
                    }
                    return r;
                  }
                  static fromAtlas(baseimg, slices) {
                    let r = new imagedetect_ImageDataSet();
                    for (let slice of slices) {
                      r.buffers.push(baseimg.clone(slice));
                    }
                    return r;
                  }
                }
                var listeners = [];
                var started = false;
                var dndStarted = false;
                var pasting = false;
                var lastref = null;
                function listen(func, errorfunc, dragndrop) {
                  listeners.push({ cb: func, error: errorfunc });
                  if (!started) {
                    start();
                  }
                  if (dragndrop && !dndStarted) {
                    startDragNDrop();
                  }
                }
                function unlisten(func) {
                  let i = listeners.findIndex((c) => c.cb == func);
                  if (i != -1) {
                    listeners.splice(i, 1);
                  }
                }
                function triggerPaste(img) {
                  lastref = img;
                  for (var a in listeners) {
                    listeners[a].cb(lastref);
                  }
                }
                function pasted(img) {
                  pasting = false;
                  let cnv = img instanceof HTMLCanvasElement ? img : img.toCanvas();
                  triggerPaste(new ImgRefCtx(cnv));
                }
                function error(mes, error2) {
                  var _a, _b;
                  pasting = false;
                  for (var a in listeners) {
                    (_b = (_a = listeners[a]).error) === null || _b === void 0 ? void 0 : _b.call(_a, mes, error2);
                  }
                }
                function startDragNDrop() {
                  var getitem = function(items) {
                    var foundimage = "";
                    for (var a = 0; a < items.length; a++) {
                      var item = items[a];
                      var m = item.type.match(/^image\/(\w+)$/);
                      if (m) {
                        if (m[1] == "png") {
                          return item;
                        } else {
                          foundimage = m[1];
                        }
                      }
                    }
                    if (foundimage) {
                      error("The image you uploaded is not a .png image. Other image type have compression noise and can't be used for image detection.", "notpng");
                    }
                    return null;
                  };
                  window.addEventListener("dragover", function(e) {
                    e.preventDefault();
                  });
                  window.addEventListener("drop", function(e) {
                    if (!e.dataTransfer) {
                      return;
                    }
                    var item = getitem(e.dataTransfer.items);
                    e.preventDefault();
                    if (!item) {
                      return;
                    }
                    fromFile(item.getAsFile());
                  });
                }
                function start() {
                  if (started) {
                    return;
                  }
                  started = true;
                  var ischrome = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/);
                  var apipasted = function(e) {
                    if (!e.clipboardData) {
                      return;
                    }
                    for (var a = 0; a < e.clipboardData.items.length; a++) {
                      if (e.clipboardData.items[a].type.indexOf("image") != -1) {
                        fromFile(e.clipboardData.items[a].getAsFile());
                      }
                    }
                  };
                  if (ischrome) {
                    document.addEventListener("paste", apipasted);
                  } else {
                    var catcher = document.createElement("div");
                    catcher.setAttribute("contenteditable", "");
                    catcher.className = "forcehidden";
                    catcher.onpaste = function(e) {
                      if (e.clipboardData && e.clipboardData.items) {
                        apipasted(e);
                        return;
                      }
                      setTimeout(function() {
                        var b = catcher.children[0];
                        if (!b || b.tagName != "IMG") {
                          return;
                        }
                        var img = new Image();
                        img.src = b.src;
                        var a = img.src.match(/^data:([\w\/]+);/);
                        if (img.width > 0) {
                          pasted(img);
                        } else {
                          img.onload = function() {
                            pasted(img);
                          };
                        }
                        catcher.innerHTML = "";
                      }, 1);
                    };
                    document.body.appendChild(catcher);
                  }
                  document.addEventListener("keydown", function(e) {
                    if (e.target.tagName == "INPUT") {
                      return;
                    }
                    if (e.keyCode != "V".charCodeAt(0) || !e.ctrlKey) {
                      return;
                    }
                    pasting = true;
                    setTimeout(function() {
                      if (pasting) {
                        error("You pressed Ctrl+V, but no image was pasted by your browser, make sure your clipboard contains an image, and not a link to an image.", "noimg");
                      }
                    }, 1e3);
                    if (catcher) {
                      catcher.focus();
                    }
                  });
                }
                function fileDialog() {
                  var fileinput = document.createElement("input");
                  fileinput.type = "file";
                  fileinput.accept = "image/png";
                  fileinput.onchange = function() {
                    if (fileinput.files && fileinput.files[0]) {
                      fromFile(fileinput.files[0]);
                    }
                  };
                  fileinput.click();
                  return fileinput;
                }
                function fromFile(file) {
                  if (!file) {
                    return;
                  }
                  var reader = new FileReader();
                  reader.onload = function() {
                    var bytearray = new Uint8Array(reader.result);
                    if (isPngBuffer(bytearray)) {
                      clearPngColorspace(bytearray);
                    }
                    var blob = new Blob([bytearray], { type: "image/png" });
                    var img = new Image();
                    img.onerror = () => error("The file you uploaded could not be opened as an image.", "invalidfile");
                    var bloburl = URL.createObjectURL(blob);
                    img.src = bloburl;
                    if (img.width > 0) {
                      pasted(img);
                      URL.revokeObjectURL(bloburl);
                    } else {
                      img.onload = function() {
                        pasted(img);
                        URL.revokeObjectURL(bloburl);
                      };
                    }
                  };
                  reader.readAsArrayBuffer(file);
                }
                __webpack_require__.d(__webpack_exports__, "PasteInput", function() {
                  return pasteinput_namespaceObject;
                });
                __webpack_require__.d(__webpack_exports__, "ImageDetect", function() {
                  return imagedetect_namespaceObject;
                });
                __webpack_require__.d(__webpack_exports__, "Rect", function() {
                  return Rect;
                });
                __webpack_require__.d(__webpack_exports__, "ImageData", function() {
                  return imagedata_extensions_ImageData;
                });
                __webpack_require__.d(__webpack_exports__, "ImgRef", function() {
                  return imgref_ImgRef;
                });
                __webpack_require__.d(__webpack_exports__, "ImgRefCtx", function() {
                  return ImgRefCtx;
                });
                __webpack_require__.d(__webpack_exports__, "ImgRefBind", function() {
                  return imgref_ImgRefBind;
                });
                __webpack_require__.d(__webpack_exports__, "ImgRefData", function() {
                  return ImgRefData;
                });
                __webpack_require__.d(__webpack_exports__, "NoAlt1Error", function() {
                  return NoAlt1Error;
                });
                __webpack_require__.d(__webpack_exports__, "Alt1Error", function() {
                  return Alt1Error;
                });
                __webpack_require__.d(__webpack_exports__, "newestversion", function() {
                  return newestversion;
                });
                __webpack_require__.d(__webpack_exports__, "hasAlt1", function() {
                  return hasAlt1;
                });
                __webpack_require__.d(__webpack_exports__, "skinName", function() {
                  return skinName;
                });
                __webpack_require__.d(__webpack_exports__, "openbrowser", function() {
                  return openbrowser;
                });
                __webpack_require__.d(__webpack_exports__, "requireAlt1", function() {
                  return requireAlt1;
                });
                __webpack_require__.d(__webpack_exports__, "getdisplaybounds", function() {
                  return getdisplaybounds;
                });
                __webpack_require__.d(__webpack_exports__, "capture", function() {
                  return capture;
                });
                __webpack_require__.d(__webpack_exports__, "captureHold", function() {
                  return captureHold;
                });
                __webpack_require__.d(__webpack_exports__, "captureHoldScreen", function() {
                  return captureHoldScreen;
                });
                __webpack_require__.d(__webpack_exports__, "captureHoldFullRs", function() {
                  return captureHoldFullRs;
                });
                __webpack_require__.d(__webpack_exports__, "transferImageData", function() {
                  return transferImageData;
                });
                __webpack_require__.d(__webpack_exports__, "decodeImageString", function() {
                  return decodeImageString;
                });
                __webpack_require__.d(__webpack_exports__, "encodeImageString", function() {
                  return encodeImageString;
                });
                __webpack_require__.d(__webpack_exports__, "mixColor", function() {
                  return mixColor;
                });
                __webpack_require__.d(__webpack_exports__, "unmixColor", function() {
                  return unmixColor;
                });
                __webpack_require__.d(__webpack_exports__, "identifyApp", function() {
                  return identifyApp;
                });
                __webpack_require__.d(__webpack_exports__, "resetEnvironment", function() {
                  return resetEnvironment;
                });
                __webpack_require__.d(__webpack_exports__, "hasAlt1Version", function() {
                  return hasAlt1Version;
                });
                __webpack_require__.d(__webpack_exports__, "getMousePosition", function() {
                  return getMousePosition;
                });
                __webpack_require__.d(__webpack_exports__, "addResizeElement", function() {
                  return addResizeElement;
                });
                __webpack_require__.d(__webpack_exports__, "on", function() {
                  return on;
                });
                __webpack_require__.d(__webpack_exports__, "removeListener", function() {
                  return removeListener;
                });
                __webpack_require__.d(__webpack_exports__, "once", function() {
                  return once;
                });
                __webpack_require__.d(__webpack_exports__, "ImageStreamReader", function() {
                  return wrapper_ImageStreamReader;
                });
                __webpack_require__.d(__webpack_exports__, "captureAsync", function() {
                  return captureAsync;
                });
                __webpack_require__.d(__webpack_exports__, "captureMultiAsync", function() {
                  return captureMultiAsync;
                });
                __webpack_require__.d(__webpack_exports__, "captureStream", function() {
                  return captureStream;
                });
              })
            ),
            /***/
            0: (
              /***/
              (function(module2, exports2, __webpack_require__) {
                module2.exports = __webpack_require__("./index.ts");
              })
            )
            /******/
          })
        );
      });
    }
  });

  // node_modules/@alt1/ocr/dist/index.bundle.js
  var require_index_bundle2 = __commonJS({
    "node_modules/@alt1/ocr/dist/index.bundle.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory(require_index_bundle());
        else if (typeof define === "function" && define.amd)
          define(["@alt1/base"], factory);
        else if (typeof exports === "object")
          exports["@alt1/ocr"] = factory(require_index_bundle());
        else
          root["OCR"] = factory(root["A1lib"]);
      })(typeof self != "undefined" ? self : exports, function(__WEBPACK_EXTERNAL_MODULE__alt1_base__) {
        return (
          /******/
          (function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
              if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
              }
              var module2 = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
              };
              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              module2.l = true;
              return module2.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports2, name, getter) {
              if (!__webpack_require__.o(exports2, name)) {
                Object.defineProperty(exports2, name, { enumerable: true, get: getter });
              }
            };
            __webpack_require__.r = function(exports2) {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
            __webpack_require__.t = function(value, mode) {
              if (mode & 1) value = __webpack_require__(value);
              if (mode & 8) return value;
              if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
              var ns = /* @__PURE__ */ Object.create(null);
              __webpack_require__.r(ns);
              Object.defineProperty(ns, "default", { enumerable: true, value });
              if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key2) {
                return value[key2];
              }.bind(null, key));
              return ns;
            };
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? (
                /******/
                function getDefault() {
                  return module2["default"];
                }
              ) : (
                /******/
                function getModuleExports() {
                  return module2;
                }
              );
              __webpack_require__.d(getter, "a", getter);
              return getter;
            };
            __webpack_require__.o = function(object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 0);
          })({
            /***/
            "./index.ts": (
              /***/
              (function(module2, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, "debug", function() {
                  return debug;
                });
                __webpack_require__.d(__webpack_exports__, "debugout", function() {
                  return debugout;
                });
                __webpack_require__.d(__webpack_exports__, "debugFont", function() {
                  return debugFont;
                });
                __webpack_require__.d(__webpack_exports__, "unblendBlackBackground", function() {
                  return unblendBlackBackground;
                });
                __webpack_require__.d(__webpack_exports__, "unblendKnownBg", function() {
                  return unblendKnownBg;
                });
                __webpack_require__.d(__webpack_exports__, "unblendTrans", function() {
                  return unblendTrans;
                });
                __webpack_require__.d(__webpack_exports__, "canblend", function() {
                  return canblend;
                });
                __webpack_require__.d(__webpack_exports__, "decompose2col", function() {
                  return decompose2col;
                });
                __webpack_require__.d(__webpack_exports__, "decomposeblack", function() {
                  return decomposeblack;
                });
                __webpack_require__.d(__webpack_exports__, "decompose3col", function() {
                  return decompose3col;
                });
                __webpack_require__.d(__webpack_exports__, "findChar", function() {
                  return findChar;
                });
                __webpack_require__.d(__webpack_exports__, "findReadLine", function() {
                  return findReadLine;
                });
                __webpack_require__.d(__webpack_exports__, "GetChatColorMono", function() {
                  return GetChatColorMono;
                });
                __webpack_require__.d(__webpack_exports__, "getChatColor", function() {
                  return getChatColor;
                });
                __webpack_require__.d(__webpack_exports__, "readLine", function() {
                  return readLine;
                });
                __webpack_require__.d(__webpack_exports__, "readSmallCapsBackwards", function() {
                  return readSmallCapsBackwards;
                });
                __webpack_require__.d(__webpack_exports__, "readChar", function() {
                  return readChar;
                });
                __webpack_require__.d(__webpack_exports__, "generatefont", function() {
                  return generatefont;
                });
                var _alt1_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@alt1/base");
                var _alt1_base__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_alt1_base__WEBPACK_IMPORTED_MODULE_0__);
                var debug = {
                  printcharscores: false,
                  trackread: false
                };
                var debugout = {};
                function debugFont(font) {
                  var spacing = font.width + 2;
                  var buf = new _alt1_base__WEBPACK_IMPORTED_MODULE_0__["ImageData"](spacing * font.chars.length, font.height + 1);
                  for (var a = 0; a < buf.data.length; a += 4) {
                    buf.data[a] = buf.data[a + 1] = buf.data[a + 2] = 0;
                    buf.data[a + 3] = 255;
                  }
                  for (var a = 0; a < font.chars.length; a++) {
                    var bx = a * spacing;
                    var chr = font.chars[a];
                    for (var b = 0; b < chr.pixels.length; b += font.shadow ? 4 : 3) {
                      buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 2], chr.pixels[b + 2], chr.pixels[b + 2], 255]);
                      if (font.shadow) {
                        buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 3], 0, 0, 255]);
                      }
                    }
                  }
                  buf.show();
                }
                function unblendBlackBackground(img, r, g, b) {
                  var rimg = new _alt1_base__WEBPACK_IMPORTED_MODULE_0__["ImageData"](img.width, img.height);
                  for (var i = 0; i < img.data.length; i += 4) {
                    var col = decomposeblack(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b);
                    rimg.data[i + 0] = col[0] * 255;
                    rimg.data[i + 1] = rimg.data[i + 0];
                    rimg.data[i + 2] = rimg.data[i + 0];
                    rimg.data[i + 3] = 255;
                  }
                  return rimg;
                }
                function unblendKnownBg(img, bgimg, shadow, r, g, b) {
                  if (bgimg && (img.width != bgimg.width || img.height != bgimg.height)) {
                    throw "bgimg size doesn't match";
                  }
                  var rimg = new _alt1_base__WEBPACK_IMPORTED_MODULE_0__["ImageData"](img.width, img.height);
                  var totalerror = 0;
                  for (var i = 0; i < img.data.length; i += 4) {
                    var col = decompose2col(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b, bgimg.data[i + 0], bgimg.data[i + 1], bgimg.data[i + 2]);
                    if (shadow) {
                      if (col[2] > 0.01) {
                        console.log("high error component: " + (col[2] * 100).toFixed(1) + "%");
                      }
                      totalerror += col[2];
                      var m = 1 - col[1] - Math.abs(col[2]);
                      rimg.data[i + 0] = m * 255;
                      rimg.data[i + 1] = col[0] / m * 255;
                      rimg.data[i + 2] = rimg.data[i + 0];
                    } else {
                      rimg.data[i + 0] = col[0] * 255;
                      rimg.data[i + 1] = rimg.data[i + 0];
                      rimg.data[i + 2] = rimg.data[i + 0];
                    }
                    rimg.data[i + 3] = 255;
                  }
                  return rimg;
                }
                function unblendTrans(img, shadow, r, g, b) {
                  var rimg = new _alt1_base__WEBPACK_IMPORTED_MODULE_0__["ImageData"](img.width, img.height);
                  var pxlum = r + g + b;
                  for (var i = 0; i < img.data.length; i += 4) {
                    if (shadow) {
                      var lum = img.data[i + 0] + img.data[i + 1] + img.data[i + 2];
                      rimg.data[i + 0] = img.data[i + 3];
                      rimg.data[i + 1] = lum / pxlum * 255;
                      rimg.data[i + 2] = rimg.data[i + 0];
                    } else {
                      rimg.data[i + 0] = img.data[i + 3];
                      rimg.data[i + 1] = rimg.data[i + 0];
                      rimg.data[i + 2] = rimg.data[i + 0];
                    }
                    rimg.data[i + 3] = 255;
                  }
                  return rimg;
                }
                function canblend(rm, gm, bm, r1, g1, b1, p) {
                  var m = Math.min(50, p / (1 - p));
                  var r = rm + (rm - r1) * m;
                  var g = gm + (gm - g1) * m;
                  var b = bm + (bm - b1) * m;
                  return Math.max(-r, -g, -b, r - 255, g - 255, b - 255);
                }
                function decompose2col(rp, gp, bp, r1, g1, b1, r2, g2, b2) {
                  var r3 = g1 * b2 - g2 * b1;
                  var g3 = b1 * r2 - b2 * r1;
                  var b3 = r1 * g2 - r2 * g1;
                  var norm = 255 / Math.sqrt(r3 * r3 + g3 * g3 + b3 * b3);
                  r3 *= norm;
                  g3 *= norm;
                  b3 *= norm;
                  return decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3);
                }
                function decomposeblack(rp, gp, bp, r1, g1, b1) {
                  var dr = Math.abs(rp - r1);
                  var dg = Math.abs(gp - g1);
                  var db = Math.abs(bp - b1);
                  var maxdif = Math.max(dr, dg, db);
                  return [1 - maxdif / 255];
                }
                function decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3) {
                  var A = g2 * b3 - b2 * g3;
                  var B = g3 * b1 - b3 * g1;
                  var C = g1 * b2 - b1 * g2;
                  var D = b2 * r3 - r2 * b3;
                  var E = b3 * r1 - r3 * b1;
                  var F = b1 * r2 - r1 * b2;
                  var G = r2 * g3 - g2 * r3;
                  var H = r3 * g1 - g3 * r1;
                  var I = r1 * g2 - g1 * r2;
                  var det = r1 * A + g1 * D + b1 * G;
                  var x = (A * rp + D * gp + G * bp) / det;
                  var y = (B * rp + E * gp + H * bp) / det;
                  var z = (C * rp + F * gp + I * bp) / det;
                  return [x, y, z];
                }
                function findChar(buffer, font, col, x, y, w, h) {
                  if (x < 0) {
                    return null;
                  }
                  if (y - font.basey < 0) {
                    return null;
                  }
                  if (x + w + font.width > buffer.width) {
                    return null;
                  }
                  if (y + h - font.basey + font.height > buffer.height) {
                    return null;
                  }
                  var best = 1e3;
                  var bestchar = null;
                  for (var cx = x; cx < x + w; cx++) {
                    for (var cy = y; cy < y + h; cy++) {
                      var chr = readChar(buffer, font, col, cx, cy, false, false);
                      if (chr != null && chr.sizescore < best) {
                        best = chr.sizescore;
                        bestchar = chr;
                      }
                    }
                  }
                  return bestchar;
                }
                function findReadLine(buffer, font, cols, x, y, w = -1, h = -1) {
                  if (w == -1) {
                    w = font.width + font.spacewidth;
                    x -= Math.ceil(w / 2);
                  }
                  if (h == -1) {
                    h = 7;
                    y -= 1;
                  }
                  var chr = null;
                  if (cols.length > 1) {
                    var sorted = GetChatColorMono(buffer, new _alt1_base__WEBPACK_IMPORTED_MODULE_0__["Rect"](x, y - font.basey, w, h), cols);
                    for (var a = 0; a < 2 && a < sorted.length && chr == null; a++) {
                      chr = findChar(buffer, font, sorted[a].col, x, y, w, h);
                    }
                  } else {
                    chr = findChar(buffer, font, cols[0], x, y, w, h);
                  }
                  if (chr == null) {
                    return { debugArea: { x, y, w, h }, text: "", fragments: [] };
                  }
                  return readLine(buffer, font, cols, chr.x, chr.y, true, true);
                }
                function GetChatColorMono(buf, rect, colors) {
                  var colormap = colors.map((c) => ({ col: c, score: 0 }));
                  if (rect.x < 0 || rect.y < 0 || rect.x + rect.width > buf.width || rect.y + rect.height > buf.height) {
                    return colormap;
                  }
                  var data = buf.data;
                  var maxd = 50;
                  for (var colobj of colormap) {
                    var score = 0;
                    var col = colobj.col;
                    for (var y = rect.y; y < rect.y + rect.height; y++) {
                      for (var x = rect.x; x < rect.x + rect.width; x++) {
                        var i = x * 4 + y * 4 * buf.width;
                        var d = Math.abs(data[i] - col[0]) + Math.abs(data[i + 1] - col[1]) + Math.abs(data[i + 2] - col[2]);
                        if (d < maxd) {
                          score += maxd - d;
                        }
                      }
                    }
                    colobj.score = score;
                  }
                  return colormap.sort((a, b) => b.score - a.score);
                }
                function unblend(r, g, b, R, G, B) {
                  var m = Math.sqrt(r * r + g * g + b * b);
                  var n = Math.sqrt(R * R + G * G + B * B);
                  var x = (r * R + g * G + b * B) / n;
                  var y = Math.sqrt(Math.max(0, m * m - x * x));
                  var r1 = Math.max(0, (63.75 - y) * 4);
                  var r2 = x / n * 255;
                  if (r2 > 255) {
                    r1 = Math.max(0, r1 - r2 + 255);
                    r2 = 255;
                  }
                  return [r1, r2];
                }
                function getChatColor(buf, rect, colors) {
                  var bestscore = -1;
                  var best = null;
                  var b2 = 0;
                  var data = buf.data;
                  for (let col of colors) {
                    var score = 0;
                    for (var y = rect.y; y < rect.y + rect.height; y++) {
                      for (var x = rect.x; x < rect.x + rect.width; x++) {
                        if (x < 0 || x + 1 >= buf.width) {
                          continue;
                        }
                        if (y < 0 || y + 1 >= buf.width) {
                          continue;
                        }
                        let i1 = buf.pixelOffset(x, y);
                        let i2 = buf.pixelOffset(x + 1, y + 1);
                        var pixel1 = unblend(data[i1 + 0], data[i1 + 1], data[i1 + 2], col[0], col[1], col[2]);
                        var pixel2 = unblend(data[i2 + 0], data[i2 + 1], data[i2 + 2], col[0], col[1], col[2]);
                        var s = pixel1[0] / 255 * pixel1[1] / 255 * (pixel2[0] / 255 * (255 - pixel2[1]) / 255);
                        score += s;
                      }
                    }
                    if (score > bestscore) {
                      b2 = bestscore;
                      bestscore = score;
                      best = col;
                    } else if (score > b2) {
                      b2 = score;
                    }
                  }
                  return best;
                }
                function readLine(buffer, font, colors, x, y, forward, backward = false) {
                  if (typeof colors[0] != "number" && colors.length == 1) {
                    colors = colors[0];
                  }
                  var multicol = typeof colors[0] != "number";
                  var allcolors = multicol ? colors : [colors];
                  var detectcolor = function(sx, sy, backward2) {
                    var w = Math.floor(font.width * 1.5);
                    if (backward2) {
                      sx -= w;
                    }
                    sy -= font.basey;
                    return getChatColor(buffer, { x: sx, y: sy, width: w, height: font.height }, allcolors);
                  };
                  var fragments = [];
                  var x1 = x;
                  var x2 = x;
                  var maxspaces = typeof font.maxspaces == "number" ? font.maxspaces : 1;
                  let fragtext = "";
                  let fraghadprimary = false;
                  var lastcol = null;
                  let addfrag = (forward2) => {
                    if (!fragtext) {
                      return;
                    }
                    let frag = {
                      text: fragtext,
                      color: lastcol,
                      index: 0,
                      xstart: x + (forward2 ? fragstartdx : fragenddx),
                      xend: x + (forward2 ? fragenddx : fragstartdx)
                    };
                    if (forward2) {
                      fragments.push(frag);
                    } else {
                      fragments.unshift(frag);
                    }
                    fragtext = "";
                    fragstartdx = dx;
                    fraghadprimary = false;
                  };
                  for (var dirforward of [true, false]) {
                    if (dirforward && !forward) {
                      continue;
                    }
                    if (!dirforward && !backward) {
                      continue;
                    }
                    var dx = 0;
                    var fragstartdx = dx;
                    var fragenddx = dx;
                    var triedspaces = 0;
                    var triedrecol = false;
                    var col = multicol ? null : colors;
                    while (true) {
                      col = col || detectcolor(x + dx, y, !dirforward);
                      var chr = col ? readChar(buffer, font, col, x + dx, y, !dirforward, true) : null;
                      if (col == null || chr == null) {
                        if (triedspaces < maxspaces) {
                          dx += (dirforward ? 1 : -1) * font.spacewidth;
                          triedspaces++;
                          continue;
                        }
                        if (multicol && !triedrecol && fraghadprimary) {
                          dx -= (dirforward ? 1 : -1) * triedspaces * font.spacewidth;
                          triedspaces = 0;
                          col = null;
                          triedrecol = true;
                          continue;
                        }
                        if (dirforward) {
                          x2 = x + dx - font.spacewidth;
                        } else {
                          x1 = x + dx + font.spacewidth;
                        }
                        break;
                      } else {
                        if (lastcol && (col[0] != lastcol[0] || col[1] != lastcol[1] || col[2] != lastcol[2])) {
                          addfrag(dirforward);
                        }
                        var spaces = "";
                        for (var a = 0; a < triedspaces; a++) {
                          spaces += " ";
                        }
                        if (dirforward) {
                          fragtext += spaces + chr.chr;
                        } else {
                          fragtext = chr.chr + spaces + fragtext;
                        }
                        if (!chr.basechar.secondary) {
                          fraghadprimary = true;
                        }
                        triedspaces = 0;
                        triedrecol = false;
                        dx += (dirforward ? 1 : -1) * chr.basechar.width;
                        fragenddx = dx;
                        lastcol = col;
                      }
                    }
                    if (lastcol && fraghadprimary) {
                      addfrag(dirforward);
                    }
                  }
                  fragments.forEach((f, i) => f.index = i);
                  return {
                    debugArea: { x: x1, y: y - 9, w: x2 - x1, h: 10 },
                    text: fragments.map((f) => f.text).join(""),
                    fragments
                  };
                }
                function readSmallCapsBackwards(buffer, font, cols, x, y, w = -1, h = -1) {
                  if (w == -1) {
                    w = font.width + font.spacewidth;
                    x -= Math.ceil(w / 2);
                  }
                  if (h == -1) {
                    h = 7;
                    y -= 1;
                  }
                  var matchedchar = null;
                  var sorted = cols.length == 1 ? [{ col: cols[0], score: 1 }] : GetChatColorMono(buffer, new _alt1_base__WEBPACK_IMPORTED_MODULE_0__["Rect"](x, y - font.basey, w, h), cols);
                  for (var a = 0; a < 2 && a < sorted.length && matchedchar == null; a++) {
                    for (var cx = x + w - 1; cx >= x; cx--) {
                      var best = 1e3;
                      var bestchar = null;
                      for (var cy = y; cy < y + h; cy++) {
                        var chr = readChar(buffer, font, sorted[a].col, cx, cy, true, false);
                        if (chr != null && chr.sizescore < best) {
                          best = chr.sizescore;
                          bestchar = chr;
                        }
                      }
                      if (bestchar) {
                        matchedchar = bestchar;
                        break;
                      }
                    }
                  }
                  if (matchedchar == null) {
                    return { text: "", debugArea: { x, y, w, h } };
                  }
                  return readLine(buffer, font, cols, matchedchar.x, matchedchar.y, false, true);
                }
                function readChar(buffer, font, col, x, y, backwards, allowSecondary) {
                  y -= font.basey;
                  var shiftx = 0;
                  var shifty = font.basey;
                  var shadow = font.shadow;
                  var debugobj = null;
                  var debugimg = null;
                  if (debug.trackread) {
                    var name = x + ";" + y + " " + JSON.stringify(col);
                    if (!debugout[name]) {
                      debugout[name] = [];
                    }
                    debugobj = debugout[name];
                  }
                  if (y < 0 || y + font.height >= buffer.height) {
                    return null;
                  }
                  if (!backwards) {
                    if (x < 0 || x + font.width > buffer.width) {
                      return null;
                    }
                  } else {
                    if (x - font.width < 0 || x > buffer.width) {
                      return null;
                    }
                  }
                  var scores = [];
                  for (var chr = 0; chr < font.chars.length; chr++) {
                    var chrobj = font.chars[chr];
                    if (chrobj.secondary && !allowSecondary) {
                      continue;
                    }
                    scores[chr] = { score: 0, sizescore: 0, chr: chrobj };
                    var chrx = backwards ? x - chrobj.width : x;
                    if (debug.trackread) {
                      debugimg = new _alt1_base__WEBPACK_IMPORTED_MODULE_0__["ImageData"](font.width, font.height);
                    }
                    for (var a = 0; a < chrobj.pixels.length; ) {
                      var i = (chrx + chrobj.pixels[a]) * 4 + (y + chrobj.pixels[a + 1]) * buffer.width * 4;
                      var penalty = 0;
                      if (!shadow) {
                        penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0], col[1], col[2], chrobj.pixels[a + 2] / 255);
                        a += 3;
                      } else {
                        var lum = chrobj.pixels[a + 3] / 255;
                        penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0] * lum, col[1] * lum, col[2] * lum, chrobj.pixels[a + 2] / 255);
                        a += 4;
                      }
                      scores[chr].score += Math.max(0, penalty);
                      if (debugimg) {
                        debugimg.setPixel(chrobj.pixels[a], chrobj.pixels[a + 1], [penalty, penalty, penalty, 255]);
                      }
                    }
                    scores[chr].sizescore = scores[chr].score - chrobj.bonus;
                    if (debugobj) {
                      debugobj.push({ chr: chrobj.chr, score: scores[chr].sizescore, rawscore: scores[chr].score, img: debugimg });
                    }
                  }
                  scores.sort((a2, b) => a2.sizescore - b.sizescore);
                  if (debug.printcharscores) {
                    scores.slice(0, 5).forEach((q) => console.log(q.chr.chr, q.score.toFixed(3), q.sizescore.toFixed(3)));
                  }
                  var winchr = scores[0];
                  if (!winchr || winchr.score > 400) {
                    return null;
                  }
                  return { chr: winchr.chr.chr, basechar: winchr.chr, x: x + shiftx, y: y + shifty, score: winchr.score, sizescore: winchr.sizescore };
                }
                function generatefont(unblended, chars, seconds, bonusses, basey, spacewidth, treshold, shadow) {
                  treshold *= 255;
                  var miny = unblended.height - 1;
                  var maxy = 0;
                  var font = { chars: [], width: 0, spacewidth, shadow, height: 0, basey: 0 };
                  var ds = false;
                  var chardata = [];
                  for (var dx = 0; dx < unblended.width; dx++) {
                    var i = 4 * dx + 4 * unblended.width * (unblended.height - 1);
                    if (unblended.data[i] == 255 && unblended.data[i + 3] == 255) {
                      if (ds === false) {
                        ds = dx;
                      }
                    } else {
                      if (ds !== false) {
                        var de = dx;
                        var char = chars[chardata.length];
                        var chr = {
                          ds,
                          de,
                          width: de - ds,
                          chr: char,
                          bonus: bonusses && bonusses[char] || 0,
                          secondary: seconds.indexOf(chars[chardata.length]) != -1,
                          pixels: []
                        };
                        chardata.push(chr);
                        font.width = Math.max(font.width, chr.width);
                        for (x = 0; x < de - ds; x++) {
                          for (y = 0; y < unblended.height - 1; y++) {
                            var i = (x + ds) * 4 + y * unblended.width * 4;
                            if (unblended.data[i] >= treshold) {
                              miny = Math.min(miny, y);
                              maxy = Math.max(maxy, y);
                            }
                          }
                        }
                        ds = false;
                      }
                    }
                  }
                  font.height = maxy + 1 - miny;
                  font.basey = basey - miny;
                  for (var a in chardata) {
                    var chr = chardata[a];
                    for (var x = 0; x < chr.width; x++) {
                      for (var y = 0; y < maxy + 1 - miny; y++) {
                        var i = (x + chr.ds) * 4 + (y + miny) * unblended.width * 4;
                        if (unblended.data[i] >= treshold) {
                          chr.pixels.push(x, y);
                          chr.pixels.push(unblended.data[i]);
                          if (shadow) {
                            chr.pixels.push(unblended.data[i + 1]);
                          }
                          chr.bonus += 5;
                        }
                      }
                    }
                    chr.bonus = +chr.bonus.toFixed(3);
                    font.chars.push({ width: chr.width, bonus: chr.bonus, chr: chr.chr, pixels: chr.pixels, secondary: chr.secondary });
                  }
                  return font;
                }
              })
            ),
            /***/
            0: (
              /***/
              (function(module2, exports2, __webpack_require__) {
                module2.exports = __webpack_require__("./index.ts");
              })
            ),
            /***/
            "@alt1/base": (
              /***/
              (function(module2, exports2) {
                module2.exports = __WEBPACK_EXTERNAL_MODULE__alt1_base__;
              })
            )
            /******/
          })
        );
      });
    }
  });

  // node_modules/@alt1/ocr/fonts/aa_12px_mono.fontmeta.json
  var aa_12px_mono_fontmeta_default;
  var init_aa_12px_mono_fontmeta = __esm({
    "node_modules/@alt1/ocr/fonts/aa_12px_mono.fontmeta.json"() {
      aa_12px_mono_fontmeta_default = { "chars": [{ "width": 3, "bonus": 360, "chr": "!", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255], "secondary": false }, { "width": 6, "bonus": 720, "chr": '"', "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255], "secondary": true }, { "width": 10, "bonus": 1200, "chr": "#", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "$", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "%", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 15, "bonus": 1800, "chr": "&", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255], "secondary": false }, { "width": 4, "bonus": 480, "chr": "'", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255], "secondary": true }, { "width": 5, "bonus": 600, "chr": "(", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255], "secondary": false }, { "width": 6, "bonus": 720, "chr": ")", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255], "secondary": false }, { "width": 7, "bonus": 840, "chr": "*", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "+", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 4, "bonus": 480, "chr": ",", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255], "secondary": true }, { "width": 7, "bonus": 840, "chr": "-", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255], "secondary": true }, { "width": 4, "bonus": 480, "chr": ".", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255], "secondary": true }, { "width": 10, "bonus": 1200, "chr": "/", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "0", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 7, "bonus": 840, "chr": "1", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "2", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "3", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "4", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 8, "bonus": 960, "chr": "5", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "6", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "7", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "8", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "9", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 4, "bonus": 480, "chr": ":", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255], "secondary": true }, { "width": 4, "bonus": 480, "chr": ";", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255], "secondary": true }, { "width": 9, "bonus": 1080, "chr": "<", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "=", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": ">", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "?", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "@", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "A", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "B", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 12, "bonus": 1440, "chr": "C", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "D", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "E", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "F", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "G", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 15, "bonus": 1800, "chr": "H", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255], "secondary": false }, { "width": 7, "bonus": 840, "chr": "I", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255], "secondary": false }, { "width": 7, "bonus": 840, "chr": "J", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255], "secondary": false }, { "width": 13, "bonus": 1560, "chr": "K", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "L", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 18, "bonus": 2160, "chr": "M", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255, 15, 0, 255, 15, 1, 255, 15, 2, 255, 15, 3, 255, 15, 4, 255, 15, 5, 255, 15, 6, 255, 15, 7, 255, 15, 8, 255, 15, 9, 255, 15, 10, 255, 15, 11, 255, 15, 12, 255, 15, 13, 255, 15, 14, 255, 15, 15, 255, 15, 16, 255, 15, 17, 255, 15, 18, 255, 15, 19, 255, 15, 20, 255, 15, 21, 255, 15, 22, 255, 15, 23, 255, 16, 0, 255, 16, 1, 255, 16, 2, 255, 16, 3, 255, 16, 4, 255, 16, 5, 255, 16, 6, 255, 16, 7, 255, 16, 8, 255, 16, 9, 255, 16, 10, 255, 16, 11, 255, 16, 12, 255, 16, 13, 255, 16, 14, 255, 16, 15, 255, 16, 16, 255, 16, 17, 255, 16, 18, 255, 16, 19, 255, 16, 20, 255, 16, 21, 255, 16, 22, 255, 16, 23, 255, 17, 0, 255, 17, 1, 255, 17, 2, 255, 17, 3, 255, 17, 4, 255, 17, 5, 255, 17, 6, 255, 17, 7, 255, 17, 8, 255, 17, 9, 255, 17, 10, 255, 17, 11, 255, 17, 12, 255, 17, 13, 255, 17, 14, 255, 17, 15, 255, 17, 16, 255, 17, 17, 255, 17, 18, 255, 17, 19, 255, 17, 20, 255, 17, 21, 255, 17, 22, 255, 17, 23, 255], "secondary": false }, { "width": 15, "bonus": 1800, "chr": "N", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255], "secondary": false }, { "width": 15, "bonus": 1800, "chr": "O", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "P", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "Q", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "R", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 8, "bonus": 960, "chr": "S", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255], "secondary": false }, { "width": 13, "bonus": 1560, "chr": "T", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "U", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "V", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 19, "bonus": 2280, "chr": "W", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255, 15, 0, 255, 15, 1, 255, 15, 2, 255, 15, 3, 255, 15, 4, 255, 15, 5, 255, 15, 6, 255, 15, 7, 255, 15, 8, 255, 15, 9, 255, 15, 10, 255, 15, 11, 255, 15, 12, 255, 15, 13, 255, 15, 14, 255, 15, 15, 255, 15, 16, 255, 15, 17, 255, 15, 18, 255, 15, 19, 255, 15, 20, 255, 15, 21, 255, 15, 22, 255, 15, 23, 255, 16, 0, 255, 16, 1, 255, 16, 2, 255, 16, 3, 255, 16, 4, 255, 16, 5, 255, 16, 6, 255, 16, 7, 255, 16, 8, 255, 16, 9, 255, 16, 10, 255, 16, 11, 255, 16, 12, 255, 16, 13, 255, 16, 14, 255, 16, 15, 255, 16, 16, 255, 16, 17, 255, 16, 18, 255, 16, 19, 255, 16, 20, 255, 16, 21, 255, 16, 22, 255, 16, 23, 255, 17, 0, 255, 17, 1, 255, 17, 2, 255, 17, 3, 255, 17, 4, 255, 17, 5, 255, 17, 6, 255, 17, 7, 255, 17, 8, 255, 17, 9, 255, 17, 10, 255, 17, 11, 255, 17, 12, 255, 17, 13, 255, 17, 14, 255, 17, 15, 255, 17, 16, 255, 17, 17, 255, 17, 18, 255, 17, 19, 255, 17, 20, 255, 17, 21, 255, 17, 22, 255, 17, 23, 255, 18, 0, 255, 18, 1, 255, 18, 2, 255, 18, 3, 255, 18, 4, 255, 18, 5, 255, 18, 6, 255, 18, 7, 255, 18, 8, 255, 18, 9, 255, 18, 10, 255, 18, 11, 255, 18, 12, 255, 18, 13, 255, 18, 14, 255, 18, 15, 255, 18, 16, 255, 18, 17, 255, 18, 18, 255, 18, 19, 255, 18, 20, 255, 18, 21, 255, 18, 22, 255, 18, 23, 255], "secondary": false }, { "width": 13, "bonus": 1560, "chr": "X", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "Y", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 11, "bonus": 1320, "chr": "Z", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255], "secondary": false }, { "width": 5, "bonus": 600, "chr": "[", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "\\", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 5, "bonus": 600, "chr": "]", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "^", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "_", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "a", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "b", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 12, "bonus": 1440, "chr": "c", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255], "secondary": false }, { "width": 15, "bonus": 1800, "chr": "d", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "e", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "f", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 15, "bonus": 1800, "chr": "g", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255], "secondary": false }, { "width": 15, "bonus": 1800, "chr": "h", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255], "secondary": false }, { "width": 7, "bonus": 840, "chr": "i", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255], "secondary": false }, { "width": 7, "bonus": 840, "chr": "j", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255], "secondary": false }, { "width": 13, "bonus": 1560, "chr": "k", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "l", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }, { "width": 18, "bonus": 2160, "chr": "m", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255, 15, 0, 255, 15, 1, 255, 15, 2, 255, 15, 3, 255, 15, 4, 255, 15, 5, 255, 15, 6, 255, 15, 7, 255, 15, 8, 255, 15, 9, 255, 15, 10, 255, 15, 11, 255, 15, 12, 255, 15, 13, 255, 15, 14, 255, 15, 15, 255, 15, 16, 255, 15, 17, 255, 15, 18, 255, 15, 19, 255, 15, 20, 255, 15, 21, 255, 15, 22, 255, 15, 23, 255, 16, 0, 255, 16, 1, 255, 16, 2, 255, 16, 3, 255, 16, 4, 255, 16, 5, 255, 16, 6, 255, 16, 7, 255, 16, 8, 255, 16, 9, 255, 16, 10, 255, 16, 11, 255, 16, 12, 255, 16, 13, 255, 16, 14, 255, 16, 15, 255, 16, 16, 255, 16, 17, 255, 16, 18, 255, 16, 19, 255, 16, 20, 255, 16, 21, 255, 16, 22, 255, 16, 23, 255, 17, 0, 255, 17, 1, 255, 17, 2, 255, 17, 3, 255, 17, 4, 255, 17, 5, 255, 17, 6, 255, 17, 7, 255, 17, 8, 255, 17, 9, 255, 17, 10, 255, 17, 11, 255, 17, 12, 255, 17, 13, 255, 17, 14, 255, 17, 15, 255, 17, 16, 255, 17, 17, 255, 17, 18, 255, 17, 19, 255, 17, 20, 255, 17, 21, 255, 17, 22, 255, 17, 23, 255], "secondary": false }, { "width": 15, "bonus": 1800, "chr": "n", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255], "secondary": false }, { "width": 15, "bonus": 1800, "chr": "o", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255], "secondary": false }, { "width": 10, "bonus": 1200, "chr": "p", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "q", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 13, "bonus": 1560, "chr": "r", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255], "secondary": false }, { "width": 8, "bonus": 960, "chr": "s", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255], "secondary": false }, { "width": 13, "bonus": 1560, "chr": "t", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255], "secondary": false }, { "width": 14, "bonus": 1680, "chr": "u", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255], "secondary": false }, { "width": 15, "bonus": 1800, "chr": "v", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255], "secondary": false }, { "width": 19, "bonus": 2280, "chr": "w", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255, 13, 0, 255, 13, 1, 255, 13, 2, 255, 13, 3, 255, 13, 4, 255, 13, 5, 255, 13, 6, 255, 13, 7, 255, 13, 8, 255, 13, 9, 255, 13, 10, 255, 13, 11, 255, 13, 12, 255, 13, 13, 255, 13, 14, 255, 13, 15, 255, 13, 16, 255, 13, 17, 255, 13, 18, 255, 13, 19, 255, 13, 20, 255, 13, 21, 255, 13, 22, 255, 13, 23, 255, 14, 0, 255, 14, 1, 255, 14, 2, 255, 14, 3, 255, 14, 4, 255, 14, 5, 255, 14, 6, 255, 14, 7, 255, 14, 8, 255, 14, 9, 255, 14, 10, 255, 14, 11, 255, 14, 12, 255, 14, 13, 255, 14, 14, 255, 14, 15, 255, 14, 16, 255, 14, 17, 255, 14, 18, 255, 14, 19, 255, 14, 20, 255, 14, 21, 255, 14, 22, 255, 14, 23, 255, 15, 0, 255, 15, 1, 255, 15, 2, 255, 15, 3, 255, 15, 4, 255, 15, 5, 255, 15, 6, 255, 15, 7, 255, 15, 8, 255, 15, 9, 255, 15, 10, 255, 15, 11, 255, 15, 12, 255, 15, 13, 255, 15, 14, 255, 15, 15, 255, 15, 16, 255, 15, 17, 255, 15, 18, 255, 15, 19, 255, 15, 20, 255, 15, 21, 255, 15, 22, 255, 15, 23, 255, 16, 0, 255, 16, 1, 255, 16, 2, 255, 16, 3, 255, 16, 4, 255, 16, 5, 255, 16, 6, 255, 16, 7, 255, 16, 8, 255, 16, 9, 255, 16, 10, 255, 16, 11, 255, 16, 12, 255, 16, 13, 255, 16, 14, 255, 16, 15, 255, 16, 16, 255, 16, 17, 255, 16, 18, 255, 16, 19, 255, 16, 20, 255, 16, 21, 255, 16, 22, 255, 16, 23, 255, 17, 0, 255, 17, 1, 255, 17, 2, 255, 17, 3, 255, 17, 4, 255, 17, 5, 255, 17, 6, 255, 17, 7, 255, 17, 8, 255, 17, 9, 255, 17, 10, 255, 17, 11, 255, 17, 12, 255, 17, 13, 255, 17, 14, 255, 17, 15, 255, 17, 16, 255, 17, 17, 255, 17, 18, 255, 17, 19, 255, 17, 20, 255, 17, 21, 255, 17, 22, 255, 17, 23, 255, 18, 0, 255, 18, 1, 255, 18, 2, 255, 18, 3, 255, 18, 4, 255, 18, 5, 255, 18, 6, 255, 18, 7, 255, 18, 8, 255, 18, 9, 255, 18, 10, 255, 18, 11, 255, 18, 12, 255, 18, 13, 255, 18, 14, 255, 18, 15, 255, 18, 16, 255, 18, 17, 255, 18, 18, 255, 18, 19, 255, 18, 20, 255, 18, 21, 255, 18, 22, 255, 18, 23, 255], "secondary": false }, { "width": 13, "bonus": 1560, "chr": "x", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255], "secondary": false }, { "width": 13, "bonus": 1560, "chr": "y", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255, 11, 0, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255, 11, 5, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255, 11, 11, 255, 11, 12, 255, 11, 13, 255, 11, 14, 255, 11, 15, 255, 11, 16, 255, 11, 17, 255, 11, 18, 255, 11, 19, 255, 11, 20, 255, 11, 21, 255, 11, 22, 255, 11, 23, 255, 12, 0, 255, 12, 1, 255, 12, 2, 255, 12, 3, 255, 12, 4, 255, 12, 5, 255, 12, 6, 255, 12, 7, 255, 12, 8, 255, 12, 9, 255, 12, 10, 255, 12, 11, 255, 12, 12, 255, 12, 13, 255, 12, 14, 255, 12, 15, 255, 12, 16, 255, 12, 17, 255, 12, 18, 255, 12, 19, 255, 12, 20, 255, 12, 21, 255, 12, 22, 255, 12, 23, 255], "secondary": false }, { "width": 11, "bonus": 1320, "chr": "z", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255, 9, 0, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 9, 11, 255, 9, 12, 255, 9, 13, 255, 9, 14, 255, 9, 15, 255, 9, 16, 255, 9, 17, 255, 9, 18, 255, 9, 19, 255, 9, 20, 255, 9, 21, 255, 9, 22, 255, 9, 23, 255, 10, 0, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 10, 11, 255, 10, 12, 255, 10, 13, 255, 10, 14, 255, 10, 15, 255, 10, 16, 255, 10, 17, 255, 10, 18, 255, 10, 19, 255, 10, 20, 255, 10, 21, 255, 10, 22, 255, 10, 23, 255], "secondary": false }, { "width": 6, "bonus": 720, "chr": "{", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255], "secondary": false }, { "width": 3, "bonus": 360, "chr": "|", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255], "secondary": false }, { "width": 6, "bonus": 720, "chr": "}", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255], "secondary": false }, { "width": 9, "bonus": 1080, "chr": "~", "pixels": [0, 0, 255, 0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 0, 12, 255, 0, 13, 255, 0, 14, 255, 0, 15, 255, 0, 16, 255, 0, 17, 255, 0, 18, 255, 0, 19, 255, 0, 20, 255, 0, 21, 255, 0, 22, 255, 0, 23, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 1, 14, 255, 1, 15, 255, 1, 16, 255, 1, 17, 255, 1, 18, 255, 1, 19, 255, 1, 20, 255, 1, 21, 255, 1, 22, 255, 1, 23, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 2, 14, 255, 2, 15, 255, 2, 16, 255, 2, 17, 255, 2, 18, 255, 2, 19, 255, 2, 20, 255, 2, 21, 255, 2, 22, 255, 2, 23, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 3, 14, 255, 3, 15, 255, 3, 16, 255, 3, 17, 255, 3, 18, 255, 3, 19, 255, 3, 20, 255, 3, 21, 255, 3, 22, 255, 3, 23, 255, 4, 0, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 4, 14, 255, 4, 15, 255, 4, 16, 255, 4, 17, 255, 4, 18, 255, 4, 19, 255, 4, 20, 255, 4, 21, 255, 4, 22, 255, 4, 23, 255, 5, 0, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 5, 14, 255, 5, 15, 255, 5, 16, 255, 5, 17, 255, 5, 18, 255, 5, 19, 255, 5, 20, 255, 5, 21, 255, 5, 22, 255, 5, 23, 255, 6, 0, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255, 6, 14, 255, 6, 15, 255, 6, 16, 255, 6, 17, 255, 6, 18, 255, 6, 19, 255, 6, 20, 255, 6, 21, 255, 6, 22, 255, 6, 23, 255, 7, 0, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 7, 11, 255, 7, 12, 255, 7, 13, 255, 7, 14, 255, 7, 15, 255, 7, 16, 255, 7, 17, 255, 7, 18, 255, 7, 19, 255, 7, 20, 255, 7, 21, 255, 7, 22, 255, 7, 23, 255, 8, 0, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 8, 11, 255, 8, 12, 255, 8, 13, 255, 8, 14, 255, 8, 15, 255, 8, 16, 255, 8, 17, 255, 8, 18, 255, 8, 19, 255, 8, 20, 255, 8, 21, 255, 8, 22, 255, 8, 23, 255], "secondary": false }], "width": 19, "spacewidth": 4, "shadow": false, "height": 24, "basey": 17 };
    }
  });

  // node_modules/@alt1/ocr/fonts/aa_10px_mono.fontmeta.json
  var aa_10px_mono_fontmeta_default;
  var init_aa_10px_mono_fontmeta = __esm({
    "node_modules/@alt1/ocr/fonts/aa_10px_mono.fontmeta.json"() {
      aa_10px_mono_fontmeta_default = { "chars": [{ "width": 4, "bonus": 100, "chr": "!", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255], "secondary": false }, { "width": 5, "bonus": 50, "chr": '"', "pixels": [0, 2, 255, 1, 0, 255, 1, 1, 255, 1, 2, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255], "secondary": true }, { "width": 10, "bonus": 245, "chr": "#", "pixels": [0, 8, 255, 1, 4, 255, 1, 8, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 8, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 8, 255, 8, 4, 255, 8, 8, 255], "secondary": false }, { "width": 8, "bonus": 205, "chr": "$", "pixels": [0, 3, 255, 0, 9, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 9, 255, 2, 10, 255, 3, 0, 255, 3, 1, 255, 3, 2, 255, 3, 5, 255, 3, 6, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 4, 1, 255, 4, 2, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 7, 255, 6, 8, 255], "secondary": false }, { "width": 10, "bonus": 265, "chr": "%", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 8, 1, 255, 8, 2, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255], "secondary": false }, { "width": 9, "bonus": 260, "chr": "&", "pixels": [0, 7, 255, 0, 8, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 5, 255, 4, 6, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 7, 5, 255, 7, 6, 255, 8, 5, 255], "secondary": false }, { "width": 4, "bonus": 30, "chr": "'", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255], "secondary": true }, { "width": 4, "bonus": 120, "chr": "(", "pixels": [1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 3, 1, 255, 3, 11, 255, 3, 12, 255], "secondary": false }, { "width": 4, "bonus": 120, "chr": ")", "pixels": [0, 1, 255, 0, 11, 255, 0, 12, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255], "secondary": false }, { "width": 7, "bonus": 100, "chr": "*", "pixels": [1, 2, 255, 1, 3, 255, 1, 5, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 5, 2, 255, 5, 3, 255, 5, 5, 255], "secondary": false }, { "width": 9, "bonus": 115, "chr": "+", "pixels": [0, 7, 255, 1, 7, 255, 2, 7, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 7, 255, 6, 7, 255, 7, 7, 255, 8, 7, 255], "secondary": false }, { "width": 4, "bonus": 30, "chr": ",", "pixels": [1, 9, 255, 1, 10, 255, 1, 11, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255], "secondary": true }, { "width": 6, "bonus": 40, "chr": "-", "pixels": [1, 6, 255, 1, 7, 255, 2, 6, 255, 2, 7, 255, 3, 6, 255, 3, 7, 255, 4, 6, 255, 4, 7, 255], "secondary": true }, { "width": 4, "bonus": 20, "chr": ".", "pixels": [1, 9, 255, 1, 10, 255, 2, 9, 255, 2, 10, 255], "secondary": true }, { "width": 6, "bonus": 110, "chr": "/", "pixels": [1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255], "secondary": false }, { "width": 9, "bonus": 240, "chr": "0", "pixels": [1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255], "secondary": false }, { "width": 7, "bonus": 160, "chr": "1", "pixels": [1, 2, 255, 1, 3, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 9, 255, 5, 10, 255, 6, 10, 255], "secondary": false }, { "width": 8, "bonus": 210, "chr": "2", "pixels": [1, 2, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 6, 255, 4, 7, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 9, 255, 6, 10, 255, 7, 3, 255, 7, 4, 255, 7, 10, 255], "secondary": false }, { "width": 8, "bonus": 220, "chr": "3", "pixels": [1, 1, 255, 1, 2, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 7, 255, 7, 8, 255], "secondary": false }, { "width": 9, "bonus": 225, "chr": "4", "pixels": [0, 7, 255, 0, 8, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 7, 255, 3, 8, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 7, 255, 4, 8, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 7, 255, 7, 8, 255, 8, 7, 255, 8, 8, 255], "secondary": false }, { "width": 8, "bonus": 235, "chr": "5", "pixels": [1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 7, 255, 7, 8, 255], "secondary": false }, { "width": 9, "bonus": 255, "chr": "6", "pixels": [1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 5, 255, 3, 6, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 4, 255, 4, 5, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255], "secondary": false }, { "width": 9, "bonus": 170, "chr": "7", "pixels": [0, 1, 255, 0, 2, 255, 1, 1, 255, 1, 2, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255], "secondary": false }, { "width": 9, "bonus": 270, "chr": "8", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 5, 255, 4, 6, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 3, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255], "secondary": false }, { "width": 9, "bonus": 260, "chr": "9", "pixels": [1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 6, 255, 3, 7, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 6, 255, 4, 7, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 6, 255, 5, 7, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255], "secondary": false }, { "width": 3, "bonus": 40, "chr": ":", "pixels": [1, 3, 255, 1, 4, 255, 1, 8, 255, 1, 9, 255, 2, 3, 255, 2, 4, 255, 2, 8, 255, 2, 9, 255], "secondary": true }, { "width": 4, "bonus": 55, "chr": ";", "pixels": [1, 9, 255, 1, 10, 255, 1, 11, 255, 2, 3, 255, 2, 4, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 3, 3, 255, 3, 4, 255, 3, 9, 255], "secondary": true }, { "width": 8, "bonus": 130, "chr": "<", "pixels": [0, 5, 255, 0, 6, 255, 1, 5, 255, 1, 6, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 7, 255, 4, 8, 255, 5, 3, 255, 5, 4, 255, 5, 7, 255, 5, 8, 255, 6, 3, 255, 6, 4, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255], "secondary": false }, { "width": 9, "bonus": 70, "chr": "=", "pixels": [1, 6, 255, 1, 8, 255, 2, 6, 255, 2, 8, 255, 3, 6, 255, 3, 8, 255, 4, 6, 255, 4, 8, 255, 5, 6, 255, 5, 8, 255, 6, 6, 255, 6, 8, 255, 7, 6, 255, 7, 8, 255], "secondary": false }, { "width": 8, "bonus": 135, "chr": ">", "pixels": [1, 3, 255, 1, 4, 255, 1, 8, 255, 2, 3, 255, 2, 4, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 7, 255, 3, 8, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 7, 5, 255, 7, 6, 255], "secondary": false }, { "width": 6, "bonus": 135, "chr": "?", "pixels": [0, 1, 255, 0, 2, 255, 1, 1, 255, 1, 2, 255, 2, 1, 255, 2, 2, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 5, 3, 255], "secondary": false }, { "width": 10, "bonus": 295, "chr": "@", "pixels": [0, 7, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 3, 3, 255, 3, 4, 255, 3, 7, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 11, 255, 4, 12, 255, 5, 2, 255, 5, 3, 255, 5, 5, 255, 5, 6, 255, 5, 8, 255, 5, 9, 255, 5, 11, 255, 5, 12, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 9, 255, 6, 12, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 9, 9, 255], "secondary": false }, { "width": 10, "bonus": 230, "chr": "A", "pixels": [1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 7, 255, 4, 8, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 7, 255, 5, 8, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255], "secondary": false }, { "width": 9, "bonus": 270, "chr": "B", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 5, 255, 3, 6, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 5, 255, 4, 6, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 3, 255, 7, 4, 255, 7, 8, 255], "secondary": false }, { "width": 10, "bonus": 200, "chr": "C", "pixels": [0, 5, 255, 0, 6, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 3, 1, 255, 3, 2, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 9, 255, 7, 10, 255, 8, 1, 255, 8, 2, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 9, 9, 255], "secondary": false }, { "width": 10, "bonus": 270, "chr": "D", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 9, 5, 255, 9, 6, 255], "secondary": false }, { "width": 8, "bonus": 205, "chr": "E", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 5, 255, 3, 6, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 5, 255, 4, 6, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 5, 255, 5, 6, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 7, "bonus": 130, "chr": "F", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 6, 255, 4, 1, 255, 4, 6, 255, 5, 1, 255, 5, 6, 255], "secondary": false }, { "width": 10, "bonus": 250, "chr": "G", "pixels": [0, 5, 255, 0, 6, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 6, 255, 6, 7, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 8, 1, 255, 8, 2, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255], "secondary": false }, { "width": 9, "bonus": 240, "chr": "H", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 5, 255, 3, 6, 255, 4, 5, 255, 4, 6, 255, 5, 5, 255, 5, 6, 255, 6, 5, 255, 6, 6, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255], "secondary": false }, { "width": 5, "bonus": 120, "chr": "I", "pixels": [0, 1, 255, 0, 10, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 10, 255], "secondary": false }, { "width": 8, "bonus": 170, "chr": "J", "pixels": [1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 9, "bonus": 230, "chr": "K", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 10, 255], "secondary": false }, { "width": 8, "bonus": 140, "chr": "L", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 9, 255, 3, 10, 255, 4, 9, 255, 4, 10, 255, 5, 9, 255, 5, 10, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 11, "bonus": 330, "chr": "M", "pixels": [0, 10, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 9, 1, 255, 9, 2, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255], "secondary": false }, { "width": 10, "bonus": 280, "chr": "N", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255], "secondary": false }, { "width": 11, "bonus": 255, "chr": "O", "pixels": [0, 5, 255, 0, 6, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 3, 1, 255, 3, 2, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255], "secondary": false }, { "width": 9, "bonus": 210, "chr": "P", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 7, 255, 4, 1, 255, 4, 2, 255, 4, 6, 255, 4, 7, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255], "secondary": false }, { "width": 11, "bonus": 285, "chr": "Q", "pixels": [0, 5, 255, 0, 6, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 3, 1, 255, 3, 2, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 9, 3, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255], "secondary": false }, { "width": 9, "bonus": 245, "chr": "R", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 6, 255, 4, 1, 255, 4, 2, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 3, 255, 7, 4, 255, 7, 9, 255, 7, 10, 255], "secondary": false }, { "width": 7, "bonus": 190, "chr": "S", "pixels": [0, 3, 255, 0, 9, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 5, 255, 3, 6, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 7, 255, 6, 8, 255], "secondary": false }, { "width": 10, "bonus": 135, "chr": "T", "pixels": [0, 1, 255, 1, 1, 255, 2, 1, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 6, 1, 255, 7, 1, 255, 8, 1, 255], "secondary": false }, { "width": 10, "bonus": 230, "chr": "U", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 9, 255, 3, 10, 255, 4, 9, 255, 4, 10, 255, 5, 9, 255, 5, 10, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255], "secondary": false }, { "width": 10, "bonus": 210, "chr": "V", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 8, 1, 255, 8, 2, 255, 8, 3, 255], "secondary": false }, { "width": 13, "bonus": 350, "chr": "W", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 10, 1, 255, 10, 2, 255, 10, 3, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 11, 1, 255, 11, 2, 255, 11, 3, 255, 11, 4, 255], "secondary": false }, { "width": 9, "bonus": 220, "chr": "X", "pixels": [0, 10, 255, 1, 1, 255, 1, 2, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 9, 255, 7, 10, 255], "secondary": false }, { "width": 9, "bonus": 160, "chr": "Y", "pixels": [1, 1, 255, 1, 2, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 7, 1, 255, 7, 2, 255], "secondary": false }, { "width": 9, "bonus": 170, "chr": "Z", "pixels": [1, 1, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 10, 255, 5, 1, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 10, 255, 7, 1, 255, 7, 2, 255, 7, 10, 255], "secondary": false }, { "width": 4, "bonus": 120, "chr": "[", "pixels": [0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 2, 1, 255, 2, 11, 255], "secondary": false }, { "width": 6, "bonus": 120, "chr": "\\", "pixels": [0, 1, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255], "secondary": false }, { "width": 3, "bonus": 110, "chr": "]", "pixels": [0, 1, 255, 0, 2, 255, 0, 3, 255, 0, 4, 255, 0, 5, 255, 0, 6, 255, 0, 7, 255, 0, 8, 255, 0, 9, 255, 0, 10, 255, 0, 11, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255], "secondary": false }, { "width": 8, "bonus": 120, "chr": "^", "pixels": [1, 5, 255, 1, 6, 255, 1, 7, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255], "secondary": false }, { "width": 9, "bonus": 35, "chr": "_", "pixels": [1, 11, 255, 2, 11, 255, 3, 11, 255, 4, 11, 255, 5, 11, 255, 6, 11, 255, 7, 11, 255], "secondary": false }, { "width": 8, "bonus": 180, "chr": "a", "pixels": [1, 4, 255, 1, 5, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 3, 7, 255, 3, 8, 255, 3, 10, 255, 4, 4, 255, 4, 5, 255, 4, 7, 255, 4, 9, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 8, "bonus": 215, "chr": "b", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 3, 9, 255, 3, 10, 255, 4, 4, 255, 4, 5, 255, 4, 9, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255], "secondary": false }, { "width": 8, "bonus": 140, "chr": "c", "pixels": [0, 7, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 3, 9, 255, 3, 10, 255, 4, 4, 255, 4, 5, 255, 4, 9, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 8, "bonus": 220, "chr": "d", "pixels": [0, 6, 255, 0, 7, 255, 0, 8, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 3, 9, 255, 3, 10, 255, 4, 4, 255, 4, 5, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 5, 2, 255, 5, 3, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 8, "bonus": 175, "chr": "e", "pixels": [0, 7, 255, 0, 8, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 3, 7, 255, 3, 9, 255, 3, 10, 255, 4, 4, 255, 4, 5, 255, 4, 7, 255, 4, 9, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 9, 255, 5, 10, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 6, "bonus": 115, "chr": "f", "pixels": [1, 4, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 1, 255, 4, 4, 255], "secondary": false }, { "width": 8, "bonus": 265, "chr": "g", "pixels": [0, 6, 255, 0, 7, 255, 0, 8, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 12, 255, 1, 13, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 12, 255, 2, 13, 255, 3, 4, 255, 3, 5, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 4, 13, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255], "secondary": false }, { "width": 9, "bonus": 185, "chr": "h", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 4, 4, 255, 5, 4, 255, 5, 5, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255], "secondary": false }, { "width": 4, "bonus": 90, "chr": "i", "pixels": [1, 1, 255, 1, 2, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255], "secondary": false }, { "width": 5, "bonus": 125, "chr": "j", "pixels": [0, 13, 255, 1, 12, 255, 1, 13, 255, 2, 1, 255, 2, 2, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 3, 1, 255, 3, 2, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255], "secondary": false }, { "width": 7, "bonus": 190, "chr": "k", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 10, 255], "secondary": false }, { "width": 5, "bonus": 105, "chr": "l", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 10, 255], "secondary": false }, { "width": 12, "bonus": 250, "chr": "m", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 4, 4, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 8, 4, 255, 8, 5, 255, 9, 4, 255, 9, 5, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255, 11, 6, 255, 11, 7, 255, 11, 8, 255, 11, 9, 255, 11, 10, 255], "secondary": false }, { "width": 8, "bonus": 155, "chr": "n", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 4, 4, 255, 5, 4, 255, 5, 5, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255], "secondary": false }, { "width": 9, "bonus": 170, "chr": "o", "pixels": [0, 7, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 3, 9, 255, 3, 10, 255, 4, 4, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255], "secondary": false }, { "width": 8, "bonus": 215, "chr": "p", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 1, 13, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255, 2, 13, 255, 3, 4, 255, 3, 5, 255, 3, 9, 255, 3, 10, 255, 4, 4, 255, 4, 5, 255, 4, 9, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255], "secondary": false }, { "width": 8, "bonus": 220, "chr": "q", "pixels": [0, 6, 255, 0, 7, 255, 0, 8, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 3, 9, 255, 3, 10, 255, 4, 4, 255, 4, 5, 255, 4, 9, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 255, 5, 13, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255, 6, 13, 255], "secondary": false }, { "width": 6, "bonus": 85, "chr": "r", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 4, 4, 255], "secondary": false }, { "width": 6, "bonus": 150, "chr": "s", "pixels": [0, 5, 255, 0, 6, 255, 0, 9, 255, 0, 10, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 4, 255, 4, 5, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 8, 255, 5, 9, 255], "secondary": false }, { "width": 5, "bonus": 105, "chr": "t", "pixels": [0, 4, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 10, 255], "secondary": false }, { "width": 9, "bonus": 170, "chr": "u", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 10, 255, 4, 9, 255, 4, 10, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255], "secondary": false }, { "width": 8, "bonus": 145, "chr": "v", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 7, 4, 255], "secondary": false }, { "width": 12, "bonus": 250, "chr": "w", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255, 9, 4, 255, 9, 5, 255, 9, 6, 255, 9, 7, 255, 9, 8, 255, 9, 9, 255, 9, 10, 255, 10, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 11, 4, 255], "secondary": false }, { "width": 8, "bonus": 150, "chr": "x", "pixels": [1, 4, 255, 1, 5, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 9, "bonus": 190, "chr": "y", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 12, 255, 1, 13, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 12, 255, 2, 13, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 3, 11, 255, 3, 12, 255, 3, 13, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 4, 11, 255, 4, 12, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 7, 4, 255, 7, 5, 255], "secondary": false }, { "width": 8, "bonus": 165, "chr": "z", "pixels": [0, 10, 255, 1, 4, 255, 1, 5, 255, 1, 9, 255, 1, 10, 255, 2, 4, 255, 2, 5, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 9, 255, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 9, 255, 5, 10, 255, 6, 4, 255, 6, 5, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 6, "bonus": 125, "chr": "{", "pixels": [0, 6, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 3, 1, 255, 3, 2, 255, 3, 10, 255, 3, 11, 255, 4, 1, 255, 4, 11, 255], "secondary": false }, { "width": 4, "bonus": 130, "chr": "|", "pixels": [1, 0, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 2, 0, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255], "secondary": false }, { "width": 5, "bonus": 130, "chr": "}", "pixels": [0, 1, 255, 0, 11, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 4, 6, 255], "secondary": false }, { "width": 8, "bonus": 60, "chr": "~", "pixels": [1, 5, 255, 1, 6, 255, 2, 5, 255, 2, 6, 255, 3, 5, 255, 3, 6, 255, 4, 5, 255, 4, 6, 255, 5, 5, 255, 5, 6, 255, 6, 5, 255, 6, 6, 255], "secondary": false }], "width": 13, "spacewidth": 3, "shadow": false, "height": 14, "basey": 10 };
    }
  });

  // src/reader.js
  var require_reader = __commonJS({
    "src/reader.js"() {
      var a1lib = __toESM(require_index_bundle());
      var OCR = __toESM(require_index_bundle2());
      init_aa_12px_mono_fontmeta();
      init_aa_10px_mono_fontmeta();
      var FONTS = { aa12: aa_12px_mono_fontmeta_default, aa10: aa_10px_mono_fontmeta_default };
      var COLORS = {
        white: [[255, 255, 255]],
        gold: [[255, 203, 5], [255, 152, 31], [203, 151, 64], [220, 180, 90], [254, 207, 105]]
      };
      function capture() {
        const ref = a1lib.captureHoldFullRs();
        return ref ? ref.toData() : null;
      }
      function scan() {
        const data = capture();
        if (!data) return { error: "capture failed (is RuneScape focused?)" };
        const reads = [];
        const step = Math.max(12, Math.floor(data.height / 40));
        for (const [fontName, font] of Object.entries(FONTS)) {
          for (const [colorName, cols] of Object.entries(COLORS)) {
            const seen = /* @__PURE__ */ new Set();
            for (let y = 0; y < data.height - 4; y += step) {
              try {
                const line = OCR.findReadLine(data, font, cols, 0, y, data.width, step + font.height);
                const text = line && line.text ? line.text.trim() : "";
                if (text.length >= 3 && !seen.has(text)) {
                  seen.add(text);
                  reads.push({ font: fontName, color: colorName, y, text });
                }
              } catch (e) {
              }
            }
          }
        }
        return { width: data.width, height: data.height, reads: reads.slice(0, 60) };
      }
      window.ZephReader = { version: "0.1", scan, capture };
    }
  });
  require_reader();
})();
