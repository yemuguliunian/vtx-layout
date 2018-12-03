"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 首字母大写
 */
String.prototype.firstUpperCase = function () {
  return this.replace(/^\S/, function (s) {
    return s.toUpperCase();
  });
};

/**
 * 验证是否支持某个css属性
 * 支持返回true，否则false
 */
var isCompatible = exports.isCompatible = function isCompatible(attr) {
  var attrU = attr.firstUpperCase();
  var d = document.documentElement.style;
  if (attr in d || "Webkit" + attrU in d || "ms" + attrU in d) {
    return true;
  }
  return false;
};