"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResolveIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M6.6 3.3C6.1 3.1 5.6 3 5 3 2.2 3 0 5.2 0 8s2.2 5 5 5c.6 0 1.1-.1 1.6-.3C5.3 11.6 4.5 9.9 4.5 8s.8-3.6 2.1-4.7zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c-.6 0-1.1.1-1.6.3 1.3 1.2 2.1 2.9 2.1 4.7s-.8 3.6-2.1 4.7c.5.2 1 .3 1.6.3 2.8 0 5-2.2 5-5s-2.2-5-5-5z'];
var svgPaths20 = ['M8.7 4.7C7.9 4.2 7 4 6 4c-3.3 0-6 2.7-6 6s2.7 6 6 6c1 0 1.9-.2 2.7-.7C7.3 14 6.5 12.1 6.5 10s.9-4 2.2-5.3zM14 4c-1 0-1.9.2-2.7.7 1.4 1.4 2.2 3.2 2.2 5.3s-.9 4-2.2 5.3c.8.5 1.7.7 2.7.7 3.3 0 6-2.7 6-6s-2.7-6-6-6zm-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z'];
var ResolveIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "resolve"
  }, props));
}));
exports.ResolveIcon = ResolveIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvUmVzb2x2ZUljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJSZXNvbHZlSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLHdSQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQiwrUkFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxXQUFXLEdBQUcsaUJBQ3pCLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ1QsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFEUztBQUFBLENBQVgsQ0FEeUIsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNNi42IDMuM0M2LjEgMy4xIDUuNiAzIDUgMyAyLjIgMyAwIDUuMiAwIDhzMi4yIDUgNSA1Yy42IDAgMS4xLS4xIDEuNi0uM0M1LjMgMTEuNiA0LjUgOS45IDQuNSA4cy44LTMuNiAyLjEtNC43ek04IDRjLTEuMi45LTIgMi40LTIgNHMuOCAzLjEgMiA0YzEuMi0uOSAyLTIuMyAyLTRzLS44LTMuMS0yLTR6bTMtMWMtLjYgMC0xLjEuMS0xLjYuMyAxLjMgMS4yIDIuMSAyLjkgMi4xIDQuN3MtLjggMy42LTIuMSA0LjdjLjUuMiAxIC4zIDEuNi4zIDIuOCAwIDUtMi4yIDUtNXMtMi4yLTUtNS01eidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNOC43IDQuN0M3LjkgNC4yIDcgNCA2IDRjLTMuMyAwLTYgMi43LTYgNnMyLjcgNiA2IDZjMSAwIDEuOS0uMiAyLjctLjdDNy4zIDE0IDYuNSAxMi4xIDYuNSAxMHMuOS00IDIuMi01LjN6TTE0IDRjLTEgMC0xLjkuMi0yLjcuNyAxLjQgMS40IDIuMiAzLjIgMi4yIDUuM3MtLjkgNC0yLjIgNS4zYy44LjUgMS43LjcgMi43LjcgMy4zIDAgNi0yLjcgNi02cy0yLjctNi02LTZ6bS00IDEuNUM4LjggNi43IDggOC4yIDggMTBzLjggMy4zIDIgNC40YzEuMi0xLjEgMi0yLjcgMi00LjVzLS44LTMuMy0yLTQuNHonXG5dXG5cbmV4cG9ydCBjb25zdCBSZXNvbHZlSWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IChcbiAgICA8SWNvblxuICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIG5hbWU9XCJyZXNvbHZlXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApKVxuKVxuIl19