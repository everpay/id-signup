"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UndoIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M4 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H3.41L4.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 4.47 0 4.72 0 5c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 6H11c1.66 0 3 1.34 3 3s-1.34 3-3 3H7v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'];
var svgPaths20 = ['M5 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9-9H3.41L5.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C.11 5.47 0 5.72 0 6c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L3.41 7H14c2.21 0 4 1.79 4 4s-1.79 4-4 4H9v2h5c3.31 0 6-2.69 6-6s-2.69-6-6-6z'];
var UndoIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "undo"
  }, props));
}));
exports.UndoIcon = UndoIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvVW5kb0ljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJVbmRvSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLHlRQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQix5UUFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ1QsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFEUztBQUFBLENBQVgsQ0FEc0IsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNNCAxMWMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTctN0gzLjQxTDQuNyAyLjcxYy4xOS0uMTguMy0uNDMuMy0uNzFhMS4wMDMgMS4wMDMgMCAwMC0xLjcxLS43MWwtMyAzQy4xMSA0LjQ3IDAgNC43MiAwIDVjMCAuMjguMTEuNTMuMjkuNzFsMyAzYTEuMDAzIDEuMDAzIDAgMDAxLjQyLTEuNDJMMy40MSA2SDExYzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzSDd2Mmg0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNNSAxNGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTktOUgzLjQxTDUuNyAyLjcxYy4xOS0uMTguMy0uNDMuMy0uNzFhMS4wMDMgMS4wMDMgMCAwMC0xLjcxLS43MWwtNCA0Qy4xMSA1LjQ3IDAgNS43MiAwIDZjMCAuMjguMTEuNTMuMjkuNzFsNCA0YTEuMDAzIDEuMDAzIDAgMDAxLjQyLTEuNDJMMy40MSA3SDE0YzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0SDl2Mmg1YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02eidcbl1cblxuZXhwb3J0IGNvbnN0IFVuZG9JY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cInVuZG9cIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpXG4pXG4iXX0=