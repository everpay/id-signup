"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchTextIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M9 4H5c-.55 0-1 .45-1 1s.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1V6h1c.55 0 1-.45 1-1s-.45-1-1-1zm6.56 9.44l-2.67-2.67C13.59 9.68 14 8.39 14 7c0-3.87-3.13-7-7-7S0 3.13 0 7s3.13 7 7 7c1.39 0 2.68-.41 3.77-1.11l2.67 2.67a1.498 1.498 0 102.12-2.12zM7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'];
var svgPaths20 = ['M19.56 17.44l-3.23-3.23A8.939 8.939 0 0018 9a9 9 0 10-9 9c1.94 0 3.74-.62 5.21-1.67l3.23 3.23a1.498 1.498 0 102.12-2.12zM9 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm3.5-11h-7c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5s.5-.22.5-.5V7h2v6h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7h2v.5c0 .28.22.5.5.5s.5-.22.5-.5v-2c0-.28-.22-.5-.5-.5z'];
var SearchTextIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "search-text"
  }, props));
}));
exports.SearchTextIcon = SearchTextIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU2VhcmNoVGV4dEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJTZWFyY2hUZXh0SWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLDhTQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixpWEFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxjQUFjLEdBQUcsaUJBQzVCLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ1QsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFEUztBQUFBLENBQVgsQ0FENEIsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNOSA0SDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFoMXYzYzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMVY2aDFjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6bTYuNTYgOS40NGwtMi42Ny0yLjY3QzEzLjU5IDkuNjggMTQgOC4zOSAxNCA3YzAtMy44Ny0zLjEzLTctNy03UzAgMy4xMyAwIDdzMy4xMyA3IDcgN2MxLjM5IDAgMi42OC0uNDEgMy43Ny0xLjExbDIuNjcgMi42N2ExLjQ5OCAxLjQ5OCAwIDEwMi4xMi0yLjEyek03IDEyYy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTE5LjU2IDE3LjQ0bC0zLjIzLTMuMjNBOC45MzkgOC45MzkgMCAwMDE4IDlhOSA5IDAgMTAtOSA5YzEuOTQgMCAzLjc0LS42MiA1LjIxLTEuNjdsMy4yMyAzLjIzYTEuNDk4IDEuNDk4IDAgMTAyLjEyLTIuMTJ6TTkgMTZjLTMuODcgMC03LTMuMTMtNy03czMuMTMtNyA3LTcgNyAzLjEzIDcgNy0zLjEzIDctNyA3em0zLjUtMTFoLTdjLS4yOCAwLS41LjIyLS41LjV2MmMwIC4yOC4yMi41LjUuNXMuNS0uMjIuNS0uNVY3aDJ2NmgtLjVjLS4yOCAwLS41LjIyLS41LjVzLjIyLjUuNS41aDNjLjI4IDAgLjUtLjIyLjUtLjVzLS4yMi0uNS0uNS0uNUgxMFY3aDJ2LjVjMCAuMjguMjIuNS41LjVzLjUtLjIyLjUtLjV2LTJjMC0uMjgtLjIyLS41LS41LS41eidcbl1cblxuZXhwb3J0IGNvbnN0IFNlYXJjaFRleHRJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cInNlYXJjaC10ZXh0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApKVxuKVxuIl19