import alert from './src/alert';
import Mask from '../mask/Mask';
import alert from './src/alert';
import confirm from './src/confirm'
export default {
  alert:(params) => new Mask().show(alert,params),
  confirm:(params) => new Mask().show(confirm,params)
}