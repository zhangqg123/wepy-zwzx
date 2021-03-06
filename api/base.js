import wepy from 'wepy';
import http from '../utils/Http'

export default class base {
  static baseUrl = wepy.$instance.globalData.baseUrl;
  static baseUrl2 = wepy.$instance.globalData.baseUrl2;
  static apiAdUpload =  wepy.$instance.globalData.baseUrl2 + '/upload/img/cms/'

  static openUrl = wepy.$instance.globalData.openUrl;
  static get = http.get.bind(http);
  static put = http.put.bind(http);
  static post = http.post.bind(http);
  static delete = http.delete.bind(http);
}
