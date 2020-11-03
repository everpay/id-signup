"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M14 14H2V2h8.76l2-2H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6.24l-2 2V14zm1.4-14L9.7 5.7l2.1 2.1L16 3.6V0h-.6zM4 11.92c2.33.15 4.42.15 6.15-1.5.82-.83.82-2.25 0-3.08-.45-.38-.98-.6-1.5-.6-.53 0-1.05.22-1.43.6-.82.91-1.27 3.38-3.22 4.58z'];
var svgPaths20 = ['M18 18H2V2h12.3l2-2H1C.4 0 0 .4 0 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V7.7l-2 2V18zm1.2-18l-7.6 7.6 2.8 2.8L20 4.8V0h-.8zM4 15.9c3.1.2 5.9.2 8.2-2 1.1-1.1 1.1-3 0-4.1-.6-.5-1.3-.8-2-.8s-1.4.3-1.9.8C7.2 11 6.6 14.3 4 15.9z'];
var StyleIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "style"
  }, props));
}));
exports.StyleIcon = StyleIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU3R5bGVJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiU3R5bGVJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsNlBBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLDZOQURpQixDQUFuQjtBQUlPLElBQU1DLFNBQVMsR0FBRyxpQkFDdkIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUR1QixDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00xNCAxNEgyVjJoOC43NmwyLTJIMUMuNDUgMCAwIC40NSAwIDF2MTRjMCAuNTUuNDUgMSAxIDFoMTRjLjU1IDAgMS0uNDUgMS0xVjYuMjRsLTIgMlYxNHptMS40LTE0TDkuNyA1LjdsMi4xIDIuMUwxNiAzLjZWMGgtLjZ6TTQgMTEuOTJjMi4zMy4xNSA0LjQyLjE1IDYuMTUtMS41LjgyLS44My44Mi0yLjI1IDAtMy4wOC0uNDUtLjM4LS45OC0uNi0xLjUtLjYtLjUzIDAtMS4wNS4yMi0xLjQzLjYtLjgyLjkxLTEuMjcgMy4zOC0zLjIyIDQuNTh6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xOCAxOEgyVjJoMTIuM2wyLTJIMUMuNCAwIDAgLjQgMCAxdjE4YzAgLjYuNCAxIDEgMWgxOGMuNiAwIDEtLjQgMS0xVjcuN2wtMiAyVjE4em0xLjItMThsLTcuNiA3LjYgMi44IDIuOEwyMCA0LjhWMGgtLjh6TTQgMTUuOWMzLjEuMiA1LjkuMiA4LjItMiAxLjEtMS4xIDEuMS0zIDAtNC4xLS42LS41LTEuMy0uOC0yLS44cy0xLjQuMy0xLjkuOEM3LjIgMTEgNi42IDE0LjMgNCAxNS45eidcbl1cblxuZXhwb3J0IGNvbnN0IFN0eWxlSWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IChcbiAgICA8SWNvblxuICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIG5hbWU9XCJzdHlsZVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSlcbilcbiJdfQ==