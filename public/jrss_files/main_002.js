(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/CSS/index.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/CSS/index.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: rgb(68, 86, 104);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  margin-top: 70px;\n  background-image: url(" + escape(__webpack_require__(/*! ../Images/cloud_bkgd.jpg */ "./src/Images/cloud_bkgd.jpg")) + ");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _Components_NavigationBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/NavigationBar */ "./src/Components/NavigationBar.jsx");
/* harmony import */ var _Components_FeedView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/FeedView */ "./src/Components/FeedView.jsx");
/* harmony import */ var _Components_ManageFeeds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/ManageFeeds */ "./src/Components/ManageFeeds.jsx");
/* harmony import */ var _Components_AddFeed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/AddFeed */ "./src/Components/AddFeed.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _Components_ArticleModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/ArticleModal */ "./src/Components/ArticleModal.jsx");







var _jsxFileName = "/Users/juge/Documents/Personal/jrss/src/App.js";










var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      feeds: {
        time: {
          displayName: 'time',
          url: 'https://feeds.feedburner.com/time/topstories?format=xml',
          tags: ['politics']
        },
        guardian: {
          displayName: 'Guardian',
          url: 'https://www.theguardian.com/world/rss',
          tags: ['politics']
        },
        verge: {
          displayName: 'Verge',
          url: 'https://www.theverge.com/rss/index.xml',
          tags: ['tech']
        },
        jezebel: {
          displayName: 'Jezebel',
          url: 'https://jezebel.com/rss',
          tags: ['culture']
        },
        stereogum: {
          displayName: 'Stereogum',
          url: 'https://www.stereogum.com/feed/',
          tags: ['music', 'culture']
        }
      },
      articles: [],
      loading: true,
      tags: ['music', 'culture', 'tech', 'politics'],
      modalVisible: false,
      modalArticle: null
    };

    _this.saveState = function () {
      localStorage.setItem('savedState', JSON.stringify(_this.state));
    };

    _this.fetchFeeds = function () {
      var feeds = _this.cloneFeeds();

      return Promise.all(Object.keys(feeds).map(function (feedName) {
        return Object(_utilities__WEBPACK_IMPORTED_MODULE_14__["rssParser"])(feeds, feedName).then(function (articles) {
          return feeds[feedName].articles = articles;
        }).catch(function (err) {
          return console.log("error caused by feed: ".concat(feedName, "\nInside fetchFeeds() .map:\n").concat(err));
        });
      })).then(function (articles) {
        var flattenedAndSortedArticles = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.flatten(articles).sort(function (a, b) {
          return a.isoDate < b.isoDate ? 1 : -1;
        });

        return _this.setState({
          articles: flattenedAndSortedArticles,
          loading: false
        });
      }).catch(function (err) {
        return console.log("fetchFeeds() error outside .map", err);
      });
    };

    _this.subscribeToFeed = function (feedName, feedUrl) {
      var feedTags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var formattedName = feedName.replace(/\s/g, '_').toLowerCase();

      var feeds = _this.cloneFeeds();

      feeds[formattedName] = {
        displayName: feedName,
        url: feedUrl,
        tags: feedTags
      };

      var newTags = _this.cloneTags();

      feedTags.forEach(function (tag) {
        if (!newTags.includes(tag.trim())) newTags.push(tag.trim());
      });

      _this.setState({
        feeds: feeds,
        tags: newTags
      });
    };

    _this.unsubscribeFromFeed =
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(feedName) {
        var newFeeds, filteredArticles;
        return _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newFeeds = _this.cloneFeeds();
                delete newFeeds[feedName];
                filteredArticles = _this.state.articles.filter(function (article) {
                  return article.feedName !== feedName;
                });
                _context.next = 5;
                return _this.setState({
                  feeds: newFeeds,
                  articles: filteredArticles
                });

              case 5:
                _this.removeRedundantTags();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.deleteTag =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(feedName, deletedTag) {
        var feeds;
        return _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                feeds = _this.cloneFeeds();
                feeds[feedName].tags = feeds[feedName].tags.filter(function (tag) {
                  return tag !== deletedTag;
                });
                _context2.next = 4;
                return _this.setState({
                  feeds: feeds
                });

              case 4:
                _this.removeRedundantTags();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.addTag = function (feedName, newTag) {
      var feeds = _this.cloneFeeds();

      var tags = _this.cloneTags();

      var tag = newTag.toLowerCase();

      if (!tags.includes(tag)) {
        tags.push(tag);
      }

      if (!feeds[feedName].tags.includes(tag)) {
        feeds[feedName].tags.push(tag);
      }

      _this.setState({
        feeds: feeds,
        tags: tags
      });
    };

    _this.cloneFeeds = function () {
      return JSON.parse(JSON.stringify(_this.state.feeds));
    };

    _this.cloneTags = function () {
      return JSON.parse(JSON.stringify(_this.state.tags));
    };

    _this.removeRedundantTags = function () {
      var currentlyUsedTags = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.flatten(Object.keys(_this.state.feeds).map(function (feed) {
        return _this.state.feeds[feed].tags;
      }));

      var filteredTags = _this.cloneTags().filter(function (tag) {
        return currentlyUsedTags.includes(tag);
      });

      _this.setState({
        tags: filteredTags
      });
    };

    _this.openModal = function (article) {
      _this.setState({
        modalVisible: true,
        modalArticle: article
      });
    };

    _this.closeModal = function () {
      _this.setState({
        modalVisible: false,
        modalArticle: null
      });
    };

    return _this;
  }

  Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          feeds = _this$state.feeds,
          tags = _this$state.tags,
          articles = _this$state.articles,
          loading = _this$state.loading,
          modalVisible = _this$state.modalVisible,
          modalArticle = _this$state.modalArticle;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_NavigationBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        feeds: feeds,
        tags: tags,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), modalVisible ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_ArticleModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
        article: modalArticle,
        closeModal: this.closeModal,
        modalVisible: modalVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_8__["Router"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_FeedView__WEBPACK_IMPORTED_MODULE_10__["default"], {
        path: "/",
        articles: articles,
        loading: loading,
        openModal: this.openModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_FeedView__WEBPACK_IMPORTED_MODULE_10__["default"], {
        path: "/feeds/:feedName",
        articles: articles,
        loading: loading,
        openModal: this.openModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_FeedView__WEBPACK_IMPORTED_MODULE_10__["default"], {
        path: "/tags/:tagName",
        articles: articles,
        loading: loading,
        openModal: this.openModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_ManageFeeds__WEBPACK_IMPORTED_MODULE_11__["default"], {
        path: "/settings/managefeeds",
        feeds: feeds,
        unsubscribeFromFeed: this.unsubscribeFromFeed,
        deleteTag: this.deleteTag,
        addTag: this.addTag,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_AddFeed__WEBPACK_IMPORTED_MODULE_12__["default"], {
        path: "/settings/addfeed",
        subscribeToFeed: this.subscribeToFeed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.saveState();
      if (JSON.stringify(this.state) !== JSON.stringify(prevState)) this.fetchFeeds();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var savedState = localStorage.getItem('savedState');

      if (savedState) {
        this.setState(JSON.parse(savedState));
      }

      this.fetchFeeds();
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/CSS/index.css":
/*!***************************!*\
  !*** ./src/CSS/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/CSS/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/CSS/index.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/CSS/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/AddFeed.jsx":
/*!************************************!*\
  !*** ./src/Components/AddFeed.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/lib/Form */ "./node_modules/react-bootstrap/lib/Form.js");
/* harmony import */ var react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/lib/Button */ "./node_modules/react-bootstrap/lib/Button.js");
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/lib/Card */ "./node_modules/react-bootstrap/lib/Card.js");
/* harmony import */ var react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/juge/Documents/Personal/jrss/src/Components/AddFeed.jsx";





var AddFeed =
/*#__PURE__*/
function (_Component) {
  Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddFeed, _Component);

  function AddFeed() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddFeed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AddFeed)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      formGroupFeedUrl: '',
      formGroupDisplayName: '',
      formGroupFeedTags: '',
      validated: false
    };
    return _this;
  }

  Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AddFeed, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var validated = this.state.validated;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_9___default.a, {
        bg: "dark",
        text: "light",
        border: "secondary",
        style: {
          textAlign: 'center',
          padding: '5px',
          width: '30vw'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a, {
        noValidate: true,
        validated: validated,
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Group, {
        controlId: "formGroupDisplayName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
        required: true,
        type: "text",
        placeholder: "enter name of feed",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Please enter a valid name.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Group, {
        controlId: "formGroupFeedUrl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "URL"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
        required: true,
        type: "url",
        placeholder: "enter url of rss feed",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Please enter a valid url.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Group, {
        controlId: "formGroupFeedTags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Tags"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
        type: "text",
        placeholder: "enter tags to categorise feed",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Optional. Seperate tags with commas")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "secondary",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Submit")));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var form = e.currentTarget;
      e.preventDefault();

      if (form.checkValidity() === false) {
        e.stopPropagation();
      }

      var _this$state = this.state,
          formGroupDisplayName = _this$state.formGroupDisplayName,
          formGroupFeedUrl = _this$state.formGroupFeedUrl,
          formGroupFeedTags = _this$state.formGroupFeedTags;
      this.setState({
        validated: true
      });
      this.props.subscribeToFeed(formGroupDisplayName, formGroupFeedUrl, formGroupFeedTags.split(','));
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _e$target = e.target,
          id = _e$target.id,
          value = _e$target.value;
      this.setState(Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, value));
    }
  }]);

  return AddFeed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddFeed);

