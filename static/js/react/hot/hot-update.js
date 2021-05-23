webpackHotUpdate("bundle",{

/***/ "./src/frontend/react/components/Oxygen/index.jsx":
/*!********************************************************!*\
  !*** ./src/frontend/react/components/Oxygen/index.jsx ***!
  \********************************************************/
/*! exports provided: OxygenListing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OxygenListing\", function() { return OxygenListing; });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-collapsible */ \"./node_modules/react-collapsible/dist/index.js\");\n/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _EditOxygen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EditOxygen */ \"./src/frontend/react/components/Oxygen/EditOxygen.jsx\");\n/* harmony import */ var _utils_dateTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/dateTime */ \"./src/frontend/react/utils/dateTime.js\");\n/* harmony import */ var _utils_dateTime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_utils_dateTime__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _CustomModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../CustomModal */ \"./src/frontend/react/components/CustomModal.jsx\");\n\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar OxygenListing = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(OxygenListing, _Component);\n\n  var _super = _createSuper(OxygenListing);\n\n  function OxygenListing() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, OxygenListing);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"state\", {\n      leads: null,\n      showNew: false\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(OxygenListing, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/oxygen\").then( /*#__PURE__*/function () {\n        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee(e) {\n          var leads;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return e.json();\n\n                case 2:\n                  leads = _context.sent;\n                  console.log(\"leads \", leads);\n\n                  _this2.setState({\n                    leads: lodash__WEBPACK_IMPORTED_MODULE_10___default.a.sortBy(leads, \"lastUpdated\").reverse()\n                  });\n\n                case 5:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }());\n    }\n  }, {\n    key: \"onsubmit\",\n    value: function onsubmit(d, p) {\n      var options = {\n        method: \"POST\",\n        body: JSON.stringify({\n          data: d,\n          person: p\n        }),\n        headers: {\n          \"Content-type\": \"application/json; charset=UTF-8\"\n        }\n      };\n      console.log(\"new oxygen lead \", d);\n      fetch(\"/oxygen\", options).then( /*#__PURE__*/function () {\n        var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee2(e) {\n          var m;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  _context2.next = 2;\n                  return e.json();\n\n                case 2:\n                  m = _context2.sent;\n                  alert(JSON.stringify(m));\n                  window.location.reload();\n\n                case 5:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2);\n        }));\n\n        return function (_x2) {\n          return _ref2.apply(this, arguments);\n        };\n      }())[\"catch\"](function (e) {\n        alert(e.toString());\n        window.location.reload();\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state = this.state,\n          leads = _this$state.leads,\n          showModal = _this$state.showModal;\n      var _this$props = this.props,\n          person = _this$props.person,\n          isAuthorized = _this$props.isAuthorized;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", null, isAuthorized && person && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_CustomModal__WEBPACK_IMPORTED_MODULE_15__[\"CustomModal\"], {\n        handleShow: function handleShow() {\n          _this3.setState({\n            showModal: true\n          });\n        },\n        handleClose: function handleClose() {\n          _this3.setState({\n            showModal: false\n          });\n        },\n        show: showModal,\n        buttonName: \"New\",\n        headerTitle: \"New Oxygen Lead\"\n      }, showModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_EditOxygen__WEBPACK_IMPORTED_MODULE_12__[\"OxygenForm\"], {\n        lead: {},\n        onsubmit: this.onsubmit,\n        person: person\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", null, leads && leads.map(function (e) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n          key: e._id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(OxygenLeadRow, {\n          oxygenData: e,\n          person: person,\n          isAuthorized: isAuthorized\n        }));\n      })));\n    }\n  }]);\n\n  return OxygenListing;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\nfunction OxygenLeadRow(_ref3) {\n  var oxygenData = _ref3.oxygenData,\n      isAuthorized = _ref3.isAuthorized,\n      person = _ref3.person;\n  var name = oxygenData.name,\n      address = oxygenData.address,\n      contact = oxygenData.contact,\n      lastUpdated = oxygenData.lastUpdated,\n      updatedBy = oxygenData.updatedBy;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n    style: {\n      fontSize: \"12px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_collapsible__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n      style: {\n        background: \"white\",\n        margin: \"2px\",\n        paddingLeft: \"10px\",\n        paddingTop: \"1px\",\n        paddingBottom: \"1px\"\n      }\n    }, \"\".concat(name, \", (\").concat(contact, \")\"))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n    style: {\n      marginLeft: \"10px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"p\", null, \"Address:- \".concat(address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"br\", null), \"LastUpdated:- \".concat(Object(_utils_dateTime__WEBPACK_IMPORTED_MODULE_13__[\"getDate\"])(lastUpdated)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"br\", null), \"Verified By:- \".concat(updatedBy)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", null, isAuthorized && person && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_EditOxygen__WEBPACK_IMPORTED_MODULE_12__[\"EditOxygen\"], {\n    oxygenData: oxygenData,\n    person: person\n  }))))));\n}\n\n//# sourceURL=webpack:///./src/frontend/react/components/Oxygen/index.jsx?");

/***/ })

})