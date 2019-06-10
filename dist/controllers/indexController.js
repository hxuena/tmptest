"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IndexModel = require("../modules/IndexModel");

var _IndexModel2 = _interopRequireDefault(_IndexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IndexController {
  constructor() {}

  indexAction() {
    return async (ctx, next) => {
      //  ctx.body = '加油雪娜🌺🍒';
      const insIndexModel = new _IndexModel2.default();
      const result = await insIndexModel.getData();
      ctx.body = await ctx.render('index', {
        data: result
      });
    };
  }

}

exports.default = IndexController;