/***/ }),

/***/ "./src/Components/ArticleDetails.jsx":
/*!*******************************************!*\
  !*** ./src/Components/ArticleDetails.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/lib/Card */ "./node_modules/react-bootstrap/lib/Card.js");
/* harmony import */ var react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/lib/Button */ "./node_modules/react-bootstrap/lib/Button.js");
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/juge/Documents/Personal/jrss/src/Components/ArticleDetails.jsx";






var ArticleDetails = function ArticleDetails(_ref) {
  var article = _ref.article,
      _ref$article = _ref.article,
      title = _ref$article.title,
      creator = _ref$article.creator,
      author = _ref$article.author,
      isoDate = _ref$article.isoDate,
      link = _ref$article.link,
      source = _ref$article.source,
      content = _ref$article.content,
      openModal = _ref.openModal;
  var image = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["imageExtractor"])(article);
  var parsedDate = new Date(isoDate);
  var date = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["dateParser"])(parsedDate);
  var time = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["timeParser"])(parsedDate);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      width: '90vw',
      margin: '5px',
      textAlign: 'center'
    },
    className: "feed-card",
    variant: "dark",
    bg: "dark",
    text: "light",
    border: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Header, {
    style: {
      gridColumnStart: '1',
      gridColumnEnd: '3'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
    style: {
      fontSize: '1.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Subtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, source)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '20% 80%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {
    src: image,
    style: {
      maxHeight: 'auto',
      maxWidth: '80%',
      gridColumnStart: '1',
      border: '1px solid grey',
      borderRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Text, {
    style: {
      gridColumnStart: '2',
      textAlign: 'left'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(content, {
    replace: function replace(domNode) {
      if (domNode.name && domNode.name === 'a') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, domNode.data);
      if (domNode.name && domNode.name === 'img') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: function onClick() {
      return openModal(article);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "read more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link,
    variant: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "go to site")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, creator || author, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), date, " ", time));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleDetails);

/***/ }),

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

/***/ }),

/***/ "./src/Components/FeedDetails.jsx":
/*!****************************************!*\
  !*** ./src/Components/FeedDetails.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/lib/Card */ "./node_modules/react-bootstrap/lib/Card.js");
/* harmony import */ var react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/lib/Button */ "./node_modules/react-bootstrap/lib/Button.js");
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/lib/Tooltip */ "./node_modules/react-bootstrap/lib/Tooltip.js");
/* harmony import */ var react_bootstrap_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_lib_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/lib/OverlayTrigger */ "./node_modules/react-bootstrap/lib/OverlayTrigger.js");
/* harmony import */ var react_bootstrap_lib_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_lib_ButtonToolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/lib/ButtonToolbar */ "./node_modules/react-bootstrap/lib/ButtonToolbar.js");
/* harmony import */ var react_bootstrap_lib_ButtonToolbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_ButtonToolbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/lib/Form */ "./node_modules/react-bootstrap/lib/Form.js");
/* harmony import */ var react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_lib_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/lib/Alert */ "./node_modules/react-bootstrap/lib/Alert.js");
/* harmony import */ var react_bootstrap_lib_Alert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Alert__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/juge/Documents/Personal/jrss/src/Components/FeedDetails.jsx";









var FeedDetails =
/*#__PURE__*/
function (_Component) {
  Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FeedDetails, _Component);

  function FeedDetails() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeedDetails);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FeedDetails)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      newTag: ''
    };
    return _this;
  }

  Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FeedDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$feed = _this$props.feed,
          displayName = _this$props$feed.displayName,
          url = _this$props$feed.url,
          tags = _this$props$feed.tags,
          unsubscribeFromFeed = _this$props.unsubscribeFromFeed,
          deleteTag = _this$props.deleteTag,
          feedName = _this$props.feedName;
      tags.sort();
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_6___default.a, {
        style: {
          width: '50vw',
          margin: '5px',
          textAlign: 'center'
        },
        className: "feed-card",
        variant: "dark",
        bg: "dark",
        text: "light",
        border: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_6___default.a.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_6___default.a.Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, displayName), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_6___default.a.Subtitle, {
        className: "mb-2 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_6___default.a.Link, {
        href: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, url))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_6___default.a.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_11___default.a, {
        style: {
          margin: '0 auto',
          width: '25%'
        },
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_11___default.a.Group, {
        controlId: "formTag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_11___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "New Tag:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Form__WEBPACK_IMPORTED_MODULE_11___default.a.Control, {
        type: "text",
        placeholder: "enter a tag!",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        value: this.state.newTag,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        variant: "secondary",
        type: "submit",
        style: {
          margin: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Add Tag"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Card__WEBPACK_IMPORTED_MODULE_6___default.a.Subtitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Current Tags:"), tags ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_ButtonToolbar__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, tags.length > 0 ? tags.map(function (t) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: t,
          placement: "top",
          overlay: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "tooltip-".concat(t),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, "remove ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, t), " tag"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
          variant: "outline-danger",
          size: "sm",
          style: {
            margin: '1px'
          },
          onClick: function onClick() {
            return deleteTag(feedName, t);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, t));
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Alert__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "dark",
        style: {
          margin: '0 auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "You haven't added any tags to this feed yet!")) : 'ERROR: WHY IS THIS HERE', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        variant: "danger",
        onClick: function onClick() {
          return unsubscribeFromFeed(feedName);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Unsubscribe")));
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var value = e.target.value;
      this.setState({
        newTag: value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.addTag(this.props.feedName, this.state.newTag);
      this.setState({
        newTag: ''
      });
    }
  }]);

  return FeedDetails;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FeedDetails);

/***/ }),

