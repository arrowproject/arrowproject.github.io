webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Page */ "./ui/Page.js");
/* harmony import */ var _ui_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Logo */ "./ui/Logo.js");
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/theme */ "./ui/theme.js");
/* harmony import */ var _content_WhoWeAre_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/WhoWeAre.mdx */ "./content/WhoWeAre.mdx");
/* harmony import */ var _content_Technology_mdx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/Technology.mdx */ "./content/Technology.mdx");
var _jsxFileName = "/Users/andreypopp/Workspace/arrow/site/pages/index.js";








function More(props) {
  var style = {
    display: "inline",
    fontWeight: "900",
    color: _ui_theme__WEBPACK_IMPORTED_MODULE_4__["colors"].textTitle,
    textTransform: "uppercase",
    textAlign: "right",
    fontSize: "10pt"
  };
  var title = (props.title || "learn more") + " →";
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, title));
}

function Header(_ref) {
  var children = _ref.children,
      href = _ref.href,
      title = _ref.title;
  var style = {};
  var styleText = {
    display: "inline",
    fontSize: "28pt",
    textTransform: "uppercase",
    color: _ui_theme__WEBPACK_IMPORTED_MODULE_4__["colors"].textTitle,
    fontWeight: "900"
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: styleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, children));
}

function Section(_ref2) {
  var title = _ref2.title,
      children = _ref2.children,
      href = _ref2.href,
      hrefTitle = _ref2.hrefTitle;
  var style = {
    marginLeft: '3em',
    marginBottom: "4em",
    padding: 10
  };
  var styleBody = {
    fontSize: "16pt",
    fontWeight: "500",
    color: _ui_theme__WEBPACK_IMPORTED_MODULE_4__["colors"].textTitle,
    marginTop: 20
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Header, {
    href: href,
    title: hrefTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "content",
    style: styleBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, children), href && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](More, {
    href: href,
    title: hrefTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }));
}

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      margin: "100px auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    href: "about",
    title: "Who we are",
    hrefTitle: "Learn more about us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_content_WhoWeAre_mdx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    href: "tech",
    title: "Technology",
    hrefTitle: "read about details behind our technology choice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_content_Technology_mdx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Projects",
    href: "projects",
    hrefTitle: "See the full list of what we are working on",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "TODO")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Team",
    href: "people",
    hrefTitle: "Meet the faces",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "TODO")));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2dffaa55b4ac3f7cd709.hot-update.js.map