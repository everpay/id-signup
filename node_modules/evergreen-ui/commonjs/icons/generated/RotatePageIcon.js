"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotatePageIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M8 6H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-1 8H3V8h4v6zm5-12h-1.59l.29-.29c.19-.18.3-.43.3-.71A1.003 1.003 0 009.29.29l-2 2C7.11 2.47 7 2.72 7 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H12c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3z'];
var svgPaths20 = ['M14 2h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C9.11 2.47 9 2.72 9 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H14c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4zm-2 5H3c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 11H4V9h7v9z'];
var RotatePageIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "rotate-page"
  }, props));
}));
exports.RotatePageIcon = RotatePageIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvUm90YXRlUGFnZUljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJSb3RhdGVQYWdlSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLGlUQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixxVEFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxjQUFjLEdBQUcsaUJBQzVCLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ1QsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFEUztBQUFBLENBQVgsQ0FENEIsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNOCA2SDJjLS41NSAwLTEgLjQ1LTEgMXY4YzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xVjdjMC0uNTUtLjQ1LTEtMS0xem0tMSA4SDNWOGg0djZ6bTUtMTJoLTEuNTlsLjI5LS4yOWMuMTktLjE4LjMtLjQzLjMtLjcxQTEuMDAzIDEuMDAzIDAgMDA5LjI5LjI5bC0yIDJDNy4xMSAyLjQ3IDcgMi43MiA3IDNjMCAuMjguMTEuNTMuMjkuNzFsMiAyYTEuMDAzIDEuMDAzIDAgMDAxLjQyLTEuNDJsLS4zLS4yOUgxMmMuNTUgMCAxIC40NSAxIDF2M2MwIC41NS40NSAxIDEgMXMxLS40NSAxLTFWNWMwLTEuNjYtMS4zNC0zLTMtM3onXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTE0IDJoLTEuNTlsLjI5LS4yOWMuMTktLjE4LjMtLjQzLjMtLjcxYTEuMDAzIDEuMDAzIDAgMDAtMS43MS0uNzFsLTIgMkM5LjExIDIuNDcgOSAyLjcyIDkgM2MwIC4yOC4xMS41My4yOS43MWwyIDJhMS4wMDMgMS4wMDMgMCAwMDEuNDItMS40MmwtLjMtLjI5SDE0YzEuMSAwIDIgLjkgMiAydjNjMCAuNTUuNDUgMSAxIDFzMS0uNDUgMS0xVjZjMC0yLjIxLTEuNzktNC00LTR6bS0yIDVIM2MtLjU1IDAtMSAuNDUtMSAxdjExYzAgLjU1LjQ1IDEgMSAxaDljLjU1IDAgMS0uNDUgMS0xVjhjMC0uNTUtLjQ1LTEtMS0xem0tMSAxMUg0VjloN3Y5eidcbl1cblxuZXhwb3J0IGNvbnN0IFJvdGF0ZVBhZ2VJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cInJvdGF0ZS1wYWdlXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApKVxuKVxuIl19