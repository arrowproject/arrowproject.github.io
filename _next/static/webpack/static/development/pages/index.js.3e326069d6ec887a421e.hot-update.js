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
var _jsxFileName = "/Users/andreypopp/Workspace/arrow/site/pages/index.js";





function Header(_ref) {
  var children = _ref.children;
  var style = {
    background: _ui_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].textTitle
  };
  var styleText = {
    display: 'inline',
    margin: '0 20px',
    padding: '0 10px',
    color: _ui_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].textTitle,
    background: _ui_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].bg,
    fontSize: "16pt",
    textTransform: "uppercase",
    fontWeight: "900"
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: styleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, children));
}

function Section(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  var style = {
    marginBottom: 40
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
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: styleBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, children));
}

var whatWeDo = "\nA group of software engineers which like to work on challenging problems.\n\nWe\n".trim();

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      margin: "100px auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Who we are",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, whatWeDo), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Technology",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
//# sourceMappingURL=index.js.3e326069d6ec887a421e.hot-update.js.map