webpackHotUpdate("static/development/pages/people.js",{

/***/ "./ui/Page.js":
/*!********************!*\
  !*** ./ui/Page.js ***!
  \********************/
/*! exports provided: Page, ContentPage, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPage", function() { return ContentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./ui/theme.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./ui/Logo.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/andreypopp/Workspace/arrow/site/ui/Page.js";







function Wrapper(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children);
}

function Page(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1667694852", [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1667694852", [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1667694852", [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1667694852",
    css: "html,body{margin:0;background-color:".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, ";font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto, Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\", \"Segoe UI Symbol\";}.content p{color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";font-size:14pt;font-weight:500;margin-bottom:2em;}.content h2,.content h3,.content h4,.content h5{font-weight:900;color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";text-transform:uppercase;}a{color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";-webkit-text-decoration:none;text-decoration:none;}a:hover{background:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, ";-webkit-text-decoration:none;text-decoration:none;}.wrapper{margin:100px auto;padding:1em;}@media (min-width:800px){.wrapper{width:600px;padding:0em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvdy9zaXRlL3VpL1BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJ5QixBQUlvQixBQVEwQixBQVNuQixBQU1tQixBQUlLLEFBS3RCLEFBS0osU0FwQ2dDLEdBcUNoQyxJQXBCcUIsRUFldkIsTUFNWixNQUxGLEtBekJpQixBQWVNLEtBSWMsVUFsQm5CLENBU1MsSUFmTixXQU9ELFNBa0JHLENBVHZCLFFBUkEsQ0FhQSx3Q0FLQSw2RUF6QkEiLCJmaWxlIjoiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL2Fycm93L3NpdGUvdWkvUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPntjaGlsZHJlbn08L2Rpdj47XG59XG5cbmZ1bmN0aW9uIFBhZ2UocHJvcHM6IHsgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmd9O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgICAgICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsXG4gICAgICAgICAgICBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQgcCB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLnRleHRUaXRsZX07XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGgyLFxuICAgICAgICAuY29udGVudCBoMyxcbiAgICAgICAgLmNvbnRlbnQgaDQsXG4gICAgICAgIC5jb250ZW50IGg1IHtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0VGl0bGV9O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMudGV4dFRpdGxlfTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMudGV4dFRpdGxlfTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuYmd9O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8V3JhcHBlcj57cHJvcHMuY2hpbGRyZW59PC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDb250ZW50KHByb3BzOiB7IHN0eWxlPzogT2JqZWN0LCBjaGlsZHJlbj86IFJlYWN0Lk5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXtwcm9wcy5zdHlsZX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbnRlbnRQYWdlKHByb3BzOiB7IHN0eWxlPzogT2JqZWN0LCBjaGlsZHJlbj86IFJlYWN0Lk5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPExvZ28gd2lkdGg9ezEyMH0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRlbnQ+e3Byb3BzLmNoaWxkcmVufTwvQ29udGVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay1jb250YWluZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5iYWNrLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzZW07XG5cdFx0XHRcdFx0fVxuICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRjb2xvcjogJHtjb2xvcnMudGV4dFRpdGxlfTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWNrOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2NvbG9ycy50ZXh0VGl0bGV9O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7Y29sb3JzLmJnfTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmFja1wiPlxuICAgICAgICAgICAg4oaQIEdvIGJhY2tcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IHsgUGFnZSwgQ29udGVudFBhZ2UsIENvbnRlbnQgfTtcbiJdfQ== */\n/*@ sourceURL=/Users/andreypopp/Workspace/arrow/site/ui/Page.js */"),
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, props.children));
}

function Content(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "content",
    style: props.style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, props.children);
}

function ContentPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-1399659501" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1399659501",
    css: ".header.jsx-1399659501{margin-bottom:5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvdy9zaXRlL3VpL1BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZvQixBQUcrQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL2Fycm93L3NpdGUvdWkvUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPntjaGlsZHJlbn08L2Rpdj47XG59XG5cbmZ1bmN0aW9uIFBhZ2UocHJvcHM6IHsgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmd9O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgICAgICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsXG4gICAgICAgICAgICBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQgcCB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLnRleHRUaXRsZX07XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGgyLFxuICAgICAgICAuY29udGVudCBoMyxcbiAgICAgICAgLmNvbnRlbnQgaDQsXG4gICAgICAgIC5jb250ZW50IGg1IHtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0VGl0bGV9O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMudGV4dFRpdGxlfTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMudGV4dFRpdGxlfTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuYmd9O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8V3JhcHBlcj57cHJvcHMuY2hpbGRyZW59PC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDb250ZW50KHByb3BzOiB7IHN0eWxlPzogT2JqZWN0LCBjaGlsZHJlbj86IFJlYWN0Lk5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXtwcm9wcy5zdHlsZX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbnRlbnRQYWdlKHByb3BzOiB7IHN0eWxlPzogT2JqZWN0LCBjaGlsZHJlbj86IFJlYWN0Lk5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPExvZ28gd2lkdGg9ezEyMH0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRlbnQ+e3Byb3BzLmNoaWxkcmVufTwvQ29udGVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay1jb250YWluZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5iYWNrLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzZW07XG5cdFx0XHRcdFx0fVxuICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRjb2xvcjogJHtjb2xvcnMudGV4dFRpdGxlfTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWNrOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2NvbG9ycy50ZXh0VGl0bGV9O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7Y29sb3JzLmJnfTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmFja1wiPlxuICAgICAgICAgICAg4oaQIEdvIGJhY2tcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IHsgUGFnZSwgQ29udGVudFBhZ2UsIENvbnRlbnQgfTtcbiJdfQ== */\n/*@ sourceURL=/Users/andreypopp/Workspace/arrow/site/ui/Page.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    className: "jsx-1399659501",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 120,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2517895974", [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg]]]) + " " + "back-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2517895974",
    css: ".back-container.__jsx-style-dynamic-selector{margin-top:3em;}.back.__jsx-style-dynamic-selector{text-transform:uppercase;color:".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";font-weight:900;font-size:12pt;}.back.__jsx-style-dynamic-selector:hover{text-transform:uppercase;background:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, ";font-weight:900;font-size:12pt;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvdy9zaXRlL3VpL1BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZvQixBQUdzQixBQUdnQixBQU1BLGVBUmhDLFVBR29DLEFBTUssbUNBTHhCLEtBTW1CLFdBTHBCLGVBQ1gsU0FLWSxnQkFDRCxlQUNYIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvdy9zaXRlL3VpL1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj57Y2hpbGRyZW59PC9kaXY+O1xufVxuXG5mdW5jdGlvbiBQYWdlKHByb3BzOiB7IGNoaWxkcmVuPzogUmVhY3QuTm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmJnfTtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICAgICAgICAgIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLFxuICAgICAgICAgICAgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHAge1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0VGl0bGV9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoMixcbiAgICAgICAgLmNvbnRlbnQgaDMsXG4gICAgICAgIC5jb250ZW50IGg0LFxuICAgICAgICAuY29udGVudCBoNSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMudGV4dFRpdGxlfTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLnRleHRUaXRsZX07XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnRleHRUaXRsZX07XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmJnfTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPFdyYXBwZXI+e3Byb3BzLmNoaWxkcmVufTwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ29udGVudChwcm9wczogeyBzdHlsZT86IE9iamVjdCwgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDb250ZW50UGFnZShwcm9wczogeyBzdHlsZT86IE9iamVjdCwgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxMb2dvIHdpZHRoPXsxMjB9IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250ZW50Pntwcm9wcy5jaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stY29udGFpbmVyXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYmFjay1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogM2VtO1xuXHRcdFx0XHRcdH1cbiAgICAgICAgICAuYmFjayB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7Y29sb3JzLnRleHRUaXRsZX07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogOTAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFjazpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJHtjb2xvcnMudGV4dFRpdGxlfTtcblx0XHRcdFx0XHRcdGNvbG9yOiAke2NvbG9ycy5iZ307XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogOTAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhY2tcIj5cbiAgICAgICAgICAgIOKGkCBHbyBiYWNrXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCB7IFBhZ2UsIENvbnRlbnRQYWdlLCBDb250ZW50IH07XG4iXX0= */\n/*@ sourceURL=/Users/andreypopp/Workspace/arrow/site/ui/Page.js */"),
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2517895974", [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg]]]) + " " + "back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "\u2190 Go back"))));
}



/***/ })

})
//# sourceMappingURL=people.js.88e97c728fd34ea5af49.hot-update.js.map