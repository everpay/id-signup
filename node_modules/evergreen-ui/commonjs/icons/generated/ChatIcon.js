"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M6 10c-1.1 0-2-.9-2-2V3H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1v2a1.003 1.003 0 001.71.71L5.41 13H10c.55 0 1-.45 1-1v-1.17l-.83-.83H6zm9-10H6c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'];
var svgPaths20 = ['M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 001.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z'];
var ChatIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "chat"
  }, props));
}));
exports.ChatIcon = ChatIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvQ2hhdEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJDaGF0SWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLGtRQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQix3UUFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ1QsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFEUztBQUFBLENBQVgsQ0FEc0IsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNNiAxMGMtMS4xIDAtMi0uOS0yLTJWM0gxYy0uNTUgMC0xIC40NS0xIDF2OGMwIC41NS40NSAxIDEgMXYyYTEuMDAzIDEuMDAzIDAgMDAxLjcxLjcxTDUuNDEgMTNIMTBjLjU1IDAgMS0uNDUgMS0xdi0xLjE3bC0uODMtLjgzSDZ6bTktMTBINmMtLjU1IDAtMSAuNDUtMSAxdjdjMCAuNTUuNDUgMSAxIDFoNC41OWwyLjcxIDIuNzFjLjE3LjE4LjQyLjI5LjcuMjkuNTUgMCAxLS40NSAxLTFWOWMuNTUgMCAxLS40NSAxLTFWMWMwLS41NS0uNDUtMS0xLTF6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xOSAwSDdjLS41NSAwLTEgLjQ1LTEgMXYxMGMwIC41NS40NSAxIDEgMWg1LjU5bDMuNzEgMy43MWMuMTcuMTguNDIuMjkuNy4yOS41NSAwIDEtLjQ1IDEtMXYtM2gxYy41NSAwIDEtLjQ1IDEtMVYxYzAtLjU1LS40NS0xLTEtMXpNNyAxM2MtMS4xIDAtMi0uOS0yLTJWNEgxYy0uNTUgMC0xIC40NS0xIDF2MTBjMCAuNTUuNDUgMSAxIDFoMXYzYTEuMDAzIDEuMDAzIDAgMDAxLjcxLjcxTDcuNDEgMTZIMTNjLjU1IDAgMS0uNDUgMS0xdi0uMTdMMTIuMTcgMTNIN3onXG5dXG5cbmV4cG9ydCBjb25zdCBDaGF0SWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IChcbiAgICA8SWNvblxuICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIG5hbWU9XCJjaGF0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApKVxuKVxuIl19