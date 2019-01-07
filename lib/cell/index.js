'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _CellItem = require('./CellItem');

var _CellItem2 = _interopRequireDefault(_CellItem);

var _ItemTitle = require('./ItemTitle');

var _ItemTitle2 = _interopRequireDefault(_ItemTitle);

var _ItemBody = require('./ItemBody');

var _ItemBody2 = _interopRequireDefault(_ItemBody);

var _ItemFooter = require('./ItemFooter');

var _ItemFooter2 = _interopRequireDefault(_ItemFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Cell2.default.Item = _CellItem2.default;
_Cell2.default.Item.Title = _ItemTitle2.default;
_Cell2.default.Item.Body = _ItemBody2.default;
_Cell2.default.Item.Footer = _ItemFooter2.default;

exports.default = _Cell2.default;
module.exports = exports['default'];