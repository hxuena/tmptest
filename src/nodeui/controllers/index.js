import IndexController from './indexController'

const insIndexController = new IndexController();

export default (app, router) => {
  console.log('controller   ', insIndexController.indexAction())
  app.use(router(_ => {
    _.get("/", insIndexController.indexAction())
  }))
}
