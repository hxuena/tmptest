"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @class
 */
class IndexModle {
  /**
   * 
   * @param {string} app koa2 上下文
   */
  constructor(app) {}

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve('异步数据');
      }, 1000);
    });
  }

}

exports.default = IndexModle;