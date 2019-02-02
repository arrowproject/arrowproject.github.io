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
    color: _ui_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].textTitle,
    fontSize: "19pt",
    fontStyle: "italics",
    fontWeight: "700"
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
}

function Section(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  var style = {
    marginBottom: 40
  };
  var styleBody = {
    fontSize: "16pt",
    fontWeight: "300",
    color: '#333',
    marginTop: 20
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: styleBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, children));
}

var whatWeDo = "\nA group of software engineers.\n".trim();

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      margin: "100px auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Who we are",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, whatWeDo), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Technology",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    title: "Team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
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
//# sourceMappingURL=index.js.651e9508d54a1bdfba7d.hot-update.js.map