/***/ "./src/Components/FeedView.jsx":
/*!*************************************!*\
  !*** ./src/Components/FeedView.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading */ "./node_modules/react-loading/dist/react-loading.js");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ArticleDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleDetails */ "./src/Components/ArticleDetails.jsx");
var _jsxFileName = "/Users/juge/Documents/Personal/jrss/src/Components/FeedView.jsx";




var FeedView = function FeedView(_ref) {
  var articles = _ref.articles,
      loading = _ref.loading,
      feedName = _ref.feedName,
      tagName = _ref.tagName,
      openModal = _ref.openModal;
  var filteredArticles = articles.filter(function (article) {
    if (!article) return false;
    if (tagName) return article.feedTags.includes(tagName);
    if (feedName) return article.feedName === feedName;
    return true;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "article-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: 'spin',
    color: 'gray',
    height: 100,
    width: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }) : filteredArticles.map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ArticleDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: article.link,
      article: article,
      openModal: openModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FeedView);

/***/ }),

/***/ "./src/Components/ManageFeeds.jsx":
/*!****************************************!*\
  !*** ./src/Components/ManageFeeds.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeedDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedDetails */ "./src/Components/FeedDetails.jsx");
var _jsxFileName = "/Users/juge/Documents/Personal/jrss/src/Components/ManageFeeds.jsx";



var ManageFeeds = function ManageFeeds(_ref) {
  var feeds = _ref.feeds,
      unsubscribeFromFeed = _ref.unsubscribeFromFeed,
      deleteTag = _ref.deleteTag,
      addTag = _ref.addTag;
  var feedsArr = Object.keys(feeds).sort();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "settingsCards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, feedsArr.map(function (feed) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FeedDetails__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: feed,
      feedName: feed,
      feed: feeds[feed],
      unsubscribeFromFeed: unsubscribeFromFeed,
      deleteTag: deleteTag,
      addTag: addTag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ManageFeeds);

