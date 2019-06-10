"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexController = require("./indexController");

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const insIndexController = new _indexController2.default();

exports.default = (app, router) => {
  console.log('controller   ', insIndexController.indexAction());
  app.use(router(_ => {
    _.get("/", insIndexController.indexAction());
  }));
};