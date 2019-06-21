webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../node_modules/ui/Content.js":
/*!*************************************!*\
  !*** ../node_modules/ui/Content.js ***!
  \*************************************/
/*! exports provided: Link, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "../node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "../node_modules/ui/Style.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link */ "../node_modules/ui/Link.js");
var _jsxFileName = "/Users/andreypopp/Workspace/andreypopp.com/node_modules/ui/Content.js";






var Link = function Link(_ref) {
  var href = _ref.href,
      children = _ref.children;

  var _handlePress = function _handlePress(e) {
    return Object(_Link__WEBPACK_IMPORTED_MODULE_5__["handlePress"])(e, href);
  };

  var style = _Style__WEBPACK_IMPORTED_MODULE_4__["useStyle"](function (theme) {
    return {
      color: theme.linkColor,
      backgroundColor: theme.backgroundHighlightedColor,
      paddingHorizontal: 2,
      fontWeight: '500'
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    accessibilityRole: "link",
    style: [style],
    href: href,
    onPress: _handlePress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, children);
};
var contentComponents = {
  a: Link
};
var Content = function Content(props) {
  var children = props.children,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? '12pt' : _props$fontSize;
  var theme = _Style__WEBPACK_IMPORTED_MODULE_4__["useTheme"]();
  var styles = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3434435205",
      dynamic: [fontSize, theme.textColor, fontSize, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.backgroundSecondaryColor, theme.textColor, theme.dimmedColor, theme.backgroundSecondaryColor],
      __self: this
    }, ".content{width:100%;}.content *{font-size:".concat(fontSize, ";line-height:1.4em;}.content p,.content h1,.content h2,.content h3,.content h4,.content h5,.content h6,.content ul,.content ol,.content li{color:").concat(theme.textColor, ";font-size:").concat(fontSize, ";font-weight:500;line-height:1.4em;}.content h1{color:").concat(theme.labelColor, ";font-size:20pt;}.content h2{color:").concat(theme.labelColor, ";font-size:18pt;}.content h3{color:").concat(theme.labelColor, ";font-size:18pt;}.content h4{color:").concat(theme.labelColor, ";font-size:16pt;}.content h5{color:").concat(theme.labelColor, ";font-size:14pt;}.content h6{color:").concat(theme.labelColor, ";font-size:12pt;}.content ul,.content ol{padding:0;padding-left:18px;}.content ul li{list-style-type:square;}.content li{padding:0;list-style-position:outside;}.content pre{line-height:1.1em;margin-top:1em;margin-bottom:1em;background-color:").concat(theme.backgroundSecondaryColor, ";color:").concat(theme.textColor, ";border-left:3px solid ").concat(theme.dimmedColor, ";padding-top:15px;padding-bottom:15px;padding-left:15px;}.content code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:2px;background-color:").concat(theme.backgroundSecondaryColor, ";}.content pre>code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:0;background-color:transparent;}.content em{font-weight:900;font-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hbmRyZXlwb3BwLmNvbS9ub2RlX21vZHVsZXMvdWkvQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3lCLEFBR3NCLEFBRzRCLEFBYUosQUFPQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFNekIsQUFJYSxBQUdiLEFBSVEsQUFXSCxBQU9BLEFBT0MsVUFuQ0UsQUFPVSxDQXhEOUIsSUF1RWtCLEFBT0EsQ0FPQSxFQXpCRCxLQVBqQixLQUhBLEdBc0J1QyxBQU9BLENBT3ZDLENBekJvQixFQTdDcUIsQUFPeEIsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEdBY2pCLENBdERvQixXQXFCcEIsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLENBa0JnRCxNQTFEaEQsU0FxRWMsQUFPRixRQS9ETSxFQWdFYSxFQVBrQixZQXhEN0IsT0E2Q2tCLFFBbUJ0QyxHQS9EQSxpQkF3REEsUUFYc0Qsb0RBQ25DLGlCQUNHLG9CQUNGLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvYW5kcmV5cG9wcC5jb20vbm9kZV9tb2R1bGVzL3VpL0NvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlLXdlYic7XG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuaW1wb3J0ICogYXMgU3R5bGUgZnJvbSAnLi9TdHlsZSc7XG5pbXBvcnQgeyBoYW5kbGVQcmVzcyB9IGZyb20gJy4vTGluayc7XG5cbmV4cG9ydCBsZXQgTGluayA9ICh7XG4gIGhyZWYsXG4gIGNoaWxkcmVuLFxufToge3xcbiAgaHJlZjogc3RyaW5nLFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSxcbnx9KSA9PiB7XG4gIGxldCBfaGFuZGxlUHJlc3MgPSAoZTogVUlFdmVudCkgPT4gaGFuZGxlUHJlc3MoZSwgaHJlZik7XG4gIGxldCBzdHlsZSA9IFN0eWxlLnVzZVN0eWxlKHRoZW1lID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmxpbmtDb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJhY2tncm91bmRIaWdobGlnaHRlZENvbG9yLFxuICAgIHBhZGRpbmdIb3Jpem9udGFsOiAyLFxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICB9KSk7XG4gIHJldHVybiAoXG4gICAgPFRleHRcbiAgICAgIGFjY2Vzc2liaWxpdHlSb2xlPVwibGlua1wiXG4gICAgICBzdHlsZT17W3N0eWxlXX1cbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICBvblByZXNzPXtfaGFuZGxlUHJlc3N9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGV4dD5cbiAgKTtcbn07XG5cbmxldCBjb250ZW50Q29tcG9uZW50cyA9IHtcbiAgYTogTGluayxcbn07XG5cbmV4cG9ydCBsZXQgQ29udGVudCA9IChwcm9wczoge3xcbiAgY2hpbGRyZW46IFJlYWN0Lk5vZGUsXG4gIGZvbnRTaXplPzogbnVtYmVyIHwgc3RyaW5nLFxufH0pID0+IHtcbiAgbGV0IHsgY2hpbGRyZW4sIGZvbnRTaXplID0gJzEycHQnIH0gPSBwcm9wcztcbiAgbGV0IHRoZW1lID0gU3R5bGUudXNlVGhlbWUoKTtcblxuICBsZXQgc3R5bGVzID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiAoXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgKiB7XG4gICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplfTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgcCxcbiAgICAgICAgLmNvbnRlbnQgaDEsXG4gICAgICAgIC5jb250ZW50IGgyLFxuICAgICAgICAuY29udGVudCBoMyxcbiAgICAgICAgLmNvbnRlbnQgaDQsXG4gICAgICAgIC5jb250ZW50IGg1LFxuICAgICAgICAuY29udGVudCBoNixcbiAgICAgICAgLmNvbnRlbnQgdWwsXG4gICAgICAgIC5jb250ZW50IG9sLFxuICAgICAgICAuY29udGVudCBsaSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6ICR7Zm9udFNpemV9O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQgaDEge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoMiB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGgzIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoNSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGg2IHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB1bCxcbiAgICAgICAgLmNvbnRlbnQgb2wge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHVsIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBsaSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHByZSB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMWVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5iYWNrZ3JvdW5kU2Vjb25kYXJ5Q29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLnRleHRDb2xvcn07XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAke3RoZW1lLmRpbW1lZENvbG9yfTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgY29kZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5iYWNrZ3JvdW5kU2Vjb25kYXJ5Q29sb3J9O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHByZSA+IGNvZGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBlbSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgKSxcbiAgICBbdGhlbWVdLFxuICApO1xuICByZXR1cm4gKFxuICAgIDxNRFhQcm92aWRlciBjb21wb25lbnRzPXtjb250ZW50Q29tcG9uZW50c30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICB7c3R5bGVzfVxuICAgIDwvTURYUHJvdmlkZXI+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/andreypopp/Workspace/andreypopp.com/node_modules/ui/Content.js */"));
  }, [theme]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: contentComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, children), styles);
};

/***/ })

})
//# sourceMappingURL=_app.js.b9bb8cd9ff357fefee09.hot-update.js.map