/***/ }),

/***/ "./src/Components/NavigationBar.jsx":
/*!******************************************!*\
  !*** ./src/Components/NavigationBar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/lib/Navbar */ "./node_modules/react-bootstrap/lib/Navbar.js");
/* harmony import */ var react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/lib/Nav */ "./node_modules/react-bootstrap/lib/Nav.js");
/* harmony import */ var react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/lib/NavDropdown */ "./node_modules/react-bootstrap/lib/NavDropdown.js");
/* harmony import */ var react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_lib_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/lib/Container */ "./node_modules/react-bootstrap/lib/Container.js");
/* harmony import */ var react_bootstrap_lib_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Container__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/juge/Documents/Personal/jrss/src/Components/NavigationBar.jsx";






var NavigationBar = function NavigationBar(_ref) {
  var feeds = _ref.feeds,
      tags = _ref.tags;
  var feedsArr = Object.keys(feeds).sort();
  tags.sort();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "NavigationBar",
    variant: "dark",
    bg: "dark",
    fixed: "top",
    style: {
      borderBottom: '1px solid grey'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Brand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "jrss"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
    "aria-controls": "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "front page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "tags",
    id: "tagsDropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      key: tag,
      href: "/tags/".concat(tag),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, tag);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "feeds",
    id: "FeedsDropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, feedsArr.map(function (feed) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      key: feed,
      href: "/feeds/".concat(feed),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, feeds[feed].displayName);
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "manageFeeds",
    href: "/settings/managefeeds",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "manage feeds"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "addFeed",
    href: "/settings/addfeed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "add feed")))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ }),

/***/ "./src/Images/cloud_bkgd.jpg":
/*!***********************************!*\
  !*** ./src/Images/cloud_bkgd.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cloud_bkgd.3b678cf6.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CSS_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSS/index.css */ "./src/CSS/index.css");
/* harmony import */ var _CSS_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CSS_index_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/juge/Documents/Personal/jrss/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: rssParser, imageExtractor, dateParser, timeParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rssParser", function() { return rssParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageExtractor", function() { return imageExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateParser", function() { return dateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeParser", function() { return timeParser; });
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rss-parser */ "./node_modules/rss-parser/index.js");
/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rss_parser__WEBPACK_IMPORTED_MODULE_2__);



var rssParser =
/*#__PURE__*/
function () {
  var _ref = Object(_Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(feeds, feedName) {
    var parser, CORS_PROXY, obj, articles;
    return _Users_juge_Documents_Personal_jrss_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            parser = new rss_parser__WEBPACK_IMPORTED_MODULE_2___default.a({
              customFields: {
                item: [['media:content', 'media:content', {
                  keepArray: true
                }]]
              }
            });
            CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
            _context.next = 4;
            return parser.parseURL(CORS_PROXY + feeds[feedName].url);

          case 4:
            obj = _context.sent;
            articles = obj.items;
            return _context.abrupt("return", articles.map(function (article) {
              article.source = obj.title;
              article.feedName = feedName;
              article.feedTags = feeds[feedName].tags;
              return article;
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function rssParser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var imageExtractor = function imageExtractor(article) {
  if (article['media:content']) return article['media:content'][1] ? article['media:content'][1]['$'].url : article['media:content'][0].url;
  var srcRegex = /src="(\S+)"/;

  for (var key in article) {
    if (typeof article[key] === 'string' && article[key].match(srcRegex)) return article[key].match(srcRegex)[1];
  }
};
var dateParser = function dateParser(parsedDate) {
  var m = (parsedDate.getMonth() + 1).toString();
  var d = parsedDate.getDate().toString();
  var y = parsedDate.getFullYear();
  return "".concat(d.length === 1 ? "0".concat(d) : d, "/").concat(m.length === 1 ? "0".concat(m) : m, "/").concat(y);
};
var timeParser = function timeParser(parsedDate) {
  var h = parsedDate.getHours();
  var mi = parsedDate.getMinutes().toString();
  return "".concat(h, ":").concat(mi.length === 1 ? "0".concat(mi) : mi);
};

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/juge/Documents/Personal/jrss/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/juge/Documents/Personal/jrss/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map