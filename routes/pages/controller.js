/**
 * @Author: SplendourHui
 * @Date:   2016-04-29 09:54
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T15:42:30+08:00
 */



'use strict';

const co = require('co');
const jade = require('jade');

exports.index = function*() {
  this.body = jade.renderFile('views/index.jade', {});
};
