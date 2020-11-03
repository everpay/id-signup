"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortAlphabeticalIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M6 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 002 12a1.003 1.003 0 00-.71 1.71l2 2c.19.18.44.29.71.29.28 0 .53-.11.71-.29l2-2c.18-.18.29-.43.29-.71a.99.99 0 00-1-1zm7.93-.95v-1.04H9.25v1.11h2.94L9 14.96V16h5.02v-1.11h-3.27l3.18-3.84zm-1.42-4.84l.62 1.78H15L11.94.01H10.1L7 7.99h1.81l.64-1.78h3.06zm-1.52-4.24h.02l1.03 2.93H9.92l1.07-2.93z'];
var svgPaths20 = ['M8 15c-.28 0-.53.11-.71.29L6 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L2.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 008 15zm8.89-.79v-1.22H11.3v1.3h3.51L11 18.78V20h5.99v-1.3h-3.91l3.81-4.49zM14.97 0h-1.95L9.01 11.01h1.89l.98-2.92h4.17l.98 2.92h1.96L14.97 0zm-2.59 6.63l1.58-4.74H14l1.57 4.74h-3.19z'];
var SortAlphabeticalIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "sort-alphabetical"
  }, props));
}));
exports.SortAlphabeticalIcon = SortAlphabeticalIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU29ydEFscGhhYmV0aWNhbEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJTb3J0QWxwaGFiZXRpY2FsSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLDhYQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixxWEFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxvQkFBb0IsR0FBRyxpQkFDbEMsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQURrQyxDQUE3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ002IDEyYy0uMjggMC0uNTMuMTEtLjcxLjI5bC0uMjkuM1Y5YzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjMuNTlsLS4yOS0uMjlBLjk2NS45NjUgMCAwMDIgMTJhMS4wMDMgMS4wMDMgMCAwMC0uNzEgMS43MWwyIDJjLjE5LjE4LjQ0LjI5LjcxLjI5LjI4IDAgLjUzLS4xMS43MS0uMjlsMi0yYy4xOC0uMTguMjktLjQzLjI5LS43MWEuOTkuOTkgMCAwMC0xLTF6bTcuOTMtLjk1di0xLjA0SDkuMjV2MS4xMWgyLjk0TDkgMTQuOTZWMTZoNS4wMnYtMS4xMWgtMy4yN2wzLjE4LTMuODR6bS0xLjQyLTQuODRsLjYyIDEuNzhIMTVMMTEuOTQuMDFIMTAuMUw3IDcuOTloMS44MWwuNjQtMS43OGgzLjA2em0tMS41Mi00LjI0aC4wMmwxLjAzIDIuOTNIOS45MmwxLjA3LTIuOTN6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ004IDE1Yy0uMjggMC0uNTMuMTEtLjcxLjI5TDYgMTYuNTl2LTUuNThjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NS41OEwyLjcxIDE1LjNjLS4xOC0uMTgtLjQzLS4zLS43MS0uM2ExLjAwMyAxLjAwMyAwIDAwLS43MSAxLjcxbDMgM2MuMTguMTguNDMuMjkuNzEuMjlzLjUzLS4xMS43MS0uMjlsMy0zQTEuMDAzIDEuMDAzIDAgMDA4IDE1em04Ljg5LS43OXYtMS4yMkgxMS4zdjEuM2gzLjUxTDExIDE4Ljc4VjIwaDUuOTl2LTEuM2gtMy45MWwzLjgxLTQuNDl6TTE0Ljk3IDBoLTEuOTVMOS4wMSAxMS4wMWgxLjg5bC45OC0yLjkyaDQuMTdsLjk4IDIuOTJoMS45NkwxNC45NyAwem0tMi41OSA2LjYzbDEuNTgtNC43NEgxNGwxLjU3IDQuNzRoLTMuMTl6J1xuXVxuXG5leHBvcnQgY29uc3QgU29ydEFscGhhYmV0aWNhbEljb24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiAoXG4gICAgPEljb25cbiAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBuYW1lPVwic29ydC1hbHBoYWJldGljYWxcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpXG4pXG4iXX0=