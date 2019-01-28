webpackHotUpdate("main",{

/***/ "./src/Components/ArticleModal.jsx":
/*!*****************************************!*\
  !*** ./src/Components/ArticleModal.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_lib_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/lib/Modal */ "./node_modules/react-bootstrap/lib/Modal.js");
/* harmony import */ var react_bootstrap_lib_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/lib/Button */ "./node_modules/react-bootstrap/lib/Button.js");
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/juge/Documents/Personal/jrss/src/Components/ArticleModal.jsx";





var ArticleModal = function ArticleModal(_ref) {
  var article = _ref.article,
      _ref$article = _ref.article,
      title = _ref$article.title,
      creator = _ref$article.creator,
      author = _ref$article.author,
      isoDate = _ref$article.isoDate,
      link = _ref$article.link,
      source = _ref$article.source,
      content = _ref$article.content,
      closeModal = _ref.closeModal,
      modalVisible = _ref.modalVisible;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    show: modalVisible,
    dialogClassName: "modal-90w",
    "aria-labelledby": "example-custom-modal-styling-title",
    style: {
      border: '1px solid red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
    id: "example-custom-modal-styling-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(content, {
    replace: function replace(domNode) {
      if (domNode.name && domNode.name === 'a') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, domNode.data);
      if (domNode.name && domNode.name === 'img') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "secondary",
    onClick: closeModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Close")));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleModal);

/***/ })

})
//# sourceMappingURL=main.ac55bfaa34dad45a3d35.hot-update.js.map