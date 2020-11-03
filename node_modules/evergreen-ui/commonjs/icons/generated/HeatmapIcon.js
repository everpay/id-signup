"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeatmapIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M2 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3 4.5A2.5 2.5 0 0013.5 6c-.98 0-1.82.57-2.23 1.39-.6-.78-1.51-1.3-2.56-1.36.18-.49.29-.99.29-1.53C9 2.01 6.99 0 4.5 0S0 2.01 0 4.5 2.01 9 4.5 9c.19 0 .37-.03.56-.06-.03.19-.06.37-.06.56C5 11.43 6.57 13 8.5 13c1.63 0 2.98-1.11 3.37-2.62.44.38 1 .62 1.63.62A2.5 2.5 0 0016 8.5zM14.5 13c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'];
var svgPaths20 = ['M6 0a6 6 0 100 12A6 6 0 106 0z', 'M10.5 8a4.5 4.5 0 100 9 4.5 4.5 0 100-9z', 'M16.5 7a3.5 3.5 0 100 7 3.5 3.5 0 100-7zM18 16a2 2 0 100 4 2 2 0 100-4zM2.5 14a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM16.5 0a2.5 2.5 0 100 5 2.5 2.5 0 100-5z'];
var HeatmapIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "heatmap"
  }, props));
}));
exports.HeatmapIcon = HeatmapIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvSGVhdG1hcEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJIZWF0bWFwSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLHVjQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixnQ0FEaUIsRUFFakIsMENBRmlCLEVBR2pCLHlKQUhpQixDQUFuQjtBQU1PLElBQU1DLFdBQVcsR0FBRyxpQkFDekIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUR5QixDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00yIDExYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTEtN2MxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6bTMgNC41QTIuNSAyLjUgMCAwMDEzLjUgNmMtLjk4IDAtMS44Mi41Ny0yLjIzIDEuMzktLjYtLjc4LTEuNTEtMS4zLTIuNTYtMS4zNi4xOC0uNDkuMjktLjk5LjI5LTEuNTNDOSAyLjAxIDYuOTkgMCA0LjUgMFMwIDIuMDEgMCA0LjUgMi4wMSA5IDQuNSA5Yy4xOSAwIC4zNy0uMDMuNTYtLjA2LS4wMy4xOS0uMDYuMzctLjA2LjU2QzUgMTEuNDMgNi41NyAxMyA4LjUgMTNjMS42MyAwIDIuOTgtMS4xMSAzLjM3LTIuNjIuNDQuMzggMSAuNjIgMS42My42MkEyLjUgMi41IDAgMDAxNiA4LjV6TTE0LjUgMTNjLS44MyAwLTEuNS42Ny0xLjUgMS41cy42NyAxLjUgMS41IDEuNSAxLjUtLjY3IDEuNS0xLjUtLjY3LTEuNS0xLjUtMS41eidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNNiAwYTYgNiAwIDEwMCAxMkE2IDYgMCAxMDYgMHonLFxuICAnTTEwLjUgOGE0LjUgNC41IDAgMTAwIDkgNC41IDQuNSAwIDEwMC05eicsXG4gICdNMTYuNSA3YTMuNSAzLjUgMCAxMDAgNyAzLjUgMy41IDAgMTAwLTd6TTE4IDE2YTIgMiAwIDEwMCA0IDIgMiAwIDEwMC00ek0yLjUgMTRhMi41IDIuNSAwIDEwMCA1IDIuNSAyLjUgMCAxMDAtNXpNMTYuNSAwYTIuNSAyLjUgMCAxMDAgNSAyLjUgMi41IDAgMTAwLTV6J1xuXVxuXG5leHBvcnQgY29uc3QgSGVhdG1hcEljb24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiAoXG4gICAgPEljb25cbiAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBuYW1lPVwiaGVhdG1hcFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSlcbilcbiJdfQ==