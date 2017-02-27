/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    app.get('/', _todo2.default);
    app.get('/square', _main2.default);
};

var _main = __webpack_require__(12);

var _main2 = _interopRequireDefault(_main);

var _todo = __webpack_require__(13);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_PureComponent) {
    _inherits(Form, _PureComponent);

    function Form(props, context) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props, context));

        _this.state = {
            text: ''
        };
        _this.handlerChange = _this.handlerChange.bind(_this);
        _this.handlerAdd = _this.handlerAdd.bind(_this);
        return _this;
    }

    _createClass(Form, [{
        key: 'handlerChange',
        value: function handlerChange(e) {
            this.setState({
                text: e.target.value
            });
        }
    }, {
        key: 'handlerAdd',
        value: function handlerAdd() {
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'form' },
                _react2.default.createElement('input', { type: 'text', onChange: this.handlerChange, value: this.state.text }),
                _react2.default.createElement(
                    'button',
                    { onClick: this.handlerAdd },
                    'add'
                )
            );
        }
    }]);

    return Form;
}(_react.PureComponent);

Form.propTypes = {
    onAdd: _react.PropTypes.func.isRequired
};
Form.defaultProps = {
    className: 'Form'
};
exports.default = Form;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_PureComponent) {
    _inherits(Item, _PureComponent);

    function Item(props, context) {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props, context));

        _this.handlerRemove = _this.handlerRemove.bind(_this);
        return _this;
    }

    _createClass(Item, [{
        key: "handlerRemove",
        value: function handlerRemove() {
            if (this.props.onRemove) {
                this.props.onRemove(this.props.id);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var children = this.props.children;

            return _react2.default.createElement(
                "li",
                { className: "item" },
                children,
                _react2.default.createElement(
                    "button",
                    { onClick: this.handlerRemove },
                    "X"
                )
            );
        }
    }]);

    return Item;
}(_react.PureComponent);

Item.propTypes = {
    onRemove: _react.PropTypes.func,
    id: _react.PropTypes.number
};
exports.default = Item;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _item = __webpack_require__(7);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_PureComponent) {
    _inherits(List, _PureComponent);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'ul',
                null,
                this.props.list.map(function (item, index) {
                    return _react2.default.createElement(
                        _item2.default,
                        { onRemove: _this2.props.onRemove, key: index, id: index },
                        item
                    );
                })
            );
        }
    }]);

    return List;
}(_react.PureComponent);

List.defaultProps = {
    list: _react.PropTypes.list,
    onRemove: _react.PropTypes.func
};
exports.default = List;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 A simple component that doubles in size on click
 */
var Square = function (_PureComponent) {
    _inherits(Square, _PureComponent);

    function Square(props, context) {
        _classCallCheck(this, Square);

        var _this = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, props, context));

        _this.state = {
            size: _this.props.size
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Square, [{
        key: "handleClick",
        value: function handleClick() {
            if (this.state.size === this.props.size) {
                this.setState({ size: this.props.size * 2 });
            } else {
                this.setState({ size: this.props.size });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", {
                onClick: this.handleClick,
                style: {
                    width: this.state.size,
                    height: this.state.size,
                    backgroundColor: this.props.color
                } });
        }
    }]);

    return Square;
}(_react.PureComponent);

Square.defaultProps = {
    size: 100,
    color: "#D1ECE7"
};
exports.default = Square;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _square = __webpack_require__(9);

var _square2 = _interopRequireDefault(_square);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// A very simple page with a square on it.
var HomePage = function (_PureComponent) {
    _inherits(HomePage, _PureComponent);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_square2.default, this.props);
        }
    }]);

    return HomePage;
}(_react.PureComponent);

exports.default = HomePage;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(8);

var _list2 = _interopRequireDefault(_list);

var _form = __webpack_require__(6);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// A very simple page with a square on it.
var Inner = function (_PureComponent) {
    _inherits(Inner, _PureComponent);

    function Inner(props, context) {
        _classCallCheck(this, Inner);

        var _this = _possibleConstructorReturn(this, (Inner.__proto__ || Object.getPrototypeOf(Inner)).call(this, props, context));

        _this.state = {
            list: props.list
        };
        _this.handlerAdd = _this.handlerAdd.bind(_this);
        _this.handlerRemove = _this.handlerRemove.bind(_this);
        return _this;
    }

    _createClass(Inner, [{
        key: 'handlerAdd',
        value: function handlerAdd(text) {
            this.setState({
                list: this.state.list.concat(text)
            });
        }
    }, {
        key: 'handlerRemove',
        value: function handlerRemove(id) {
            this.state.list.splice(id, 1);
            this.setState({
                list: this.state.list.slice()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_list2.default, { list: this.state.list, onRemove: this.handlerRemove }),
                _react2.default.createElement(_form2.default, { onAdd: this.handlerAdd })
            );
        }
    }]);

    return Inner;
}(_react.PureComponent);

Inner.propTypes = {
    list: _react.PropTypes.array
};
Inner.defaultProps = {
    list: []
};
exports.default = Inner;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    var props = _SquareModel2.default.getSize();
    var html = _server2.default.renderToString(_react2.default.createElement(_squarePage2.default, props));

    res.render('square', { reactOutput: html, initData: JSON.stringify(props) });
};

var _squarePage = __webpack_require__(10);

var _squarePage2 = _interopRequireDefault(_squarePage);

var _SquareModel = __webpack_require__(14);

var _SquareModel2 = _interopRequireDefault(_SquareModel);

var _server = __webpack_require__(1);

var _server2 = _interopRequireDefault(_server);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    var props = _TodoModel2.default.getList();
    var html = _server2.default.renderToString(_react2.default.createElement(_todoPage2.default, props));

    res.render('todo', { reactOutput: html, initData: JSON.stringify(props) });
};

var _todoPage = __webpack_require__(11);

var _todoPage2 = _interopRequireDefault(_todoPage);

var _TodoModel = __webpack_require__(15);

var _TodoModel2 = _interopRequireDefault(_TodoModel);

var _server = __webpack_require__(1);

var _server2 = _interopRequireDefault(_server);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    getSize: function getSize() {
        return {
            size: 210
        };
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    getList: function getList() {
        return {
            list: ['Купить хлеб', 'Купить колбасу', 'Купить маенез', 'Поесть']
        };
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _routes = __webpack_require__(2);

var _routes2 = _interopRequireDefault(_routes);

var _winston = __webpack_require__(5);

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Server
 */

var log = _winston2.default.loggers.get('server');
var app = (0, _express2.default)();

var config = {
    port: 8000
};

// views
app.set('views', _path2.default.join(__dirname, 'view'));
app.set('view engine', 'ejs');

// routing and static files
(0, _routes2.default)(app);
app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

// start the server
app.listen(config.port, function (err) {
    log.info("Server started; listening on port " + config.port);
});
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ })
/******/ ]);