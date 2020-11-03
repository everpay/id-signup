"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertyIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M3 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-.5-6.5a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM7 3h8c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm8 10H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zM3 0C1.9 0 1 .9 1 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 6H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z'];
var svgPaths20 = ['M3 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5-1h11c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM3 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16 1H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm-1-8H9c-1.1 0-2 .9-2 2s.9 2 2 2h9c1.1 0 2-.9 2-2s-.9-2-2-2zM3 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'];
var PropertyIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "property"
  }, props));
}));
exports.PropertyIcon = PropertyIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvUHJvcGVydHlJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiUHJvcGVydHlJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsd1ZBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLHlWQURpQixDQUFuQjtBQUlPLElBQU1DLFlBQVksR0FBRyxpQkFDMUIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUQwQixDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00zIDEyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptLS41LTYuNWEyLjUgMi41IDAgMDAwIDUgMi41IDIuNSAwIDAwMC01ek03IDNoOGMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMUg3Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxem04IDEwSDdjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFoOGMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMXpNMyAwQzEuOSAwIDEgLjkgMSAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0xMiA2SDdjLS41NSAwLTEgLjQ1LTEgMXYyYzAgLjU1LjQ1IDEgMSAxaDhjLjU1IDAgMS0uNDUgMS0xVjdjMC0uNTUtLjQ1LTEtMS0xeidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMyA1YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptNS0xaDExYy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xSDhjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDF6TTMgMTVjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0xNiAxSDhjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFoMTFjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6bS0xLThIOWMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDJoOWMxLjEgMCAyLS45IDItMnMtLjktMi0yLTJ6TTMgN2MtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgMyAzLTEuMzQgMy0zLTEuMzQtMy0zLTN6J1xuXVxuXG5leHBvcnQgY29uc3QgUHJvcGVydHlJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cInByb3BlcnR5XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApKVxuKVxuIl19