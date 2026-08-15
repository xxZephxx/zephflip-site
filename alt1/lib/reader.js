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

  // node_modules/@alt1/ocr/dist/fonts/aa_12px_mono.js
  var require_aa_12px_mono = __commonJS({
    "node_modules/@alt1/ocr/dist/fonts/aa_12px_mono.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["aa_12px_mono"] = factory();
        else
          root["OCR_aa_12px_mono"] = factory();
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
            "./fonts/aa_12px_mono.fontmeta.json": (
              /***/
              (function(module2, exports2) {
                module2.exports = { "chars": [{ "width": 3, "bonus": 45, "chr": "!", "pixels": [0, 5, 223, 0, 6, 208, 0, 7, 178, 0, 8, 164, 1, 4, 178, 1, 5, 208, 1, 6, 193, 1, 7, 178, 1, 14, 164], "secondary": false }, { "width": 6, "bonus": 25, "chr": '"', "pixels": [0, 1, 178, 1, 0, 178, 3, 0, 178, 3, 1, 208, 3, 2, 193], "secondary": true }, { "width": 10, "bonus": 160, "chr": "#", "pixels": [0, 11, 164, 1, 7, 193, 1, 11, 193, 2, 7, 208, 2, 11, 223, 2, 12, 223, 2, 13, 208, 2, 14, 178, 3, 4, 164, 3, 5, 208, 3, 6, 208, 3, 7, 223, 3, 8, 178, 3, 11, 208, 4, 7, 193, 4, 11, 193, 5, 7, 193, 5, 11, 208, 5, 12, 178, 5, 13, 164, 5, 14, 193, 5, 15, 208, 6, 6, 164, 6, 7, 223, 6, 8, 223, 6, 9, 208, 6, 10, 178, 6, 11, 223, 6, 12, 164, 7, 7, 208, 7, 11, 193, 8, 7, 193], "secondary": false }, { "width": 9, "bonus": 140, "chr": "$", "pixels": [1, 14, 208, 2, 5, 223, 2, 6, 193, 2, 7, 223, 2, 8, 223, 2, 15, 193, 3, 4, 164, 3, 8, 208, 3, 9, 223, 3, 14, 164, 3, 15, 223, 3, 16, 193, 4, 4, 193, 4, 6, 164, 4, 7, 193, 4, 8, 208, 4, 9, 223, 4, 10, 223, 4, 15, 193, 5, 4, 193, 5, 10, 223, 5, 11, 178, 6, 4, 178, 6, 10, 178, 6, 11, 223, 6, 12, 223, 6, 13, 208, 6, 14, 208], "secondary": false }, { "width": 14, "bonus": 145, "chr": "%", "pixels": [1, 5, 223, 1, 6, 208, 1, 7, 208, 1, 8, 223, 2, 9, 164, 3, 4, 164, 4, 4, 208, 4, 5, 193, 4, 8, 178, 4, 14, 223, 5, 6, 193, 5, 7, 193, 5, 11, 178, 5, 12, 193, 6, 9, 193, 6, 10, 178, 7, 7, 193, 7, 12, 193, 7, 13, 193, 8, 4, 193, 8, 5, 178, 8, 11, 178, 8, 14, 193, 9, 15, 164, 10, 10, 164, 11, 11, 193, 11, 14, 193, 12, 12, 193, 12, 13, 193], "secondary": false }, { "width": 15, "bonus": 205, "chr": "&", "pixels": [1, 11, 164, 1, 12, 223, 1, 13, 193, 2, 10, 208, 2, 11, 208, 2, 12, 208, 2, 13, 223, 2, 14, 223, 3, 6, 193, 3, 7, 193, 3, 14, 223, 4, 5, 223, 4, 6, 178, 4, 7, 208, 4, 8, 223, 4, 9, 223, 4, 15, 193, 5, 4, 164, 5, 9, 223, 5, 10, 223, 5, 15, 193, 6, 4, 193, 6, 10, 208, 6, 11, 223, 6, 15, 178, 7, 4, 193, 7, 11, 208, 7, 12, 223, 8, 5, 193, 8, 12, 208, 8, 13, 193, 8, 14, 178, 9, 13, 223, 9, 14, 178, 10, 10, 164, 10, 11, 164, 10, 12, 193, 10, 14, 223, 11, 10, 193, 11, 15, 193, 12, 15, 193], "secondary": false }, { "width": 4, "bonus": 15, "chr": "'", "pixels": [1, 0, 223, 1, 1, 208, 1, 2, 164], "secondary": true }, { "width": 5, "bonus": 65, "chr": "(", "pixels": [0, 8, 164, 0, 9, 208, 0, 10, 193, 0, 11, 178, 1, 6, 208, 1, 7, 223, 1, 8, 178, 1, 11, 178, 1, 12, 208, 1, 13, 223, 2, 4, 164, 2, 5, 164, 2, 15, 178], "secondary": false }, { "width": 6, "bonus": 50, "chr": ")", "pixels": [2, 5, 193, 2, 14, 178, 3, 6, 164, 3, 7, 223, 3, 8, 223, 3, 9, 193, 3, 10, 193, 3, 11, 223, 3, 12, 223, 3, 13, 193], "secondary": false }, { "width": 7, "bonus": 35, "chr": "*", "pixels": [1, 5, 208, 2, 7, 193, 3, 4, 164, 3, 5, 164, 3, 6, 164, 4, 5, 208, 4, 7, 208], "secondary": false }, { "width": 10, "bonus": 65, "chr": "+", "pixels": [1, 11, 193, 2, 11, 193, 3, 11, 208, 4, 8, 193, 4, 9, 193, 4, 10, 193, 4, 11, 223, 4, 12, 208, 4, 13, 193, 4, 14, 193, 5, 11, 193, 6, 11, 193, 7, 11, 193], "secondary": false }, { "width": 4, "bonus": 15, "chr": ",", "pixels": [1, 13, 208, 2, 13, 193, 2, 14, 164], "secondary": true }, { "width": 7, "bonus": 20, "chr": "-", "pixels": [1, 9, 193, 2, 9, 193, 3, 9, 208, 4, 9, 178], "secondary": true }, { "width": 4, "bonus": 15, "chr": ".", "pixels": [1, 14, 193, 1, 15, 164, 2, 14, 178], "secondary": true }, { "width": 10, "bonus": 50, "chr": "/", "pixels": [1, 16, 193, 2, 14, 164, 2, 15, 178, 3, 13, 208, 4, 11, 193, 4, 12, 164, 5, 10, 193, 6, 8, 208, 7, 6, 178, 7, 7, 164], "secondary": false }, { "width": 10, "bonus": 180, "chr": "0", "pixels": [0, 8, 164, 0, 9, 208, 0, 10, 193, 0, 11, 193, 1, 6, 223, 1, 7, 223, 1, 8, 223, 1, 9, 223, 1, 10, 223, 1, 11, 223, 1, 12, 223, 1, 13, 223, 2, 5, 208, 2, 13, 164, 2, 14, 223, 3, 4, 164, 3, 15, 178, 4, 4, 193, 4, 15, 193, 5, 4, 178, 5, 15, 164, 6, 5, 223, 6, 6, 164, 6, 14, 208, 7, 6, 223, 7, 7, 223, 7, 8, 223, 7, 9, 223, 7, 10, 223, 7, 11, 223, 7, 12, 223, 7, 13, 223, 8, 8, 193, 8, 9, 193, 8, 10, 193, 8, 11, 164], "secondary": false }, { "width": 7, "bonus": 115, "chr": "1", "pixels": [2, 5, 208, 2, 6, 208, 2, 7, 193, 2, 8, 193, 2, 9, 193, 2, 10, 193, 2, 11, 193, 2, 12, 193, 2, 13, 193, 2, 14, 208, 2, 15, 193, 3, 4, 164, 3, 5, 223, 3, 6, 223, 3, 7, 223, 3, 8, 223, 3, 9, 223, 3, 10, 223, 3, 11, 223, 3, 12, 223, 3, 13, 223, 3, 14, 223, 3, 15, 193], "secondary": false }, { "width": 10, "bonus": 140, "chr": "2", "pixels": [1, 5, 208, 1, 15, 193, 2, 4, 164, 2, 14, 208, 2, 15, 193, 3, 4, 193, 3, 13, 178, 3, 15, 193, 4, 4, 208, 4, 12, 193, 4, 15, 193, 5, 4, 164, 5, 5, 178, 5, 10, 193, 5, 11, 193, 5, 15, 193, 6, 5, 223, 6, 6, 223, 6, 7, 223, 6, 8, 223, 6, 9, 223, 6, 10, 178, 6, 15, 193, 7, 6, 178, 7, 7, 193, 7, 8, 164, 7, 14, 193, 7, 15, 178], "secondary": false }, { "width": 9, "bonus": 140, "chr": "3", "pixels": [0, 14, 193, 1, 15, 193, 2, 4, 178, 2, 15, 193, 3, 4, 193, 3, 9, 193, 3, 15, 193, 4, 4, 193, 4, 8, 164, 4, 9, 223, 4, 15, 164, 5, 5, 223, 5, 6, 208, 5, 7, 223, 5, 8, 164, 5, 9, 178, 5, 10, 223, 5, 14, 193, 6, 5, 164, 6, 6, 223, 6, 7, 164, 6, 10, 223, 6, 11, 223, 6, 12, 223, 6, 13, 223, 6, 14, 178, 7, 11, 193, 7, 12, 193], "secondary": false }, { "width": 10, "bonus": 160, "chr": "4", "pixels": [0, 12, 208, 1, 11, 208, 1, 12, 193, 2, 9, 178, 2, 12, 193, 3, 8, 178, 3, 12, 193, 4, 7, 164, 4, 12, 193, 5, 6, 223, 5, 7, 193, 5, 8, 193, 5, 9, 193, 5, 10, 193, 5, 11, 208, 5, 12, 223, 5, 13, 193, 5, 14, 193, 5, 15, 193, 6, 5, 193, 6, 6, 193, 6, 7, 193, 6, 8, 193, 6, 9, 193, 6, 10, 193, 6, 11, 208, 6, 12, 223, 6, 13, 193, 6, 14, 208, 6, 15, 193, 7, 12, 193, 8, 12, 164], "secondary": false }, { "width": 8, "bonus": 145, "chr": "5", "pixels": [0, 14, 193, 1, 4, 164, 1, 5, 193, 1, 6, 193, 1, 7, 223, 1, 8, 178, 1, 15, 193, 2, 4, 193, 2, 8, 223, 2, 15, 193, 3, 4, 193, 3, 8, 223, 3, 15, 164, 4, 4, 193, 4, 8, 193, 4, 9, 223, 4, 14, 164, 5, 4, 193, 5, 9, 223, 5, 10, 223, 5, 11, 223, 5, 12, 193, 5, 13, 223, 5, 14, 164, 6, 4, 164, 6, 5, 164, 6, 10, 193, 6, 11, 223, 6, 12, 193], "secondary": false }, { "width": 10, "bonus": 145, "chr": "6", "pixels": [0, 10, 164, 0, 11, 193, 0, 12, 193, 1, 8, 208, 1, 9, 223, 1, 10, 223, 1, 11, 223, 1, 12, 223, 1, 13, 223, 1, 14, 193, 2, 7, 223, 2, 8, 193, 2, 14, 223, 3, 6, 208, 3, 15, 193, 4, 5, 193, 4, 9, 164, 4, 15, 193, 5, 9, 193, 5, 15, 178, 6, 9, 178, 6, 10, 193, 7, 10, 223, 7, 11, 223, 7, 12, 223, 7, 13, 223, 7, 14, 193, 8, 11, 193, 8, 12, 208], "secondary": false }, { "width": 9, "bonus": 100, "chr": "7", "pixels": [0, 5, 178, 1, 4, 178, 1, 5, 164, 2, 4, 193, 2, 14, 208, 2, 15, 193, 3, 4, 193, 3, 12, 223, 3, 13, 223, 3, 14, 223, 4, 4, 193, 4, 10, 223, 4, 11, 208, 5, 4, 193, 5, 8, 223, 5, 9, 164, 6, 4, 193, 6, 5, 193, 6, 6, 193, 7, 4, 208], "secondary": false }, { "width": 9, "bonus": 200, "chr": "8", "pixels": [0, 6, 164, 0, 7, 164, 0, 12, 193, 0, 13, 193, 1, 5, 223, 1, 6, 208, 1, 7, 223, 1, 8, 208, 1, 10, 164, 1, 11, 223, 1, 12, 208, 1, 13, 223, 1, 14, 223, 2, 4, 164, 2, 8, 223, 2, 9, 193, 2, 10, 193, 2, 15, 164, 3, 4, 193, 3, 9, 223, 3, 15, 193, 4, 4, 193, 4, 9, 223, 4, 15, 193, 5, 4, 178, 5, 8, 178, 5, 9, 178, 5, 10, 223, 6, 5, 223, 6, 6, 208, 6, 7, 223, 6, 10, 208, 6, 11, 223, 6, 12, 208, 6, 13, 223, 6, 14, 223, 7, 6, 193, 7, 11, 178, 7, 12, 223, 7, 13, 193], "secondary": false }, { "width": 9, "bonus": 135, "chr": "9", "pixels": [0, 7, 208, 0, 8, 193, 1, 5, 208, 1, 6, 223, 1, 7, 193, 1, 8, 223, 1, 9, 223, 2, 10, 178, 3, 4, 178, 3, 10, 193, 3, 15, 178, 4, 4, 193, 4, 14, 208, 5, 5, 208, 5, 12, 208, 5, 13, 208, 6, 5, 193, 6, 6, 223, 6, 7, 223, 6, 8, 223, 6, 9, 223, 6, 10, 223, 6, 11, 223, 6, 12, 164, 7, 7, 178, 7, 8, 193, 7, 9, 193], "secondary": false }, { "width": 4, "bonus": 30, "chr": ":", "pixels": [1, 10, 178, 1, 15, 178, 2, 9, 164, 2, 10, 193, 2, 15, 208, 2, 16, 164], "secondary": true }, { "width": 4, "bonus": 30, "chr": ";", "pixels": [1, 9, 164, 1, 10, 208, 1, 15, 208, 2, 10, 178, 2, 15, 193, 2, 16, 164], "secondary": true }, { "width": 9, "bonus": 60, "chr": "<", "pixels": [0, 11, 178, 1, 11, 193, 1, 12, 208, 2, 10, 164, 2, 12, 164, 3, 10, 208, 3, 13, 193, 4, 13, 178, 5, 9, 208, 5, 14, 178, 6, 9, 164, 6, 14, 208], "secondary": false }, { "width": 9, "bonus": 70, "chr": "=", "pixels": [0, 9, 193, 0, 12, 193, 1, 9, 193, 1, 12, 193, 2, 9, 193, 2, 12, 193, 3, 9, 193, 3, 12, 193, 4, 9, 193, 4, 12, 193, 5, 9, 193, 5, 12, 193, 6, 9, 193, 6, 12, 193], "secondary": false }, { "width": 9, "bonus": 55, "chr": ">", "pixels": [0, 8, 164, 1, 9, 178, 1, 14, 223, 2, 9, 193, 3, 10, 164, 3, 13, 193, 4, 10, 208, 4, 13, 178, 5, 12, 178, 6, 11, 223, 6, 12, 208], "secondary": false }, { "width": 9, "bonus": 85, "chr": "?", "pixels": [0, 5, 178, 1, 4, 164, 2, 4, 193, 2, 11, 193, 3, 4, 208, 3, 10, 223, 3, 14, 164, 4, 4, 193, 4, 8, 164, 4, 9, 223, 5, 5, 223, 5, 6, 208, 5, 7, 223, 5, 8, 223, 6, 5, 193, 6, 6, 223, 6, 7, 208], "secondary": false }, { "width": 14, "bonus": 180, "chr": "@", "pixels": [1, 8, 164, 1, 9, 223, 1, 10, 193, 1, 11, 208, 1, 12, 223, 2, 7, 164, 2, 13, 164, 2, 14, 178, 3, 14, 178, 4, 10, 178, 4, 11, 193, 4, 15, 164, 5, 8, 193, 5, 9, 193, 5, 10, 178, 5, 11, 193, 5, 12, 178, 5, 15, 193, 6, 15, 193, 7, 10, 193, 7, 11, 164, 7, 15, 164, 8, 6, 164, 8, 7, 223, 8, 8, 223, 8, 9, 208, 8, 10, 193, 8, 11, 223, 8, 12, 223, 9, 12, 193, 11, 5, 193, 11, 11, 164, 12, 6, 164, 12, 7, 208, 12, 8, 208, 12, 9, 178], "secondary": false }, { "width": 14, "bonus": 175, "chr": "A", "pixels": [1, 15, 164, 2, 14, 208, 2, 15, 193, 3, 11, 164, 3, 12, 223, 3, 13, 164, 4, 9, 193, 4, 10, 193, 4, 11, 208, 5, 7, 208, 5, 8, 164, 5, 11, 193, 6, 5, 223, 6, 6, 223, 6, 7, 178, 6, 11, 193, 7, 6, 193, 7, 7, 223, 7, 8, 223, 7, 9, 193, 7, 11, 193, 8, 8, 164, 8, 9, 223, 8, 10, 223, 8, 11, 223, 8, 12, 164, 9, 11, 208, 9, 12, 223, 9, 13, 223, 9, 14, 208, 9, 15, 164, 10, 13, 193, 10, 14, 223, 10, 15, 193, 11, 15, 193], "secondary": false }, { "width": 10, "bonus": 235, "chr": "B", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 208, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 164, 3, 9, 164, 3, 15, 193, 4, 4, 193, 4, 9, 193, 4, 15, 193, 5, 4, 164, 5, 9, 223, 5, 15, 178, 6, 5, 223, 6, 6, 223, 6, 7, 208, 6, 8, 178, 6, 10, 223, 7, 6, 178, 7, 10, 208, 7, 11, 223, 7, 12, 223, 7, 13, 223, 7, 14, 208, 8, 11, 164, 8, 12, 193, 8, 13, 164], "secondary": false }, { "width": 12, "bonus": 165, "chr": "C", "pixels": [0, 8, 164, 0, 9, 208, 0, 10, 193, 0, 11, 164, 1, 6, 178, 1, 7, 223, 1, 8, 223, 1, 9, 223, 1, 10, 223, 1, 11, 223, 1, 12, 223, 2, 5, 164, 2, 6, 223, 2, 7, 164, 2, 11, 164, 2, 12, 223, 2, 13, 223, 3, 5, 208, 3, 13, 193, 3, 14, 223, 4, 14, 208, 5, 4, 178, 5, 15, 164, 6, 4, 193, 6, 15, 193, 7, 4, 193, 7, 15, 193, 8, 4, 193, 8, 15, 193, 9, 4, 164, 9, 15, 164, 10, 5, 193, 10, 14, 178], "secondary": false }, { "width": 14, "bonus": 260, "chr": "D", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 208, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 208, 3, 15, 223, 4, 4, 193, 4, 15, 208, 5, 4, 193, 5, 15, 193, 6, 4, 193, 6, 15, 193, 7, 4, 178, 7, 15, 164, 8, 5, 193, 9, 5, 223, 9, 6, 164, 9, 14, 208, 10, 5, 178, 10, 6, 223, 10, 7, 208, 10, 13, 223, 11, 6, 193, 11, 7, 223, 11, 8, 223, 11, 9, 223, 11, 10, 223, 11, 11, 223, 11, 12, 223, 12, 8, 178, 12, 9, 193, 12, 10, 193], "secondary": false }, { "width": 10, "bonus": 170, "chr": "E", "pixels": [2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 208, 3, 5, 193, 3, 6, 193, 3, 7, 193, 3, 8, 193, 3, 9, 223, 3, 10, 193, 3, 11, 193, 3, 12, 193, 3, 13, 193, 3, 14, 223, 3, 15, 193, 4, 4, 193, 4, 9, 193, 4, 15, 193, 5, 4, 193, 5, 9, 193, 5, 15, 193, 6, 4, 208, 6, 9, 208, 6, 15, 193, 7, 15, 208], "secondary": false }, { "width": 9, "bonus": 155, "chr": "F", "pixels": [2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 208, 3, 5, 193, 3, 6, 193, 3, 7, 193, 3, 8, 193, 3, 9, 223, 3, 10, 193, 3, 11, 193, 3, 12, 193, 3, 13, 193, 3, 14, 208, 3, 15, 193, 4, 4, 193, 4, 9, 193, 5, 4, 193, 5, 9, 193, 6, 4, 208, 6, 9, 208, 7, 4, 193], "secondary": false }, { "width": 14, "bonus": 210, "chr": "G", "pixels": [0, 9, 193, 0, 10, 208, 0, 11, 164, 1, 7, 223, 1, 8, 223, 1, 9, 223, 1, 10, 223, 1, 11, 223, 1, 12, 223, 1, 13, 164, 2, 6, 223, 2, 7, 164, 2, 11, 164, 2, 12, 223, 2, 13, 223, 3, 5, 223, 3, 13, 193, 3, 14, 223, 4, 14, 208, 5, 4, 178, 5, 15, 164, 6, 4, 193, 6, 15, 193, 7, 4, 193, 7, 15, 193, 8, 4, 193, 8, 15, 193, 9, 4, 178, 9, 15, 178, 10, 5, 178, 10, 10, 193, 10, 11, 223, 10, 12, 223, 10, 13, 223, 10, 14, 223, 11, 5, 178, 11, 6, 164, 11, 10, 208, 11, 11, 193, 11, 12, 193, 11, 13, 193, 11, 14, 193], "secondary": false }, { "width": 15, "bonus": 270, "chr": "H", "pixels": [2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 193, 3, 5, 193, 3, 6, 193, 3, 7, 193, 3, 8, 193, 3, 9, 223, 3, 10, 193, 3, 11, 193, 3, 12, 193, 3, 13, 193, 3, 14, 208, 3, 15, 193, 4, 9, 193, 5, 9, 193, 6, 9, 193, 7, 9, 193, 8, 9, 193, 9, 9, 193, 10, 4, 193, 10, 5, 193, 10, 6, 193, 10, 7, 193, 10, 8, 193, 10, 9, 223, 10, 10, 193, 10, 11, 193, 10, 12, 193, 10, 13, 193, 10, 14, 208, 10, 15, 193, 11, 4, 193, 11, 5, 223, 11, 6, 223, 11, 7, 223, 11, 8, 223, 11, 9, 223, 11, 10, 223, 11, 11, 223, 11, 12, 223, 11, 13, 223, 11, 14, 223, 11, 15, 193], "secondary": false }, { "width": 7, "bonus": 120, "chr": "I", "pixels": [2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 193, 3, 5, 193, 3, 6, 193, 3, 7, 193, 3, 8, 193, 3, 9, 193, 3, 10, 193, 3, 11, 193, 3, 12, 193, 3, 13, 193, 3, 14, 208, 3, 15, 193], "secondary": false }, { "width": 7, "bonus": 135, "chr": "J", "pixels": [2, 18, 178, 3, 4, 193, 3, 5, 223, 3, 6, 223, 3, 7, 223, 3, 8, 223, 3, 9, 223, 3, 10, 223, 3, 11, 223, 3, 12, 223, 3, 13, 223, 3, 14, 223, 3, 15, 223, 3, 16, 223, 3, 17, 223, 4, 4, 193, 4, 5, 193, 4, 6, 193, 4, 7, 193, 4, 8, 193, 4, 9, 193, 4, 10, 193, 4, 11, 193, 4, 12, 193, 4, 13, 193, 4, 14, 193, 4, 15, 193], "secondary": false }, { "width": 13, "bonus": 235, "chr": "K", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 208, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 9, 223, 4, 8, 193, 4, 9, 193, 4, 10, 223, 5, 7, 193, 5, 10, 178, 5, 11, 223, 5, 12, 164, 6, 6, 193, 6, 11, 164, 6, 12, 223, 6, 13, 178, 7, 4, 193, 7, 5, 208, 7, 12, 164, 7, 13, 223, 7, 14, 193, 8, 4, 208, 8, 13, 164, 8, 14, 223, 9, 14, 164, 9, 15, 193, 10, 15, 193], "secondary": false }, { "width": 9, "bonus": 145, "chr": "L", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 208, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 15, 193, 4, 15, 193, 5, 15, 193, 6, 15, 193, 7, 14, 164], "secondary": false }, { "width": 18, "bonus": 245, "chr": "M", "pixels": [1, 15, 164, 2, 11, 193, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 208, 3, 5, 193, 3, 6, 223, 3, 7, 223, 3, 8, 208, 3, 9, 164, 4, 6, 208, 4, 7, 223, 4, 8, 223, 5, 8, 223, 5, 9, 223, 5, 10, 223, 6, 10, 223, 6, 11, 223, 6, 12, 223, 7, 12, 223, 7, 13, 223, 7, 14, 208, 8, 13, 223, 8, 14, 178, 9, 11, 193, 9, 12, 193, 10, 9, 193, 10, 10, 193, 11, 7, 178, 11, 8, 193, 12, 5, 178, 12, 6, 223, 12, 7, 223, 12, 8, 208, 12, 9, 178, 13, 6, 164, 13, 7, 193, 13, 8, 223, 13, 9, 223, 13, 10, 223, 13, 11, 223, 13, 12, 223, 13, 13, 223, 13, 14, 223, 13, 15, 178, 14, 13, 193, 14, 14, 223, 14, 15, 193], "secondary": false }, { "width": 15, "bonus": 225, "chr": "N", "pixels": [1, 15, 164, 2, 5, 223, 2, 6, 223, 2, 7, 193, 2, 8, 178, 2, 9, 193, 2, 10, 193, 2, 11, 193, 2, 12, 193, 2, 13, 208, 2, 14, 223, 2, 15, 193, 3, 6, 223, 3, 7, 193, 4, 7, 223, 4, 8, 208, 5, 8, 223, 5, 9, 208, 6, 9, 223, 6, 10, 208, 7, 9, 164, 7, 10, 223, 7, 11, 208, 8, 10, 164, 8, 11, 223, 8, 12, 193, 9, 11, 164, 9, 12, 223, 9, 13, 193, 10, 4, 164, 10, 12, 164, 10, 13, 223, 10, 14, 193, 11, 4, 193, 11, 5, 223, 11, 6, 223, 11, 7, 223, 11, 8, 223, 11, 9, 223, 11, 10, 223, 11, 11, 223, 11, 12, 193, 11, 13, 193, 11, 14, 193, 11, 15, 164], "secondary": false }, { "width": 15, "bonus": 235, "chr": "O", "pixels": [0, 8, 164, 0, 9, 193, 0, 10, 193, 0, 11, 164, 1, 7, 223, 1, 8, 223, 1, 9, 223, 1, 10, 223, 1, 11, 223, 1, 12, 223, 1, 13, 164, 2, 6, 223, 2, 7, 164, 2, 12, 223, 2, 13, 223, 2, 14, 164, 3, 5, 193, 3, 13, 164, 3, 14, 223, 4, 14, 178, 5, 4, 178, 5, 15, 193, 6, 4, 193, 6, 15, 208, 7, 4, 208, 7, 15, 178, 8, 4, 178, 8, 15, 164, 9, 5, 208, 10, 5, 223, 10, 6, 223, 10, 13, 164, 10, 14, 193, 11, 6, 223, 11, 7, 223, 11, 8, 223, 11, 9, 208, 11, 10, 193, 11, 11, 223, 11, 12, 223, 11, 13, 223, 12, 7, 208, 12, 8, 223, 12, 9, 223, 12, 10, 223, 12, 11, 223, 12, 12, 178], "secondary": false }, { "width": 10, "bonus": 180, "chr": "P", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 223, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 193, 4, 4, 193, 5, 4, 193, 6, 4, 164, 6, 5, 193, 6, 9, 193, 7, 5, 223, 7, 6, 223, 7, 7, 223, 7, 8, 223, 8, 6, 193, 8, 7, 193], "secondary": false }, { "width": 14, "bonus": 260, "chr": "Q", "pixels": [0, 8, 174, 0, 9, 214, 0, 10, 212, 0, 11, 172, 1, 6, 179, 1, 7, 223, 1, 8, 223, 1, 9, 223, 1, 10, 223, 1, 11, 223, 1, 12, 223, 1, 13, 185, 2, 5, 180, 2, 6, 201, 2, 12, 190, 2, 13, 223, 2, 14, 185, 3, 5, 165, 3, 14, 223, 4, 4, 163, 4, 15, 171, 5, 4, 164, 5, 15, 209, 6, 4, 171, 6, 13, 190, 6, 15, 183, 7, 4, 195, 7, 13, 206, 7, 15, 165, 8, 4, 171, 8, 14, 213, 8, 15, 167, 9, 5, 219, 9, 14, 175, 9, 15, 218, 10, 5, 197, 10, 6, 223, 10, 7, 174, 10, 13, 199, 10, 14, 169, 11, 6, 205, 11, 7, 223, 11, 8, 223, 11, 9, 223, 11, 10, 223, 11, 11, 223, 11, 12, 223, 11, 13, 166, 12, 8, 192, 12, 9, 219, 12, 10, 213, 12, 11, 170], "secondary": false }, { "width": 14, "bonus": 245, "chr": "R", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 223, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 193, 3, 10, 208, 4, 4, 193, 4, 10, 193, 5, 4, 193, 5, 10, 223, 6, 4, 164, 6, 5, 193, 6, 9, 164, 6, 10, 208, 6, 11, 223, 7, 5, 223, 7, 6, 223, 7, 7, 223, 7, 8, 223, 7, 11, 178, 7, 12, 223, 7, 13, 193, 8, 6, 193, 8, 7, 193, 8, 13, 223, 8, 14, 208, 9, 14, 223, 9, 15, 164, 10, 15, 208], "secondary": false }, { "width": 8, "bonus": 140, "chr": "S", "pixels": [1, 6, 193, 1, 7, 193, 1, 15, 164, 2, 5, 208, 2, 6, 178, 2, 7, 223, 2, 8, 223, 2, 9, 164, 2, 15, 193, 3, 4, 164, 3, 8, 208, 3, 9, 223, 3, 15, 193, 4, 4, 193, 4, 9, 223, 4, 10, 223, 4, 11, 164, 4, 15, 164, 5, 4, 193, 5, 10, 223, 5, 11, 223, 5, 12, 208, 5, 13, 178, 5, 14, 223, 6, 5, 193, 6, 11, 164, 6, 12, 193, 6, 13, 178], "secondary": false }, { "width": 13, "bonus": 160, "chr": "T", "pixels": [1, 4, 208, 2, 4, 193, 3, 4, 193, 4, 4, 193, 5, 4, 193, 5, 5, 193, 5, 6, 193, 5, 7, 193, 5, 8, 193, 5, 9, 193, 5, 10, 193, 5, 11, 193, 5, 12, 193, 5, 13, 193, 5, 14, 208, 5, 15, 193, 6, 4, 193, 6, 5, 223, 6, 6, 223, 6, 7, 223, 6, 8, 223, 6, 9, 223, 6, 10, 223, 6, 11, 223, 6, 12, 223, 6, 13, 223, 6, 14, 223, 6, 15, 193, 7, 4, 193, 8, 4, 193, 9, 4, 193, 10, 4, 208], "secondary": false }, { "width": 14, "bonus": 180, "chr": "U", "pixels": [2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 3, 4, 193, 3, 5, 193, 3, 6, 193, 3, 7, 193, 3, 8, 193, 3, 9, 193, 3, 10, 193, 3, 11, 193, 3, 12, 223, 3, 13, 223, 3, 14, 208, 4, 14, 223, 5, 15, 193, 6, 15, 193, 7, 15, 193, 9, 14, 193, 10, 4, 193, 10, 5, 193, 10, 6, 193, 10, 7, 193, 10, 8, 193, 10, 9, 193, 10, 10, 193, 10, 11, 193, 10, 12, 223, 10, 13, 208, 11, 4, 178], "secondary": false }, { "width": 14, "bonus": 160, "chr": "V", "pixels": [1, 4, 208, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 164, 3, 4, 164, 3, 5, 178, 3, 6, 223, 3, 7, 223, 3, 8, 223, 3, 9, 178, 4, 8, 208, 4, 9, 223, 4, 10, 223, 4, 11, 208, 5, 10, 164, 5, 11, 223, 5, 12, 223, 5, 13, 223, 6, 12, 164, 6, 13, 223, 6, 14, 223, 7, 11, 164, 7, 12, 208, 8, 9, 193, 8, 10, 193, 9, 7, 223, 9, 8, 178, 10, 4, 193, 10, 5, 223, 10, 6, 164, 11, 4, 178], "secondary": false }, { "width": 19, "bonus": 255, "chr": "W", "pixels": [1, 4, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 178, 3, 4, 164, 3, 5, 178, 3, 6, 223, 3, 7, 223, 3, 8, 223, 3, 9, 223, 3, 10, 164, 4, 8, 164, 4, 9, 223, 4, 10, 223, 4, 11, 223, 4, 12, 223, 5, 12, 208, 5, 13, 223, 5, 14, 223, 6, 12, 208, 6, 13, 164, 7, 9, 178, 7, 10, 193, 8, 7, 208, 8, 8, 164, 9, 5, 223, 9, 6, 223, 9, 7, 208, 10, 6, 164, 10, 7, 223, 10, 8, 223, 10, 9, 223, 11, 9, 208, 11, 10, 223, 11, 11, 223, 11, 12, 178, 12, 11, 193, 12, 12, 223, 12, 13, 223, 12, 14, 193, 13, 12, 208, 13, 13, 208, 14, 9, 164, 14, 10, 208, 14, 11, 164, 15, 6, 178, 15, 7, 223, 15, 8, 164, 16, 4, 193, 16, 5, 178], "secondary": false }, { "width": 13, "bonus": 190, "chr": "X", "pixels": [1, 15, 164, 2, 4, 193, 2, 14, 193, 2, 15, 193, 3, 4, 193, 3, 5, 223, 3, 6, 208, 3, 13, 223, 4, 5, 164, 4, 6, 223, 4, 7, 223, 4, 8, 164, 4, 11, 164, 4, 12, 193, 5, 7, 193, 5, 8, 223, 5, 9, 223, 5, 10, 208, 6, 8, 193, 6, 9, 223, 6, 10, 223, 6, 11, 193, 7, 7, 178, 7, 8, 164, 7, 10, 178, 7, 11, 223, 7, 12, 223, 7, 13, 164, 8, 6, 208, 8, 12, 208, 8, 13, 223, 8, 14, 223, 8, 15, 164, 9, 4, 193, 9, 5, 178, 9, 14, 223, 9, 15, 193, 10, 15, 193], "secondary": false }, { "width": 14, "bonus": 150, "chr": "Y", "pixels": [1, 4, 208, 2, 4, 193, 2, 5, 223, 3, 4, 178, 3, 5, 208, 3, 6, 223, 3, 7, 193, 4, 7, 223, 4, 8, 223, 4, 9, 164, 5, 8, 164, 5, 9, 223, 5, 10, 223, 5, 11, 208, 5, 12, 193, 5, 13, 193, 5, 14, 208, 5, 15, 193, 6, 10, 223, 6, 11, 223, 6, 12, 223, 6, 13, 223, 6, 14, 223, 6, 15, 193, 7, 8, 164, 7, 9, 178, 8, 7, 208, 9, 4, 208, 9, 5, 223, 10, 4, 208], "secondary": false }, { "width": 11, "bonus": 185, "chr": "Z", "pixels": [1, 4, 193, 1, 14, 208, 1, 15, 193, 2, 4, 193, 2, 12, 164, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 193, 3, 11, 208, 3, 12, 223, 3, 13, 178, 3, 15, 193, 4, 4, 193, 4, 9, 178, 4, 10, 223, 4, 11, 223, 4, 15, 193, 5, 4, 193, 5, 8, 223, 5, 9, 223, 5, 10, 193, 5, 15, 193, 6, 4, 193, 6, 6, 178, 6, 7, 223, 6, 8, 223, 6, 15, 193, 7, 4, 193, 7, 5, 223, 7, 6, 223, 7, 7, 193, 7, 15, 193, 8, 4, 193, 8, 5, 223, 8, 15, 193, 9, 14, 164], "secondary": false }, { "width": 5, "bonus": 70, "chr": "[", "pixels": [1, 2, 178, 1, 3, 208, 1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 193, 1, 15, 193], "secondary": false }, { "width": 10, "bonus": 50, "chr": "\\", "pixels": [1, 5, 178, 1, 6, 164, 2, 7, 208, 3, 9, 193, 4, 10, 193, 4, 11, 164, 5, 12, 208, 6, 13, 164, 6, 14, 178, 7, 15, 193], "secondary": false }, { "width": 5, "bonus": 70, "chr": "]", "pixels": [2, 2, 178, 2, 3, 208, 2, 4, 193, 2, 5, 193, 2, 6, 193, 2, 7, 193, 2, 8, 193, 2, 9, 193, 2, 10, 193, 2, 11, 193, 2, 12, 193, 2, 13, 193, 2, 14, 193, 2, 15, 193], "secondary": false }, { "width": 9, "bonus": 55, "chr": "^", "pixels": [1, 8, 164, 1, 9, 208, 2, 6, 193, 2, 7, 193, 3, 4, 208, 3, 5, 193, 4, 5, 208, 4, 6, 178, 5, 7, 178, 5, 8, 208, 6, 10, 223], "secondary": false }, { "width": 10, "bonus": 40, "chr": "_", "pixels": [0, 16, 178, 1, 16, 193, 2, 16, 193, 3, 16, 193, 4, 16, 193, 5, 16, 193, 6, 16, 193, 7, 16, 193], "secondary": false }, { "width": 14, "bonus": 175, "chr": "a", "pixels": [1, 15, 164, 2, 14, 208, 2, 15, 193, 3, 11, 164, 3, 12, 223, 3, 13, 164, 4, 9, 193, 4, 10, 193, 4, 11, 208, 5, 7, 208, 5, 8, 164, 5, 11, 193, 6, 5, 223, 6, 6, 223, 6, 7, 178, 6, 11, 193, 7, 6, 193, 7, 7, 223, 7, 8, 223, 7, 9, 193, 7, 11, 193, 8, 8, 164, 8, 9, 223, 8, 10, 223, 8, 11, 223, 8, 12, 164, 9, 11, 208, 9, 12, 223, 9, 13, 223, 9, 14, 208, 9, 15, 164, 10, 13, 193, 10, 14, 223, 10, 15, 193, 11, 15, 193], "secondary": false }, { "width": 10, "bonus": 235, "chr": "b", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 208, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 164, 3, 9, 164, 3, 15, 193, 4, 4, 193, 4, 9, 193, 4, 15, 193, 5, 4, 164, 5, 9, 223, 5, 15, 178, 6, 5, 223, 6, 6, 223, 6, 7, 208, 6, 8, 178, 6, 10, 223, 7, 6, 178, 7, 10, 208, 7, 11, 223, 7, 12, 223, 7, 13, 223, 7, 14, 208, 8, 11, 164, 8, 12, 193, 8, 13, 164], "secondary": false }, { "width": 12, "bonus": 165, "chr": "c", "pixels": [0, 8, 164, 0, 9, 208, 0, 10, 193, 0, 11, 164, 1, 6, 178, 1, 7, 223, 1, 8, 223, 1, 9, 223, 1, 10, 223, 1, 11, 223, 1, 12, 223, 2, 5, 164, 2, 6, 223, 2, 7, 164, 2, 11, 164, 2, 12, 223, 2, 13, 223, 3, 5, 208, 3, 13, 193, 3, 14, 223, 4, 14, 208, 5, 4, 178, 5, 15, 164, 6, 4, 193, 6, 15, 193, 7, 4, 193, 7, 15, 193, 8, 4, 193, 8, 15, 193, 9, 4, 164, 9, 15, 164, 10, 5, 193, 10, 14, 178], "secondary": false }, { "width": 15, "bonus": 260, "chr": "d", "pixels": [2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 193, 3, 5, 208, 3, 6, 193, 3, 7, 193, 3, 8, 193, 3, 9, 193, 3, 10, 193, 3, 11, 193, 3, 12, 193, 3, 13, 193, 3, 14, 223, 3, 15, 193, 4, 4, 193, 4, 15, 223, 5, 4, 193, 5, 15, 193, 6, 4, 208, 6, 15, 193, 7, 4, 178, 7, 15, 178, 8, 4, 164, 9, 5, 223, 9, 14, 178, 10, 5, 208, 10, 6, 223, 10, 13, 164, 10, 14, 193, 11, 6, 223, 11, 7, 223, 11, 8, 223, 11, 9, 208, 11, 10, 193, 11, 11, 223, 11, 12, 223, 11, 13, 208, 12, 7, 193, 12, 8, 223, 12, 9, 223, 12, 10, 223, 12, 11, 223], "secondary": false }, { "width": 10, "bonus": 170, "chr": "e", "pixels": [2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 208, 3, 5, 193, 3, 6, 193, 3, 7, 193, 3, 8, 193, 3, 9, 223, 3, 10, 193, 3, 11, 193, 3, 12, 193, 3, 13, 193, 3, 14, 223, 3, 15, 193, 4, 4, 193, 4, 9, 193, 4, 15, 193, 5, 4, 193, 5, 9, 193, 5, 15, 193, 6, 4, 208, 6, 9, 208, 6, 15, 193, 7, 15, 208], "secondary": false }, { "width": 9, "bonus": 155, "chr": "f", "pixels": [2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 208, 3, 5, 193, 3, 6, 193, 3, 7, 193, 3, 8, 193, 3, 9, 223, 3, 10, 193, 3, 11, 193, 3, 12, 193, 3, 13, 193, 3, 14, 208, 3, 15, 193, 4, 4, 193, 4, 9, 193, 5, 4, 193, 5, 9, 193, 6, 4, 208, 6, 9, 208, 7, 4, 193], "secondary": false }, { "width": 15, "bonus": 220, "chr": "g", "pixels": [1, 7, 178, 1, 8, 223, 1, 9, 223, 1, 10, 223, 1, 11, 223, 1, 12, 193, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 193, 2, 10, 208, 2, 11, 223, 2, 12, 223, 2, 13, 223, 3, 5, 208, 3, 6, 164, 3, 13, 223, 3, 14, 193, 4, 5, 164, 4, 14, 223, 5, 4, 164, 6, 4, 193, 6, 15, 178, 7, 4, 193, 7, 15, 208, 8, 4, 208, 8, 15, 193, 9, 4, 178, 9, 15, 178, 10, 4, 164, 10, 5, 164, 10, 10, 208, 10, 11, 193, 10, 12, 193, 10, 13, 193, 10, 14, 208, 10, 15, 164, 11, 5, 223, 11, 6, 164, 11, 10, 193, 11, 11, 223, 11, 12, 223, 11, 13, 223, 11, 14, 223], "secondary": false }, { "width": 15, "bonus": 270, "chr": "h", "pixels": [2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 193, 3, 5, 193, 3, 6, 193, 3, 7, 193, 3, 8, 193, 3, 9, 223, 3, 10, 193, 3, 11, 193, 3, 12, 193, 3, 13, 193, 3, 14, 208, 3, 15, 193, 4, 9, 193, 5, 9, 193, 6, 9, 193, 7, 9, 193, 8, 9, 193, 9, 9, 193, 10, 4, 193, 10, 5, 193, 10, 6, 193, 10, 7, 193, 10, 8, 193, 10, 9, 223, 10, 10, 193, 10, 11, 193, 10, 12, 193, 10, 13, 193, 10, 14, 208, 10, 15, 193, 11, 4, 193, 11, 5, 223, 11, 6, 223, 11, 7, 223, 11, 8, 223, 11, 9, 223, 11, 10, 223, 11, 11, 223, 11, 12, 223, 11, 13, 223, 11, 14, 223, 11, 15, 193], "secondary": false }, { "width": 7, "bonus": 120, "chr": "i", "pixels": [2, 4, 193, 2, 5, 193, 2, 6, 193, 2, 7, 193, 2, 8, 193, 2, 9, 193, 2, 10, 193, 2, 11, 193, 2, 12, 193, 2, 13, 193, 2, 14, 208, 2, 15, 193, 3, 4, 193, 3, 5, 223, 3, 6, 223, 3, 7, 223, 3, 8, 223, 3, 9, 223, 3, 10, 223, 3, 11, 223, 3, 12, 223, 3, 13, 223, 3, 14, 223, 3, 15, 193], "secondary": false }, { "width": 7, "bonus": 135, "chr": "j", "pixels": [2, 18, 178, 3, 4, 193, 3, 5, 223, 3, 6, 223, 3, 7, 223, 3, 8, 223, 3, 9, 223, 3, 10, 223, 3, 11, 223, 3, 12, 223, 3, 13, 223, 3, 14, 223, 3, 15, 223, 3, 16, 223, 3, 17, 223, 4, 4, 193, 4, 5, 193, 4, 6, 193, 4, 7, 193, 4, 8, 193, 4, 9, 193, 4, 10, 193, 4, 11, 193, 4, 12, 193, 4, 13, 193, 4, 14, 193, 4, 15, 193], "secondary": false }, { "width": 13, "bonus": 235, "chr": "k", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 208, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 9, 223, 4, 8, 193, 4, 9, 193, 4, 10, 223, 5, 7, 193, 5, 10, 178, 5, 11, 223, 5, 12, 164, 6, 6, 193, 6, 11, 164, 6, 12, 223, 6, 13, 178, 7, 4, 193, 7, 5, 208, 7, 12, 164, 7, 13, 223, 7, 14, 193, 8, 4, 208, 8, 13, 164, 8, 14, 223, 9, 14, 164, 9, 15, 193, 10, 15, 193], "secondary": false }, { "width": 9, "bonus": 145, "chr": "l", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 208, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 15, 193, 4, 15, 193, 5, 15, 193, 6, 15, 193, 7, 14, 164], "secondary": false }, { "width": 18, "bonus": 245, "chr": "m", "pixels": [1, 15, 164, 2, 11, 193, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 208, 3, 5, 193, 3, 6, 223, 3, 7, 223, 3, 8, 208, 3, 9, 164, 4, 6, 208, 4, 7, 223, 4, 8, 223, 5, 8, 223, 5, 9, 223, 5, 10, 223, 6, 10, 223, 6, 11, 223, 6, 12, 223, 7, 12, 223, 7, 13, 223, 7, 14, 208, 8, 13, 223, 8, 14, 178, 9, 11, 193, 9, 12, 193, 10, 9, 193, 10, 10, 193, 11, 7, 178, 11, 8, 193, 12, 5, 178, 12, 6, 223, 12, 7, 223, 12, 8, 208, 12, 9, 178, 13, 6, 164, 13, 7, 193, 13, 8, 223, 13, 9, 223, 13, 10, 223, 13, 11, 223, 13, 12, 223, 13, 13, 223, 13, 14, 223, 13, 15, 178, 14, 13, 193, 14, 14, 223, 14, 15, 193], "secondary": false }, { "width": 15, "bonus": 225, "chr": "n", "pixels": [1, 15, 164, 2, 5, 223, 2, 6, 223, 2, 7, 193, 2, 8, 178, 2, 9, 193, 2, 10, 193, 2, 11, 193, 2, 12, 193, 2, 13, 208, 2, 14, 223, 2, 15, 193, 3, 6, 223, 3, 7, 193, 4, 7, 223, 4, 8, 208, 5, 8, 223, 5, 9, 208, 6, 9, 223, 6, 10, 208, 7, 9, 164, 7, 10, 223, 7, 11, 208, 8, 10, 164, 8, 11, 223, 8, 12, 193, 9, 11, 164, 9, 12, 223, 9, 13, 193, 10, 4, 164, 10, 12, 164, 10, 13, 223, 10, 14, 193, 11, 4, 193, 11, 5, 223, 11, 6, 223, 11, 7, 223, 11, 8, 223, 11, 9, 223, 11, 10, 223, 11, 11, 223, 11, 12, 193, 11, 13, 193, 11, 14, 193, 11, 15, 164], "secondary": false }, { "width": 15, "bonus": 235, "chr": "o", "pixels": [0, 8, 164, 0, 9, 193, 0, 10, 193, 0, 11, 164, 1, 7, 223, 1, 8, 223, 1, 9, 223, 1, 10, 223, 1, 11, 223, 1, 12, 223, 1, 13, 164, 2, 6, 223, 2, 7, 164, 2, 12, 223, 2, 13, 223, 2, 14, 164, 3, 5, 193, 3, 13, 164, 3, 14, 223, 4, 14, 178, 5, 4, 178, 5, 15, 193, 6, 4, 193, 6, 15, 208, 7, 4, 208, 7, 15, 178, 8, 4, 178, 8, 15, 164, 9, 5, 208, 10, 5, 223, 10, 6, 223, 10, 13, 164, 10, 14, 193, 11, 6, 223, 11, 7, 223, 11, 8, 223, 11, 9, 208, 11, 10, 193, 11, 11, 223, 11, 12, 223, 11, 13, 223, 12, 7, 208, 12, 8, 223, 12, 9, 223, 12, 10, 223, 12, 11, 223, 12, 12, 178], "secondary": false }, { "width": 10, "bonus": 180, "chr": "p", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 223, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 193, 4, 4, 193, 5, 4, 193, 6, 4, 164, 6, 5, 193, 6, 9, 193, 7, 5, 223, 7, 6, 223, 7, 7, 223, 7, 8, 223, 8, 6, 193, 8, 7, 193], "secondary": false }, { "width": 14, "bonus": 260, "chr": "q", "pixels": [0, 8, 174, 0, 9, 214, 0, 10, 212, 0, 11, 172, 1, 6, 179, 1, 7, 223, 1, 8, 223, 1, 9, 223, 1, 10, 223, 1, 11, 223, 1, 12, 223, 1, 13, 185, 2, 5, 180, 2, 6, 201, 2, 12, 190, 2, 13, 223, 2, 14, 185, 3, 5, 165, 3, 14, 223, 4, 4, 163, 4, 15, 171, 5, 4, 164, 5, 15, 209, 6, 4, 171, 6, 13, 190, 6, 15, 183, 7, 4, 195, 7, 13, 206, 7, 15, 165, 8, 4, 171, 8, 14, 213, 8, 15, 167, 9, 5, 219, 9, 14, 175, 9, 15, 218, 10, 5, 197, 10, 6, 223, 10, 7, 174, 10, 13, 199, 10, 14, 169, 11, 6, 205, 11, 7, 223, 11, 8, 223, 11, 9, 223, 11, 10, 223, 11, 11, 223, 11, 12, 223, 11, 13, 166, 12, 8, 192, 12, 9, 219, 12, 10, 213, 12, 11, 170], "secondary": false }, { "width": 13, "bonus": 235, "chr": "r", "pixels": [1, 4, 193, 1, 5, 193, 1, 6, 193, 1, 7, 193, 1, 8, 193, 1, 9, 193, 1, 10, 193, 1, 11, 193, 1, 12, 193, 1, 13, 193, 1, 14, 223, 1, 15, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 193, 3, 10, 208, 4, 4, 208, 4, 10, 208, 5, 4, 178, 5, 10, 223, 5, 11, 208, 6, 5, 223, 6, 6, 223, 6, 7, 193, 6, 8, 223, 6, 9, 178, 6, 11, 193, 6, 12, 223, 6, 13, 164, 7, 6, 223, 7, 7, 208, 7, 12, 164, 7, 13, 223, 7, 14, 193, 8, 14, 223, 8, 15, 164, 9, 15, 208], "secondary": false }, { "width": 8, "bonus": 140, "chr": "s", "pixels": [1, 6, 193, 1, 7, 193, 1, 15, 164, 2, 5, 208, 2, 6, 178, 2, 7, 223, 2, 8, 223, 2, 9, 164, 2, 15, 193, 3, 4, 164, 3, 8, 208, 3, 9, 223, 3, 15, 193, 4, 4, 193, 4, 9, 223, 4, 10, 223, 4, 11, 164, 4, 15, 164, 5, 4, 193, 5, 10, 223, 5, 11, 223, 5, 12, 208, 5, 13, 178, 5, 14, 223, 6, 5, 193, 6, 11, 164, 6, 12, 193, 6, 13, 178], "secondary": false }, { "width": 13, "bonus": 160, "chr": "t", "pixels": [1, 4, 208, 2, 4, 193, 3, 4, 193, 4, 4, 193, 5, 4, 193, 5, 5, 193, 5, 6, 193, 5, 7, 193, 5, 8, 193, 5, 9, 193, 5, 10, 193, 5, 11, 193, 5, 12, 193, 5, 13, 193, 5, 14, 208, 5, 15, 193, 6, 4, 193, 6, 5, 223, 6, 6, 223, 6, 7, 223, 6, 8, 223, 6, 9, 223, 6, 10, 223, 6, 11, 223, 6, 12, 223, 6, 13, 223, 6, 14, 223, 6, 15, 193, 7, 4, 193, 8, 4, 193, 9, 4, 193, 10, 4, 208], "secondary": false }, { "width": 14, "bonus": 180, "chr": "u", "pixels": [2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 223, 2, 8, 223, 2, 9, 223, 2, 10, 223, 2, 11, 223, 2, 12, 223, 3, 4, 193, 3, 5, 193, 3, 6, 193, 3, 7, 193, 3, 8, 193, 3, 9, 193, 3, 10, 193, 3, 11, 193, 3, 12, 223, 3, 13, 223, 3, 14, 208, 4, 14, 223, 5, 15, 193, 6, 15, 193, 7, 15, 193, 9, 14, 193, 10, 4, 193, 10, 5, 193, 10, 6, 193, 10, 7, 193, 10, 8, 193, 10, 9, 193, 10, 10, 193, 10, 11, 193, 10, 12, 223, 10, 13, 208, 11, 4, 178], "secondary": false }, { "width": 15, "bonus": 160, "chr": "v", "pixels": [2, 4, 208, 3, 4, 193, 3, 5, 223, 3, 6, 223, 3, 7, 164, 4, 4, 164, 4, 5, 178, 4, 6, 223, 4, 7, 223, 4, 8, 223, 4, 9, 178, 5, 8, 208, 5, 9, 223, 5, 10, 223, 5, 11, 208, 6, 10, 164, 6, 11, 223, 6, 12, 223, 6, 13, 223, 7, 12, 164, 7, 13, 223, 7, 14, 223, 8, 11, 164, 8, 12, 208, 9, 9, 193, 9, 10, 193, 10, 7, 223, 10, 8, 178, 11, 4, 193, 11, 5, 223, 11, 6, 164, 12, 4, 178], "secondary": false }, { "width": 19, "bonus": 255, "chr": "w", "pixels": [1, 4, 193, 2, 4, 193, 2, 5, 223, 2, 6, 223, 2, 7, 178, 3, 4, 164, 3, 5, 178, 3, 6, 223, 3, 7, 223, 3, 8, 223, 3, 9, 223, 3, 10, 164, 4, 8, 164, 4, 9, 223, 4, 10, 223, 4, 11, 223, 4, 12, 223, 5, 12, 208, 5, 13, 223, 5, 14, 223, 6, 12, 208, 6, 13, 164, 7, 9, 178, 7, 10, 193, 8, 7, 208, 8, 8, 164, 9, 5, 223, 9, 6, 223, 9, 7, 208, 10, 6, 164, 10, 7, 223, 10, 8, 223, 10, 9, 223, 11, 9, 208, 11, 10, 223, 11, 11, 223, 11, 12, 178, 12, 11, 193, 12, 12, 223, 12, 13, 223, 12, 14, 193, 13, 12, 208, 13, 13, 208, 14, 9, 164, 14, 10, 208, 14, 11, 164, 15, 6, 178, 15, 7, 223, 15, 8, 164, 16, 4, 193, 16, 5, 178], "secondary": false }, { "width": 13, "bonus": 190, "chr": "x", "pixels": [1, 15, 164, 2, 4, 193, 2, 14, 193, 2, 15, 193, 3, 4, 193, 3, 5, 223, 3, 6, 208, 3, 13, 223, 4, 5, 164, 4, 6, 223, 4, 7, 223, 4, 8, 164, 4, 11, 164, 4, 12, 193, 5, 7, 193, 5, 8, 223, 5, 9, 223, 5, 10, 208, 6, 8, 193, 6, 9, 223, 6, 10, 223, 6, 11, 193, 7, 7, 178, 7, 8, 164, 7, 10, 178, 7, 11, 223, 7, 12, 223, 7, 13, 164, 8, 6, 208, 8, 12, 208, 8, 13, 223, 8, 14, 223, 8, 15, 164, 9, 4, 193, 9, 5, 178, 9, 14, 223, 9, 15, 193, 10, 15, 193], "secondary": false }, { "width": 13, "bonus": 145, "chr": "y", "pixels": [1, 4, 193, 2, 4, 193, 2, 5, 223, 2, 6, 178, 3, 5, 164, 3, 6, 223, 3, 7, 223, 4, 7, 193, 4, 8, 223, 4, 9, 193, 5, 9, 208, 5, 10, 223, 5, 11, 223, 5, 12, 223, 5, 13, 223, 5, 14, 223, 5, 15, 193, 6, 10, 223, 6, 11, 193, 6, 12, 193, 6, 13, 193, 6, 14, 208, 6, 15, 193, 7, 8, 193, 8, 6, 193, 8, 7, 178, 9, 4, 193, 9, 5, 208, 10, 4, 193], "secondary": false }, { "width": 11, "bonus": 185, "chr": "z", "pixels": [0, 15, 164, 1, 4, 193, 1, 14, 223, 1, 15, 193, 2, 4, 193, 2, 12, 193, 2, 13, 223, 2, 14, 223, 2, 15, 193, 3, 4, 193, 3, 11, 223, 3, 12, 223, 3, 13, 164, 3, 15, 193, 4, 4, 193, 4, 9, 193, 4, 10, 223, 4, 11, 208, 4, 15, 193, 5, 4, 193, 5, 8, 223, 5, 9, 223, 5, 10, 164, 5, 15, 193, 6, 4, 193, 6, 6, 193, 6, 7, 223, 6, 8, 208, 6, 15, 193, 7, 4, 193, 7, 5, 223, 7, 6, 223, 7, 7, 164, 7, 15, 193, 8, 4, 193, 8, 5, 208, 8, 15, 193], "secondary": false }, { "width": 6, "bonus": 50, "chr": "{", "pixels": [1, 9, 193, 2, 4, 223, 2, 5, 193, 2, 6, 193, 2, 7, 208, 2, 11, 208, 2, 12, 193, 2, 13, 193, 2, 14, 223, 2, 15, 223], "secondary": false }, { "width": 3, "bonus": 80, "chr": "|", "pixels": [0, 4, 193, 0, 5, 193, 0, 6, 193, 0, 7, 193, 0, 8, 193, 0, 9, 193, 0, 10, 193, 0, 11, 193, 0, 12, 193, 0, 13, 193, 0, 14, 193, 0, 15, 193, 0, 16, 193, 0, 17, 193, 0, 18, 193, 0, 19, 193], "secondary": false }, { "width": 6, "bonus": 65, "chr": "}", "pixels": [2, 4, 178, 2, 14, 164, 2, 15, 208, 3, 5, 178, 3, 6, 193, 3, 7, 193, 3, 8, 178, 3, 9, 178, 3, 10, 193, 3, 11, 193, 3, 12, 193, 3, 13, 193, 3, 14, 164], "secondary": false }, { "width": 9, "bonus": 30, "chr": "~", "pixels": [1, 12, 208, 2, 11, 208, 3, 11, 208, 5, 12, 178, 6, 12, 208, 7, 11, 208], "secondary": false }], "width": 19, "spacewidth": 4, "shadow": false, "height": 20, "basey": 15 };
              })
            ),
            /***/
            0: (
              /***/
              (function(module2, exports2, __webpack_require__) {
                module2.exports = __webpack_require__("./fonts/aa_12px_mono.fontmeta.json");
              })
            )
            /******/
          })
        );
      });
    }
  });

  // node_modules/@alt1/ocr/dist/fonts/aa_10px_mono.js
  var require_aa_10px_mono = __commonJS({
    "node_modules/@alt1/ocr/dist/fonts/aa_10px_mono.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["aa_10px_mono"] = factory();
        else
          root["OCR_aa_10px_mono"] = factory();
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
            "./fonts/aa_10px_mono.fontmeta.json": (
              /***/
              (function(module2, exports2) {
                module2.exports = { "chars": [{ "width": 4, "bonus": 40, "chr": "!", "pixels": [1, 1, 238, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 10, 238], "secondary": false }, { "width": 5, "bonus": 30, "chr": '"', "pixels": [1, 0, 187, 1, 1, 255, 2, 0, 153, 2, 1, 153, 3, 0, 255, 3, 1, 187], "secondary": true }, { "width": 10, "bonus": 160, "chr": "#", "pixels": [1, 4, 238, 1, 8, 255, 2, 4, 255, 2, 8, 255, 2, 9, 221, 2, 10, 255, 3, 1, 153, 3, 2, 187, 3, 3, 221, 3, 4, 255, 3, 5, 255, 3, 6, 204, 3, 7, 170, 3, 8, 255, 4, 1, 153, 4, 4, 255, 4, 8, 255, 5, 4, 255, 5, 8, 255, 5, 9, 204, 5, 10, 255, 6, 2, 187, 6, 3, 221, 6, 4, 255, 6, 5, 255, 6, 6, 221, 6, 7, 187, 6, 8, 255, 7, 1, 153, 7, 4, 255, 7, 8, 255, 8, 4, 255], "secondary": false }, { "width": 8, "bonus": 105, "chr": "$", "pixels": [1, 2, 221, 1, 3, 255, 1, 4, 255, 1, 9, 238, 2, 1, 221, 2, 2, 153, 2, 5, 255, 2, 10, 238, 3, 0, 255, 3, 1, 255, 3, 5, 187, 3, 6, 170, 3, 10, 255, 3, 11, 255, 4, 1, 238, 4, 6, 255, 4, 10, 221, 5, 2, 153, 5, 7, 255, 5, 8, 255, 5, 9, 238], "secondary": false }, { "width": 10, "bonus": 125, "chr": "%", "pixels": [1, 2, 255, 1, 3, 255, 1, 10, 187, 2, 1, 255, 2, 4, 255, 2, 9, 238, 3, 2, 255, 3, 3, 255, 3, 7, 170, 3, 8, 221, 4, 6, 238, 5, 4, 153, 5, 5, 238, 5, 8, 255, 5, 9, 255, 6, 3, 238, 6, 4, 170, 6, 7, 255, 6, 10, 255, 7, 2, 238, 7, 7, 255, 7, 10, 255, 8, 1, 187, 8, 8, 255, 8, 9, 255], "secondary": false }, { "width": 9, "bonus": 150, "chr": "&", "pixels": [1, 2, 204, 1, 3, 255, 1, 4, 204, 1, 6, 204, 1, 7, 255, 1, 8, 255, 1, 9, 204, 2, 1, 204, 2, 2, 170, 2, 4, 153, 2, 5, 255, 2, 6, 187, 2, 9, 187, 2, 10, 187, 3, 1, 255, 3, 5, 255, 3, 10, 255, 4, 1, 255, 4, 5, 255, 4, 10, 255, 5, 5, 255, 5, 9, 204, 5, 10, 170, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 238, 6, 9, 153, 7, 5, 255], "secondary": false }, { "width": 4, "bonus": 10, "chr": "'", "pixels": [2, 1, 221, 2, 2, 187], "secondary": true }, { "width": 4, "bonus": 55, "chr": "(", "pixels": [1, 3, 170, 1, 4, 221, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 221, 1, 9, 170, 2, 1, 221, 2, 2, 204, 2, 10, 187, 2, 11, 255], "secondary": false }, { "width": 4, "bonus": 55, "chr": ")", "pixels": [1, 1, 221, 1, 2, 204, 1, 10, 187, 1, 11, 255, 2, 3, 170, 2, 4, 221, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 221, 2, 9, 170], "secondary": false }, { "width": 7, "bonus": 60, "chr": "*", "pixels": [1, 3, 170, 2, 3, 238, 2, 4, 170, 2, 5, 238, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 238, 4, 3, 238, 4, 4, 170, 4, 5, 238, 5, 3, 153], "secondary": false }, { "width": 9, "bonus": 65, "chr": "+", "pixels": [1, 7, 255, 2, 7, 255, 3, 7, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 7, 255, 6, 7, 255, 7, 7, 255], "secondary": false }, { "width": 4, "bonus": 20, "chr": ",", "pixels": [1, 10, 187, 1, 11, 170, 2, 9, 255, 2, 10, 153], "secondary": true }, { "width": 6, "bonus": 20, "chr": "-", "pixels": [1, 7, 255, 2, 7, 255, 3, 7, 255, 4, 7, 170], "secondary": true }, { "width": 4, "bonus": 5, "chr": ".", "pixels": [1, 10, 255], "secondary": true }, { "width": 6, "bonus": 55, "chr": "/", "pixels": [1, 10, 187, 1, 11, 187, 2, 7, 204, 2, 8, 255, 2, 9, 187, 3, 3, 170, 3, 4, 255, 3, 5, 221, 3, 6, 153, 4, 1, 255, 4, 2, 204], "secondary": false }, { "width": 9, "bonus": 110, "chr": "0", "pixels": [1, 3, 187, 1, 4, 238, 1, 5, 255, 1, 6, 255, 1, 7, 238, 1, 8, 187, 2, 2, 255, 2, 9, 255, 3, 1, 238, 3, 10, 238, 4, 1, 255, 4, 10, 255, 5, 1, 238, 5, 10, 238, 6, 2, 255, 6, 9, 255, 7, 3, 187, 7, 4, 238, 7, 5, 255, 7, 6, 255, 7, 7, 238, 7, 8, 187], "secondary": false }, { "width": 7, "bonus": 80, "chr": "1", "pixels": [1, 3, 204, 1, 10, 255, 2, 2, 238, 2, 10, 255, 3, 1, 255, 3, 2, 255, 3, 3, 255, 3, 4, 255, 3, 5, 255, 3, 6, 255, 3, 7, 255, 3, 8, 255, 3, 9, 255, 3, 10, 255, 4, 10, 255, 5, 10, 255], "secondary": false }, { "width": 8, "bonus": 110, "chr": "2", "pixels": [2, 2, 255, 2, 8, 204, 2, 9, 255, 2, 10, 255, 3, 1, 204, 3, 7, 221, 3, 8, 170, 3, 10, 255, 4, 1, 255, 4, 6, 204, 4, 7, 170, 4, 10, 255, 5, 1, 221, 5, 2, 153, 5, 5, 187, 5, 6, 204, 5, 10, 255, 6, 2, 221, 6, 3, 255, 6, 4, 255, 6, 5, 170, 6, 10, 255], "secondary": false }, { "width": 8, "bonus": 120, "chr": "3", "pixels": [1, 9, 170, 2, 1, 255, 2, 9, 187, 2, 10, 170, 3, 1, 255, 3, 5, 255, 3, 10, 255, 4, 1, 255, 4, 3, 170, 4, 4, 221, 4, 5, 238, 4, 10, 255, 5, 1, 255, 5, 2, 238, 5, 3, 187, 5, 5, 170, 5, 6, 187, 5, 9, 187, 5, 10, 170, 6, 1, 255, 6, 6, 187, 6, 7, 255, 6, 8, 255, 6, 9, 187], "secondary": false }, { "width": 9, "bonus": 115, "chr": "4", "pixels": [1, 6, 187, 1, 7, 255, 2, 5, 221, 2, 6, 153, 2, 7, 255, 3, 4, 238, 3, 7, 255, 4, 3, 238, 4, 7, 255, 5, 1, 170, 5, 2, 255, 5, 7, 255, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 7, 255], "secondary": false }, { "width": 8, "bonus": 120, "chr": "5", "pixels": [1, 9, 153, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 221, 2, 5, 255, 2, 9, 153, 2, 10, 187, 3, 1, 255, 3, 5, 255, 3, 10, 255, 4, 1, 255, 4, 5, 255, 4, 10, 255, 5, 1, 255, 5, 5, 187, 5, 6, 187, 5, 9, 187, 5, 10, 170, 6, 1, 170, 6, 6, 187, 6, 7, 255, 6, 8, 255, 6, 9, 187], "secondary": false }, { "width": 9, "bonus": 150, "chr": "6", "pixels": [1, 4, 187, 1, 5, 238, 1, 6, 255, 1, 7, 255, 1, 8, 187, 2, 2, 153, 2, 3, 255, 2, 4, 170, 2, 5, 204, 2, 6, 204, 2, 8, 170, 2, 9, 255, 3, 2, 238, 3, 5, 238, 3, 10, 221, 4, 1, 238, 4, 5, 255, 4, 10, 255, 5, 1, 255, 5, 5, 255, 5, 10, 255, 6, 1, 255, 6, 5, 170, 6, 6, 204, 6, 9, 221, 6, 10, 153, 7, 6, 170, 7, 7, 255, 7, 8, 255, 7, 9, 153], "secondary": false }, { "width": 9, "bonus": 95, "chr": "7", "pixels": [1, 1, 255, 2, 1, 255, 2, 8, 153, 2, 9, 255, 2, 10, 204, 3, 1, 255, 3, 6, 153, 3, 7, 255, 3, 8, 187, 4, 1, 255, 4, 4, 153, 4, 5, 255, 4, 6, 187, 5, 1, 255, 5, 2, 187, 5, 3, 255, 5, 4, 187, 6, 1, 255, 6, 2, 170], "secondary": false }, { "width": 9, "bonus": 170, "chr": "8", "pixels": [1, 2, 204, 1, 3, 255, 1, 4, 204, 1, 6, 153, 1, 7, 255, 1, 8, 255, 1, 9, 153, 2, 1, 187, 2, 2, 187, 2, 4, 187, 2, 5, 255, 2, 6, 204, 2, 9, 221, 2, 10, 153, 3, 1, 255, 3, 5, 255, 3, 10, 255, 4, 1, 255, 4, 5, 170, 4, 10, 255, 5, 1, 204, 5, 2, 153, 5, 5, 204, 5, 6, 204, 5, 10, 238, 6, 2, 238, 6, 3, 255, 6, 4, 255, 6, 5, 170, 6, 6, 255, 6, 9, 221, 7, 7, 238, 7, 8, 255, 7, 9, 153], "secondary": false }, { "width": 9, "bonus": 140, "chr": "9", "pixels": [1, 3, 238, 1, 4, 255, 1, 5, 238, 2, 2, 238, 2, 6, 238, 2, 10, 255, 3, 1, 255, 3, 7, 238, 3, 10, 255, 4, 1, 255, 4, 7, 255, 4, 10, 238, 5, 1, 204, 5, 2, 153, 5, 7, 204, 5, 9, 204, 5, 10, 153, 6, 2, 238, 6, 3, 187, 6, 6, 238, 6, 7, 187, 6, 8, 221, 6, 9, 204, 7, 3, 153, 7, 4, 221, 7, 5, 255, 7, 6, 255, 7, 7, 221], "secondary": false }, { "width": 3, "bonus": 10, "chr": ":", "pixels": [1, 3, 255, 1, 9, 255], "secondary": true }, { "width": 4, "bonus": 15, "chr": ";", "pixels": [2, 3, 255, 2, 9, 255, 2, 10, 204], "secondary": true }, { "width": 8, "bonus": 60, "chr": "<", "pixels": [1, 5, 187, 1, 6, 238, 2, 5, 255, 2, 6, 204, 3, 4, 170, 3, 7, 204, 4, 4, 255, 4, 7, 238, 5, 4, 170, 5, 8, 187, 6, 3, 187, 6, 8, 204], "secondary": false }, { "width": 9, "bonus": 70, "chr": "=", "pixels": [1, 6, 221, 1, 8, 221, 2, 6, 255, 2, 8, 255, 3, 6, 255, 3, 8, 255, 4, 6, 255, 4, 8, 255, 5, 6, 255, 5, 8, 255, 6, 6, 255, 6, 8, 255, 7, 6, 255, 7, 8, 255], "secondary": false }, { "width": 8, "bonus": 75, "chr": ">", "pixels": [1, 3, 153, 2, 3, 153, 2, 4, 170, 2, 8, 255, 3, 4, 255, 3, 7, 187, 3, 8, 170, 4, 4, 170, 4, 5, 153, 4, 7, 255, 5, 5, 255, 5, 6, 187, 5, 7, 153, 6, 5, 170, 6, 6, 255], "secondary": false }, { "width": 6, "bonus": 55, "chr": "?", "pixels": [1, 1, 204, 2, 1, 255, 2, 6, 187, 2, 7, 255, 2, 10, 255, 3, 1, 238, 3, 5, 238, 3, 6, 153, 4, 2, 238, 4, 3, 255, 4, 4, 255], "secondary": false }, { "width": 10, "bonus": 165, "chr": "@", "pixels": [1, 5, 153, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 187, 2, 4, 204, 2, 5, 187, 2, 9, 170, 2, 10, 255, 3, 4, 204, 3, 11, 255, 4, 3, 238, 4, 6, 238, 4, 7, 255, 4, 8, 238, 4, 12, 187, 5, 3, 255, 5, 5, 204, 5, 9, 221, 5, 12, 255, 6, 3, 255, 6, 5, 255, 6, 9, 255, 7, 3, 221, 7, 5, 255, 7, 9, 255, 8, 4, 221, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 9, 9, 255], "secondary": false }, { "width": 10, "bonus": 140, "chr": "A", "pixels": [1, 9, 153, 1, 10, 238, 2, 7, 221, 2, 8, 255, 2, 9, 204, 3, 4, 204, 3, 5, 255, 3, 6, 204, 3, 7, 255, 4, 1, 187, 4, 2, 255, 4, 3, 204, 4, 7, 255, 5, 1, 238, 5, 2, 255, 5, 3, 187, 5, 7, 255, 6, 3, 153, 6, 4, 238, 6, 5, 255, 6, 6, 187, 6, 7, 255, 7, 6, 153, 7, 7, 255, 7, 8, 255, 7, 9, 170, 8, 9, 187, 8, 10, 255], "secondary": false }, { "width": 9, "bonus": 160, "chr": "B", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 6, 255, 2, 10, 255, 3, 1, 255, 3, 6, 255, 3, 10, 255, 4, 1, 255, 4, 6, 255, 4, 10, 255, 5, 1, 221, 5, 2, 153, 5, 5, 170, 5, 6, 255, 5, 9, 153, 5, 10, 204, 6, 2, 238, 6, 3, 255, 6, 4, 255, 6, 5, 204, 6, 7, 238, 6, 8, 255, 6, 9, 238], "secondary": false }, { "width": 10, "bonus": 105, "chr": "C", "pixels": [1, 3, 153, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 238, 2, 2, 204, 2, 3, 204, 2, 8, 204, 2, 9, 204, 3, 2, 187, 3, 9, 204, 4, 1, 221, 4, 10, 221, 5, 1, 255, 5, 10, 255, 6, 1, 238, 6, 10, 238, 7, 1, 187, 7, 10, 187, 8, 2, 221, 8, 9, 255], "secondary": false }, { "width": 10, "bonus": 160, "chr": "D", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 10, 255, 3, 1, 255, 3, 10, 255, 4, 1, 255, 4, 10, 255, 5, 1, 238, 5, 10, 238, 6, 1, 153, 6, 2, 204, 6, 9, 204, 6, 10, 153, 7, 2, 221, 7, 3, 204, 7, 8, 204, 7, 9, 221, 8, 3, 170, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 170], "secondary": false }, { "width": 8, "bonus": 105, "chr": "E", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 6, 255, 2, 10, 255, 3, 1, 255, 3, 6, 255, 3, 10, 255, 4, 1, 255, 4, 6, 255, 4, 10, 255, 5, 1, 255, 5, 10, 255], "secondary": false }, { "width": 7, "bonus": 85, "chr": "F", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 6, 255, 3, 1, 255, 3, 6, 255, 4, 1, 255, 4, 6, 255, 5, 1, 255], "secondary": false }, { "width": 10, "bonus": 145, "chr": "G", "pixels": [1, 3, 153, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 153, 2, 2, 204, 2, 3, 187, 2, 8, 204, 2, 9, 221, 3, 1, 153, 3, 2, 187, 3, 9, 187, 3, 10, 170, 4, 1, 255, 4, 10, 255, 5, 1, 255, 5, 10, 255, 6, 1, 238, 6, 6, 170, 6, 10, 204, 7, 2, 204, 7, 6, 255, 7, 9, 238, 8, 6, 255, 8, 7, 255, 8, 8, 255, 8, 9, 255, 8, 10, 255], "secondary": false }, { "width": 9, "bonus": 125, "chr": "H", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 6, 255, 3, 6, 255, 4, 6, 255, 5, 6, 255, 6, 6, 255, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255], "secondary": false }, { "width": 5, "bonus": 70, "chr": "I", "pixels": [1, 1, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 10, 255], "secondary": false }, { "width": 8, "bonus": 100, "chr": "J", "pixels": [1, 8, 255, 1, 9, 187, 2, 9, 187, 2, 10, 187, 3, 1, 221, 3, 10, 255, 4, 1, 255, 4, 10, 255, 5, 1, 255, 5, 9, 187, 5, 10, 187, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 187], "secondary": false }, { "width": 9, "bonus": 120, "chr": "K", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 6, 255, 3, 6, 255, 4, 4, 187, 4, 5, 255, 4, 6, 170, 4, 7, 255, 5, 2, 187, 5, 3, 255, 5, 8, 221, 5, 9, 204, 6, 1, 255, 6, 2, 153, 6, 9, 153, 6, 10, 255], "secondary": false }, { "width": 8, "bonus": 75, "chr": "L", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 10, 255, 3, 10, 255, 4, 10, 255, 5, 10, 255, 6, 10, 170], "secondary": false }, { "width": 11, "bonus": 180, "chr": "M", "pixels": [1, 3, 170, 1, 4, 170, 1, 5, 204, 1, 6, 221, 1, 7, 238, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 2, 255, 2, 3, 255, 2, 4, 170, 3, 3, 204, 3, 4, 255, 3, 5, 170, 4, 5, 153, 4, 6, 255, 4, 7, 221, 5, 7, 221, 5, 8, 255, 6, 5, 187, 6, 6, 255, 6, 7, 187, 7, 3, 221, 7, 4, 238, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 187, 8, 5, 153, 9, 5, 170, 9, 6, 187, 9, 7, 204, 9, 8, 221, 9, 9, 238, 9, 10, 255], "secondary": false }, { "width": 10, "bonus": 145, "chr": "N", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 2, 238, 2, 3, 221, 3, 3, 170, 3, 4, 255, 4, 5, 221, 4, 6, 204, 5, 7, 255, 6, 8, 204, 6, 9, 221, 7, 1, 255, 7, 2, 255, 7, 3, 255, 7, 4, 255, 7, 5, 255, 7, 6, 255, 7, 7, 255, 7, 8, 255, 7, 9, 255, 7, 10, 255], "secondary": false }, { "width": 11, "bonus": 130, "chr": "O", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 238, 2, 2, 204, 2, 3, 204, 2, 8, 204, 2, 9, 204, 3, 2, 187, 3, 9, 187, 4, 1, 221, 4, 10, 221, 5, 1, 255, 5, 10, 255, 6, 1, 221, 6, 10, 221, 7, 2, 204, 7, 9, 221, 8, 2, 187, 8, 3, 221, 8, 8, 221, 8, 9, 170, 9, 4, 221, 9, 5, 255, 9, 6, 255, 9, 7, 204], "secondary": false }, { "width": 9, "bonus": 125, "chr": "P", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 7, 255, 3, 1, 255, 3, 7, 255, 4, 1, 255, 4, 7, 255, 5, 1, 187, 5, 2, 187, 5, 6, 187, 5, 7, 187, 6, 2, 187, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 187], "secondary": false }, { "width": 11, "bonus": 140, "chr": "Q", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 238, 2, 2, 204, 2, 3, 204, 2, 8, 204, 2, 9, 204, 3, 2, 187, 3, 9, 187, 4, 1, 238, 4, 10, 238, 5, 1, 255, 5, 10, 255, 6, 1, 221, 6, 10, 221, 7, 2, 204, 7, 8, 238, 7, 9, 221, 8, 2, 187, 8, 3, 221, 8, 8, 238, 8, 9, 255, 9, 4, 221, 9, 5, 255, 9, 6, 255, 9, 7, 204, 9, 10, 187], "secondary": false }, { "width": 9, "bonus": 140, "chr": "R", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 1, 255, 2, 6, 255, 3, 1, 255, 3, 6, 255, 4, 1, 255, 4, 6, 255, 5, 1, 204, 5, 2, 153, 5, 5, 153, 5, 6, 221, 5, 7, 238, 5, 8, 238, 6, 2, 221, 6, 3, 255, 6, 4, 255, 6, 5, 221, 6, 9, 238, 6, 10, 221], "secondary": false }, { "width": 7, "bonus": 95, "chr": "S", "pixels": [1, 2, 221, 1, 3, 255, 1, 4, 255, 1, 9, 238, 2, 1, 204, 2, 2, 153, 2, 5, 255, 2, 10, 238, 3, 1, 255, 3, 5, 187, 3, 6, 153, 3, 10, 255, 4, 1, 238, 4, 6, 255, 4, 10, 221, 5, 2, 170, 5, 7, 255, 5, 8, 255, 5, 9, 238], "secondary": false }, { "width": 10, "bonus": 80, "chr": "T", "pixels": [1, 1, 255, 2, 1, 255, 3, 1, 255, 4, 1, 255, 4, 2, 255, 4, 3, 255, 4, 4, 255, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 1, 255, 6, 1, 255, 7, 1, 255], "secondary": false }, { "width": 10, "bonus": 110, "chr": "U", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 238, 2, 9, 238, 3, 10, 204, 4, 10, 255, 5, 10, 255, 6, 10, 204, 7, 9, 238, 8, 1, 255, 8, 2, 255, 8, 3, 255, 8, 4, 255, 8, 5, 255, 8, 6, 255, 8, 7, 255, 8, 8, 221], "secondary": false }, { "width": 10, "bonus": 110, "chr": "V", "pixels": [1, 1, 238, 1, 2, 153, 2, 2, 187, 2, 3, 255, 2, 4, 221, 3, 5, 187, 3, 6, 255, 3, 7, 204, 4, 8, 204, 4, 9, 255, 4, 10, 204, 5, 8, 204, 5, 9, 255, 5, 10, 204, 6, 5, 187, 6, 6, 255, 6, 7, 204, 7, 2, 187, 7, 3, 255, 7, 4, 221, 8, 1, 238, 8, 2, 153], "secondary": false }, { "width": 13, "bonus": 195, "chr": "W", "pixels": [1, 1, 255, 1, 2, 187, 2, 3, 187, 2, 4, 255, 2, 5, 255, 2, 6, 204, 3, 7, 170, 3, 8, 221, 3, 9, 255, 3, 10, 221, 4, 7, 170, 4, 8, 238, 4, 9, 255, 4, 10, 187, 5, 3, 187, 5, 4, 255, 5, 5, 255, 5, 6, 187, 6, 1, 255, 6, 2, 255, 6, 3, 255, 7, 3, 170, 7, 4, 238, 7, 5, 255, 7, 6, 204, 8, 7, 153, 8, 8, 221, 8, 9, 255, 8, 10, 204, 9, 7, 187, 9, 8, 255, 9, 9, 255, 9, 10, 204, 10, 3, 204, 10, 4, 255, 10, 5, 255, 10, 6, 187, 11, 1, 255, 11, 2, 187], "secondary": false }, { "width": 9, "bonus": 125, "chr": "X", "pixels": [1, 1, 221, 1, 10, 255, 2, 1, 153, 2, 2, 255, 2, 3, 187, 2, 8, 238, 2, 9, 221, 3, 3, 170, 3, 4, 255, 3, 5, 153, 3, 6, 204, 3, 7, 238, 4, 4, 187, 4, 5, 255, 4, 6, 255, 5, 3, 238, 5, 4, 221, 5, 7, 255, 5, 8, 170, 6, 1, 221, 6, 2, 238, 6, 8, 187, 6, 9, 255, 7, 1, 153, 7, 10, 221], "secondary": false }, { "width": 9, "bonus": 80, "chr": "Y", "pixels": [1, 1, 238, 2, 2, 238, 2, 3, 204, 3, 4, 255, 3, 5, 187, 4, 5, 255, 4, 6, 255, 4, 7, 255, 4, 8, 255, 4, 9, 255, 4, 10, 255, 5, 4, 238, 5, 5, 204, 6, 2, 221, 6, 3, 238, 7, 1, 255], "secondary": false }, { "width": 9, "bonus": 115, "chr": "Z", "pixels": [1, 10, 170, 2, 1, 255, 2, 8, 153, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 7, 238, 3, 8, 221, 3, 10, 255, 4, 1, 255, 4, 5, 187, 4, 6, 255, 4, 10, 255, 5, 1, 255, 5, 4, 255, 5, 5, 187, 5, 10, 255, 6, 1, 255, 6, 2, 204, 6, 3, 221, 6, 10, 255, 7, 1, 255, 7, 10, 255], "secondary": false }, { "width": 4, "bonus": 65, "chr": "[", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 2, 1, 255, 2, 11, 255], "secondary": false }, { "width": 6, "bonus": 50, "chr": "\\", "pixels": [1, 1, 238, 1, 2, 255, 1, 3, 170, 2, 4, 221, 2, 5, 255, 2, 6, 187, 3, 7, 204, 3, 8, 255, 3, 9, 187, 4, 10, 204], "secondary": false }, { "width": 3, "bonus": 65, "chr": "]", "pixels": [0, 1, 255, 0, 11, 255, 1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255], "secondary": false }, { "width": 8, "bonus": 55, "chr": "^", "pixels": [1, 6, 170, 2, 4, 221, 2, 5, 238, 3, 2, 255, 3, 3, 187, 4, 1, 187, 4, 2, 255, 4, 3, 153, 5, 4, 255, 5, 5, 204, 6, 6, 204], "secondary": false }, { "width": 9, "bonus": 35, "chr": "_", "pixels": [1, 11, 255, 2, 11, 255, 3, 11, 255, 4, 11, 255, 5, 11, 255, 6, 11, 255, 7, 11, 255], "secondary": false }, { "width": 8, "bonus": 110, "chr": "a", "pixels": [1, 8, 221, 1, 9, 255, 2, 4, 187, 2, 7, 170, 2, 8, 153, 2, 10, 221, 3, 4, 255, 3, 7, 221, 3, 10, 255, 4, 4, 255, 4, 7, 255, 4, 10, 238, 5, 4, 204, 5, 5, 170, 5, 7, 255, 5, 9, 204, 6, 5, 204, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 8, "bonus": 135, "chr": "b", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 4, 153, 2, 5, 221, 2, 9, 221, 2, 10, 153, 3, 4, 238, 3, 10, 238, 4, 4, 255, 4, 10, 255, 5, 4, 187, 5, 5, 187, 5, 9, 187, 5, 10, 170, 6, 5, 187, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 170], "secondary": false }, { "width": 8, "bonus": 60, "chr": "c", "pixels": [1, 6, 255, 1, 7, 255, 1, 8, 255, 2, 5, 221, 2, 9, 221, 3, 4, 238, 3, 10, 238, 4, 4, 255, 4, 10, 255, 5, 4, 221, 5, 10, 221, 6, 9, 204], "secondary": false }, { "width": 8, "bonus": 135, "chr": "d", "pixels": [1, 5, 170, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 187, 2, 4, 170, 2, 5, 187, 2, 9, 187, 2, 10, 170, 3, 4, 255, 3, 10, 255, 4, 4, 238, 4, 10, 238, 5, 4, 153, 5, 5, 221, 5, 9, 221, 5, 10, 153, 6, 1, 255, 6, 2, 255, 6, 3, 255, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 8, "bonus": 100, "chr": "e", "pixels": [1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 153, 2, 5, 204, 2, 7, 255, 2, 9, 204, 3, 4, 255, 3, 7, 255, 3, 10, 238, 4, 4, 255, 4, 7, 255, 4, 10, 255, 5, 4, 170, 5, 5, 187, 5, 7, 255, 5, 10, 221, 6, 5, 153, 6, 6, 238, 6, 7, 255], "secondary": false }, { "width": 6, "bonus": 70, "chr": "f", "pixels": [1, 4, 221, 2, 2, 221, 2, 3, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 221, 3, 4, 255, 4, 1, 255, 4, 4, 221], "secondary": false }, { "width": 8, "bonus": 135, "chr": "g", "pixels": [1, 5, 187, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 187, 2, 4, 204, 2, 5, 170, 2, 9, 170, 2, 10, 221, 2, 13, 238, 3, 4, 255, 3, 10, 255, 3, 13, 255, 4, 4, 187, 4, 5, 153, 4, 10, 204, 4, 12, 170, 4, 13, 187, 5, 4, 255, 5, 5, 255, 5, 6, 255, 5, 7, 255, 5, 8, 255, 5, 9, 255, 5, 10, 255, 5, 11, 255, 5, 12, 204], "secondary": false }, { "width": 9, "bonus": 100, "chr": "h", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 5, 238, 3, 4, 204, 4, 4, 255, 5, 4, 238, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 4, "bonus": 40, "chr": "i", "pixels": [1, 1, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255], "secondary": false }, { "width": 5, "bonus": 60, "chr": "j", "pixels": [0, 13, 221, 1, 13, 238, 2, 1, 255, 2, 4, 255, 2, 5, 255, 2, 6, 255, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 255, 2, 11, 255, 2, 12, 255], "secondary": false }, { "width": 7, "bonus": 100, "chr": "k", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 7, 255, 3, 6, 187, 3, 7, 255, 3, 8, 170, 4, 5, 255, 4, 6, 170, 4, 8, 187, 4, 9, 221, 5, 4, 255, 5, 10, 255], "secondary": false }, { "width": 5, "bonus": 50, "chr": "l", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 2, 10, 255], "secondary": false }, { "width": 12, "bonus": 130, "chr": "m", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 5, 238, 3, 4, 204, 4, 4, 255, 5, 4, 221, 6, 5, 238, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 7, 5, 204, 8, 4, 255, 9, 4, 255, 10, 5, 255, 10, 6, 255, 10, 7, 255, 10, 8, 255, 10, 9, 255, 10, 10, 255], "secondary": false }, { "width": 8, "bonus": 85, "chr": "n", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 5, 238, 3, 4, 204, 4, 4, 255, 5, 4, 238, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 9, "bonus": 80, "chr": "o", "pixels": [1, 6, 255, 1, 7, 255, 1, 8, 255, 2, 5, 221, 2, 9, 221, 3, 4, 221, 3, 10, 221, 4, 4, 255, 4, 10, 255, 5, 4, 221, 5, 10, 221, 6, 5, 238, 6, 9, 238, 7, 6, 221, 7, 7, 255, 7, 8, 221], "secondary": false }, { "width": 8, "bonus": 130, "chr": "p", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255, 2, 4, 153, 2, 5, 204, 2, 9, 221, 2, 10, 153, 3, 4, 238, 3, 10, 238, 4, 4, 255, 4, 10, 255, 5, 4, 187, 5, 5, 187, 5, 9, 187, 5, 10, 170, 6, 5, 187, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 170], "secondary": false }, { "width": 8, "bonus": 130, "chr": "q", "pixels": [1, 5, 170, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 187, 2, 4, 170, 2, 5, 187, 2, 9, 187, 2, 10, 187, 3, 4, 255, 3, 10, 255, 4, 4, 238, 4, 10, 238, 5, 4, 153, 5, 5, 204, 5, 9, 221, 5, 10, 153, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255, 6, 11, 255, 6, 12, 255], "secondary": false }, { "width": 6, "bonus": 45, "chr": "r", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 2, 5, 238, 3, 4, 238], "secondary": false }, { "width": 6, "bonus": 65, "chr": "s", "pixels": [1, 5, 255, 1, 6, 255, 1, 9, 153, 1, 10, 170, 2, 4, 255, 2, 7, 221, 2, 10, 255, 3, 4, 255, 3, 7, 238, 3, 10, 255, 4, 4, 153, 4, 8, 255, 4, 9, 255], "secondary": false }, { "width": 5, "bonus": 65, "chr": "t", "pixels": [0, 4, 255, 1, 2, 238, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 221, 2, 4, 255, 2, 10, 221, 3, 4, 221, 3, 10, 255], "secondary": false }, { "width": 9, "bonus": 85, "chr": "u", "pixels": [1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 238, 2, 10, 221, 3, 10, 255, 4, 10, 221, 5, 9, 221, 6, 4, 255, 6, 5, 255, 6, 6, 255, 6, 7, 255, 6, 8, 255, 6, 9, 255, 6, 10, 255], "secondary": false }, { "width": 8, "bonus": 75, "chr": "v", "pixels": [1, 4, 238, 2, 5, 187, 2, 6, 255, 2, 7, 204, 3, 8, 221, 3, 9, 255, 3, 10, 170, 4, 8, 153, 4, 9, 255, 4, 10, 238, 5, 6, 221, 5, 7, 255, 5, 8, 170, 6, 4, 255, 6, 5, 204], "secondary": false }, { "width": 12, "bonus": 135, "chr": "w", "pixels": [1, 4, 238, 1, 5, 153, 2, 5, 170, 2, 6, 255, 2, 7, 238, 2, 8, 153, 3, 8, 153, 3, 9, 255, 3, 10, 255, 4, 8, 204, 4, 9, 255, 4, 10, 170, 5, 5, 187, 5, 6, 255, 5, 7, 187, 6, 5, 255, 6, 6, 221, 7, 7, 187, 7, 8, 255, 7, 9, 187, 8, 9, 255, 8, 10, 255, 9, 6, 187, 9, 7, 255, 9, 8, 221, 10, 4, 255, 10, 5, 204], "secondary": false }, { "width": 8, "bonus": 90, "chr": "x", "pixels": [1, 4, 153, 1, 10, 221, 2, 4, 204, 2, 5, 238, 2, 9, 255, 2, 10, 153, 3, 6, 238, 3, 7, 238, 3, 8, 221, 4, 6, 238, 4, 7, 238, 4, 8, 221, 5, 4, 204, 5, 5, 238, 5, 9, 255, 5, 10, 153, 6, 4, 153, 6, 10, 221], "secondary": false }, { "width": 9, "bonus": 100, "chr": "y", "pixels": [1, 4, 238, 1, 13, 204, 2, 5, 221, 2, 6, 255, 2, 7, 170, 2, 13, 255, 3, 7, 153, 3, 8, 238, 3, 9, 238, 3, 12, 238, 3, 13, 153, 4, 9, 255, 4, 10, 255, 4, 11, 187, 5, 6, 170, 5, 7, 255, 5, 8, 221, 6, 4, 238, 6, 5, 255, 6, 6, 170], "secondary": false }, { "width": 8, "bonus": 95, "chr": "z", "pixels": [1, 4, 255, 1, 10, 255, 2, 4, 255, 2, 8, 187, 2, 9, 255, 2, 10, 255, 3, 4, 255, 3, 7, 221, 3, 8, 187, 3, 10, 255, 4, 4, 255, 4, 6, 238, 4, 7, 153, 4, 10, 255, 5, 4, 255, 5, 5, 255, 5, 10, 255, 6, 4, 238, 6, 10, 255], "secondary": false }, { "width": 6, "bonus": 55, "chr": "{", "pixels": [1, 6, 255, 2, 2, 255, 2, 3, 255, 2, 4, 255, 2, 5, 221, 2, 7, 238, 2, 8, 255, 2, 9, 255, 2, 10, 255, 3, 1, 255, 3, 11, 255], "secondary": false }, { "width": 4, "bonus": 60, "chr": "|", "pixels": [1, 1, 255, 1, 2, 255, 1, 3, 255, 1, 4, 255, 1, 5, 255, 1, 6, 255, 1, 7, 255, 1, 8, 255, 1, 9, 255, 1, 10, 255, 1, 11, 255, 1, 12, 255], "secondary": false }, { "width": 5, "bonus": 55, "chr": "}", "pixels": [1, 1, 255, 1, 11, 255, 2, 2, 221, 2, 3, 255, 2, 4, 255, 2, 5, 238, 2, 7, 255, 2, 8, 255, 2, 9, 255, 2, 10, 221, 3, 6, 255], "secondary": false }, { "width": 8, "bonus": 30, "chr": "~", "pixels": [1, 6, 238, 2, 5, 255, 3, 5, 238, 4, 6, 238, 5, 6, 255, 6, 5, 238], "secondary": false }], "width": 13, "spacewidth": 3, "shadow": false, "height": 14, "basey": 10 };
              })
            ),
            /***/
            0: (
              /***/
              (function(module2, exports2, __webpack_require__) {
                module2.exports = __webpack_require__("./fonts/aa_10px_mono.fontmeta.json");
              })
            )
            /******/
          })
        );
      });
    }
  });

  // node_modules/@alt1/ocr/dist/fonts/aa_8px_mono.js
  var require_aa_8px_mono = __commonJS({
    "node_modules/@alt1/ocr/dist/fonts/aa_8px_mono.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["aa_8px_mono"] = factory();
        else
          root["OCR_aa_8px_mono"] = factory();
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
            "./fonts/aa_8px_mono.fontmeta.json": (
              /***/
              (function(module2, exports2) {
                module2.exports = { "chars": [{ "width": 2, "bonus": 35, "chr": "!", "pixels": [0, 1, 208, 0, 2, 220, 0, 3, 220, 0, 4, 220, 0, 5, 220, 0, 6, 208, 0, 8, 255], "secondary": false }, { "width": 3, "bonus": 20, "chr": '"', "pixels": [0, 1, 255, 0, 2, 255, 2, 1, 255, 2, 2, 255], "secondary": true }, { "width": 8, "bonus": 130, "chr": "#", "pixels": [0, 3, 178, 0, 6, 255, 1, 3, 255, 1, 6, 255, 1, 7, 208, 1, 8, 249, 2, 1, 208, 2, 2, 249, 2, 3, 255, 2, 4, 241, 2, 5, 208, 2, 6, 255, 3, 3, 255, 3, 6, 255, 4, 3, 255, 4, 4, 194, 4, 5, 231, 4, 6, 255, 4, 7, 249, 4, 8, 220, 5, 1, 255, 5, 2, 220, 5, 3, 255, 5, 6, 255, 6, 3, 255, 6, 6, 178], "secondary": false }, { "width": 6, "bonus": 80, "chr": "$", "pixels": [0, 3, 194, 0, 4, 208, 1, 2, 231, 1, 5, 241, 1, 9, 249, 2, 1, 231, 2, 2, 249, 2, 5, 178, 2, 6, 162, 2, 9, 249, 2, 10, 231, 3, 2, 249, 3, 6, 249, 3, 9, 255, 4, 7, 208, 4, 8, 208], "secondary": false }, { "width": 8, "bonus": 75, "chr": "%", "pixels": [0, 3, 255, 0, 8, 255, 1, 2, 255, 1, 4, 255, 1, 7, 255, 2, 3, 255, 2, 6, 255, 3, 5, 255, 4, 4, 255, 4, 7, 255, 5, 3, 255, 5, 6, 255, 5, 8, 255, 6, 2, 255, 6, 7, 255], "secondary": false }, { "width": 7, "bonus": 120, "chr": "&", "pixels": [0, 6, 220, 0, 7, 178, 1, 1, 162, 1, 2, 249, 1, 3, 255, 1, 4, 220, 1, 5, 220, 1, 7, 178, 1, 8, 220, 2, 1, 255, 2, 4, 255, 2, 8, 255, 3, 1, 255, 3, 4, 255, 3, 8, 255, 4, 4, 255, 4, 7, 178, 4, 8, 220, 5, 3, 231, 5, 4, 255, 5, 5, 241, 5, 6, 220, 5, 7, 162, 6, 4, 194], "secondary": false }, { "width": 2, "bonus": 10, "chr": "'", "pixels": [0, 1, 255, 0, 2, 213], "secondary": true }, { "width": 4, "bonus": 50, "chr": "(", "pixels": [0, 2, 210, 0, 3, 249, 0, 4, 254, 0, 5, 245, 0, 6, 209, 1, 0, 225, 1, 1, 231, 1, 7, 231, 1, 8, 223, 2, 9, 238], "secondary": false }, { "width": 4, "bonus": 50, "chr": ")", "pixels": [1, 9, 238, 2, 0, 225, 2, 1, 231, 2, 7, 231, 2, 8, 223, 3, 2, 211, 3, 3, 249, 3, 4, 254, 3, 5, 245, 3, 6, 209], "secondary": false }, { "width": 6, "bonus": 50, "chr": "*", "pixels": [0, 2, 208, 1, 2, 208, 1, 3, 231, 1, 4, 255, 2, 1, 231, 2, 2, 249, 2, 3, 255, 2, 4, 162, 3, 2, 208, 3, 4, 194], "secondary": false }, { "width": 7, "bonus": 60, "chr": "+", "pixels": [0, 5, 241, 1, 5, 255, 2, 5, 255, 3, 2, 194, 3, 3, 241, 3, 4, 241, 3, 5, 255, 3, 6, 241, 3, 7, 241, 3, 8, 231, 4, 5, 255, 5, 5, 255], "secondary": false }, { "width": 3, "bonus": 15, "chr": ",", "pixels": [0, 9, 232, 1, 7, 232, 1, 8, 255], "secondary": true }, { "width": 4, "bonus": 15, "chr": "-", "pixels": [0, 5, 255, 1, 5, 255, 2, 5, 255], "secondary": true }, { "width": 2, "bonus": 5, "chr": ".", "pixels": [0, 8, 255], "secondary": true }, { "width": 4, "bonus": 45, "chr": "/", "pixels": [0, 8, 194, 0, 9, 249, 0, 10, 241, 1, 5, 220, 1, 6, 249, 1, 7, 208, 2, 2, 241, 2, 3, 241, 2, 4, 178], "secondary": false }, { "width": 7, "bonus": 95, "chr": "0", "pixels": [0, 2, 194, 0, 3, 241, 0, 4, 255, 0, 5, 255, 0, 6, 249, 0, 7, 208, 1, 1, 220, 1, 2, 162, 1, 8, 231, 2, 1, 220, 2, 8, 220, 3, 1, 241, 3, 8, 231, 4, 2, 208, 4, 3, 255, 4, 4, 220, 4, 5, 220, 4, 6, 249, 4, 7, 208], "secondary": false }, { "width": 7, "bonus": 60, "chr": "1", "pixels": [1, 2, 162, 1, 8, 220, 2, 1, 231, 2, 2, 231, 2, 3, 220, 2, 4, 220, 2, 5, 220, 2, 6, 220, 2, 7, 220, 2, 8, 249, 3, 8, 231, 4, 8, 178], "secondary": false }, { "width": 7, "bonus": 75, "chr": "2", "pixels": [1, 7, 178, 1, 8, 255, 2, 1, 220, 2, 6, 194, 2, 7, 162, 2, 8, 220, 3, 1, 231, 3, 5, 194, 3, 8, 220, 4, 1, 220, 4, 2, 194, 4, 3, 162, 4, 4, 231, 4, 8, 220, 5, 3, 162], "secondary": false }, { "width": 7, "bonus": 75, "chr": "3", "pixels": [0, 8, 231, 1, 1, 220, 1, 4, 162, 1, 8, 220, 2, 1, 220, 2, 4, 220, 2, 8, 231, 3, 2, 241, 3, 3, 231, 3, 4, 162, 3, 5, 231, 3, 6, 162, 3, 7, 208, 3, 8, 162, 4, 6, 162], "secondary": false }, { "width": 7, "bonus": 100, "chr": "4", "pixels": [0, 5, 162, 0, 6, 249, 1, 4, 220, 1, 5, 162, 1, 6, 220, 2, 2, 162, 2, 3, 208, 2, 6, 220, 3, 1, 220, 3, 2, 194, 3, 6, 231, 4, 1, 220, 4, 2, 220, 4, 3, 220, 4, 4, 220, 4, 5, 220, 4, 6, 249, 4, 7, 220, 4, 8, 220, 5, 6, 178], "secondary": false }, { "width": 7, "bonus": 75, "chr": "5", "pixels": [1, 1, 249, 1, 2, 220, 1, 3, 220, 1, 4, 220, 1, 8, 231, 2, 1, 220, 2, 4, 220, 2, 8, 220, 3, 1, 220, 3, 4, 231, 3, 8, 231, 4, 1, 178, 4, 5, 249, 4, 6, 220, 4, 7, 241], "secondary": false }, { "width": 7, "bonus": 90, "chr": "6", "pixels": [0, 3, 208, 0, 4, 255, 0, 5, 255, 0, 6, 249, 0, 7, 194, 1, 2, 220, 1, 4, 162, 1, 7, 162, 1, 8, 220, 2, 1, 231, 2, 4, 220, 2, 8, 220, 3, 1, 220, 3, 4, 231, 3, 8, 220, 4, 5, 241, 4, 6, 255, 4, 7, 220], "secondary": false }, { "width": 7, "bonus": 65, "chr": "7", "pixels": [0, 1, 220, 1, 1, 220, 1, 8, 231, 2, 1, 220, 2, 5, 162, 2, 6, 249, 2, 7, 194, 3, 1, 220, 3, 3, 194, 3, 4, 241, 3, 5, 162, 4, 1, 255, 4, 2, 220], "secondary": false }, { "width": 7, "bonus": 110, "chr": "8", "pixels": [1, 2, 249, 1, 3, 241, 1, 5, 178, 1, 6, 231, 1, 7, 241, 1, 8, 162, 2, 1, 231, 2, 4, 231, 2, 5, 208, 2, 8, 241, 3, 1, 220, 3, 4, 208, 3, 8, 220, 4, 1, 241, 4, 3, 162, 4, 4, 208, 4, 5, 231, 4, 8, 220, 5, 2, 208, 5, 3, 194, 5, 6, 249, 5, 7, 249], "secondary": false }, { "width": 7, "bonus": 100, "chr": "9", "pixels": [1, 2, 241, 1, 3, 220, 1, 4, 249, 1, 8, 194, 2, 1, 231, 2, 5, 241, 2, 8, 220, 3, 1, 220, 3, 5, 220, 3, 8, 231, 4, 1, 220, 4, 2, 162, 4, 5, 178, 4, 7, 208, 4, 8, 162, 5, 2, 194, 5, 3, 249, 5, 4, 255, 5, 5, 255, 5, 6, 220], "secondary": false }, { "width": 3, "bonus": 10, "chr": ":", "pixels": [1, 3, 255, 1, 7, 255], "secondary": true }, { "width": 3, "bonus": 25, "chr": ";", "pixels": [0, 9, 230, 1, 3, 255, 1, 4, 171, 1, 7, 250, 1, 8, 255], "secondary": true }, { "width": 7, "bonus": 50, "chr": "<", "pixels": [0, 5, 231, 1, 4, 162, 1, 5, 255, 1, 6, 162, 2, 4, 249, 2, 6, 249, 3, 4, 208, 3, 6, 208, 4, 3, 241, 4, 7, 241], "secondary": false }, { "width": 8, "bonus": 60, "chr": "=", "pixels": [0, 4, 255, 0, 6, 255, 1, 4, 255, 1, 6, 255, 2, 4, 255, 2, 6, 255, 3, 4, 255, 3, 6, 255, 4, 4, 255, 4, 6, 255, 5, 4, 162, 5, 6, 162], "secondary": false }, { "width": 7, "bonus": 55, "chr": ">", "pixels": [0, 3, 231, 0, 7, 231, 1, 3, 178, 1, 4, 162, 1, 7, 220, 2, 4, 249, 2, 6, 255, 3, 4, 208, 3, 5, 194, 3, 6, 231, 4, 5, 255], "secondary": false }, { "width": 5, "bonus": 50, "chr": "?", "pixels": [0, 1, 208, 1, 1, 255, 1, 6, 241, 1, 8, 255, 2, 1, 255, 2, 4, 178, 2, 5, 208, 3, 2, 255, 3, 3, 241, 3, 4, 178], "secondary": false }, { "width": 8, "bonus": 130, "chr": "@", "pixels": [0, 4, 255, 0, 5, 255, 0, 6, 241, 0, 7, 255, 0, 8, 220, 1, 3, 241, 1, 9, 249, 2, 2, 241, 2, 5, 255, 2, 6, 249, 2, 7, 255, 2, 10, 194, 3, 2, 255, 3, 4, 255, 3, 8, 231, 3, 10, 220, 4, 2, 249, 4, 4, 255, 4, 8, 255, 5, 3, 249, 5, 4, 255, 5, 5, 241, 5, 6, 241, 5, 7, 241, 5, 8, 249, 6, 8, 241], "secondary": false }, { "width": 8, "bonus": 100, "chr": "A", "pixels": [0, 8, 194, 1, 5, 162, 1, 6, 241, 1, 7, 249, 2, 3, 208, 2, 4, 255, 2, 5, 220, 2, 6, 255, 3, 1, 255, 3, 2, 255, 3, 6, 255, 4, 2, 255, 4, 3, 249, 4, 4, 178, 4, 6, 255, 5, 4, 178, 5, 5, 255, 5, 6, 255, 6, 7, 220, 6, 8, 255], "secondary": false }, { "width": 7, "bonus": 130, "chr": "B", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 1, 255, 1, 4, 255, 1, 8, 255, 2, 1, 255, 2, 4, 255, 2, 8, 255, 3, 1, 255, 3, 4, 255, 3, 8, 255, 4, 1, 241, 4, 4, 255, 4, 5, 208, 4, 7, 162, 4, 8, 231, 5, 2, 208, 5, 3, 208, 5, 6, 220, 5, 7, 194], "secondary": false }, { "width": 9, "bonus": 85, "chr": "C", "pixels": [0, 3, 162, 0, 4, 220, 0, 5, 220, 1, 2, 241, 1, 3, 194, 1, 6, 194, 1, 7, 231, 2, 1, 208, 2, 8, 208, 3, 1, 255, 3, 8, 255, 4, 1, 255, 4, 8, 255, 5, 1, 255, 5, 8, 255, 6, 1, 208, 6, 8, 208], "secondary": false }, { "width": 8, "bonus": 120, "chr": "D", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 1, 255, 1, 8, 255, 2, 1, 255, 2, 8, 255, 3, 1, 255, 3, 8, 255, 4, 1, 231, 4, 8, 231, 5, 2, 241, 5, 3, 178, 5, 6, 178, 5, 7, 241, 6, 3, 162, 6, 4, 220, 6, 5, 220, 6, 6, 162], "secondary": false }, { "width": 6, "bonus": 95, "chr": "E", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 1, 255, 1, 5, 255, 1, 8, 255, 2, 1, 255, 2, 5, 255, 2, 8, 255, 3, 1, 255, 3, 5, 255, 3, 8, 255, 4, 1, 194, 4, 8, 241], "secondary": false }, { "width": 6, "bonus": 75, "chr": "F", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 1, 255, 1, 5, 255, 2, 1, 255, 2, 5, 255, 3, 1, 255, 3, 5, 255, 4, 1, 162], "secondary": false }, { "width": 9, "bonus": 120, "chr": "G", "pixels": [0, 4, 208, 0, 5, 220, 0, 6, 162, 1, 2, 231, 1, 3, 194, 1, 6, 178, 1, 7, 241, 2, 1, 208, 2, 8, 220, 3, 1, 255, 3, 8, 255, 4, 1, 255, 4, 8, 255, 5, 1, 255, 5, 5, 162, 5, 8, 249, 6, 1, 208, 6, 5, 255, 6, 7, 194, 6, 8, 208, 7, 5, 194, 7, 6, 241, 7, 7, 241, 7, 8, 231], "secondary": false }, { "width": 8, "bonus": 105, "chr": "H", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 5, 255, 2, 5, 255, 3, 5, 255, 4, 5, 255, 5, 5, 255, 6, 1, 231, 6, 2, 241, 6, 3, 241, 6, 4, 241, 6, 5, 241, 6, 6, 241, 6, 7, 241, 6, 8, 231], "secondary": false }, { "width": 3, "bonus": 40, "chr": "I", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231], "secondary": false }, { "width": 6, "bonus": 70, "chr": "J", "pixels": [0, 6, 194, 0, 7, 194, 1, 8, 231, 2, 1, 241, 2, 8, 255, 3, 1, 255, 3, 8, 231, 4, 1, 231, 4, 2, 241, 4, 3, 241, 4, 4, 241, 4, 5, 241, 4, 6, 241, 4, 7, 194], "secondary": false }, { "width": 7, "bonus": 95, "chr": "K", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 4, 255, 2, 4, 255, 3, 2, 162, 3, 3, 241, 3, 5, 208, 3, 6, 231, 4, 1, 231, 4, 2, 194, 4, 7, 249, 4, 8, 194, 5, 8, 178], "secondary": false }, { "width": 6, "bonus": 60, "chr": "L", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 8, 255, 2, 8, 255, 3, 8, 255, 4, 8, 255], "secondary": false }, { "width": 9, "bonus": 150, "chr": "M", "pixels": [0, 7, 162, 0, 8, 194, 1, 1, 255, 1, 2, 255, 1, 3, 241, 1, 4, 220, 1, 5, 194, 1, 6, 178, 1, 7, 162, 2, 2, 178, 2, 3, 255, 2, 4, 178, 3, 4, 162, 3, 5, 241, 3, 6, 220, 4, 6, 249, 4, 7, 220, 5, 4, 241, 5, 5, 220, 6, 1, 162, 6, 2, 255, 6, 3, 220, 7, 1, 208, 7, 2, 241, 7, 3, 241, 7, 4, 255, 7, 5, 255, 7, 6, 249, 7, 7, 255, 7, 8, 231], "secondary": false }, { "width": 8, "bonus": 120, "chr": "N", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 1, 162, 1, 2, 255, 2, 3, 241, 3, 4, 220, 3, 5, 220, 4, 6, 241, 5, 7, 255, 5, 8, 162, 6, 1, 231, 6, 2, 241, 6, 3, 241, 6, 4, 241, 6, 5, 241, 6, 6, 241, 6, 7, 241, 6, 8, 231], "secondary": false }, { "width": 10, "bonus": 120, "chr": "O", "pixels": [0, 4, 220, 0, 5, 208, 1, 2, 231, 1, 3, 194, 1, 6, 208, 1, 7, 231, 2, 1, 194, 2, 7, 162, 2, 8, 194, 3, 1, 255, 3, 8, 255, 4, 1, 255, 4, 8, 255, 5, 1, 255, 5, 8, 255, 6, 1, 194, 6, 7, 162, 6, 8, 194, 7, 2, 231, 7, 3, 194, 7, 6, 208, 7, 7, 231, 8, 4, 220, 8, 5, 208], "secondary": false }, { "width": 7, "bonus": 105, "chr": "P", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 1, 255, 1, 5, 255, 2, 1, 255, 2, 5, 255, 3, 1, 255, 3, 5, 255, 4, 1, 220, 4, 2, 178, 4, 4, 178, 4, 5, 220, 5, 2, 178, 5, 3, 241, 5, 4, 178], "secondary": false }, { "width": 9, "bonus": 120, "chr": "Q", "pixels": [0, 3, 162, 0, 4, 220, 0, 5, 220, 1, 2, 241, 1, 3, 178, 1, 6, 194, 1, 7, 241, 2, 1, 220, 2, 8, 208, 3, 1, 255, 3, 8, 255, 4, 1, 255, 4, 8, 255, 5, 1, 249, 5, 6, 178, 5, 8, 249, 6, 2, 231, 6, 7, 255, 7, 3, 255, 7, 4, 231, 7, 5, 241, 7, 6, 255, 7, 7, 162, 7, 8, 231], "secondary": false }, { "width": 7, "bonus": 100, "chr": "R", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 1, 255, 1, 5, 255, 2, 1, 255, 2, 5, 255, 3, 1, 255, 3, 5, 255, 3, 6, 220, 4, 2, 249, 4, 3, 231, 4, 4, 255, 4, 7, 249, 4, 8, 208], "secondary": false }, { "width": 6, "bonus": 75, "chr": "S", "pixels": [0, 2, 194, 0, 3, 208, 1, 1, 231, 1, 4, 241, 1, 8, 249, 2, 1, 255, 2, 4, 208, 2, 8, 255, 3, 1, 255, 3, 5, 255, 3, 8, 255, 4, 1, 208, 4, 5, 178, 4, 6, 241, 4, 7, 249], "secondary": false }, { "width": 8, "bonus": 70, "chr": "T", "pixels": [0, 1, 255, 1, 1, 255, 2, 1, 255, 3, 1, 255, 3, 2, 241, 3, 3, 241, 3, 4, 241, 3, 5, 241, 3, 6, 241, 3, 7, 241, 3, 8, 231, 4, 1, 255, 5, 1, 255, 6, 1, 162], "secondary": false }, { "width": 8, "bonus": 90, "chr": "U", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 220, 1, 7, 208, 1, 8, 178, 2, 8, 255, 3, 8, 255, 4, 8, 241, 5, 1, 231, 5, 2, 241, 5, 3, 241, 5, 4, 241, 5, 5, 241, 5, 6, 255, 5, 7, 249], "secondary": false }, { "width": 7, "bonus": 85, "chr": "V", "pixels": [0, 1, 255, 0, 2, 220, 1, 3, 194, 1, 4, 255, 1, 5, 194, 2, 6, 220, 2, 7, 249, 2, 8, 162, 3, 6, 162, 3, 7, 255, 3, 8, 231, 4, 4, 231, 4, 5, 249, 4, 6, 178, 5, 1, 208, 5, 2, 255, 5, 3, 194], "secondary": false }, { "width": 10, "bonus": 160, "chr": "W", "pixels": [0, 1, 255, 0, 2, 241, 0, 3, 178, 1, 3, 162, 1, 4, 220, 1, 5, 255, 1, 6, 231, 1, 7, 162, 2, 6, 178, 2, 7, 255, 2, 8, 255, 3, 3, 194, 3, 4, 249, 3, 5, 241, 3, 6, 178, 4, 1, 255, 4, 2, 255, 4, 3, 194, 5, 3, 208, 5, 4, 249, 5, 5, 231, 5, 6, 162, 6, 6, 178, 6, 7, 255, 6, 8, 255, 7, 4, 194, 7, 5, 249, 7, 6, 249, 7, 7, 194, 8, 1, 249, 8, 2, 249, 8, 3, 194], "secondary": false }, { "width": 7, "bonus": 85, "chr": "X", "pixels": [0, 8, 208, 1, 1, 220, 1, 2, 231, 1, 7, 249, 2, 3, 241, 2, 4, 194, 2, 5, 255, 2, 6, 194, 3, 3, 162, 3, 4, 255, 3, 5, 249, 4, 2, 249, 4, 3, 178, 4, 6, 231, 4, 7, 208, 5, 1, 231, 5, 8, 255], "secondary": false }, { "width": 7, "bonus": 65, "chr": "Y", "pixels": [0, 1, 208, 1, 2, 249, 2, 3, 194, 2, 4, 255, 3, 4, 241, 3, 5, 231, 3, 6, 241, 3, 7, 241, 3, 8, 231, 4, 2, 178, 4, 3, 255, 5, 1, 249, 5, 2, 178], "secondary": false }, { "width": 7, "bonus": 95, "chr": "Z", "pixels": [0, 8, 220, 1, 1, 255, 1, 6, 162, 1, 7, 241, 1, 8, 255, 2, 1, 255, 2, 5, 231, 2, 6, 178, 2, 8, 255, 3, 1, 255, 3, 3, 178, 3, 4, 231, 3, 8, 255, 4, 1, 255, 4, 2, 241, 4, 3, 162, 4, 8, 255, 5, 1, 220, 5, 8, 194], "secondary": false }, { "width": 3, "bonus": 55, "chr": "[", "pixels": [0, 0, 231, 0, 1, 241, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 0, 249, 1, 8, 249], "secondary": false }, { "width": 5, "bonus": 50, "chr": "\\", "pixels": [1, 1, 194, 1, 2, 255, 1, 3, 231, 2, 4, 178, 2, 5, 255, 2, 6, 231, 2, 7, 162, 3, 7, 178, 3, 8, 255, 3, 9, 231], "secondary": false }, { "width": 3, "bonus": 55, "chr": "]", "pixels": [0, 0, 249, 0, 8, 249, 1, 0, 231, 1, 1, 241, 1, 2, 241, 1, 3, 241, 1, 4, 241, 1, 5, 241, 1, 6, 241, 1, 7, 241, 1, 8, 231], "secondary": false }, { "width": 6, "bonus": 50, "chr": "^", "pixels": [0, 4, 194, 0, 5, 249, 1, 2, 231, 1, 3, 241, 2, 1, 241, 2, 2, 241, 3, 3, 220, 3, 4, 241, 3, 5, 162, 4, 5, 178], "secondary": false }, { "width": 7, "bonus": 30, "chr": "_", "pixels": [0, 9, 194, 1, 9, 255, 2, 9, 255, 3, 9, 255, 4, 9, 255, 5, 9, 255], "secondary": false }, { "width": 7, "bonus": 85, "chr": "a", "pixels": [0, 6, 162, 0, 7, 220, 1, 3, 241, 1, 6, 208, 1, 8, 255, 2, 3, 255, 2, 5, 220, 2, 8, 255, 3, 3, 255, 3, 5, 255, 3, 8, 241, 4, 3, 178, 4, 4, 249, 4, 5, 255, 4, 6, 231, 4, 7, 255, 4, 8, 249], "secondary": false }, { "width": 7, "bonus": 110, "chr": "b", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 3, 231, 1, 4, 208, 1, 7, 208, 1, 8, 220, 2, 3, 255, 2, 8, 255, 3, 3, 255, 3, 8, 255, 4, 3, 208, 4, 4, 208, 4, 7, 208, 4, 8, 178, 5, 5, 220, 5, 6, 220], "secondary": false }, { "width": 7, "bonus": 55, "chr": "c", "pixels": [0, 5, 208, 0, 6, 220, 1, 4, 220, 1, 7, 220, 1, 8, 162, 2, 3, 255, 2, 8, 255, 3, 3, 255, 3, 8, 255, 4, 3, 241, 4, 8, 241], "secondary": false }, { "width": 7, "bonus": 110, "chr": "d", "pixels": [0, 5, 220, 0, 6, 220, 1, 3, 178, 1, 4, 208, 1, 7, 208, 1, 8, 208, 2, 3, 255, 2, 8, 255, 3, 3, 255, 3, 8, 255, 4, 3, 231, 4, 4, 208, 4, 7, 208, 4, 8, 220, 5, 1, 231, 5, 2, 241, 5, 3, 241, 5, 4, 241, 5, 5, 241, 5, 6, 241, 5, 7, 241, 5, 8, 231], "secondary": false }, { "width": 7, "bonus": 90, "chr": "e", "pixels": [0, 5, 220, 0, 6, 208, 1, 3, 162, 1, 4, 220, 1, 5, 255, 1, 7, 231, 2, 3, 255, 2, 5, 255, 2, 8, 255, 3, 3, 255, 3, 5, 255, 3, 8, 255, 4, 3, 220, 4, 4, 162, 4, 5, 255, 4, 8, 241, 5, 4, 178, 5, 5, 231], "secondary": false }, { "width": 4, "bonus": 55, "chr": "f", "pixels": [0, 3, 231, 1, 1, 178, 1, 2, 241, 1, 3, 255, 1, 4, 241, 1, 5, 241, 1, 6, 241, 1, 7, 241, 1, 8, 231, 2, 1, 255, 2, 3, 255], "secondary": false }, { "width": 7, "bonus": 135, "chr": "g", "pixels": [0, 4, 162, 0, 5, 220, 0, 6, 220, 1, 3, 208, 1, 4, 194, 1, 7, 208, 1, 8, 178, 1, 10, 162, 1, 11, 194, 2, 3, 255, 2, 8, 255, 2, 11, 249, 3, 3, 255, 3, 8, 255, 3, 11, 241, 4, 3, 241, 4, 4, 178, 4, 7, 194, 4, 8, 241, 4, 10, 231, 5, 3, 231, 5, 4, 241, 5, 5, 241, 5, 6, 241, 5, 7, 241, 5, 8, 241, 5, 9, 208], "secondary": false }, { "width": 7, "bonus": 90, "chr": "h", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 3, 208, 1, 4, 231, 2, 3, 255, 3, 3, 255, 4, 3, 208, 4, 4, 241, 4, 5, 241, 4, 6, 241, 4, 7, 241, 4, 8, 231], "secondary": false }, { "width": 3, "bonus": 35, "chr": "i", "pixels": [0, 1, 249, 0, 3, 231, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231], "secondary": false }, { "width": 4, "bonus": 60, "chr": "j", "pixels": [0, 11, 194, 1, 10, 178, 1, 11, 208, 2, 1, 231, 2, 3, 231, 2, 4, 241, 2, 5, 241, 2, 6, 241, 2, 7, 241, 2, 8, 241, 2, 9, 241, 2, 10, 178], "secondary": false }, { "width": 6, "bonus": 85, "chr": "k", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 5, 255, 2, 4, 194, 2, 5, 255, 2, 6, 241, 3, 3, 231, 3, 4, 162, 3, 7, 241, 3, 8, 178, 4, 8, 178], "secondary": false }, { "width": 3, "bonus": 45, "chr": "l", "pixels": [0, 1, 231, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 162, 1, 8, 255], "secondary": false }, { "width": 10, "bonus": 125, "chr": "m", "pixels": [0, 3, 231, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 3, 178, 1, 4, 241, 2, 3, 249, 3, 3, 255, 4, 3, 194, 4, 4, 255, 4, 5, 241, 4, 6, 241, 4, 7, 241, 4, 8, 231, 5, 3, 162, 5, 4, 220, 6, 3, 255, 7, 3, 249, 8, 4, 208, 8, 5, 241, 8, 6, 241, 8, 7, 241, 8, 8, 231], "secondary": false }, { "width": 7, "bonus": 80, "chr": "n", "pixels": [0, 3, 231, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 3, 178, 1, 4, 241, 2, 3, 249, 3, 3, 255, 4, 3, 249, 5, 4, 208, 5, 5, 241, 5, 6, 241, 5, 7, 241, 5, 8, 231], "secondary": false }, { "width": 8, "bonus": 70, "chr": "o", "pixels": [0, 5, 220, 0, 6, 208, 1, 4, 231, 1, 7, 241, 2, 3, 249, 2, 8, 249, 3, 3, 255, 3, 8, 255, 4, 3, 249, 4, 8, 255, 5, 4, 231, 5, 7, 241, 6, 5, 208, 6, 6, 208], "secondary": false }, { "width": 6, "bonus": 90, "chr": "p", "pixels": [0, 3, 249, 0, 4, 255, 0, 5, 220, 0, 6, 231, 0, 7, 255, 0, 8, 241, 0, 9, 241, 0, 10, 241, 1, 3, 255, 1, 8, 249, 2, 3, 255, 2, 8, 255, 3, 3, 249, 3, 8, 249, 4, 4, 249, 4, 5, 255, 4, 6, 255, 4, 7, 249], "secondary": false }, { "width": 7, "bonus": 100, "chr": "q", "pixels": [0, 4, 162, 0, 5, 220, 0, 6, 220, 0, 7, 162, 1, 3, 208, 1, 4, 194, 1, 7, 194, 1, 8, 208, 2, 3, 255, 2, 8, 255, 3, 3, 249, 3, 8, 249, 4, 3, 255, 4, 4, 255, 4, 5, 220, 4, 6, 220, 4, 7, 255, 4, 8, 249, 4, 9, 241, 4, 10, 241], "secondary": false }, { "width": 4, "bonus": 45, "chr": "r", "pixels": [0, 3, 231, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 231, 1, 3, 220, 1, 4, 231, 2, 3, 255], "secondary": false }, { "width": 6, "bonus": 65, "chr": "s", "pixels": [0, 4, 220, 0, 8, 162, 1, 3, 255, 1, 5, 249, 1, 8, 255, 2, 3, 255, 2, 5, 162, 2, 6, 162, 2, 8, 255, 3, 3, 255, 3, 6, 249, 3, 8, 255, 4, 7, 220], "secondary": false }, { "width": 5, "bonus": 50, "chr": "t", "pixels": [1, 2, 241, 1, 3, 255, 1, 4, 241, 1, 5, 241, 1, 6, 241, 1, 7, 208, 2, 3, 255, 2, 8, 249, 3, 3, 162, 3, 8, 194], "secondary": false }, { "width": 6, "bonus": 70, "chr": "u", "pixels": [0, 3, 231, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 208, 1, 8, 249, 2, 8, 255, 3, 8, 231, 4, 3, 231, 4, 4, 241, 4, 5, 241, 4, 6, 231, 4, 7, 255, 4, 8, 241], "secondary": false }, { "width": 6, "bonus": 60, "chr": "v", "pixels": [0, 3, 249, 0, 4, 162, 1, 4, 178, 1, 5, 249, 1, 6, 231, 2, 7, 255, 2, 8, 255, 3, 5, 194, 3, 6, 255, 3, 7, 194, 4, 3, 249, 4, 4, 231], "secondary": false }, { "width": 10, "bonus": 125, "chr": "w", "pixels": [1, 3, 194, 1, 4, 249, 1, 5, 220, 2, 6, 194, 2, 7, 249, 2, 8, 220, 3, 6, 231, 3, 7, 249, 3, 8, 194, 4, 3, 208, 4, 4, 255, 4, 5, 178, 5, 4, 241, 5, 5, 241, 5, 6, 162, 6, 6, 162, 6, 7, 255, 6, 8, 241, 7, 5, 178, 7, 6, 249, 7, 7, 231, 7, 8, 162, 8, 3, 249, 8, 4, 231, 8, 5, 162], "secondary": false }, { "width": 6, "bonus": 65, "chr": "x", "pixels": [0, 8, 208, 1, 3, 208, 1, 4, 231, 1, 7, 241, 1, 8, 162, 2, 5, 255, 2, 6, 249, 3, 4, 255, 3, 5, 162, 3, 6, 220, 3, 7, 220, 4, 3, 241, 4, 8, 255], "secondary": false }, { "width": 6, "bonus": 90, "chr": "y", "pixels": [0, 3, 255, 0, 4, 194, 0, 11, 241, 1, 5, 231, 1, 6, 241, 1, 7, 162, 1, 10, 178, 1, 11, 220, 2, 7, 220, 2, 8, 255, 2, 9, 249, 2, 10, 178, 3, 5, 178, 3, 6, 249, 3, 7, 220, 4, 3, 231, 4, 4, 241, 4, 5, 162], "secondary": false }, { "width": 6, "bonus": 80, "chr": "z", "pixels": [0, 3, 194, 0, 8, 231, 1, 3, 255, 1, 7, 241, 1, 8, 255, 2, 3, 255, 2, 5, 162, 2, 6, 255, 2, 8, 255, 3, 3, 255, 3, 4, 208, 3, 5, 208, 3, 8, 255, 4, 3, 255, 4, 4, 162, 4, 8, 255], "secondary": false }, { "width": 5, "bonus": 50, "chr": "{", "pixels": [0, 5, 194, 1, 2, 208, 1, 3, 241, 1, 4, 241, 1, 5, 231, 1, 6, 255, 1, 7, 241, 1, 8, 208, 2, 1, 249, 2, 9, 249], "secondary": false }, { "width": 3, "bonus": 55, "chr": "|", "pixels": [0, 0, 162, 0, 1, 241, 0, 2, 241, 0, 3, 241, 0, 4, 241, 0, 5, 241, 0, 6, 241, 0, 7, 241, 0, 8, 241, 0, 9, 241, 0, 10, 231], "secondary": false }, { "width": 5, "bonus": 50, "chr": "}", "pixels": [1, 1, 249, 1, 9, 249, 2, 2, 208, 2, 3, 241, 2, 4, 241, 2, 5, 231, 2, 6, 255, 2, 7, 241, 2, 8, 208, 3, 5, 194], "secondary": false }, { "width": 6, "bonus": 30, "chr": "~", "pixels": [0, 6, 162, 1, 5, 255, 2, 5, 241, 3, 6, 241, 4, 5, 231, 4, 6, 178], "secondary": false }], "width": 10, "spacewidth": 3, "shadow": false, "height": 12, "basey": 8 };
              })
            ),
            /***/
            0: (
              /***/
              (function(module2, exports2, __webpack_require__) {
                module2.exports = __webpack_require__("./fonts/aa_8px_mono.fontmeta.json");
              })
            )
            /******/
          })
        );
      });
    }
  });

  // node_modules/@alt1/ocr/dist/fonts/aa_8px_new.js
  var require_aa_8px_new = __commonJS({
    "node_modules/@alt1/ocr/dist/fonts/aa_8px_new.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["aa_8px_new"] = factory();
        else
          root["OCR_aa_8px_new"] = factory();
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
            "./fonts/aa_8px_new.fontmeta.json": (
              /***/
              (function(module2, exports2) {
                module2.exports = { "chars": [{ "width": 7, "bonus": 140, "chr": "a", "pixels": [0, 7, 187, 255, 1, 3, 221, 255, 1, 6, 169, 255, 1, 7, 164, 132, 1, 8, 255, 255, 2, 3, 255, 255, 2, 4, 221, 0, 2, 5, 196, 243, 2, 7, 170, 0, 2, 8, 255, 255, 2, 9, 255, 0, 3, 3, 255, 255, 3, 4, 255, 0, 3, 5, 255, 255, 3, 6, 187, 0, 3, 8, 221, 255, 3, 9, 255, 0, 4, 4, 254, 239, 4, 5, 255, 255, 4, 6, 254, 204, 4, 7, 255, 255, 4, 8, 240, 253, 4, 9, 221, 0, 5, 5, 240, 36, 5, 6, 255, 34, 5, 7, 211, 41, 5, 8, 255, 34, 5, 9, 238, 0], "secondary": false }, { "width": 7, "bonus": 175, "chr": "b", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 2, 211, 41, 1, 3, 248, 209, 1, 4, 243, 178, 1, 5, 230, 75, 1, 6, 230, 75, 1, 7, 243, 178, 1, 8, 246, 194, 1, 9, 204, 0, 2, 3, 255, 255, 2, 4, 204, 0, 2, 5, 170, 0, 2, 8, 255, 255, 2, 9, 187, 0, 3, 3, 255, 255, 3, 4, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 3, 169, 255, 4, 4, 254, 171, 4, 7, 169, 255, 4, 9, 255, 0, 5, 4, 204, 128, 5, 5, 232, 205, 5, 6, 205, 233, 5, 8, 170, 0, 6, 6, 187, 0, 6, 7, 187, 0], "secondary": false }, { "width": 7, "bonus": 95, "chr": "c", "pixels": [0, 5, 169, 255, 0, 6, 187, 255, 1, 4, 187, 255, 1, 6, 193, 90, 1, 7, 237, 201, 1, 8, 164, 185, 2, 3, 255, 255, 2, 5, 187, 0, 2, 8, 255, 255, 3, 3, 255, 255, 3, 4, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 3, 221, 255, 4, 4, 255, 34, 4, 8, 221, 255, 4, 9, 255, 0, 5, 4, 226, 39, 5, 9, 221, 0], "secondary": false }, { "width": 7, "bonus": 180, "chr": "d", "pixels": [0, 5, 187, 255, 0, 6, 187, 255, 1, 4, 169, 255, 1, 6, 205, 85, 1, 7, 232, 187, 1, 8, 203, 213, 2, 3, 255, 255, 2, 5, 170, 0, 2, 8, 255, 255, 2, 9, 170, 0, 3, 3, 255, 255, 3, 4, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 3, 203, 255, 4, 4, 254, 171, 4, 7, 169, 255, 4, 8, 187, 255, 4, 9, 255, 0, 5, 1, 203, 255, 5, 2, 225, 251, 5, 3, 225, 251, 5, 4, 248, 227, 5, 5, 244, 231, 5, 6, 230, 245, 5, 7, 230, 245, 5, 8, 237, 219, 5, 9, 187, 0, 6, 2, 204, 0, 6, 3, 221, 0, 6, 4, 221, 0, 6, 5, 221, 0, 6, 6, 221, 0, 6, 7, 221, 0, 6, 8, 221, 0, 6, 9, 204, 0], "secondary": false }, { "width": 7, "bonus": 135, "chr": "e", "pixels": [0, 5, 187, 255, 0, 6, 169, 255, 1, 4, 187, 255, 1, 5, 255, 255, 1, 6, 209, 104, 1, 7, 237, 219, 2, 3, 255, 255, 2, 5, 255, 255, 2, 6, 255, 0, 2, 8, 255, 255, 3, 3, 255, 255, 3, 4, 255, 0, 3, 5, 255, 255, 3, 6, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 3, 187, 255, 4, 4, 255, 119, 4, 5, 255, 255, 4, 6, 255, 0, 4, 8, 221, 255, 4, 9, 255, 0, 5, 4, 224, 155, 5, 5, 227, 229, 5, 6, 255, 0, 5, 9, 221, 0, 6, 6, 204, 0], "secondary": false }, { "width": 4, "bonus": 90, "chr": "f", "pixels": [0, 3, 203, 255, 1, 2, 221, 255, 1, 3, 255, 255, 1, 4, 248, 227, 1, 5, 225, 251, 1, 6, 225, 251, 1, 7, 225, 251, 1, 8, 210, 247, 2, 1, 255, 255, 2, 3, 255, 255, 2, 4, 255, 0, 2, 5, 221, 0, 2, 6, 221, 0, 2, 7, 221, 0, 2, 8, 221, 0, 2, 9, 204, 0, 3, 2, 255, 0, 3, 4, 255, 0], "secondary": false }, { "width": 7, "bonus": 200, "chr": "g", "pixels": [0, 5, 187, 255, 0, 6, 187, 255, 1, 3, 169, 255, 1, 4, 153, 255, 1, 5, 155, 112, 1, 6, 205, 85, 1, 7, 232, 187, 1, 8, 184, 189, 1, 11, 153, 255, 2, 3, 255, 255, 2, 4, 170, 0, 2, 5, 153, 0, 2, 8, 255, 255, 2, 11, 245, 247, 3, 3, 255, 255, 3, 4, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 3, 11, 221, 255, 4, 3, 221, 255, 4, 4, 255, 136, 4, 7, 153, 255, 4, 8, 221, 255, 4, 9, 255, 85, 4, 10, 203, 255, 5, 3, 203, 255, 5, 4, 250, 226, 5, 5, 239, 236, 5, 6, 230, 245, 5, 7, 230, 245, 5, 8, 241, 234, 5, 9, 243, 178, 5, 11, 204, 0, 6, 4, 204, 0, 6, 5, 221, 0, 6, 6, 221, 0, 6, 7, 221, 0, 6, 8, 221, 0, 6, 9, 221, 0, 6, 10, 170, 0], "secondary": false }, { "width": 7, "bonus": 165, "chr": "h", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 2, 211, 41, 1, 3, 243, 178, 1, 4, 248, 209, 1, 5, 230, 75, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 3, 255, 255, 2, 4, 170, 0, 2, 5, 204, 0, 3, 3, 255, 255, 3, 4, 255, 0, 4, 3, 169, 255, 4, 4, 255, 221, 4, 5, 221, 255, 4, 6, 221, 255, 4, 7, 221, 255, 4, 8, 203, 255, 5, 4, 175, 25, 5, 5, 226, 39, 5, 6, 226, 39, 5, 7, 226, 39, 5, 8, 226, 39, 5, 9, 204, 0], "secondary": false }, { "width": 3, "bonus": 70, "chr": "i", "pixels": [0, 1, 237, 255, 0, 3, 203, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 2, 238, 0, 1, 4, 211, 41, 1, 5, 226, 39, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0], "secondary": false }, { "width": 4, "bonus": 90, "chr": "j", "pixels": [0, 11, 153, 255, 1, 11, 169, 255, 2, 1, 203, 255, 2, 3, 203, 255, 2, 4, 225, 251, 2, 5, 225, 251, 2, 6, 225, 251, 2, 7, 225, 251, 2, 8, 225, 251, 2, 9, 225, 251, 3, 2, 204, 0, 3, 4, 204, 0, 3, 5, 221, 0, 3, 6, 221, 0, 3, 7, 221, 0, 3, 8, 221, 0, 3, 9, 221, 0, 3, 10, 221, 0], "secondary": false }, { "width": 6, "bonus": 130, "chr": "k", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 255, 255, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 4, 166, 235, 2, 5, 255, 255, 2, 6, 255, 221, 3, 3, 203, 255, 3, 5, 153, 0, 3, 6, 255, 51, 3, 7, 250, 226, 3, 8, 160, 217, 4, 4, 204, 0, 4, 8, 239, 145], "secondary": false }, { "width": 3, "bonus": 75, "chr": "l", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 226, 39, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 255, 255, 2, 9, 255, 0], "secondary": false }, { "width": 10, "bonus": 210, "chr": "m", "pixels": [0, 3, 203, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 4, 248, 227, 1, 5, 230, 75, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 3, 237, 255, 2, 5, 221, 0, 3, 3, 255, 255, 3, 4, 238, 0, 4, 3, 153, 255, 4, 4, 255, 255, 4, 5, 221, 255, 4, 6, 221, 255, 4, 7, 221, 255, 4, 8, 203, 255, 5, 4, 228, 209, 5, 5, 255, 68, 5, 6, 226, 39, 5, 7, 226, 39, 5, 8, 226, 39, 5, 9, 204, 0, 6, 3, 255, 255, 6, 5, 187, 0, 7, 3, 237, 255, 7, 4, 255, 85, 8, 4, 249, 174, 8, 5, 232, 243, 8, 6, 225, 251, 8, 7, 225, 251, 8, 8, 210, 247, 9, 5, 170, 0, 9, 6, 221, 0, 9, 7, 221, 0, 9, 8, 221, 0, 9, 9, 204, 0], "secondary": false }, { "width": 7, "bonus": 140, "chr": "n", "pixels": [0, 3, 203, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 4, 248, 227, 1, 5, 232, 93, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 3, 237, 255, 2, 5, 221, 0, 3, 3, 255, 255, 3, 4, 238, 0, 4, 3, 237, 255, 4, 4, 255, 85, 5, 4, 249, 174, 5, 5, 232, 243, 5, 6, 225, 251, 5, 7, 225, 251, 5, 8, 210, 247, 6, 5, 170, 0, 6, 6, 221, 0, 6, 7, 221, 0, 6, 8, 221, 0, 6, 9, 204, 0], "secondary": false }, { "width": 8, "bonus": 120, "chr": "o", "pixels": [0, 5, 187, 255, 0, 6, 169, 255, 1, 4, 203, 255, 1, 6, 209, 104, 1, 7, 244, 231, 2, 3, 237, 255, 2, 5, 204, 0, 2, 8, 252, 241, 3, 3, 255, 255, 3, 4, 238, 0, 3, 8, 255, 255, 3, 9, 238, 0, 4, 3, 237, 255, 4, 4, 255, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 4, 251, 207, 5, 7, 221, 255, 5, 9, 255, 0, 6, 5, 237, 183, 6, 6, 192, 225, 6, 8, 221, 0, 7, 6, 170, 0, 7, 7, 170, 0], "secondary": false }, { "width": 6, "bonus": 170, "chr": "p", "pixels": [0, 3, 237, 255, 0, 4, 255, 255, 0, 5, 187, 255, 0, 6, 203, 255, 0, 7, 255, 255, 0, 8, 221, 255, 0, 9, 221, 255, 0, 10, 221, 255, 1, 3, 255, 255, 1, 4, 240, 36, 1, 5, 255, 0, 1, 6, 187, 0, 1, 7, 211, 41, 1, 8, 254, 239, 1, 9, 221, 0, 1, 10, 221, 0, 1, 11, 221, 0, 2, 3, 255, 255, 2, 4, 255, 0, 2, 8, 255, 255, 2, 9, 238, 0, 3, 3, 237, 255, 3, 4, 255, 34, 3, 8, 237, 255, 3, 9, 255, 0, 4, 4, 253, 240, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 237, 255, 4, 9, 238, 0, 5, 5, 239, 18, 5, 6, 255, 17, 5, 7, 255, 0, 5, 8, 238, 0], "secondary": false }, { "width": 7, "bonus": 165, "chr": "q", "pixels": [0, 5, 187, 255, 0, 6, 187, 255, 1, 3, 169, 255, 1, 4, 153, 255, 1, 5, 155, 112, 1, 6, 205, 85, 1, 7, 228, 171, 1, 8, 209, 207, 2, 3, 255, 255, 2, 4, 170, 0, 2, 5, 153, 0, 2, 8, 255, 255, 2, 9, 170, 0, 3, 3, 237, 255, 3, 4, 255, 17, 3, 8, 237, 255, 3, 9, 255, 0, 4, 3, 255, 255, 4, 4, 255, 255, 4, 5, 191, 250, 4, 6, 187, 255, 4, 7, 255, 255, 4, 8, 239, 254, 4, 9, 253, 223, 4, 10, 221, 255, 5, 4, 255, 34, 5, 5, 255, 34, 5, 6, 196, 45, 5, 7, 196, 45, 5, 8, 255, 34, 5, 9, 240, 36, 5, 10, 226, 39, 5, 11, 221, 0], "secondary": false }, { "width": 4, "bonus": 85, "chr": "r", "pixels": [0, 3, 203, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 3, 187, 255, 1, 4, 244, 213, 1, 5, 232, 93, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 3, 255, 255, 2, 4, 187, 0, 2, 5, 204, 0, 3, 4, 255, 0], "secondary": false }, { "width": 6, "bonus": 100, "chr": "s", "pixels": [0, 4, 187, 255, 1, 3, 255, 255, 1, 5, 250, 243, 1, 8, 255, 255, 2, 3, 255, 255, 2, 4, 255, 0, 2, 5, 155, 196, 2, 6, 246, 123, 2, 8, 255, 255, 2, 9, 255, 0, 3, 3, 255, 255, 3, 4, 255, 0, 3, 6, 245, 247, 3, 7, 164, 132, 3, 8, 255, 255, 3, 9, 255, 0, 4, 4, 255, 17, 4, 7, 250, 191, 4, 9, 255, 0, 5, 8, 187, 0], "secondary": false }, { "width": 5, "bonus": 80, "chr": "t", "pixels": [1, 2, 221, 255, 1, 3, 255, 255, 1, 4, 235, 240, 1, 5, 221, 255, 1, 6, 221, 255, 1, 7, 169, 255, 2, 3, 255, 255, 2, 4, 255, 34, 2, 5, 226, 39, 2, 6, 226, 39, 2, 7, 232, 93, 2, 8, 249, 243, 3, 4, 255, 0, 3, 8, 187, 209, 3, 9, 238, 0, 4, 9, 153, 0], "secondary": false }, { "width": 6, "bonus": 135, "chr": "u", "pixels": [0, 3, 203, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 169, 255, 1, 4, 211, 41, 1, 5, 226, 39, 1, 6, 226, 39, 1, 7, 232, 93, 1, 8, 249, 243, 2, 8, 255, 255, 2, 9, 238, 0, 3, 8, 203, 255, 3, 9, 255, 0, 4, 3, 203, 255, 4, 4, 221, 255, 4, 5, 221, 255, 4, 6, 203, 255, 4, 7, 255, 255, 4, 8, 228, 247, 4, 9, 204, 0, 5, 4, 211, 41, 5, 5, 226, 39, 5, 6, 226, 39, 5, 7, 211, 41, 5, 8, 255, 34, 5, 9, 221, 0], "secondary": false }, { "width": 6, "bonus": 95, "chr": "v", "pixels": [0, 3, 237, 255, 1, 4, 247, 141, 1, 5, 245, 247, 1, 6, 203, 255, 2, 6, 241, 54, 2, 7, 255, 255, 2, 8, 255, 255, 3, 5, 153, 255, 3, 6, 255, 255, 3, 7, 173, 226, 3, 8, 255, 51, 3, 9, 255, 0, 4, 3, 237, 255, 4, 4, 203, 255, 4, 6, 153, 0, 4, 7, 255, 0, 4, 8, 153, 0, 5, 4, 238, 0, 5, 5, 204, 0], "secondary": false }, { "width": 10, "bonus": 170, "chr": "w", "pixels": [1, 3, 153, 255, 1, 4, 243, 249, 1, 5, 187, 255, 2, 4, 153, 0, 2, 5, 243, 71, 2, 6, 228, 171, 2, 7, 243, 249, 2, 8, 187, 255, 3, 6, 217, 239, 3, 7, 248, 244, 3, 8, 248, 157, 3, 9, 187, 0, 4, 3, 169, 255, 4, 4, 255, 255, 4, 7, 204, 0, 4, 8, 238, 0, 4, 9, 153, 0, 5, 4, 244, 231, 5, 5, 255, 221, 5, 6, 191, 159, 6, 5, 223, 19, 6, 6, 237, 128, 6, 7, 255, 255, 6, 8, 223, 253, 7, 6, 239, 254, 7, 7, 227, 229, 7, 8, 255, 119, 7, 9, 221, 0, 8, 3, 237, 255, 8, 4, 203, 255, 8, 7, 238, 0, 8, 8, 204, 0, 9, 4, 238, 0, 9, 5, 204, 0], "secondary": false }, { "width": 6, "bonus": 95, "chr": "x", "pixels": [0, 8, 169, 255, 1, 3, 169, 255, 1, 4, 224, 232, 1, 7, 221, 255, 1, 9, 170, 0, 2, 4, 193, 90, 2, 5, 255, 255, 2, 6, 240, 253, 2, 8, 221, 0, 3, 4, 255, 255, 3, 5, 155, 196, 3, 6, 255, 187, 3, 7, 250, 191, 4, 3, 221, 255, 4, 5, 255, 0, 4, 7, 209, 104, 4, 8, 255, 255, 5, 4, 221, 0, 5, 9, 255, 0], "secondary": false }, { "width": 6, "bonus": 110, "chr": "y", "pixels": [0, 3, 255, 255, 0, 4, 153, 255, 0, 11, 221, 255, 1, 4, 255, 85, 1, 5, 234, 222, 1, 6, 228, 247, 1, 11, 196, 243, 2, 6, 207, 21, 2, 7, 246, 194, 2, 8, 255, 255, 2, 9, 237, 255, 3, 6, 237, 255, 3, 7, 191, 250, 3, 8, 205, 85, 3, 9, 255, 0, 3, 10, 238, 0, 4, 3, 203, 255, 4, 4, 221, 255, 4, 7, 238, 0, 4, 8, 187, 0, 5, 4, 204, 0, 5, 5, 221, 0], "secondary": false }, { "width": 6, "bonus": 130, "chr": "z", "pixels": [0, 3, 153, 255, 0, 8, 203, 255, 1, 3, 255, 255, 1, 4, 153, 0, 1, 7, 221, 255, 1, 8, 255, 255, 1, 9, 204, 0, 2, 3, 255, 255, 2, 4, 255, 0, 2, 6, 255, 255, 2, 8, 255, 255, 2, 9, 255, 0, 3, 3, 255, 255, 3, 4, 254, 171, 3, 5, 169, 255, 3, 7, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 3, 255, 255, 4, 4, 255, 119, 4, 5, 170, 0, 4, 6, 170, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 4, 255, 0, 5, 9, 255, 0], "secondary": false }, { "width": 8, "bonus": 155, "chr": "A", "pixels": [0, 8, 153, 255, 1, 6, 221, 255, 1, 7, 237, 255, 1, 9, 153, 0, 2, 3, 169, 255, 2, 4, 255, 255, 2, 5, 187, 255, 2, 6, 255, 255, 2, 7, 221, 0, 2, 8, 238, 0, 3, 1, 255, 255, 3, 2, 255, 255, 3, 4, 170, 0, 3, 5, 255, 0, 3, 6, 255, 255, 3, 7, 255, 0, 4, 2, 255, 255, 4, 3, 254, 239, 4, 4, 184, 189, 4, 6, 255, 255, 4, 7, 255, 0, 5, 3, 255, 34, 5, 4, 247, 141, 5, 5, 255, 255, 5, 6, 255, 255, 5, 7, 255, 102, 6, 6, 255, 85, 6, 7, 255, 187, 6, 8, 255, 255, 7, 8, 187, 0, 7, 9, 255, 0], "secondary": false }, { "width": 7, "bonus": 225, "chr": "B", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 1, 255, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 255, 255, 1, 5, 226, 39, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 255, 255, 1, 9, 204, 0, 2, 1, 255, 255, 2, 2, 255, 0, 2, 4, 255, 255, 2, 5, 255, 0, 2, 8, 255, 255, 2, 9, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 4, 255, 255, 3, 5, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 1, 221, 255, 4, 2, 255, 85, 4, 4, 255, 255, 4, 5, 254, 171, 4, 8, 203, 255, 4, 9, 255, 0, 5, 2, 243, 178, 5, 3, 198, 219, 5, 5, 255, 102, 5, 6, 232, 205, 5, 7, 180, 217, 5, 9, 204, 0, 6, 3, 170, 0, 6, 4, 170, 0, 6, 7, 187, 0, 6, 8, 153, 0], "secondary": false }, { "width": 9, "bonus": 155, "chr": "C", "pixels": [0, 4, 187, 255, 0, 5, 187, 255, 1, 2, 221, 255, 1, 3, 153, 255, 1, 4, 155, 112, 1, 5, 205, 85, 1, 6, 228, 171, 1, 7, 224, 232, 2, 1, 169, 255, 2, 3, 221, 0, 2, 4, 153, 0, 2, 7, 194, 135, 2, 8, 237, 183, 3, 1, 255, 255, 3, 2, 170, 0, 3, 8, 255, 255, 3, 9, 170, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 8, 255, 255, 5, 9, 255, 0, 6, 1, 169, 255, 6, 2, 255, 102, 6, 8, 169, 255, 6, 9, 255, 0, 7, 2, 181, 48, 7, 9, 170, 0], "secondary": false }, { "width": 8, "bonus": 200, "chr": "D", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 1, 255, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 226, 39, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 255, 255, 1, 9, 204, 0, 2, 1, 255, 255, 2, 2, 255, 0, 2, 8, 255, 255, 2, 9, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 1, 203, 255, 4, 2, 255, 68, 4, 8, 203, 255, 4, 9, 255, 0, 5, 2, 248, 227, 5, 3, 168, 207, 5, 7, 221, 255, 5, 9, 204, 0, 6, 3, 237, 128, 6, 4, 223, 214, 6, 5, 205, 233, 6, 6, 155, 196, 6, 8, 221, 0, 7, 5, 187, 0, 7, 6, 187, 0], "secondary": false }, { "width": 6, "bonus": 180, "chr": "E", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 1, 255, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 255, 255, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 255, 255, 1, 9, 204, 0, 2, 1, 255, 255, 2, 2, 255, 0, 2, 5, 255, 255, 2, 6, 255, 0, 2, 8, 255, 255, 2, 9, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 5, 255, 255, 3, 6, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 1, 153, 255, 4, 2, 255, 0, 4, 6, 255, 0, 4, 8, 221, 255, 4, 9, 255, 0, 5, 2, 153, 0, 5, 9, 221, 0], "secondary": false }, { "width": 6, "bonus": 135, "chr": "F", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 1, 255, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 255, 255, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 1, 255, 255, 2, 2, 255, 0, 2, 5, 255, 255, 2, 6, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 5, 255, 255, 3, 6, 255, 0, 4, 2, 255, 0, 4, 6, 255, 0], "secondary": false }, { "width": 9, "bonus": 200, "chr": "G", "pixels": [0, 4, 169, 255, 0, 5, 187, 255, 1, 2, 203, 255, 1, 3, 153, 255, 1, 5, 193, 90, 1, 6, 224, 155, 1, 7, 237, 238, 2, 1, 169, 255, 2, 3, 204, 0, 2, 4, 153, 0, 2, 7, 175, 124, 2, 8, 246, 194, 3, 1, 255, 255, 3, 2, 170, 0, 3, 8, 255, 255, 3, 9, 187, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 8, 237, 255, 5, 9, 255, 0, 6, 1, 169, 255, 6, 2, 255, 85, 6, 5, 255, 255, 6, 7, 153, 255, 6, 8, 169, 255, 6, 9, 238, 0, 7, 2, 175, 25, 7, 5, 153, 255, 7, 6, 255, 221, 7, 7, 225, 251, 7, 8, 234, 222, 7, 9, 170, 0, 8, 6, 153, 0, 8, 7, 221, 0, 8, 8, 221, 0, 8, 9, 204, 0], "secondary": false }, { "width": 8, "bonus": 200, "chr": "H", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 255, 255, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 5, 255, 255, 2, 6, 255, 0, 3, 5, 255, 255, 3, 6, 255, 0, 4, 5, 255, 255, 4, 6, 255, 0, 5, 5, 255, 255, 5, 6, 255, 34, 6, 1, 203, 255, 6, 2, 225, 251, 6, 3, 225, 251, 6, 4, 225, 251, 6, 5, 225, 251, 6, 6, 255, 221, 6, 7, 225, 251, 6, 8, 210, 247, 7, 2, 204, 0, 7, 3, 221, 0, 7, 4, 221, 0, 7, 5, 221, 0, 7, 6, 221, 0, 7, 7, 221, 0, 7, 8, 221, 0, 7, 9, 204, 0], "secondary": false }, { "width": 4, "bonus": 110, "chr": "I", "pixels": [0, 1, 191, 255, 0, 8, 191, 255, 1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 191, 0, 2, 1, 191, 255, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 191, 2, 9, 255, 0, 3, 2, 192, 0, 3, 9, 191, 0], "secondary": false }, { "width": 6, "bonus": 130, "chr": "J", "pixels": [0, 6, 153, 255, 0, 7, 153, 255, 1, 7, 194, 135, 1, 8, 234, 222, 2, 1, 221, 255, 2, 8, 255, 255, 2, 9, 204, 0, 3, 1, 255, 255, 3, 2, 226, 39, 3, 8, 203, 255, 3, 9, 255, 0, 4, 1, 203, 255, 4, 2, 255, 221, 4, 3, 225, 251, 4, 4, 225, 251, 4, 5, 225, 251, 4, 6, 225, 251, 4, 7, 166, 235, 4, 9, 204, 0, 5, 2, 204, 0, 5, 3, 221, 0, 5, 4, 221, 0, 5, 5, 221, 0, 5, 6, 221, 0, 5, 7, 221, 0, 5, 8, 153, 0], "secondary": false }, { "width": 7, "bonus": 155, "chr": "K", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 255, 255, 1, 5, 226, 39, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 4, 255, 255, 2, 5, 255, 102, 3, 3, 221, 255, 3, 5, 254, 171, 3, 6, 224, 232, 4, 1, 203, 255, 4, 2, 153, 255, 4, 4, 221, 0, 4, 6, 193, 90, 4, 7, 251, 242, 4, 8, 173, 226, 5, 2, 204, 0, 5, 3, 153, 0, 5, 8, 247, 141, 5, 9, 153, 0], "secondary": false }, { "width": 6, "bonus": 115, "chr": "L", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 226, 39, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 255, 255, 1, 9, 204, 0, 2, 8, 255, 255, 2, 9, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 9, 255, 0], "secondary": false }, { "width": 9, "bonus": 240, "chr": "M", "pixels": [0, 1, 245, 255, 0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 1, 2, 251, 173, 1, 3, 255, 225, 1, 4, 255, 85, 1, 5, 255, 0, 1, 6, 255, 0, 1, 7, 255, 0, 1, 8, 255, 0, 1, 9, 255, 0, 2, 3, 191, 83, 2, 4, 249, 212, 2, 5, 212, 229, 3, 5, 226, 119, 3, 6, 249, 237, 3, 7, 165, 227, 4, 6, 241, 245, 4, 7, 245, 155, 4, 8, 155, 32, 5, 4, 207, 255, 5, 5, 191, 254, 5, 7, 232, 0, 6, 2, 169, 255, 6, 3, 223, 255, 6, 5, 207, 0, 6, 6, 190, 0, 7, 1, 245, 255, 7, 2, 255, 255, 7, 3, 255, 255, 7, 4, 255, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 255, 255, 7, 8, 255, 255, 8, 2, 245, 0, 8, 3, 255, 0, 8, 4, 255, 0, 8, 5, 255, 0, 8, 6, 255, 0, 8, 7, 255, 0, 8, 8, 255, 0, 8, 9, 255, 0], "secondary": false }, { "width": 8, "bonus": 200, "chr": "N", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 2, 255, 255, 1, 3, 235, 111, 1, 4, 226, 39, 1, 5, 226, 39, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 3, 255, 221, 2, 4, 163, 160, 3, 4, 246, 194, 3, 5, 214, 223, 4, 5, 214, 122, 4, 6, 246, 229, 5, 6, 163, 160, 5, 7, 255, 255, 6, 1, 203, 255, 6, 2, 225, 251, 6, 3, 225, 251, 6, 4, 225, 251, 6, 5, 225, 251, 6, 6, 225, 251, 6, 7, 235, 240, 6, 8, 254, 204, 7, 2, 204, 0, 7, 3, 221, 0, 7, 4, 221, 0, 7, 5, 221, 0, 7, 6, 221, 0, 7, 7, 221, 0, 7, 8, 221, 0, 7, 9, 204, 0], "secondary": false }, { "width": 10, "bonus": 200, "chr": "O", "pixels": [0, 4, 187, 255, 0, 5, 169, 255, 1, 2, 203, 255, 1, 3, 153, 255, 1, 5, 205, 85, 1, 6, 226, 192, 1, 7, 224, 232, 2, 1, 153, 255, 2, 3, 204, 0, 2, 4, 153, 0, 2, 7, 209, 145, 2, 8, 234, 167, 3, 1, 255, 255, 3, 2, 153, 0, 3, 8, 255, 255, 3, 9, 153, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 8, 255, 255, 5, 9, 255, 0, 6, 1, 153, 255, 6, 2, 255, 102, 6, 8, 153, 255, 6, 9, 255, 0, 7, 2, 234, 222, 7, 3, 194, 201, 7, 6, 169, 255, 7, 7, 203, 255, 7, 9, 153, 0, 8, 3, 225, 116, 8, 4, 228, 209, 8, 5, 192, 225, 8, 7, 170, 0, 8, 8, 204, 0, 9, 5, 187, 0, 9, 6, 170, 0], "secondary": false }, { "width": 7, "bonus": 165, "chr": "P", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 1, 255, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 255, 255, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 1, 255, 255, 2, 2, 255, 0, 2, 5, 255, 255, 2, 6, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 5, 255, 255, 3, 6, 255, 0, 4, 1, 187, 255, 4, 2, 255, 136, 4, 5, 187, 255, 4, 6, 255, 0, 5, 2, 224, 155, 5, 3, 239, 236, 5, 6, 187, 0, 6, 4, 221, 0], "secondary": false }, { "width": 9, "bonus": 185, "chr": "Q", "pixels": [0, 4, 187, 255, 0, 5, 187, 255, 1, 2, 221, 255, 1, 4, 155, 112, 1, 5, 205, 85, 1, 6, 228, 171, 1, 7, 235, 240, 2, 1, 187, 255, 2, 3, 221, 0, 2, 7, 187, 116, 2, 8, 243, 178, 3, 1, 255, 255, 3, 2, 187, 0, 3, 8, 255, 255, 3, 9, 170, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 1, 237, 255, 5, 2, 255, 0, 5, 8, 237, 255, 5, 9, 255, 0, 6, 2, 251, 207, 6, 7, 255, 255, 6, 9, 238, 0, 7, 3, 255, 255, 7, 4, 203, 255, 7, 5, 221, 255, 7, 6, 255, 255, 7, 7, 155, 196, 7, 8, 254, 204, 8, 4, 255, 17, 8, 5, 207, 21, 8, 6, 221, 0, 8, 7, 255, 0, 8, 9, 204, 0], "secondary": false }, { "width": 7, "bonus": 180, "chr": "R", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 1, 255, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 255, 255, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 204, 0, 2, 1, 255, 255, 2, 2, 255, 0, 2, 5, 255, 255, 2, 6, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 5, 255, 255, 3, 6, 255, 187, 4, 2, 254, 239, 4, 3, 203, 255, 4, 4, 255, 255, 4, 6, 255, 68, 4, 7, 250, 243, 4, 8, 181, 239, 5, 3, 239, 18, 5, 4, 204, 0, 5, 5, 255, 0, 5, 8, 245, 107, 5, 9, 170, 0], "secondary": false }, { "width": 6, "bonus": 130, "chr": "S", "pixels": [0, 2, 153, 255, 0, 3, 169, 255, 1, 1, 203, 255, 1, 3, 187, 116, 1, 4, 244, 231, 1, 8, 243, 249, 2, 1, 255, 255, 2, 2, 204, 0, 2, 4, 198, 219, 2, 5, 232, 93, 2, 8, 255, 255, 2, 9, 238, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 5, 255, 255, 3, 8, 255, 255, 3, 9, 255, 0, 4, 1, 169, 255, 4, 2, 255, 68, 4, 5, 160, 217, 4, 6, 255, 221, 4, 7, 237, 255, 4, 9, 255, 0, 5, 2, 170, 0, 5, 7, 223, 19, 5, 8, 238, 0], "secondary": false }, { "width": 8, "bonus": 125, "chr": "T", "pixels": [0, 1, 255, 255, 1, 1, 255, 255, 1, 2, 255, 0, 2, 1, 255, 255, 2, 2, 255, 34, 3, 1, 255, 255, 3, 2, 255, 221, 3, 3, 225, 251, 3, 4, 225, 251, 3, 5, 225, 251, 3, 6, 225, 251, 3, 7, 225, 251, 3, 8, 210, 247, 4, 1, 255, 255, 4, 2, 255, 0, 4, 3, 221, 0, 4, 4, 221, 0, 4, 5, 221, 0, 4, 6, 221, 0, 4, 7, 221, 0, 4, 8, 221, 0, 4, 9, 204, 0, 5, 1, 255, 255, 5, 2, 255, 0, 6, 2, 255, 0], "secondary": false }, { "width": 8, "bonus": 165, "chr": "U", "pixels": [0, 1, 203, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 187, 255, 1, 2, 211, 41, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 226, 39, 1, 6, 230, 75, 1, 7, 232, 187, 1, 8, 184, 189, 2, 8, 255, 255, 3, 8, 255, 255, 3, 9, 255, 0, 4, 8, 221, 255, 4, 9, 255, 0, 5, 1, 203, 255, 5, 2, 221, 255, 5, 3, 221, 255, 5, 4, 221, 255, 5, 5, 221, 255, 5, 6, 255, 255, 5, 7, 237, 255, 5, 9, 221, 0, 6, 2, 211, 41, 6, 3, 226, 39, 6, 4, 226, 39, 6, 5, 226, 39, 6, 6, 223, 19, 6, 7, 255, 0, 6, 8, 238, 0], "secondary": false }, { "width": 7, "bonus": 125, "chr": "V", "pixels": [0, 1, 255, 255, 0, 2, 187, 255, 1, 2, 255, 68, 1, 3, 228, 171, 1, 4, 255, 255, 1, 5, 153, 255, 2, 4, 153, 0, 2, 5, 255, 85, 2, 6, 228, 209, 2, 7, 242, 251, 3, 6, 164, 185, 3, 7, 255, 255, 3, 8, 251, 207, 4, 4, 203, 255, 4, 5, 237, 255, 4, 8, 255, 0, 4, 9, 204, 0, 5, 1, 169, 255, 5, 2, 255, 255, 5, 3, 153, 255, 5, 5, 204, 0, 5, 6, 238, 0, 6, 2, 170, 0, 6, 3, 255, 0, 6, 4, 153, 0], "secondary": false }, { "width": 10, "bonus": 245, "chr": "W", "pixels": [0, 1, 255, 255, 0, 2, 221, 255, 1, 2, 255, 17, 1, 3, 237, 128, 1, 4, 223, 214, 1, 5, 255, 255, 1, 6, 203, 255, 2, 5, 191, 23, 2, 6, 255, 136, 2, 7, 255, 255, 2, 8, 255, 255, 3, 3, 153, 255, 3, 4, 237, 255, 3, 5, 221, 255, 3, 7, 168, 103, 3, 8, 255, 0, 3, 9, 255, 0, 4, 1, 255, 255, 4, 2, 255, 255, 4, 3, 187, 209, 4, 4, 153, 0, 4, 5, 238, 0, 4, 6, 221, 0, 5, 2, 255, 102, 5, 3, 254, 171, 5, 4, 248, 244, 5, 5, 203, 255, 6, 4, 170, 0, 6, 5, 241, 54, 6, 6, 231, 150, 6, 7, 255, 255, 6, 8, 255, 255, 7, 4, 153, 255, 7, 5, 237, 255, 7, 6, 241, 252, 7, 7, 207, 188, 7, 8, 255, 85, 7, 9, 255, 0, 8, 1, 237, 255, 8, 2, 237, 255, 8, 3, 153, 255, 8, 4, 153, 171, 8, 5, 153, 0, 8, 6, 238, 0, 8, 7, 238, 0, 8, 8, 153, 0, 9, 2, 238, 0, 9, 3, 238, 0, 9, 4, 153, 0], "secondary": false }, { "width": 7, "bonus": 130, "chr": "X", "pixels": [0, 8, 169, 255, 1, 1, 187, 255, 1, 2, 220, 236, 1, 7, 237, 255, 1, 9, 170, 0, 2, 2, 205, 85, 2, 3, 248, 227, 2, 4, 166, 235, 2, 5, 255, 255, 2, 6, 153, 255, 2, 8, 238, 0, 3, 3, 155, 196, 3, 4, 255, 255, 3, 5, 248, 244, 3, 6, 255, 51, 3, 7, 153, 0, 4, 2, 237, 255, 4, 5, 255, 51, 4, 6, 251, 207, 4, 7, 186, 233, 5, 1, 203, 255, 5, 3, 238, 0, 5, 7, 225, 116, 5, 8, 255, 255, 6, 2, 204, 0, 6, 9, 255, 0], "secondary": false }, { "width": 7, "bonus": 90, "chr": "Y", "pixels": [0, 1, 169, 255, 1, 2, 249, 243, 2, 3, 248, 157, 2, 4, 255, 255, 3, 4, 241, 234, 3, 5, 254, 204, 3, 6, 232, 243, 3, 7, 225, 251, 3, 8, 210, 247, 4, 3, 255, 255, 4, 5, 221, 0, 4, 6, 204, 0, 4, 7, 221, 0, 4, 8, 221, 0, 4, 9, 204, 0, 5, 1, 237, 255, 5, 4, 255, 0, 6, 2, 238, 0], "secondary": false }, { "width": 7, "bonus": 140, "chr": "Z", "pixels": [0, 8, 187, 255, 1, 1, 255, 255, 1, 7, 221, 255, 1, 8, 255, 255, 1, 9, 187, 0, 2, 1, 255, 255, 2, 2, 255, 0, 2, 5, 203, 255, 2, 8, 255, 255, 2, 9, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 4, 203, 255, 3, 6, 204, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 1, 255, 255, 4, 2, 255, 221, 4, 5, 204, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 1, 187, 255, 5, 2, 255, 34, 5, 3, 221, 0, 5, 8, 153, 255, 5, 9, 255, 0, 6, 2, 187, 0, 6, 9, 153, 0], "secondary": false }, { "width": 7, "bonus": 170, "chr": "0", "pixels": [0, 2, 153, 255, 0, 3, 221, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 237, 255, 0, 7, 169, 255, 1, 1, 187, 255, 1, 3, 153, 0, 1, 4, 221, 0, 1, 5, 255, 0, 1, 6, 255, 0, 1, 7, 243, 71, 1, 8, 237, 219, 2, 1, 187, 255, 2, 2, 187, 0, 2, 8, 205, 233, 2, 9, 211, 41, 3, 1, 221, 255, 3, 2, 205, 85, 3, 8, 203, 255, 3, 9, 187, 0, 4, 2, 243, 178, 4, 3, 255, 255, 4, 4, 187, 255, 4, 5, 187, 255, 4, 6, 237, 255, 4, 7, 169, 255, 4, 9, 204, 0, 5, 3, 170, 0, 5, 4, 255, 0, 5, 5, 187, 0, 5, 6, 187, 0, 5, 7, 238, 0, 5, 8, 170, 0], "secondary": false }, { "width": 7, "bonus": 100, "chr": "1", "pixels": [1, 8, 187, 255, 2, 1, 203, 255, 2, 2, 224, 232, 2, 3, 219, 218, 2, 4, 187, 255, 2, 5, 187, 255, 2, 6, 187, 255, 2, 7, 187, 255, 2, 8, 237, 255, 2, 9, 187, 0, 3, 2, 218, 80, 3, 3, 218, 80, 3, 4, 205, 85, 3, 5, 205, 85, 3, 6, 205, 85, 3, 7, 205, 85, 3, 8, 241, 215, 3, 9, 238, 0, 4, 8, 168, 207, 4, 9, 204, 0], "secondary": false }, { "width": 7, "bonus": 105, "chr": "2", "pixels": [1, 8, 255, 255, 2, 1, 187, 255, 2, 6, 153, 255, 2, 8, 223, 214, 2, 9, 255, 0, 3, 1, 203, 255, 3, 2, 187, 0, 3, 5, 153, 255, 3, 7, 153, 0, 3, 8, 219, 218, 3, 9, 187, 0, 4, 1, 187, 255, 4, 2, 234, 167, 4, 4, 203, 255, 4, 6, 153, 0, 4, 8, 187, 255, 4, 9, 187, 0, 5, 2, 214, 122, 5, 3, 200, 152, 5, 5, 204, 0, 5, 9, 187, 0], "secondary": false }, { "width": 7, "bonus": 105, "chr": "3", "pixels": [0, 8, 203, 255, 1, 1, 187, 255, 1, 8, 191, 250, 1, 9, 204, 0, 2, 1, 187, 255, 2, 2, 196, 45, 2, 4, 187, 255, 2, 5, 174, 150, 2, 8, 203, 255, 2, 9, 187, 0, 3, 2, 246, 229, 3, 3, 210, 247, 3, 5, 241, 215, 3, 6, 173, 175, 3, 7, 169, 255, 3, 9, 204, 0, 4, 3, 227, 57, 4, 4, 204, 0, 4, 6, 228, 133, 4, 7, 174, 150, 4, 8, 170, 0], "secondary": false }, { "width": 7, "bonus": 150, "chr": "4", "pixels": [0, 6, 237, 255, 1, 4, 187, 255, 1, 6, 219, 218, 1, 7, 238, 0, 2, 3, 169, 255, 2, 5, 187, 0, 2, 6, 219, 218, 2, 7, 187, 0, 3, 1, 187, 255, 3, 2, 153, 255, 3, 3, 155, 112, 3, 4, 193, 90, 3, 6, 203, 255, 3, 7, 205, 85, 4, 1, 187, 255, 4, 2, 237, 201, 4, 3, 228, 209, 4, 4, 205, 233, 4, 5, 205, 233, 4, 6, 242, 251, 4, 7, 241, 198, 4, 8, 205, 233, 5, 2, 187, 0, 5, 3, 187, 0, 5, 4, 187, 0, 5, 5, 187, 0, 5, 6, 224, 155, 5, 7, 238, 0, 5, 8, 187, 0, 5, 9, 187, 0], "secondary": false }, { "width": 7, "bonus": 130, "chr": "5", "pixels": [1, 1, 237, 255, 1, 2, 187, 255, 1, 3, 187, 255, 1, 4, 187, 255, 1, 8, 207, 251, 2, 1, 187, 255, 2, 2, 238, 0, 2, 3, 187, 0, 2, 4, 237, 201, 2, 5, 187, 0, 2, 8, 187, 255, 2, 9, 204, 0, 3, 1, 187, 255, 3, 2, 187, 0, 3, 4, 203, 255, 3, 5, 191, 23, 3, 8, 203, 255, 3, 9, 187, 0, 4, 2, 187, 0, 4, 5, 251, 242, 4, 6, 191, 250, 4, 7, 221, 255, 4, 9, 204, 0, 5, 6, 243, 71, 5, 7, 191, 23, 5, 8, 221, 0], "secondary": false }, { "width": 7, "bonus": 150, "chr": "6", "pixels": [0, 3, 169, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 237, 255, 0, 7, 153, 255, 1, 2, 187, 255, 1, 4, 209, 145, 1, 5, 255, 68, 1, 6, 255, 0, 1, 7, 246, 123, 1, 8, 228, 209, 2, 1, 203, 255, 2, 3, 187, 0, 2, 4, 200, 238, 2, 8, 219, 218, 2, 9, 187, 0, 3, 1, 187, 255, 3, 2, 204, 0, 3, 4, 203, 255, 3, 5, 205, 85, 3, 8, 187, 255, 3, 9, 187, 0, 4, 2, 187, 0, 4, 5, 248, 227, 4, 6, 255, 255, 4, 7, 187, 255, 4, 9, 187, 0, 5, 6, 221, 0, 5, 7, 255, 0, 5, 8, 187, 0], "secondary": false }, { "width": 7, "bonus": 105, "chr": "7", "pixels": [0, 1, 187, 255, 1, 1, 187, 255, 1, 2, 187, 0, 1, 8, 203, 255, 2, 1, 187, 255, 2, 2, 187, 0, 2, 6, 237, 255, 2, 7, 153, 255, 2, 9, 204, 0, 3, 1, 187, 255, 3, 2, 205, 85, 3, 3, 153, 255, 3, 4, 221, 255, 3, 7, 238, 0, 3, 8, 153, 0, 4, 1, 255, 255, 4, 2, 237, 201, 4, 4, 153, 0, 4, 5, 221, 0, 5, 2, 255, 0, 5, 3, 187, 0], "secondary": false }, { "width": 7, "bonus": 165, "chr": "8", "pixels": [1, 2, 237, 255, 1, 3, 221, 255, 1, 6, 203, 255, 1, 7, 228, 247, 2, 1, 203, 255, 2, 3, 241, 54, 2, 4, 248, 209, 2, 5, 186, 233, 2, 7, 207, 21, 2, 8, 250, 226, 3, 1, 187, 255, 3, 2, 204, 0, 3, 4, 186, 233, 3, 5, 221, 98, 3, 6, 170, 0, 3, 8, 191, 250, 3, 9, 221, 0, 4, 1, 221, 255, 4, 2, 209, 104, 4, 4, 169, 255, 4, 5, 237, 219, 4, 8, 187, 255, 4, 9, 187, 0, 5, 2, 243, 178, 5, 3, 187, 209, 5, 5, 204, 128, 5, 6, 251, 242, 5, 7, 240, 253, 5, 9, 187, 0, 6, 3, 170, 0, 6, 4, 153, 0, 6, 7, 238, 0, 6, 8, 238, 0], "secondary": false }, { "width": 7, "bonus": 160, "chr": "9", "pixels": [1, 2, 221, 255, 1, 3, 191, 250, 1, 4, 242, 251, 1, 8, 153, 255, 2, 1, 203, 255, 2, 3, 221, 0, 2, 4, 191, 23, 2, 5, 253, 223, 2, 8, 191, 250, 2, 9, 153, 0, 3, 1, 187, 255, 3, 2, 204, 0, 3, 5, 191, 250, 3, 6, 221, 0, 3, 8, 203, 255, 3, 9, 187, 0, 4, 1, 187, 255, 4, 2, 218, 139, 4, 6, 200, 65, 4, 7, 169, 255, 4, 9, 204, 0, 5, 2, 228, 171, 5, 3, 245, 247, 5, 4, 255, 255, 5, 5, 255, 255, 5, 6, 223, 214, 5, 8, 170, 0, 6, 3, 153, 0, 6, 4, 238, 0, 6, 5, 255, 0, 6, 6, 255, 0, 6, 7, 187, 0], "secondary": false }, { "width": 8, "bonus": 130, "chr": "%", "pixels": [0, 3, 255, 255, 0, 8, 255, 255, 1, 2, 255, 255, 1, 4, 255, 255, 1, 7, 255, 255, 1, 9, 255, 0, 2, 3, 255, 255, 2, 5, 255, 41, 2, 6, 255, 255, 2, 8, 255, 0, 3, 4, 255, 41, 3, 5, 255, 255, 3, 7, 255, 0, 4, 4, 255, 255, 4, 6, 255, 92, 4, 7, 255, 255, 5, 3, 255, 255, 5, 5, 255, 0, 5, 6, 255, 255, 5, 8, 255, 255, 6, 2, 255, 255, 6, 4, 255, 0, 6, 7, 255, 255, 6, 9, 255, 0, 7, 3, 255, 0, 7, 8, 255, 0], "secondary": false }, { "width": 4, "bonus": 80, "chr": "/", "pixels": [0, 7, 153, 255, 0, 8, 237, 255, 0, 9, 221, 255, 1, 4, 187, 255, 1, 5, 237, 255, 1, 6, 169, 255, 1, 8, 153, 0, 1, 9, 238, 0, 1, 10, 221, 0, 2, 1, 221, 255, 2, 2, 221, 255, 2, 5, 187, 0, 2, 6, 238, 0, 2, 7, 170, 0, 3, 2, 221, 0, 3, 3, 221, 0], "secondary": false }, { "width": 7, "bonus": 110, "chr": "+", "pixels": [0, 5, 221, 255, 1, 5, 255, 255, 1, 6, 221, 0, 2, 5, 255, 255, 2, 6, 255, 34, 3, 2, 153, 255, 3, 3, 223, 253, 3, 4, 225, 251, 3, 5, 255, 255, 3, 6, 255, 221, 3, 7, 225, 251, 3, 8, 210, 247, 4, 3, 153, 0, 4, 4, 221, 0, 4, 5, 255, 255, 4, 6, 255, 0, 4, 7, 221, 0, 4, 8, 221, 0, 4, 9, 204, 0, 5, 5, 255, 255, 5, 6, 255, 0, 6, 6, 255, 0], "secondary": false }, { "width": 5, "bonus": 75, "chr": "?", "pixels": [0, 1, 169, 255, 1, 1, 255, 255, 1, 2, 170, 0, 1, 6, 221, 255, 1, 8, 255, 255, 2, 1, 255, 255, 2, 2, 255, 0, 2, 5, 169, 255, 2, 7, 221, 0, 2, 9, 255, 0, 3, 2, 255, 255, 3, 3, 221, 255, 3, 6, 170, 0, 4, 3, 255, 17, 4, 4, 221, 0], "secondary": false }, { "width": 2, "bonus": 70, "chr": "!", "pixels": [0, 1, 169, 255, 0, 2, 187, 255, 0, 3, 187, 255, 0, 4, 187, 255, 0, 5, 187, 255, 0, 6, 169, 255, 0, 8, 255, 255, 1, 2, 181, 48, 1, 3, 196, 45, 1, 4, 196, 45, 1, 5, 196, 45, 1, 6, 196, 45, 1, 7, 170, 0, 1, 9, 255, 0], "secondary": false }, { "width": 8, "bonus": 230, "chr": "@", "pixels": [0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 221, 255, 0, 7, 255, 255, 0, 8, 187, 255, 1, 3, 221, 255, 1, 5, 255, 0, 1, 6, 255, 34, 1, 7, 221, 0, 1, 8, 255, 68, 1, 9, 250, 243, 2, 2, 221, 255, 2, 4, 232, 93, 2, 5, 255, 255, 2, 6, 237, 255, 2, 7, 255, 255, 2, 10, 248, 157, 3, 2, 255, 255, 3, 3, 221, 0, 3, 4, 255, 255, 3, 6, 255, 0, 3, 7, 241, 54, 3, 8, 254, 204, 3, 10, 214, 223, 3, 11, 153, 0, 4, 2, 237, 255, 4, 3, 255, 0, 4, 4, 255, 255, 4, 5, 255, 0, 4, 8, 255, 255, 4, 9, 204, 0, 4, 11, 187, 0, 5, 3, 253, 240, 5, 4, 255, 255, 5, 5, 255, 221, 5, 6, 221, 255, 5, 7, 221, 255, 5, 8, 237, 255, 5, 9, 255, 0, 6, 4, 240, 36, 6, 5, 255, 34, 6, 6, 226, 39, 6, 7, 226, 39, 6, 8, 250, 226, 6, 9, 238, 0, 7, 9, 221, 0], "secondary": false }, { "width": 8, "bonus": 200, "chr": "#", "pixels": [0, 6, 255, 255, 1, 3, 255, 255, 1, 6, 255, 255, 1, 7, 254, 171, 1, 8, 237, 255, 2, 1, 169, 255, 2, 2, 237, 255, 2, 3, 255, 255, 2, 4, 255, 221, 2, 5, 175, 247, 2, 6, 255, 255, 2, 7, 255, 85, 2, 8, 170, 0, 2, 9, 238, 0, 3, 2, 170, 0, 3, 3, 255, 255, 3, 4, 255, 0, 3, 5, 221, 0, 3, 6, 255, 255, 3, 7, 255, 0, 4, 3, 255, 255, 4, 4, 255, 153, 4, 5, 203, 255, 4, 6, 255, 255, 4, 7, 254, 239, 4, 8, 187, 255, 5, 1, 255, 255, 5, 2, 187, 255, 5, 3, 255, 255, 5, 4, 255, 85, 5, 5, 159, 27, 5, 6, 255, 255, 5, 7, 255, 0, 5, 8, 238, 0, 5, 9, 187, 0, 6, 2, 255, 0, 6, 3, 255, 255, 6, 4, 255, 0, 6, 7, 255, 0, 7, 4, 255, 0], "secondary": false }, { "width": 6, "bonus": 130, "chr": "$", "pixels": [0, 2, 153, 255, 0, 3, 169, 255, 1, 1, 203, 255, 1, 3, 187, 116, 1, 4, 244, 231, 1, 8, 243, 249, 2, 0, 203, 255, 2, 1, 237, 255, 2, 2, 204, 0, 2, 4, 176, 197, 2, 5, 237, 128, 2, 8, 240, 253, 2, 9, 251, 207, 3, 1, 251, 242, 3, 2, 239, 18, 3, 5, 247, 245, 3, 6, 164, 132, 3, 8, 255, 255, 3, 9, 240, 36, 3, 10, 204, 0, 4, 2, 240, 36, 4, 6, 249, 174, 4, 7, 198, 219, 4, 9, 255, 0, 5, 7, 170, 0, 5, 8, 170, 0], "secondary": false }, { "width": 6, "bonus": 75, "chr": "^", "pixels": [0, 4, 153, 255, 0, 5, 237, 255, 1, 2, 203, 255, 1, 3, 221, 255, 1, 5, 153, 0, 1, 6, 238, 0, 2, 1, 221, 255, 2, 2, 230, 245, 2, 3, 218, 80, 2, 4, 221, 0, 3, 2, 227, 57, 3, 3, 246, 194, 3, 4, 230, 245, 4, 4, 187, 0, 4, 5, 239, 145], "secondary": false }, { "width": 6, "bonus": 35, "chr": "~", "pixels": [1, 5, 255, 255, 2, 5, 221, 255, 2, 6, 255, 51, 3, 6, 250, 226, 4, 5, 203, 255, 4, 7, 221, 0, 5, 6, 204, 0], "secondary": false }, { "width": 7, "bonus": 175, "chr": "&", "pixels": [0, 6, 187, 255, 1, 2, 237, 255, 1, 3, 255, 255, 1, 4, 191, 250, 1, 5, 187, 255, 1, 7, 224, 155, 1, 8, 223, 214, 2, 1, 255, 255, 2, 3, 238, 0, 2, 4, 255, 255, 2, 5, 191, 23, 2, 6, 187, 0, 2, 8, 255, 255, 2, 9, 187, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 4, 255, 255, 3, 5, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 2, 255, 0, 4, 4, 255, 255, 4, 5, 255, 34, 4, 8, 187, 255, 4, 9, 255, 0, 5, 3, 203, 255, 5, 4, 255, 255, 5, 5, 255, 221, 5, 6, 196, 243, 5, 7, 155, 196, 5, 9, 187, 0, 6, 4, 234, 167, 6, 5, 255, 0, 6, 6, 221, 0, 6, 7, 187, 0], "secondary": false }, { "width": 6, "bonus": 70, "chr": "*", "pixels": [0, 2, 169, 255, 1, 2, 169, 255, 1, 3, 237, 219, 1, 4, 255, 255, 2, 1, 203, 255, 2, 2, 240, 253, 2, 3, 255, 255, 2, 4, 228, 133, 2, 5, 255, 0, 3, 2, 237, 183, 3, 3, 245, 107, 3, 4, 255, 153, 4, 3, 170, 0, 4, 5, 153, 0], "secondary": false }, { "width": 4, "bonus": 100, "chr": "(", "pixels": [0, 3, 173, 255, 0, 4, 239, 255, 0, 5, 253, 255, 0, 6, 229, 255, 0, 7, 171, 255, 1, 1, 193, 255, 1, 2, 203, 255, 1, 4, 188, 64, 1, 5, 241, 25, 1, 6, 252, 46, 1, 7, 240, 112, 1, 8, 238, 218, 1, 9, 210, 232, 2, 0, 209, 255, 2, 2, 194, 2, 2, 3, 204, 0, 2, 9, 223, 111, 2, 10, 245, 224, 3, 1, 210, 0, 3, 11, 216, 0], "secondary": false }, { "width": 4, "bonus": 75, "chr": ")", "pixels": [1, 0, 211, 255, 1, 10, 215, 255, 2, 1, 244, 203, 2, 2, 222, 234, 2, 8, 203, 255, 2, 9, 191, 255, 2, 11, 216, 0, 3, 2, 213, 94, 3, 3, 238, 186, 3, 4, 246, 248, 3, 5, 253, 255, 3, 6, 231, 253, 3, 7, 186, 234, 3, 9, 203, 1, 3, 10, 191, 0], "secondary": false }, { "width": 7, "bonus": 60, "chr": "_", "pixels": [0, 9, 153, 255, 1, 9, 255, 255, 1, 10, 153, 0, 2, 9, 255, 255, 2, 10, 255, 0, 3, 9, 255, 255, 3, 10, 255, 0, 4, 9, 255, 255, 4, 10, 255, 0, 5, 9, 255, 255, 5, 10, 255, 0, 6, 10, 255, 0], "secondary": false }, { "width": 4, "bonus": 30, "chr": "-", "pixels": [0, 5, 255, 255, 1, 5, 255, 255, 1, 6, 255, 0, 2, 5, 255, 255, 2, 6, 255, 0, 3, 6, 255, 0], "secondary": true }, { "width": 8, "bonus": 100, "chr": "=", "pixels": [0, 4, 255, 255, 0, 6, 255, 255, 1, 4, 255, 255, 1, 5, 255, 0, 1, 6, 255, 255, 1, 7, 255, 0, 2, 4, 255, 255, 2, 5, 255, 0, 2, 6, 255, 255, 2, 7, 255, 0, 3, 4, 255, 255, 3, 5, 255, 0, 3, 6, 255, 255, 3, 7, 255, 0, 4, 4, 255, 255, 4, 5, 255, 0, 4, 6, 255, 255, 4, 7, 255, 0, 5, 5, 255, 0, 5, 7, 255, 0], "secondary": false }, { "width": 3, "bonus": 105, "chr": "[", "pixels": [0, 0, 203, 255, 0, 1, 221, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 203, 255, 1, 0, 237, 255, 1, 1, 211, 41, 1, 2, 226, 39, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 226, 39, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 252, 241, 1, 9, 204, 0, 2, 1, 238, 0, 2, 9, 238, 0], "secondary": false }, { "width": 3, "bonus": 105, "chr": "]", "pixels": [0, 0, 237, 255, 0, 8, 237, 255, 1, 0, 203, 255, 1, 1, 253, 223, 1, 2, 225, 251, 1, 3, 225, 251, 1, 4, 225, 251, 1, 5, 225, 251, 1, 6, 225, 251, 1, 7, 225, 251, 1, 8, 210, 247, 1, 9, 238, 0, 2, 1, 204, 0, 2, 2, 221, 0, 2, 3, 221, 0, 2, 4, 221, 0, 2, 5, 221, 0, 2, 6, 221, 0, 2, 7, 221, 0, 2, 8, 221, 0, 2, 9, 204, 0], "secondary": false }, { "width": 5, "bonus": 90, "chr": "{", "pixels": [0, 5, 153, 255, 1, 2, 169, 255, 1, 3, 221, 255, 1, 4, 221, 255, 1, 5, 203, 255, 1, 6, 255, 255, 1, 7, 221, 255, 1, 8, 169, 255, 2, 1, 237, 255, 2, 3, 181, 48, 2, 4, 223, 19, 2, 5, 221, 0, 2, 6, 207, 21, 2, 7, 255, 34, 2, 8, 232, 93, 2, 9, 249, 243, 3, 2, 238, 0, 3, 10, 238, 0], "secondary": false }, { "width": 5, "bonus": 90, "chr": "}", "pixels": [1, 1, 237, 255, 1, 9, 237, 255, 2, 2, 249, 174, 2, 3, 232, 243, 2, 4, 225, 251, 2, 5, 207, 251, 2, 6, 255, 255, 2, 7, 223, 253, 2, 8, 181, 239, 2, 10, 238, 0, 3, 3, 170, 0, 3, 4, 221, 0, 3, 5, 241, 162, 3, 6, 204, 0, 3, 7, 255, 0, 3, 8, 221, 0, 3, 9, 170, 0, 4, 6, 153, 0], "secondary": false }, { "width": 3, "bonus": 20, "chr": ":", "pixels": [1, 3, 255, 255, 1, 7, 255, 255, 2, 4, 255, 0, 2, 8, 255, 0], "secondary": true }, { "width": 3, "bonus": 40, "chr": ";", "pixels": [0, 9, 201, 255, 1, 3, 255, 255, 1, 7, 241, 255, 1, 8, 255, 255, 1, 10, 201, 0, 2, 4, 255, 0, 2, 8, 241, 0, 2, 9, 255, 0], "secondary": true }, { "width": 3, "bonus": 30, "chr": '"', "pixels": [0, 1, 255, 255, 0, 2, 255, 255, 1, 2, 255, 0, 1, 3, 255, 0, 2, 1, 255, 255, 2, 2, 255, 255], "secondary": true }, { "width": 2, "bonus": 20, "chr": "'", "pixels": [0, 1, 255, 255, 0, 2, 177, 255, 1, 2, 255, 30, 1, 3, 177, 0], "secondary": true }, { "width": 7, "bonus": 70, "chr": "<", "pixels": [0, 5, 203, 255, 1, 5, 255, 255, 1, 6, 228, 133, 2, 4, 237, 255, 2, 6, 254, 239, 3, 4, 169, 255, 3, 5, 238, 0, 3, 6, 175, 247, 3, 7, 243, 89, 4, 3, 221, 255, 4, 5, 170, 0, 4, 7, 244, 231, 5, 4, 221, 0, 5, 8, 221, 0], "secondary": false }, { "width": 7, "bonus": 80, "chr": ">", "pixels": [0, 3, 203, 255, 0, 7, 203, 255, 1, 4, 228, 133, 1, 7, 187, 255, 1, 8, 204, 0, 2, 4, 247, 245, 2, 6, 255, 255, 2, 8, 187, 0, 3, 4, 175, 247, 3, 5, 248, 157, 3, 6, 203, 255, 3, 7, 255, 0, 4, 5, 255, 255, 4, 6, 173, 75, 4, 7, 204, 0, 5, 6, 255, 0], "secondary": false }, { "width": 5, "bonus": 70, "chr": "\\", "pixels": [1, 1, 153, 255, 1, 2, 255, 255, 1, 3, 203, 255, 2, 2, 153, 0, 2, 3, 255, 51, 2, 4, 231, 150, 2, 5, 255, 255, 2, 6, 203, 255, 3, 6, 255, 34, 3, 7, 231, 150, 3, 8, 255, 255, 3, 9, 207, 251, 4, 9, 255, 0, 4, 10, 204, 0], "secondary": false }, { "width": 2, "bonus": 10, "chr": ".", "pixels": [0, 8, 255, 255, 1, 9, 255, 0], "secondary": true }, { "width": 3, "bonus": 30, "chr": ",", "pixels": [0, 9, 205, 255, 1, 7, 205, 255, 1, 8, 255, 255, 1, 10, 205, 0, 2, 8, 205, 0, 2, 9, 255, 0], "secondary": true }, { "width": 3, "bonus": 100, "chr": "|", "pixels": [0, 1, 221, 255, 0, 2, 221, 255, 0, 3, 221, 255, 0, 4, 221, 255, 0, 5, 221, 255, 0, 6, 221, 255, 0, 7, 221, 255, 0, 8, 221, 255, 0, 9, 221, 255, 0, 10, 203, 255, 1, 2, 226, 39, 1, 3, 226, 39, 1, 4, 226, 39, 1, 5, 226, 39, 1, 6, 226, 39, 1, 7, 226, 39, 1, 8, 226, 39, 1, 9, 226, 39, 1, 10, 226, 39, 1, 11, 204, 0], "secondary": false }], "width": 10, "spacewidth": 3, "shadow": true, "height": 12, "basey": 8 };
              })
            ),
            /***/
            0: (
              /***/
              (function(module2, exports2, __webpack_require__) {
                module2.exports = __webpack_require__("./fonts/aa_8px_new.fontmeta.json");
              })
            )
            /******/
          })
        );
      });
    }
  });

  // node_modules/@alt1/ocr/dist/fonts/chat_13px.js
  var require_chat_13px = __commonJS({
    "node_modules/@alt1/ocr/dist/fonts/chat_13px.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["chat_13px"] = factory();
        else
          root["OCR_chat_13px"] = factory();
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
            "./fonts/chat_13px.fontmeta.json": (
              /***/
              (function(module2, exports2) {
                module2.exports = { "chars": [{ "width": 10, "bonus": 280, "chr": "a", "pixels": [0, 11, 221, 255, 0, 12, 237, 255, 0, 13, 169, 255, 1, 7, 221, 255, 1, 10, 255, 255, 1, 11, 198, 219, 1, 12, 239, 145, 1, 13, 253, 240, 1, 14, 216, 161, 2, 6, 203, 255, 2, 7, 184, 189, 2, 8, 221, 0, 2, 9, 153, 255, 2, 10, 200, 238, 2, 11, 255, 0, 2, 12, 170, 0, 2, 13, 184, 142, 2, 14, 253, 240, 3, 6, 255, 255, 3, 7, 225, 116, 3, 9, 221, 255, 3, 10, 194, 135, 3, 11, 187, 0, 3, 14, 244, 248, 3, 15, 238, 0, 4, 6, 255, 255, 4, 7, 255, 102, 4, 9, 255, 255, 4, 10, 230, 75, 4, 13, 153, 255, 4, 14, 192, 225, 4, 15, 238, 0, 5, 6, 187, 255, 5, 7, 255, 187, 5, 9, 255, 255, 5, 10, 255, 68, 5, 12, 153, 255, 5, 13, 237, 255, 5, 14, 167, 52, 5, 15, 170, 0, 6, 7, 250, 243, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 255, 255, 6, 12, 255, 255, 6, 13, 248, 244, 6, 14, 253, 223, 7, 8, 246, 123, 7, 9, 255, 119, 7, 10, 255, 119, 7, 11, 255, 119, 7, 12, 255, 119, 7, 13, 255, 119, 7, 14, 246, 123, 7, 15, 221, 0], "secondary": false }, { "width": 11, "bonus": 320, "chr": "b", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 3, 255, 119, 1, 4, 255, 119, 1, 5, 255, 119, 1, 6, 255, 136, 1, 7, 254, 239, 1, 8, 254, 239, 1, 9, 255, 136, 1, 10, 255, 119, 1, 11, 255, 153, 1, 12, 254, 239, 1, 13, 254, 239, 1, 14, 255, 119, 1, 15, 255, 0, 2, 6, 182, 167, 2, 7, 239, 236, 2, 8, 239, 18, 2, 9, 238, 0, 2, 12, 159, 27, 2, 13, 253, 223, 2, 14, 246, 123, 3, 6, 221, 255, 3, 7, 182, 167, 3, 8, 221, 0, 3, 14, 250, 226, 4, 6, 255, 255, 4, 7, 235, 111, 4, 14, 255, 255, 4, 15, 221, 0, 5, 6, 221, 255, 5, 7, 254, 171, 5, 13, 169, 255, 5, 14, 224, 232, 5, 15, 255, 0, 6, 7, 255, 255, 6, 8, 216, 161, 6, 13, 255, 255, 6, 14, 198, 109, 6, 15, 204, 0, 7, 7, 184, 189, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 255, 255, 7, 13, 184, 142, 7, 14, 255, 0, 8, 9, 255, 102, 8, 10, 255, 119, 8, 11, 255, 102, 8, 12, 255, 17, 8, 13, 255, 0], "secondary": false }, { "width": 11, "bonus": 215, "chr": "c", "pixels": [0, 9, 221, 255, 0, 10, 255, 255, 0, 11, 221, 255, 1, 7, 169, 255, 1, 8, 255, 255, 1, 9, 209, 207, 1, 10, 237, 128, 1, 11, 254, 171, 1, 12, 255, 255, 1, 13, 219, 218, 2, 7, 255, 255, 2, 8, 193, 90, 2, 9, 255, 0, 2, 10, 170, 0, 2, 12, 193, 90, 2, 13, 255, 255, 2, 14, 214, 122, 3, 6, 203, 255, 3, 7, 194, 201, 3, 8, 255, 0, 3, 13, 192, 225, 3, 14, 254, 204, 4, 6, 255, 255, 4, 7, 225, 116, 4, 8, 153, 0, 4, 14, 255, 255, 4, 15, 204, 0, 5, 6, 237, 255, 5, 7, 255, 102, 5, 14, 244, 248, 5, 15, 255, 0, 6, 6, 187, 255, 6, 7, 250, 191, 6, 13, 169, 255, 6, 14, 214, 223, 6, 15, 238, 0, 7, 7, 255, 255, 7, 8, 196, 45, 7, 13, 255, 255, 7, 14, 193, 90, 7, 15, 187, 0, 8, 8, 255, 0, 8, 14, 255, 0], "secondary": false }, { "width": 11, "bonus": 315, "chr": "d", "pixels": [1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 2, 7, 255, 255, 2, 8, 192, 181, 2, 9, 255, 34, 2, 10, 255, 0, 2, 11, 255, 34, 2, 12, 255, 136, 2, 13, 255, 255, 2, 14, 184, 142, 3, 6, 203, 255, 3, 7, 198, 219, 3, 8, 255, 0, 3, 13, 215, 201, 3, 14, 255, 221, 4, 6, 255, 255, 4, 7, 225, 116, 4, 8, 170, 0, 4, 14, 255, 255, 4, 15, 221, 0, 5, 6, 221, 255, 5, 7, 255, 119, 5, 14, 235, 240, 5, 15, 255, 0, 6, 7, 250, 226, 6, 13, 221, 255, 6, 14, 182, 167, 6, 15, 221, 0, 7, 7, 245, 247, 7, 8, 252, 241, 7, 9, 160, 244, 7, 12, 237, 255, 7, 13, 239, 254, 7, 14, 237, 128, 8, 2, 255, 255, 8, 3, 255, 255, 8, 4, 255, 255, 8, 5, 255, 255, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 255, 255, 8, 9, 255, 255, 8, 10, 255, 255, 8, 11, 255, 255, 8, 12, 255, 255, 8, 13, 255, 255, 8, 14, 255, 255, 9, 3, 255, 0, 9, 4, 255, 0, 9, 5, 255, 0, 9, 6, 255, 0, 9, 7, 255, 0, 9, 8, 255, 0, 9, 9, 255, 0, 9, 10, 255, 0, 9, 11, 255, 0, 9, 12, 255, 0, 9, 13, 255, 0, 9, 14, 255, 0, 9, 15, 255, 0], "secondary": false }, { "width": 11, "bonus": 285, "chr": "e", "pixels": [0, 9, 203, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 7, 187, 255, 1, 8, 255, 255, 1, 9, 219, 218, 1, 10, 255, 255, 1, 11, 255, 153, 1, 12, 253, 240, 1, 13, 223, 214, 2, 7, 221, 255, 2, 8, 196, 45, 2, 9, 255, 68, 2, 10, 255, 255, 2, 11, 255, 0, 2, 12, 167, 52, 2, 13, 253, 240, 2, 14, 218, 139, 3, 6, 203, 255, 3, 7, 182, 167, 3, 8, 221, 0, 3, 10, 255, 255, 3, 11, 255, 0, 3, 13, 166, 235, 3, 14, 251, 207, 4, 6, 255, 255, 4, 7, 218, 80, 4, 10, 255, 255, 4, 11, 255, 0, 4, 14, 255, 255, 4, 15, 204, 0, 5, 6, 221, 255, 5, 7, 255, 119, 5, 10, 255, 255, 5, 11, 255, 0, 5, 14, 244, 248, 5, 15, 255, 0, 6, 7, 252, 241, 6, 8, 164, 132, 6, 10, 255, 255, 6, 11, 255, 0, 6, 13, 169, 255, 6, 14, 214, 223, 6, 15, 238, 0, 7, 7, 200, 195, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 0, 7, 13, 255, 255, 7, 14, 193, 90, 7, 15, 187, 0, 8, 8, 167, 52, 8, 9, 255, 102, 8, 10, 255, 119, 8, 11, 255, 0, 8, 14, 255, 0], "secondary": false }, { "width": 7, "bonus": 180, "chr": "f", "pixels": [0, 6, 255, 255, 1, 4, 221, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 255, 255, 2, 3, 255, 255, 2, 4, 200, 174, 2, 5, 235, 111, 2, 6, 255, 255, 2, 7, 255, 136, 2, 8, 255, 102, 2, 9, 255, 102, 2, 10, 255, 102, 2, 11, 255, 102, 2, 12, 255, 102, 2, 13, 255, 102, 2, 14, 255, 85, 2, 15, 255, 0, 3, 2, 237, 255, 3, 3, 191, 159, 3, 4, 255, 0, 3, 6, 255, 255, 3, 7, 255, 68, 4, 2, 187, 255, 4, 3, 243, 71, 4, 6, 153, 255, 4, 7, 255, 34, 5, 3, 187, 0, 5, 7, 153, 0], "secondary": false }, { "width": 11, "bonus": 360, "chr": "g", "pixels": [1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 2, 7, 255, 255, 2, 8, 191, 159, 2, 9, 255, 17, 2, 10, 255, 0, 2, 11, 255, 34, 2, 12, 255, 153, 2, 13, 255, 255, 2, 14, 153, 141, 2, 17, 187, 255, 2, 18, 203, 213, 3, 6, 221, 255, 3, 7, 203, 213, 3, 8, 255, 0, 3, 13, 228, 209, 3, 14, 254, 204, 3, 18, 250, 243, 4, 6, 255, 255, 4, 7, 235, 111, 4, 8, 170, 0, 4, 14, 255, 255, 4, 15, 204, 0, 4, 18, 255, 255, 5, 6, 237, 255, 5, 7, 255, 119, 5, 14, 244, 248, 5, 15, 255, 0, 5, 18, 235, 240, 6, 6, 153, 255, 6, 7, 251, 207, 6, 13, 203, 255, 6, 14, 184, 189, 6, 15, 238, 0, 6, 17, 237, 255, 6, 18, 200, 195, 7, 7, 255, 255, 7, 8, 248, 227, 7, 12, 237, 255, 7, 13, 239, 254, 7, 14, 231, 150, 7, 15, 200, 174, 7, 16, 237, 255, 7, 17, 239, 254, 7, 18, 240, 36, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 255, 255, 8, 9, 255, 255, 8, 10, 255, 255, 8, 11, 255, 255, 8, 12, 255, 255, 8, 13, 255, 255, 8, 14, 255, 255, 8, 15, 247, 245, 8, 16, 215, 201, 8, 17, 240, 36, 8, 18, 238, 0, 9, 7, 255, 0, 9, 8, 255, 0, 9, 9, 255, 0, 9, 10, 255, 0, 9, 11, 255, 0, 9, 12, 255, 0, 9, 13, 255, 0, 9, 14, 255, 0, 9, 15, 255, 0, 9, 16, 238, 0, 9, 17, 170, 0], "secondary": false }, { "width": 10, "bonus": 285, "chr": "h", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 3, 255, 119, 1, 4, 255, 119, 1, 5, 255, 119, 1, 6, 255, 119, 1, 7, 255, 187, 1, 8, 255, 255, 1, 9, 255, 187, 1, 10, 255, 119, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 255, 119, 1, 14, 255, 119, 1, 15, 255, 0, 2, 7, 255, 255, 2, 8, 205, 85, 2, 9, 255, 0, 2, 10, 187, 0, 3, 6, 187, 255, 3, 7, 173, 226, 3, 8, 255, 0, 4, 6, 255, 255, 4, 7, 214, 122, 4, 8, 153, 0, 5, 6, 237, 255, 5, 7, 255, 119, 6, 6, 153, 255, 6, 7, 255, 255, 6, 8, 200, 195, 7, 7, 214, 182, 7, 8, 254, 239, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 255, 255, 7, 13, 255, 255, 7, 14, 255, 255, 8, 8, 153, 0, 8, 9, 238, 0, 8, 10, 255, 0, 8, 11, 255, 0, 8, 12, 255, 0, 8, 13, 255, 0, 8, 14, 255, 0, 8, 15, 255, 0], "secondary": false }, { "width": 4, "bonus": 110, "chr": "i", "pixels": [1, 2, 255, 255, 1, 3, 219, 218, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 255, 255, 2, 3, 255, 0, 2, 4, 187, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0, 2, 13, 255, 0, 2, 14, 255, 0, 2, 15, 255, 0], "secondary": false }, { "width": 6, "bonus": 170, "chr": "j", "pixels": [0, 18, 237, 255, 1, 17, 153, 255, 1, 18, 232, 243, 2, 16, 169, 255, 2, 17, 255, 255, 2, 18, 208, 167, 3, 2, 255, 255, 3, 3, 219, 218, 3, 6, 255, 255, 3, 7, 255, 255, 3, 8, 255, 255, 3, 9, 255, 255, 3, 10, 255, 255, 3, 11, 255, 255, 3, 12, 255, 255, 3, 13, 255, 255, 3, 14, 255, 255, 3, 15, 255, 255, 3, 16, 237, 238, 3, 17, 209, 145, 3, 18, 255, 0, 4, 3, 255, 0, 4, 4, 187, 0, 4, 7, 255, 0, 4, 8, 255, 0, 4, 9, 255, 0, 4, 10, 255, 0, 4, 11, 255, 0, 4, 12, 255, 0, 4, 13, 255, 0, 4, 14, 255, 0, 4, 15, 255, 0, 4, 16, 255, 0, 4, 17, 221, 0], "secondary": false }, { "width": 10, "bonus": 265, "chr": "k", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 3, 255, 119, 1, 4, 255, 119, 1, 5, 255, 119, 1, 6, 255, 119, 1, 7, 255, 119, 1, 8, 255, 119, 1, 9, 255, 255, 1, 10, 255, 153, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 255, 119, 1, 14, 255, 119, 1, 15, 255, 0, 2, 9, 255, 255, 2, 10, 255, 68, 2, 11, 153, 0, 3, 8, 187, 255, 3, 9, 255, 255, 3, 10, 254, 239, 4, 7, 203, 255, 4, 8, 223, 253, 4, 9, 200, 65, 4, 10, 255, 136, 4, 11, 255, 255, 4, 12, 224, 232, 5, 6, 221, 255, 5, 7, 207, 251, 5, 8, 207, 21, 5, 9, 221, 0, 5, 11, 159, 82, 5, 12, 255, 221, 5, 13, 255, 255, 5, 14, 160, 217, 6, 6, 187, 255, 6, 7, 223, 19, 6, 8, 204, 0, 6, 13, 239, 145, 6, 14, 255, 255, 7, 7, 187, 0, 7, 15, 255, 0], "secondary": false }, { "width": 6, "bonus": 140, "chr": "l", "pixels": [1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 203, 213, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0, 2, 13, 255, 136, 2, 14, 255, 255, 2, 15, 170, 0, 3, 14, 168, 103, 3, 15, 255, 0], "secondary": false }, { "width": 16, "bonus": 390, "chr": "m", "pixels": [0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 7, 255, 187, 1, 8, 255, 255, 1, 9, 255, 187, 1, 10, 255, 119, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 255, 119, 1, 14, 255, 119, 1, 15, 255, 0, 2, 7, 245, 247, 2, 8, 205, 85, 2, 9, 255, 0, 2, 10, 187, 0, 3, 6, 187, 255, 3, 7, 173, 226, 3, 8, 238, 0, 4, 6, 255, 255, 4, 7, 214, 122, 4, 8, 153, 0, 5, 6, 237, 255, 5, 7, 255, 136, 6, 6, 153, 255, 6, 7, 255, 255, 6, 8, 215, 201, 7, 7, 214, 182, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 255, 255, 7, 13, 255, 255, 7, 14, 255, 255, 8, 7, 221, 255, 8, 8, 220, 197, 8, 9, 255, 51, 8, 10, 255, 0, 8, 11, 255, 0, 8, 12, 255, 0, 8, 13, 255, 0, 8, 14, 255, 0, 8, 15, 255, 0, 9, 6, 153, 255, 9, 7, 191, 250, 9, 8, 221, 0, 9, 9, 170, 0, 10, 6, 237, 255, 10, 7, 194, 135, 10, 8, 187, 0, 11, 6, 237, 255, 11, 7, 246, 123, 12, 6, 153, 255, 12, 7, 255, 255, 12, 8, 200, 195, 13, 7, 214, 182, 13, 8, 254, 239, 13, 9, 255, 255, 13, 10, 255, 255, 13, 11, 255, 255, 13, 12, 255, 255, 13, 13, 255, 255, 13, 14, 255, 255, 14, 8, 153, 0, 14, 9, 238, 0, 14, 10, 255, 0, 14, 11, 255, 0, 14, 12, 255, 0, 14, 13, 255, 0, 14, 14, 255, 0, 14, 15, 255, 0], "secondary": false }, { "width": 10, "bonus": 245, "chr": "n", "pixels": [0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 7, 255, 187, 1, 8, 255, 255, 1, 9, 255, 187, 1, 10, 255, 119, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 255, 119, 1, 14, 255, 119, 1, 15, 255, 0, 2, 7, 255, 255, 2, 8, 205, 85, 2, 9, 255, 0, 2, 10, 187, 0, 3, 6, 187, 255, 3, 7, 180, 217, 3, 8, 255, 0, 4, 6, 255, 255, 4, 7, 214, 122, 4, 8, 153, 0, 5, 6, 237, 255, 5, 7, 255, 119, 6, 6, 153, 255, 6, 7, 255, 255, 6, 8, 200, 195, 7, 7, 214, 182, 7, 8, 254, 239, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 255, 255, 7, 13, 255, 255, 7, 14, 255, 255, 8, 8, 153, 0, 8, 9, 238, 0, 8, 10, 255, 0, 8, 11, 255, 0, 8, 12, 255, 0, 8, 13, 255, 0, 8, 14, 255, 0, 8, 15, 255, 0], "secondary": false }, { "width": 13, "bonus": 270, "chr": "o", "pixels": [1, 8, 237, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 232, 243, 2, 7, 237, 255, 2, 8, 205, 233, 2, 9, 240, 36, 2, 10, 255, 0, 2, 11, 255, 51, 2, 12, 255, 187, 2, 13, 252, 241, 3, 6, 153, 255, 3, 7, 225, 251, 3, 8, 238, 0, 3, 9, 187, 0, 3, 13, 246, 229, 3, 14, 248, 157, 4, 6, 221, 255, 4, 7, 200, 152, 4, 8, 221, 0, 4, 14, 250, 226, 4, 15, 153, 0, 5, 6, 255, 255, 5, 7, 235, 111, 5, 14, 255, 255, 5, 15, 221, 0, 6, 6, 221, 255, 6, 7, 255, 119, 6, 14, 235, 240, 6, 15, 255, 0, 7, 6, 153, 255, 7, 7, 250, 226, 7, 13, 221, 255, 7, 14, 200, 195, 7, 15, 221, 0, 8, 7, 248, 244, 8, 8, 246, 194, 8, 12, 187, 255, 8, 13, 239, 254, 8, 14, 226, 39, 8, 15, 153, 0, 9, 8, 253, 240, 9, 9, 255, 255, 9, 10, 255, 255, 9, 11, 255, 255, 9, 12, 228, 247, 9, 13, 200, 65, 9, 14, 238, 0, 10, 9, 243, 89, 10, 10, 255, 119, 10, 11, 255, 85, 10, 12, 255, 0, 10, 13, 221, 0], "secondary": false }, { "width": 11, "bonus": 305, "chr": "p", "pixels": [0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 0, 15, 255, 255, 0, 16, 255, 255, 0, 17, 255, 255, 1, 7, 255, 221, 1, 8, 254, 239, 1, 9, 255, 136, 1, 10, 255, 119, 1, 11, 255, 153, 1, 12, 254, 239, 1, 13, 254, 239, 1, 14, 255, 119, 1, 15, 255, 119, 1, 16, 255, 119, 1, 17, 255, 119, 1, 18, 255, 51, 2, 7, 235, 240, 2, 8, 223, 19, 2, 9, 238, 0, 2, 12, 167, 52, 2, 13, 253, 223, 2, 14, 246, 123, 3, 6, 221, 255, 3, 7, 182, 167, 3, 8, 221, 0, 3, 14, 250, 226, 4, 6, 255, 255, 4, 7, 235, 111, 4, 14, 255, 255, 4, 15, 221, 0, 5, 6, 221, 255, 5, 7, 254, 171, 5, 13, 169, 255, 5, 14, 224, 232, 5, 15, 255, 0, 6, 7, 255, 255, 6, 8, 216, 161, 6, 13, 255, 255, 6, 14, 198, 109, 6, 15, 204, 0, 7, 7, 184, 189, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 255, 255, 7, 13, 184, 142, 7, 14, 255, 0, 8, 9, 255, 102, 8, 10, 255, 119, 8, 11, 255, 102, 8, 12, 255, 17, 8, 13, 255, 0], "secondary": false }, { "width": 11, "bonus": 320, "chr": "q", "pixels": [1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 2, 7, 255, 255, 2, 8, 192, 181, 2, 9, 255, 34, 2, 10, 255, 0, 2, 11, 255, 34, 2, 12, 255, 136, 2, 13, 255, 255, 2, 14, 184, 142, 3, 6, 203, 255, 3, 7, 198, 219, 3, 8, 255, 0, 3, 13, 215, 201, 3, 14, 255, 221, 4, 6, 255, 255, 4, 7, 225, 116, 4, 8, 170, 0, 4, 14, 255, 255, 4, 15, 221, 0, 5, 6, 221, 255, 5, 7, 255, 119, 5, 14, 235, 240, 5, 15, 255, 0, 6, 7, 250, 226, 6, 13, 221, 255, 6, 14, 182, 167, 6, 15, 221, 0, 7, 7, 245, 247, 7, 8, 252, 241, 7, 9, 160, 244, 7, 11, 153, 255, 7, 12, 237, 255, 7, 13, 239, 254, 7, 14, 237, 128, 7, 15, 182, 167, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 255, 255, 8, 9, 255, 255, 8, 10, 255, 255, 8, 11, 255, 255, 8, 12, 255, 255, 8, 13, 255, 255, 8, 14, 255, 255, 8, 15, 255, 255, 8, 16, 255, 255, 8, 17, 255, 255, 8, 18, 164, 132, 9, 7, 255, 0, 9, 8, 255, 0, 9, 9, 255, 0, 9, 10, 255, 0, 9, 11, 255, 0, 9, 12, 255, 0, 9, 13, 255, 0, 9, 14, 255, 0, 9, 15, 255, 0, 9, 16, 255, 0, 9, 17, 255, 0, 9, 18, 255, 0], "secondary": false }, { "width": 7, "bonus": 145, "chr": "r", "pixels": [0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 7, 254, 204, 1, 8, 255, 255, 1, 9, 254, 204, 1, 10, 255, 136, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 255, 119, 1, 14, 255, 119, 1, 15, 255, 0, 2, 7, 255, 255, 2, 8, 218, 80, 2, 9, 255, 0, 2, 10, 204, 0, 3, 6, 221, 255, 3, 7, 187, 209, 3, 8, 255, 0, 4, 6, 221, 255, 4, 7, 235, 111, 4, 8, 153, 0, 5, 7, 221, 0], "secondary": false }, { "width": 9, "bonus": 205, "chr": "s", "pixels": [1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 245, 247, 1, 13, 239, 254, 1, 14, 191, 159, 2, 6, 203, 255, 2, 7, 192, 225, 2, 8, 255, 0, 2, 9, 255, 187, 2, 10, 249, 174, 2, 14, 251, 207, 3, 6, 255, 255, 3, 7, 225, 116, 3, 8, 170, 0, 3, 10, 255, 255, 3, 11, 175, 25, 3, 14, 255, 255, 3, 15, 204, 0, 4, 6, 237, 255, 4, 7, 255, 119, 4, 10, 242, 251, 4, 11, 255, 119, 4, 14, 244, 248, 4, 15, 255, 0, 5, 6, 169, 255, 5, 7, 250, 191, 5, 11, 253, 240, 5, 12, 192, 181, 5, 13, 237, 255, 5, 14, 200, 195, 5, 15, 238, 0, 6, 7, 209, 145, 6, 8, 187, 0, 6, 11, 200, 195, 6, 12, 255, 255, 6, 13, 215, 201, 6, 14, 239, 18, 6, 15, 153, 0, 7, 12, 153, 0, 7, 13, 255, 0, 7, 14, 170, 0], "secondary": false }, { "width": 7, "bonus": 165, "chr": "t", "pixels": [0, 6, 255, 255, 1, 3, 153, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 221, 255, 2, 4, 200, 152, 2, 5, 255, 119, 2, 6, 255, 255, 2, 7, 255, 153, 2, 8, 255, 119, 2, 9, 255, 119, 2, 10, 255, 119, 2, 11, 255, 119, 2, 12, 254, 171, 2, 13, 255, 255, 2, 14, 200, 174, 3, 6, 255, 255, 3, 7, 255, 68, 3, 8, 153, 0, 3, 13, 216, 161, 3, 14, 254, 239, 4, 6, 187, 255, 4, 7, 255, 51, 4, 14, 239, 236, 4, 15, 238, 0, 5, 7, 187, 0, 5, 15, 221, 0], "secondary": false }, { "width": 11, "bonus": 220, "chr": "u", "pixels": [1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 34, 2, 13, 254, 204, 2, 14, 254, 204, 3, 14, 255, 255, 3, 15, 204, 0, 4, 14, 244, 248, 4, 15, 255, 0, 5, 13, 203, 255, 5, 14, 192, 181, 5, 15, 238, 0, 6, 12, 187, 255, 6, 13, 187, 255, 6, 14, 204, 0, 7, 6, 255, 255, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 255, 255, 7, 13, 255, 255, 7, 14, 255, 255, 8, 7, 255, 119, 8, 8, 255, 119, 8, 9, 255, 119, 8, 10, 255, 119, 8, 11, 255, 119, 8, 12, 255, 119, 8, 13, 255, 119, 8, 14, 255, 119, 8, 15, 255, 0], "secondary": false }, { "width": 11, "bonus": 205, "chr": "v", "pixels": [1, 6, 255, 255, 1, 7, 243, 249, 2, 7, 255, 153, 2, 8, 253, 240, 2, 9, 255, 255, 2, 10, 196, 243, 3, 8, 153, 0, 3, 9, 245, 107, 3, 10, 254, 204, 3, 11, 255, 255, 3, 12, 244, 248, 3, 13, 153, 255, 4, 11, 214, 61, 4, 12, 255, 153, 4, 13, 255, 255, 4, 14, 255, 255, 5, 11, 153, 255, 5, 12, 255, 255, 5, 13, 255, 255, 5, 14, 255, 187, 5, 15, 255, 0, 6, 9, 221, 255, 6, 10, 255, 255, 6, 11, 230, 245, 6, 12, 200, 152, 6, 13, 255, 17, 6, 14, 255, 0, 6, 15, 187, 0, 7, 6, 169, 255, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 209, 207, 7, 10, 230, 75, 7, 11, 255, 0, 7, 12, 221, 0, 8, 6, 203, 255, 8, 7, 209, 145, 8, 8, 255, 17, 8, 9, 255, 0, 8, 10, 170, 0, 9, 7, 204, 0], "secondary": false }, { "width": 16, "bonus": 370, "chr": "w", "pixels": [0, 6, 221, 255, 1, 6, 169, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 214, 243, 2, 7, 175, 25, 2, 8, 255, 85, 2, 9, 254, 171, 2, 10, 255, 255, 2, 11, 255, 255, 2, 12, 196, 243, 3, 10, 175, 25, 3, 11, 255, 85, 3, 12, 254, 171, 3, 13, 255, 255, 3, 14, 255, 255, 4, 12, 232, 243, 4, 13, 255, 255, 4, 14, 255, 187, 4, 15, 255, 0, 5, 9, 221, 255, 5, 10, 255, 255, 5, 11, 217, 239, 5, 12, 191, 159, 5, 13, 226, 39, 5, 14, 255, 0, 5, 15, 187, 0, 6, 6, 221, 255, 6, 7, 255, 255, 6, 8, 228, 247, 6, 9, 200, 174, 6, 10, 227, 57, 6, 11, 255, 0, 6, 12, 204, 0, 7, 6, 221, 255, 7, 7, 255, 255, 7, 8, 255, 221, 7, 9, 239, 145, 7, 10, 159, 82, 8, 7, 227, 57, 8, 8, 255, 136, 8, 9, 250, 226, 8, 10, 255, 255, 8, 11, 214, 243, 9, 10, 230, 75, 9, 11, 255, 136, 9, 12, 248, 227, 9, 13, 255, 255, 9, 14, 196, 243, 10, 12, 215, 201, 10, 13, 255, 255, 10, 14, 255, 255, 10, 15, 187, 0, 11, 9, 169, 255, 11, 10, 255, 255, 11, 11, 255, 255, 11, 12, 210, 227, 11, 13, 209, 145, 11, 14, 255, 17, 11, 15, 255, 0, 12, 6, 169, 255, 12, 7, 255, 255, 12, 8, 255, 255, 12, 9, 220, 236, 12, 10, 209, 145, 12, 11, 255, 34, 12, 12, 255, 0, 12, 13, 187, 0, 13, 6, 221, 255, 13, 7, 216, 161, 13, 8, 255, 51, 13, 9, 255, 0, 13, 10, 204, 0, 14, 7, 221, 0], "secondary": false }, { "width": 10, "bonus": 230, "chr": "x", "pixels": [0, 14, 187, 255, 1, 6, 255, 255, 1, 7, 219, 218, 1, 13, 237, 255, 1, 14, 225, 251, 1, 15, 187, 0, 2, 7, 255, 221, 2, 8, 250, 243, 2, 11, 153, 255, 2, 12, 255, 255, 2, 13, 187, 209, 2, 14, 239, 18, 2, 15, 221, 0, 3, 8, 239, 145, 3, 9, 255, 255, 3, 10, 243, 249, 3, 11, 223, 253, 3, 12, 180, 96, 3, 13, 255, 0, 3, 14, 153, 0, 4, 9, 247, 245, 4, 10, 255, 255, 4, 11, 250, 191, 4, 12, 226, 39, 5, 7, 153, 255, 5, 8, 255, 255, 5, 9, 180, 217, 5, 10, 243, 71, 5, 11, 254, 204, 5, 12, 250, 243, 6, 6, 221, 255, 6, 7, 239, 254, 6, 8, 180, 96, 6, 9, 255, 0, 6, 10, 153, 0, 6, 12, 231, 150, 6, 13, 255, 255, 6, 14, 214, 223, 7, 6, 187, 255, 7, 7, 223, 19, 7, 8, 238, 0, 7, 13, 168, 103, 7, 14, 255, 221, 7, 15, 187, 0, 8, 7, 187, 0, 8, 15, 221, 0], "secondary": false }, { "width": 11, "bonus": 265, "chr": "y", "pixels": [0, 6, 169, 255, 1, 6, 221, 255, 1, 7, 255, 255, 1, 8, 217, 239, 1, 18, 244, 248, 2, 7, 232, 93, 2, 8, 255, 187, 2, 9, 255, 255, 2, 10, 244, 248, 2, 17, 153, 255, 2, 18, 235, 240, 3, 9, 196, 45, 3, 10, 255, 136, 3, 11, 253, 240, 3, 12, 255, 255, 3, 13, 196, 243, 3, 16, 187, 255, 3, 17, 255, 255, 3, 18, 194, 135, 4, 12, 246, 123, 4, 13, 255, 255, 4, 14, 255, 255, 4, 15, 255, 255, 4, 16, 205, 233, 4, 17, 205, 85, 4, 18, 255, 0, 5, 11, 187, 255, 5, 12, 255, 255, 5, 13, 245, 247, 5, 14, 255, 153, 5, 15, 255, 34, 5, 16, 255, 0, 5, 17, 187, 0, 6, 9, 237, 255, 6, 10, 255, 255, 6, 11, 220, 236, 6, 12, 214, 122, 6, 13, 255, 0, 6, 14, 238, 0, 6, 15, 153, 0, 7, 6, 187, 255, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 207, 188, 7, 10, 241, 54, 7, 11, 255, 0, 7, 12, 204, 0, 8, 6, 203, 255, 8, 7, 214, 122, 8, 8, 255, 17, 8, 9, 255, 0, 8, 10, 153, 0, 9, 7, 204, 0], "secondary": false }, { "width": 10, "bonus": 265, "chr": "z", "pixels": [0, 6, 187, 255, 0, 14, 255, 255, 1, 6, 255, 255, 1, 7, 214, 122, 1, 12, 169, 255, 1, 13, 255, 255, 1, 14, 255, 255, 1, 15, 255, 0, 2, 6, 255, 255, 2, 7, 255, 102, 2, 11, 203, 255, 2, 12, 239, 254, 2, 13, 221, 177, 2, 14, 255, 255, 2, 15, 255, 0, 3, 6, 255, 255, 3, 7, 255, 102, 3, 10, 237, 255, 3, 11, 210, 247, 3, 12, 211, 41, 3, 13, 245, 107, 3, 14, 255, 255, 3, 15, 255, 0, 4, 6, 255, 255, 4, 7, 255, 102, 4, 8, 153, 141, 4, 9, 237, 255, 4, 10, 200, 238, 4, 11, 239, 18, 4, 12, 204, 0, 4, 14, 255, 255, 4, 15, 255, 0, 5, 6, 255, 255, 5, 7, 255, 187, 5, 8, 255, 255, 5, 9, 176, 197, 5, 10, 238, 0, 5, 11, 187, 0, 5, 14, 255, 255, 5, 15, 255, 0, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 214, 122, 6, 9, 255, 0, 6, 14, 255, 255, 6, 15, 255, 0, 7, 6, 153, 255, 7, 7, 255, 68, 7, 8, 255, 0, 7, 14, 235, 240, 7, 15, 255, 0, 8, 7, 153, 0, 8, 15, 221, 0], "secondary": false }, { "width": 13, "bonus": 335, "chr": "A", "pixels": [0, 14, 187, 255, 1, 11, 169, 255, 1, 12, 237, 255, 1, 13, 255, 255, 1, 14, 220, 236, 1, 15, 187, 0, 2, 9, 221, 255, 2, 10, 255, 255, 2, 11, 230, 245, 2, 12, 216, 161, 2, 13, 241, 54, 2, 14, 255, 0, 2, 15, 204, 0, 3, 6, 203, 255, 3, 7, 255, 255, 3, 8, 241, 252, 3, 9, 231, 225, 3, 10, 255, 255, 3, 11, 255, 0, 3, 12, 221, 0, 4, 3, 187, 255, 4, 4, 255, 255, 4, 5, 255, 255, 4, 6, 209, 207, 4, 7, 221, 98, 4, 8, 255, 0, 4, 9, 245, 107, 4, 10, 255, 255, 4, 11, 255, 0, 5, 2, 255, 255, 5, 3, 255, 255, 5, 4, 228, 171, 5, 5, 255, 17, 5, 6, 255, 0, 5, 7, 170, 0, 5, 10, 255, 255, 5, 11, 255, 0, 6, 3, 255, 221, 6, 4, 255, 255, 6, 5, 248, 244, 6, 10, 255, 255, 6, 11, 255, 0, 7, 4, 227, 57, 7, 5, 255, 153, 7, 6, 253, 240, 7, 7, 255, 255, 7, 8, 228, 247, 7, 9, 187, 255, 7, 10, 255, 255, 7, 11, 255, 0, 8, 6, 153, 0, 8, 7, 243, 89, 8, 8, 254, 171, 8, 9, 255, 255, 8, 10, 255, 255, 8, 11, 254, 204, 9, 9, 175, 25, 9, 10, 255, 102, 9, 11, 255, 187, 9, 12, 255, 255, 9, 13, 255, 255, 9, 14, 191, 250, 10, 12, 196, 45, 10, 13, 255, 119, 10, 14, 255, 221, 10, 15, 187, 0, 11, 15, 221, 0], "secondary": false }, { "width": 12, "bonus": 390, "chr": "B", "pixels": [1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 255, 255, 2, 2, 255, 255, 2, 3, 255, 102, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 102, 2, 8, 255, 255, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0, 2, 13, 255, 102, 2, 14, 255, 255, 2, 15, 255, 0, 3, 2, 255, 255, 3, 3, 255, 102, 3, 8, 255, 255, 3, 9, 255, 0, 3, 14, 255, 255, 3, 15, 255, 0, 4, 2, 255, 255, 4, 3, 255, 102, 4, 8, 255, 255, 4, 9, 255, 0, 4, 14, 255, 255, 4, 15, 255, 0, 5, 2, 255, 255, 5, 3, 255, 119, 5, 8, 255, 255, 5, 9, 255, 0, 5, 14, 255, 255, 5, 15, 255, 0, 6, 2, 187, 255, 6, 3, 255, 221, 6, 7, 221, 255, 6, 8, 255, 255, 6, 9, 255, 68, 6, 14, 235, 240, 6, 15, 255, 0, 7, 3, 246, 229, 7, 4, 255, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 228, 247, 7, 8, 248, 209, 7, 9, 254, 204, 7, 13, 237, 255, 7, 14, 200, 174, 7, 15, 221, 0, 8, 4, 235, 111, 8, 5, 255, 119, 8, 6, 255, 85, 8, 7, 255, 0, 8, 8, 226, 39, 8, 9, 251, 242, 8, 10, 255, 255, 8, 11, 255, 255, 8, 12, 255, 255, 8, 13, 205, 233, 8, 14, 239, 18, 9, 10, 245, 107, 9, 11, 255, 119, 9, 12, 255, 68, 9, 13, 255, 0, 9, 14, 187, 0], "secondary": false }, { "width": 13, "bonus": 325, "chr": "C", "pixels": [0, 6, 187, 255, 0, 7, 237, 255, 0, 8, 255, 255, 0, 9, 237, 255, 0, 10, 169, 255, 1, 4, 169, 255, 1, 5, 255, 255, 1, 6, 232, 243, 1, 7, 224, 155, 1, 8, 246, 123, 1, 9, 255, 153, 1, 10, 253, 223, 1, 11, 255, 255, 1, 12, 180, 217, 2, 3, 169, 255, 2, 4, 239, 254, 2, 5, 198, 109, 2, 6, 255, 0, 2, 7, 221, 0, 2, 10, 153, 0, 2, 11, 235, 111, 2, 12, 255, 255, 2, 13, 214, 182, 3, 3, 255, 255, 3, 4, 193, 90, 3, 5, 238, 0, 3, 12, 153, 141, 3, 13, 255, 255, 3, 14, 180, 96, 4, 2, 169, 255, 4, 3, 205, 233, 4, 4, 255, 0, 4, 13, 220, 236, 4, 14, 254, 171, 5, 2, 237, 255, 5, 3, 209, 145, 5, 4, 187, 0, 5, 14, 251, 242, 5, 15, 170, 0, 6, 2, 255, 255, 6, 3, 245, 107, 6, 14, 255, 255, 6, 15, 238, 0, 7, 2, 237, 255, 7, 3, 255, 119, 7, 14, 244, 248, 7, 15, 255, 0, 8, 2, 187, 255, 8, 3, 249, 174, 8, 13, 169, 255, 8, 14, 219, 218, 8, 15, 238, 0, 9, 3, 255, 255, 9, 4, 181, 48, 9, 13, 255, 255, 9, 14, 204, 128, 9, 15, 187, 0, 10, 3, 235, 240, 10, 4, 255, 119, 10, 12, 187, 255, 10, 13, 225, 251, 10, 14, 255, 0, 11, 4, 221, 0, 11, 13, 196, 45, 11, 14, 221, 0], "secondary": false }, { "width": 14, "bonus": 380, "chr": "D", "pixels": [1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 255, 255, 2, 2, 255, 255, 2, 3, 255, 102, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0, 2, 13, 255, 102, 2, 14, 255, 255, 2, 15, 255, 0, 3, 2, 255, 255, 3, 3, 255, 102, 3, 14, 255, 255, 3, 15, 255, 0, 4, 2, 255, 255, 4, 3, 255, 102, 4, 14, 255, 255, 4, 15, 255, 0, 5, 2, 237, 255, 5, 3, 255, 119, 5, 14, 244, 248, 5, 15, 255, 0, 6, 2, 203, 255, 6, 3, 249, 174, 6, 13, 169, 255, 6, 14, 227, 229, 6, 15, 238, 0, 7, 3, 255, 255, 7, 4, 187, 70, 7, 13, 255, 255, 7, 14, 209, 145, 7, 15, 204, 0, 8, 3, 227, 229, 8, 4, 255, 221, 8, 12, 221, 255, 8, 13, 214, 243, 8, 14, 255, 0, 9, 4, 244, 213, 9, 5, 255, 255, 9, 6, 200, 238, 9, 10, 187, 255, 9, 11, 255, 255, 9, 12, 214, 243, 9, 13, 223, 19, 9, 14, 204, 0, 10, 5, 225, 116, 10, 6, 255, 187, 10, 7, 250, 243, 10, 8, 255, 255, 10, 9, 245, 247, 10, 10, 223, 214, 10, 11, 214, 122, 10, 12, 255, 0, 10, 13, 204, 0, 11, 7, 187, 0, 11, 8, 238, 0, 11, 9, 255, 0, 11, 10, 238, 0, 11, 11, 187, 0], "secondary": false }, { "width": 10, "bonus": 315, "chr": "E", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 2, 255, 255, 1, 3, 254, 171, 1, 4, 255, 119, 1, 5, 255, 119, 1, 6, 255, 119, 1, 7, 255, 119, 1, 8, 255, 255, 1, 9, 254, 171, 1, 10, 255, 119, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 254, 171, 1, 14, 255, 255, 1, 15, 255, 0, 2, 2, 255, 255, 2, 3, 255, 102, 2, 4, 170, 0, 2, 8, 255, 255, 2, 9, 255, 102, 2, 10, 170, 0, 2, 13, 174, 150, 2, 14, 255, 255, 2, 15, 255, 0, 3, 2, 255, 255, 3, 3, 255, 102, 3, 8, 255, 255, 3, 9, 255, 102, 3, 14, 255, 255, 3, 15, 255, 0, 4, 2, 255, 255, 4, 3, 255, 102, 4, 8, 255, 255, 4, 9, 255, 102, 4, 14, 255, 255, 4, 15, 255, 0, 5, 2, 255, 255, 5, 3, 255, 102, 5, 8, 255, 255, 5, 9, 255, 102, 5, 14, 255, 255, 5, 15, 255, 0, 6, 2, 255, 255, 6, 3, 255, 102, 6, 9, 255, 17, 6, 14, 255, 255, 6, 15, 255, 0, 7, 3, 255, 34, 7, 14, 214, 223, 7, 15, 255, 0, 8, 15, 187, 0], "secondary": false }, { "width": 9, "bonus": 245, "chr": "F", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 2, 255, 255, 1, 3, 254, 171, 1, 4, 255, 119, 1, 5, 255, 119, 1, 6, 255, 119, 1, 7, 255, 119, 1, 8, 255, 255, 1, 9, 254, 171, 1, 10, 255, 119, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 255, 119, 1, 14, 255, 119, 1, 15, 255, 0, 2, 2, 255, 255, 2, 3, 255, 102, 2, 4, 170, 0, 2, 8, 255, 255, 2, 9, 255, 102, 2, 10, 170, 0, 3, 2, 255, 255, 3, 3, 255, 102, 3, 8, 255, 255, 3, 9, 255, 102, 4, 2, 255, 255, 4, 3, 255, 102, 4, 8, 255, 255, 4, 9, 255, 102, 5, 2, 255, 255, 5, 3, 255, 102, 5, 8, 255, 255, 5, 9, 255, 102, 6, 2, 221, 255, 6, 3, 255, 85, 6, 9, 255, 0, 7, 3, 221, 0], "secondary": false }, { "width": 14, "bonus": 390, "chr": "G", "pixels": [0, 6, 153, 255, 0, 7, 221, 255, 0, 8, 255, 255, 0, 9, 237, 255, 0, 10, 187, 255, 1, 5, 255, 255, 1, 6, 241, 252, 1, 7, 220, 197, 1, 8, 237, 128, 1, 9, 255, 136, 1, 10, 250, 191, 1, 11, 255, 255, 1, 12, 214, 223, 2, 4, 255, 255, 2, 5, 191, 159, 2, 6, 255, 0, 2, 7, 238, 0, 2, 8, 170, 0, 2, 11, 205, 85, 2, 12, 254, 239, 2, 13, 237, 201, 3, 3, 255, 255, 3, 4, 184, 142, 3, 5, 255, 0, 3, 13, 255, 255, 3, 14, 209, 104, 4, 2, 169, 255, 4, 3, 217, 239, 4, 4, 255, 0, 4, 13, 205, 233, 4, 14, 255, 187, 5, 2, 237, 255, 5, 3, 209, 145, 5, 4, 204, 0, 5, 14, 250, 243, 5, 15, 187, 0, 6, 2, 255, 255, 6, 3, 245, 107, 6, 14, 255, 255, 6, 15, 238, 0, 7, 2, 237, 255, 7, 3, 255, 102, 7, 14, 235, 240, 7, 15, 255, 0, 8, 2, 203, 255, 8, 3, 249, 174, 8, 9, 187, 255, 8, 13, 187, 255, 8, 14, 209, 207, 8, 15, 221, 0, 9, 3, 255, 255, 9, 4, 175, 25, 9, 9, 255, 255, 9, 10, 214, 122, 9, 13, 255, 255, 9, 14, 205, 85, 9, 15, 170, 0, 10, 3, 245, 247, 10, 4, 255, 119, 10, 9, 255, 255, 10, 10, 254, 171, 10, 11, 173, 175, 10, 12, 203, 255, 10, 13, 225, 251, 10, 14, 255, 119, 11, 4, 238, 0, 11, 9, 255, 255, 11, 10, 255, 255, 11, 11, 255, 255, 11, 12, 255, 255, 11, 13, 255, 255, 11, 14, 255, 255, 12, 10, 255, 0, 12, 11, 255, 0, 12, 12, 255, 0, 12, 13, 255, 0, 12, 14, 255, 0, 12, 15, 255, 0], "secondary": false }, { "width": 12, "bonus": 325, "chr": "H", "pixels": [1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 255, 255, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 255, 2, 9, 255, 102, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0, 2, 13, 255, 0, 2, 14, 255, 0, 2, 15, 255, 0, 3, 8, 255, 255, 3, 9, 255, 102, 4, 8, 255, 255, 4, 9, 255, 102, 5, 8, 255, 255, 5, 9, 255, 102, 6, 8, 255, 255, 6, 9, 255, 102, 7, 8, 255, 255, 7, 9, 255, 102, 8, 8, 255, 255, 8, 9, 255, 153, 8, 10, 163, 160, 9, 2, 255, 255, 9, 3, 255, 255, 9, 4, 255, 255, 9, 5, 255, 255, 9, 6, 255, 255, 9, 7, 255, 255, 9, 8, 255, 255, 9, 9, 255, 255, 9, 10, 255, 255, 9, 11, 255, 255, 9, 12, 255, 255, 9, 13, 255, 255, 9, 14, 255, 255, 10, 3, 255, 0, 10, 4, 255, 0, 10, 5, 255, 0, 10, 6, 255, 0, 10, 7, 255, 0, 10, 8, 255, 0, 10, 9, 255, 0, 10, 10, 255, 0, 10, 11, 255, 0, 10, 12, 255, 0, 10, 13, 255, 0, 10, 14, 255, 0, 10, 15, 255, 0], "secondary": false }, { "width": 4, "bonus": 130, "chr": "I", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 3, 255, 119, 1, 4, 255, 119, 1, 5, 255, 119, 1, 6, 255, 119, 1, 7, 255, 119, 1, 8, 255, 119, 1, 9, 255, 119, 1, 10, 255, 119, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 255, 119, 1, 14, 255, 119, 1, 15, 255, 0], "secondary": false }, { "width": 9, "bonus": 240, "chr": "J", "pixels": [0, 11, 255, 255, 0, 12, 203, 255, 1, 11, 174, 150, 1, 12, 254, 171, 1, 13, 255, 255, 1, 14, 153, 171, 2, 13, 221, 177, 2, 14, 255, 221, 3, 2, 255, 255, 3, 3, 153, 171, 3, 14, 255, 255, 3, 15, 221, 0, 4, 2, 255, 255, 4, 3, 255, 102, 4, 13, 153, 255, 4, 14, 235, 240, 4, 15, 255, 0, 5, 2, 255, 255, 5, 3, 255, 153, 5, 4, 163, 160, 5, 12, 169, 255, 5, 13, 255, 255, 5, 14, 194, 135, 5, 15, 221, 0, 6, 2, 255, 255, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 255, 255, 6, 12, 224, 232, 6, 13, 198, 109, 6, 14, 255, 0, 7, 3, 255, 0, 7, 4, 255, 0, 7, 5, 255, 0, 7, 6, 255, 0, 7, 7, 255, 0, 7, 8, 255, 0, 7, 9, 255, 0, 7, 10, 255, 0, 7, 11, 255, 0, 7, 12, 255, 0, 7, 13, 204, 0], "secondary": false }, { "width": 12, "bonus": 315, "chr": "K", "pixels": [1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 255, 255, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 102, 2, 8, 255, 255, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0, 2, 13, 255, 0, 2, 14, 255, 0, 2, 15, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 7, 221, 255, 4, 8, 255, 255, 4, 9, 254, 171, 5, 5, 169, 255, 5, 6, 255, 255, 5, 7, 205, 233, 5, 8, 235, 111, 5, 9, 254, 239, 5, 10, 249, 243, 6, 4, 237, 255, 6, 5, 240, 253, 6, 6, 198, 109, 6, 7, 255, 0, 6, 8, 187, 0, 6, 10, 249, 174, 6, 11, 255, 255, 6, 12, 227, 229, 7, 2, 203, 255, 7, 3, 255, 255, 7, 4, 194, 201, 7, 5, 239, 18, 7, 6, 238, 0, 7, 11, 193, 90, 7, 12, 255, 221, 7, 13, 255, 255, 7, 14, 173, 226, 8, 2, 221, 255, 8, 3, 218, 80, 8, 4, 255, 0, 8, 5, 153, 0, 8, 13, 239, 145, 8, 14, 255, 255, 8, 15, 153, 0, 9, 3, 221, 0, 9, 15, 255, 0], "secondary": false }, { "width": 10, "bonus": 190, "chr": "L", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 3, 255, 119, 1, 4, 255, 119, 1, 5, 255, 119, 1, 6, 255, 119, 1, 7, 255, 119, 1, 8, 255, 119, 1, 9, 255, 119, 1, 10, 255, 119, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 254, 171, 1, 14, 255, 255, 1, 15, 255, 0, 2, 13, 174, 150, 2, 14, 255, 255, 2, 15, 255, 0, 3, 14, 255, 255, 3, 15, 255, 0, 4, 14, 255, 255, 4, 15, 255, 0, 5, 14, 255, 255, 5, 15, 255, 0, 6, 14, 255, 255, 6, 15, 255, 0, 7, 15, 255, 0], "secondary": false }, { "width": 15, "bonus": 490, "chr": "M", "pixels": [1, 3, 153, 255, 1, 4, 169, 255, 1, 5, 187, 255, 1, 6, 221, 255, 1, 7, 237, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 255, 255, 2, 2, 255, 255, 2, 3, 255, 255, 2, 4, 255, 255, 2, 5, 232, 205, 2, 6, 228, 171, 2, 7, 239, 145, 2, 8, 246, 123, 2, 9, 255, 102, 2, 10, 255, 85, 2, 11, 255, 68, 2, 12, 255, 34, 2, 13, 255, 17, 2, 14, 255, 0, 2, 15, 255, 0, 3, 3, 255, 153, 3, 4, 255, 255, 3, 5, 255, 255, 3, 6, 228, 171, 3, 7, 167, 52, 4, 4, 159, 27, 4, 5, 255, 119, 4, 6, 254, 239, 4, 7, 255, 255, 4, 8, 196, 243, 5, 7, 243, 89, 5, 8, 254, 204, 5, 9, 255, 255, 5, 10, 217, 239, 6, 9, 214, 61, 6, 10, 255, 187, 6, 11, 255, 255, 6, 12, 194, 201, 7, 9, 187, 255, 7, 10, 255, 255, 7, 11, 246, 229, 7, 12, 255, 85, 7, 13, 153, 0, 8, 7, 203, 255, 8, 8, 255, 255, 8, 9, 217, 239, 8, 10, 209, 104, 8, 11, 255, 0, 8, 12, 221, 0, 9, 5, 237, 255, 9, 6, 255, 255, 9, 7, 203, 213, 9, 8, 214, 61, 9, 9, 255, 0, 9, 10, 204, 0, 10, 2, 169, 255, 10, 3, 255, 255, 10, 4, 255, 255, 10, 5, 223, 214, 10, 6, 243, 71, 10, 7, 255, 0, 10, 8, 170, 0, 11, 2, 255, 255, 11, 3, 255, 255, 11, 4, 255, 255, 11, 5, 255, 255, 11, 6, 255, 255, 11, 7, 255, 255, 11, 8, 255, 255, 11, 9, 221, 255, 11, 10, 203, 255, 11, 11, 187, 255, 11, 12, 169, 255, 11, 13, 153, 255, 12, 3, 255, 34, 12, 4, 255, 51, 12, 5, 255, 68, 12, 6, 255, 85, 12, 7, 255, 102, 12, 8, 255, 119, 12, 9, 255, 153, 12, 10, 243, 178, 12, 11, 241, 198, 12, 12, 241, 215, 12, 13, 244, 231, 12, 14, 255, 255, 13, 10, 153, 0, 13, 11, 170, 0, 13, 12, 187, 0, 13, 13, 204, 0, 13, 14, 221, 0, 13, 15, 255, 0], "secondary": false }, { "width": 13, "bonus": 350, "chr": "N", "pixels": [1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 255, 255, 2, 3, 255, 221, 2, 4, 254, 239, 2, 5, 255, 102, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0, 2, 13, 255, 0, 2, 14, 255, 0, 2, 15, 255, 0, 3, 4, 241, 162, 3, 5, 255, 255, 3, 6, 214, 223, 4, 5, 180, 96, 4, 6, 255, 221, 4, 7, 250, 243, 5, 7, 243, 178, 5, 8, 255, 255, 5, 9, 198, 219, 6, 8, 198, 109, 6, 9, 254, 239, 6, 10, 244, 231, 7, 10, 250, 191, 7, 11, 255, 255, 7, 12, 180, 217, 8, 11, 214, 122, 8, 12, 254, 239, 8, 13, 241, 234, 9, 2, 255, 255, 9, 3, 255, 255, 9, 4, 255, 255, 9, 5, 255, 255, 9, 6, 255, 255, 9, 7, 255, 255, 9, 8, 255, 255, 9, 9, 255, 255, 9, 10, 255, 255, 9, 11, 255, 255, 9, 12, 255, 255, 9, 13, 255, 255, 9, 14, 255, 255, 10, 3, 255, 102, 10, 4, 255, 102, 10, 5, 255, 102, 10, 6, 255, 102, 10, 7, 255, 102, 10, 8, 255, 102, 10, 9, 255, 102, 10, 10, 255, 102, 10, 11, 255, 102, 10, 12, 255, 102, 10, 13, 255, 102, 10, 14, 255, 85, 10, 15, 255, 0], "secondary": false }, { "width": 16, "bonus": 385, "chr": "O", "pixels": [1, 6, 169, 255, 1, 7, 237, 255, 1, 8, 255, 255, 1, 9, 221, 255, 1, 10, 169, 255, 2, 4, 169, 255, 2, 5, 255, 255, 2, 6, 217, 239, 2, 7, 216, 161, 2, 8, 246, 123, 2, 9, 255, 153, 2, 10, 250, 226, 2, 11, 255, 255, 2, 12, 180, 217, 3, 3, 169, 255, 3, 4, 239, 254, 3, 5, 198, 109, 3, 6, 255, 0, 3, 7, 204, 0, 3, 10, 153, 0, 3, 11, 235, 111, 3, 12, 254, 239, 3, 13, 220, 197, 4, 3, 255, 255, 4, 4, 193, 90, 4, 5, 238, 0, 4, 13, 255, 255, 4, 14, 198, 109, 5, 2, 187, 255, 5, 3, 210, 227, 5, 4, 255, 0, 5, 13, 205, 233, 5, 14, 255, 187, 6, 2, 237, 255, 6, 3, 214, 122, 6, 4, 187, 0, 6, 14, 250, 243, 6, 15, 187, 0, 7, 2, 255, 255, 7, 3, 245, 107, 7, 14, 255, 255, 7, 15, 238, 0, 8, 2, 221, 255, 8, 3, 255, 136, 8, 14, 235, 240, 8, 15, 255, 0, 9, 3, 252, 241, 9, 13, 237, 255, 9, 14, 200, 174, 9, 15, 221, 0, 10, 3, 247, 245, 10, 4, 249, 174, 10, 12, 169, 255, 10, 13, 239, 254, 10, 14, 239, 18, 11, 4, 253, 240, 11, 5, 237, 219, 11, 11, 221, 255, 11, 12, 239, 254, 11, 13, 193, 90, 11, 14, 238, 0, 12, 5, 251, 207, 12, 6, 255, 255, 12, 7, 255, 255, 12, 8, 255, 255, 12, 9, 255, 255, 12, 10, 255, 255, 12, 11, 210, 227, 12, 12, 227, 57, 12, 13, 238, 0, 13, 6, 214, 61, 13, 7, 255, 102, 13, 8, 255, 119, 13, 9, 255, 102, 13, 10, 255, 34, 13, 11, 255, 0, 13, 12, 187, 0], "secondary": false }, { "width": 11, "bonus": 320, "chr": "P", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 2, 255, 255, 1, 3, 254, 171, 1, 4, 255, 119, 1, 5, 255, 119, 1, 6, 255, 119, 1, 7, 255, 119, 1, 8, 254, 171, 1, 9, 255, 255, 1, 10, 255, 119, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 255, 119, 1, 14, 255, 119, 1, 15, 255, 0, 2, 2, 255, 255, 2, 3, 255, 102, 2, 4, 170, 0, 2, 8, 174, 150, 2, 9, 255, 255, 2, 10, 255, 0, 3, 2, 255, 255, 3, 3, 255, 102, 3, 9, 255, 255, 3, 10, 255, 0, 4, 2, 255, 255, 4, 3, 255, 102, 4, 9, 255, 255, 4, 10, 255, 0, 5, 2, 221, 255, 5, 3, 255, 153, 5, 8, 153, 255, 5, 9, 235, 240, 5, 10, 255, 0, 6, 3, 255, 255, 6, 4, 187, 116, 6, 8, 255, 255, 6, 9, 200, 152, 6, 10, 221, 0, 7, 3, 209, 207, 7, 4, 255, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 255, 255, 7, 8, 203, 213, 7, 9, 255, 0, 8, 4, 187, 70, 8, 5, 255, 119, 8, 6, 255, 119, 8, 7, 255, 51, 8, 8, 255, 0, 8, 9, 170, 0], "secondary": false }, { "width": 16, "bonus": 420, "chr": "Q", "pixels": [1, 6, 187, 255, 1, 7, 237, 255, 1, 8, 255, 255, 1, 9, 237, 255, 1, 10, 169, 255, 2, 4, 187, 255, 2, 5, 255, 255, 2, 6, 210, 227, 2, 7, 218, 139, 2, 8, 245, 107, 2, 9, 255, 119, 2, 10, 250, 191, 2, 11, 255, 255, 2, 12, 192, 225, 3, 3, 187, 255, 3, 4, 239, 254, 3, 5, 200, 65, 3, 6, 255, 0, 3, 7, 187, 0, 3, 11, 205, 85, 3, 12, 254, 239, 3, 13, 232, 205, 4, 3, 255, 255, 4, 4, 200, 65, 4, 5, 238, 0, 4, 13, 255, 255, 4, 14, 214, 122, 5, 2, 187, 255, 5, 3, 203, 213, 5, 4, 255, 0, 5, 13, 186, 233, 5, 14, 255, 187, 6, 2, 237, 255, 6, 3, 214, 122, 6, 4, 170, 0, 6, 14, 249, 243, 6, 15, 187, 0, 7, 2, 255, 255, 7, 3, 245, 107, 7, 14, 255, 255, 7, 15, 238, 0, 8, 2, 203, 255, 8, 3, 255, 153, 8, 13, 153, 255, 8, 14, 224, 232, 8, 15, 255, 0, 9, 3, 251, 242, 9, 4, 159, 27, 9, 10, 153, 255, 9, 11, 223, 253, 9, 13, 237, 255, 9, 14, 208, 167, 9, 15, 204, 0, 10, 3, 247, 245, 10, 4, 249, 174, 10, 11, 228, 209, 10, 12, 255, 255, 10, 13, 240, 253, 10, 14, 239, 18, 11, 4, 253, 240, 11, 5, 237, 219, 11, 11, 223, 253, 11, 12, 255, 255, 11, 13, 255, 221, 11, 14, 239, 18, 12, 5, 249, 174, 12, 6, 255, 255, 12, 7, 255, 255, 12, 8, 255, 255, 12, 9, 255, 255, 12, 10, 255, 255, 12, 11, 203, 213, 12, 12, 227, 57, 12, 13, 255, 187, 12, 14, 248, 209, 13, 6, 175, 25, 13, 7, 255, 68, 13, 8, 255, 102, 13, 9, 255, 68, 13, 10, 255, 17, 13, 11, 255, 0, 13, 12, 170, 0, 13, 14, 196, 45, 13, 15, 204, 0], "secondary": false }, { "width": 11, "bonus": 370, "chr": "R", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 1, 2, 255, 255, 1, 3, 254, 171, 1, 4, 255, 119, 1, 5, 255, 119, 1, 6, 255, 119, 1, 7, 255, 119, 1, 8, 254, 171, 1, 9, 255, 255, 1, 10, 255, 119, 1, 11, 255, 119, 1, 12, 255, 119, 1, 13, 255, 119, 1, 14, 255, 119, 1, 15, 255, 0, 2, 2, 255, 255, 2, 3, 255, 102, 2, 4, 170, 0, 2, 8, 174, 150, 2, 9, 255, 255, 2, 10, 255, 0, 3, 2, 255, 255, 3, 3, 255, 102, 3, 9, 255, 255, 3, 10, 255, 0, 4, 2, 255, 255, 4, 3, 255, 102, 4, 9, 255, 255, 4, 10, 255, 17, 5, 2, 237, 255, 5, 3, 255, 136, 5, 9, 255, 255, 5, 10, 254, 239, 6, 2, 153, 255, 6, 3, 253, 240, 6, 4, 175, 124, 6, 8, 237, 255, 6, 9, 200, 174, 6, 10, 254, 171, 6, 11, 255, 255, 6, 12, 237, 238, 7, 3, 234, 222, 7, 4, 255, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 255, 255, 7, 8, 203, 213, 7, 9, 238, 0, 7, 11, 193, 90, 7, 12, 254, 204, 7, 13, 255, 255, 7, 14, 192, 225, 8, 4, 218, 80, 8, 5, 255, 119, 8, 6, 255, 119, 8, 7, 255, 51, 8, 8, 255, 0, 8, 9, 170, 0, 8, 13, 225, 116, 8, 14, 254, 239, 8, 15, 170, 0, 9, 15, 238, 0], "secondary": false }, { "width": 10, "bonus": 260, "chr": "S", "pixels": [1, 3, 187, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 168, 207, 1, 13, 255, 255, 1, 14, 155, 112, 2, 3, 239, 254, 2, 4, 205, 85, 2, 5, 255, 0, 2, 6, 255, 102, 2, 7, 255, 255, 2, 8, 175, 124, 2, 13, 214, 223, 2, 14, 255, 187, 3, 2, 221, 255, 3, 3, 191, 159, 3, 4, 238, 0, 3, 7, 214, 223, 3, 8, 254, 204, 3, 14, 250, 243, 3, 15, 187, 0, 4, 2, 255, 255, 4, 3, 235, 111, 4, 8, 255, 255, 4, 9, 221, 98, 4, 14, 255, 255, 4, 15, 238, 0, 5, 2, 221, 255, 5, 3, 255, 136, 5, 8, 205, 233, 5, 9, 254, 204, 5, 13, 169, 255, 5, 14, 224, 232, 5, 15, 255, 0, 6, 3, 252, 241, 6, 9, 255, 255, 6, 10, 244, 213, 6, 12, 187, 255, 6, 13, 255, 255, 6, 14, 198, 109, 6, 15, 204, 0, 7, 3, 200, 174, 7, 4, 239, 18, 7, 10, 254, 204, 7, 11, 255, 255, 7, 12, 237, 238, 7, 13, 209, 104, 7, 14, 255, 0, 8, 11, 204, 0, 8, 12, 255, 0, 8, 13, 221, 0], "secondary": false }, { "width": 14, "bonus": 220, "chr": "T", "pixels": [0, 2, 255, 255, 1, 2, 255, 255, 1, 3, 255, 102, 2, 2, 255, 255, 2, 3, 255, 102, 3, 2, 255, 255, 3, 3, 255, 102, 4, 2, 255, 255, 4, 3, 254, 171, 4, 4, 173, 175, 5, 2, 255, 255, 5, 3, 255, 255, 5, 4, 255, 255, 5, 5, 255, 255, 5, 6, 255, 255, 5, 7, 255, 255, 5, 8, 255, 255, 5, 9, 255, 255, 5, 10, 255, 255, 5, 11, 255, 255, 5, 12, 255, 255, 5, 13, 255, 255, 5, 14, 255, 255, 6, 2, 255, 255, 6, 3, 255, 102, 6, 4, 255, 0, 6, 5, 255, 0, 6, 6, 255, 0, 6, 7, 255, 0, 6, 8, 255, 0, 6, 9, 255, 0, 6, 10, 255, 0, 6, 11, 255, 0, 6, 12, 255, 0, 6, 13, 255, 0, 6, 14, 255, 0, 6, 15, 255, 0, 7, 2, 255, 255, 7, 3, 255, 102, 8, 2, 255, 255, 8, 3, 255, 102, 9, 2, 255, 255, 9, 3, 255, 102, 10, 3, 255, 51], "secondary": false }, { "width": 12, "bonus": 305, "chr": "U", "pixels": [1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 243, 249, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 51, 2, 12, 254, 171, 2, 13, 255, 255, 3, 13, 237, 219, 3, 14, 255, 187, 4, 14, 251, 242, 4, 15, 187, 0, 5, 14, 255, 255, 5, 15, 238, 0, 6, 13, 153, 255, 6, 14, 235, 240, 6, 15, 255, 0, 7, 13, 237, 255, 7, 14, 200, 152, 7, 15, 221, 0, 8, 11, 169, 255, 8, 12, 255, 255, 8, 13, 200, 238, 8, 14, 238, 0, 9, 2, 255, 255, 9, 3, 255, 255, 9, 4, 255, 255, 9, 5, 255, 255, 9, 6, 255, 255, 9, 7, 255, 255, 9, 8, 255, 255, 9, 9, 255, 255, 9, 10, 255, 255, 9, 11, 227, 229, 9, 12, 209, 145, 9, 13, 255, 0, 9, 14, 187, 0, 10, 3, 255, 0, 10, 4, 255, 0, 10, 5, 255, 0, 10, 6, 255, 0, 10, 7, 255, 0, 10, 8, 255, 0, 10, 9, 255, 0, 10, 10, 255, 0, 10, 11, 255, 0, 10, 12, 204, 0], "secondary": false }, { "width": 13, "bonus": 295, "chr": "V", "pixels": [0, 2, 203, 255, 1, 2, 187, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 196, 243, 2, 3, 196, 45, 2, 4, 255, 119, 2, 5, 254, 204, 2, 6, 255, 255, 2, 7, 243, 249, 2, 8, 160, 244, 3, 6, 214, 61, 3, 7, 255, 136, 3, 8, 253, 223, 3, 9, 255, 255, 3, 10, 230, 245, 4, 9, 230, 75, 4, 10, 254, 171, 4, 11, 252, 241, 4, 12, 255, 255, 4, 13, 210, 247, 5, 11, 175, 25, 5, 12, 249, 174, 5, 13, 255, 255, 5, 14, 255, 255, 6, 10, 169, 255, 6, 11, 237, 255, 6, 12, 255, 255, 6, 13, 237, 219, 6, 14, 255, 102, 6, 15, 255, 0, 7, 8, 221, 255, 7, 9, 255, 255, 7, 10, 230, 245, 7, 11, 216, 161, 7, 12, 240, 36, 7, 13, 255, 0, 7, 14, 204, 0, 8, 5, 203, 255, 8, 6, 255, 255, 8, 7, 241, 252, 8, 8, 207, 188, 8, 9, 230, 75, 8, 10, 255, 0, 8, 11, 221, 0, 9, 2, 187, 255, 9, 3, 255, 255, 9, 4, 255, 255, 9, 5, 219, 218, 9, 6, 221, 98, 9, 7, 255, 17, 9, 8, 238, 0, 9, 9, 153, 0, 10, 2, 203, 255, 10, 3, 218, 139, 10, 4, 255, 34, 10, 5, 255, 0, 10, 6, 187, 0, 11, 3, 204, 0], "secondary": false }, { "width": 18, "bonus": 545, "chr": "W", "pixels": [1, 2, 221, 255, 1, 3, 169, 255, 2, 2, 153, 255, 2, 3, 250, 226, 2, 4, 255, 255, 2, 5, 255, 255, 2, 6, 240, 253, 2, 7, 169, 255, 3, 3, 153, 0, 3, 4, 223, 19, 3, 5, 255, 85, 3, 6, 255, 136, 3, 7, 251, 207, 3, 8, 255, 255, 3, 9, 255, 255, 3, 10, 240, 253, 3, 11, 169, 255, 4, 8, 207, 21, 4, 9, 255, 68, 4, 10, 255, 119, 4, 11, 250, 191, 4, 12, 249, 243, 4, 13, 255, 255, 4, 14, 241, 252, 5, 11, 209, 207, 5, 12, 250, 243, 5, 13, 255, 255, 5, 14, 254, 239, 5, 15, 238, 0, 6, 7, 153, 255, 6, 8, 221, 255, 6, 9, 255, 255, 6, 10, 240, 253, 6, 11, 214, 223, 6, 12, 209, 145, 6, 13, 241, 54, 6, 14, 255, 0, 6, 15, 238, 0, 7, 3, 153, 255, 7, 4, 221, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 214, 223, 7, 8, 200, 152, 7, 9, 230, 75, 7, 10, 255, 0, 7, 11, 238, 0, 7, 12, 187, 0, 8, 2, 255, 255, 8, 3, 255, 255, 8, 4, 248, 244, 8, 5, 241, 162, 8, 6, 255, 34, 8, 7, 255, 0, 8, 8, 187, 0, 9, 3, 255, 119, 9, 4, 255, 187, 9, 5, 255, 255, 9, 6, 255, 255, 9, 7, 225, 251, 9, 8, 153, 255, 10, 5, 191, 23, 10, 6, 255, 68, 10, 7, 255, 136, 10, 8, 248, 209, 10, 9, 255, 255, 10, 10, 255, 255, 10, 11, 207, 251, 11, 9, 207, 21, 11, 10, 255, 85, 11, 11, 255, 136, 11, 12, 248, 227, 11, 13, 255, 255, 11, 14, 255, 255, 12, 11, 220, 236, 12, 12, 255, 255, 12, 13, 255, 255, 12, 14, 254, 204, 12, 15, 255, 0, 13, 6, 153, 255, 13, 7, 221, 255, 13, 8, 255, 255, 13, 9, 255, 255, 13, 10, 232, 243, 13, 11, 207, 188, 13, 12, 221, 98, 13, 13, 255, 17, 13, 14, 255, 0, 13, 15, 204, 0, 14, 2, 153, 255, 14, 3, 221, 255, 14, 4, 255, 255, 14, 5, 255, 255, 14, 6, 232, 243, 14, 7, 214, 182, 14, 8, 235, 111, 14, 9, 255, 34, 14, 10, 255, 0, 14, 11, 221, 0, 14, 12, 153, 0, 15, 2, 221, 255, 15, 3, 214, 182, 15, 4, 235, 111, 15, 5, 255, 34, 15, 6, 255, 0, 15, 7, 221, 0, 15, 8, 153, 0, 16, 3, 221, 0, 16, 4, 153, 0], "secondary": false }, { "width": 12, "bonus": 310, "chr": "X", "pixels": [0, 14, 187, 255, 1, 2, 255, 255, 1, 3, 224, 232, 1, 13, 255, 255, 1, 14, 228, 247, 1, 15, 187, 0, 2, 3, 255, 221, 2, 4, 255, 255, 2, 5, 173, 226, 2, 11, 221, 255, 2, 12, 255, 255, 2, 13, 200, 174, 2, 14, 255, 0, 2, 15, 221, 0, 3, 4, 237, 128, 3, 5, 254, 239, 3, 6, 248, 244, 3, 9, 187, 255, 3, 10, 255, 255, 3, 11, 210, 227, 3, 12, 226, 39, 3, 13, 255, 0, 4, 6, 249, 174, 4, 7, 255, 255, 4, 8, 255, 255, 4, 9, 225, 251, 4, 10, 205, 85, 4, 11, 255, 0, 4, 12, 187, 0, 5, 6, 181, 239, 5, 7, 255, 255, 5, 8, 255, 255, 5, 9, 255, 221, 5, 10, 232, 93, 6, 5, 255, 255, 6, 6, 240, 253, 6, 7, 198, 109, 6, 8, 255, 34, 6, 9, 255, 187, 6, 10, 255, 255, 6, 11, 210, 227, 7, 3, 221, 255, 7, 4, 255, 255, 7, 5, 200, 195, 7, 6, 255, 17, 7, 7, 238, 0, 7, 10, 209, 104, 7, 11, 255, 221, 7, 12, 255, 255, 8, 2, 255, 255, 8, 3, 220, 236, 8, 4, 227, 57, 8, 5, 255, 0, 8, 6, 153, 0, 8, 12, 239, 145, 8, 13, 255, 255, 8, 14, 239, 236, 9, 3, 255, 0, 9, 4, 204, 0, 9, 14, 255, 187, 9, 15, 221, 0, 10, 15, 187, 0], "secondary": false }, { "width": 12, "bonus": 230, "chr": "Y", "pixels": [1, 2, 255, 255, 1, 3, 237, 238, 2, 3, 255, 187, 2, 4, 255, 255, 2, 5, 210, 227, 3, 4, 209, 104, 3, 5, 255, 221, 3, 6, 255, 255, 3, 7, 173, 226, 4, 6, 237, 128, 4, 7, 254, 239, 4, 8, 248, 244, 5, 7, 192, 181, 5, 8, 255, 255, 5, 9, 255, 255, 5, 10, 255, 255, 5, 11, 255, 255, 5, 12, 255, 255, 5, 13, 255, 255, 5, 14, 255, 255, 6, 6, 237, 255, 6, 7, 255, 255, 6, 8, 191, 159, 6, 9, 255, 0, 6, 10, 255, 0, 6, 11, 255, 0, 6, 12, 255, 0, 6, 13, 255, 0, 6, 14, 255, 0, 6, 15, 255, 0, 7, 4, 203, 255, 7, 5, 255, 255, 7, 6, 203, 213, 7, 7, 240, 36, 7, 8, 255, 0, 8, 2, 169, 255, 8, 3, 255, 255, 8, 4, 217, 239, 8, 5, 218, 80, 8, 6, 255, 0, 8, 7, 170, 0, 9, 2, 237, 255, 9, 3, 204, 128, 9, 4, 255, 0, 9, 5, 204, 0, 10, 3, 238, 0], "secondary": false }, { "width": 11, "bonus": 350, "chr": "Z", "pixels": [0, 2, 153, 255, 0, 13, 169, 255, 0, 14, 255, 255, 1, 2, 255, 255, 1, 3, 194, 135, 1, 12, 237, 255, 1, 13, 255, 255, 1, 14, 255, 255, 1, 15, 255, 0, 2, 2, 255, 255, 2, 3, 255, 102, 2, 10, 169, 255, 2, 11, 255, 255, 2, 12, 198, 219, 2, 13, 246, 123, 2, 14, 255, 255, 2, 15, 255, 0, 3, 2, 255, 255, 3, 3, 255, 102, 3, 9, 237, 255, 3, 10, 240, 253, 3, 11, 198, 109, 3, 12, 255, 0, 3, 13, 204, 128, 3, 14, 255, 255, 3, 15, 255, 0, 4, 2, 255, 255, 4, 3, 255, 102, 4, 7, 187, 255, 4, 8, 255, 255, 4, 9, 203, 213, 4, 10, 239, 18, 4, 11, 238, 0, 4, 14, 255, 255, 4, 15, 255, 0, 5, 2, 255, 255, 5, 3, 255, 102, 5, 6, 237, 255, 5, 7, 225, 251, 5, 8, 209, 104, 5, 9, 255, 0, 5, 10, 170, 0, 5, 14, 255, 255, 5, 15, 255, 0, 6, 2, 255, 255, 6, 3, 255, 119, 6, 4, 214, 223, 6, 5, 255, 255, 6, 6, 194, 201, 6, 7, 239, 18, 6, 8, 221, 0, 6, 14, 255, 255, 6, 15, 255, 0, 7, 2, 255, 255, 7, 3, 255, 255, 7, 4, 237, 238, 7, 5, 205, 85, 7, 6, 255, 0, 7, 7, 153, 0, 7, 14, 255, 255, 7, 15, 255, 0, 8, 2, 255, 255, 8, 3, 255, 153, 8, 4, 255, 17, 8, 5, 221, 0, 8, 14, 255, 255, 8, 15, 255, 0, 9, 3, 255, 0, 9, 4, 153, 0, 9, 15, 255, 0], "secondary": false }, { "width": 12, "bonus": 330, "chr": "0", "pixels": [1, 4, 203, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 210, 247, 2, 3, 255, 255, 2, 4, 217, 239, 2, 5, 221, 98, 2, 6, 255, 34, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 34, 2, 11, 255, 85, 2, 12, 254, 204, 2, 13, 255, 255, 3, 2, 187, 255, 3, 3, 200, 238, 3, 4, 255, 0, 3, 5, 204, 0, 3, 13, 241, 198, 3, 14, 255, 187, 4, 2, 255, 255, 4, 3, 214, 122, 4, 4, 187, 0, 4, 14, 255, 255, 4, 15, 187, 0, 5, 2, 255, 255, 5, 3, 255, 102, 5, 14, 255, 255, 5, 15, 255, 0, 6, 2, 187, 255, 6, 3, 255, 187, 6, 13, 187, 255, 6, 14, 214, 223, 6, 15, 255, 0, 7, 3, 255, 255, 7, 4, 241, 215, 7, 12, 203, 255, 7, 13, 255, 255, 7, 14, 205, 85, 7, 15, 187, 0, 8, 4, 254, 204, 8, 5, 255, 255, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 255, 255, 8, 9, 255, 255, 8, 10, 255, 255, 8, 11, 255, 255, 8, 12, 220, 236, 8, 13, 218, 80, 8, 14, 255, 0, 9, 5, 211, 41, 9, 6, 255, 85, 9, 7, 255, 119, 9, 8, 255, 119, 9, 9, 255, 119, 9, 10, 255, 85, 9, 11, 255, 34, 9, 12, 255, 0, 9, 13, 204, 0], "secondary": false }, { "width": 10, "bonus": 220, "chr": "1", "pixels": [0, 14, 221, 255, 1, 4, 255, 255, 1, 5, 187, 209, 1, 14, 255, 255, 1, 15, 221, 0, 2, 3, 255, 255, 2, 4, 176, 197, 2, 5, 255, 0, 2, 6, 153, 0, 2, 14, 255, 255, 2, 15, 255, 0, 3, 2, 255, 255, 3, 3, 255, 255, 3, 4, 255, 255, 3, 5, 255, 255, 3, 6, 255, 255, 3, 7, 255, 255, 3, 8, 255, 255, 3, 9, 255, 255, 3, 10, 255, 255, 3, 11, 255, 255, 3, 12, 255, 255, 3, 13, 255, 255, 3, 14, 255, 255, 3, 15, 255, 0, 4, 3, 255, 119, 4, 4, 255, 119, 4, 5, 255, 119, 4, 6, 255, 119, 4, 7, 255, 119, 4, 8, 255, 119, 4, 9, 255, 119, 4, 10, 255, 119, 4, 11, 255, 119, 4, 12, 255, 119, 4, 13, 254, 171, 4, 14, 255, 255, 4, 15, 255, 0, 5, 13, 174, 150, 5, 14, 255, 255, 5, 15, 255, 0, 6, 14, 255, 255, 6, 15, 255, 0, 7, 15, 255, 0], "secondary": false }, { "width": 11, "bonus": 310, "chr": "2", "pixels": [0, 14, 153, 255, 1, 3, 221, 255, 1, 4, 223, 253, 1, 11, 187, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 255, 255, 1, 15, 153, 0, 2, 3, 239, 254, 2, 4, 223, 19, 2, 5, 221, 0, 2, 10, 187, 255, 2, 11, 239, 254, 2, 12, 209, 104, 2, 13, 255, 102, 2, 14, 255, 255, 2, 15, 255, 0, 3, 2, 237, 255, 3, 3, 191, 159, 3, 4, 238, 0, 3, 9, 153, 255, 3, 10, 255, 255, 3, 11, 200, 65, 3, 12, 238, 0, 3, 13, 153, 171, 3, 14, 255, 255, 3, 15, 255, 0, 4, 2, 255, 255, 4, 3, 245, 107, 4, 9, 255, 255, 4, 10, 194, 135, 4, 11, 255, 0, 4, 14, 255, 255, 4, 15, 255, 0, 5, 2, 203, 255, 5, 3, 255, 187, 5, 8, 237, 255, 5, 9, 198, 219, 5, 10, 255, 0, 5, 14, 255, 255, 5, 15, 255, 0, 6, 3, 255, 255, 6, 4, 241, 215, 6, 6, 169, 255, 6, 7, 255, 255, 6, 8, 205, 233, 6, 9, 239, 18, 6, 10, 170, 0, 6, 14, 255, 255, 6, 15, 255, 0, 7, 4, 254, 204, 7, 5, 255, 255, 7, 6, 237, 238, 7, 7, 209, 145, 7, 8, 255, 0, 7, 9, 187, 0, 7, 14, 255, 255, 7, 15, 255, 0, 8, 5, 204, 0, 8, 6, 255, 0, 8, 7, 221, 0, 8, 15, 255, 0], "secondary": false }, { "width": 11, "bonus": 300, "chr": "3", "pixels": [1, 2, 255, 255, 1, 13, 255, 255, 1, 14, 168, 103, 2, 2, 255, 255, 2, 3, 255, 102, 2, 13, 210, 227, 2, 14, 255, 187, 3, 2, 255, 255, 3, 3, 255, 102, 3, 7, 203, 255, 3, 8, 255, 255, 3, 14, 250, 243, 3, 15, 187, 0, 4, 2, 255, 255, 4, 3, 255, 102, 4, 6, 237, 255, 4, 7, 240, 253, 4, 8, 255, 255, 4, 9, 255, 0, 4, 14, 255, 255, 4, 15, 238, 0, 5, 2, 255, 255, 5, 3, 255, 102, 5, 4, 184, 189, 5, 5, 255, 255, 5, 6, 187, 209, 5, 7, 240, 36, 5, 8, 255, 255, 5, 9, 255, 68, 5, 13, 169, 255, 5, 14, 224, 232, 5, 15, 255, 0, 6, 2, 255, 255, 6, 3, 254, 239, 6, 4, 244, 248, 6, 5, 184, 142, 6, 6, 255, 0, 6, 7, 153, 0, 6, 8, 196, 243, 6, 9, 255, 221, 6, 13, 255, 255, 6, 14, 204, 128, 6, 15, 204, 0, 7, 2, 255, 255, 7, 3, 255, 221, 7, 4, 241, 54, 7, 5, 238, 0, 7, 9, 246, 229, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 255, 255, 7, 13, 194, 201, 7, 14, 255, 0, 8, 3, 255, 17, 8, 4, 221, 0, 8, 10, 235, 111, 8, 11, 255, 119, 8, 12, 255, 51, 8, 13, 255, 0, 8, 14, 153, 0], "secondary": false }, { "width": 13, "bonus": 295, "chr": "4", "pixels": [1, 10, 237, 255, 2, 8, 153, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 245, 107, 3, 7, 221, 255, 3, 8, 223, 253, 3, 9, 173, 75, 3, 10, 255, 255, 3, 11, 255, 102, 4, 6, 255, 255, 4, 7, 173, 226, 4, 8, 223, 19, 4, 9, 221, 0, 4, 10, 255, 255, 4, 11, 255, 102, 5, 4, 187, 255, 5, 5, 237, 255, 5, 6, 164, 132, 5, 7, 255, 0, 5, 8, 153, 0, 5, 10, 255, 255, 5, 11, 255, 102, 6, 3, 237, 255, 6, 4, 210, 247, 6, 5, 196, 45, 6, 6, 238, 0, 6, 10, 255, 255, 6, 11, 255, 102, 7, 2, 255, 255, 7, 3, 255, 255, 7, 4, 255, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 255, 255, 7, 13, 255, 255, 7, 14, 255, 255, 8, 3, 255, 119, 8, 4, 255, 119, 8, 5, 255, 119, 8, 6, 255, 119, 8, 7, 255, 119, 8, 8, 255, 119, 8, 9, 255, 119, 8, 10, 255, 255, 8, 11, 254, 171, 8, 12, 255, 119, 8, 13, 255, 119, 8, 14, 255, 119, 8, 15, 255, 0, 9, 10, 255, 255, 9, 11, 255, 102, 9, 12, 170, 0, 10, 11, 255, 17], "secondary": false }, { "width": 11, "bonus": 310, "chr": "5", "pixels": [1, 2, 153, 255, 1, 3, 187, 255, 1, 4, 221, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 241, 252, 1, 13, 255, 255, 1, 14, 155, 112, 2, 2, 255, 255, 2, 3, 234, 222, 2, 4, 228, 171, 2, 5, 237, 128, 2, 6, 255, 102, 2, 7, 254, 204, 2, 8, 255, 153, 2, 9, 238, 0, 2, 13, 198, 219, 2, 14, 255, 187, 3, 2, 255, 255, 3, 3, 255, 102, 3, 4, 204, 0, 3, 5, 153, 0, 3, 7, 244, 248, 3, 8, 225, 116, 3, 9, 153, 0, 3, 14, 249, 243, 3, 15, 187, 0, 4, 2, 255, 255, 4, 3, 255, 102, 4, 7, 255, 255, 4, 8, 245, 107, 4, 14, 255, 255, 4, 15, 238, 0, 5, 2, 255, 255, 5, 3, 255, 102, 5, 7, 187, 255, 5, 8, 255, 187, 5, 13, 187, 255, 5, 14, 214, 223, 5, 15, 255, 0, 6, 2, 255, 255, 6, 3, 255, 102, 6, 8, 255, 255, 6, 9, 224, 155, 6, 13, 255, 255, 6, 14, 205, 85, 6, 15, 187, 0, 7, 2, 187, 255, 7, 3, 255, 68, 7, 8, 164, 185, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 255, 255, 7, 13, 182, 167, 7, 14, 255, 0, 8, 3, 187, 0, 8, 10, 255, 119, 8, 11, 255, 119, 8, 12, 255, 34, 8, 13, 255, 0], "secondary": false }, { "width": 11, "bonus": 355, "chr": "6", "pixels": [0, 8, 153, 255, 0, 9, 153, 255, 1, 5, 221, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 217, 239, 2, 4, 255, 255, 2, 5, 220, 236, 2, 6, 232, 93, 2, 7, 254, 171, 2, 8, 255, 221, 2, 9, 255, 34, 2, 10, 255, 17, 2, 11, 255, 85, 2, 12, 255, 221, 2, 13, 251, 242, 3, 3, 255, 255, 3, 4, 191, 159, 3, 5, 255, 0, 3, 6, 207, 21, 3, 7, 255, 255, 3, 8, 193, 90, 3, 9, 221, 0, 3, 13, 250, 226, 3, 14, 250, 191, 4, 2, 187, 255, 4, 3, 205, 233, 4, 4, 255, 0, 4, 7, 255, 255, 4, 8, 255, 0, 4, 14, 252, 241, 4, 15, 187, 0, 5, 2, 255, 255, 5, 3, 214, 122, 5, 4, 187, 0, 5, 7, 255, 255, 5, 8, 255, 17, 5, 14, 244, 248, 5, 15, 238, 0, 6, 2, 255, 255, 6, 3, 255, 102, 6, 7, 255, 255, 6, 8, 255, 119, 6, 13, 203, 255, 6, 14, 214, 223, 6, 15, 238, 0, 7, 2, 187, 255, 7, 3, 254, 171, 7, 8, 255, 255, 7, 9, 219, 218, 7, 12, 237, 255, 7, 13, 239, 254, 7, 14, 211, 41, 7, 15, 187, 0, 8, 3, 187, 0, 8, 4, 170, 0, 8, 8, 164, 132, 8, 9, 254, 204, 8, 10, 255, 255, 8, 11, 247, 245, 8, 12, 215, 201, 8, 13, 240, 36, 8, 14, 238, 0, 9, 10, 204, 0, 9, 11, 255, 0, 9, 12, 238, 0, 9, 13, 170, 0], "secondary": false }, { "width": 11, "bonus": 265, "chr": "7", "pixels": [0, 2, 221, 255, 1, 2, 255, 255, 1, 3, 235, 111, 1, 14, 187, 255, 2, 2, 255, 255, 2, 3, 255, 102, 2, 12, 187, 255, 2, 13, 255, 255, 2, 14, 217, 239, 2, 15, 187, 0, 3, 2, 255, 255, 3, 3, 255, 102, 3, 10, 187, 255, 3, 11, 255, 255, 3, 12, 217, 239, 3, 13, 209, 104, 3, 14, 255, 0, 3, 15, 204, 0, 4, 2, 255, 255, 4, 3, 255, 102, 4, 8, 187, 255, 4, 9, 255, 255, 4, 10, 217, 239, 4, 11, 209, 104, 4, 12, 255, 0, 4, 13, 204, 0, 5, 2, 255, 255, 5, 3, 255, 102, 5, 6, 187, 255, 5, 7, 255, 255, 5, 8, 217, 239, 5, 9, 209, 104, 5, 10, 255, 0, 5, 11, 204, 0, 6, 2, 255, 255, 6, 3, 255, 136, 6, 4, 214, 223, 6, 5, 255, 255, 6, 6, 217, 239, 6, 7, 209, 104, 6, 8, 255, 0, 6, 9, 204, 0, 7, 2, 255, 255, 7, 3, 255, 255, 7, 4, 239, 236, 7, 5, 209, 104, 7, 6, 255, 0, 7, 7, 204, 0, 8, 2, 153, 255, 8, 3, 255, 102, 8, 4, 255, 0, 8, 5, 221, 0, 9, 3, 153, 0], "secondary": false }, { "width": 11, "bonus": 380, "chr": "8", "pixels": [1, 4, 221, 255, 1, 5, 255, 255, 1, 6, 169, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 173, 226, 2, 3, 255, 255, 2, 4, 203, 213, 2, 5, 239, 145, 2, 6, 254, 239, 2, 7, 237, 219, 2, 8, 255, 255, 2, 9, 176, 197, 2, 10, 255, 17, 2, 11, 255, 0, 2, 12, 255, 119, 2, 13, 255, 255, 2, 14, 194, 135, 3, 2, 203, 255, 3, 3, 198, 219, 3, 4, 255, 0, 3, 5, 170, 0, 3, 7, 255, 255, 3, 8, 234, 167, 3, 9, 255, 0, 3, 13, 209, 207, 3, 14, 254, 204, 4, 2, 255, 255, 4, 3, 225, 116, 4, 4, 170, 0, 4, 7, 166, 235, 4, 8, 254, 204, 4, 9, 153, 0, 4, 14, 255, 255, 4, 15, 204, 0, 5, 2, 237, 255, 5, 3, 255, 119, 5, 8, 255, 255, 5, 9, 218, 80, 5, 14, 244, 248, 5, 15, 255, 0, 6, 2, 153, 255, 6, 3, 253, 223, 6, 7, 169, 255, 6, 8, 255, 255, 6, 9, 255, 187, 6, 13, 221, 255, 6, 14, 209, 207, 6, 15, 238, 0, 7, 3, 241, 234, 7, 4, 255, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 228, 247, 7, 8, 204, 128, 7, 9, 255, 255, 7, 10, 237, 201, 7, 12, 221, 255, 7, 13, 239, 254, 7, 14, 226, 39, 7, 15, 170, 0, 8, 4, 232, 93, 8, 5, 255, 119, 8, 6, 255, 68, 8, 7, 255, 0, 8, 8, 221, 0, 8, 10, 255, 221, 8, 11, 255, 255, 8, 12, 223, 214, 8, 13, 227, 57, 8, 14, 238, 0, 9, 11, 221, 0, 9, 12, 255, 0, 9, 13, 187, 0], "secondary": false }, { "width": 11, "bonus": 385, "chr": "9", "pixels": [0, 4, 169, 255, 0, 5, 237, 255, 0, 6, 255, 255, 0, 7, 203, 255, 1, 3, 237, 255, 1, 4, 240, 253, 1, 5, 216, 161, 1, 6, 247, 141, 1, 7, 255, 187, 1, 8, 255, 255, 1, 9, 153, 171, 1, 13, 169, 255, 1, 14, 187, 255, 2, 2, 169, 255, 2, 3, 225, 251, 2, 4, 239, 18, 2, 5, 238, 0, 2, 8, 224, 155, 2, 9, 255, 255, 2, 14, 255, 255, 2, 15, 187, 0, 3, 2, 237, 255, 3, 3, 209, 145, 3, 4, 221, 0, 3, 9, 255, 255, 3, 10, 255, 85, 3, 14, 255, 255, 3, 15, 255, 0, 4, 2, 255, 255, 4, 3, 245, 107, 4, 9, 255, 255, 4, 10, 255, 85, 4, 13, 153, 255, 4, 14, 224, 232, 4, 15, 255, 0, 5, 2, 203, 255, 5, 3, 255, 187, 5, 9, 255, 255, 5, 10, 255, 34, 5, 13, 255, 255, 5, 14, 200, 152, 5, 15, 204, 0, 6, 3, 255, 255, 6, 4, 228, 171, 6, 8, 169, 255, 6, 9, 200, 238, 6, 10, 255, 0, 6, 12, 237, 255, 6, 13, 205, 233, 6, 14, 255, 0, 7, 3, 164, 185, 7, 4, 255, 255, 7, 5, 248, 244, 7, 6, 169, 255, 7, 7, 187, 255, 7, 8, 255, 255, 7, 9, 237, 219, 7, 10, 250, 243, 7, 11, 255, 255, 7, 12, 209, 207, 7, 13, 239, 18, 7, 14, 187, 0, 8, 5, 255, 153, 8, 6, 253, 223, 8, 7, 255, 255, 8, 8, 255, 255, 8, 9, 254, 204, 8, 10, 234, 167, 8, 11, 243, 71, 8, 12, 255, 0, 8, 13, 170, 0, 9, 6, 153, 0, 9, 7, 221, 0, 9, 8, 255, 0, 9, 9, 255, 0, 9, 10, 204, 0, 9, 11, 153, 0], "secondary": false }, { "width": 14, "bonus": 470, "chr": "%", "pixels": [0, 3, 187, 255, 0, 4, 255, 255, 0, 5, 203, 255, 0, 14, 153, 255, 1, 2, 187, 255, 1, 3, 191, 250, 1, 4, 205, 85, 1, 5, 255, 153, 1, 6, 251, 242, 1, 13, 203, 255, 1, 14, 207, 251, 1, 15, 153, 0, 2, 2, 255, 255, 2, 3, 205, 85, 2, 4, 187, 0, 2, 6, 255, 255, 2, 7, 243, 71, 2, 12, 237, 255, 2, 13, 173, 226, 2, 14, 207, 21, 2, 15, 204, 0, 3, 2, 203, 255, 3, 3, 255, 153, 3, 6, 255, 255, 3, 7, 255, 17, 3, 10, 153, 255, 3, 11, 237, 255, 3, 12, 163, 160, 3, 13, 238, 0, 3, 14, 153, 0, 4, 3, 251, 242, 4, 4, 255, 255, 4, 5, 255, 255, 4, 6, 163, 160, 4, 7, 255, 0, 4, 9, 203, 255, 4, 10, 203, 255, 4, 11, 173, 75, 4, 12, 238, 0, 5, 4, 243, 71, 5, 5, 255, 17, 5, 6, 255, 0, 5, 7, 153, 141, 5, 8, 237, 255, 5, 9, 166, 235, 5, 10, 207, 21, 5, 11, 204, 0, 6, 6, 160, 244, 6, 7, 237, 255, 6, 8, 153, 171, 6, 9, 238, 0, 6, 10, 159, 27, 6, 11, 175, 247, 6, 12, 255, 255, 6, 13, 187, 255, 7, 5, 203, 255, 7, 6, 203, 255, 7, 7, 173, 75, 7, 8, 238, 0, 7, 10, 169, 255, 7, 11, 207, 251, 7, 12, 204, 128, 7, 13, 254, 204, 7, 14, 232, 187, 8, 4, 237, 255, 8, 5, 166, 235, 8, 6, 207, 21, 8, 7, 204, 0, 8, 10, 255, 255, 8, 11, 193, 90, 8, 12, 204, 0, 8, 14, 255, 255, 8, 15, 170, 0, 9, 2, 153, 255, 9, 3, 237, 255, 9, 4, 153, 171, 9, 5, 238, 0, 9, 6, 153, 0, 9, 10, 203, 255, 9, 11, 255, 136, 9, 14, 217, 239, 9, 15, 255, 0, 10, 2, 203, 255, 10, 3, 173, 75, 10, 4, 238, 0, 10, 11, 251, 242, 10, 12, 255, 255, 10, 13, 237, 255, 10, 14, 168, 103, 10, 15, 204, 0, 11, 3, 204, 0, 11, 12, 243, 71, 11, 13, 255, 17, 11, 14, 238, 0], "secondary": false }, { "width": 8, "bonus": 180, "chr": "/", "pixels": [0, 15, 221, 255, 1, 12, 221, 255, 1, 13, 255, 255, 1, 14, 230, 245, 1, 15, 200, 174, 1, 16, 221, 0, 2, 8, 153, 255, 2, 9, 237, 255, 2, 10, 255, 255, 2, 11, 230, 245, 2, 12, 200, 174, 2, 13, 227, 57, 2, 14, 255, 0, 2, 15, 221, 0, 3, 5, 153, 255, 3, 6, 237, 255, 3, 7, 255, 255, 3, 8, 217, 239, 3, 9, 200, 152, 3, 10, 240, 36, 3, 11, 255, 0, 3, 12, 221, 0, 4, 2, 169, 255, 4, 3, 237, 255, 4, 4, 255, 255, 4, 5, 205, 233, 4, 6, 200, 152, 4, 7, 240, 36, 4, 8, 255, 0, 4, 9, 204, 0, 5, 2, 196, 243, 5, 3, 204, 128, 5, 4, 240, 36, 5, 5, 255, 0, 5, 6, 187, 0, 6, 3, 187, 0], "secondary": false }, { "width": 11, "bonus": 180, "chr": "+", "pixels": [0, 9, 255, 255, 1, 9, 255, 255, 1, 10, 255, 68, 2, 9, 255, 255, 2, 10, 255, 68, 3, 9, 255, 255, 3, 10, 255, 136, 4, 4, 153, 255, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 255, 255, 4, 8, 255, 255, 4, 9, 255, 255, 4, 10, 255, 255, 4, 11, 255, 255, 4, 12, 255, 255, 4, 13, 255, 255, 4, 14, 255, 255, 5, 5, 153, 0, 5, 6, 255, 0, 5, 7, 255, 0, 5, 8, 255, 0, 5, 9, 255, 255, 5, 10, 255, 68, 5, 11, 255, 0, 5, 12, 255, 0, 5, 13, 255, 0, 5, 14, 255, 0, 5, 15, 255, 0, 6, 9, 255, 255, 6, 10, 255, 68, 7, 9, 255, 255, 7, 10, 255, 68, 8, 9, 255, 255, 8, 10, 255, 68, 9, 10, 255, 0], "secondary": false }, { "width": 9, "bonus": 200, "chr": "?", "pixels": [0, 3, 187, 255, 1, 2, 187, 255, 1, 3, 205, 233, 1, 4, 187, 0, 2, 2, 255, 255, 2, 3, 214, 122, 2, 4, 187, 0, 2, 9, 187, 255, 2, 10, 255, 255, 2, 11, 187, 255, 2, 13, 153, 255, 2, 14, 255, 255, 3, 2, 237, 255, 3, 3, 255, 119, 3, 8, 237, 255, 3, 9, 225, 251, 3, 10, 224, 155, 3, 11, 255, 85, 3, 12, 187, 0, 3, 14, 214, 182, 3, 15, 255, 0, 4, 2, 169, 255, 4, 3, 253, 223, 4, 7, 237, 255, 4, 8, 192, 225, 4, 9, 239, 18, 4, 10, 221, 0, 4, 15, 153, 0, 5, 3, 244, 231, 5, 4, 255, 255, 5, 5, 255, 255, 5, 6, 255, 255, 5, 7, 198, 219, 5, 8, 238, 0, 5, 9, 170, 0, 6, 4, 235, 111, 6, 5, 255, 119, 6, 6, 255, 68, 6, 7, 255, 0, 6, 8, 170, 0], "secondary": false }, { "width": 4, "bonus": 125, "chr": "!", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 153, 255, 0, 13, 153, 255, 0, 14, 255, 255, 1, 3, 255, 119, 1, 4, 255, 119, 1, 5, 255, 119, 1, 6, 255, 119, 1, 7, 255, 119, 1, 8, 255, 119, 1, 9, 255, 119, 1, 10, 255, 119, 1, 11, 255, 68, 1, 12, 153, 0, 1, 14, 214, 182, 1, 15, 255, 0, 2, 15, 153, 0], "secondary": false }, { "width": 15, "bonus": 470, "chr": "@", "pixels": [1, 7, 187, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 228, 247, 2, 6, 237, 255, 2, 7, 225, 251, 2, 8, 214, 122, 2, 9, 255, 17, 2, 10, 255, 0, 2, 11, 255, 17, 2, 12, 255, 68, 2, 13, 255, 187, 2, 14, 255, 255, 2, 15, 164, 185, 3, 5, 237, 255, 3, 6, 192, 225, 3, 7, 238, 0, 3, 8, 221, 0, 3, 14, 218, 139, 3, 15, 255, 255, 3, 16, 155, 112, 4, 5, 223, 253, 4, 6, 238, 0, 4, 7, 170, 0, 4, 9, 187, 255, 4, 10, 255, 255, 4, 11, 221, 255, 4, 15, 209, 207, 4, 16, 255, 221, 5, 4, 203, 255, 5, 5, 182, 167, 5, 6, 221, 0, 5, 8, 255, 255, 5, 9, 217, 239, 5, 10, 218, 139, 5, 11, 254, 171, 5, 12, 255, 255, 5, 13, 173, 175, 5, 16, 255, 255, 5, 17, 227, 57, 6, 4, 255, 255, 6, 5, 218, 80, 6, 7, 187, 255, 6, 8, 192, 225, 6, 9, 255, 0, 6, 10, 204, 0, 6, 12, 204, 128, 6, 13, 255, 255, 6, 16, 255, 255, 6, 17, 255, 85, 7, 4, 255, 255, 7, 5, 255, 68, 7, 7, 255, 255, 7, 8, 205, 85, 7, 9, 170, 0, 7, 13, 255, 255, 7, 14, 255, 68, 7, 17, 255, 17, 8, 4, 203, 255, 8, 5, 255, 119, 8, 7, 255, 255, 8, 8, 255, 68, 8, 13, 255, 255, 8, 14, 255, 68, 9, 5, 248, 227, 9, 7, 255, 255, 9, 8, 255, 68, 9, 13, 255, 255, 9, 14, 255, 68, 10, 5, 231, 225, 10, 6, 255, 255, 10, 7, 255, 255, 10, 8, 255, 255, 10, 9, 255, 255, 10, 10, 255, 255, 10, 11, 255, 255, 10, 12, 255, 255, 10, 13, 255, 255, 10, 14, 255, 68, 11, 6, 221, 98, 11, 7, 255, 119, 11, 8, 255, 119, 11, 9, 255, 119, 11, 10, 255, 119, 11, 11, 255, 119, 11, 12, 255, 119, 11, 13, 255, 255, 11, 14, 255, 68, 12, 13, 219, 218, 12, 14, 255, 51, 13, 14, 187, 0], "secondary": false }, { "width": 14, "bonus": 440, "chr": "#", "pixels": [0, 10, 221, 255, 1, 6, 255, 255, 1, 10, 255, 255, 1, 11, 230, 75, 2, 6, 255, 255, 2, 7, 255, 68, 2, 10, 255, 255, 2, 11, 254, 171, 2, 12, 192, 225, 2, 13, 203, 255, 2, 14, 237, 255, 3, 6, 255, 255, 3, 7, 254, 204, 3, 8, 242, 251, 3, 9, 255, 255, 3, 10, 255, 255, 3, 11, 255, 221, 3, 12, 226, 192, 3, 13, 216, 161, 3, 14, 221, 98, 3, 15, 238, 0, 4, 2, 221, 255, 4, 3, 255, 255, 4, 4, 255, 255, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 255, 187, 4, 8, 225, 116, 4, 9, 241, 54, 4, 10, 255, 255, 4, 11, 255, 68, 4, 12, 221, 0, 4, 13, 170, 0, 5, 3, 230, 75, 5, 4, 255, 34, 5, 5, 255, 0, 5, 6, 255, 255, 5, 7, 255, 68, 5, 8, 187, 0, 5, 10, 255, 255, 5, 11, 255, 68, 6, 6, 255, 255, 6, 7, 255, 68, 6, 10, 255, 255, 6, 11, 255, 119, 6, 12, 155, 196, 6, 13, 153, 255, 6, 14, 187, 255, 7, 6, 255, 255, 7, 7, 254, 171, 7, 8, 205, 233, 7, 9, 237, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 245, 247, 7, 13, 219, 218, 7, 14, 208, 167, 7, 15, 187, 0, 8, 2, 169, 255, 8, 3, 203, 255, 8, 4, 255, 255, 8, 5, 255, 255, 8, 6, 255, 255, 8, 7, 255, 221, 8, 8, 226, 192, 8, 9, 218, 139, 8, 10, 255, 255, 8, 11, 255, 68, 8, 12, 255, 0, 8, 13, 238, 0, 8, 14, 187, 0, 9, 2, 169, 255, 9, 3, 216, 161, 9, 4, 221, 98, 9, 5, 255, 51, 9, 6, 255, 255, 9, 7, 255, 68, 9, 8, 221, 0, 9, 9, 170, 0, 9, 10, 255, 255, 9, 11, 255, 68, 10, 3, 170, 0, 10, 6, 255, 255, 10, 7, 255, 68, 10, 10, 187, 255, 10, 11, 255, 34, 11, 7, 255, 34, 11, 11, 187, 0], "secondary": false }, { "width": 11, "bonus": 310, "chr": "$", "pixels": [1, 4, 203, 255, 1, 5, 255, 255, 1, 6, 187, 255, 1, 13, 221, 255, 2, 3, 255, 255, 2, 4, 210, 227, 2, 5, 231, 150, 2, 6, 255, 221, 2, 7, 246, 229, 2, 13, 245, 247, 2, 14, 239, 145, 3, 2, 203, 255, 3, 3, 205, 233, 3, 4, 255, 0, 3, 5, 187, 0, 3, 7, 255, 255, 3, 8, 237, 128, 3, 13, 166, 235, 3, 14, 253, 223, 4, 0, 255, 255, 4, 1, 255, 255, 4, 2, 255, 255, 4, 3, 225, 116, 4, 4, 187, 0, 4, 8, 254, 239, 4, 14, 255, 255, 4, 15, 255, 255, 4, 16, 255, 255, 5, 1, 255, 68, 5, 2, 254, 239, 5, 3, 255, 102, 5, 8, 255, 255, 5, 9, 245, 107, 5, 14, 244, 248, 5, 15, 255, 68, 5, 16, 255, 68, 5, 17, 255, 0, 6, 2, 217, 239, 6, 3, 249, 174, 6, 8, 181, 239, 6, 9, 255, 221, 6, 13, 203, 255, 6, 14, 219, 218, 6, 15, 238, 0, 7, 3, 255, 255, 7, 4, 181, 48, 7, 9, 249, 243, 7, 10, 250, 226, 7, 12, 187, 255, 7, 13, 255, 255, 7, 14, 218, 80, 7, 15, 187, 0, 8, 3, 192, 181, 8, 4, 255, 17, 8, 10, 250, 191, 8, 11, 255, 255, 8, 12, 231, 225, 8, 13, 205, 85, 8, 14, 255, 0, 9, 11, 187, 0, 9, 12, 255, 0, 9, 13, 204, 0], "secondary": false }, { "width": 10, "bonus": 170, "chr": "^", "pixels": [1, 7, 187, 255, 1, 8, 255, 255, 1, 9, 210, 247, 1, 10, 159, 82, 2, 5, 221, 255, 2, 6, 255, 255, 2, 7, 192, 225, 2, 8, 200, 65, 2, 9, 255, 0, 2, 10, 204, 0, 3, 2, 153, 255, 3, 3, 255, 255, 3, 4, 223, 253, 3, 5, 182, 167, 3, 6, 223, 19, 3, 7, 255, 0, 3, 8, 170, 0, 4, 2, 187, 255, 4, 3, 255, 255, 4, 4, 255, 187, 4, 5, 230, 75, 5, 3, 200, 65, 5, 4, 255, 153, 5, 5, 250, 243, 5, 6, 230, 245, 6, 5, 159, 27, 6, 6, 245, 107, 6, 7, 248, 209, 6, 8, 255, 255, 6, 9, 196, 243, 7, 8, 218, 80, 7, 9, 254, 171, 7, 10, 209, 104, 8, 10, 170, 0], "secondary": false }, { "width": 11, "bonus": 115, "chr": "~", "pixels": [0, 8, 187, 255, 0, 9, 255, 255, 1, 7, 221, 255, 1, 8, 196, 243, 1, 9, 205, 85, 1, 10, 255, 0, 2, 7, 255, 255, 2, 8, 230, 75, 2, 9, 187, 0, 3, 7, 169, 255, 3, 8, 255, 187, 4, 8, 232, 205, 4, 9, 237, 201, 5, 9, 255, 255, 5, 10, 200, 65, 6, 9, 255, 255, 6, 10, 255, 51, 7, 7, 221, 255, 7, 8, 255, 255, 7, 9, 176, 197, 7, 10, 255, 0, 8, 8, 223, 19, 8, 9, 255, 0], "secondary": false }, { "width": 13, "bonus": 385, "chr": "&", "pixels": [0, 10, 221, 255, 0, 11, 255, 255, 0, 12, 203, 255, 1, 4, 221, 255, 1, 5, 255, 255, 1, 6, 203, 255, 1, 9, 255, 255, 1, 10, 198, 219, 1, 11, 239, 145, 1, 12, 254, 204, 1, 13, 251, 242, 2, 3, 255, 255, 2, 4, 214, 223, 2, 5, 237, 128, 2, 6, 255, 187, 2, 7, 255, 255, 2, 8, 230, 245, 2, 9, 168, 207, 2, 10, 255, 0, 2, 11, 170, 0, 2, 13, 248, 227, 2, 14, 249, 174, 3, 2, 203, 255, 3, 3, 210, 227, 3, 4, 255, 0, 3, 5, 187, 0, 3, 7, 237, 201, 3, 8, 255, 255, 3, 9, 226, 39, 3, 14, 252, 241, 3, 15, 170, 0, 4, 2, 255, 255, 4, 3, 225, 116, 4, 4, 187, 0, 4, 8, 255, 255, 4, 9, 255, 0, 4, 14, 255, 255, 4, 15, 238, 0, 5, 2, 237, 255, 5, 3, 255, 102, 5, 8, 255, 255, 5, 9, 255, 0, 5, 14, 244, 248, 5, 15, 255, 0, 6, 3, 238, 0, 6, 8, 255, 255, 6, 9, 255, 0, 6, 13, 221, 255, 6, 14, 209, 207, 6, 15, 238, 0, 7, 7, 169, 255, 7, 8, 255, 255, 7, 9, 255, 119, 7, 11, 153, 255, 7, 12, 237, 255, 7, 13, 239, 254, 7, 14, 226, 39, 7, 15, 170, 0, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 255, 255, 8, 9, 255, 255, 8, 10, 255, 255, 8, 11, 245, 247, 8, 12, 220, 197, 8, 13, 240, 36, 8, 14, 238, 0, 9, 7, 255, 102, 9, 8, 255, 255, 9, 9, 255, 0, 9, 10, 255, 0, 9, 11, 255, 0, 9, 12, 238, 0, 9, 13, 170, 0, 10, 8, 214, 223, 10, 9, 255, 0, 11, 9, 187, 0], "secondary": false }, { "width": 10, "bonus": 160, "chr": "*", "pixels": [1, 4, 255, 255, 2, 4, 175, 247, 2, 5, 254, 171, 2, 7, 221, 255, 2, 8, 160, 244, 3, 4, 169, 255, 3, 5, 249, 243, 3, 6, 249, 243, 3, 7, 200, 238, 3, 8, 226, 39, 3, 9, 153, 0, 4, 2, 255, 255, 4, 3, 255, 255, 4, 4, 255, 255, 4, 5, 255, 255, 4, 6, 253, 223, 4, 7, 240, 36, 4, 8, 187, 0, 5, 3, 255, 0, 5, 4, 255, 119, 5, 5, 255, 221, 5, 6, 255, 187, 5, 7, 252, 241, 6, 4, 221, 255, 6, 5, 200, 195, 6, 6, 221, 0, 6, 7, 224, 155, 6, 8, 245, 107, 7, 4, 187, 255, 7, 5, 230, 75, 7, 6, 153, 0, 8, 5, 187, 0], "secondary": false }, { "width": 6, "bonus": 165, "chr": "(", "pixels": [1, 3, 153, 255, 1, 4, 237, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 207, 251, 2, 1, 153, 255, 2, 2, 255, 255, 2, 3, 225, 251, 2, 4, 208, 167, 2, 5, 243, 71, 2, 6, 255, 17, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 17, 2, 10, 255, 51, 2, 11, 255, 102, 2, 12, 254, 171, 2, 13, 251, 242, 2, 14, 255, 255, 3, 1, 221, 255, 3, 2, 187, 116, 3, 3, 255, 0, 3, 4, 221, 0, 3, 13, 175, 25, 3, 14, 246, 123, 3, 15, 254, 239, 4, 2, 221, 0, 4, 16, 238, 0], "secondary": false }, { "width": 6, "bonus": 170, "chr": ")", "pixels": [0, 1, 221, 255, 0, 15, 237, 255, 1, 1, 166, 235, 1, 2, 255, 255, 1, 3, 232, 243, 1, 12, 169, 255, 1, 13, 237, 255, 1, 14, 255, 255, 1, 15, 192, 181, 1, 16, 238, 0, 2, 2, 167, 52, 2, 3, 255, 153, 2, 4, 252, 241, 2, 5, 255, 255, 2, 6, 255, 255, 2, 7, 255, 255, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 255, 255, 2, 12, 224, 232, 2, 13, 209, 145, 2, 14, 239, 18, 2, 15, 255, 0, 3, 4, 153, 0, 3, 5, 241, 54, 3, 6, 255, 102, 3, 7, 255, 119, 3, 8, 255, 119, 3, 9, 255, 102, 3, 10, 255, 68, 3, 11, 255, 17, 3, 12, 255, 0, 3, 13, 204, 0], "secondary": false }, { "width": 12, "bonus": 90, "chr": "_", "pixels": [0, 15, 255, 255, 1, 15, 255, 255, 1, 16, 255, 68, 2, 15, 255, 255, 2, 16, 255, 68, 3, 15, 255, 255, 3, 16, 255, 68, 4, 15, 255, 255, 4, 16, 255, 68, 5, 15, 255, 255, 5, 16, 255, 68, 6, 15, 255, 255, 6, 16, 255, 68, 7, 15, 255, 255, 7, 16, 255, 68, 8, 15, 255, 255, 8, 16, 255, 68, 9, 16, 255, 34], "secondary": false }, { "width": 7, "bonus": 50, "chr": "-", "pixels": [0, 9, 255, 255, 1, 9, 255, 255, 1, 10, 255, 102, 2, 9, 255, 255, 2, 10, 255, 102, 3, 9, 255, 255, 3, 10, 255, 102, 4, 9, 255, 255, 4, 10, 255, 102, 5, 10, 255, 34], "secondary": true }, { "width": 11, "bonus": 180, "chr": "=", "pixels": [0, 7, 153, 255, 0, 10, 153, 255, 1, 7, 255, 255, 1, 8, 153, 0, 1, 10, 255, 255, 1, 11, 153, 0, 2, 7, 255, 255, 2, 8, 255, 0, 2, 10, 255, 255, 2, 11, 255, 0, 3, 7, 255, 255, 3, 8, 255, 0, 3, 10, 255, 255, 3, 11, 255, 0, 4, 7, 255, 255, 4, 8, 255, 0, 4, 10, 255, 255, 4, 11, 255, 0, 5, 7, 255, 255, 5, 8, 255, 0, 5, 10, 255, 255, 5, 11, 255, 0, 6, 7, 255, 255, 6, 8, 255, 0, 6, 10, 255, 255, 6, 11, 255, 0, 7, 7, 255, 255, 7, 8, 255, 0, 7, 10, 255, 255, 7, 11, 255, 0, 8, 7, 255, 255, 8, 8, 255, 0, 8, 10, 255, 255, 8, 11, 255, 0, 9, 8, 255, 0, 9, 11, 255, 0], "secondary": false }, { "width": 5, "bonus": 185, "chr": "[", "pixels": [0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 255, 255, 0, 15, 255, 255, 0, 16, 255, 255, 1, 2, 255, 255, 1, 3, 255, 102, 1, 4, 255, 102, 1, 5, 255, 102, 1, 6, 255, 102, 1, 7, 255, 102, 1, 8, 255, 102, 1, 9, 255, 102, 1, 10, 255, 102, 1, 11, 255, 102, 1, 12, 255, 102, 1, 13, 255, 102, 1, 14, 255, 102, 1, 15, 255, 136, 1, 16, 255, 255, 1, 17, 255, 0, 2, 2, 180, 217, 2, 3, 255, 0, 2, 16, 207, 188, 2, 17, 255, 0, 3, 3, 153, 0, 3, 17, 153, 0], "secondary": false }, { "width": 5, "bonus": 185, "chr": "]", "pixels": [0, 2, 153, 255, 0, 16, 153, 255, 1, 2, 255, 255, 1, 3, 194, 135, 1, 16, 255, 255, 1, 17, 153, 0, 2, 2, 255, 255, 2, 3, 255, 255, 2, 4, 255, 255, 2, 5, 255, 255, 2, 6, 255, 255, 2, 7, 255, 255, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 255, 255, 2, 12, 255, 255, 2, 13, 255, 255, 2, 14, 255, 255, 2, 15, 255, 255, 2, 16, 255, 255, 2, 17, 255, 0, 3, 3, 255, 0, 3, 4, 255, 0, 3, 5, 255, 0, 3, 6, 255, 0, 3, 7, 255, 0, 3, 8, 255, 0, 3, 9, 255, 0, 3, 10, 255, 0, 3, 11, 255, 0, 3, 12, 255, 0, 3, 13, 255, 0, 3, 14, 255, 0, 3, 15, 255, 0, 3, 16, 255, 0, 3, 17, 255, 0], "secondary": false }, { "width": 8, "bonus": 180, "chr": "{", "pixels": [1, 9, 237, 255, 2, 8, 255, 255, 2, 9, 245, 247, 2, 10, 251, 207, 3, 3, 255, 255, 3, 4, 255, 255, 3, 5, 255, 255, 3, 6, 255, 255, 3, 7, 244, 248, 3, 8, 191, 159, 3, 9, 255, 34, 3, 10, 250, 191, 3, 11, 255, 255, 3, 12, 255, 255, 3, 13, 255, 255, 3, 14, 255, 255, 3, 15, 242, 251, 4, 2, 255, 255, 4, 3, 182, 167, 4, 4, 255, 17, 4, 5, 255, 0, 4, 6, 255, 0, 4, 7, 255, 0, 4, 8, 238, 0, 4, 11, 187, 0, 4, 12, 255, 0, 4, 13, 255, 0, 4, 14, 255, 17, 4, 15, 254, 171, 4, 16, 251, 207, 5, 2, 191, 250, 5, 3, 255, 0, 5, 16, 232, 205, 5, 17, 204, 0, 6, 3, 187, 0, 6, 17, 187, 0], "secondary": false }, { "width": 7, "bonus": 190, "chr": "}", "pixels": [0, 2, 187, 255, 0, 16, 187, 255, 1, 2, 255, 255, 1, 3, 218, 139, 1, 15, 169, 255, 1, 16, 214, 243, 1, 17, 187, 0, 2, 3, 255, 255, 2, 4, 255, 255, 2, 5, 255, 255, 2, 6, 255, 255, 2, 7, 237, 255, 2, 10, 187, 255, 2, 11, 255, 255, 2, 12, 255, 255, 2, 13, 255, 255, 2, 14, 255, 255, 2, 15, 239, 254, 2, 16, 193, 90, 2, 17, 204, 0, 3, 4, 255, 85, 3, 5, 255, 102, 3, 6, 255, 102, 3, 7, 255, 136, 3, 8, 255, 255, 3, 9, 245, 247, 3, 10, 210, 247, 3, 11, 214, 122, 3, 12, 255, 102, 3, 13, 255, 102, 3, 14, 255, 68, 3, 15, 255, 17, 3, 16, 238, 0, 4, 8, 200, 174, 4, 9, 254, 239, 4, 10, 239, 18, 4, 11, 204, 0, 5, 10, 238, 0], "secondary": false }, { "width": 4, "bonus": 55, "chr": ":", "pixels": [0, 5, 153, 255, 0, 13, 153, 255, 1, 5, 255, 255, 1, 6, 228, 209, 1, 12, 187, 255, 1, 13, 255, 255, 1, 14, 153, 0, 2, 6, 255, 0, 2, 7, 187, 0, 2, 13, 187, 0, 2, 14, 255, 0], "secondary": true }, { "width": 5, "bonus": 65, "chr": ";", "pixels": [1, 5, 153, 255, 1, 13, 221, 255, 1, 14, 255, 255, 1, 15, 225, 251, 2, 5, 255, 255, 2, 6, 228, 209, 2, 13, 187, 209, 2, 14, 230, 75, 2, 15, 255, 0, 2, 16, 221, 0, 3, 6, 255, 0, 3, 7, 187, 0, 3, 14, 153, 0], "secondary": true }, { "width": 7, "bonus": 75, "chr": '"', "pixels": [0, 3, 187, 255, 1, 1, 255, 255, 1, 2, 240, 253, 1, 3, 209, 207, 1, 4, 200, 65, 2, 2, 255, 85, 2, 3, 248, 157, 2, 4, 193, 90, 3, 1, 237, 255, 3, 2, 255, 255, 3, 3, 220, 236, 3, 4, 180, 96, 4, 2, 239, 18, 4, 3, 255, 0, 4, 4, 204, 0], "secondary": true }, { "width": 4, "bonus": 40, "chr": "'", "pixels": [0, 3, 187, 255, 1, 1, 255, 255, 1, 2, 240, 253, 1, 3, 219, 218, 1, 4, 200, 65, 2, 2, 255, 0, 2, 3, 238, 0, 2, 4, 187, 0], "secondary": true }, { "width": 12, "bonus": 170, "chr": "<", "pixels": [1, 9, 237, 255, 2, 8, 237, 255, 2, 9, 255, 255, 2, 10, 245, 107, 3, 8, 237, 255, 3, 9, 247, 141, 3, 10, 255, 221, 4, 7, 221, 255, 4, 8, 184, 189, 4, 9, 239, 18, 4, 10, 255, 255, 4, 11, 232, 93, 5, 7, 255, 255, 5, 8, 223, 19, 5, 10, 175, 247, 5, 11, 255, 187, 6, 6, 187, 255, 6, 7, 198, 219, 6, 8, 255, 0, 6, 11, 255, 255, 6, 12, 200, 65, 7, 6, 255, 255, 7, 7, 200, 65, 7, 8, 170, 0, 7, 11, 214, 243, 7, 12, 254, 171, 8, 5, 169, 255, 8, 6, 214, 243, 8, 7, 255, 0, 8, 12, 255, 255, 8, 13, 181, 48, 9, 6, 187, 70, 9, 7, 204, 0, 9, 13, 255, 34], "secondary": false }, { "width": 11, "bonus": 165, "chr": ">", "pixels": [0, 12, 187, 255, 1, 6, 239, 236, 1, 12, 223, 253, 1, 13, 187, 0, 2, 6, 255, 255, 2, 7, 232, 93, 2, 11, 221, 255, 2, 12, 174, 150, 2, 13, 221, 0, 3, 6, 181, 239, 3, 7, 255, 187, 3, 11, 237, 255, 3, 12, 223, 19, 4, 7, 255, 255, 4, 8, 200, 65, 4, 10, 187, 255, 4, 11, 176, 197, 4, 12, 238, 0, 5, 7, 200, 238, 5, 8, 255, 153, 5, 10, 255, 255, 5, 11, 196, 45, 6, 8, 255, 255, 6, 9, 220, 197, 6, 10, 200, 238, 6, 11, 255, 0, 7, 8, 232, 243, 7, 9, 255, 255, 7, 10, 193, 90, 7, 11, 187, 0, 8, 9, 243, 178, 8, 10, 255, 0, 9, 10, 170, 0], "secondary": false }, { "width": 8, "bonus": 135, "chr": "\\", "pixels": [0, 2, 187, 255, 1, 2, 198, 219, 1, 3, 250, 243, 1, 4, 255, 255, 1, 5, 196, 243, 2, 3, 170, 0, 2, 4, 243, 89, 2, 5, 254, 171, 2, 6, 250, 243, 2, 7, 255, 255, 2, 8, 210, 247, 3, 6, 170, 0, 3, 7, 243, 71, 3, 8, 255, 153, 3, 9, 251, 242, 3, 10, 255, 255, 3, 11, 210, 247, 4, 9, 153, 0, 4, 10, 243, 71, 4, 11, 255, 136, 4, 12, 248, 227, 4, 13, 255, 255, 4, 14, 228, 247, 5, 13, 230, 75, 5, 14, 255, 136, 5, 15, 250, 226, 6, 16, 221, 0], "secondary": false }, { "width": 4, "bonus": 30, "chr": ".", "pixels": [0, 14, 153, 255, 1, 13, 187, 255, 1, 14, 255, 255, 1, 15, 153, 0, 2, 14, 187, 0, 2, 15, 255, 0], "secondary": true }, { "width": 6, "bonus": 40, "chr": ",", "pixels": [1, 16, 221, 255, 2, 14, 255, 255, 2, 15, 230, 245, 2, 16, 191, 159, 2, 17, 221, 0, 3, 14, 155, 112, 3, 15, 255, 0, 3, 16, 221, 0], "secondary": true }, { "width": 4, "bonus": 170, "chr": "|", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 1, 14, 255, 255, 1, 15, 255, 255, 1, 16, 255, 255, 1, 17, 255, 255, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0, 2, 13, 255, 0, 2, 14, 255, 0, 2, 15, 255, 0, 2, 16, 255, 0, 2, 17, 255, 0, 2, 18, 255, 0], "secondary": false }], "width": 18, "spacewidth": 6, "shadow": true, "height": 19, "basey": 14 };
              })
            ),
            /***/
            0: (
              /***/
              (function(module2, exports2, __webpack_require__) {
                module2.exports = __webpack_require__("./fonts/chat_13px.fontmeta.json");
              })
            )
            /******/
          })
        );
      });
    }
  });

  // node_modules/@alt1/ocr/dist/fonts/chat_11px.js
  var require_chat_11px = __commonJS({
    "node_modules/@alt1/ocr/dist/fonts/chat_11px.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["chat_11px"] = factory();
        else
          root["OCR_chat_11px"] = factory();
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
            "./fonts/chat_11px.fontmeta.json": (
              /***/
              (function(module2, exports2) {
                module2.exports = { "chars": [{ "width": 8, "bonus": 205, "chr": "a", "pixels": [1, 8, 221, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 4, 221, 255, 2, 8, 153, 255, 2, 9, 221, 0, 2, 10, 255, 51, 2, 11, 255, 255, 3, 4, 255, 255, 3, 5, 221, 0, 3, 7, 221, 255, 3, 8, 168, 103, 3, 9, 153, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 4, 255, 255, 4, 5, 255, 0, 4, 7, 255, 255, 4, 8, 221, 0, 4, 11, 237, 255, 4, 12, 255, 0, 5, 4, 187, 255, 5, 5, 254, 171, 5, 7, 255, 255, 5, 8, 255, 68, 5, 10, 255, 255, 5, 12, 238, 0, 6, 5, 228, 171, 6, 6, 244, 231, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 254, 239, 7, 6, 153, 0, 7, 7, 221, 0, 7, 8, 255, 0, 7, 9, 255, 0, 7, 10, 255, 0, 7, 11, 255, 0, 7, 12, 238, 0], "secondary": false }, { "width": 9, "bonus": 245, "chr": "b", "pixels": [0, 1, 237, 255, 0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 2, 240, 36, 1, 3, 255, 34, 1, 4, 255, 119, 1, 5, 255, 255, 1, 6, 255, 119, 1, 7, 255, 68, 1, 8, 255, 68, 1, 9, 255, 136, 1, 10, 255, 255, 1, 11, 255, 119, 1, 12, 238, 0, 2, 4, 240, 253, 2, 6, 255, 0, 2, 10, 168, 103, 2, 11, 254, 239, 3, 4, 255, 255, 3, 5, 238, 0, 3, 11, 255, 255, 3, 12, 238, 0, 4, 4, 255, 255, 4, 5, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 4, 153, 255, 5, 5, 255, 187, 5, 10, 203, 255, 5, 12, 255, 0, 6, 5, 214, 182, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 11, 204, 0, 7, 6, 153, 0, 7, 7, 255, 17, 7, 8, 255, 17, 7, 9, 255, 0, 7, 10, 255, 0], "secondary": false }, { "width": 9, "bonus": 145, "chr": "c", "pixels": [1, 6, 255, 255, 1, 7, 237, 255, 1, 8, 255, 255, 1, 9, 255, 255, 2, 5, 221, 255, 2, 7, 255, 0, 2, 8, 238, 0, 2, 9, 255, 51, 2, 10, 255, 221, 2, 11, 153, 141, 3, 4, 237, 255, 3, 6, 221, 0, 3, 11, 252, 241, 4, 4, 255, 255, 4, 5, 238, 0, 4, 11, 255, 255, 4, 12, 238, 0, 5, 4, 255, 255, 5, 5, 255, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 4, 187, 255, 6, 5, 255, 119, 6, 11, 187, 255, 6, 12, 255, 0, 7, 5, 218, 139, 7, 10, 153, 255, 7, 12, 187, 0, 8, 11, 153, 0], "secondary": false }, { "width": 9, "bonus": 255, "chr": "d", "pixels": [1, 5, 153, 255, 1, 6, 255, 255, 1, 7, 237, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 153, 255, 2, 4, 153, 255, 2, 5, 187, 255, 2, 6, 153, 0, 2, 7, 255, 0, 2, 8, 238, 0, 2, 9, 255, 0, 2, 10, 255, 187, 2, 11, 220, 197, 3, 4, 255, 255, 3, 5, 153, 0, 3, 6, 187, 0, 3, 11, 255, 255, 3, 12, 170, 0, 4, 4, 255, 255, 4, 5, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 4, 153, 255, 5, 5, 255, 187, 5, 10, 169, 255, 5, 11, 153, 255, 5, 12, 255, 0, 6, 1, 237, 255, 6, 2, 255, 255, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 221, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 249, 243, 6, 12, 153, 0, 7, 2, 240, 36, 7, 3, 255, 34, 7, 4, 255, 34, 7, 5, 255, 34, 7, 6, 255, 34, 7, 7, 255, 34, 7, 8, 226, 39, 7, 9, 255, 34, 7, 10, 255, 34, 7, 11, 255, 34, 7, 12, 238, 0], "secondary": false }, { "width": 9, "bonus": 195, "chr": "e", "pixels": [1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 2, 5, 203, 255, 2, 7, 255, 255, 2, 8, 255, 0, 2, 9, 255, 51, 2, 10, 255, 221, 2, 11, 153, 141, 3, 4, 255, 255, 3, 6, 204, 0, 3, 7, 255, 255, 3, 8, 255, 0, 3, 11, 252, 241, 4, 4, 255, 255, 4, 5, 255, 0, 4, 7, 255, 255, 4, 8, 255, 0, 4, 11, 255, 255, 4, 12, 238, 0, 5, 4, 255, 255, 5, 5, 255, 34, 5, 7, 255, 255, 5, 8, 255, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 5, 255, 221, 6, 7, 255, 255, 6, 8, 255, 0, 6, 11, 187, 255, 6, 12, 255, 0, 7, 5, 153, 141, 7, 6, 246, 194, 7, 7, 244, 248, 7, 8, 255, 0, 7, 12, 187, 0, 8, 7, 187, 0, 8, 8, 238, 0], "secondary": false }, { "width": 6, "bonus": 150, "chr": "f", "pixels": [0, 4, 187, 255, 1, 2, 153, 255, 1, 3, 221, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 237, 255, 2, 1, 203, 255, 2, 2, 160, 244, 2, 3, 180, 96, 2, 4, 255, 255, 2, 5, 255, 34, 2, 6, 255, 34, 2, 7, 255, 34, 2, 8, 255, 34, 2, 9, 255, 34, 2, 10, 255, 34, 2, 11, 255, 34, 2, 12, 238, 0, 3, 1, 255, 255, 3, 2, 204, 0, 3, 3, 153, 0, 3, 4, 255, 255, 3, 5, 255, 0, 4, 2, 255, 0, 4, 5, 255, 0], "secondary": false }, { "width": 9, "bonus": 285, "chr": "g", "pixels": [1, 5, 153, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 2, 4, 153, 255, 2, 5, 187, 255, 2, 6, 153, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 34, 2, 10, 254, 204, 2, 11, 182, 167, 2, 14, 240, 253, 3, 4, 255, 255, 3, 5, 153, 0, 3, 6, 187, 0, 3, 11, 255, 255, 3, 14, 255, 255, 3, 15, 238, 0, 4, 4, 255, 255, 4, 5, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 4, 14, 255, 255, 4, 15, 255, 0, 5, 4, 255, 255, 5, 5, 255, 51, 5, 11, 255, 255, 5, 12, 255, 0, 5, 14, 237, 255, 5, 15, 255, 0, 6, 4, 153, 255, 6, 5, 255, 255, 6, 10, 255, 255, 6, 12, 255, 85, 6, 13, 255, 255, 6, 15, 238, 0, 7, 4, 237, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 231, 225, 7, 14, 255, 0, 8, 5, 238, 0, 8, 6, 255, 0, 8, 7, 255, 0, 8, 8, 255, 0, 8, 9, 255, 0, 8, 10, 255, 0, 8, 11, 255, 0, 8, 12, 255, 0, 8, 13, 204, 0], "secondary": false }, { "width": 9, "bonus": 225, "chr": "h", "pixels": [0, 1, 237, 255, 0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 2, 240, 36, 1, 3, 255, 34, 1, 4, 255, 34, 1, 5, 255, 255, 1, 6, 254, 171, 1, 7, 255, 68, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 34, 1, 11, 255, 34, 1, 12, 238, 0, 2, 4, 166, 235, 2, 6, 255, 0, 2, 7, 170, 0, 3, 4, 255, 255, 3, 5, 153, 0, 4, 4, 255, 255, 4, 5, 255, 0, 5, 4, 255, 255, 5, 5, 255, 68, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 237, 255, 7, 6, 255, 17, 7, 7, 255, 34, 7, 8, 255, 34, 7, 9, 255, 34, 7, 10, 255, 34, 7, 11, 255, 34, 7, 12, 238, 0], "secondary": false }, { "width": 3, "bonus": 90, "chr": "i", "pixels": [0, 1, 255, 255, 0, 4, 237, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 2, 255, 0, 1, 5, 240, 36, 1, 6, 255, 34, 1, 7, 255, 34, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 34, 1, 11, 255, 34, 1, 12, 238, 0], "secondary": false }, { "width": 5, "bonus": 130, "chr": "j", "pixels": [0, 14, 255, 255, 1, 14, 255, 255, 1, 15, 255, 0, 2, 1, 255, 255, 2, 4, 237, 255, 2, 5, 255, 255, 2, 6, 255, 255, 2, 7, 255, 255, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 255, 255, 2, 12, 255, 255, 2, 13, 255, 255, 2, 15, 255, 0, 3, 2, 255, 0, 3, 5, 240, 36, 3, 6, 255, 34, 3, 7, 255, 34, 3, 8, 255, 34, 3, 9, 255, 34, 3, 10, 255, 34, 3, 11, 255, 34, 3, 12, 255, 17, 3, 13, 255, 0, 3, 14, 255, 0], "secondary": false }, { "width": 7, "bonus": 190, "chr": "k", "pixels": [0, 1, 237, 255, 0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 2, 240, 36, 1, 3, 255, 34, 1, 4, 255, 34, 1, 5, 255, 34, 1, 6, 255, 34, 1, 7, 255, 255, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 34, 1, 11, 255, 34, 1, 12, 238, 0, 2, 7, 255, 255, 2, 8, 255, 119, 3, 6, 237, 255, 3, 8, 255, 187, 3, 9, 227, 229, 4, 4, 203, 255, 4, 5, 187, 255, 4, 7, 238, 0, 4, 9, 218, 139, 4, 10, 255, 255, 5, 4, 153, 255, 5, 5, 204, 0, 5, 6, 187, 0, 5, 11, 254, 239, 6, 5, 153, 0, 6, 12, 238, 0], "secondary": false }, { "width": 4, "bonus": 105, "chr": "l", "pixels": [0, 1, 237, 255, 0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 221, 255, 1, 2, 240, 36, 1, 3, 255, 34, 1, 4, 255, 34, 1, 5, 255, 34, 1, 6, 255, 34, 1, 7, 255, 34, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 68, 1, 11, 255, 255, 2, 12, 255, 0], "secondary": false }, { "width": 13, "bonus": 300, "chr": "m", "pixels": [0, 4, 237, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 5, 255, 255, 1, 6, 254, 171, 1, 7, 255, 85, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 34, 1, 11, 255, 34, 1, 12, 238, 0, 2, 4, 169, 255, 2, 6, 255, 0, 2, 7, 170, 0, 3, 4, 255, 255, 3, 5, 170, 0, 4, 4, 255, 255, 4, 5, 255, 0, 5, 4, 203, 255, 5, 5, 254, 171, 6, 5, 248, 227, 6, 6, 255, 255, 6, 7, 242, 251, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 240, 253, 7, 5, 223, 253, 7, 6, 226, 39, 7, 7, 255, 0, 7, 8, 238, 0, 7, 9, 255, 0, 7, 10, 255, 0, 7, 11, 255, 0, 7, 12, 238, 0, 8, 4, 255, 255, 8, 6, 221, 0, 9, 4, 255, 255, 9, 5, 255, 0, 10, 4, 203, 255, 10, 5, 255, 153, 11, 5, 234, 167, 11, 6, 241, 234, 11, 7, 255, 255, 11, 8, 255, 255, 11, 9, 255, 255, 11, 10, 255, 255, 11, 11, 240, 253, 12, 6, 153, 0, 12, 7, 221, 0, 12, 8, 255, 0, 12, 9, 255, 0, 12, 10, 255, 0, 12, 11, 255, 0, 12, 12, 238, 0], "secondary": false }, { "width": 9, "bonus": 195, "chr": "n", "pixels": [0, 4, 237, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 5, 255, 255, 1, 6, 254, 171, 1, 7, 255, 68, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 34, 1, 11, 255, 34, 1, 12, 238, 0, 2, 4, 153, 255, 2, 6, 255, 0, 2, 7, 170, 0, 3, 4, 255, 255, 3, 5, 153, 0, 4, 4, 255, 255, 4, 5, 255, 0, 5, 4, 255, 255, 5, 5, 255, 68, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 237, 255, 7, 6, 255, 17, 7, 7, 255, 34, 7, 8, 255, 34, 7, 9, 255, 34, 7, 10, 255, 34, 7, 11, 255, 34, 7, 12, 238, 0], "secondary": false }, { "width": 10, "bonus": 185, "chr": "o", "pixels": [1, 6, 255, 255, 1, 7, 237, 255, 1, 8, 255, 255, 1, 9, 239, 254, 2, 5, 237, 255, 2, 7, 255, 0, 2, 8, 238, 0, 2, 9, 255, 51, 2, 10, 253, 240, 3, 4, 237, 255, 3, 6, 238, 0, 3, 11, 253, 240, 4, 4, 255, 255, 4, 5, 238, 0, 4, 11, 255, 255, 4, 12, 238, 0, 5, 4, 255, 255, 5, 5, 255, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 4, 187, 255, 6, 5, 255, 119, 6, 11, 187, 255, 6, 12, 255, 0, 7, 5, 255, 255, 7, 6, 200, 195, 7, 9, 153, 255, 7, 10, 221, 255, 7, 12, 187, 0, 8, 6, 255, 136, 8, 7, 234, 222, 8, 8, 217, 239, 8, 9, 168, 207, 8, 10, 153, 0, 8, 11, 221, 0, 9, 8, 204, 0, 9, 9, 204, 0], "secondary": false }, { "width": 8, "bonus": 245, "chr": "p", "pixels": [0, 4, 237, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 0, 12, 255, 255, 0, 13, 255, 255, 0, 14, 203, 255, 1, 5, 255, 255, 1, 6, 255, 119, 1, 7, 255, 34, 1, 8, 255, 68, 1, 9, 255, 136, 1, 10, 255, 255, 1, 11, 255, 119, 1, 12, 255, 34, 1, 13, 255, 34, 1, 14, 255, 17, 1, 15, 204, 0, 2, 4, 237, 255, 2, 6, 255, 0, 2, 10, 168, 103, 2, 11, 254, 239, 3, 4, 255, 255, 3, 5, 238, 0, 3, 11, 255, 255, 3, 12, 238, 0, 4, 4, 255, 255, 4, 5, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 4, 153, 255, 5, 5, 255, 187, 5, 10, 203, 255, 5, 12, 255, 0, 6, 5, 214, 182, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 11, 204, 0, 7, 6, 153, 0, 7, 7, 255, 17, 7, 8, 255, 17, 7, 9, 255, 0, 7, 10, 255, 0], "secondary": false }, { "width": 9, "bonus": 245, "chr": "q", "pixels": [1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 239, 254, 1, 9, 255, 255, 1, 10, 153, 255, 2, 5, 203, 255, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 240, 36, 2, 10, 255, 187, 2, 11, 214, 182, 3, 4, 255, 255, 3, 6, 204, 0, 3, 11, 255, 255, 3, 12, 153, 0, 4, 4, 255, 255, 4, 5, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 4, 237, 255, 5, 5, 255, 68, 5, 11, 237, 255, 5, 12, 255, 0, 6, 5, 255, 255, 6, 6, 168, 207, 6, 10, 255, 255, 6, 12, 240, 36, 7, 4, 237, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 255, 255, 7, 12, 255, 255, 7, 13, 255, 255, 7, 14, 210, 247, 8, 5, 238, 0, 8, 6, 255, 0, 8, 7, 255, 0, 8, 8, 255, 0, 8, 9, 255, 0, 8, 10, 255, 0, 8, 11, 255, 0, 8, 12, 255, 0, 8, 13, 255, 0, 8, 14, 255, 0, 8, 15, 204, 0], "secondary": false }, { "width": 5, "bonus": 115, "chr": "r", "pixels": [0, 4, 237, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 5, 255, 255, 1, 6, 255, 153, 1, 7, 255, 85, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 34, 1, 11, 255, 34, 1, 12, 238, 0, 2, 4, 237, 255, 2, 5, 155, 112, 2, 6, 255, 0, 2, 7, 153, 0, 3, 4, 255, 255, 3, 5, 238, 0, 4, 5, 255, 0], "secondary": false }, { "width": 8, "bonus": 135, "chr": "s", "pixels": [1, 5, 187, 255, 1, 6, 203, 255, 1, 10, 169, 255, 2, 4, 221, 255, 2, 6, 209, 104, 2, 7, 255, 255, 2, 11, 255, 255, 3, 4, 255, 255, 3, 5, 221, 0, 3, 7, 198, 219, 3, 8, 255, 119, 3, 11, 255, 255, 3, 12, 255, 0, 4, 4, 255, 255, 4, 5, 255, 0, 4, 8, 249, 243, 4, 11, 255, 255, 4, 12, 255, 0, 5, 4, 153, 255, 5, 5, 255, 102, 5, 8, 160, 217, 5, 9, 255, 255, 5, 10, 255, 255, 5, 12, 255, 0, 6, 5, 153, 0, 6, 10, 255, 17, 6, 11, 255, 0], "secondary": false }, { "width": 6, "bonus": 125, "chr": "t", "pixels": [1, 4, 255, 255, 2, 2, 237, 255, 2, 3, 255, 255, 2, 4, 255, 255, 2, 5, 255, 255, 2, 6, 255, 255, 2, 7, 255, 255, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 3, 3, 238, 0, 3, 4, 255, 255, 3, 5, 255, 0, 3, 6, 255, 0, 3, 7, 255, 0, 3, 8, 255, 0, 3, 9, 255, 0, 3, 10, 255, 51, 3, 11, 255, 255, 4, 4, 221, 255, 4, 5, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 5, 221, 0, 5, 12, 255, 0], "secondary": false }, { "width": 8, "bonus": 200, "chr": "u", "pixels": [0, 4, 237, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 221, 255, 0, 10, 169, 255, 1, 5, 240, 36, 1, 6, 255, 34, 1, 7, 255, 34, 1, 8, 255, 34, 1, 9, 255, 68, 1, 10, 241, 162, 1, 11, 237, 219, 2, 11, 255, 255, 2, 12, 204, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 11, 169, 255, 4, 12, 255, 0, 5, 9, 169, 255, 5, 10, 255, 255, 5, 11, 155, 112, 5, 12, 170, 0, 6, 4, 237, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 254, 239, 7, 5, 238, 0, 7, 6, 255, 0, 7, 7, 255, 0, 7, 8, 255, 0, 7, 9, 255, 0, 7, 10, 255, 0, 7, 11, 255, 0, 7, 12, 238, 0], "secondary": false }, { "width": 8, "bonus": 150, "chr": "v", "pixels": [0, 4, 153, 255, 1, 4, 153, 255, 1, 5, 255, 255, 1, 6, 228, 247, 2, 5, 153, 0, 2, 6, 255, 85, 2, 7, 246, 194, 2, 8, 255, 255, 2, 9, 187, 255, 3, 8, 187, 0, 3, 9, 255, 119, 3, 10, 255, 255, 3, 11, 255, 255, 4, 9, 255, 255, 4, 10, 237, 238, 4, 11, 255, 119, 4, 12, 255, 0, 5, 6, 203, 255, 5, 7, 255, 255, 5, 8, 166, 235, 5, 10, 255, 0, 5, 11, 221, 0, 6, 4, 255, 255, 6, 5, 187, 255, 6, 6, 164, 132, 6, 7, 204, 0, 6, 8, 255, 0, 6, 9, 153, 0, 7, 5, 255, 0, 7, 6, 187, 0], "secondary": false }, { "width": 13, "bonus": 285, "chr": "w", "pixels": [1, 4, 187, 255, 1, 5, 255, 255, 1, 6, 207, 251, 2, 5, 187, 0, 2, 6, 255, 85, 2, 7, 237, 183, 2, 8, 255, 255, 2, 9, 187, 255, 3, 8, 170, 0, 3, 9, 255, 102, 3, 10, 255, 255, 3, 11, 255, 255, 4, 8, 187, 255, 4, 9, 255, 255, 4, 10, 203, 213, 4, 11, 255, 68, 4, 12, 255, 0, 5, 5, 187, 255, 5, 6, 255, 255, 5, 7, 187, 255, 5, 8, 164, 132, 5, 9, 187, 0, 5, 10, 255, 0, 5, 11, 170, 0, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 218, 139, 6, 7, 255, 0, 6, 8, 187, 0, 7, 5, 255, 85, 7, 6, 255, 187, 7, 7, 255, 255, 7, 8, 187, 255, 8, 7, 187, 0, 8, 8, 255, 102, 8, 9, 237, 201, 8, 10, 255, 255, 8, 11, 187, 255, 9, 9, 214, 223, 9, 10, 255, 255, 9, 11, 255, 187, 9, 12, 187, 0, 10, 6, 187, 255, 10, 7, 255, 255, 10, 8, 187, 255, 10, 9, 163, 160, 10, 10, 187, 0, 10, 11, 255, 0, 10, 12, 187, 0, 11, 4, 255, 255, 11, 5, 187, 255, 11, 6, 163, 160, 11, 7, 187, 0, 11, 8, 255, 0, 11, 9, 187, 0, 12, 5, 255, 0, 12, 6, 187, 0], "secondary": false }, { "width": 8, "bonus": 145, "chr": "x", "pixels": [1, 4, 255, 255, 1, 10, 153, 255, 1, 11, 255, 255, 2, 5, 254, 239, 2, 6, 192, 225, 2, 9, 255, 255, 2, 10, 169, 255, 2, 11, 153, 0, 2, 12, 255, 0, 3, 6, 248, 157, 3, 7, 255, 255, 3, 8, 255, 255, 3, 10, 255, 0, 3, 11, 170, 0, 4, 6, 221, 255, 4, 7, 234, 222, 4, 8, 255, 255, 4, 9, 255, 136, 5, 5, 255, 255, 5, 7, 221, 0, 5, 8, 207, 21, 5, 9, 254, 171, 5, 10, 255, 255, 6, 4, 203, 255, 6, 6, 255, 0, 6, 10, 198, 109, 6, 11, 255, 255, 7, 5, 204, 0, 7, 12, 255, 0], "secondary": false }, { "width": 8, "bonus": 185, "chr": "y", "pixels": [0, 4, 255, 255, 0, 14, 255, 255, 1, 5, 255, 153, 1, 6, 255, 255, 1, 7, 196, 243, 1, 14, 255, 255, 1, 15, 255, 0, 2, 6, 153, 0, 2, 7, 255, 119, 2, 8, 246, 229, 2, 9, 242, 251, 2, 13, 221, 255, 2, 15, 255, 0, 3, 9, 232, 93, 3, 10, 255, 255, 3, 11, 255, 255, 3, 12, 203, 255, 3, 13, 153, 141, 3, 14, 221, 0, 4, 8, 187, 255, 4, 9, 255, 255, 4, 10, 187, 209, 4, 11, 255, 34, 4, 12, 255, 0, 4, 13, 204, 0, 5, 6, 237, 255, 5, 7, 221, 255, 5, 8, 153, 171, 5, 9, 187, 0, 5, 10, 255, 0, 5, 11, 153, 0, 6, 4, 255, 255, 6, 5, 169, 255, 6, 7, 238, 0, 6, 8, 221, 0, 7, 5, 255, 0, 7, 6, 170, 0], "secondary": false }, { "width": 7, "bonus": 185, "chr": "z", "pixels": [0, 4, 255, 255, 0, 10, 153, 255, 0, 11, 255, 255, 1, 4, 255, 255, 1, 5, 255, 0, 1, 9, 221, 255, 1, 10, 187, 255, 1, 11, 255, 255, 1, 12, 255, 0, 2, 4, 255, 255, 2, 5, 255, 0, 2, 8, 255, 255, 2, 10, 221, 0, 2, 11, 255, 255, 2, 12, 255, 0, 3, 4, 255, 255, 3, 5, 255, 0, 3, 6, 153, 255, 3, 7, 237, 255, 3, 9, 255, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 4, 255, 255, 4, 5, 255, 221, 4, 6, 187, 255, 4, 7, 153, 0, 4, 8, 238, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 4, 255, 255, 5, 5, 255, 119, 5, 6, 221, 0, 5, 7, 187, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 5, 255, 0, 6, 12, 255, 0], "secondary": false }, { "width": 10, "bonus": 245, "chr": "A", "pixels": [0, 11, 169, 255, 1, 9, 221, 255, 1, 10, 255, 255, 1, 11, 173, 226, 1, 12, 170, 0, 2, 6, 203, 255, 2, 7, 255, 255, 2, 8, 255, 255, 2, 9, 191, 159, 2, 10, 221, 0, 2, 11, 255, 0, 2, 12, 153, 0, 3, 3, 187, 255, 3, 4, 255, 255, 3, 5, 221, 255, 3, 6, 192, 181, 3, 7, 214, 61, 3, 8, 255, 255, 3, 9, 255, 0, 4, 1, 255, 255, 4, 2, 255, 255, 4, 3, 176, 197, 4, 4, 196, 45, 4, 5, 255, 0, 4, 6, 221, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 2, 255, 221, 5, 3, 255, 255, 5, 4, 223, 214, 5, 8, 255, 255, 5, 9, 255, 0, 6, 3, 226, 39, 6, 4, 255, 136, 6, 5, 250, 243, 6, 6, 255, 255, 6, 7, 187, 255, 6, 8, 255, 255, 6, 9, 255, 0, 7, 6, 243, 71, 7, 7, 254, 171, 7, 8, 255, 255, 7, 9, 255, 255, 8, 8, 170, 0, 8, 9, 255, 102, 8, 10, 255, 187, 8, 11, 255, 255, 9, 11, 187, 0, 9, 12, 255, 0], "secondary": false }, { "width": 9, "bonus": 300, "chr": "B", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 2, 1, 255, 255, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 255, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 255, 2, 12, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 6, 255, 255, 3, 7, 255, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 6, 255, 255, 4, 7, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 1, 237, 255, 5, 2, 255, 85, 5, 6, 255, 255, 5, 7, 255, 34, 5, 11, 255, 255, 5, 12, 255, 0, 6, 2, 253, 240, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 237, 255, 6, 6, 200, 195, 6, 7, 254, 204, 6, 10, 203, 255, 6, 12, 255, 0, 7, 3, 239, 18, 7, 4, 255, 17, 7, 5, 255, 0, 7, 6, 238, 0, 7, 7, 200, 152, 7, 8, 244, 213, 7, 9, 220, 236, 7, 10, 155, 196, 7, 11, 204, 0, 8, 9, 204, 0, 8, 10, 204, 0], "secondary": false }, { "width": 12, "bonus": 200, "chr": "C", "pixels": [1, 4, 237, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 221, 255, 2, 3, 221, 255, 2, 5, 238, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 68, 2, 9, 255, 255, 2, 10, 176, 197, 3, 2, 221, 255, 3, 4, 221, 0, 3, 10, 254, 239, 3, 11, 175, 124, 4, 1, 221, 255, 4, 3, 221, 0, 4, 11, 251, 207, 5, 1, 255, 255, 5, 2, 221, 0, 5, 11, 255, 255, 5, 12, 204, 0, 6, 1, 255, 255, 6, 2, 255, 0, 6, 11, 255, 255, 6, 12, 255, 0, 7, 1, 255, 255, 7, 2, 255, 0, 7, 11, 255, 255, 7, 12, 255, 0, 8, 1, 187, 255, 8, 2, 255, 119, 8, 11, 187, 255, 8, 12, 255, 0, 9, 2, 250, 243, 9, 10, 237, 255, 9, 12, 187, 0, 10, 3, 238, 0, 10, 11, 238, 0], "secondary": false }, { "width": 10, "bonus": 305, "chr": "D", "pixels": [0, 1, 237, 255, 0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 1, 255, 255, 1, 2, 240, 36, 1, 3, 255, 34, 1, 4, 255, 34, 1, 5, 255, 34, 1, 6, 255, 34, 1, 7, 255, 34, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 34, 1, 11, 255, 255, 1, 12, 238, 0, 2, 1, 255, 255, 2, 2, 255, 0, 2, 11, 255, 255, 2, 12, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 1, 237, 255, 5, 2, 255, 68, 5, 11, 237, 255, 5, 12, 255, 0, 6, 2, 251, 207, 6, 10, 203, 255, 6, 11, 155, 196, 6, 12, 238, 0, 7, 2, 219, 218, 7, 3, 241, 198, 7, 9, 187, 255, 7, 10, 187, 255, 7, 11, 204, 0, 8, 3, 224, 155, 8, 4, 255, 255, 8, 5, 255, 255, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 255, 255, 8, 10, 187, 0, 8, 11, 187, 0, 9, 5, 255, 17, 9, 6, 255, 34, 9, 7, 255, 17, 9, 8, 255, 0, 9, 9, 255, 0], "secondary": false }, { "width": 8, "bonus": 240, "chr": "E", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 2, 1, 255, 255, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 255, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 255, 2, 12, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 6, 255, 255, 3, 7, 255, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 6, 255, 255, 4, 7, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 6, 255, 255, 5, 7, 255, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 1, 255, 255, 6, 2, 255, 0, 6, 7, 255, 0, 6, 11, 255, 255, 6, 12, 255, 0, 7, 2, 255, 0, 7, 12, 255, 0], "secondary": false }, { "width": 8, "bonus": 185, "chr": "F", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 240, 253, 2, 1, 255, 255, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 255, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 238, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 6, 255, 255, 3, 7, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 6, 255, 255, 4, 7, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 6, 221, 255, 5, 7, 255, 0, 6, 2, 255, 0, 6, 7, 221, 0], "secondary": false }, { "width": 11, "bonus": 265, "chr": "G", "pixels": [0, 5, 187, 255, 0, 6, 255, 255, 0, 7, 203, 255, 0, 8, 153, 255, 1, 3, 237, 255, 1, 4, 187, 255, 1, 5, 174, 150, 1, 6, 196, 45, 1, 7, 255, 68, 1, 8, 234, 167, 1, 9, 255, 255, 2, 2, 237, 255, 2, 4, 238, 0, 2, 5, 187, 0, 2, 9, 167, 52, 2, 10, 254, 239, 3, 1, 169, 255, 3, 3, 238, 0, 3, 11, 250, 191, 4, 1, 255, 255, 4, 2, 170, 0, 4, 11, 255, 255, 4, 12, 187, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 1, 255, 255, 6, 2, 255, 0, 6, 11, 255, 255, 6, 12, 255, 0, 7, 1, 203, 255, 7, 2, 255, 102, 7, 7, 255, 255, 7, 11, 169, 255, 7, 12, 255, 0, 8, 2, 251, 242, 8, 7, 255, 255, 8, 8, 255, 34, 8, 10, 255, 255, 8, 11, 164, 132, 8, 12, 170, 0, 9, 3, 238, 0, 9, 7, 203, 255, 9, 8, 255, 255, 9, 9, 255, 255, 9, 10, 255, 255, 9, 11, 254, 239, 10, 8, 204, 0, 10, 9, 255, 0, 10, 10, 255, 0, 10, 11, 255, 0, 10, 12, 238, 0], "secondary": false }, { "width": 10, "bonus": 270, "chr": "H", "pixels": [0, 1, 237, 255, 0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 2, 240, 36, 1, 3, 255, 34, 1, 4, 255, 34, 1, 5, 255, 34, 1, 6, 255, 255, 1, 7, 255, 34, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 34, 1, 11, 255, 34, 1, 12, 238, 0, 2, 6, 255, 255, 2, 7, 255, 0, 3, 6, 255, 255, 3, 7, 255, 0, 4, 6, 255, 255, 4, 7, 255, 0, 5, 6, 255, 255, 5, 7, 255, 0, 6, 6, 255, 255, 6, 7, 255, 0, 7, 1, 237, 255, 7, 2, 255, 255, 7, 3, 255, 255, 7, 4, 255, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 7, 11, 237, 255, 8, 2, 240, 36, 8, 3, 255, 34, 8, 4, 255, 34, 8, 5, 255, 34, 8, 6, 255, 34, 8, 7, 255, 34, 8, 8, 255, 34, 8, 9, 255, 34, 8, 10, 255, 34, 8, 11, 255, 34, 8, 12, 238, 0], "secondary": false }, { "width": 5, "bonus": 145, "chr": "I", "pixels": [0, 1, 255, 255, 0, 11, 255, 255, 1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 0, 2, 1, 255, 255, 2, 2, 255, 119, 2, 3, 255, 102, 2, 4, 255, 102, 2, 5, 255, 102, 2, 6, 255, 102, 2, 7, 255, 102, 2, 8, 255, 102, 2, 9, 255, 102, 2, 10, 255, 119, 2, 11, 255, 255, 2, 12, 255, 0, 3, 2, 255, 17, 3, 11, 182, 167, 3, 12, 255, 0], "secondary": false }, { "width": 8, "bonus": 175, "chr": "J", "pixels": [0, 8, 153, 255, 0, 9, 203, 255, 1, 9, 187, 116, 1, 10, 241, 198, 1, 11, 200, 195, 2, 11, 255, 255, 2, 12, 153, 0, 3, 1, 255, 255, 3, 11, 255, 255, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 11, 203, 255, 4, 12, 255, 0, 5, 1, 255, 255, 5, 2, 255, 255, 5, 3, 255, 255, 5, 4, 255, 255, 5, 5, 255, 255, 5, 6, 255, 255, 5, 7, 255, 255, 5, 8, 255, 255, 5, 9, 255, 255, 5, 10, 221, 255, 5, 12, 204, 0, 6, 2, 255, 34, 6, 3, 255, 34, 6, 4, 255, 34, 6, 5, 255, 34, 6, 6, 255, 34, 6, 7, 255, 34, 6, 8, 255, 34, 6, 9, 255, 17, 6, 10, 255, 0, 6, 11, 221, 0], "secondary": false }, { "width": 9, "bonus": 230, "chr": "K", "pixels": [1, 1, 237, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 240, 253, 2, 2, 238, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 255, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 238, 0, 3, 6, 255, 255, 3, 7, 255, 34, 4, 4, 153, 255, 4, 5, 255, 255, 4, 6, 173, 226, 4, 7, 255, 255, 5, 3, 255, 255, 5, 4, 169, 255, 5, 5, 153, 0, 5, 6, 255, 0, 5, 7, 167, 52, 5, 8, 254, 204, 5, 9, 237, 238, 6, 1, 203, 255, 6, 2, 255, 255, 6, 4, 255, 0, 6, 5, 170, 0, 6, 9, 228, 133, 6, 10, 255, 255, 6, 11, 160, 217, 7, 2, 204, 0, 7, 3, 255, 0, 7, 11, 254, 204, 8, 12, 204, 0], "secondary": false }, { "width": 7, "bonus": 155, "chr": "L", "pixels": [0, 1, 237, 255, 0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 2, 240, 36, 1, 3, 255, 34, 1, 4, 255, 34, 1, 5, 255, 34, 1, 6, 255, 34, 1, 7, 255, 34, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 34, 1, 11, 255, 255, 1, 12, 238, 0, 2, 11, 255, 255, 2, 12, 255, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 12, 255, 0], "secondary": false }, { "width": 11, "bonus": 355, "chr": "M", "pixels": [0, 3, 153, 255, 0, 4, 169, 255, 0, 5, 187, 255, 0, 6, 203, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 255, 255, 1, 1, 237, 255, 1, 2, 255, 255, 1, 3, 245, 247, 1, 4, 200, 152, 1, 5, 204, 128, 1, 6, 209, 104, 1, 7, 211, 41, 1, 8, 255, 0, 1, 9, 255, 0, 1, 10, 255, 0, 1, 11, 255, 0, 1, 12, 255, 0, 2, 2, 243, 71, 2, 3, 255, 187, 2, 4, 255, 255, 2, 5, 192, 181, 3, 4, 196, 45, 3, 5, 254, 171, 3, 6, 255, 255, 3, 7, 153, 255, 4, 6, 170, 0, 4, 7, 255, 136, 4, 8, 255, 255, 4, 9, 196, 243, 5, 8, 255, 255, 5, 9, 255, 187, 5, 10, 187, 0, 6, 5, 169, 255, 6, 6, 255, 255, 6, 7, 169, 255, 6, 9, 255, 0, 6, 10, 187, 0, 7, 3, 187, 255, 7, 4, 255, 255, 7, 6, 170, 0, 7, 7, 255, 0, 7, 8, 170, 0, 8, 1, 237, 255, 8, 2, 255, 255, 8, 3, 242, 251, 8, 4, 218, 139, 8, 5, 255, 102, 8, 6, 175, 124, 9, 2, 246, 123, 9, 3, 255, 153, 9, 4, 249, 174, 9, 5, 219, 218, 9, 6, 224, 232, 9, 7, 255, 255, 9, 8, 255, 255, 9, 9, 255, 255, 9, 10, 255, 255, 9, 11, 255, 255, 10, 4, 153, 0, 10, 5, 170, 0, 10, 6, 187, 0, 10, 7, 204, 0, 10, 8, 255, 0, 10, 9, 255, 0, 10, 10, 255, 0, 10, 11, 255, 17, 10, 12, 255, 0], "secondary": false }, { "width": 10, "bonus": 280, "chr": "N", "pixels": [0, 1, 237, 255, 0, 2, 221, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 2, 255, 255, 1, 3, 241, 162, 1, 4, 255, 34, 1, 5, 255, 34, 1, 6, 255, 34, 1, 7, 255, 34, 1, 8, 255, 34, 1, 9, 255, 34, 1, 10, 255, 34, 1, 11, 255, 34, 1, 12, 238, 0, 2, 3, 254, 239, 2, 4, 214, 182, 3, 4, 249, 174, 3, 5, 241, 234, 4, 5, 204, 128, 4, 6, 255, 255, 5, 7, 255, 221, 5, 8, 203, 213, 6, 8, 241, 162, 6, 9, 249, 243, 7, 9, 214, 182, 7, 10, 255, 255, 8, 1, 237, 255, 8, 2, 255, 255, 8, 3, 255, 255, 8, 4, 255, 255, 8, 5, 255, 255, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 255, 255, 8, 9, 255, 255, 8, 10, 241, 234, 8, 11, 254, 239, 9, 2, 238, 0, 9, 3, 255, 0, 9, 4, 255, 0, 9, 5, 255, 0, 9, 6, 255, 0, 9, 7, 255, 0, 9, 8, 255, 0, 9, 9, 255, 0, 9, 10, 255, 0, 9, 11, 221, 0, 9, 12, 238, 0], "secondary": false }, { "width": 12, "bonus": 250, "chr": "O", "pixels": [1, 4, 237, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 221, 255, 2, 3, 221, 255, 2, 5, 238, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 68, 2, 9, 250, 226, 2, 10, 176, 197, 3, 2, 221, 255, 3, 4, 221, 0, 3, 10, 250, 226, 3, 11, 184, 142, 4, 1, 237, 255, 4, 3, 221, 0, 4, 11, 250, 226, 5, 1, 255, 255, 5, 2, 238, 0, 5, 11, 255, 255, 5, 12, 221, 0, 6, 1, 255, 255, 6, 2, 255, 0, 6, 11, 255, 255, 6, 12, 255, 0, 7, 1, 237, 255, 7, 2, 255, 68, 7, 11, 221, 255, 7, 12, 255, 0, 8, 2, 251, 207, 8, 10, 221, 255, 8, 12, 221, 0, 9, 2, 184, 189, 9, 3, 248, 227, 9, 9, 221, 255, 9, 11, 221, 0, 10, 3, 184, 142, 10, 4, 252, 241, 10, 5, 255, 255, 10, 6, 255, 255, 10, 7, 255, 255, 10, 8, 221, 255, 10, 10, 221, 0, 11, 5, 239, 18, 11, 6, 255, 34, 11, 7, 255, 0, 11, 8, 255, 0, 11, 9, 221, 0], "secondary": false }, { "width": 8, "bonus": 230, "chr": "P", "pixels": [0, 1, 255, 255, 0, 2, 255, 255, 0, 3, 255, 255, 0, 4, 255, 255, 0, 5, 255, 255, 0, 6, 255, 255, 0, 7, 255, 255, 0, 8, 255, 255, 0, 9, 255, 255, 0, 10, 255, 255, 0, 11, 237, 255, 1, 1, 255, 255, 1, 2, 255, 0, 1, 3, 255, 0, 1, 4, 255, 0, 1, 5, 255, 0, 1, 6, 255, 0, 1, 7, 255, 255, 1, 8, 255, 0, 1, 9, 255, 0, 1, 10, 255, 0, 1, 11, 255, 0, 1, 12, 238, 0, 2, 1, 255, 255, 2, 2, 255, 0, 2, 7, 255, 255, 2, 8, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 7, 255, 255, 3, 8, 255, 0, 4, 1, 255, 255, 4, 2, 255, 34, 4, 7, 203, 255, 4, 8, 255, 0, 5, 2, 255, 221, 5, 6, 237, 255, 5, 8, 204, 0, 6, 2, 153, 141, 6, 3, 246, 194, 6, 4, 255, 255, 6, 5, 196, 243, 6, 7, 238, 0, 7, 4, 187, 0, 7, 5, 255, 0, 7, 6, 187, 0], "secondary": false }, { "width": 12, "bonus": 280, "chr": "Q", "pixels": [1, 4, 237, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 237, 255, 2, 2, 169, 255, 2, 3, 203, 255, 2, 5, 238, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 68, 2, 9, 253, 223, 2, 10, 176, 197, 3, 2, 203, 255, 3, 3, 170, 0, 3, 4, 204, 0, 3, 10, 248, 209, 3, 11, 184, 142, 4, 1, 237, 255, 4, 3, 204, 0, 4, 11, 251, 242, 5, 1, 255, 255, 5, 2, 238, 0, 5, 11, 255, 255, 5, 12, 238, 0, 6, 1, 255, 255, 6, 2, 255, 0, 6, 11, 255, 255, 6, 12, 255, 0, 7, 1, 237, 255, 7, 2, 255, 51, 7, 11, 237, 255, 7, 12, 255, 0, 8, 2, 253, 223, 8, 9, 232, 243, 8, 10, 221, 255, 8, 12, 238, 0, 9, 2, 184, 189, 9, 3, 248, 209, 9, 9, 244, 248, 9, 10, 255, 255, 9, 11, 226, 39, 10, 3, 184, 142, 10, 4, 251, 242, 10, 5, 255, 255, 10, 6, 255, 255, 10, 7, 255, 255, 10, 8, 237, 255, 10, 10, 243, 71, 10, 11, 254, 239, 11, 5, 239, 18, 11, 6, 255, 34, 11, 7, 255, 0, 11, 8, 255, 0, 11, 9, 238, 0, 11, 12, 238, 0], "secondary": false }, { "width": 9, "bonus": 270, "chr": "R", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 240, 253, 2, 1, 255, 255, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 255, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 238, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 7, 255, 255, 3, 8, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 7, 255, 255, 4, 8, 255, 102, 5, 1, 221, 255, 5, 2, 255, 119, 5, 6, 169, 255, 5, 7, 187, 255, 5, 8, 255, 221, 5, 9, 235, 240, 6, 2, 250, 226, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 169, 255, 6, 7, 170, 0, 6, 8, 187, 0, 6, 9, 235, 111, 6, 10, 255, 255, 6, 11, 205, 233, 7, 3, 223, 19, 7, 4, 255, 34, 7, 5, 255, 0, 7, 6, 255, 0, 7, 7, 170, 0, 7, 11, 255, 136, 7, 12, 187, 0], "secondary": false }, { "width": 8, "bonus": 190, "chr": "S", "pixels": [0, 3, 221, 255, 0, 4, 187, 255, 0, 10, 221, 255, 1, 2, 221, 255, 1, 3, 155, 112, 1, 4, 237, 128, 1, 5, 250, 243, 1, 11, 246, 194, 2, 1, 255, 255, 2, 3, 221, 0, 2, 5, 200, 195, 2, 6, 247, 141, 2, 11, 255, 255, 2, 12, 187, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 6, 255, 255, 3, 11, 255, 255, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 6, 196, 243, 4, 7, 255, 119, 4, 11, 255, 255, 4, 12, 255, 0, 5, 1, 187, 255, 5, 2, 255, 119, 5, 7, 250, 243, 5, 8, 174, 150, 5, 10, 203, 255, 5, 12, 255, 0, 6, 2, 209, 104, 6, 8, 250, 191, 6, 9, 235, 240, 6, 10, 155, 196, 6, 11, 204, 0, 7, 9, 187, 0, 7, 10, 221, 0], "secondary": false }, { "width": 10, "bonus": 185, "chr": "T", "pixels": [0, 1, 187, 255, 1, 1, 255, 255, 1, 2, 187, 0, 2, 1, 255, 255, 2, 2, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 4, 1, 255, 255, 4, 2, 255, 255, 4, 3, 255, 255, 4, 4, 255, 255, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 255, 255, 4, 8, 255, 255, 4, 9, 255, 255, 4, 10, 255, 255, 4, 11, 237, 255, 5, 1, 255, 255, 5, 2, 255, 34, 5, 3, 255, 34, 5, 4, 255, 34, 5, 5, 255, 34, 5, 6, 255, 34, 5, 7, 255, 34, 5, 8, 255, 34, 5, 9, 255, 34, 5, 10, 255, 34, 5, 11, 255, 34, 5, 12, 238, 0, 6, 1, 255, 255, 6, 2, 255, 0, 7, 1, 255, 255, 7, 2, 255, 0, 8, 1, 255, 255, 8, 2, 255, 0, 9, 2, 255, 0], "secondary": false }, { "width": 10, "bonus": 235, "chr": "U", "pixels": [1, 1, 237, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 240, 253, 1, 9, 255, 255, 2, 2, 238, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 240, 36, 2, 10, 255, 221, 2, 11, 174, 150, 3, 11, 255, 255, 4, 11, 255, 255, 4, 12, 255, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 11, 203, 255, 6, 12, 255, 0, 7, 10, 255, 255, 7, 12, 204, 0, 8, 1, 237, 255, 8, 2, 255, 255, 8, 3, 255, 255, 8, 4, 255, 255, 8, 5, 255, 255, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 225, 251, 8, 9, 180, 217, 8, 11, 255, 0, 9, 2, 238, 0, 9, 3, 255, 0, 9, 4, 255, 0, 9, 5, 255, 0, 9, 6, 255, 0, 9, 7, 255, 0, 9, 8, 255, 0, 9, 9, 221, 0, 9, 10, 153, 0], "secondary": false }, { "width": 10, "bonus": 205, "chr": "V", "pixels": [0, 1, 187, 255, 1, 2, 241, 215, 1, 3, 255, 255, 1, 4, 153, 255, 2, 3, 211, 41, 2, 4, 255, 136, 2, 5, 255, 255, 2, 6, 241, 252, 3, 6, 255, 68, 3, 7, 249, 174, 3, 8, 255, 255, 3, 9, 207, 251, 4, 8, 170, 0, 4, 9, 255, 102, 4, 10, 255, 255, 4, 11, 255, 255, 5, 8, 169, 255, 5, 9, 255, 255, 5, 10, 224, 232, 5, 11, 255, 102, 5, 12, 255, 0, 6, 6, 237, 255, 6, 7, 237, 255, 6, 8, 168, 207, 6, 9, 181, 48, 6, 10, 255, 0, 6, 11, 204, 0, 7, 3, 203, 255, 7, 4, 255, 255, 7, 5, 166, 235, 7, 6, 168, 103, 7, 7, 238, 0, 7, 8, 238, 0, 8, 1, 255, 255, 8, 2, 187, 255, 8, 3, 164, 132, 8, 4, 204, 0, 8, 5, 255, 0, 8, 6, 153, 0, 9, 2, 255, 0, 9, 3, 187, 0], "secondary": false }, { "width": 14, "bonus": 405, "chr": "W", "pixels": [1, 1, 237, 255, 1, 2, 255, 255, 1, 3, 203, 255, 2, 2, 238, 0, 2, 3, 255, 102, 2, 4, 234, 167, 2, 5, 239, 236, 2, 6, 255, 255, 2, 7, 203, 255, 3, 5, 153, 0, 3, 6, 221, 0, 3, 7, 255, 85, 3, 8, 234, 167, 3, 9, 239, 236, 3, 10, 255, 255, 3, 11, 203, 255, 4, 8, 198, 219, 4, 9, 248, 244, 4, 10, 255, 255, 4, 11, 255, 187, 4, 12, 204, 0, 5, 4, 153, 255, 5, 5, 221, 255, 5, 6, 255, 255, 5, 7, 187, 255, 5, 8, 173, 175, 5, 9, 187, 70, 5, 10, 238, 0, 5, 11, 255, 0, 5, 12, 187, 0, 6, 1, 203, 255, 6, 2, 255, 255, 6, 3, 203, 255, 6, 4, 176, 197, 6, 5, 180, 96, 6, 6, 221, 0, 6, 7, 255, 0, 6, 8, 187, 0, 7, 1, 153, 255, 7, 2, 251, 242, 7, 3, 255, 255, 7, 4, 241, 198, 7, 5, 191, 159, 8, 2, 153, 0, 8, 3, 238, 0, 8, 4, 255, 102, 8, 5, 232, 187, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 169, 255, 9, 6, 170, 0, 9, 7, 255, 17, 9, 8, 255, 119, 9, 9, 232, 205, 9, 10, 255, 255, 9, 11, 239, 254, 10, 8, 207, 251, 10, 9, 255, 255, 10, 10, 246, 229, 10, 11, 255, 153, 10, 12, 238, 0, 11, 4, 187, 255, 11, 5, 255, 255, 11, 6, 221, 255, 11, 7, 180, 217, 11, 8, 184, 142, 11, 9, 204, 0, 11, 10, 255, 0, 11, 11, 221, 0, 11, 12, 153, 0, 12, 1, 255, 255, 12, 2, 255, 255, 12, 3, 173, 226, 12, 4, 174, 150, 12, 5, 187, 0, 12, 6, 255, 0, 12, 7, 221, 0, 12, 8, 153, 0, 13, 2, 255, 0, 13, 3, 255, 0, 13, 4, 153, 0], "secondary": false }, { "width": 10, "bonus": 210, "chr": "X", "pixels": [1, 1, 169, 255, 1, 11, 255, 255, 2, 1, 169, 255, 2, 2, 255, 255, 2, 9, 203, 255, 2, 10, 221, 255, 2, 12, 255, 0, 3, 2, 187, 70, 3, 3, 255, 221, 3, 4, 235, 240, 3, 7, 153, 255, 3, 8, 255, 255, 3, 10, 204, 0, 3, 11, 221, 0, 4, 4, 235, 111, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 153, 255, 4, 8, 153, 0, 4, 9, 255, 0, 5, 4, 169, 255, 5, 5, 255, 255, 5, 6, 254, 204, 5, 7, 254, 239, 5, 8, 180, 96, 6, 3, 255, 255, 6, 4, 160, 244, 6, 5, 170, 0, 6, 6, 255, 0, 6, 7, 221, 98, 6, 8, 255, 255, 6, 9, 205, 233, 7, 1, 237, 255, 7, 2, 203, 255, 7, 4, 255, 0, 7, 5, 153, 0, 7, 9, 255, 136, 7, 10, 255, 255, 8, 2, 238, 0, 8, 3, 204, 0, 8, 11, 254, 204, 9, 12, 204, 0], "secondary": false }, { "width": 9, "bonus": 170, "chr": "Y", "pixels": [0, 1, 153, 255, 1, 1, 169, 255, 1, 2, 255, 255, 2, 2, 187, 70, 2, 3, 255, 221, 2, 4, 235, 240, 3, 4, 235, 111, 3, 5, 255, 255, 3, 6, 186, 233, 4, 5, 163, 160, 4, 6, 255, 255, 4, 7, 244, 231, 4, 8, 255, 255, 4, 9, 255, 255, 4, 10, 255, 255, 4, 11, 240, 253, 5, 4, 203, 255, 5, 5, 221, 255, 5, 7, 255, 0, 5, 8, 221, 0, 5, 9, 255, 0, 5, 10, 255, 0, 5, 11, 255, 0, 5, 12, 238, 0, 6, 2, 169, 255, 6, 3, 255, 255, 6, 5, 204, 0, 6, 6, 221, 0, 7, 1, 255, 255, 7, 2, 153, 255, 7, 3, 170, 0, 7, 4, 255, 0, 8, 2, 255, 0, 8, 3, 153, 0], "secondary": false }, { "width": 9, "bonus": 230, "chr": "Z", "pixels": [1, 1, 255, 255, 1, 10, 187, 255, 1, 11, 255, 255, 2, 1, 255, 255, 2, 2, 255, 0, 2, 9, 255, 255, 2, 11, 255, 255, 2, 12, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 7, 221, 255, 3, 8, 187, 255, 3, 10, 255, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 5, 153, 255, 4, 6, 255, 255, 4, 8, 221, 0, 4, 9, 187, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 4, 255, 255, 5, 5, 153, 255, 5, 6, 153, 0, 5, 7, 255, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 1, 255, 255, 6, 2, 255, 187, 6, 3, 221, 255, 6, 5, 255, 0, 6, 6, 153, 0, 6, 11, 255, 255, 6, 12, 255, 0, 7, 1, 255, 255, 7, 2, 255, 119, 7, 3, 187, 0, 7, 4, 221, 0, 7, 11, 255, 255, 7, 12, 255, 0, 8, 2, 255, 0, 8, 12, 255, 0], "secondary": false }, { "width": 9, "bonus": 250, "chr": "0", "pixels": [0, 4, 187, 255, 0, 5, 221, 255, 0, 6, 255, 255, 0, 7, 221, 255, 0, 8, 187, 255, 1, 2, 255, 255, 1, 3, 187, 255, 1, 4, 174, 150, 1, 5, 205, 85, 1, 6, 226, 39, 1, 7, 255, 68, 1, 8, 235, 111, 1, 9, 237, 201, 1, 10, 255, 255, 2, 1, 203, 255, 2, 3, 255, 0, 2, 4, 187, 0, 2, 10, 214, 122, 2, 11, 254, 204, 3, 1, 255, 255, 3, 2, 204, 0, 3, 11, 255, 255, 3, 12, 204, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 1, 203, 255, 5, 2, 255, 102, 5, 11, 203, 255, 5, 12, 255, 0, 6, 2, 255, 255, 6, 3, 214, 223, 6, 9, 187, 255, 6, 10, 255, 255, 6, 12, 204, 0, 7, 3, 255, 119, 7, 4, 237, 201, 7, 5, 235, 240, 7, 6, 255, 255, 7, 7, 225, 251, 7, 8, 205, 233, 7, 9, 173, 175, 7, 10, 187, 0, 7, 11, 255, 0, 8, 5, 187, 0, 8, 6, 221, 0, 8, 7, 255, 0, 8, 8, 221, 0, 8, 9, 187, 0], "secondary": false }, { "width": 9, "bonus": 170, "chr": "1", "pixels": [2, 3, 203, 255, 2, 11, 255, 255, 3, 2, 237, 255, 3, 4, 204, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 255, 4, 3, 255, 255, 4, 4, 255, 255, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 255, 255, 4, 8, 255, 255, 4, 9, 255, 255, 4, 10, 255, 255, 4, 11, 255, 255, 4, 12, 255, 0, 5, 2, 255, 34, 5, 3, 255, 34, 5, 4, 255, 34, 5, 5, 255, 34, 5, 6, 255, 34, 5, 7, 255, 34, 5, 8, 255, 34, 5, 9, 255, 34, 5, 10, 255, 34, 5, 11, 255, 255, 5, 12, 255, 0, 6, 11, 255, 255, 6, 12, 255, 0, 7, 11, 153, 255, 7, 12, 255, 0, 8, 12, 153, 0], "secondary": false }, { "width": 9, "bonus": 205, "chr": "2", "pixels": [1, 10, 187, 255, 1, 11, 237, 255, 2, 2, 203, 255, 2, 9, 237, 255, 2, 11, 255, 255, 2, 12, 238, 0, 3, 1, 255, 255, 3, 3, 204, 0, 3, 8, 237, 255, 3, 10, 238, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 7, 237, 255, 4, 9, 238, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 1, 255, 255, 5, 2, 255, 34, 5, 6, 187, 255, 5, 8, 238, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 2, 254, 204, 6, 5, 187, 255, 6, 6, 169, 255, 6, 7, 187, 0, 6, 11, 255, 255, 6, 12, 255, 0, 7, 2, 182, 167, 7, 3, 244, 213, 7, 4, 220, 236, 7, 5, 155, 196, 7, 6, 187, 0, 7, 7, 170, 0, 7, 11, 255, 255, 7, 12, 255, 0, 8, 4, 204, 0, 8, 5, 204, 0, 8, 12, 255, 0], "secondary": false }, { "width": 9, "bonus": 200, "chr": "3", "pixels": [1, 10, 221, 255, 2, 1, 255, 255, 2, 11, 246, 194, 3, 1, 255, 255, 3, 2, 255, 0, 3, 11, 255, 255, 3, 12, 187, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 5, 221, 255, 4, 6, 255, 255, 4, 11, 255, 255, 4, 12, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 3, 153, 255, 5, 4, 203, 255, 5, 6, 252, 241, 5, 7, 255, 34, 5, 11, 255, 255, 5, 12, 255, 0, 6, 1, 255, 255, 6, 2, 255, 221, 6, 3, 153, 255, 6, 4, 153, 0, 6, 5, 204, 0, 6, 7, 253, 223, 6, 10, 255, 255, 6, 12, 255, 0, 7, 1, 255, 255, 7, 2, 255, 85, 7, 3, 221, 0, 7, 4, 153, 0, 7, 7, 153, 141, 7, 8, 248, 209, 7, 9, 220, 236, 7, 11, 255, 0, 8, 2, 255, 0, 8, 9, 204, 0, 8, 10, 204, 0], "secondary": false }, { "width": 9, "bonus": 220, "chr": "4", "pixels": [1, 8, 255, 255, 2, 6, 203, 255, 2, 7, 169, 255, 2, 8, 255, 255, 2, 9, 255, 0, 3, 5, 237, 255, 3, 7, 204, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 3, 153, 255, 4, 4, 237, 255, 4, 6, 238, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 2, 221, 255, 5, 3, 187, 255, 5, 4, 153, 0, 5, 5, 238, 0, 5, 8, 255, 255, 5, 9, 255, 0, 6, 1, 255, 255, 6, 2, 255, 255, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 237, 255, 7, 2, 255, 34, 7, 3, 255, 34, 7, 4, 255, 34, 7, 5, 255, 34, 7, 6, 255, 34, 7, 7, 255, 34, 7, 8, 255, 255, 7, 9, 255, 34, 7, 10, 255, 34, 7, 11, 255, 34, 7, 12, 238, 0, 8, 8, 196, 243, 8, 9, 255, 0], "secondary": false }, { "width": 9, "bonus": 215, "chr": "5", "pixels": [1, 5, 153, 255, 1, 10, 237, 255, 2, 1, 255, 255, 2, 2, 237, 255, 2, 3, 210, 247, 2, 4, 198, 219, 2, 5, 255, 255, 2, 6, 200, 152, 2, 11, 250, 191, 3, 1, 255, 255, 3, 2, 255, 0, 3, 3, 238, 0, 3, 4, 204, 0, 3, 5, 255, 255, 3, 6, 255, 17, 3, 11, 255, 255, 3, 12, 187, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 5, 255, 255, 4, 6, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 5, 187, 255, 5, 6, 255, 119, 5, 11, 221, 255, 5, 12, 255, 0, 6, 1, 255, 255, 6, 2, 255, 0, 6, 6, 255, 255, 6, 7, 192, 181, 6, 10, 237, 255, 6, 12, 221, 0, 7, 2, 255, 0, 7, 7, 254, 171, 7, 8, 255, 255, 7, 9, 196, 243, 7, 11, 238, 0, 8, 8, 170, 0, 8, 9, 255, 0, 8, 10, 187, 0], "secondary": false }, { "width": 9, "bonus": 250, "chr": "6", "pixels": [1, 5, 169, 255, 1, 6, 221, 255, 1, 7, 255, 255, 1, 8, 187, 255, 2, 3, 255, 255, 2, 4, 169, 255, 2, 5, 200, 195, 2, 6, 255, 255, 2, 7, 235, 111, 2, 8, 255, 102, 2, 9, 237, 201, 2, 10, 237, 238, 3, 2, 221, 255, 3, 4, 255, 0, 3, 5, 232, 205, 3, 6, 200, 152, 3, 7, 255, 0, 3, 10, 218, 139, 3, 11, 248, 209, 4, 1, 237, 255, 4, 3, 221, 0, 4, 5, 255, 255, 4, 6, 187, 0, 4, 11, 255, 255, 4, 12, 204, 0, 5, 1, 255, 255, 5, 2, 238, 0, 5, 5, 255, 255, 5, 6, 255, 34, 5, 11, 255, 255, 5, 12, 255, 0, 6, 1, 255, 255, 6, 2, 255, 0, 6, 6, 255, 187, 6, 10, 153, 255, 6, 11, 169, 255, 6, 12, 255, 0, 7, 2, 255, 34, 7, 6, 207, 188, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 187, 255, 7, 11, 153, 0, 7, 12, 170, 0, 8, 7, 153, 0, 8, 8, 255, 34, 8, 9, 255, 0, 8, 10, 255, 0, 8, 11, 187, 0], "secondary": false }, { "width": 9, "bonus": 165, "chr": "7", "pixels": [1, 1, 255, 255, 2, 1, 255, 255, 2, 2, 255, 0, 2, 10, 153, 255, 2, 11, 255, 255, 3, 1, 255, 255, 3, 2, 255, 0, 3, 8, 153, 255, 3, 9, 255, 255, 3, 11, 153, 0, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 6, 153, 255, 4, 7, 255, 255, 4, 9, 153, 0, 4, 10, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 4, 169, 255, 5, 5, 255, 255, 5, 7, 153, 0, 5, 8, 255, 0, 6, 1, 255, 255, 6, 2, 254, 171, 6, 3, 255, 255, 6, 5, 170, 0, 6, 6, 255, 0, 7, 1, 221, 255, 7, 2, 255, 119, 7, 3, 170, 0, 7, 4, 255, 0, 8, 2, 221, 0], "secondary": false }, { "width": 9, "bonus": 280, "chr": "8", "pixels": [0, 7, 153, 255, 0, 8, 221, 255, 0, 9, 187, 255, 1, 2, 237, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 6, 237, 255, 1, 7, 153, 255, 1, 8, 180, 96, 1, 9, 232, 93, 1, 10, 250, 243, 2, 1, 203, 255, 2, 3, 238, 0, 2, 4, 255, 34, 2, 5, 255, 255, 2, 6, 187, 209, 2, 7, 238, 0, 2, 8, 153, 0, 2, 11, 253, 240, 3, 1, 255, 255, 3, 2, 204, 0, 3, 6, 255, 187, 3, 7, 153, 0, 3, 11, 255, 255, 3, 12, 238, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 6, 255, 255, 4, 7, 196, 45, 4, 11, 255, 255, 4, 12, 255, 0, 5, 1, 203, 255, 5, 2, 255, 102, 5, 6, 255, 255, 5, 7, 255, 187, 5, 10, 169, 255, 5, 11, 169, 255, 5, 12, 255, 0, 6, 2, 251, 242, 6, 3, 244, 248, 6, 4, 255, 255, 6, 5, 187, 255, 6, 7, 255, 187, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 187, 255, 6, 11, 170, 0, 6, 12, 170, 0, 7, 3, 240, 36, 7, 4, 239, 18, 7, 5, 255, 0, 7, 6, 187, 0, 7, 8, 191, 23, 7, 9, 255, 17, 7, 10, 255, 0, 7, 11, 187, 0], "secondary": false }, { "width": 9, "bonus": 245, "chr": "9", "pixels": [0, 3, 187, 255, 0, 4, 255, 255, 0, 5, 187, 255, 1, 2, 237, 255, 1, 4, 196, 45, 1, 5, 255, 102, 1, 6, 246, 229, 1, 7, 153, 171, 1, 11, 255, 255, 2, 1, 255, 255, 2, 3, 238, 0, 2, 7, 255, 255, 2, 11, 255, 255, 2, 12, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 7, 255, 255, 3, 8, 255, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 51, 4, 7, 255, 255, 4, 8, 255, 0, 4, 10, 153, 255, 4, 11, 153, 255, 4, 12, 255, 0, 5, 2, 254, 239, 5, 6, 187, 255, 5, 8, 255, 68, 5, 9, 187, 255, 5, 10, 203, 255, 5, 11, 153, 0, 5, 12, 153, 0, 6, 3, 251, 207, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 239, 236, 6, 9, 155, 196, 6, 10, 187, 0, 6, 11, 204, 0, 7, 4, 204, 0, 7, 5, 255, 34, 7, 6, 255, 34, 7, 7, 255, 0, 7, 8, 255, 0, 7, 9, 221, 0], "secondary": false }, { "width": 11, "bonus": 270, "chr": "%", "pixels": [1, 2, 187, 255, 1, 3, 187, 255, 1, 11, 169, 255, 2, 1, 255, 255, 2, 3, 214, 122, 2, 4, 255, 255, 2, 10, 221, 255, 2, 11, 153, 255, 2, 12, 170, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 4, 255, 255, 3, 5, 255, 0, 3, 9, 237, 255, 3, 11, 221, 0, 3, 12, 153, 0, 4, 2, 255, 255, 4, 3, 255, 255, 4, 5, 255, 0, 4, 7, 169, 255, 4, 8, 221, 255, 4, 10, 238, 0, 5, 3, 255, 17, 5, 4, 255, 0, 5, 6, 237, 255, 5, 7, 153, 255, 5, 8, 170, 0, 5, 9, 223, 19, 6, 5, 237, 255, 6, 7, 238, 0, 6, 8, 187, 116, 6, 9, 255, 255, 6, 10, 255, 255, 7, 3, 169, 255, 7, 4, 203, 255, 7, 6, 238, 0, 7, 8, 255, 255, 7, 10, 255, 0, 7, 11, 255, 255, 8, 2, 237, 255, 8, 4, 170, 0, 8, 5, 204, 0, 8, 8, 255, 255, 8, 9, 255, 34, 8, 11, 255, 255, 8, 12, 255, 0, 9, 1, 255, 255, 9, 3, 238, 0, 9, 9, 255, 255, 9, 10, 255, 255, 9, 12, 255, 0, 10, 2, 255, 0, 10, 10, 255, 17, 10, 11, 255, 0], "secondary": false }, { "width": 6, "bonus": 145, "chr": "/", "pixels": [0, 11, 187, 255, 0, 12, 255, 255, 1, 8, 203, 255, 1, 9, 255, 255, 1, 10, 175, 247, 1, 11, 164, 132, 1, 12, 187, 0, 1, 13, 255, 0, 2, 5, 221, 255, 2, 6, 255, 255, 2, 7, 175, 247, 2, 8, 164, 132, 2, 9, 204, 0, 2, 10, 255, 0, 2, 11, 170, 0, 3, 1, 153, 255, 3, 2, 221, 255, 3, 3, 255, 255, 3, 4, 181, 239, 3, 5, 168, 103, 3, 6, 221, 0, 3, 7, 255, 0, 3, 8, 170, 0, 4, 1, 169, 255, 4, 2, 180, 96, 4, 3, 221, 0, 4, 4, 255, 0, 4, 5, 170, 0, 5, 2, 170, 0], "secondary": false }, { "width": 10, "bonus": 150, "chr": "+", "pixels": [0, 7, 187, 255, 1, 7, 255, 255, 1, 8, 187, 0, 2, 7, 255, 255, 2, 8, 255, 0, 3, 7, 255, 255, 3, 8, 255, 34, 4, 3, 187, 255, 4, 4, 255, 255, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 255, 255, 4, 8, 255, 255, 4, 9, 255, 255, 4, 10, 255, 255, 4, 11, 240, 253, 5, 4, 187, 0, 5, 5, 255, 0, 5, 6, 255, 0, 5, 7, 255, 255, 5, 8, 255, 0, 5, 9, 255, 0, 5, 10, 255, 0, 5, 11, 255, 0, 5, 12, 238, 0, 6, 7, 255, 255, 6, 8, 255, 0, 7, 7, 255, 255, 7, 8, 255, 0, 8, 8, 255, 0], "secondary": false }, { "width": 7, "bonus": 115, "chr": "?", "pixels": [2, 1, 255, 255, 3, 1, 255, 255, 3, 2, 255, 0, 3, 7, 255, 255, 3, 8, 255, 255, 3, 11, 255, 255, 4, 1, 237, 255, 4, 2, 255, 68, 4, 5, 153, 255, 4, 6, 203, 255, 4, 8, 255, 0, 4, 9, 255, 0, 4, 12, 255, 0, 5, 2, 255, 255, 5, 3, 255, 255, 5, 4, 255, 255, 5, 5, 169, 255, 5, 6, 153, 0, 5, 7, 204, 0, 6, 3, 255, 34, 6, 4, 255, 0, 6, 5, 255, 0, 6, 6, 170, 0], "secondary": false }, { "width": 3, "bonus": 90, "chr": "!", "pixels": [1, 0, 237, 255, 1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 10, 255, 255, 2, 1, 238, 0, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 11, 255, 0], "secondary": false }, { "width": 11, "bonus": 350, "chr": "@", "pixels": [0, 6, 169, 255, 0, 7, 221, 255, 0, 8, 221, 255, 0, 9, 169, 255, 1, 5, 255, 255, 1, 7, 193, 90, 1, 8, 230, 75, 1, 9, 237, 128, 1, 10, 237, 219, 1, 11, 232, 243, 2, 4, 237, 255, 2, 6, 255, 0, 2, 11, 225, 116, 2, 12, 252, 241, 3, 3, 187, 255, 3, 5, 238, 0, 3, 6, 191, 250, 3, 7, 255, 255, 3, 8, 255, 255, 3, 9, 207, 251, 3, 12, 184, 189, 3, 13, 248, 157, 4, 3, 255, 255, 4, 4, 187, 0, 4, 5, 194, 201, 4, 6, 187, 255, 4, 7, 187, 0, 4, 8, 255, 0, 4, 9, 255, 136, 4, 10, 241, 198, 4, 13, 255, 255, 4, 14, 153, 0, 5, 3, 255, 255, 5, 4, 255, 0, 5, 5, 255, 255, 5, 6, 167, 52, 5, 7, 187, 0, 5, 10, 255, 255, 5, 11, 187, 0, 5, 13, 187, 255, 5, 14, 255, 0, 6, 3, 255, 255, 6, 4, 255, 0, 6, 5, 255, 255, 6, 6, 255, 0, 6, 10, 255, 255, 6, 11, 255, 0, 6, 14, 187, 0, 7, 3, 203, 255, 7, 4, 255, 102, 7, 5, 255, 255, 7, 6, 255, 0, 7, 10, 255, 255, 7, 11, 255, 0, 8, 4, 255, 255, 8, 5, 255, 255, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 255, 255, 8, 9, 255, 255, 8, 10, 255, 255, 8, 11, 255, 0, 9, 5, 255, 34, 9, 6, 255, 34, 9, 7, 255, 34, 9, 8, 255, 34, 9, 9, 255, 34, 9, 10, 255, 255, 9, 11, 255, 0, 10, 11, 255, 0], "secondary": false }, { "width": 11, "bonus": 320, "chr": "#", "pixels": [0, 8, 255, 255, 1, 4, 255, 255, 1, 8, 255, 255, 1, 9, 255, 0, 2, 4, 255, 255, 2, 5, 255, 102, 2, 6, 153, 255, 2, 7, 187, 255, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 205, 233, 3, 1, 187, 255, 3, 2, 237, 255, 3, 3, 255, 255, 3, 4, 255, 255, 3, 5, 255, 187, 3, 6, 184, 189, 3, 7, 194, 135, 3, 8, 255, 255, 3, 9, 255, 0, 3, 10, 255, 0, 3, 11, 255, 0, 3, 12, 187, 0, 4, 2, 191, 23, 4, 3, 238, 0, 4, 4, 255, 255, 4, 5, 255, 0, 4, 6, 187, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 4, 255, 255, 5, 5, 255, 0, 5, 8, 255, 255, 5, 9, 254, 171, 5, 10, 203, 255, 5, 11, 255, 255, 6, 3, 153, 255, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 203, 255, 6, 8, 255, 255, 6, 9, 255, 119, 6, 10, 198, 109, 6, 11, 204, 0, 6, 12, 255, 0, 7, 1, 221, 255, 7, 2, 192, 225, 7, 3, 192, 181, 7, 4, 255, 255, 7, 5, 255, 17, 7, 6, 255, 0, 7, 7, 255, 0, 7, 8, 255, 255, 7, 9, 255, 0, 8, 2, 221, 0, 8, 3, 170, 0, 8, 4, 255, 255, 8, 5, 255, 0, 8, 8, 221, 255, 8, 9, 255, 0, 9, 5, 255, 0, 9, 9, 221, 0], "secondary": false }, { "width": 8, "bonus": 200, "chr": "$", "pixels": [0, 3, 221, 255, 0, 4, 187, 255, 0, 10, 203, 255, 1, 2, 203, 255, 1, 3, 155, 112, 1, 4, 237, 128, 1, 5, 250, 243, 1, 11, 241, 198, 2, 1, 255, 255, 2, 3, 204, 0, 2, 5, 200, 195, 2, 6, 247, 141, 2, 11, 255, 255, 2, 12, 196, 45, 3, 0, 255, 255, 3, 1, 255, 255, 3, 2, 255, 0, 3, 6, 255, 255, 3, 11, 255, 255, 3, 12, 255, 255, 4, 1, 255, 255, 4, 2, 255, 0, 4, 6, 196, 243, 4, 7, 255, 119, 4, 11, 255, 255, 4, 12, 255, 0, 4, 13, 255, 0, 5, 1, 187, 255, 5, 2, 255, 136, 5, 7, 250, 243, 5, 8, 174, 150, 5, 10, 203, 255, 5, 12, 255, 0, 6, 2, 209, 104, 6, 8, 250, 191, 6, 9, 235, 240, 6, 10, 155, 196, 6, 11, 204, 0, 7, 9, 187, 0, 7, 10, 221, 0], "secondary": false }, { "width": 8, "bonus": 120, "chr": "^", "pixels": [0, 6, 169, 255, 0, 7, 255, 255, 1, 4, 203, 255, 1, 5, 255, 255, 1, 7, 170, 0, 1, 8, 255, 0, 2, 2, 255, 255, 2, 3, 203, 255, 2, 5, 204, 0, 2, 6, 255, 0, 3, 1, 203, 255, 3, 2, 255, 255, 3, 3, 255, 119, 3, 4, 204, 0, 4, 2, 211, 41, 4, 3, 255, 153, 4, 4, 255, 255, 4, 5, 169, 255, 5, 4, 153, 0, 5, 5, 255, 119, 5, 6, 249, 243, 5, 7, 241, 252, 6, 7, 243, 89, 6, 8, 238, 0], "secondary": false }, { "width": 9, "bonus": 85, "chr": "~", "pixels": [1, 6, 255, 255, 1, 7, 203, 255, 2, 5, 255, 255, 2, 7, 255, 0, 2, 8, 204, 0, 3, 5, 203, 255, 3, 6, 255, 102, 4, 6, 248, 227, 4, 7, 163, 160, 5, 7, 255, 255, 6, 7, 255, 255, 6, 8, 255, 0, 7, 5, 187, 255, 7, 6, 191, 250, 7, 8, 255, 0, 8, 6, 187, 0, 8, 7, 187, 0], "secondary": false }, { "width": 10, "bonus": 270, "chr": "&", "pixels": [0, 8, 203, 255, 0, 9, 203, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 207, 251, 1, 7, 221, 255, 1, 9, 221, 98, 1, 10, 248, 227, 1, 11, 164, 185, 2, 1, 221, 255, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 136, 2, 6, 255, 255, 2, 8, 221, 0, 2, 11, 255, 255, 3, 1, 255, 255, 3, 2, 221, 0, 3, 6, 255, 255, 3, 7, 255, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 6, 255, 255, 4, 7, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 2, 255, 0, 5, 6, 255, 255, 5, 7, 255, 0, 5, 10, 153, 255, 5, 11, 169, 255, 5, 12, 255, 0, 6, 4, 237, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 169, 255, 6, 11, 153, 0, 6, 12, 170, 0, 7, 5, 240, 36, 7, 6, 255, 255, 7, 7, 255, 34, 7, 8, 255, 34, 7, 9, 255, 0, 7, 10, 255, 0, 7, 11, 170, 0, 8, 6, 196, 243, 8, 7, 255, 0, 9, 7, 187, 0], "secondary": false }, { "width": 8, "bonus": 90, "chr": "*", "pixels": [1, 3, 255, 255, 2, 3, 255, 255, 2, 4, 254, 204, 2, 5, 221, 255, 3, 1, 237, 255, 3, 2, 255, 255, 3, 3, 255, 255, 3, 4, 255, 255, 3, 5, 214, 61, 3, 6, 221, 0, 4, 2, 238, 0, 4, 3, 255, 255, 4, 4, 255, 85, 4, 5, 255, 255, 5, 3, 221, 255, 5, 4, 255, 0, 5, 6, 255, 34, 6, 4, 221, 0], "secondary": false }, { "width": 5, "bonus": 125, "chr": "(", "pixels": [1, 4, 187, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 221, 255, 1, 8, 187, 255, 2, 1, 221, 255, 2, 2, 237, 255, 2, 3, 180, 217, 2, 4, 184, 142, 2, 5, 205, 85, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 237, 128, 2, 9, 232, 187, 2, 10, 245, 247, 2, 11, 200, 238, 3, 0, 203, 255, 3, 2, 221, 0, 3, 3, 238, 0, 3, 4, 153, 0, 3, 10, 175, 25, 3, 11, 245, 107, 3, 12, 241, 215, 4, 1, 204, 0, 4, 13, 204, 0], "secondary": false }, { "width": 5, "bonus": 125, "chr": ")", "pixels": [1, 0, 203, 255, 1, 12, 203, 255, 2, 1, 248, 227, 2, 2, 244, 248, 2, 3, 153, 255, 2, 9, 169, 255, 2, 10, 237, 255, 2, 11, 191, 250, 2, 13, 204, 0, 3, 2, 230, 75, 3, 3, 247, 141, 3, 4, 228, 209, 3, 5, 255, 255, 3, 6, 255, 255, 3, 7, 230, 245, 3, 8, 205, 233, 3, 9, 182, 167, 3, 10, 187, 70, 3, 11, 238, 0, 3, 12, 187, 0, 4, 5, 187, 0, 4, 6, 255, 0, 4, 7, 255, 0, 4, 8, 221, 0, 4, 9, 187, 0], "secondary": false }, { "width": 10, "bonus": 80, "chr": "_", "pixels": [1, 12, 255, 255, 2, 12, 255, 255, 2, 13, 255, 0, 3, 12, 255, 255, 3, 13, 255, 0, 4, 12, 255, 255, 4, 13, 255, 0, 5, 12, 255, 255, 5, 13, 255, 0, 6, 12, 255, 255, 6, 13, 255, 0, 7, 12, 255, 255, 7, 13, 255, 0, 8, 12, 187, 255, 8, 13, 255, 0, 9, 13, 187, 0], "secondary": false }, { "width": 7, "bonus": 40, "chr": "-", "pixels": [1, 7, 255, 255, 2, 7, 255, 255, 2, 8, 255, 0, 3, 7, 255, 255, 3, 8, 255, 0, 4, 7, 255, 255, 4, 8, 255, 0, 5, 8, 255, 0], "secondary": true }, { "width": 9, "bonus": 140, "chr": "=", "pixels": [1, 5, 255, 255, 1, 7, 255, 255, 2, 5, 255, 255, 2, 6, 255, 0, 2, 7, 255, 255, 2, 8, 255, 0, 3, 5, 255, 255, 3, 6, 255, 0, 3, 7, 255, 255, 3, 8, 255, 0, 4, 5, 255, 255, 4, 6, 255, 0, 4, 7, 255, 255, 4, 8, 255, 0, 5, 5, 255, 255, 5, 6, 255, 0, 5, 7, 255, 255, 5, 8, 255, 0, 6, 5, 255, 255, 6, 6, 255, 0, 6, 7, 255, 255, 6, 8, 255, 0, 7, 5, 255, 255, 7, 6, 255, 0, 7, 7, 255, 255, 7, 8, 255, 0, 8, 6, 255, 0, 8, 8, 255, 0], "secondary": false }, { "width": 4, "bonus": 145, "chr": "[", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 2, 1, 221, 255, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0, 2, 13, 255, 221, 2, 14, 255, 0, 3, 2, 221, 0, 3, 14, 221, 0], "secondary": false }, { "width": 4, "bonus": 145, "chr": "]", "pixels": [1, 1, 255, 255, 1, 13, 255, 255, 2, 1, 237, 255, 2, 2, 255, 255, 2, 3, 255, 255, 2, 4, 255, 255, 2, 5, 255, 255, 2, 6, 255, 255, 2, 7, 255, 255, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 255, 255, 2, 12, 255, 255, 2, 13, 210, 247, 2, 14, 255, 0, 3, 2, 238, 0, 3, 3, 255, 0, 3, 4, 255, 0, 3, 5, 255, 0, 3, 6, 255, 0, 3, 7, 255, 0, 3, 8, 255, 0, 3, 9, 255, 0, 3, 10, 255, 0, 3, 11, 255, 0, 3, 12, 255, 0, 3, 13, 255, 0, 3, 14, 204, 0], "secondary": false }, { "width": 6, "bonus": 145, "chr": "{", "pixels": [1, 7, 255, 255, 2, 2, 169, 255, 2, 3, 221, 255, 2, 4, 255, 255, 2, 5, 237, 255, 2, 6, 237, 255, 2, 7, 163, 160, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 221, 255, 2, 12, 153, 255, 3, 1, 221, 255, 3, 3, 193, 90, 3, 4, 226, 39, 3, 5, 255, 34, 3, 6, 238, 0, 3, 7, 238, 0, 3, 9, 255, 34, 3, 10, 255, 34, 3, 11, 255, 68, 3, 12, 243, 178, 3, 13, 228, 209, 4, 1, 187, 255, 4, 2, 221, 0, 4, 13, 232, 205, 4, 14, 187, 0, 5, 2, 187, 0, 5, 14, 187, 0], "secondary": false }, { "width": 5, "bonus": 125, "chr": "}", "pixels": [1, 1, 255, 255, 1, 13, 237, 255, 2, 2, 255, 255, 2, 3, 255, 255, 2, 4, 255, 255, 2, 5, 255, 255, 2, 6, 153, 255, 2, 8, 187, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 255, 255, 2, 12, 255, 255, 2, 14, 238, 0, 3, 3, 255, 34, 3, 4, 255, 34, 3, 5, 255, 68, 3, 6, 254, 171, 3, 7, 255, 255, 3, 9, 196, 45, 3, 10, 255, 34, 3, 11, 255, 17, 3, 12, 255, 0, 3, 13, 255, 0, 4, 7, 175, 25, 4, 8, 255, 0], "secondary": false }, { "width": 3, "bonus": 20, "chr": ":", "pixels": [1, 3, 255, 255, 1, 10, 255, 255, 2, 4, 255, 0, 2, 11, 255, 0], "secondary": true }, { "width": 4, "bonus": 45, "chr": ";", "pixels": [1, 11, 153, 255, 1, 12, 153, 255, 2, 3, 255, 255, 2, 10, 237, 255, 2, 11, 176, 197, 2, 12, 167, 52, 2, 13, 153, 0, 3, 4, 255, 0, 3, 11, 238, 0], "secondary": true }, { "width": 4, "bonus": 45, "chr": '"', "pixels": [0, 1, 187, 255, 1, 0, 187, 255, 1, 1, 210, 227, 1, 2, 209, 104, 2, 0, 255, 255, 2, 1, 255, 255, 2, 2, 214, 122, 3, 1, 255, 0, 3, 2, 255, 0], "secondary": true }, { "width": 4, "bonus": 30, "chr": "'", "pixels": [0, 0, 187, 255, 0, 1, 255, 255, 0, 2, 153, 255, 1, 1, 191, 23, 1, 2, 255, 0, 1, 3, 153, 0], "secondary": true }, { "width": 9, "bonus": 120, "chr": "<", "pixels": [1, 6, 255, 255, 2, 6, 255, 255, 2, 7, 255, 187, 3, 5, 255, 255, 3, 7, 255, 255, 3, 8, 200, 65, 4, 5, 187, 255, 4, 6, 255, 0, 4, 8, 254, 171, 5, 4, 237, 255, 5, 5, 155, 112, 5, 6, 187, 0, 5, 8, 255, 255, 5, 9, 181, 48, 6, 4, 221, 255, 6, 5, 238, 0, 6, 8, 153, 255, 6, 9, 255, 153, 7, 3, 153, 255, 7, 5, 221, 0, 7, 9, 234, 222, 7, 10, 153, 0, 8, 4, 153, 0, 8, 10, 204, 0], "secondary": false }, { "width": 8, "bonus": 125, "chr": ">", "pixels": [0, 3, 153, 255, 0, 9, 203, 255, 1, 4, 241, 234, 1, 8, 153, 255, 1, 9, 166, 235, 1, 10, 204, 0, 2, 4, 243, 249, 2, 5, 230, 75, 2, 8, 255, 255, 2, 9, 167, 52, 2, 10, 153, 0, 3, 5, 250, 191, 3, 8, 169, 255, 3, 9, 255, 0, 4, 5, 255, 255, 4, 6, 196, 45, 4, 7, 255, 255, 4, 9, 170, 0, 5, 6, 255, 255, 5, 7, 196, 243, 5, 8, 255, 0, 6, 6, 255, 255, 6, 7, 255, 68, 6, 8, 187, 0, 7, 7, 255, 0], "secondary": false }, { "width": 7, "bonus": 110, "chr": "\\", "pixels": [1, 1, 255, 255, 1, 2, 187, 255, 2, 2, 255, 85, 2, 3, 232, 187, 2, 4, 255, 255, 2, 5, 207, 251, 3, 4, 170, 0, 3, 5, 255, 85, 3, 6, 237, 183, 3, 7, 255, 255, 3, 8, 223, 253, 4, 7, 170, 0, 4, 8, 255, 68, 4, 9, 243, 178, 4, 10, 255, 255, 4, 11, 225, 251, 4, 12, 153, 255, 5, 10, 170, 0, 5, 11, 255, 68, 5, 12, 243, 178, 5, 13, 153, 0, 6, 13, 170, 0], "secondary": false }, { "width": 3, "bonus": 10, "chr": ".", "pixels": [1, 12, 255, 255, 2, 13, 255, 0], "secondary": true }, { "width": 3, "bonus": 40, "chr": ",", "pixels": [0, 11, 153, 255, 0, 12, 237, 255, 0, 13, 169, 255, 1, 11, 187, 255, 1, 12, 180, 96, 1, 13, 238, 0, 1, 14, 170, 0, 2, 12, 187, 0], "secondary": true }, { "width": 4, "bonus": 140, "chr": "|", "pixels": [1, 0, 237, 255, 1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 1, 13, 255, 255, 2, 1, 238, 0, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0, 2, 13, 255, 0, 2, 14, 255, 0], "secondary": false }], "width": 14, "spacewidth": 4, "shadow": true, "height": 16, "basey": 11 };
              })
            ),
            /***/
            0: (
              /***/
              (function(module2, exports2, __webpack_require__) {
                module2.exports = __webpack_require__("./fonts/chat_11px.fontmeta.json");
              })
            )
            /******/
          })
        );
      });
    }
  });

  // node_modules/@alt1/ocr/dist/fonts/chat_10px.js
  var require_chat_10px = __commonJS({
    "node_modules/@alt1/ocr/dist/fonts/chat_10px.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["chat_10px"] = factory();
        else
          root["OCR_chat_10px"] = factory();
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
            "./fonts/chat_10px.fontmeta.json": (
              /***/
              (function(module2, exports2) {
                module2.exports = { "chars": [{ "width": 8, "bonus": 195, "chr": "a", "pixels": [1, 8, 221, 255, 1, 9, 255, 255, 2, 4, 187, 255, 2, 5, 160, 217, 2, 7, 169, 255, 2, 8, 166, 235, 2, 9, 237, 128, 2, 10, 255, 221, 3, 4, 255, 255, 3, 5, 196, 45, 3, 7, 221, 255, 3, 8, 187, 70, 3, 9, 153, 0, 3, 10, 255, 255, 3, 11, 221, 0, 4, 4, 255, 255, 4, 5, 255, 17, 4, 7, 255, 255, 4, 8, 221, 0, 4, 10, 237, 255, 4, 11, 255, 0, 5, 4, 203, 255, 5, 5, 254, 171, 5, 7, 255, 255, 5, 8, 255, 68, 5, 9, 203, 255, 5, 11, 238, 0, 6, 5, 244, 213, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 7, 6, 204, 0, 7, 7, 255, 0, 7, 8, 255, 0, 7, 9, 255, 0, 7, 10, 255, 0, 7, 11, 255, 0], "secondary": false }, { "width": 8, "bonus": 230, "chr": "b", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 153, 2, 5, 255, 221, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 255, 85, 2, 9, 255, 221, 2, 10, 255, 153, 2, 11, 255, 0, 3, 4, 242, 251, 3, 5, 167, 52, 3, 6, 221, 0, 3, 10, 252, 241, 3, 11, 153, 0, 4, 4, 255, 255, 4, 5, 240, 36, 4, 10, 255, 255, 4, 11, 238, 0, 5, 4, 187, 255, 5, 5, 255, 187, 5, 9, 187, 255, 5, 10, 181, 239, 5, 11, 255, 0, 6, 5, 237, 201, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 186, 233, 6, 10, 187, 0, 6, 11, 170, 0, 7, 6, 191, 23, 7, 7, 255, 68, 7, 8, 255, 17, 7, 9, 255, 0, 7, 10, 170, 0], "secondary": false }, { "width": 8, "bonus": 130, "chr": "c", "pixels": [1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 2, 5, 221, 255, 2, 6, 168, 103, 2, 7, 255, 0, 2, 8, 255, 68, 2, 9, 255, 221, 2, 10, 200, 174, 3, 4, 237, 255, 3, 5, 175, 124, 3, 6, 221, 0, 3, 10, 252, 241, 4, 4, 255, 255, 4, 5, 243, 71, 4, 10, 255, 255, 4, 11, 238, 0, 5, 4, 221, 255, 5, 5, 255, 102, 5, 10, 230, 245, 5, 11, 255, 0, 6, 5, 239, 145, 6, 9, 203, 255, 6, 10, 153, 141, 6, 11, 221, 0, 7, 10, 204, 0], "secondary": false }, { "width": 8, "bonus": 235, "chr": "d", "pixels": [1, 5, 169, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 191, 250, 2, 4, 169, 255, 2, 5, 191, 250, 2, 6, 187, 70, 2, 7, 255, 0, 2, 8, 255, 51, 2, 9, 255, 187, 2, 10, 232, 187, 3, 4, 255, 255, 3, 5, 181, 48, 3, 6, 187, 0, 3, 10, 255, 255, 3, 11, 170, 0, 4, 4, 237, 255, 4, 5, 255, 51, 4, 10, 240, 253, 4, 11, 255, 0, 5, 4, 153, 255, 5, 5, 253, 223, 5, 9, 221, 255, 5, 10, 166, 235, 5, 11, 238, 0, 6, 1, 255, 255, 6, 2, 255, 255, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 153, 0, 7, 2, 255, 0, 7, 3, 255, 0, 7, 4, 255, 0, 7, 5, 255, 0, 7, 6, 255, 0, 7, 7, 255, 0, 7, 8, 255, 0, 7, 9, 255, 0, 7, 10, 255, 0, 7, 11, 255, 0], "secondary": false }, { "width": 8, "bonus": 175, "chr": "e", "pixels": [1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 160, 244, 2, 5, 203, 255, 2, 6, 168, 103, 2, 7, 255, 255, 2, 8, 255, 34, 2, 9, 254, 204, 2, 10, 208, 167, 3, 4, 255, 255, 3, 6, 204, 0, 3, 7, 255, 255, 3, 8, 255, 0, 3, 10, 251, 242, 4, 4, 255, 255, 4, 5, 255, 17, 4, 7, 255, 255, 4, 8, 255, 0, 4, 10, 255, 255, 4, 11, 238, 0, 5, 4, 169, 255, 5, 5, 255, 187, 5, 7, 255, 255, 5, 8, 255, 0, 5, 10, 230, 245, 5, 11, 255, 0, 6, 5, 221, 177, 6, 6, 250, 243, 6, 7, 255, 255, 6, 8, 255, 0, 6, 11, 221, 0, 7, 6, 153, 0, 7, 7, 238, 0, 7, 8, 255, 0], "secondary": false }, { "width": 6, "bonus": 135, "chr": "f", "pixels": [1, 4, 221, 255, 2, 2, 221, 255, 2, 3, 255, 255, 2, 4, 255, 255, 2, 5, 255, 255, 2, 6, 255, 255, 2, 7, 255, 255, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 3, 1, 221, 255, 3, 2, 160, 217, 3, 3, 227, 57, 3, 4, 255, 255, 3, 5, 255, 68, 3, 6, 255, 68, 3, 7, 255, 68, 3, 8, 255, 68, 3, 9, 255, 68, 3, 10, 255, 51, 3, 11, 255, 0, 4, 1, 255, 255, 4, 2, 221, 0, 4, 4, 228, 247, 4, 5, 255, 0, 5, 2, 255, 0, 5, 5, 221, 0], "secondary": false }, { "width": 8, "bonus": 220, "chr": "g", "pixels": [1, 5, 187, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 191, 250, 2, 4, 203, 255, 2, 5, 181, 239, 2, 6, 196, 45, 2, 7, 255, 0, 2, 8, 255, 34, 2, 9, 254, 171, 2, 10, 246, 229, 2, 13, 241, 252, 3, 4, 255, 255, 3, 5, 218, 80, 3, 6, 170, 0, 3, 10, 255, 255, 3, 11, 227, 57, 3, 13, 255, 255, 4, 4, 187, 255, 4, 5, 255, 153, 4, 10, 203, 255, 4, 11, 255, 17, 4, 12, 186, 233, 4, 13, 200, 238, 5, 4, 255, 255, 5, 5, 255, 255, 5, 6, 255, 255, 5, 7, 255, 255, 5, 8, 255, 255, 5, 9, 255, 255, 5, 10, 255, 255, 5, 11, 255, 255, 5, 12, 207, 251, 5, 13, 181, 48, 6, 5, 255, 68, 6, 6, 255, 68, 6, 7, 255, 68, 6, 8, 255, 68, 6, 9, 255, 68, 6, 10, 255, 68, 6, 11, 255, 17, 6, 12, 255, 0, 6, 13, 204, 0], "secondary": false }, { "width": 9, "bonus": 195, "chr": "h", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 102, 2, 5, 254, 239, 2, 6, 255, 119, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 4, 217, 239, 3, 5, 153, 141, 3, 6, 238, 0, 4, 4, 255, 255, 4, 5, 204, 0, 5, 4, 237, 255, 5, 5, 255, 102, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 7, 6, 255, 68, 7, 7, 255, 68, 7, 8, 255, 68, 7, 9, 255, 68, 7, 10, 255, 51, 7, 11, 255, 0], "secondary": false }, { "width": 4, "bonus": 80, "chr": "i", "pixels": [1, 1, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 2, 255, 17, 2, 5, 255, 102, 2, 6, 255, 102, 2, 7, 255, 102, 2, 8, 255, 102, 2, 9, 255, 102, 2, 10, 255, 68, 2, 11, 255, 0], "secondary": false }, { "width": 5, "bonus": 110, "chr": "j", "pixels": [0, 13, 221, 255, 1, 13, 237, 255, 2, 1, 255, 255, 2, 4, 255, 255, 2, 5, 255, 255, 2, 6, 255, 255, 2, 7, 255, 255, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 255, 255, 2, 12, 255, 255, 3, 2, 255, 17, 3, 5, 255, 68, 3, 6, 255, 68, 3, 7, 255, 68, 3, 8, 255, 68, 3, 9, 255, 68, 3, 10, 255, 68, 3, 11, 255, 68, 3, 12, 255, 0, 3, 13, 255, 0], "secondary": false }, { "width": 7, "bonus": 175, "chr": "k", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 68, 2, 7, 255, 255, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 6, 205, 233, 3, 7, 255, 255, 3, 8, 254, 171, 4, 5, 255, 255, 4, 6, 181, 239, 4, 7, 196, 45, 4, 8, 255, 187, 4, 9, 244, 231, 5, 4, 255, 255, 5, 6, 255, 0, 5, 7, 170, 0, 5, 9, 218, 139, 5, 10, 255, 255, 6, 5, 255, 0, 6, 11, 255, 0], "secondary": false }, { "width": 5, "bonus": 100, "chr": "l", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 2, 2, 255, 102, 2, 3, 255, 102, 2, 4, 255, 102, 2, 5, 255, 102, 2, 6, 255, 102, 2, 7, 255, 102, 2, 8, 255, 102, 2, 9, 255, 119, 2, 10, 255, 255, 3, 10, 155, 112, 3, 11, 255, 0], "secondary": false }, { "width": 12, "bonus": 245, "chr": "m", "pixels": [1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 5, 254, 239, 2, 6, 255, 119, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 4, 203, 255, 3, 6, 238, 0, 4, 4, 255, 255, 4, 5, 204, 0, 5, 4, 221, 255, 5, 5, 255, 136, 6, 5, 252, 241, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 7, 5, 217, 239, 7, 6, 243, 71, 7, 7, 255, 0, 7, 8, 255, 0, 7, 9, 255, 0, 7, 10, 255, 0, 7, 11, 255, 0, 8, 4, 255, 255, 8, 6, 204, 0, 9, 4, 255, 255, 9, 5, 255, 102, 10, 5, 255, 255, 10, 6, 255, 255, 10, 7, 255, 255, 10, 8, 255, 255, 10, 9, 255, 255, 10, 10, 255, 255, 11, 6, 255, 68, 11, 7, 255, 68, 11, 8, 255, 68, 11, 9, 255, 68, 11, 10, 255, 51, 11, 11, 255, 0], "secondary": false }, { "width": 8, "bonus": 160, "chr": "n", "pixels": [1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 5, 254, 239, 2, 6, 255, 102, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 4, 203, 255, 3, 6, 238, 0, 4, 4, 255, 255, 4, 5, 204, 0, 5, 4, 237, 255, 5, 5, 255, 102, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 7, 6, 255, 68, 7, 7, 255, 68, 7, 8, 255, 68, 7, 9, 255, 68, 7, 10, 255, 51, 7, 11, 255, 0], "secondary": false }, { "width": 9, "bonus": 170, "chr": "o", "pixels": [1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 2, 5, 221, 255, 2, 6, 168, 103, 2, 7, 255, 0, 2, 8, 255, 68, 2, 9, 255, 221, 2, 10, 174, 150, 3, 4, 221, 255, 3, 5, 155, 112, 3, 6, 221, 0, 3, 10, 250, 226, 4, 4, 255, 255, 4, 5, 221, 0, 4, 10, 255, 255, 4, 11, 221, 0, 5, 4, 221, 255, 5, 5, 255, 85, 5, 10, 221, 255, 5, 11, 255, 0, 6, 5, 252, 241, 6, 6, 153, 171, 6, 9, 237, 255, 6, 11, 221, 0, 7, 5, 153, 171, 7, 6, 253, 223, 7, 7, 255, 255, 7, 8, 230, 245, 7, 9, 153, 141, 7, 10, 238, 0, 8, 7, 221, 0, 8, 8, 255, 0, 8, 9, 221, 0], "secondary": false }, { "width": 8, "bonus": 225, "chr": "p", "pixels": [1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 2, 4, 153, 255, 2, 5, 254, 204, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 255, 85, 2, 9, 255, 221, 2, 10, 255, 153, 2, 11, 255, 68, 2, 12, 255, 68, 2, 13, 255, 17, 3, 4, 237, 255, 3, 5, 167, 52, 3, 6, 204, 0, 3, 10, 252, 241, 3, 11, 153, 0, 4, 4, 255, 255, 4, 5, 240, 36, 4, 10, 255, 255, 4, 11, 238, 0, 5, 4, 187, 255, 5, 5, 255, 187, 5, 9, 187, 255, 5, 10, 181, 239, 5, 11, 255, 0, 6, 5, 237, 201, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 186, 233, 6, 10, 187, 0, 6, 11, 170, 0, 7, 6, 191, 23, 7, 7, 255, 68, 7, 8, 255, 17, 7, 9, 255, 0, 7, 10, 170, 0], "secondary": false }, { "width": 8, "bonus": 220, "chr": "q", "pixels": [1, 5, 169, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 191, 250, 2, 4, 169, 255, 2, 5, 191, 250, 2, 6, 187, 70, 2, 7, 255, 0, 2, 8, 255, 51, 2, 9, 255, 187, 2, 10, 237, 201, 3, 4, 255, 255, 3, 5, 181, 48, 3, 6, 187, 0, 3, 10, 255, 255, 3, 11, 187, 0, 4, 4, 237, 255, 4, 5, 255, 34, 4, 10, 240, 253, 4, 11, 255, 0, 5, 4, 153, 255, 5, 5, 251, 207, 5, 9, 221, 255, 5, 10, 166, 235, 5, 11, 243, 71, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 6, 11, 255, 255, 6, 12, 255, 255, 7, 5, 255, 0, 7, 6, 255, 0, 7, 7, 255, 0, 7, 8, 255, 0, 7, 9, 255, 0, 7, 10, 255, 0, 7, 11, 255, 0, 7, 12, 255, 0, 7, 13, 255, 0], "secondary": false }, { "width": 6, "bonus": 90, "chr": "r", "pixels": [1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 5, 254, 239, 2, 6, 255, 119, 2, 7, 255, 51, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 4, 237, 255, 3, 5, 159, 82, 3, 6, 238, 0, 4, 5, 238, 0], "secondary": false }, { "width": 6, "bonus": 115, "chr": "s", "pixels": [1, 5, 255, 255, 1, 6, 255, 255, 1, 9, 153, 255, 1, 10, 181, 239, 2, 4, 255, 255, 2, 6, 255, 119, 2, 7, 255, 221, 2, 10, 255, 255, 2, 11, 170, 0, 3, 4, 255, 255, 3, 5, 255, 34, 3, 7, 245, 247, 3, 8, 235, 111, 3, 10, 255, 255, 3, 11, 255, 0, 4, 4, 153, 255, 4, 5, 255, 102, 4, 8, 255, 255, 4, 9, 255, 255, 4, 11, 255, 0, 5, 5, 153, 0, 5, 9, 255, 34, 5, 10, 255, 0], "secondary": false }, { "width": 5, "bonus": 115, "chr": "t", "pixels": [0, 4, 255, 255, 1, 2, 237, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 221, 255, 2, 3, 243, 71, 2, 4, 255, 255, 2, 5, 255, 68, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 255, 51, 2, 9, 255, 136, 2, 10, 250, 226, 3, 4, 230, 245, 3, 5, 255, 0, 3, 10, 255, 255, 3, 11, 221, 0, 4, 5, 221, 0, 4, 11, 255, 0], "secondary": false }, { "width": 9, "bonus": 160, "chr": "u", "pixels": [1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 237, 255, 2, 5, 255, 68, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 136, 2, 10, 253, 223, 3, 10, 255, 255, 3, 11, 221, 0, 4, 10, 221, 255, 4, 11, 255, 0, 5, 9, 221, 255, 5, 11, 221, 0, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 7, 5, 255, 68, 7, 6, 255, 68, 7, 7, 255, 68, 7, 8, 255, 68, 7, 9, 255, 68, 7, 10, 255, 51, 7, 11, 255, 0], "secondary": false }, { "width": 8, "bonus": 135, "chr": "v", "pixels": [1, 4, 237, 255, 2, 5, 250, 191, 2, 6, 255, 255, 2, 7, 210, 247, 3, 6, 196, 45, 3, 7, 255, 119, 3, 8, 248, 227, 3, 9, 255, 255, 3, 10, 175, 247, 4, 8, 200, 195, 4, 9, 255, 255, 4, 10, 254, 239, 4, 11, 170, 0, 5, 6, 221, 255, 5, 7, 255, 255, 5, 8, 186, 233, 5, 9, 187, 116, 5, 10, 255, 0, 5, 11, 238, 0, 6, 4, 255, 255, 6, 5, 210, 247, 6, 6, 174, 150, 6, 7, 223, 19, 6, 8, 255, 0, 6, 9, 170, 0, 7, 5, 255, 0, 7, 6, 204, 0], "secondary": false }, { "width": 12, "bonus": 235, "chr": "w", "pixels": [1, 4, 237, 255, 1, 5, 153, 255, 2, 5, 249, 174, 2, 6, 255, 255, 2, 7, 242, 251, 2, 8, 153, 255, 3, 6, 170, 0, 3, 7, 255, 68, 3, 8, 248, 157, 3, 9, 255, 255, 3, 10, 255, 255, 4, 8, 217, 239, 4, 9, 255, 255, 4, 10, 254, 171, 4, 11, 255, 0, 5, 5, 187, 255, 5, 6, 255, 255, 5, 7, 196, 243, 5, 8, 174, 150, 5, 9, 204, 0, 5, 10, 255, 0, 5, 11, 170, 0, 6, 5, 255, 255, 6, 6, 246, 229, 6, 7, 255, 119, 6, 8, 196, 45, 7, 6, 255, 102, 7, 7, 246, 194, 7, 8, 255, 255, 7, 9, 196, 243, 8, 8, 218, 139, 8, 9, 255, 255, 8, 10, 255, 255, 9, 6, 187, 255, 9, 7, 255, 255, 9, 8, 223, 253, 9, 9, 192, 181, 9, 10, 255, 51, 9, 11, 255, 0, 10, 4, 255, 255, 10, 5, 210, 247, 10, 6, 192, 181, 10, 7, 200, 65, 10, 8, 255, 0, 10, 9, 221, 0, 11, 5, 255, 0, 11, 6, 204, 0], "secondary": false }, { "width": 8, "bonus": 150, "chr": "x", "pixels": [1, 4, 153, 255, 1, 10, 221, 255, 2, 4, 203, 255, 2, 5, 248, 244, 2, 9, 255, 255, 2, 10, 166, 235, 2, 11, 221, 0, 3, 5, 225, 116, 3, 6, 253, 240, 3, 7, 242, 251, 3, 8, 221, 255, 3, 10, 255, 0, 3, 11, 153, 0, 4, 6, 244, 248, 4, 7, 253, 240, 4, 8, 253, 223, 4, 9, 227, 57, 5, 4, 203, 255, 5, 5, 237, 255, 5, 7, 238, 0, 5, 8, 246, 123, 5, 9, 255, 255, 5, 10, 173, 226, 6, 4, 153, 255, 6, 5, 207, 21, 6, 6, 238, 0, 6, 10, 255, 221, 6, 11, 153, 0, 7, 5, 153, 0, 7, 11, 221, 0], "secondary": false }, { "width": 9, "bonus": 170, "chr": "y", "pixels": [1, 4, 237, 255, 1, 13, 203, 255, 2, 5, 253, 223, 2, 6, 255, 255, 2, 7, 175, 247, 2, 13, 255, 255, 3, 6, 227, 57, 3, 7, 255, 153, 3, 8, 249, 243, 3, 9, 243, 249, 3, 12, 237, 255, 3, 13, 160, 244, 4, 8, 194, 135, 4, 9, 255, 255, 4, 10, 255, 255, 4, 11, 223, 214, 4, 12, 175, 124, 4, 13, 238, 0, 5, 6, 169, 255, 5, 7, 255, 255, 5, 8, 223, 253, 5, 9, 173, 175, 5, 10, 255, 34, 5, 11, 255, 0, 5, 12, 187, 0, 6, 4, 237, 255, 6, 5, 255, 255, 6, 6, 192, 225, 6, 7, 193, 90, 6, 8, 255, 0, 6, 9, 221, 0, 7, 5, 239, 18, 7, 6, 255, 0, 7, 7, 170, 0], "secondary": false }, { "width": 8, "bonus": 185, "chr": "z", "pixels": [1, 4, 255, 255, 1, 10, 255, 255, 2, 4, 255, 255, 2, 5, 255, 51, 2, 8, 187, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 255, 0, 3, 4, 255, 255, 3, 5, 255, 51, 3, 7, 221, 255, 3, 8, 191, 250, 3, 9, 205, 85, 3, 10, 255, 255, 3, 11, 255, 0, 4, 4, 255, 255, 4, 5, 255, 136, 4, 6, 241, 252, 4, 7, 166, 235, 4, 8, 221, 0, 4, 9, 200, 65, 4, 10, 255, 255, 4, 11, 255, 0, 5, 4, 255, 255, 5, 5, 255, 255, 5, 6, 191, 159, 5, 7, 238, 0, 5, 8, 153, 0, 5, 10, 255, 255, 5, 11, 255, 0, 6, 4, 237, 255, 6, 5, 255, 68, 6, 6, 255, 0, 6, 10, 255, 255, 6, 11, 255, 0, 7, 5, 238, 0, 7, 11, 255, 0], "secondary": false }, { "width": 10, "bonus": 235, "chr": "A", "pixels": [1, 9, 153, 255, 1, 10, 237, 255, 2, 7, 221, 255, 2, 8, 255, 255, 2, 9, 214, 243, 2, 10, 194, 135, 2, 11, 238, 0, 3, 4, 203, 255, 3, 5, 255, 255, 3, 6, 210, 247, 3, 7, 255, 255, 3, 8, 230, 75, 3, 9, 255, 0, 3, 10, 204, 0, 4, 1, 187, 255, 4, 2, 255, 255, 4, 3, 207, 251, 4, 4, 182, 167, 4, 5, 211, 41, 4, 6, 255, 0, 4, 7, 255, 255, 4, 8, 255, 68, 5, 1, 237, 255, 5, 2, 255, 255, 5, 3, 255, 187, 5, 4, 225, 116, 5, 7, 255, 255, 5, 8, 255, 68, 6, 2, 241, 54, 6, 3, 255, 153, 6, 4, 250, 243, 6, 5, 255, 255, 6, 6, 191, 250, 6, 7, 255, 255, 6, 8, 255, 68, 7, 4, 153, 0, 7, 5, 243, 71, 7, 6, 255, 153, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 192, 225, 8, 7, 153, 0, 8, 8, 255, 85, 8, 9, 255, 187, 8, 10, 255, 255, 9, 10, 187, 0, 9, 11, 255, 0], "secondary": false }, { "width": 9, "bonus": 290, "chr": "B", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 1, 255, 255, 2, 2, 255, 119, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 119, 2, 6, 255, 255, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 119, 2, 10, 255, 255, 2, 11, 255, 0, 3, 1, 255, 255, 3, 2, 255, 68, 3, 6, 255, 255, 3, 7, 255, 0, 3, 10, 255, 255, 3, 11, 255, 0, 4, 1, 255, 255, 4, 2, 255, 68, 4, 6, 255, 255, 4, 7, 255, 0, 4, 10, 255, 255, 4, 11, 255, 0, 5, 1, 221, 255, 5, 2, 255, 153, 5, 5, 169, 255, 5, 6, 255, 255, 5, 7, 255, 119, 5, 9, 153, 255, 5, 10, 217, 239, 5, 11, 255, 0, 6, 2, 252, 241, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 207, 251, 6, 6, 193, 90, 6, 7, 254, 239, 6, 8, 255, 255, 6, 9, 237, 255, 6, 10, 173, 75, 6, 11, 204, 0, 7, 3, 241, 54, 7, 4, 255, 34, 7, 5, 255, 0, 7, 6, 204, 0, 7, 8, 243, 71, 7, 9, 255, 0, 7, 10, 238, 0], "secondary": false }, { "width": 10, "bonus": 200, "chr": "C", "pixels": [1, 3, 153, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 241, 252, 2, 2, 203, 255, 2, 3, 207, 251, 2, 4, 180, 96, 2, 5, 255, 0, 2, 6, 255, 17, 2, 7, 255, 85, 2, 8, 251, 207, 2, 9, 231, 225, 3, 2, 187, 255, 3, 3, 204, 0, 3, 4, 204, 0, 3, 9, 244, 213, 3, 10, 231, 150, 4, 1, 221, 255, 4, 2, 168, 103, 4, 3, 187, 0, 4, 10, 248, 227, 5, 1, 255, 255, 5, 2, 221, 0, 5, 10, 255, 255, 5, 11, 221, 0, 6, 1, 237, 255, 6, 2, 255, 51, 6, 10, 237, 255, 6, 11, 255, 0, 7, 1, 187, 255, 7, 2, 247, 141, 7, 10, 200, 238, 7, 11, 238, 0, 8, 2, 246, 229, 8, 9, 255, 255, 8, 10, 159, 82, 8, 11, 187, 0, 9, 3, 221, 0, 9, 10, 255, 0], "secondary": false }, { "width": 10, "bonus": 290, "chr": "D", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 1, 255, 255, 2, 2, 255, 119, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 119, 2, 10, 255, 255, 2, 11, 255, 0, 3, 1, 255, 255, 3, 2, 255, 68, 3, 10, 255, 255, 3, 11, 255, 0, 4, 1, 255, 255, 4, 2, 255, 68, 4, 10, 255, 255, 4, 11, 255, 0, 5, 1, 237, 255, 5, 2, 255, 85, 5, 10, 242, 251, 5, 11, 255, 0, 6, 1, 153, 255, 6, 2, 251, 207, 6, 9, 203, 255, 6, 10, 187, 209, 6, 11, 238, 0, 7, 2, 241, 234, 7, 3, 244, 213, 7, 8, 203, 255, 7, 9, 221, 255, 7, 10, 207, 21, 7, 11, 153, 0, 8, 3, 243, 178, 8, 4, 255, 255, 8, 5, 255, 255, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 192, 225, 8, 9, 207, 21, 8, 10, 221, 0, 9, 4, 170, 0, 9, 5, 255, 51, 9, 6, 255, 51, 9, 7, 255, 0, 9, 8, 255, 0, 9, 9, 170, 0], "secondary": false }, { "width": 8, "bonus": 200, "chr": "E", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 1, 255, 255, 2, 2, 255, 119, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 119, 2, 6, 255, 255, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 119, 2, 10, 255, 255, 2, 11, 255, 0, 3, 1, 255, 255, 3, 2, 255, 68, 3, 6, 255, 255, 3, 7, 255, 0, 3, 10, 255, 255, 3, 11, 255, 0, 4, 1, 255, 255, 4, 2, 255, 68, 4, 6, 255, 255, 4, 7, 255, 0, 4, 10, 255, 255, 4, 11, 255, 0, 5, 1, 255, 255, 5, 2, 255, 68, 5, 7, 255, 0, 5, 10, 255, 255, 5, 11, 255, 0, 6, 2, 255, 0, 6, 11, 255, 0], "secondary": false }, { "width": 7, "bonus": 165, "chr": "F", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 1, 255, 255, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 255, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 6, 255, 255, 3, 7, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 6, 255, 255, 4, 7, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 7, 255, 0, 6, 2, 255, 0], "secondary": false }, { "width": 10, "bonus": 260, "chr": "G", "pixels": [1, 3, 153, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 153, 255, 2, 2, 203, 255, 2, 3, 191, 250, 2, 4, 180, 96, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 68, 2, 8, 254, 204, 2, 9, 241, 234, 3, 1, 153, 255, 3, 2, 191, 250, 3, 3, 204, 0, 3, 4, 187, 0, 3, 9, 241, 198, 3, 10, 243, 178, 4, 1, 255, 255, 4, 2, 180, 96, 4, 3, 187, 0, 4, 10, 255, 255, 4, 11, 170, 0, 5, 1, 255, 255, 5, 2, 255, 68, 5, 10, 255, 255, 5, 11, 255, 0, 6, 1, 237, 255, 6, 2, 255, 85, 6, 6, 169, 255, 6, 10, 217, 239, 6, 11, 255, 0, 7, 2, 251, 207, 7, 6, 255, 255, 7, 7, 209, 145, 7, 9, 237, 255, 7, 10, 182, 167, 7, 11, 204, 0, 8, 2, 175, 124, 8, 3, 204, 0, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 255, 255, 8, 9, 255, 255, 8, 10, 255, 255, 9, 7, 255, 0, 9, 8, 255, 0, 9, 9, 255, 0, 9, 10, 255, 0, 9, 11, 255, 0], "secondary": false }, { "width": 9, "bonus": 240, "chr": "H", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 119, 2, 6, 255, 255, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 6, 255, 255, 3, 7, 255, 0, 4, 6, 255, 255, 4, 7, 255, 0, 5, 6, 255, 255, 5, 7, 255, 0, 6, 6, 255, 255, 6, 7, 255, 0, 7, 1, 255, 255, 7, 2, 255, 255, 7, 3, 255, 255, 7, 4, 255, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 8, 2, 255, 68, 8, 3, 255, 68, 8, 4, 255, 68, 8, 5, 255, 68, 8, 6, 255, 68, 8, 7, 255, 68, 8, 8, 255, 68, 8, 9, 255, 68, 8, 10, 255, 51, 8, 11, 255, 0], "secondary": false }, { "width": 5, "bonus": 130, "chr": "I", "pixels": [1, 1, 255, 255, 1, 10, 255, 255, 2, 1, 255, 255, 2, 2, 255, 255, 2, 3, 255, 255, 2, 4, 255, 255, 2, 5, 255, 255, 2, 6, 255, 255, 2, 7, 255, 255, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 3, 255, 0, 3, 4, 255, 0, 3, 5, 255, 0, 3, 6, 255, 0, 3, 7, 255, 0, 3, 8, 255, 0, 3, 9, 255, 0, 3, 10, 255, 255, 3, 11, 255, 0, 4, 2, 255, 0, 4, 11, 255, 0], "secondary": false }, { "width": 8, "bonus": 180, "chr": "J", "pixels": [1, 8, 255, 255, 1, 9, 187, 255, 2, 9, 255, 187, 2, 10, 237, 201, 3, 1, 221, 255, 3, 10, 255, 255, 3, 11, 187, 0, 4, 1, 255, 255, 4, 2, 221, 0, 4, 10, 255, 255, 4, 11, 255, 0, 5, 1, 255, 255, 5, 2, 255, 68, 5, 9, 187, 255, 5, 10, 196, 243, 5, 11, 255, 0, 6, 1, 255, 255, 6, 2, 255, 255, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 205, 233, 6, 10, 191, 23, 6, 11, 187, 0, 7, 2, 255, 0, 7, 3, 255, 0, 7, 4, 255, 0, 7, 5, 255, 0, 7, 6, 255, 0, 7, 7, 255, 0, 7, 8, 255, 0, 7, 9, 255, 0, 7, 10, 187, 0], "secondary": false }, { "width": 9, "bonus": 225, "chr": "K", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 255, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 6, 255, 255, 3, 7, 255, 51, 4, 4, 187, 255, 4, 5, 255, 255, 4, 6, 192, 225, 4, 7, 255, 255, 4, 8, 160, 217, 5, 2, 187, 255, 5, 3, 255, 255, 5, 4, 168, 207, 5, 5, 191, 23, 5, 6, 255, 0, 5, 7, 193, 90, 5, 8, 255, 221, 5, 9, 231, 225, 6, 1, 255, 255, 6, 2, 180, 217, 6, 3, 196, 45, 6, 4, 255, 0, 6, 9, 241, 162, 6, 10, 255, 255, 7, 2, 255, 0, 7, 3, 153, 0, 7, 10, 180, 96, 7, 11, 255, 0], "secondary": false }, { "width": 8, "bonus": 145, "chr": "L", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 119, 2, 10, 255, 255, 2, 11, 255, 0, 3, 10, 255, 255, 3, 11, 255, 0, 4, 10, 255, 255, 4, 11, 255, 0, 5, 10, 255, 255, 5, 11, 255, 0, 6, 10, 192, 225, 6, 11, 255, 0, 7, 11, 170, 0], "secondary": false }, { "width": 11, "bonus": 315, "chr": "M", "pixels": [1, 3, 169, 255, 1, 4, 169, 255, 1, 5, 203, 255, 1, 6, 221, 255, 1, 7, 237, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 1, 255, 255, 2, 2, 255, 255, 2, 3, 255, 255, 2, 4, 226, 192, 2, 5, 209, 145, 2, 6, 225, 116, 2, 7, 232, 93, 2, 8, 243, 71, 2, 9, 255, 68, 2, 10, 255, 17, 2, 11, 255, 0, 3, 2, 255, 102, 3, 3, 254, 204, 3, 4, 255, 255, 3, 5, 226, 192, 3, 6, 155, 112, 4, 4, 211, 41, 4, 5, 255, 153, 4, 6, 255, 255, 4, 7, 230, 245, 5, 6, 167, 52, 5, 7, 255, 221, 5, 8, 255, 255, 6, 5, 187, 255, 6, 6, 255, 255, 6, 7, 196, 243, 6, 8, 230, 75, 6, 9, 255, 0, 7, 3, 221, 255, 7, 4, 237, 255, 7, 5, 176, 197, 7, 6, 196, 45, 7, 7, 255, 0, 7, 8, 187, 0, 8, 1, 255, 255, 8, 2, 255, 255, 8, 3, 255, 255, 8, 4, 246, 194, 8, 5, 248, 157, 8, 6, 200, 174, 9, 2, 255, 119, 9, 3, 255, 136, 9, 4, 255, 136, 9, 5, 232, 187, 9, 6, 228, 209, 9, 7, 231, 225, 9, 8, 237, 238, 9, 9, 244, 248, 9, 10, 255, 255, 10, 6, 170, 0, 10, 7, 187, 0, 10, 8, 204, 0, 10, 9, 221, 0, 10, 10, 238, 0, 10, 11, 255, 0], "secondary": false }, { "width": 10, "bonus": 260, "chr": "N", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 2, 254, 239, 2, 3, 255, 221, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 3, 249, 174, 3, 4, 255, 255, 3, 5, 155, 196, 4, 4, 193, 90, 4, 5, 255, 221, 4, 6, 227, 229, 5, 6, 239, 145, 5, 7, 255, 255, 5, 8, 160, 217, 6, 7, 159, 82, 6, 8, 254, 204, 6, 9, 239, 236, 7, 1, 255, 255, 7, 2, 255, 255, 7, 3, 255, 255, 7, 4, 255, 255, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 255, 255, 7, 10, 255, 255, 8, 2, 255, 68, 8, 3, 255, 68, 8, 4, 255, 68, 8, 5, 255, 68, 8, 6, 255, 68, 8, 7, 255, 68, 8, 8, 255, 68, 8, 9, 255, 68, 8, 10, 255, 51, 8, 11, 255, 0], "secondary": false }, { "width": 11, "bonus": 250, "chr": "O", "pixels": [1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 241, 252, 2, 2, 203, 255, 2, 3, 207, 251, 2, 4, 168, 103, 2, 5, 255, 0, 2, 6, 255, 17, 2, 7, 255, 85, 2, 8, 251, 207, 2, 9, 231, 225, 3, 2, 191, 250, 3, 3, 204, 0, 3, 4, 204, 0, 3, 9, 241, 198, 3, 10, 231, 150, 4, 1, 221, 255, 4, 2, 168, 103, 4, 3, 187, 0, 4, 10, 246, 229, 5, 1, 255, 255, 5, 2, 221, 0, 5, 10, 255, 255, 5, 11, 221, 0, 6, 1, 221, 255, 6, 2, 255, 68, 6, 10, 221, 255, 6, 11, 255, 0, 7, 2, 248, 209, 7, 9, 221, 255, 7, 10, 155, 196, 7, 11, 221, 0, 8, 2, 219, 218, 8, 3, 248, 227, 8, 8, 221, 255, 8, 9, 175, 247, 8, 10, 221, 0, 9, 3, 218, 139, 9, 4, 250, 226, 9, 5, 255, 255, 9, 6, 255, 255, 9, 7, 214, 243, 9, 8, 174, 150, 9, 9, 221, 0, 9, 10, 170, 0, 10, 5, 221, 0, 10, 6, 255, 0, 10, 7, 255, 0, 10, 8, 204, 0], "secondary": false }, { "width": 9, "bonus": 230, "chr": "P", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 1, 255, 255, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 68, 2, 7, 255, 255, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 7, 255, 255, 3, 8, 255, 0, 4, 1, 255, 255, 4, 2, 255, 34, 4, 7, 255, 255, 4, 8, 255, 0, 5, 1, 187, 255, 5, 2, 255, 187, 5, 6, 187, 255, 5, 7, 191, 250, 5, 8, 255, 0, 6, 2, 237, 201, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 200, 238, 6, 7, 191, 23, 6, 8, 187, 0, 7, 3, 191, 23, 7, 4, 255, 68, 7, 5, 255, 17, 7, 6, 255, 0, 7, 7, 187, 0], "secondary": false }, { "width": 11, "bonus": 260, "chr": "Q", "pixels": [1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 241, 252, 2, 2, 203, 255, 2, 3, 207, 251, 2, 4, 168, 103, 2, 5, 255, 0, 2, 6, 255, 17, 2, 7, 255, 85, 2, 8, 251, 207, 2, 9, 231, 225, 3, 2, 191, 250, 3, 3, 204, 0, 3, 4, 204, 0, 3, 9, 241, 198, 3, 10, 231, 150, 4, 1, 237, 255, 4, 2, 159, 82, 4, 3, 187, 0, 4, 10, 250, 243, 5, 1, 255, 255, 5, 2, 238, 0, 5, 10, 255, 255, 5, 11, 238, 0, 6, 1, 221, 255, 6, 2, 255, 68, 6, 10, 223, 253, 6, 11, 255, 0, 7, 2, 248, 209, 7, 8, 241, 252, 7, 9, 228, 247, 7, 10, 168, 207, 7, 11, 221, 0, 8, 2, 219, 218, 8, 3, 248, 227, 8, 8, 244, 248, 8, 9, 255, 255, 8, 10, 230, 75, 9, 3, 218, 139, 9, 4, 250, 226, 9, 5, 255, 255, 9, 6, 255, 255, 9, 7, 214, 243, 9, 8, 182, 167, 9, 9, 243, 71, 9, 10, 255, 187, 10, 5, 221, 0, 10, 6, 255, 0, 10, 7, 255, 0, 10, 8, 204, 0, 10, 11, 187, 0], "secondary": false }, { "width": 9, "bonus": 250, "chr": "R", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 2, 1, 255, 255, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 255, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 51, 2, 11, 255, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 6, 255, 255, 3, 7, 255, 0, 4, 1, 255, 255, 4, 2, 255, 17, 4, 6, 255, 255, 4, 7, 255, 119, 5, 1, 203, 255, 5, 2, 255, 153, 5, 5, 153, 255, 5, 6, 223, 253, 5, 7, 254, 239, 5, 8, 245, 247, 6, 2, 248, 227, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 223, 253, 6, 6, 167, 52, 6, 7, 221, 0, 6, 8, 246, 123, 6, 9, 253, 240, 6, 10, 235, 240, 7, 3, 227, 57, 7, 4, 255, 34, 7, 5, 255, 0, 7, 6, 221, 0, 7, 10, 246, 123, 7, 11, 221, 0], "secondary": false }, { "width": 7, "bonus": 165, "chr": "S", "pixels": [1, 2, 221, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 9, 237, 255, 2, 1, 203, 255, 2, 2, 173, 226, 2, 3, 221, 0, 2, 4, 255, 102, 2, 5, 255, 255, 2, 10, 253, 240, 3, 1, 255, 255, 3, 2, 218, 80, 3, 3, 153, 0, 3, 5, 214, 223, 3, 6, 255, 153, 3, 10, 255, 255, 3, 11, 238, 0, 4, 1, 237, 255, 4, 2, 255, 85, 4, 6, 255, 255, 4, 7, 187, 116, 4, 10, 230, 245, 4, 11, 255, 0, 5, 2, 249, 174, 5, 7, 255, 255, 5, 8, 255, 255, 5, 9, 237, 255, 5, 10, 159, 82, 5, 11, 221, 0, 6, 3, 170, 0, 6, 8, 255, 51, 6, 9, 255, 0, 6, 10, 238, 0], "secondary": false }, { "width": 10, "bonus": 155, "chr": "T", "pixels": [1, 1, 255, 255, 2, 1, 255, 255, 2, 2, 255, 0, 3, 1, 255, 255, 3, 2, 255, 68, 4, 1, 255, 255, 4, 2, 255, 255, 4, 3, 255, 255, 4, 4, 255, 255, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 255, 255, 4, 8, 255, 255, 4, 9, 255, 255, 4, 10, 255, 255, 5, 1, 255, 255, 5, 2, 255, 0, 5, 3, 255, 0, 5, 4, 255, 0, 5, 5, 255, 0, 5, 6, 255, 0, 5, 7, 255, 0, 5, 8, 255, 0, 5, 9, 255, 0, 5, 10, 255, 0, 5, 11, 255, 0, 6, 1, 255, 255, 6, 2, 255, 0, 7, 1, 255, 255, 7, 2, 255, 0, 8, 2, 255, 0], "secondary": false }, { "width": 10, "bonus": 230, "chr": "U", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 237, 255, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 255, 102, 2, 9, 253, 240, 2, 10, 153, 141, 3, 9, 163, 160, 3, 10, 251, 207, 4, 10, 255, 255, 4, 11, 204, 0, 5, 10, 255, 255, 5, 11, 255, 0, 6, 10, 207, 251, 6, 11, 255, 0, 7, 9, 237, 255, 7, 10, 153, 141, 7, 11, 204, 0, 8, 1, 255, 255, 8, 2, 255, 255, 8, 3, 255, 255, 8, 4, 255, 255, 8, 5, 255, 255, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 230, 245, 8, 9, 163, 160, 8, 10, 238, 0, 9, 2, 255, 0, 9, 3, 255, 0, 9, 4, 255, 0, 9, 5, 255, 0, 9, 6, 255, 0, 9, 7, 255, 0, 9, 8, 255, 0, 9, 9, 221, 0], "secondary": false }, { "width": 10, "bonus": 200, "chr": "V", "pixels": [1, 1, 237, 255, 1, 2, 153, 255, 2, 2, 250, 191, 2, 3, 255, 255, 2, 4, 228, 247, 3, 3, 191, 23, 3, 4, 255, 102, 3, 5, 246, 194, 3, 6, 255, 255, 3, 7, 210, 247, 4, 6, 196, 45, 4, 7, 255, 119, 4, 8, 244, 213, 4, 9, 255, 255, 4, 10, 210, 247, 5, 8, 227, 229, 5, 9, 255, 255, 5, 10, 254, 204, 5, 11, 204, 0, 6, 5, 187, 255, 6, 6, 255, 255, 6, 7, 210, 247, 6, 8, 182, 167, 6, 9, 211, 41, 6, 10, 255, 0, 6, 11, 204, 0, 7, 2, 187, 255, 7, 3, 255, 255, 7, 4, 223, 253, 7, 5, 184, 189, 7, 6, 196, 45, 7, 7, 255, 0, 7, 8, 204, 0, 8, 1, 237, 255, 8, 2, 194, 201, 8, 3, 200, 65, 8, 4, 255, 0, 8, 5, 221, 0, 9, 2, 238, 0, 9, 3, 153, 0], "secondary": false }, { "width": 13, "bonus": 350, "chr": "W", "pixels": [1, 1, 255, 255, 1, 2, 187, 255, 2, 2, 255, 136, 2, 3, 237, 201, 2, 4, 255, 255, 2, 5, 255, 255, 2, 6, 203, 255, 3, 4, 187, 0, 3, 5, 255, 51, 3, 6, 255, 119, 3, 7, 237, 183, 3, 8, 239, 236, 3, 9, 255, 255, 3, 10, 223, 253, 4, 7, 209, 207, 4, 8, 249, 243, 4, 9, 255, 255, 4, 10, 255, 187, 4, 11, 221, 0, 5, 3, 187, 255, 5, 4, 255, 255, 5, 5, 255, 255, 5, 6, 200, 238, 5, 7, 182, 167, 5, 8, 193, 90, 5, 9, 238, 0, 5, 10, 255, 0, 5, 11, 187, 0, 6, 1, 255, 255, 6, 2, 255, 255, 6, 3, 255, 255, 6, 4, 218, 139, 6, 5, 255, 0, 6, 6, 255, 0, 6, 7, 187, 0, 7, 2, 255, 102, 7, 3, 254, 171, 7, 4, 254, 239, 7, 5, 255, 255, 7, 6, 203, 255, 8, 4, 170, 0, 8, 5, 240, 36, 8, 6, 255, 102, 8, 7, 234, 167, 8, 8, 239, 236, 8, 9, 255, 255, 8, 10, 207, 251, 9, 7, 214, 223, 9, 8, 255, 255, 9, 9, 255, 255, 9, 10, 254, 204, 9, 11, 204, 0, 10, 3, 203, 255, 10, 4, 255, 255, 10, 5, 255, 255, 10, 6, 205, 233, 10, 7, 182, 167, 10, 8, 205, 85, 10, 9, 255, 0, 10, 10, 255, 0, 10, 11, 204, 0, 11, 1, 255, 255, 11, 2, 210, 227, 11, 3, 191, 159, 11, 4, 214, 61, 11, 5, 255, 0, 11, 6, 255, 0, 11, 7, 187, 0, 12, 2, 255, 0, 12, 3, 187, 0], "secondary": false }, { "width": 9, "bonus": 215, "chr": "X", "pixels": [1, 1, 221, 255, 1, 10, 255, 255, 2, 1, 153, 255, 2, 2, 255, 255, 2, 3, 205, 233, 2, 8, 237, 255, 2, 9, 223, 253, 2, 10, 168, 103, 2, 11, 255, 0, 3, 2, 167, 52, 3, 3, 254, 171, 3, 4, 255, 255, 3, 5, 166, 235, 3, 6, 203, 255, 3, 7, 237, 255, 3, 8, 173, 175, 3, 9, 238, 0, 3, 10, 221, 0, 4, 4, 232, 205, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 218, 80, 4, 8, 238, 0, 5, 3, 237, 255, 5, 4, 221, 255, 5, 5, 209, 104, 5, 6, 255, 136, 5, 7, 255, 255, 5, 8, 192, 225, 6, 1, 221, 255, 6, 2, 237, 255, 6, 3, 173, 175, 6, 4, 238, 0, 6, 5, 221, 0, 6, 8, 255, 187, 6, 9, 255, 255, 7, 1, 153, 255, 7, 2, 223, 19, 7, 3, 238, 0, 7, 9, 205, 85, 7, 10, 255, 221, 8, 2, 153, 0, 8, 11, 221, 0], "secondary": false }, { "width": 9, "bonus": 155, "chr": "Y", "pixels": [1, 1, 237, 255, 2, 2, 253, 240, 2, 3, 220, 236, 3, 3, 247, 141, 3, 4, 255, 255, 3, 5, 205, 233, 4, 4, 159, 82, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 255, 255, 4, 8, 255, 255, 4, 9, 255, 255, 4, 10, 255, 255, 5, 4, 237, 255, 5, 5, 214, 243, 5, 6, 255, 85, 5, 7, 255, 68, 5, 8, 255, 68, 5, 9, 255, 68, 5, 10, 255, 51, 5, 11, 255, 0, 6, 2, 221, 255, 6, 3, 237, 255, 6, 4, 174, 150, 6, 5, 238, 0, 6, 6, 204, 0, 7, 1, 255, 255, 7, 2, 164, 185, 7, 3, 221, 0, 7, 4, 238, 0, 8, 2, 255, 0], "secondary": false }, { "width": 9, "bonus": 230, "chr": "Z", "pixels": [1, 10, 169, 255, 2, 1, 255, 255, 2, 8, 153, 255, 2, 9, 255, 255, 2, 10, 255, 255, 2, 11, 170, 0, 3, 1, 255, 255, 3, 2, 255, 0, 3, 7, 237, 255, 3, 8, 223, 253, 3, 9, 173, 75, 3, 10, 255, 255, 3, 11, 255, 0, 4, 1, 255, 255, 4, 2, 255, 0, 4, 5, 187, 255, 4, 6, 255, 255, 4, 7, 164, 185, 4, 8, 238, 0, 4, 9, 221, 0, 4, 10, 255, 255, 4, 11, 255, 0, 5, 1, 255, 255, 5, 2, 255, 0, 5, 4, 255, 255, 5, 5, 196, 243, 5, 6, 191, 23, 5, 7, 255, 0, 5, 10, 255, 255, 5, 11, 255, 0, 6, 1, 255, 255, 6, 2, 254, 204, 6, 3, 221, 255, 6, 4, 155, 112, 6, 5, 255, 0, 6, 6, 187, 0, 6, 10, 255, 255, 6, 11, 255, 0, 7, 1, 255, 255, 7, 2, 255, 136, 7, 3, 204, 0, 7, 4, 221, 0, 7, 10, 255, 255, 7, 11, 255, 0, 8, 2, 255, 0, 8, 11, 255, 0], "secondary": false }, { "width": 9, "bonus": 230, "chr": "0", "pixels": [1, 3, 187, 255, 1, 4, 237, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 237, 255, 1, 8, 187, 255, 2, 2, 255, 255, 2, 3, 168, 207, 2, 4, 205, 85, 2, 5, 243, 71, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 247, 141, 2, 9, 255, 255, 3, 1, 237, 255, 3, 2, 163, 160, 3, 3, 255, 0, 3, 9, 184, 142, 3, 10, 254, 239, 4, 1, 255, 255, 4, 2, 243, 71, 4, 10, 255, 255, 4, 11, 238, 0, 5, 1, 237, 255, 5, 2, 255, 102, 5, 10, 242, 251, 5, 11, 255, 0, 6, 2, 255, 255, 6, 3, 184, 189, 6, 9, 255, 255, 6, 10, 163, 160, 6, 11, 238, 0, 7, 3, 255, 187, 7, 4, 247, 245, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 242, 251, 7, 8, 210, 227, 7, 9, 168, 103, 7, 10, 255, 0, 8, 4, 187, 0, 8, 5, 238, 0, 8, 6, 255, 0, 8, 7, 255, 0, 8, 8, 238, 0, 8, 9, 187, 0], "secondary": false }, { "width": 7, "bonus": 150, "chr": "1", "pixels": [1, 3, 203, 255, 1, 10, 255, 255, 2, 2, 237, 255, 2, 4, 204, 0, 2, 10, 255, 255, 2, 11, 255, 0, 3, 1, 255, 255, 3, 2, 255, 255, 3, 3, 255, 255, 3, 4, 255, 255, 3, 5, 255, 255, 3, 6, 255, 255, 3, 7, 255, 255, 3, 8, 255, 255, 3, 9, 255, 255, 3, 10, 255, 255, 3, 11, 255, 0, 4, 2, 255, 68, 4, 3, 255, 68, 4, 4, 255, 68, 4, 5, 255, 68, 4, 6, 255, 68, 4, 7, 255, 68, 4, 8, 255, 68, 4, 9, 255, 119, 4, 10, 255, 255, 4, 11, 255, 0, 5, 10, 255, 255, 5, 11, 255, 0, 6, 11, 255, 0], "secondary": false }, { "width": 8, "bonus": 200, "chr": "2", "pixels": [2, 2, 255, 255, 2, 8, 203, 255, 2, 9, 255, 255, 2, 10, 255, 255, 3, 1, 203, 255, 3, 3, 255, 0, 3, 7, 221, 255, 3, 8, 181, 239, 3, 9, 218, 80, 3, 10, 255, 255, 3, 11, 255, 0, 4, 1, 255, 255, 4, 2, 218, 80, 4, 6, 203, 255, 4, 7, 175, 247, 4, 8, 221, 0, 4, 9, 193, 90, 4, 10, 255, 255, 4, 11, 255, 0, 5, 1, 221, 255, 5, 2, 255, 153, 5, 5, 187, 255, 5, 6, 203, 255, 5, 7, 204, 0, 5, 8, 170, 0, 5, 10, 255, 255, 5, 11, 255, 0, 6, 2, 250, 226, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 181, 239, 6, 6, 191, 23, 6, 7, 204, 0, 6, 10, 255, 255, 6, 11, 255, 0, 7, 3, 227, 57, 7, 4, 255, 17, 7, 5, 255, 0, 7, 6, 170, 0, 7, 11, 255, 0], "secondary": false }, { "width": 8, "bonus": 205, "chr": "3", "pixels": [1, 9, 169, 255, 2, 1, 255, 255, 2, 9, 191, 250, 2, 10, 226, 192, 3, 1, 255, 255, 3, 2, 255, 68, 3, 5, 255, 255, 3, 10, 255, 255, 3, 11, 170, 0, 4, 1, 255, 255, 4, 2, 255, 85, 4, 3, 192, 225, 4, 4, 221, 255, 4, 5, 244, 248, 4, 6, 255, 68, 4, 10, 255, 255, 4, 11, 255, 0, 5, 1, 255, 255, 5, 2, 254, 239, 5, 3, 210, 227, 5, 4, 175, 25, 5, 5, 243, 178, 5, 6, 250, 191, 5, 9, 187, 255, 5, 10, 186, 233, 5, 11, 255, 0, 6, 1, 255, 255, 6, 2, 255, 119, 6, 3, 238, 0, 6, 4, 187, 0, 6, 6, 232, 205, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 196, 243, 6, 10, 191, 23, 6, 11, 170, 0, 7, 2, 255, 0, 7, 7, 196, 45, 7, 8, 255, 34, 7, 9, 255, 0, 7, 10, 187, 0], "secondary": false }, { "width": 9, "bonus": 205, "chr": "4", "pixels": [1, 6, 187, 255, 1, 7, 255, 255, 2, 5, 221, 255, 2, 6, 160, 244, 2, 7, 255, 255, 2, 8, 255, 51, 3, 4, 237, 255, 3, 6, 221, 0, 3, 7, 255, 255, 3, 8, 255, 51, 4, 3, 237, 255, 4, 5, 238, 0, 4, 7, 255, 255, 4, 8, 255, 51, 5, 1, 169, 255, 5, 2, 255, 255, 5, 3, 182, 167, 5, 4, 245, 107, 5, 7, 255, 255, 5, 8, 255, 136, 6, 1, 255, 255, 6, 2, 255, 255, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 255, 255, 6, 10, 255, 255, 7, 2, 255, 0, 7, 3, 255, 0, 7, 4, 255, 0, 7, 5, 255, 0, 7, 6, 255, 0, 7, 7, 255, 255, 7, 8, 255, 51, 7, 9, 255, 0, 7, 10, 255, 0, 7, 11, 255, 0, 8, 8, 255, 17], "secondary": false }, { "width": 8, "bonus": 215, "chr": "5", "pixels": [1, 9, 153, 255, 2, 1, 255, 255, 2, 2, 255, 255, 2, 3, 255, 255, 2, 4, 230, 245, 2, 5, 255, 255, 2, 6, 174, 150, 2, 9, 153, 255, 2, 10, 228, 209, 3, 1, 255, 255, 3, 2, 255, 68, 3, 3, 255, 0, 3, 4, 255, 34, 3, 5, 255, 255, 3, 6, 255, 17, 3, 10, 255, 255, 3, 11, 187, 0, 4, 1, 255, 255, 4, 2, 255, 68, 4, 5, 255, 255, 4, 6, 255, 34, 4, 10, 255, 255, 4, 11, 255, 0, 5, 1, 255, 255, 5, 2, 255, 68, 5, 5, 196, 243, 5, 6, 255, 187, 5, 9, 187, 255, 5, 10, 192, 225, 5, 11, 255, 0, 6, 1, 169, 255, 6, 2, 255, 34, 6, 6, 237, 201, 6, 7, 255, 255, 6, 8, 255, 255, 6, 9, 196, 243, 6, 10, 191, 23, 6, 11, 170, 0, 7, 2, 170, 0, 7, 7, 196, 45, 7, 8, 255, 34, 7, 9, 255, 0, 7, 10, 187, 0], "secondary": false }, { "width": 9, "bonus": 260, "chr": "6", "pixels": [1, 4, 187, 255, 1, 5, 237, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 187, 255, 2, 2, 153, 255, 2, 3, 255, 255, 2, 4, 192, 225, 2, 5, 241, 215, 2, 6, 251, 207, 2, 7, 255, 85, 2, 8, 254, 171, 2, 9, 255, 255, 3, 2, 237, 255, 3, 3, 173, 75, 3, 4, 255, 0, 3, 5, 249, 243, 3, 6, 214, 61, 3, 7, 204, 0, 3, 9, 216, 161, 3, 10, 255, 221, 4, 1, 237, 255, 4, 2, 164, 132, 4, 3, 238, 0, 4, 5, 255, 255, 4, 6, 238, 0, 4, 10, 255, 255, 4, 11, 221, 0, 5, 1, 255, 255, 5, 2, 241, 54, 5, 5, 255, 255, 5, 6, 255, 51, 5, 10, 255, 255, 5, 11, 255, 0, 6, 1, 255, 255, 6, 2, 255, 85, 6, 5, 175, 247, 6, 6, 254, 204, 6, 9, 221, 255, 6, 10, 180, 217, 6, 11, 255, 0, 7, 2, 255, 17, 7, 6, 226, 192, 7, 7, 255, 255, 7, 8, 255, 255, 7, 9, 194, 201, 7, 10, 221, 0, 7, 11, 153, 0, 8, 7, 170, 0, 8, 8, 255, 0, 8, 9, 255, 0, 8, 10, 153, 0], "secondary": false }, { "width": 9, "bonus": 185, "chr": "7", "pixels": [1, 1, 255, 255, 1, 2, 168, 103, 2, 1, 255, 255, 2, 2, 255, 68, 2, 8, 153, 255, 2, 9, 255, 255, 2, 10, 207, 251, 3, 1, 255, 255, 3, 2, 255, 68, 3, 6, 153, 255, 3, 7, 255, 255, 3, 8, 196, 243, 3, 9, 180, 96, 3, 10, 255, 0, 3, 11, 204, 0, 4, 1, 255, 255, 4, 2, 255, 68, 4, 4, 153, 255, 4, 5, 255, 255, 4, 6, 196, 243, 4, 7, 180, 96, 4, 8, 255, 0, 4, 9, 187, 0, 5, 1, 255, 255, 5, 2, 255, 187, 5, 3, 255, 255, 5, 4, 196, 243, 5, 5, 180, 96, 5, 6, 255, 0, 5, 7, 187, 0, 6, 1, 255, 255, 6, 2, 254, 171, 6, 3, 200, 65, 6, 4, 255, 0, 6, 5, 187, 0, 7, 2, 255, 0, 7, 3, 170, 0], "secondary": false }, { "width": 9, "bonus": 285, "chr": "8", "pixels": [1, 2, 203, 255, 1, 3, 255, 255, 1, 4, 203, 255, 1, 6, 153, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 153, 255, 2, 1, 187, 255, 2, 2, 196, 243, 2, 3, 214, 61, 2, 4, 255, 187, 2, 5, 255, 255, 2, 6, 210, 247, 2, 7, 180, 96, 2, 8, 255, 68, 2, 9, 255, 221, 2, 10, 214, 182, 3, 1, 255, 255, 3, 2, 200, 65, 3, 3, 187, 0, 3, 5, 255, 255, 3, 6, 255, 34, 3, 7, 204, 0, 3, 10, 255, 255, 3, 11, 153, 0, 4, 1, 255, 255, 4, 2, 255, 51, 4, 5, 175, 247, 4, 6, 255, 102, 4, 10, 255, 255, 4, 11, 255, 0, 5, 1, 203, 255, 5, 2, 255, 153, 5, 5, 203, 255, 5, 6, 237, 219, 5, 10, 242, 251, 5, 11, 255, 0, 6, 2, 251, 242, 6, 3, 255, 255, 6, 4, 255, 255, 6, 5, 192, 225, 6, 6, 255, 255, 6, 7, 228, 133, 6, 9, 221, 255, 6, 10, 176, 197, 6, 11, 238, 0, 7, 3, 243, 71, 7, 4, 255, 0, 7, 5, 255, 0, 7, 6, 193, 90, 7, 7, 254, 239, 7, 8, 255, 255, 7, 9, 180, 217, 7, 10, 221, 0, 8, 8, 238, 0, 8, 9, 255, 0, 8, 10, 153, 0], "secondary": false }, { "width": 9, "bonus": 255, "chr": "9", "pixels": [1, 3, 237, 255, 1, 4, 255, 255, 1, 5, 237, 255, 2, 2, 237, 255, 2, 3, 182, 167, 2, 4, 245, 107, 2, 5, 255, 119, 2, 6, 253, 240, 2, 7, 192, 181, 2, 10, 255, 255, 3, 1, 255, 255, 3, 2, 175, 124, 3, 3, 238, 0, 3, 6, 164, 132, 3, 7, 253, 240, 3, 10, 255, 255, 3, 11, 255, 0, 4, 1, 255, 255, 4, 2, 255, 51, 4, 7, 255, 255, 4, 8, 238, 0, 4, 10, 241, 252, 4, 11, 255, 0, 5, 1, 203, 255, 5, 2, 255, 153, 5, 7, 214, 243, 5, 8, 255, 0, 5, 9, 203, 255, 5, 10, 180, 217, 5, 11, 238, 0, 6, 2, 251, 242, 6, 3, 228, 209, 6, 6, 237, 255, 6, 7, 214, 223, 6, 8, 248, 227, 6, 9, 203, 255, 6, 10, 207, 21, 6, 11, 153, 0, 7, 3, 248, 157, 7, 4, 246, 229, 7, 5, 255, 255, 7, 6, 255, 255, 7, 7, 253, 223, 7, 8, 224, 155, 7, 9, 223, 19, 7, 10, 204, 0, 8, 4, 153, 0, 8, 5, 221, 0, 8, 6, 255, 0, 8, 7, 255, 0, 8, 8, 221, 0], "secondary": false }, { "width": 10, "bonus": 230, "chr": "%", "pixels": [1, 2, 255, 255, 1, 3, 255, 255, 1, 10, 187, 255, 2, 1, 255, 255, 2, 3, 255, 68, 2, 4, 255, 255, 2, 9, 237, 255, 2, 11, 187, 0, 3, 2, 255, 255, 3, 3, 255, 255, 3, 5, 255, 0, 3, 7, 169, 255, 3, 8, 221, 255, 3, 10, 238, 0, 4, 3, 255, 0, 4, 4, 255, 0, 4, 6, 237, 255, 4, 8, 170, 0, 4, 9, 221, 0, 5, 4, 153, 255, 5, 5, 237, 255, 5, 7, 243, 89, 5, 8, 255, 255, 5, 9, 255, 255, 6, 3, 237, 255, 6, 4, 175, 247, 6, 5, 159, 27, 6, 6, 238, 0, 6, 7, 255, 255, 6, 9, 255, 68, 6, 10, 255, 255, 7, 2, 237, 255, 7, 4, 238, 0, 7, 5, 170, 0, 7, 7, 255, 255, 7, 8, 255, 68, 7, 10, 255, 255, 7, 11, 255, 0, 8, 1, 187, 255, 8, 3, 238, 0, 8, 8, 255, 255, 8, 9, 255, 255, 8, 11, 255, 0, 9, 2, 187, 0, 9, 9, 255, 0, 9, 10, 255, 0], "secondary": false }, { "width": 6, "bonus": 125, "chr": "/", "pixels": [1, 10, 187, 255, 1, 11, 187, 255, 2, 7, 203, 255, 2, 8, 255, 255, 2, 9, 196, 243, 2, 10, 173, 175, 2, 11, 196, 45, 2, 12, 187, 0, 3, 3, 169, 255, 3, 4, 255, 255, 3, 5, 221, 255, 3, 6, 180, 217, 3, 7, 175, 124, 3, 8, 204, 0, 3, 9, 255, 0, 3, 10, 187, 0, 4, 1, 255, 255, 4, 2, 207, 251, 4, 3, 164, 185, 4, 4, 187, 70, 4, 5, 255, 0, 4, 6, 221, 0, 4, 7, 153, 0, 5, 2, 255, 0, 5, 3, 204, 0], "secondary": false }, { "width": 9, "bonus": 120, "chr": "+", "pixels": [1, 7, 255, 255, 2, 7, 255, 255, 2, 8, 255, 0, 3, 7, 255, 255, 3, 8, 255, 68, 4, 4, 255, 255, 4, 5, 255, 255, 4, 6, 255, 255, 4, 7, 255, 255, 4, 8, 255, 255, 4, 9, 255, 255, 4, 10, 255, 255, 5, 5, 255, 0, 5, 6, 255, 0, 5, 7, 255, 255, 5, 8, 255, 0, 5, 9, 255, 0, 5, 10, 255, 0, 5, 11, 255, 0, 6, 7, 255, 255, 6, 8, 255, 0, 7, 7, 255, 255, 7, 8, 255, 0, 8, 8, 255, 0], "secondary": false }, { "width": 6, "bonus": 105, "chr": "?", "pixels": [1, 1, 203, 255, 2, 1, 255, 255, 2, 2, 214, 61, 2, 6, 187, 255, 2, 7, 255, 255, 2, 10, 255, 255, 3, 1, 237, 255, 3, 2, 255, 119, 3, 5, 237, 255, 3, 6, 166, 235, 3, 7, 200, 65, 3, 8, 255, 17, 3, 11, 255, 0, 4, 2, 253, 240, 4, 3, 255, 255, 4, 4, 255, 255, 4, 6, 238, 0, 4, 7, 153, 0, 5, 3, 243, 71, 5, 4, 255, 0, 5, 5, 255, 0], "secondary": false }, { "width": 4, "bonus": 80, "chr": "!", "pixels": [1, 1, 237, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 10, 237, 255, 2, 2, 243, 71, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 255, 17, 2, 11, 238, 0], "secondary": false }, { "width": 10, "bonus": 295, "chr": "@", "pixels": [1, 5, 153, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 187, 255, 2, 4, 203, 255, 2, 5, 191, 250, 2, 6, 173, 75, 2, 7, 255, 0, 2, 8, 255, 51, 2, 9, 254, 171, 2, 10, 255, 255, 3, 4, 203, 255, 3, 5, 204, 0, 3, 6, 187, 0, 3, 10, 198, 109, 3, 11, 255, 255, 4, 3, 237, 255, 4, 4, 175, 124, 4, 5, 214, 61, 4, 6, 237, 255, 4, 7, 255, 255, 4, 8, 242, 251, 4, 11, 176, 197, 4, 12, 255, 187, 5, 3, 255, 255, 5, 4, 238, 0, 5, 5, 220, 236, 5, 7, 238, 0, 5, 8, 255, 119, 5, 9, 253, 223, 5, 12, 255, 255, 5, 13, 187, 0, 6, 3, 255, 255, 6, 4, 255, 17, 6, 5, 255, 255, 6, 6, 204, 0, 6, 9, 255, 255, 6, 10, 221, 0, 6, 13, 255, 0, 7, 3, 225, 251, 7, 4, 255, 136, 7, 5, 255, 255, 7, 6, 255, 68, 7, 9, 255, 255, 7, 10, 255, 0, 8, 4, 250, 226, 8, 5, 255, 255, 8, 6, 255, 255, 8, 7, 255, 255, 8, 8, 255, 255, 8, 9, 255, 255, 8, 10, 255, 0, 9, 5, 221, 0, 9, 6, 255, 0, 9, 7, 255, 0, 9, 8, 255, 0, 9, 9, 255, 255, 9, 10, 255, 0], "secondary": false }, { "width": 10, "bonus": 285, "chr": "#", "pixels": [1, 4, 237, 255, 1, 8, 255, 255, 2, 4, 255, 255, 2, 5, 241, 54, 2, 8, 255, 255, 2, 9, 255, 221, 2, 10, 255, 255, 3, 1, 153, 255, 3, 2, 187, 255, 3, 3, 221, 255, 3, 4, 255, 255, 3, 5, 255, 255, 3, 6, 214, 243, 3, 7, 198, 219, 3, 8, 255, 255, 3, 9, 255, 85, 3, 10, 223, 19, 3, 11, 255, 0, 4, 1, 153, 255, 4, 2, 194, 135, 4, 3, 205, 85, 4, 4, 255, 255, 4, 5, 255, 0, 4, 6, 255, 0, 4, 7, 204, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 2, 153, 0, 5, 4, 255, 255, 5, 5, 255, 51, 5, 8, 255, 255, 5, 9, 254, 204, 5, 10, 255, 255, 6, 2, 187, 255, 6, 3, 221, 255, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 228, 247, 6, 7, 205, 233, 6, 8, 255, 255, 6, 9, 255, 102, 6, 10, 211, 41, 6, 11, 255, 0, 7, 1, 153, 255, 7, 2, 191, 159, 7, 3, 209, 104, 7, 4, 255, 255, 7, 5, 255, 0, 7, 6, 255, 0, 7, 7, 221, 0, 7, 8, 255, 255, 7, 9, 255, 0, 8, 2, 153, 0, 8, 4, 255, 255, 8, 5, 255, 0, 8, 9, 255, 0, 9, 5, 255, 0], "secondary": false }, { "width": 8, "bonus": 175, "chr": "$", "pixels": [1, 2, 221, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 9, 237, 255, 2, 1, 221, 255, 2, 2, 173, 226, 2, 3, 221, 0, 2, 4, 255, 119, 2, 5, 255, 255, 2, 10, 253, 240, 3, 0, 255, 255, 3, 1, 255, 255, 3, 2, 230, 75, 3, 3, 153, 0, 3, 5, 219, 218, 3, 6, 254, 171, 3, 10, 255, 255, 3, 11, 255, 255, 4, 1, 254, 239, 4, 2, 255, 102, 4, 6, 255, 255, 4, 7, 198, 109, 4, 10, 230, 245, 4, 11, 255, 0, 4, 12, 255, 0, 5, 2, 248, 157, 5, 7, 255, 255, 5, 8, 255, 255, 5, 9, 237, 255, 5, 10, 159, 82, 5, 11, 221, 0, 6, 3, 153, 0, 6, 8, 255, 51, 6, 9, 255, 0, 6, 10, 238, 0], "secondary": false }, { "width": 8, "bonus": 105, "chr": "^", "pixels": [1, 6, 169, 255, 2, 4, 221, 255, 2, 5, 237, 255, 2, 6, 168, 207, 2, 7, 170, 0, 3, 2, 255, 255, 3, 3, 191, 250, 3, 4, 153, 141, 3, 5, 221, 0, 3, 6, 238, 0, 4, 1, 187, 255, 4, 2, 255, 255, 4, 3, 255, 153, 4, 4, 196, 45, 5, 2, 196, 45, 5, 3, 255, 136, 5, 4, 255, 255, 5, 5, 210, 247, 6, 5, 255, 102, 6, 6, 244, 213, 7, 7, 204, 0], "secondary": false }, { "width": 8, "bonus": 55, "chr": "~", "pixels": [1, 6, 237, 255, 2, 5, 255, 255, 2, 7, 238, 0, 3, 5, 237, 255, 3, 6, 255, 68, 4, 6, 253, 240, 5, 6, 255, 255, 5, 7, 238, 0, 6, 5, 237, 255, 6, 7, 255, 0, 7, 6, 238, 0], "secondary": false }, { "width": 9, "bonus": 260, "chr": "&", "pixels": [1, 2, 203, 255, 1, 3, 255, 255, 1, 4, 203, 255, 1, 6, 203, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 210, 247, 2, 1, 203, 255, 2, 2, 181, 239, 2, 3, 218, 80, 2, 4, 255, 153, 2, 5, 255, 255, 2, 6, 205, 233, 2, 7, 207, 21, 2, 8, 255, 17, 2, 9, 255, 187, 2, 10, 241, 198, 3, 1, 255, 255, 3, 2, 214, 61, 3, 3, 170, 0, 3, 5, 255, 255, 3, 6, 255, 68, 3, 7, 187, 0, 3, 10, 255, 255, 3, 11, 187, 0, 4, 1, 255, 255, 4, 2, 255, 51, 4, 5, 255, 255, 4, 6, 255, 68, 4, 10, 255, 255, 4, 11, 255, 0, 5, 2, 255, 0, 5, 5, 255, 255, 5, 6, 255, 119, 5, 9, 203, 255, 5, 10, 192, 225, 5, 11, 255, 0, 6, 4, 255, 255, 6, 5, 255, 255, 6, 6, 255, 255, 6, 7, 255, 255, 6, 8, 242, 251, 6, 9, 187, 209, 6, 10, 204, 0, 6, 11, 170, 0, 7, 5, 255, 255, 7, 6, 255, 68, 7, 7, 255, 0, 7, 8, 255, 0, 7, 9, 238, 0, 7, 10, 153, 0, 8, 6, 255, 0], "secondary": false }, { "width": 7, "bonus": 95, "chr": "*", "pixels": [1, 3, 169, 255, 2, 3, 245, 247, 2, 4, 226, 192, 2, 5, 237, 255, 3, 1, 255, 255, 3, 2, 255, 255, 3, 3, 255, 255, 3, 4, 253, 240, 3, 5, 181, 48, 3, 6, 238, 0, 4, 2, 255, 68, 4, 3, 254, 239, 4, 4, 254, 171, 4, 5, 253, 240, 5, 3, 180, 217, 5, 4, 238, 0, 5, 5, 187, 70, 5, 6, 238, 0, 6, 4, 153, 0], "secondary": false }, { "width": 4, "bonus": 110, "chr": "(", "pixels": [1, 3, 169, 255, 1, 4, 221, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 221, 255, 1, 9, 169, 255, 2, 1, 221, 255, 2, 2, 203, 255, 2, 3, 164, 185, 2, 4, 193, 90, 2, 5, 223, 19, 2, 6, 255, 0, 2, 7, 255, 17, 2, 8, 255, 68, 2, 9, 237, 128, 2, 10, 232, 205, 2, 11, 255, 255, 3, 2, 221, 0, 3, 3, 204, 0, 3, 11, 196, 45, 3, 12, 255, 17], "secondary": false }, { "width": 4, "bonus": 110, "chr": ")", "pixels": [1, 1, 221, 255, 1, 2, 214, 243, 1, 10, 187, 255, 1, 11, 255, 255, 2, 2, 232, 93, 2, 3, 237, 183, 2, 4, 237, 238, 2, 5, 255, 255, 2, 6, 255, 255, 2, 7, 255, 255, 2, 8, 223, 253, 2, 9, 192, 225, 2, 10, 174, 150, 2, 11, 191, 23, 2, 12, 255, 0, 3, 4, 170, 0, 3, 5, 221, 0, 3, 6, 255, 0, 3, 7, 255, 0, 3, 8, 255, 0, 3, 9, 221, 0, 3, 10, 170, 0], "secondary": false }, { "width": 9, "bonus": 70, "chr": "_", "pixels": [1, 11, 255, 255, 2, 11, 255, 255, 2, 12, 255, 0, 3, 11, 255, 255, 3, 12, 255, 0, 4, 11, 255, 255, 4, 12, 255, 0, 5, 11, 255, 255, 5, 12, 255, 0, 6, 11, 255, 255, 6, 12, 255, 0, 7, 11, 255, 255, 7, 12, 255, 0, 8, 12, 255, 0], "secondary": false }, { "width": 6, "bonus": 40, "chr": "-", "pixels": [1, 7, 255, 255, 2, 7, 255, 255, 2, 8, 255, 0, 3, 7, 255, 255, 3, 8, 255, 0, 4, 7, 192, 225, 4, 8, 255, 0, 5, 8, 170, 0], "secondary": true }, { "width": 9, "bonus": 140, "chr": "=", "pixels": [1, 6, 221, 255, 1, 8, 221, 255, 2, 6, 255, 255, 2, 7, 221, 0, 2, 8, 255, 255, 2, 9, 221, 0, 3, 6, 255, 255, 3, 7, 255, 0, 3, 8, 255, 255, 3, 9, 255, 0, 4, 6, 255, 255, 4, 7, 255, 0, 4, 8, 255, 255, 4, 9, 255, 0, 5, 6, 255, 255, 5, 7, 255, 0, 5, 8, 255, 255, 5, 9, 255, 0, 6, 6, 255, 255, 6, 7, 255, 0, 6, 8, 255, 255, 6, 9, 255, 0, 7, 6, 255, 255, 7, 7, 255, 0, 7, 8, 255, 255, 7, 9, 255, 0, 8, 7, 255, 0, 8, 9, 255, 0], "secondary": false }, { "width": 4, "bonus": 125, "chr": "[", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 2, 1, 255, 255, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 255, 2, 12, 255, 0, 3, 2, 255, 0, 3, 12, 255, 0], "secondary": false }, { "width": 3, "bonus": 125, "chr": "]", "pixels": [0, 1, 255, 255, 0, 11, 255, 255, 1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 0, 2, 2, 255, 0, 2, 3, 255, 0, 2, 4, 255, 0, 2, 5, 255, 0, 2, 6, 255, 0, 2, 7, 255, 0, 2, 8, 255, 0, 2, 9, 255, 0, 2, 10, 255, 0, 2, 11, 255, 0, 2, 12, 255, 0], "secondary": false }, { "width": 6, "bonus": 105, "chr": "{", "pixels": [1, 6, 255, 255, 2, 2, 255, 255, 2, 3, 255, 255, 2, 4, 255, 255, 2, 5, 230, 245, 2, 6, 184, 142, 2, 7, 254, 239, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 255, 255, 3, 1, 255, 255, 3, 3, 255, 0, 3, 4, 255, 0, 3, 5, 255, 0, 3, 6, 221, 0, 3, 8, 238, 0, 3, 9, 255, 0, 3, 10, 255, 68, 3, 11, 255, 255, 4, 2, 255, 0, 4, 12, 255, 0], "secondary": false }, { "width": 5, "bonus": 110, "chr": "}", "pixels": [1, 1, 255, 255, 1, 2, 163, 160, 1, 11, 255, 255, 2, 2, 255, 221, 2, 3, 255, 255, 2, 4, 255, 255, 2, 5, 242, 251, 2, 7, 255, 255, 2, 8, 255, 255, 2, 9, 255, 255, 2, 10, 230, 245, 2, 12, 255, 0, 3, 3, 221, 0, 3, 4, 255, 0, 3, 5, 255, 102, 3, 6, 255, 255, 3, 7, 168, 103, 3, 8, 255, 0, 3, 9, 255, 0, 3, 10, 255, 0, 3, 11, 221, 0, 4, 7, 255, 0], "secondary": false }, { "width": 3, "bonus": 20, "chr": ":", "pixels": [1, 3, 255, 255, 1, 9, 255, 255, 2, 4, 255, 17, 2, 10, 255, 0], "secondary": true }, { "width": 4, "bonus": 35, "chr": ";", "pixels": [2, 3, 255, 255, 2, 9, 255, 255, 2, 10, 210, 247, 2, 11, 153, 141, 3, 4, 255, 17, 3, 10, 255, 0, 3, 11, 204, 0], "secondary": true }, { "width": 5, "bonus": 50, "chr": '"', "pixels": [1, 0, 187, 255, 1, 1, 255, 255, 2, 0, 153, 255, 2, 1, 228, 171, 2, 2, 255, 102, 3, 0, 255, 255, 3, 1, 228, 209, 3, 2, 180, 96, 4, 1, 255, 0, 4, 2, 187, 0], "secondary": true }, { "width": 4, "bonus": 25, "chr": "'", "pixels": [2, 1, 221, 255, 2, 2, 200, 238, 2, 3, 174, 150, 3, 2, 221, 0, 3, 3, 187, 0], "secondary": true }, { "width": 8, "bonus": 115, "chr": "<", "pixels": [1, 5, 187, 255, 1, 6, 241, 252, 2, 5, 255, 255, 2, 6, 241, 215, 2, 7, 245, 107, 3, 4, 169, 255, 3, 5, 160, 217, 3, 6, 255, 102, 3, 7, 244, 213, 4, 4, 255, 255, 4, 5, 181, 48, 4, 7, 244, 248, 4, 8, 218, 80, 5, 4, 181, 239, 5, 5, 255, 0, 5, 8, 250, 191, 6, 3, 187, 255, 6, 4, 159, 82, 6, 5, 170, 0, 6, 8, 231, 225, 6, 9, 191, 23, 7, 4, 187, 0, 7, 9, 204, 0], "secondary": false }, { "width": 8, "bonus": 120, "chr": ">", "pixels": [1, 3, 153, 255, 2, 3, 153, 255, 2, 4, 220, 197, 2, 8, 255, 255, 3, 4, 255, 255, 3, 5, 181, 48, 3, 7, 187, 255, 3, 8, 192, 225, 3, 9, 255, 0, 4, 4, 181, 239, 4, 5, 255, 153, 4, 7, 255, 255, 4, 8, 196, 45, 4, 9, 170, 0, 5, 5, 255, 255, 5, 6, 228, 209, 5, 7, 180, 217, 5, 8, 255, 0, 6, 5, 186, 233, 6, 6, 255, 255, 6, 7, 191, 23, 6, 8, 153, 0, 7, 6, 193, 90, 7, 7, 255, 0], "secondary": false }, { "width": 6, "bonus": 90, "chr": "\\", "pixels": [1, 1, 237, 255, 1, 2, 255, 255, 1, 3, 169, 255, 2, 2, 241, 54, 2, 3, 255, 136, 2, 4, 244, 231, 2, 5, 255, 255, 2, 6, 191, 250, 3, 5, 226, 39, 3, 6, 255, 119, 3, 7, 241, 215, 3, 8, 255, 255, 3, 9, 191, 250, 4, 8, 211, 41, 4, 9, 255, 119, 4, 10, 241, 215, 4, 11, 184, 189, 5, 11, 204, 0], "secondary": false }, { "width": 4, "bonus": 15, "chr": ".", "pixels": [1, 10, 255, 255, 2, 10, 163, 160, 2, 11, 255, 0], "secondary": true }, { "width": 4, "bonus": 40, "chr": ",", "pixels": [1, 10, 187, 255, 1, 11, 169, 255, 2, 9, 255, 255, 2, 10, 194, 201, 2, 11, 196, 45, 2, 12, 170, 0, 3, 10, 255, 0, 3, 11, 153, 0], "secondary": true }, { "width": 4, "bonus": 125, "chr": "|", "pixels": [1, 1, 255, 255, 1, 2, 255, 255, 1, 3, 255, 255, 1, 4, 255, 255, 1, 5, 255, 255, 1, 6, 255, 255, 1, 7, 255, 255, 1, 8, 255, 255, 1, 9, 255, 255, 1, 10, 255, 255, 1, 11, 255, 255, 1, 12, 255, 255, 2, 1, 168, 103, 2, 2, 255, 68, 2, 3, 255, 68, 2, 4, 255, 68, 2, 5, 255, 68, 2, 6, 255, 68, 2, 7, 255, 68, 2, 8, 255, 68, 2, 9, 255, 68, 2, 10, 255, 68, 2, 11, 255, 68, 2, 12, 255, 51, 2, 13, 255, 0], "secondary": false }], "width": 13, "spacewidth": 3, "shadow": true, "height": 14, "basey": 10 };
              })
            ),
            /***/
            0: (
              /***/
              (function(module2, exports2, __webpack_require__) {
                module2.exports = __webpack_require__("./fonts/chat_10px.fontmeta.json");
              })
            )
            /******/
          })
        );
      });
    }
  });

  // src/reader.js
  var require_reader = __commonJS({
    "src/reader.js"() {
      var a1lib = __toESM(require_index_bundle());
      var OCR = __toESM(require_index_bundle2());
      var import_aa_12px_mono = __toESM(require_aa_12px_mono());
      var import_aa_10px_mono = __toESM(require_aa_10px_mono());
      var import_aa_8px_mono = __toESM(require_aa_8px_mono());
      var import_aa_8px_new = __toESM(require_aa_8px_new());
      var import_chat_13px = __toESM(require_chat_13px());
      var import_chat_11px = __toESM(require_chat_11px());
      var import_chat_10px = __toESM(require_chat_10px());
      var FONTS = { aa12: import_aa_12px_mono.default, aa10: import_aa_10px_mono.default, aa8: import_aa_8px_mono.default, aa8new: import_aa_8px_new.default, chat13: import_chat_13px.default, chat11: import_chat_11px.default, chat10: import_chat_10px.default };
      var COLORS = [
        [255, 255, 255],
        [235, 235, 235],
        [210, 210, 210],
        [255, 255, 0],
        [255, 203, 0],
        [255, 152, 31],
        [203, 151, 64],
        [174, 137, 83],
        [186, 146, 130],
        [220, 190, 120],
        [0, 255, 255],
        [0, 255, 0],
        [255, 0, 0],
        [153, 255, 153],
        [0, 0, 0],
        [35, 30, 25],
        [70, 55, 35],
        [95, 70, 45]
      ];
      function capture() {
        const ref = a1lib.captureHoldFullRs();
        return ref ? ref.toData() : null;
      }
      function scan() {
        const data = capture();
        if (!data) return { error: "capture failed (is RuneScape the active window?)" };
        let m;
        try {
          m = a1lib.getMousePosition();
        } catch (e) {
          return { error: "mouse permission needed \u2014 remove & re-add the ZephFlip app in Alt1, then allow the 'gamestate' permission." };
        }
        if (!m) return { error: "no mouse position \u2014 hover over the item name in-game, then read." };
        const reads = [];
        for (const [fontName, font] of Object.entries(FONTS)) {
          let bx = m.x - 90, by = m.y - 16, w = 180, h = 32;
          if (bx < 0) bx = 0;
          if (by < font.basey) by = font.basey;
          if (bx + w + font.width > data.width) w = data.width - bx - font.width - 1;
          if (by + h - font.basey + font.height > data.height) h = data.height - by + font.basey - font.height - 1;
          if (w < font.width || h < 2) continue;
          try {
            const line = OCR.findReadLine(data, font, COLORS, bx, by, w, h);
            const text = line && line.text ? String(line.text).trim() : "";
            if (text) reads.push({ font: fontName, text });
          } catch (e) {
          }
        }
        const out = { mouse: { x: m.x, y: m.y }, width: data.width, height: data.height, reads };
        try {
          out.snapshot = cropDataUrl(data, m);
        } catch (e) {
        }
        out.colors = sampleColors(data);
        return out;
      }
      function cropDataUrl(data, m) {
        const cw = 340, ch = 72, scale = 4;
        let sx = Math.max(0, m.x - Math.floor(cw / 2));
        let sy = Math.max(0, m.y - Math.floor(ch / 2));
        if (sx + cw > data.width) sx = data.width - cw;
        if (sy + ch > data.height) sy = data.height - ch;
        const crop = new ImageData(cw, ch);
        for (let yy = 0; yy < ch; yy++) {
          for (let xx = 0; xx < cw; xx++) {
            const si = ((sy + yy) * data.width + (sx + xx)) * 4;
            const di = (yy * cw + xx) * 4;
            crop.data[di] = data.data[si];
            crop.data[di + 1] = data.data[si + 1];
            crop.data[di + 2] = data.data[si + 2];
            crop.data[di + 3] = 255;
          }
        }
        const small = document.createElement("canvas");
        small.width = cw;
        small.height = ch;
        small.getContext("2d").putImageData(crop, 0, 0);
        const out = document.createElement("canvas");
        out.width = cw * scale;
        out.height = ch * scale;
        const ctx = out.getContext("2d");
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(small, 0, 0, out.width, out.height);
        const mx = (m.x - sx) * scale, my = (m.y - sy) * scale;
        ctx.strokeStyle = "#ff23e5";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mx - 10, my);
        ctx.lineTo(mx + 10, my);
        ctx.moveTo(mx, my - 10);
        ctx.lineTo(mx, my + 10);
        ctx.stroke();
        return out.toDataURL("image/png");
      }
      function sampleColors(data) {
        const d = data.data;
        const bright = /* @__PURE__ */ new Map(), dark = /* @__PURE__ */ new Map();
        let nearWhite = 0, nearBlack = 0, total = 0;
        const bin = (map, r, g, b) => {
          const key = (r >> 5) + "," + (g >> 5) + "," + (b >> 5);
          const e = map.get(key) || { r: 0, g: 0, b: 0, n: 0 };
          e.r += r;
          e.g += g;
          e.b += b;
          e.n++;
          map.set(key, e);
        };
        for (let i = 0; i < d.length; i += 16) {
          const r = d[i], g = d[i + 1], b = d[i + 2];
          const max = Math.max(r, g, b), min = Math.min(r, g, b);
          total++;
          if (min > 200) {
            nearWhite++;
            bin(bright, r, g, b);
          } else if (max < 60) {
            nearBlack++;
            bin(dark, r, g, b);
          } else if (max > 205) bin(bright, r, g, b);
        }
        const top = (map) => [...map.values()].sort((a, b) => b.n - a.n).slice(0, 8).map((e) => `${Math.round(e.r / e.n)},${Math.round(e.g / e.n)},${Math.round(e.b / e.n)} \xD7${e.n}`);
        return {
          stats: `sampled ${total} \xB7 near-white ${nearWhite} \xB7 near-black ${nearBlack}`,
          bright: top(bright),
          dark: top(dark)
        };
      }
      window.ZephReader = { version: "0.6", scan, capture, sampleColors };
    }
  });
  require_reader();
})();
