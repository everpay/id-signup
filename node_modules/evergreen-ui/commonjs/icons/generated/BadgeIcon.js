"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadgeIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M13.36 4.59c-.15-1.13.5-2.01 1.1-2.87L13.43.53c-1.72.88-4.12.65-5.63-.53-1.51 1.18-3.91 1.41-5.63.52l-1.03 1.2c.61.86 1.25 1.74 1.1 2.87-.3 2.29-2.45 4.17-1.32 6.68.45 1.14 1.44 1.9 2.72 2.2 1.56.36 3.52.72 4.16 2.53.64-1.81 2.6-2.16 4.16-2.54 1.28-.3 2.27-1.06 2.72-2.2 1.12-2.5-1.03-4.38-1.32-6.67z'];
var svgPaths20 = ['M16.94 5.73c-.19-1.41.62-2.52 1.38-3.59L17.03.65C14.89 1.76 11.88 1.48 10 0 8.12 1.48 5.11 1.76 2.97.65L1.68 2.14c.76 1.07 1.57 2.18 1.38 3.59C2.68 8.59 0 10.94 1.4 14.08c.56 1.43 1.81 2.37 3.4 2.75 1.95.46 4.4.91 5.2 3.17.8-2.26 3.25-2.71 5.2-3.17 1.6-.38 2.84-1.32 3.4-2.75 1.4-3.14-1.28-5.49-1.66-8.35z'];
var BadgeIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "badge"
  }, props));
}));
exports.BadgeIcon = BadgeIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvQmFkZ2VJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiQmFkZ2VJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsOFNBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLG1UQURpQixDQUFuQjtBQUlPLElBQU1DLFNBQVMsR0FBRyxpQkFDdkIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUR1QixDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00xMy4zNiA0LjU5Yy0uMTUtMS4xMy41LTIuMDEgMS4xLTIuODdMMTMuNDMuNTNjLTEuNzIuODgtNC4xMi42NS01LjYzLS41My0xLjUxIDEuMTgtMy45MSAxLjQxLTUuNjMuNTJsLTEuMDMgMS4yYy42MS44NiAxLjI1IDEuNzQgMS4xIDIuODctLjMgMi4yOS0yLjQ1IDQuMTctMS4zMiA2LjY4LjQ1IDEuMTQgMS40NCAxLjkgMi43MiAyLjIgMS41Ni4zNiAzLjUyLjcyIDQuMTYgMi41My42NC0xLjgxIDIuNi0yLjE2IDQuMTYtMi41NCAxLjI4LS4zIDIuMjctMS4wNiAyLjcyLTIuMiAxLjEyLTIuNS0xLjAzLTQuMzgtMS4zMi02LjY3eidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMTYuOTQgNS43M2MtLjE5LTEuNDEuNjItMi41MiAxLjM4LTMuNTlMMTcuMDMuNjVDMTQuODkgMS43NiAxMS44OCAxLjQ4IDEwIDAgOC4xMiAxLjQ4IDUuMTEgMS43NiAyLjk3LjY1TDEuNjggMi4xNGMuNzYgMS4wNyAxLjU3IDIuMTggMS4zOCAzLjU5QzIuNjggOC41OSAwIDEwLjk0IDEuNCAxNC4wOGMuNTYgMS40MyAxLjgxIDIuMzcgMy40IDIuNzUgMS45NS40NiA0LjQuOTEgNS4yIDMuMTcuOC0yLjI2IDMuMjUtMi43MSA1LjItMy4xNyAxLjYtLjM4IDIuODQtMS4zMiAzLjQtMi43NSAxLjQtMy4xNC0xLjI4LTUuNDktMS42Ni04LjM1eidcbl1cblxuZXhwb3J0IGNvbnN0IEJhZGdlSWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IChcbiAgICA8SWNvblxuICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIG5hbWU9XCJiYWRnZVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSlcbilcbiJdfQ==