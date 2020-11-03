"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThFilteredIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M10 10h3l1.78-2.226a1 1 0 00.22-.625V4.3l1-.9V14c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1h4.333L9 4.3V5H7v2h2v1H7v2h3zm-4 3v-2H2v2h4zm0-3V8H2v2h4zm0-3V5H2v2h4zm8 6v-2H7v2h7z', 'M15.48 0c.31 0 .52.26.52.57 0 .16-.06.3-.17.41l-2.86 2.73v2.63c0 .16-.06.3-.17.41l-.82 1.1c-.1.1-.25.17-.41.17-.31 0-.57-.26-.57-.57V3.71L8.17.98A.566.566 0 018 .57c0-.31.26-.57.57-.57h6.91z'];
var svgPaths20 = ['M17.333 10l1.435-1.722a1 1 0 00.232-.64V4.85l1-.9V18c0 .5-.5 1-1 1H1c-.6 0-1-.5-1-1V2c0-.5.4-1 1-1h6.722L12 4.85V6H8v3h4v1H8v3h10v-3h-.667zM7 17v-3H2v3h5zm0-4v-3H2v3h5zm0-4V6H2v3h5zm11 8v-3H8v3h10z', 'M19.35 0a.642.642 0 01.46 1.1l-3.03 3.03v2.95c0 .18-.07.34-.19.46l-1.28 1.29c-.11.1-.27.17-.45.17-.35 0-.64-.29-.64-.64V4.13L11.19 1.1a.642.642 0 01.45-1.1h7.71z'];
var ThFilteredIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "th-filtered"
  }, props));
}));
exports.ThFilteredIcon = ThFilteredIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvVGhGaWx0ZXJlZEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJUaEZpbHRlcmVkSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLG9MQURpQixFQUVqQixnTUFGaUIsQ0FBbkI7QUFJQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIsdU1BRGlCLEVBRWpCLG1LQUZpQixDQUFuQjtBQUtPLElBQU1DLGNBQWMsR0FBRyxpQkFDNUIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUQ0QixDQUF2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00xMCAxMGgzbDEuNzgtMi4yMjZhMSAxIDAgMDAuMjItLjYyNVY0LjNsMS0uOVYxNGMwIC42LS40IDEtMSAxSDFjLS42IDAtMS0uNC0xLTFWMmMwLS41LjQtMSAxLTFoNC4zMzNMOSA0LjNWNUg3djJoMnYxSDd2Mmgzem0tNCAzdi0ySDJ2Mmg0em0wLTNWOEgydjJoNHptMC0zVjVIMnYyaDR6bTggNnYtMkg3djJoN3onLFxuICAnTTE1LjQ4IDBjLjMxIDAgLjUyLjI2LjUyLjU3IDAgLjE2LS4wNi4zLS4xNy40MWwtMi44NiAyLjczdjIuNjNjMCAuMTYtLjA2LjMtLjE3LjQxbC0uODIgMS4xYy0uMS4xLS4yNS4xNy0uNDEuMTctLjMxIDAtLjU3LS4yNi0uNTctLjU3VjMuNzFMOC4xNy45OEEuNTY2LjU2NiAwIDAxOCAuNTdjMC0uMzEuMjYtLjU3LjU3LS41N2g2Ljkxeidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMTcuMzMzIDEwbDEuNDM1LTEuNzIyYTEgMSAwIDAwLjIzMi0uNjRWNC44NWwxLS45VjE4YzAgLjUtLjUgMS0xIDFIMWMtLjYgMC0xLS41LTEtMVYyYzAtLjUuNC0xIDEtMWg2LjcyMkwxMiA0Ljg1VjZIOHYzaDR2MUg4djNoMTB2LTNoLS42Njd6TTcgMTd2LTNIMnYzaDV6bTAtNHYtM0gydjNoNXptMC00VjZIMnYzaDV6bTExIDh2LTNIOHYzaDEweicsXG4gICdNMTkuMzUgMGEuNjQyLjY0MiAwIDAxLjQ2IDEuMWwtMy4wMyAzLjAzdjIuOTVjMCAuMTgtLjA3LjM0LS4xOS40NmwtMS4yOCAxLjI5Yy0uMTEuMS0uMjcuMTctLjQ1LjE3LS4zNSAwLS42NC0uMjktLjY0LS42NFY0LjEzTDExLjE5IDEuMWEuNjQyLjY0MiAwIDAxLjQ1LTEuMWg3Ljcxeidcbl1cblxuZXhwb3J0IGNvbnN0IFRoRmlsdGVyZWRJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cInRoLWZpbHRlcmVkXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApKVxuKVxuIl19