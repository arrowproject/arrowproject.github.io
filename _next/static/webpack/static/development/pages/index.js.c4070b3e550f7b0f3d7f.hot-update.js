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
/* harmony import */ var _ui_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Page */ "./ui/Page.js");
/* harmony import */ var _ui_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Logo */ "./ui/Logo.js");
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/theme */ "./ui/theme.js");
/* harmony import */ var _content_WhoWeAre_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/WhoWeAre.mdx */ "./content/WhoWeAre.mdx");
/* harmony import */ var _content_Technology_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/Technology.mdx */ "./content/Technology.mdx");
var _jsxFileName = "/Users/andreypopp/Workspace/arrow/site/pages/index.js";







function Header(_ref) {
  var children = _ref.children;
  var style = {
    background: _ui_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].textTitle
  };
  var styleText = {
    display: "inline",
    margin: "0 20px",
    padding: "0 10px",
    color: _ui_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].textTitle,
    background: _ui_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].bg,
    fontSize: "28pt",
    textTransform: "uppercase",
    fontWeight: "900"
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: styleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, children));
}

function SubHeader(_ref2) {
  var children = _ref2.children;
  var style = {
    background: _ui_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].textTitle
  };
  var styleText = {
    display: "inline",
    margin: "0 20px",
    padding: "0 10px",
    color: _ui_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].textTitle,
    background: _ui_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].bg,
    fontSize: "28pt",
    textTransform: "uppercase",
    fontWeight: "900"
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: styleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, children));
}

function Section(_ref3) {
  var title = _ref3.title,
      children = _ref3.children;
  var style = {
    marginBottom: '6em',
    border: '1px solid #333',
    padding: '10px'
  };
  var styleBody = {
    fontSize: "14pt",
    fontWeight: "400",
    color: "#333",
    marginTop: 20
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "content",
    style: styleBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, children));
}

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      margin: "100px auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Who we are",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_content_WhoWeAre_mdx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Technology",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_content_Technology_mdx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
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
//# sourceMappingURL=index.js.c4070b3e550f7b0f3d7f.hot-update.js.map