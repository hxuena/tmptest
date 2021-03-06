import Koa from "koa";
import router from "koa-simple-router";
import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static'
import config from "./config";
import controllerInit from './controllers'
import errorHandler from './middlewares/errorHandle'
import log4js from 'log4js'

const app = new Koa();

log4js.configure({
  appenders: { cheese: { type: 'file', filename: __dirname + '/logs/xn.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger('cheese');
app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', 
  ext: 'html',
  varControls: ["[[","]]"],
  writeBody: false
}));
errorHandler.error(app, logger)
controllerInit(app, router)
app.use(serve(config.staticDir));
app.listen( config.port, () => {
  console.log(`xnhao listen on ${config.port}`)
})