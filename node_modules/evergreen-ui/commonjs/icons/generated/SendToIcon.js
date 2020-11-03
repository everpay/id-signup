"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendToIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M15 7.5c-.8 0-1.5-.4-2-1l-1.2 1.2c-.4.5-1.1.7-1.8.7-1.4.1-2.5-1-2.5-2.4 0-.7.3-1.3.7-1.8L9.5 3c-.6-.5-1-1.2-1-2 0-.3.1-.7.2-1H8C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8v-.7c-.3.1-.6.2-1 .2zM15 0h-4c-.6 0-1 .5-1 1s.4 1 1 1h1.6L9.3 5.3c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3L14 3.4V5c0 .6.4 1 1 1 .5 0 1-.4 1-1V1c0-.5-.4-1-1-1z'];
var svgPaths20 = ['M19 0h-5c-.6 0-1 .4-1 1s.4 1 1 1h2.6l-4.3 4.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3L18 3.4V6c0 .5.5 1 1 1s1-.5 1-1V1c0-.6-.5-1-1-1zm0 9c-1 0-1.9-.5-2.5-1.3l-1.4 1.4c-.5.6-1.3.9-2.1.9-1.7 0-3-1.3-3-3 0-.8.3-1.6.9-2.1l1.4-1.4C11.5 2.9 11 2 11 1c0-.3.1-.6.2-.9-.4-.1-.8-.1-1.2-.1C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10c0-.4 0-.8-.1-1.2-.3.1-.6.2-.9.2z'];
var SendToIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "send-to"
  }, props));
}));
exports.SendToIcon = SendToIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU2VuZFRvSWNvbi5qcyJdLCJuYW1lcyI6WyJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsIlNlbmRUb0ljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQix3VUFEaUIsQ0FBbkI7QUFHQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIseVdBRGlCLENBQW5CO0FBSU8sSUFBTUMsVUFBVSxHQUFHLGlCQUN4Qix1QkFBVyxVQUFDQyxLQUFELEVBQVFDLEdBQVI7QUFBQSxTQUNULGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBRFM7QUFBQSxDQUFYLENBRHdCLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTE1IDcuNWMtLjggMC0xLjUtLjQtMi0xbC0xLjIgMS4yYy0uNC41LTEuMS43LTEuOC43LTEuNC4xLTIuNS0xLTIuNS0yLjQgMC0uNy4zLTEuMy43LTEuOEw5LjUgM2MtLjYtLjUtMS0xLjItMS0yIDAtLjMuMS0uNy4yLTFIOEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOHYtLjdjLS4zLjEtLjYuMi0xIC4yek0xNSAwaC00Yy0uNiAwLTEgLjUtMSAxcy40IDEgMSAxaDEuNkw5LjMgNS4zYy0uMi4yLS4zLjQtLjMuNyAwIC41LjQgMSAxIDEgLjMgMCAuNS0uMS43LS4zTDE0IDMuNFY1YzAgLjYuNCAxIDEgMSAuNSAwIDEtLjQgMS0xVjFjMC0uNS0uNC0xLTEtMXonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTE5IDBoLTVjLS42IDAtMSAuNC0xIDFzLjQgMSAxIDFoMi42bC00LjMgNC4zYy0uMi4yLS4zLjQtLjMuNyAwIC42LjQgMSAxIDEgLjMgMCAuNS0uMS43LS4zTDE4IDMuNFY2YzAgLjUuNSAxIDEgMXMxLS41IDEtMVYxYzAtLjYtLjUtMS0xLTF6bTAgOWMtMSAwLTEuOS0uNS0yLjUtMS4zbC0xLjQgMS40Yy0uNS42LTEuMy45LTIuMS45LTEuNyAwLTMtMS4zLTMtMyAwLS44LjMtMS42LjktMi4xbDEuNC0xLjRDMTEuNSAyLjkgMTEgMiAxMSAxYzAtLjMuMS0uNi4yLS45LS40LS4xLS44LS4xLTEuMi0uMUM0LjUgMCAwIDQuNSAwIDEwczQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTBjMC0uNCAwLS44LS4xLTEuMi0uMy4xLS42LjItLjkuMnonXG5dXG5cbmV4cG9ydCBjb25zdCBTZW5kVG9JY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cInNlbmQtdG9cIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpXG4pXG4iXX0=