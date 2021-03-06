import _ from "lodash";
import path from "path";

let config = {
  "viewDir": path.join(__dirname, '../views'),
  "staticDir": path.join(__dirname, '../assets')
}
const init = () => {
  if( process.env.NODE_ENV == 'development') {
    const localConfig = {
      port: 8081
    }
    config = _.extend(config, localConfig)
  }
  if( process.env.NODE_ENV == 'production') {
    const proConfig = {
      port: 80
    }
    config = _.extend(config, proConfig)
  }
  return config
}

const result = init();
console.log('00344 ',config)
export default result;