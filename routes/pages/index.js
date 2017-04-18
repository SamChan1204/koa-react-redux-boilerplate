/**
 * @Author: SplendourHui
 * @Date:   2016-04-29 09:54
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T17:06:19+08:00
 */



'use strict';

const ctrl = require('./controller');

module.exports = (router) => {
  router.get('/', ctrl.index);
  router.get('/page/*', ctrl.index);
};
