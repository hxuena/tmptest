"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errorHandler = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        logger.error(error);
        ctx.status = error.status || 200;
        ctx.body = '请求出错了';
      }
    });
    app.use(async (ctx, next) => {
      await next();
      if (404 !== ctx.status) return;
      ctx.body = '哎吆出错了';
    });
  }

};
exports.default = errorHandler;