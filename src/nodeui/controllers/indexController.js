import IndexModel from '../modules/IndexModel'
class IndexController {
  constructor() {

  }
  indexAction(){
    return async ( ctx, next ) => {
      //  ctx.body = '加油雪娜🌺🍒';
      const insIndexModel = new IndexModel()
      const result = await insIndexModel.getData()
       ctx.body = await ctx.render('index', {
         data: result
       })
    }
  }
}
export default IndexController;