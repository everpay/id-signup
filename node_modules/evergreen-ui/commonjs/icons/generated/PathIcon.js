"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M14.5 0h-13C.67 0 0 .67 0 1.5S.67 3 1.5 3H7v3H3.5C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9H7v3H5.5c-.83 0-1.5.67-1.5 1.5S4.67 15 5.5 15h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H9V9h3.5c.83 0 1.5-.67 1.5-1.5S13.33 6 12.5 6H9V3h5.5c.83 0 1.5-.67 1.5-1.5S15.33 0 14.5 0z'];
var svgPaths20 = ['M18 0H2C.9 0 0 .9 0 2s.9 2 2 2h7v4H4c-1.1 0-2 .9-2 2s.9 2 2 2h5v4H6c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-3v-4h5c1.1 0 2-.9 2-2s-.9-2-2-2h-5V4h7c1.1 0 2-.9 2-2s-.9-2-2-2z'];
var PathIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "path"
  }, props));
}));
exports.PathIcon = PathIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvUGF0aEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJQYXRoSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLHFRQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQiwyTEFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ1QsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFEUztBQUFBLENBQVgsQ0FEc0IsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNMTQuNSAwaC0xM0MuNjcgMCAwIC42NyAwIDEuNVMuNjcgMyAxLjUgM0g3djNIMy41QzIuNjcgNiAyIDYuNjcgMiA3LjVTMi42NyA5IDMuNSA5SDd2M0g1LjVjLS44MyAwLTEuNS42Ny0xLjUgMS41UzQuNjcgMTUgNS41IDE1aDVjLjgzIDAgMS41LS42NyAxLjUtMS41cy0uNjctMS41LTEuNS0xLjVIOVY5aDMuNWMuODMgMCAxLjUtLjY3IDEuNS0xLjVTMTMuMzMgNiAxMi41IDZIOVYzaDUuNWMuODMgMCAxLjUtLjY3IDEuNS0xLjVTMTUuMzMgMCAxNC41IDB6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xOCAwSDJDLjkgMCAwIC45IDAgMnMuOSAyIDIgMmg3djRINGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDJoNXY0SDZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yaC0zdi00aDVjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yaC01VjRoN2MxLjEgMCAyLS45IDItMnMtLjktMi0yLTJ6J1xuXVxuXG5leHBvcnQgY29uc3QgUGF0aEljb24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiAoXG4gICAgPEljb25cbiAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBuYW1lPVwicGF0aFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSlcbilcbiJdfQ==