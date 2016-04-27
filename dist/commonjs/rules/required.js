'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequiredRule = undefined;

var _validationRule = require('../validation-rule');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequiredRule = exports.RequiredRule = function RequiredRule() {
  _classCallCheck(this, RequiredRule);

  return new _validationRule.ValidationRule('presence', true);
};