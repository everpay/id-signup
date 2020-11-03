"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextHighlightIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M9 10H2V6h7V4H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h8v-2zm4 3h-1V3h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.37 0-.7.11-1 .28-.3-.17-.63-.28-1-.28H9c-.55 0-1 .45-1 1s.45 1 1 1h1v10H9c-.55 0-1 .45-1 1s.45 1 1 1h1c.37 0 .7-.11 1-.28.3.17.63.28 1 .28h1c.55 0 1-.45 1-1s-.45-1-1-1zm2-9h-2v2h1v4h-1v2h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'];
var svgPaths20 = ['M16 17c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1-.45 1-1-.45-1-1-1c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78-.55 0-1 .45-1 1s.45 1 1 1 1 .45 1 1v12c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1c.77 0 1.47-.3 2-.78.53.48 1.23.78 2 .78.55 0 1-.45 1-1s-.45-1-1-1zm-4-4H2V7h10V5H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h11v-2zm7-8h-3v2h2v6h-2v2h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z'];
var TextHighlightIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "text-highlight"
  }, props));
}));
exports.TextHighlightIcon = TextHighlightIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvVGV4dEhpZ2hsaWdodEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJUZXh0SGlnaGxpZ2h0SWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLG9VQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQix3V0FEaUIsQ0FBbkI7QUFJTyxJQUFNQyxpQkFBaUIsR0FBRyxpQkFDL0IsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUQrQixDQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ005IDEwSDJWNmg3VjRIMWMtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoOHYtMnptNCAzaC0xVjNoMWMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMWgtMWMtLjM3IDAtLjcuMTEtMSAuMjgtLjMtLjE3LS42My0uMjgtMS0uMjhIOWMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWgxdjEwSDljLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFoMWMuMzcgMCAuNy0uMTEgMS0uMjguMy4xNy42My4yOCAxIC4yOGgxYy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xem0yLTloLTJ2MmgxdjRoLTF2MmgyYy41NSAwIDEtLjQ1IDEtMVY1YzAtLjU1LS40NS0xLTEtMXonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTE2IDE3Yy0uNTUgMC0xLS40NS0xLTFWNGMwLS41NS40NS0xIDEtMXMxLS40NSAxLTEtLjQ1LTEtMS0xYy0uNzcgMC0xLjQ3LjMtMiAuNzgtLjUzLS40OC0xLjIzLS43OC0yLS43OC0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxIDEgLjQ1IDEgMXYxMmMwIC41NS0uNDUgMS0xIDFzLTEgLjQ1LTEgMSAuNDUgMSAxIDFjLjc3IDAgMS40Ny0uMyAyLS43OC41My40OCAxLjIzLjc4IDIgLjc4LjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6bS00LTRIMlY3aDEwVjVIMWMtLjU1IDAtMSAuNDUtMSAxdjhjMCAuNTUuNDUgMSAxIDFoMTF2LTJ6bTctOGgtM3YyaDJ2NmgtMnYyaDNjLjU1IDAgMS0uNDUgMS0xVjZjMC0uNTUtLjQ1LTEtMS0xeidcbl1cblxuZXhwb3J0IGNvbnN0IFRleHRIaWdobGlnaHRJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cInRleHQtaGlnaGxpZ2h0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApKVxuKVxuIl19