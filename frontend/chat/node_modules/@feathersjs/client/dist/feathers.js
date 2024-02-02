(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["feathers"] = factory();
	else
		root["feathers"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../authentication-client/lib/core.js":
/*!********************************************!*\
  !*** ../authentication-client/lib/core.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationClient = void 0;
var errors_1 = __webpack_require__(/*! @feathersjs/errors */ "../errors/lib/index.js");
var storage_1 = __webpack_require__(/*! ./storage */ "../authentication-client/lib/storage.js");
var OauthError = /*#__PURE__*/function (_errors_1$FeathersErr) {
  _inherits(OauthError, _errors_1$FeathersErr);
  function OauthError(message, data) {
    _classCallCheck(this, OauthError);
    return _callSuper(this, OauthError, [message, 'OauthError', 401, 'oauth-error', data]);
  }
  return _createClass(OauthError);
}(errors_1.FeathersError);
var getMatch = function getMatch(location, key) {
  var regex = new RegExp("(?:&?)".concat(key, "=([^&]*)"));
  var match = location.hash ? location.hash.match(regex) : null;
  if (match !== null) {
    var _match = _slicedToArray(match, 2),
      value = _match[1];
    return [value, regex];
  }
  return [null, regex];
};
var AuthenticationClient = /*#__PURE__*/function () {
  function AuthenticationClient(app, options) {
    _classCallCheck(this, AuthenticationClient);
    var socket = app.io;
    var storage = new storage_1.StorageWrapper(app.get('storage') || options.storage);
    this.app = app;
    this.options = options;
    this.authenticated = false;
    this.app.set('storage', storage);
    if (socket) {
      this.handleSocket(socket);
    }
  }
  _createClass(AuthenticationClient, [{
    key: "service",
    get: function get() {
      return this.app.service(this.options.path);
    }
  }, {
    key: "storage",
    get: function get() {
      return this.app.get('storage');
    }
  }, {
    key: "handleSocket",
    value: function handleSocket(socket) {
      var _this = this;
      // When the socket disconnects and we are still authenticated, try to reauthenticate right away
      // the websocket connection will handle timeouts and retries
      socket.on('disconnect', function () {
        if (_this.authenticated) {
          _this.reAuthenticate(true);
        }
      });
    }
    /**
     * Parse the access token or authentication error from the window location hash. Will remove it from the hash
     * if found.
     *
     * @param location The window location
     * @returns The access token if available, will throw an error if found, otherwise null
     */
  }, {
    key: "getFromLocation",
    value: function getFromLocation(location) {
      var _getMatch = getMatch(location, this.options.locationKey),
        _getMatch2 = _slicedToArray(_getMatch, 2),
        accessToken = _getMatch2[0],
        tokenRegex = _getMatch2[1];
      if (accessToken !== null) {
        location.hash = location.hash.replace(tokenRegex, '');
        return Promise.resolve(accessToken);
      }
      var _getMatch3 = getMatch(location, this.options.locationErrorKey),
        _getMatch4 = _slicedToArray(_getMatch3, 2),
        message = _getMatch4[0],
        errorRegex = _getMatch4[1];
      if (message !== null) {
        location.hash = location.hash.replace(errorRegex, '');
        return Promise.reject(new OauthError(decodeURIComponent(message)));
      }
      return Promise.resolve(null);
    }
    /**
     * Set the access token in storage.
     *
     * @param accessToken The access token to set
     * @returns
     */
  }, {
    key: "setAccessToken",
    value: function setAccessToken(accessToken) {
      return this.storage.setItem(this.options.storageKey, accessToken);
    }
    /**
     * Returns the access token from storage or the window location hash.
     *
     * @returns The access token from storage or location hash
     */
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this2 = this;
      return this.storage.getItem(this.options.storageKey).then(function (accessToken) {
        if (!accessToken && typeof window !== 'undefined' && window.location) {
          return _this2.getFromLocation(window.location);
        }
        return accessToken || null;
      });
    }
    /**
     * Remove the access token from storage
     * @returns The removed access token
     */
  }, {
    key: "removeAccessToken",
    value: function removeAccessToken() {
      return this.storage.removeItem(this.options.storageKey);
    }
    /**
     * Reset the internal authentication state. Usually not necessary to call directly.
     *
     * @returns null
     */
  }, {
    key: "reset",
    value: function reset() {
      this.app.set('authentication', null);
      this.authenticated = false;
      return Promise.resolve(null);
    }
  }, {
    key: "handleError",
    value: function handleError(error, type) {
      var _this3 = this;
      // For NotAuthenticated, PaymentError, Forbidden, NotFound, MethodNotAllowed, NotAcceptable
      // errors, remove the access token
      if (error.code > 400 && error.code < 408) {
        var promise = this.removeAccessToken().then(function () {
          return _this3.reset();
        });
        return type === 'logout' ? promise : promise.then(function () {
          return Promise.reject(error);
        });
      }
      return this.reset().then(function () {
        return Promise.reject(error);
      });
    }
    /**
     * Try to reauthenticate using the token from storage. Will do nothing if already authenticated unless
     * `force` is true.
     *
     * @param force force reauthentication with the server
     * @param strategy The name of the strategy to use. Defaults to `options.jwtStrategy`
     * @param authParams Additional authentication parameters
     * @returns The reauthentication result
     */
  }, {
    key: "reAuthenticate",
    value: function reAuthenticate() {
      var _this4 = this;
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var strategy = arguments.length > 1 ? arguments[1] : undefined;
      var authParams = arguments.length > 2 ? arguments[2] : undefined;
      // Either returns the authentication state or
      // tries to re-authenticate with the stored JWT and strategy
      var authPromise = this.app.get('authentication');
      if (!authPromise || force === true) {
        authPromise = this.getAccessToken().then(function (accessToken) {
          if (!accessToken) {
            return _this4.handleError(new errors_1.NotAuthenticated('No accessToken found in storage'), 'authenticate');
          }
          return _this4.authenticate({
            strategy: strategy || _this4.options.jwtStrategy,
            accessToken: accessToken
          }, authParams);
        });
        this.app.set('authentication', authPromise);
      }
      return authPromise;
    }
    /**
     * Authenticate using a specific strategy and data.
     *
     * @param authentication The authentication data
     * @param params Additional parameters
     * @returns The authentication result
     */
  }, {
    key: "authenticate",
    value: function authenticate(authentication, params) {
      var _this5 = this;
      if (!authentication) {
        return this.reAuthenticate();
      }
      var promise = this.service.create(authentication, params).then(function (authResult) {
        var accessToken = authResult.accessToken;
        _this5.authenticated = true;
        _this5.app.emit('login', authResult);
        _this5.app.emit('authenticated', authResult);
        return _this5.setAccessToken(accessToken).then(function () {
          return authResult;
        });
      }).catch(function (error) {
        return _this5.handleError(error, 'authenticate');
      });
      this.app.set('authentication', promise);
      return promise;
    }
    /**
     * Log out the current user and remove their token. Will do nothing
     * if not authenticated.
     *
     * @returns The log out result.
     */
  }, {
    key: "logout",
    value: function logout() {
      var _this6 = this;
      return Promise.resolve(this.app.get('authentication')).then(function () {
        return _this6.service.remove(null).then(function (authResult) {
          return _this6.removeAccessToken().then(function () {
            return _this6.reset();
          }).then(function () {
            _this6.app.emit('logout', authResult);
            return authResult;
          });
        });
      }).catch(function (error) {
        return _this6.handleError(error, 'logout');
      });
    }
  }]);
  return AuthenticationClient;
}();
exports.AuthenticationClient = AuthenticationClient;

/***/ }),

/***/ "../authentication-client/lib/hooks/authentication.js":
/*!************************************************************!*\
  !*** ../authentication-client/lib/hooks/authentication.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.authentication = void 0;
var commons_1 = __webpack_require__(/*! @feathersjs/commons */ "../commons/lib/index.js");
var authentication = function authentication() {
  return function (context, next) {
    var app = context.app,
      params = context.params,
      path = context.path,
      method = context.method,
      service = context.app.authentication;
    if ((0, commons_1.stripSlashes)(service.options.path) === path && method === 'create') {
      return next();
    }
    return Promise.resolve(app.get('authentication')).then(function (authResult) {
      if (authResult) {
        context.params = Object.assign({}, authResult, params);
      }
    }).then(next);
  };
};
exports.authentication = authentication;

/***/ }),

/***/ "../authentication-client/lib/hooks/index.js":
/*!***************************************************!*\
  !*** ../authentication-client/lib/hooks/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.populateHeader = exports.authentication = void 0;
var authentication_1 = __webpack_require__(/*! ./authentication */ "../authentication-client/lib/hooks/authentication.js");
Object.defineProperty(exports, "authentication", ({
  enumerable: true,
  get: function get() {
    return authentication_1.authentication;
  }
}));
var populate_header_1 = __webpack_require__(/*! ./populate-header */ "../authentication-client/lib/hooks/populate-header.js");
Object.defineProperty(exports, "populateHeader", ({
  enumerable: true,
  get: function get() {
    return populate_header_1.populateHeader;
  }
}));

/***/ }),

/***/ "../authentication-client/lib/hooks/populate-header.js":
/*!*************************************************************!*\
  !*** ../authentication-client/lib/hooks/populate-header.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.populateHeader = void 0;
var populateHeader = function populateHeader() {
  return function (context, next) {
    var app = context.app,
      accessToken = context.params.accessToken;
    var authentication = app.authentication;
    // Set REST header if necessary
    if (app.rest && accessToken) {
      var _authentication$optio = authentication.options,
        scheme = _authentication$optio.scheme,
        header = _authentication$optio.header;
      var authHeader = "".concat(scheme, " ").concat(accessToken);
      context.params.headers = Object.assign({}, _defineProperty({}, header, authHeader), context.params.headers);
    }
    return next();
  };
};
exports.populateHeader = populateHeader;

/***/ }),

/***/ "../authentication-client/lib/index.js":
/*!*********************************************!*\
  !*** ../authentication-client/lib/index.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaults = exports.defaultStorage = exports.hooks = exports.MemoryStorage = exports.AuthenticationClient = exports.getDefaultStorage = void 0;
var core_1 = __webpack_require__(/*! ./core */ "../authentication-client/lib/core.js");
Object.defineProperty(exports, "AuthenticationClient", ({
  enumerable: true,
  get: function get() {
    return core_1.AuthenticationClient;
  }
}));
var hooks = __importStar(__webpack_require__(/*! ./hooks */ "../authentication-client/lib/hooks/index.js"));
exports.hooks = hooks;
var storage_1 = __webpack_require__(/*! ./storage */ "../authentication-client/lib/storage.js");
Object.defineProperty(exports, "MemoryStorage", ({
  enumerable: true,
  get: function get() {
    return storage_1.MemoryStorage;
  }
}));
var getDefaultStorage = function getDefaultStorage() {
  try {
    return new storage_1.StorageWrapper(window.localStorage);
  } catch (error) {}
  return new storage_1.MemoryStorage();
};
exports.getDefaultStorage = getDefaultStorage;
exports.defaultStorage = (0, exports.getDefaultStorage)();
exports.defaults = {
  header: 'Authorization',
  scheme: 'Bearer',
  storageKey: 'feathers-jwt',
  locationKey: 'access_token',
  locationErrorKey: 'error',
  jwtStrategy: 'jwt',
  path: '/authentication',
  Authentication: core_1.AuthenticationClient,
  storage: exports.defaultStorage
};
var init = function init() {
  var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = Object.assign({}, exports.defaults, _options);
  var Authentication = options.Authentication;
  return function (app) {
    var authentication = new Authentication(app, options);
    app.authentication = authentication;
    app.authenticate = authentication.authenticate.bind(authentication);
    app.reAuthenticate = authentication.reAuthenticate.bind(authentication);
    app.logout = authentication.logout.bind(authentication);
    app.hooks([hooks.authentication(), hooks.populateHeader()]);
  };
};
exports["default"] = init;
if (true) {
  module.exports = Object.assign(init, module.exports);
}

/***/ }),

/***/ "../authentication-client/lib/storage.js":
/*!***********************************************!*\
  !*** ../authentication-client/lib/storage.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StorageWrapper = exports.MemoryStorage = void 0;
var MemoryStorage = /*#__PURE__*/function () {
  function MemoryStorage() {
    _classCallCheck(this, MemoryStorage);
    this.store = {};
  }
  _createClass(MemoryStorage, [{
    key: "getItem",
    value: function getItem(key) {
      return Promise.resolve(this.store[key]);
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      return Promise.resolve(this.store[key] = value);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      var value = this.store[key];
      delete this.store[key];
      return Promise.resolve(value);
    }
  }]);
  return MemoryStorage;
}();
exports.MemoryStorage = MemoryStorage;
var StorageWrapper = /*#__PURE__*/function () {
  function StorageWrapper(storage) {
    _classCallCheck(this, StorageWrapper);
    this.storage = storage;
  }
  _createClass(StorageWrapper, [{
    key: "getItem",
    value: function getItem(key) {
      var _a;
      return Promise.resolve((_a = this.storage) === null || _a === void 0 ? void 0 : _a.getItem(key));
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      var _a;
      return Promise.resolve((_a = this.storage) === null || _a === void 0 ? void 0 : _a.setItem(key, value));
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      var _a;
      return Promise.resolve((_a = this.storage) === null || _a === void 0 ? void 0 : _a.removeItem(key));
    }
  }]);
  return StorageWrapper;
}();
exports.StorageWrapper = StorageWrapper;

/***/ }),

/***/ "../commons/lib/debug.js":
/*!*******************************!*\
  !*** ../commons/lib/debug.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createDebug = exports.setDebug = exports.noopDebug = void 0;
var debuggers = {};
function noopDebug() {
  return function () {};
}
exports.noopDebug = noopDebug;
var defaultInitializer = noopDebug;
function setDebug(debug) {
  defaultInitializer = debug;
  Object.keys(debuggers).forEach(function (name) {
    debuggers[name] = debug(name);
  });
}
exports.setDebug = setDebug;
function createDebug(name) {
  if (!debuggers[name]) {
    debuggers[name] = defaultInitializer(name);
  }
  return function () {
    return debuggers[name].apply(debuggers, arguments);
  };
}
exports.createDebug = createDebug;

/***/ }),

/***/ "../commons/lib/index.js":
/*!*******************************!*\
  !*** ../commons/lib/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createSymbol = exports.isPromise = exports._ = exports.stripSlashes = void 0;
// Removes all leading and trailing slashes from a path
function stripSlashes(name) {
  return name.replace(/^(\/+)|(\/+)$/g, '');
}
exports.stripSlashes = stripSlashes;
// A set of lodash-y utility functions that use ES6
exports._ = {
  each: function each(obj, callback) {
    if (obj && typeof obj.forEach === 'function') {
      obj.forEach(callback);
    } else if (exports._.isObject(obj)) {
      Object.keys(obj).forEach(function (key) {
        return callback(obj[key], key);
      });
    }
  },
  some: function some(value, callback) {
    return Object.keys(value).map(function (key) {
      return [value[key], key];
    }).some(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        val = _ref2[0],
        key = _ref2[1];
      return callback(val, key);
    });
  },
  every: function every(value, callback) {
    return Object.keys(value).map(function (key) {
      return [value[key], key];
    }).every(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        val = _ref4[0],
        key = _ref4[1];
      return callback(val, key);
    });
  },
  keys: function keys(obj) {
    return Object.keys(obj);
  },
  values: function values(obj) {
    return exports._.keys(obj).map(function (key) {
      return obj[key];
    });
  },
  isMatch: function isMatch(obj, item) {
    return exports._.keys(item).every(function (key) {
      return obj[key] === item[key];
    });
  },
  isEmpty: function isEmpty(obj) {
    return exports._.keys(obj).length === 0;
  },
  isObject: function isObject(item) {
    return _typeof(item) === 'object' && !Array.isArray(item) && item !== null;
  },
  isObjectOrArray: function isObjectOrArray(value) {
    return _typeof(value) === 'object' && value !== null;
  },
  extend: function extend(first) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    return Object.assign.apply(Object, [first].concat(rest));
  },
  omit: function omit(obj) {
    var result = exports._.extend({}, obj);
    for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      keys[_key2 - 1] = arguments[_key2];
    }
    keys.forEach(function (key) {
      return delete result[key];
    });
    return result;
  },
  pick: function pick(source) {
    for (var _len3 = arguments.length, keys = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      keys[_key3 - 1] = arguments[_key3];
    }
    return keys.reduce(function (result, key) {
      if (source[key] !== undefined) {
        result[key] = source[key];
      }
      return result;
    }, {});
  },
  // Recursively merge the source object into the target object
  merge: function merge(target, source) {
    if (exports._.isObject(target) && exports._.isObject(source)) {
      Object.keys(source).forEach(function (key) {
        if (exports._.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          exports._.merge(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      });
    }
    return target;
  }
};
// Duck-checks if an object looks like a promise
function isPromise(result) {
  return exports._.isObject(result) && typeof result.then === 'function';
}
exports.isPromise = isPromise;
function createSymbol(name) {
  return typeof Symbol !== 'undefined' ? Symbol.for(name) : name;
}
exports.createSymbol = createSymbol;
__exportStar(__webpack_require__(/*! ./debug */ "../commons/lib/debug.js"), exports);

/***/ }),

/***/ "../errors/lib/index.js":
/*!******************************!*\
  !*** ../errors/lib/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var _excluded = ["message", "errors"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.convert = exports.errors = exports.Unavailable = exports.BadGateway = exports.NotImplemented = exports.GeneralError = exports.TooManyRequests = exports.Unprocessable = exports.LengthRequired = exports.Gone = exports.Conflict = exports.Timeout = exports.NotAcceptable = exports.MethodNotAllowed = exports.NotFound = exports.Forbidden = exports.PaymentError = exports.NotAuthenticated = exports.BadRequest = exports.FeathersError = void 0;
var FeathersError = /*#__PURE__*/function (_Error) {
  _inherits(FeathersError, _Error);
  function FeathersError(err, name, code, className, _data) {
    var _this;
    _classCallCheck(this, FeathersError);
    var msg = typeof err === 'string' ? err : 'Error';
    var properties = {
      name: name,
      code: code,
      className: className,
      type: 'FeathersError'
    };
    if (Array.isArray(_data)) {
      properties.data = _data;
    } else if (_typeof(err) === 'object' || _data !== undefined) {
      var _ref = err !== null && _typeof(err) === 'object' ? err : _data,
        message = _ref.message,
        errors = _ref.errors,
        rest = _objectWithoutProperties(_ref, _excluded);
      msg = message || msg;
      properties.errors = errors;
      properties.data = rest;
    }
    _this = _callSuper(this, FeathersError, [msg]);
    Object.assign(_assertThisInitialized(_this), properties);
    return _this;
  }
  _createClass(FeathersError, [{
    key: "toJSON",
    value: function toJSON() {
      var result = {
        name: this.name,
        message: this.message,
        code: this.code,
        className: this.className
      };
      if (this.data !== undefined) {
        result.data = this.data;
      }
      if (this.errors !== undefined) {
        result.errors = this.errors;
      }
      return result;
    }
  }]);
  return FeathersError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.FeathersError = FeathersError;
var BadRequest = /*#__PURE__*/function (_FeathersError) {
  _inherits(BadRequest, _FeathersError);
  function BadRequest(message, data) {
    _classCallCheck(this, BadRequest);
    return _callSuper(this, BadRequest, [message, 'BadRequest', 400, 'bad-request', data]);
  }
  return _createClass(BadRequest);
}(FeathersError);
exports.BadRequest = BadRequest;
// 401 - Not Authenticated
var NotAuthenticated = /*#__PURE__*/function (_FeathersError2) {
  _inherits(NotAuthenticated, _FeathersError2);
  function NotAuthenticated(message, data) {
    _classCallCheck(this, NotAuthenticated);
    return _callSuper(this, NotAuthenticated, [message, 'NotAuthenticated', 401, 'not-authenticated', data]);
  }
  return _createClass(NotAuthenticated);
}(FeathersError);
exports.NotAuthenticated = NotAuthenticated;
// 402 - Payment Error
var PaymentError = /*#__PURE__*/function (_FeathersError3) {
  _inherits(PaymentError, _FeathersError3);
  function PaymentError(message, data) {
    _classCallCheck(this, PaymentError);
    return _callSuper(this, PaymentError, [message, 'PaymentError', 402, 'payment-error', data]);
  }
  return _createClass(PaymentError);
}(FeathersError);
exports.PaymentError = PaymentError;
// 403 - Forbidden
var Forbidden = /*#__PURE__*/function (_FeathersError4) {
  _inherits(Forbidden, _FeathersError4);
  function Forbidden(message, data) {
    _classCallCheck(this, Forbidden);
    return _callSuper(this, Forbidden, [message, 'Forbidden', 403, 'forbidden', data]);
  }
  return _createClass(Forbidden);
}(FeathersError);
exports.Forbidden = Forbidden;
// 404 - Not Found
var NotFound = /*#__PURE__*/function (_FeathersError5) {
  _inherits(NotFound, _FeathersError5);
  function NotFound(message, data) {
    _classCallCheck(this, NotFound);
    return _callSuper(this, NotFound, [message, 'NotFound', 404, 'not-found', data]);
  }
  return _createClass(NotFound);
}(FeathersError);
exports.NotFound = NotFound;
// 405 - Method Not Allowed
var MethodNotAllowed = /*#__PURE__*/function (_FeathersError6) {
  _inherits(MethodNotAllowed, _FeathersError6);
  function MethodNotAllowed(message, data) {
    _classCallCheck(this, MethodNotAllowed);
    return _callSuper(this, MethodNotAllowed, [message, 'MethodNotAllowed', 405, 'method-not-allowed', data]);
  }
  return _createClass(MethodNotAllowed);
}(FeathersError);
exports.MethodNotAllowed = MethodNotAllowed;
// 406 - Not Acceptable
var NotAcceptable = /*#__PURE__*/function (_FeathersError7) {
  _inherits(NotAcceptable, _FeathersError7);
  function NotAcceptable(message, data) {
    _classCallCheck(this, NotAcceptable);
    return _callSuper(this, NotAcceptable, [message, 'NotAcceptable', 406, 'not-acceptable', data]);
  }
  return _createClass(NotAcceptable);
}(FeathersError);
exports.NotAcceptable = NotAcceptable;
// 408 - Timeout
var Timeout = /*#__PURE__*/function (_FeathersError8) {
  _inherits(Timeout, _FeathersError8);
  function Timeout(message, data) {
    _classCallCheck(this, Timeout);
    return _callSuper(this, Timeout, [message, 'Timeout', 408, 'timeout', data]);
  }
  return _createClass(Timeout);
}(FeathersError);
exports.Timeout = Timeout;
// 409 - Conflict
var Conflict = /*#__PURE__*/function (_FeathersError9) {
  _inherits(Conflict, _FeathersError9);
  function Conflict(message, data) {
    _classCallCheck(this, Conflict);
    return _callSuper(this, Conflict, [message, 'Conflict', 409, 'conflict', data]);
  }
  return _createClass(Conflict);
}(FeathersError);
exports.Conflict = Conflict;
// 410 - Gone
var Gone = /*#__PURE__*/function (_FeathersError10) {
  _inherits(Gone, _FeathersError10);
  function Gone(message, data) {
    _classCallCheck(this, Gone);
    return _callSuper(this, Gone, [message, 'Gone', 410, 'gone', data]);
  }
  return _createClass(Gone);
}(FeathersError);
exports.Gone = Gone;
// 411 - Length Required
var LengthRequired = /*#__PURE__*/function (_FeathersError11) {
  _inherits(LengthRequired, _FeathersError11);
  function LengthRequired(message, data) {
    _classCallCheck(this, LengthRequired);
    return _callSuper(this, LengthRequired, [message, 'LengthRequired', 411, 'length-required', data]);
  }
  return _createClass(LengthRequired);
}(FeathersError);
exports.LengthRequired = LengthRequired;
// 422 Unprocessable
var Unprocessable = /*#__PURE__*/function (_FeathersError12) {
  _inherits(Unprocessable, _FeathersError12);
  function Unprocessable(message, data) {
    _classCallCheck(this, Unprocessable);
    return _callSuper(this, Unprocessable, [message, 'Unprocessable', 422, 'unprocessable', data]);
  }
  return _createClass(Unprocessable);
}(FeathersError);
exports.Unprocessable = Unprocessable;
// 429 Too Many Requests
var TooManyRequests = /*#__PURE__*/function (_FeathersError13) {
  _inherits(TooManyRequests, _FeathersError13);
  function TooManyRequests(message, data) {
    _classCallCheck(this, TooManyRequests);
    return _callSuper(this, TooManyRequests, [message, 'TooManyRequests', 429, 'too-many-requests', data]);
  }
  return _createClass(TooManyRequests);
}(FeathersError);
exports.TooManyRequests = TooManyRequests;
// 500 - General Error
var GeneralError = /*#__PURE__*/function (_FeathersError14) {
  _inherits(GeneralError, _FeathersError14);
  function GeneralError(message, data) {
    _classCallCheck(this, GeneralError);
    return _callSuper(this, GeneralError, [message, 'GeneralError', 500, 'general-error', data]);
  }
  return _createClass(GeneralError);
}(FeathersError);
exports.GeneralError = GeneralError;
// 501 - Not Implemented
var NotImplemented = /*#__PURE__*/function (_FeathersError15) {
  _inherits(NotImplemented, _FeathersError15);
  function NotImplemented(message, data) {
    _classCallCheck(this, NotImplemented);
    return _callSuper(this, NotImplemented, [message, 'NotImplemented', 501, 'not-implemented', data]);
  }
  return _createClass(NotImplemented);
}(FeathersError);
exports.NotImplemented = NotImplemented;
// 502 - Bad Gateway
var BadGateway = /*#__PURE__*/function (_FeathersError16) {
  _inherits(BadGateway, _FeathersError16);
  function BadGateway(message, data) {
    _classCallCheck(this, BadGateway);
    return _callSuper(this, BadGateway, [message, 'BadGateway', 502, 'bad-gateway', data]);
  }
  return _createClass(BadGateway);
}(FeathersError);
exports.BadGateway = BadGateway;
// 503 - Unavailable
var Unavailable = /*#__PURE__*/function (_FeathersError17) {
  _inherits(Unavailable, _FeathersError17);
  function Unavailable(message, data) {
    _classCallCheck(this, Unavailable);
    return _callSuper(this, Unavailable, [message, 'Unavailable', 503, 'unavailable', data]);
  }
  return _createClass(Unavailable);
}(FeathersError);
exports.Unavailable = Unavailable;
exports.errors = {
  FeathersError: FeathersError,
  BadRequest: BadRequest,
  NotAuthenticated: NotAuthenticated,
  PaymentError: PaymentError,
  Forbidden: Forbidden,
  NotFound: NotFound,
  MethodNotAllowed: MethodNotAllowed,
  NotAcceptable: NotAcceptable,
  Timeout: Timeout,
  Conflict: Conflict,
  LengthRequired: LengthRequired,
  Unprocessable: Unprocessable,
  TooManyRequests: TooManyRequests,
  GeneralError: GeneralError,
  NotImplemented: NotImplemented,
  BadGateway: BadGateway,
  Unavailable: Unavailable,
  400: BadRequest,
  401: NotAuthenticated,
  402: PaymentError,
  403: Forbidden,
  404: NotFound,
  405: MethodNotAllowed,
  406: NotAcceptable,
  408: Timeout,
  409: Conflict,
  410: Gone,
  411: LengthRequired,
  422: Unprocessable,
  429: TooManyRequests,
  500: GeneralError,
  501: NotImplemented,
  502: BadGateway,
  503: Unavailable
};
function convert(error) {
  if (!error) {
    return error;
  }
  var FeathersError = exports.errors[error.name];
  var result = FeathersError ? new FeathersError(error.message, error.data) : new Error(error.message || error);
  if (_typeof(error) === 'object') {
    Object.assign(result, error);
  }
  return result;
}
exports.convert = convert;

/***/ }),

/***/ "../feathers/lib/application.js":
/*!**************************************!*\
  !*** ../feathers/lib/application.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Feathers = void 0;
var version_1 = __importDefault(__webpack_require__(/*! ./version */ "../feathers/lib/version.js"));
var events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
var commons_1 = __webpack_require__(/*! @feathersjs/commons */ "../commons/lib/index.js");
var hooks_1 = __webpack_require__(/*! @feathersjs/hooks */ "../../node_modules/@feathersjs/hooks/script/index.js");
var events_2 = __webpack_require__(/*! ./events */ "../feathers/lib/events.js");
var hooks_2 = __webpack_require__(/*! ./hooks */ "../feathers/lib/hooks.js");
var service_1 = __webpack_require__(/*! ./service */ "../feathers/lib/service.js");
var hooks_3 = __webpack_require__(/*! ./hooks */ "../feathers/lib/hooks.js");
var debug = (0, commons_1.createDebug)('@feathersjs/feathers');
var Feathers = /*#__PURE__*/function (_events_1$EventEmitte) {
  _inherits(Feathers, _events_1$EventEmitte);
  function Feathers() {
    var _this;
    _classCallCheck(this, Feathers);
    _this = _callSuper(this, Feathers);
    _this.services = {};
    _this.settings = {};
    _this.mixins = [hooks_2.hookMixin, events_2.eventMixin];
    _this.version = version_1.default;
    _this._isSetup = false;
    _this.registerHooks = (0, hooks_3.enableHooks)(_assertThisInitialized(_this));
    _this.registerHooks({
      around: [events_2.eventHook]
    });
    return _this;
  }
  _createClass(Feathers, [{
    key: "get",
    value: function get(name) {
      return this.settings[name];
    }
  }, {
    key: "set",
    value: function set(name, value) {
      this.settings[name] = value;
      return this;
    }
  }, {
    key: "configure",
    value: function configure(callback) {
      callback.call(this, this);
      return this;
    }
  }, {
    key: "defaultService",
    value: function defaultService(location) {
      throw new Error("Can not find service '".concat(location, "'"));
    }
  }, {
    key: "service",
    value: function service(location) {
      var path = (0, commons_1.stripSlashes)(location) || '/';
      var current = this.services.hasOwnProperty(path) ? this.services[path] : undefined;
      if (typeof current === 'undefined') {
        this.use(path, this.defaultService(path));
        return this.service(path);
      }
      return current;
    }
  }, {
    key: "_setup",
    value: function _setup() {
      var _this2 = this;
      this._isSetup = true;
      return Object.keys(this.services).reduce(function (current, path) {
        return current.then(function () {
          var service = _this2.service(path);
          if (typeof service.setup === 'function') {
            debug("Setting up service for `".concat(path, "`"));
            return service.setup(_this2, path);
          }
        });
      }, Promise.resolve()).then(function () {
        return _this2;
      });
    }
  }, {
    key: "setup",
    get: function get() {
      return this._setup;
    },
    set: function set(value) {
      this._setup = value[hooks_1.HOOKS] ? value : (0, hooks_1.hooks)(value, (0, hooks_1.middleware)().params('server').props({
        app: this
      }));
    }
  }, {
    key: "_teardown",
    value: function _teardown() {
      var _this3 = this;
      this._isSetup = false;
      return Object.keys(this.services).reduce(function (current, path) {
        return current.then(function () {
          var service = _this3.service(path);
          if (typeof service.teardown === 'function') {
            debug("Tearing down service for `".concat(path, "`"));
            return service.teardown(_this3, path);
          }
        });
      }, Promise.resolve()).then(function () {
        return _this3;
      });
    }
  }, {
    key: "teardown",
    get: function get() {
      return this._teardown;
    },
    set: function set(value) {
      this._teardown = value[hooks_1.HOOKS] ? value : (0, hooks_1.hooks)(value, (0, hooks_1.middleware)().params('server').props({
        app: this
      }));
    }
  }, {
    key: "use",
    value: function use(path, service, options) {
      var _this4 = this;
      if (typeof path !== 'string') {
        throw new Error("'".concat(path, "' is not a valid service path."));
      }
      var location = (0, commons_1.stripSlashes)(path) || '/';
      var subApp = service;
      var isSubApp = typeof subApp.service === 'function' && subApp.services;
      if (isSubApp) {
        Object.keys(subApp.services).forEach(function (subPath) {
          return _this4.use("".concat(location, "/").concat(subPath), subApp.service(subPath));
        });
        return this;
      }
      var protoService = (0, service_1.wrapService)(location, service, options);
      var serviceOptions = (0, service_1.getServiceOptions)(protoService);
      var _iterator = _createForOfIteratorHelper(service_1.protectedMethods),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          if (serviceOptions.methods.includes(name)) {
            throw new Error("'".concat(name, "' on service '").concat(location, "' is not allowed as a custom method name"));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      debug("Registering new service at `".concat(location, "`"));
      // Add all the mixins
      this.mixins.forEach(function (fn) {
        return fn.call(_this4, protoService, location, serviceOptions);
      });
      this.services[location] = protoService;
      // If we ran setup already, set this service up explicitly, this will not `await`
      if (this._isSetup && typeof protoService.setup === 'function') {
        debug("Setting up service for `".concat(location, "`"));
        protoService.setup(this, location);
      }
      return this;
    }
  }, {
    key: "unuse",
    value: function () {
      var _unuse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(location) {
        var path, service;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              path = (0, commons_1.stripSlashes)(location) || '/';
              service = this.services[path];
              if (!(service && typeof service.teardown === 'function')) {
                _context.next = 5;
                break;
              }
              _context.next = 5;
              return service.teardown(this, path);
            case 5:
              delete this.services[path];
              return _context.abrupt("return", service);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function unuse(_x) {
        return _unuse.apply(this, arguments);
      }
      return unuse;
    }()
  }, {
    key: "hooks",
    value: function hooks(hookMap) {
      var untypedMap = hookMap;
      if (untypedMap.before || untypedMap.after || untypedMap.error || untypedMap.around) {
        // regular hooks for all service methods
        this.registerHooks(untypedMap);
      } else if (untypedMap.setup || untypedMap.teardown) {
        // .setup and .teardown application hooks
        (0, hooks_1.hooks)(this, untypedMap);
      } else {
        // Other registration formats are just `around` hooks
        this.registerHooks({
          around: untypedMap
        });
      }
      return this;
    }
  }]);
  return Feathers;
}(events_1.EventEmitter);
exports.Feathers = Feathers;

/***/ }),

/***/ "../feathers/lib/declarations.js":
/*!***************************************!*\
  !*** ../feathers/lib/declarations.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "../feathers/lib/events.js":
/*!*********************************!*\
  !*** ../feathers/lib/events.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.eventMixin = exports.eventHook = void 0;
var events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
var service_1 = __webpack_require__(/*! ./service */ "../feathers/lib/service.js");
function eventHook(context, next) {
  var _ref = (0, service_1.getServiceOptions)(context.self),
    events = _ref.events;
  var defaultEvent = service_1.defaultEventMap[context.method] || null;
  context.event = defaultEvent;
  return next().then(function () {
    // Send the event only if the service does not do so already (indicated in the `events` option)
    // This is used for custom events and for client services receiving event from the server
    if (typeof context.event === 'string' && !events.includes(context.event)) {
      var results = Array.isArray(context.result) ? context.result : [context.result];
      results.forEach(function (element) {
        return context.self.emit(context.event, element, context);
      });
    }
  });
}
exports.eventHook = eventHook;
function eventMixin(service) {
  var isEmitter = typeof service.on === 'function' && typeof service.emit === 'function';
  if (!isEmitter) {
    Object.assign(service, events_1.EventEmitter.prototype);
  }
  return service;
}
exports.eventMixin = eventMixin;

/***/ }),

/***/ "../feathers/lib/hooks.js":
/*!********************************!*\
  !*** ../feathers/lib/hooks.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hookMixin = exports.FeathersHookManager = exports.createContext = exports.enableHooks = exports.collectHooks = exports.convertHookData = void 0;
var hooks_1 = __webpack_require__(/*! @feathersjs/hooks */ "../../node_modules/@feathersjs/hooks/script/index.js");
var service_1 = __webpack_require__(/*! ./service */ "../feathers/lib/service.js");
var types = ['before', 'after', 'error', 'around'];
var isType = function isType(value) {
  return types.includes(value);
};
// Converts different hook registration formats into the
// same internal format
function convertHookData(input) {
  var result = {};
  if (Array.isArray(input)) {
    result.all = input;
  } else if (_typeof(input) !== 'object') {
    result.all = [input];
  } else {
    for (var _i = 0, _Object$keys = Object.keys(input); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      var value = input[key];
      result[key] = Array.isArray(value) ? value : [value];
    }
  }
  return result;
}
exports.convertHookData = convertHookData;
function collectHooks(target, method) {
  var _target$__hooks = target.__hooks,
    collected = _target$__hooks.collected,
    collectedAll = _target$__hooks.collectedAll,
    around = _target$__hooks.around;
  return [].concat(_toConsumableArray(around.all || []), _toConsumableArray(around[method] || []), _toConsumableArray(collectedAll.before || []), _toConsumableArray(collected[method] || []), _toConsumableArray(collectedAll.after || []));
}
exports.collectHooks = collectHooks;
// Add `.hooks` functionality to an object
function enableHooks(object) {
  var store = {
    around: {},
    before: {},
    after: {},
    error: {},
    collected: {},
    collectedAll: {}
  };
  Object.defineProperty(object, '__hooks', {
    configurable: true,
    value: store,
    writable: true
  });
  return function registerHooks(input) {
    var store = this.__hooks;
    var map = Object.keys(input).reduce(function (map, type) {
      if (!isType(type)) {
        throw new Error("'".concat(type, "' is not a valid hook type"));
      }
      map[type] = convertHookData(input[type]);
      return map;
    }, {});
    var types = Object.keys(map);
    types.forEach(function (type) {
      return Object.keys(map[type]).forEach(function (method) {
        var _a;
        var mapHooks = map[type][method];
        var storeHooks = (_a = store[type])[method] || (_a[method] = []);
        storeHooks.push.apply(storeHooks, _toConsumableArray(mapHooks));
        if (method === 'all') {
          if (store.before[method] || store.error[method]) {
            var beforeAll = (0, hooks_1.collect)({
              before: store.before[method] || [],
              error: store.error[method] || []
            });
            store.collectedAll.before = [beforeAll];
          }
          if (store.after[method]) {
            var afterAll = (0, hooks_1.collect)({
              after: store.after[method] || []
            });
            store.collectedAll.after = [afterAll];
          }
        } else {
          if (store.before[method] || store.after[method] || store.error[method]) {
            var collected = (0, hooks_1.collect)({
              before: store.before[method] || [],
              after: store.after[method] || [],
              error: store.error[method] || []
            });
            store.collected[method] = [collected];
          }
        }
      });
    });
    return this;
  };
}
exports.enableHooks = enableHooks;
function createContext(service, method) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var createContext = service[method].createContext;
  if (typeof createContext !== 'function') {
    throw new Error("Can not create context for method ".concat(method));
  }
  return createContext(data);
}
exports.createContext = createContext;
var FeathersHookManager = /*#__PURE__*/function (_hooks_1$HookManager) {
  _inherits(FeathersHookManager, _hooks_1$HookManager);
  function FeathersHookManager(app, method) {
    var _this;
    _classCallCheck(this, FeathersHookManager);
    _this = _callSuper(this, FeathersHookManager);
    _this.app = app;
    _this.method = method;
    _this._middleware = [];
    return _this;
  }
  _createClass(FeathersHookManager, [{
    key: "collectMiddleware",
    value: function collectMiddleware(self, args) {
      var appHooks = collectHooks(this.app, this.method);
      var middleware = _get(_getPrototypeOf(FeathersHookManager.prototype), "collectMiddleware", this).call(this, self, args);
      var methodHooks = collectHooks(self, this.method);
      return [].concat(_toConsumableArray(appHooks), _toConsumableArray(middleware), _toConsumableArray(methodHooks));
    }
  }, {
    key: "initializeContext",
    value: function initializeContext(self, args, context) {
      var ctx = _get(_getPrototypeOf(FeathersHookManager.prototype), "initializeContext", this).call(this, self, args, context);
      ctx.params = ctx.params || {};
      return ctx;
    }
  }, {
    key: "middleware",
    value: function middleware(mw) {
      var _this$_middleware;
      (_this$_middleware = this._middleware).push.apply(_this$_middleware, _toConsumableArray(mw));
      return this;
    }
  }]);
  return FeathersHookManager;
}(hooks_1.HookManager);
exports.FeathersHookManager = FeathersHookManager;
function hookMixin(service, path, options) {
  var _this2 = this;
  if (typeof service.hooks === 'function') {
    return service;
  }
  var hookMethods = (0, service_1.getHookMethods)(service, options);
  var serviceMethodHooks = hookMethods.reduce(function (res, method) {
    var _FeathersHookManager;
    var params = service_1.defaultServiceArguments[method] || ['data', 'params'];
    res[method] = (_FeathersHookManager = new FeathersHookManager(_this2, method)).params.apply(_FeathersHookManager, _toConsumableArray(params)).props({
      app: _this2,
      path: path,
      method: method,
      service: service,
      event: null,
      type: 'around',
      get statusCode() {
        var _a;
        return (_a = this.http) === null || _a === void 0 ? void 0 : _a.status;
      },
      set statusCode(value) {
        this.http = this.http || {};
        this.http.status = value;
      }
    });
    return res;
  }, {});
  var registerHooks = enableHooks(service);
  (0, hooks_1.hooks)(service, serviceMethodHooks);
  service.hooks = function (hookOptions) {
    var _this3 = this;
    if (hookOptions.before || hookOptions.after || hookOptions.error || hookOptions.around) {
      return registerHooks.call(this, hookOptions);
    }
    if (Array.isArray(hookOptions)) {
      return (0, hooks_1.hooks)(this, hookOptions);
    }
    Object.keys(hookOptions).forEach(function (method) {
      var manager = (0, hooks_1.getManager)(_this3[method]);
      if (!(manager instanceof FeathersHookManager)) {
        throw new Error("Method ".concat(method, " is not a Feathers hooks enabled service method"));
      }
      manager.middleware(hookOptions[method]);
    });
    return this;
  };
  return service;
}
exports.hookMixin = hookMixin;

/***/ }),

/***/ "../feathers/lib/index.js":
/*!********************************!*\
  !*** ../feathers/lib/index.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Feathers = exports.version = exports.feathers = void 0;
var commons_1 = __webpack_require__(/*! @feathersjs/commons */ "../commons/lib/index.js");
var version_1 = __importDefault(__webpack_require__(/*! ./version */ "../feathers/lib/version.js"));
exports.version = version_1.default;
var application_1 = __webpack_require__(/*! ./application */ "../feathers/lib/application.js");
Object.defineProperty(exports, "Feathers", ({
  enumerable: true,
  get: function get() {
    return application_1.Feathers;
  }
}));
function feathers() {
  return new application_1.Feathers();
}
exports.feathers = feathers;
feathers.setDebug = commons_1.setDebug;
__exportStar(__webpack_require__(/*! ./hooks */ "../feathers/lib/hooks.js"), exports);
__exportStar(__webpack_require__(/*! ./declarations */ "../feathers/lib/declarations.js"), exports);
__exportStar(__webpack_require__(/*! ./service */ "../feathers/lib/service.js"), exports);
if (true) {
  module.exports = Object.assign(feathers, module.exports);
}

/***/ }),

/***/ "../feathers/lib/service.js":
/*!**********************************!*\
  !*** ../feathers/lib/service.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.wrapService = exports.normalizeServiceOptions = exports.getServiceOptions = exports.getHookMethods = exports.protectedMethods = exports.defaultServiceEvents = exports.defaultEventMap = exports.defaultServiceMethods = exports.defaultServiceArguments = exports.SERVICE = void 0;
var events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
var commons_1 = __webpack_require__(/*! @feathersjs/commons */ "../commons/lib/index.js");
exports.SERVICE = (0, commons_1.createSymbol)('@feathersjs/service');
exports.defaultServiceArguments = {
  find: ['params'],
  get: ['id', 'params'],
  create: ['data', 'params'],
  update: ['id', 'data', 'params'],
  patch: ['id', 'data', 'params'],
  remove: ['id', 'params']
};
exports.defaultServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
exports.defaultEventMap = {
  create: 'created',
  update: 'updated',
  patch: 'patched',
  remove: 'removed'
};
exports.defaultServiceEvents = Object.values(exports.defaultEventMap);
exports.protectedMethods = Object.keys(Object.prototype).concat(Object.keys(events_1.EventEmitter.prototype)).concat(['all', 'around', 'before', 'after', 'error', 'hooks', 'setup', 'teardown', 'publish']);
function getHookMethods(service, options) {
  var methods = options.methods;
  return exports.defaultServiceMethods.filter(function (m) {
    return typeof service[m] === 'function' && !methods.includes(m);
  }).concat(methods);
}
exports.getHookMethods = getHookMethods;
function getServiceOptions(service) {
  return service[exports.SERVICE];
}
exports.getServiceOptions = getServiceOptions;
var normalizeServiceOptions = function normalizeServiceOptions(service) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$methods = options.methods,
    methods = _options$methods === void 0 ? exports.defaultServiceMethods.filter(function (method) {
      return typeof service[method] === 'function';
    }) : _options$methods,
    _options$events = options.events,
    events = _options$events === void 0 ? service.events || [] : _options$events;
  var serviceEvents = options.serviceEvents || exports.defaultServiceEvents.concat(events);
  return _objectSpread(_objectSpread({}, options), {}, {
    events: events,
    methods: methods,
    serviceEvents: serviceEvents
  });
};
exports.normalizeServiceOptions = normalizeServiceOptions;
function wrapService(location, service, options) {
  // Do nothing if this is already an initialized
  if (service[exports.SERVICE]) {
    return service;
  }
  var protoService = Object.create(service);
  var serviceOptions = (0, exports.normalizeServiceOptions)(service, options);
  if (Object.keys(serviceOptions.methods).length === 0 && ![].concat(_toConsumableArray(exports.defaultServiceMethods), ['setup', 'teardown']).some(function (method) {
    return typeof service[method] === 'function';
  })) {
    throw new Error("Invalid service object passed for path `".concat(location, "`"));
  }
  Object.defineProperty(protoService, exports.SERVICE, {
    value: serviceOptions
  });
  return protoService;
}
exports.wrapService = wrapService;

/***/ }),

/***/ "../feathers/lib/version.js":
/*!**********************************!*\
  !*** ../feathers/lib/version.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = '5.0.20';

/***/ }),

/***/ "../rest-client/lib/axios.js":
/*!***********************************!*\
  !*** ../rest-client/lib/axios.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AxiosClient = void 0;
var base_1 = __webpack_require__(/*! ./base */ "../rest-client/lib/base.js");
var AxiosClient = /*#__PURE__*/function (_base_1$Base) {
  _inherits(AxiosClient, _base_1$Base);
  function AxiosClient() {
    _classCallCheck(this, AxiosClient);
    return _callSuper(this, AxiosClient, arguments);
  }
  _createClass(AxiosClient, [{
    key: "request",
    value: function request(options, params) {
      var config = Object.assign({
        url: options.url,
        method: options.method,
        data: options.body,
        headers: Object.assign({
          Accept: 'application/json'
        }, this.options.headers, options.headers)
      }, params.connection);
      return this.connection.request(config).then(function (res) {
        return res.data;
      }).catch(function (error) {
        var response = error.response || error;
        throw response instanceof Error ? response : response.data || response;
      });
    }
  }]);
  return AxiosClient;
}(base_1.Base);
exports.AxiosClient = AxiosClient;

/***/ }),

/***/ "../rest-client/lib/base.js":
/*!**********************************!*\
  !*** ../rest-client/lib/base.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Base = void 0;
var qs_1 = __importDefault(__webpack_require__(/*! qs */ "../../node_modules/qs/lib/index.js"));
var errors_1 = __webpack_require__(/*! @feathersjs/errors */ "../errors/lib/index.js");
var commons_1 = __webpack_require__(/*! @feathersjs/commons */ "../commons/lib/index.js");
function toError(error) {
  if (error.code === 'ECONNREFUSED') {
    throw new errors_1.Unavailable(error.message, commons_1._.pick(error, 'address', 'port', 'config'));
  }
  throw (0, errors_1.convert)(error);
}
var Base = /*#__PURE__*/function () {
  function Base(settings) {
    _classCallCheck(this, Base);
    this.name = (0, commons_1.stripSlashes)(settings.name);
    this.options = settings.options;
    this.connection = settings.connection;
    this.base = "".concat(settings.base, "/").concat(this.name);
  }
  _createClass(Base, [{
    key: "makeUrl",
    value: function makeUrl(query, id, route) {
      var url = this.base;
      if (route) {
        Object.keys(route).forEach(function (key) {
          url = url.replace(":".concat(key), route[key]);
        });
      }
      query = query || {};
      if (typeof id !== 'undefined' && id !== null) {
        url += "/".concat(encodeURIComponent(id));
      }
      return url + this.getQuery(query);
    }
  }, {
    key: "getQuery",
    value: function getQuery(query) {
      if (Object.keys(query).length !== 0) {
        var queryString = qs_1.default.stringify(query);
        return "?".concat(queryString);
      }
      return '';
    }
  }, {
    key: "methods",
    value: function methods() {
      var _this = this;
      for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
        names[_key] = arguments[_key];
      }
      names.forEach(function (method) {
        var _method = "_".concat(method);
        _this[_method] = function (data) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request({
            body: data,
            url: this.makeUrl(params.query, null, params.route),
            method: 'POST',
            headers: Object.assign({
              'Content-Type': 'application/json',
              'X-Service-Method': method
            }, params.headers)
          }, params).catch(toError);
        };
        _this[method] = function (data) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this[_method](data, params);
        };
      });
      return this;
    }
  }, {
    key: "_find",
    value: function _find(params) {
      return this.request({
        url: this.makeUrl(params.query, null, params.route),
        method: 'GET',
        headers: Object.assign({}, params.headers)
      }, params).catch(toError);
    }
  }, {
    key: "find",
    value: function find(params) {
      return this._find(params);
    }
  }, {
    key: "_get",
    value: function _get(id, params) {
      if (typeof id === 'undefined') {
        return Promise.reject(new Error("id for 'get' can not be undefined"));
      }
      return this.request({
        url: this.makeUrl(params.query, id, params.route),
        method: 'GET',
        headers: Object.assign({}, params.headers)
      }, params).catch(toError);
    }
  }, {
    key: "get",
    value: function get(id, params) {
      return this._get(id, params);
    }
  }, {
    key: "_create",
    value: function _create(data, params) {
      return this.request({
        url: this.makeUrl(params.query, null, params.route),
        body: data,
        method: 'POST',
        headers: Object.assign({
          'Content-Type': 'application/json'
        }, params.headers)
      }, params).catch(toError);
    }
  }, {
    key: "create",
    value: function create(data, params) {
      return this._create(data, params);
    }
  }, {
    key: "_update",
    value: function _update(id, data, params) {
      if (typeof id === 'undefined') {
        return Promise.reject(new Error("id for 'update' can not be undefined, only 'null' when updating multiple entries"));
      }
      return this.request({
        url: this.makeUrl(params.query, id, params.route),
        body: data,
        method: 'PUT',
        headers: Object.assign({
          'Content-Type': 'application/json'
        }, params.headers)
      }, params).catch(toError);
    }
  }, {
    key: "update",
    value: function update(id, data, params) {
      return this._update(id, data, params);
    }
  }, {
    key: "_patch",
    value: function _patch(id, data, params) {
      if (typeof id === 'undefined') {
        return Promise.reject(new Error("id for 'patch' can not be undefined, only 'null' when updating multiple entries"));
      }
      return this.request({
        url: this.makeUrl(params.query, id, params.route),
        body: data,
        method: 'PATCH',
        headers: Object.assign({
          'Content-Type': 'application/json'
        }, params.headers)
      }, params).catch(toError);
    }
  }, {
    key: "patch",
    value: function patch(id, data, params) {
      return this._patch(id, data, params);
    }
  }, {
    key: "_remove",
    value: function _remove(id, params) {
      if (typeof id === 'undefined') {
        return Promise.reject(new Error("id for 'remove' can not be undefined, only 'null' when removing multiple entries"));
      }
      return this.request({
        url: this.makeUrl(params.query, id, params.route),
        method: 'DELETE',
        headers: Object.assign({}, params.headers)
      }, params).catch(toError);
    }
  }, {
    key: "remove",
    value: function remove(id, params) {
      return this._remove(id, params);
    }
  }]);
  return Base;
}();
exports.Base = Base;

/***/ }),

/***/ "../rest-client/lib/fetch.js":
/*!***********************************!*\
  !*** ../rest-client/lib/fetch.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FetchClient = void 0;
var errors_1 = __webpack_require__(/*! @feathersjs/errors */ "../errors/lib/index.js");
var base_1 = __webpack_require__(/*! ./base */ "../rest-client/lib/base.js");
var FetchClient = /*#__PURE__*/function (_base_1$Base) {
  _inherits(FetchClient, _base_1$Base);
  function FetchClient() {
    _classCallCheck(this, FetchClient);
    return _callSuper(this, FetchClient, arguments);
  }
  _createClass(FetchClient, [{
    key: "request",
    value: function request(options, params) {
      var fetchOptions = Object.assign({}, options, params.connection);
      fetchOptions.headers = Object.assign({
        Accept: 'application/json'
      }, this.options.headers, fetchOptions.headers);
      if (options.body) {
        fetchOptions.body = JSON.stringify(options.body);
      }
      return this.connection(options.url, fetchOptions).then(this.checkStatus).then(function (response) {
        if (response.status === 204) {
          return null;
        }
        return response.json();
      });
    }
  }, {
    key: "checkStatus",
    value: function checkStatus(response) {
      if (response.ok) {
        return response;
      }
      return response.json().catch(function () {
        var ErrorClass = errors_1.errors[response.status] || Error;
        return new ErrorClass('JSON parsing error');
      }).then(function (error) {
        error.response = response;
        throw error;
      });
    }
  }]);
  return FetchClient;
}(base_1.Base);
exports.FetchClient = FetchClient;

/***/ }),

/***/ "../rest-client/lib/index.js":
/*!***********************************!*\
  !*** ../rest-client/lib/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SuperagentClient = exports.FetchClient = exports.AxiosClient = void 0;
var feathers_1 = __webpack_require__(/*! @feathersjs/feathers */ "../feathers/lib/index.js");
var base_1 = __webpack_require__(/*! ./base */ "../rest-client/lib/base.js");
var axios_1 = __webpack_require__(/*! ./axios */ "../rest-client/lib/axios.js");
Object.defineProperty(exports, "AxiosClient", ({
  enumerable: true,
  get: function get() {
    return axios_1.AxiosClient;
  }
}));
var fetch_1 = __webpack_require__(/*! ./fetch */ "../rest-client/lib/fetch.js");
Object.defineProperty(exports, "FetchClient", ({
  enumerable: true,
  get: function get() {
    return fetch_1.FetchClient;
  }
}));
var superagent_1 = __webpack_require__(/*! ./superagent */ "../rest-client/lib/superagent.js");
Object.defineProperty(exports, "SuperagentClient", ({
  enumerable: true,
  get: function get() {
    return superagent_1.SuperagentClient;
  }
}));
var transports = {
  superagent: superagent_1.SuperagentClient,
  fetch: fetch_1.FetchClient,
  axios: axios_1.AxiosClient
};
function restClient() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var result = {
    Base: base_1.Base
  };
  Object.keys(transports).forEach(function (key) {
    result[key] = function (connection) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var Service = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : transports[key];
      if (!connection) {
        throw new Error("".concat(key, " has to be provided to feathers-rest"));
      }
      if (typeof options === 'function') {
        Service = options;
        options = {};
      }
      var defaultService = function defaultService(name) {
        return new Service({
          base: base,
          name: name,
          connection: connection,
          options: options
        });
      };
      var initialize = function initialize(app) {
        if (app.rest !== undefined) {
          throw new Error('Only one default client provider can be configured');
        }
        app.rest = connection;
        app.defaultService = defaultService;
        app.mixins.unshift(function (service, _location, options) {
          if (options && options.methods && service instanceof base_1.Base) {
            var customMethods = options.methods.filter(function (name) {
              return !feathers_1.defaultServiceMethods.includes(name);
            });
            service.methods.apply(service, _toConsumableArray(customMethods));
          }
        });
      };
      initialize.Service = Service;
      initialize.service = defaultService;
      return initialize;
    };
  });
  return result;
}
exports["default"] = restClient;
if (true) {
  module.exports = Object.assign(restClient, module.exports);
}

/***/ }),

/***/ "../rest-client/lib/superagent.js":
/*!****************************************!*\
  !*** ../rest-client/lib/superagent.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SuperagentClient = void 0;
var base_1 = __webpack_require__(/*! ./base */ "../rest-client/lib/base.js");
var SuperagentClient = /*#__PURE__*/function (_base_1$Base) {
  _inherits(SuperagentClient, _base_1$Base);
  function SuperagentClient() {
    _classCallCheck(this, SuperagentClient);
    return _callSuper(this, SuperagentClient, arguments);
  }
  _createClass(SuperagentClient, [{
    key: "request",
    value: function request(options, params) {
      var superagent = this.connection(options.method, options.url).set(this.options.headers || {}).set('Accept', 'application/json').set(params.connection || {}).set(options.headers || {}).type(options.type || 'json');
      return new Promise(function (resolve, reject) {
        superagent.set(options.headers);
        if (options.body) {
          superagent.send(options.body);
        }
        superagent.end(function (error, res) {
          if (error) {
            try {
              var response = error.response;
              error = JSON.parse(error.response.text);
              error.response = response;
            } catch (e) {}
            return reject(error);
          }
          resolve(res && res.body);
        });
      });
    }
  }]);
  return SuperagentClient;
}(base_1.Base);
exports.SuperagentClient = SuperagentClient;

/***/ }),

/***/ "../socketio-client/lib/index.js":
/*!***************************************!*\
  !*** ../socketio-client/lib/index.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var client_1 = __webpack_require__(/*! @feathersjs/transport-commons/client */ "../transport-commons/client.js");
var feathers_1 = __webpack_require__(/*! @feathersjs/feathers */ "../feathers/lib/index.js");
function socketioClient(connection, options) {
  if (!connection) {
    throw new Error('Socket.io connection needs to be provided');
  }
  var defaultService = function defaultService(name) {
    var events = Object.values(feathers_1.defaultEventMap);
    var settings = Object.assign({}, options, {
      events: events,
      name: name,
      connection: connection,
      method: 'emit'
    });
    return new client_1.Service(settings);
  };
  var initialize = function initialize(app) {
    if (app.io !== undefined) {
      throw new Error('Only one default client provider can be configured');
    }
    app.io = connection;
    app.defaultService = defaultService;
    app.mixins.unshift(function (service, _location, options) {
      if (options && options.methods && service instanceof client_1.Service) {
        var customMethods = options.methods.filter(function (name) {
          return !feathers_1.defaultServiceMethods.includes(name);
        });
        service.methods.apply(service, _toConsumableArray(customMethods));
      }
    });
  };
  initialize.Service = client_1.Service;
  initialize.service = defaultService;
  return initialize;
}
exports["default"] = socketioClient;
if (true) {
  module.exports = Object.assign(socketioClient, module.exports);
}

/***/ }),

/***/ "../transport-commons/client.js":
/*!**************************************!*\
  !*** ../transport-commons/client.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/client */ "../transport-commons/lib/client.js");

/***/ }),

/***/ "../transport-commons/lib/client.js":
/*!******************************************!*\
  !*** ../transport-commons/lib/client.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Service = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */
var errors_1 = __webpack_require__(/*! @feathersjs/errors */ "../errors/lib/index.js");
var commons_1 = __webpack_require__(/*! @feathersjs/commons */ "../commons/lib/index.js");
var debug = (0, commons_1.createDebug)('@feathersjs/transport-commons/client');
var namespacedEmitterMethods = ['addListener', 'addEventListener', 'emit', 'listenerCount', 'listeners', 'on', 'once', 'prependListener', 'prependOnceListener', 'removeAllListeners', 'removeEventListener', 'removeListener'];
var otherEmitterMethods = ['eventNames', 'getMaxListeners', 'setMaxListeners'];
var addEmitterMethods = function addEmitterMethods(service) {
  otherEmitterMethods.forEach(function (method) {
    service[method] = function () {
      var _this$connection;
      if (typeof this.connection[method] !== 'function') {
        throw new Error("Can not call '".concat(method, "' on the client service connection"));
      }
      return (_this$connection = this.connection)[method].apply(_this$connection, arguments);
    };
  });
  // Methods that should add the namespace (service path)
  namespacedEmitterMethods.forEach(function (method) {
    service[method] = function (name) {
      var _this$connection2;
      if (typeof this.connection[method] !== 'function') {
        throw new Error("Can not call '".concat(method, "' on the client service connection"));
      }
      var eventName = "".concat(this.path, " ").concat(name);
      debug("Calling emitter method ".concat(method, " with ") + "namespaced event '".concat(eventName, "'"));
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var result = (_this$connection2 = this.connection)[method].apply(_this$connection2, [eventName].concat(args));
      return result === this.connection ? this : result;
    };
  });
};
var Service = /*#__PURE__*/function () {
  function Service(options) {
    _classCallCheck(this, Service);
    this.events = options.events;
    this.path = options.name;
    this.connection = options.connection;
    this.method = options.method;
    addEmitterMethods(this);
  }
  _createClass(Service, [{
    key: "send",
    value: function send(method) {
      var _this = this;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return new Promise(function (resolve, reject) {
        var _this$connection3;
        var route = args.pop();
        var path = _this.path;
        if (route) {
          Object.keys(route).forEach(function (key) {
            path = path.replace(":".concat(key), route[key]);
          });
        }
        args.unshift(method, path);
        args.push(function (error, data) {
          return error ? reject((0, errors_1.convert)(error)) : resolve(data);
        });
        debug("Sending socket.".concat(_this.method), args);
        (_this$connection3 = _this.connection)[_this.method].apply(_this$connection3, args);
      });
    }
  }, {
    key: "methods",
    value: function methods() {
      var _this2 = this;
      for (var _len3 = arguments.length, names = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        names[_key3] = arguments[_key3];
      }
      names.forEach(function (method) {
        var _method = "_".concat(method);
        _this2[_method] = function (data) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.send(method, data, params.query || {}, params.route || {});
        };
        _this2[method] = function (data) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this[_method](data, params, params.route || {});
        };
      });
      return this;
    }
  }, {
    key: "_find",
    value: function _find() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.send('find', params.query || {}, params.route || {});
    }
  }, {
    key: "find",
    value: function find() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this._find(params);
    }
  }, {
    key: "_get",
    value: function _get(id) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.send('get', id, params.query || {}, params.route || {});
    }
  }, {
    key: "get",
    value: function get(id) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this._get(id, params);
    }
  }, {
    key: "_create",
    value: function _create(data) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.send('create', data, params.query || {}, params.route || {});
    }
  }, {
    key: "create",
    value: function create(data) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this._create(data, params);
    }
  }, {
    key: "_update",
    value: function _update(id, data) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (typeof id === 'undefined') {
        return Promise.reject(new Error("id for 'update' can not be undefined"));
      }
      return this.send('update', id, data, params.query || {}, params.route || {});
    }
  }, {
    key: "update",
    value: function update(id, data) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this._update(id, data, params);
    }
  }, {
    key: "_patch",
    value: function _patch(id, data) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.send('patch', id, data, params.query || {}, params.route || {});
    }
  }, {
    key: "patch",
    value: function patch(id, data) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this._patch(id, data, params);
    }
  }, {
    key: "_remove",
    value: function _remove(id) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.send('remove', id, params.query || {}, params.route || {});
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this._remove(id, params);
    }
    // `off` is actually not part of the Node event emitter spec
    // but we are adding it since everybody is expecting it because
    // of the emitter-component Socket.io is using
  }, {
    key: "off",
    value: function off(name) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      if (typeof this.connection.off === 'function') {
        var _this$connection4;
        var result = (_this$connection4 = this.connection).off.apply(_this$connection4, ["".concat(this.path, " ").concat(name)].concat(args));
        return result === this.connection ? this : result;
      } else if (args.length === 0) {
        // @ts-ignore
        return this.removeAllListeners(name);
      }
      // @ts-ignore
      return this.removeListener.apply(this, [name].concat(args));
    }
  }]);
  return Service;
}();
exports.Service = Service;

/***/ }),

/***/ "../../node_modules/call-bind/callBound.js":
/*!*************************************************!*\
  !*** ../../node_modules/call-bind/callBound.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../../node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "../../node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "../../node_modules/call-bind/index.js":
/*!*********************************************!*\
  !*** ../../node_modules/call-bind/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "../../node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../../node_modules/get-intrinsic/index.js");
var setFunctionLength = __webpack_require__(/*! set-function-length */ "../../node_modules/set-function-length/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	if (typeof originalFunction !== 'function') {
		throw new $TypeError('a function is required');
	}
	var func = $reflectApply(bind, $call, arguments);
	return setFunctionLength(
		func,
		1 + $max(0, originalFunction.length - (arguments.length - 1)),
		true
	);
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "../../node_modules/define-data-property/index.js":
/*!********************************************************!*\
  !*** ../../node_modules/define-data-property/index.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var hasPropertyDescriptors = __webpack_require__(/*! has-property-descriptors */ "../../node_modules/has-property-descriptors/index.js")();

var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../../node_modules/get-intrinsic/index.js");

var $defineProperty = hasPropertyDescriptors && GetIntrinsic('%Object.defineProperty%', true);
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = false;
	}
}

var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');

var gopd = __webpack_require__(/*! gopd */ "../../node_modules/gopd/index.js");

/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */
module.exports = function defineDataProperty(
	obj,
	property,
	value
) {
	if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
		throw new $TypeError('`obj` must be an object or a function`');
	}
	if (typeof property !== 'string' && typeof property !== 'symbol') {
		throw new $TypeError('`property` must be a string or a symbol`');
	}
	if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
		throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
		throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
		throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
		throw new $TypeError('`loose`, if provided, must be a boolean');
	}

	var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
	var nonWritable = arguments.length > 4 ? arguments[4] : null;
	var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
	var loose = arguments.length > 6 ? arguments[6] : false;

	/* @type {false | TypedPropertyDescriptor<unknown>} */
	var desc = !!gopd && gopd(obj, property);

	if ($defineProperty) {
		$defineProperty(obj, property, {
			configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
			value: value,
			writable: nonWritable === null && desc ? desc.writable : !nonWritable
		});
	} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
		// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
		obj[property] = value; // eslint-disable-line no-param-reassign
	} else {
		throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	}
};


/***/ }),

/***/ "../../node_modules/events/events.js":
/*!*******************************************!*\
  !*** ../../node_modules/events/events.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "../../node_modules/function-bind/implementation.js":
/*!**********************************************************!*\
  !*** ../../node_modules/function-bind/implementation.js ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "../../node_modules/function-bind/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/function-bind/index.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "../../node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "../../node_modules/get-intrinsic/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/get-intrinsic/index.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "../../node_modules/has-symbols/index.js")();
var hasProto = __webpack_require__(/*! has-proto */ "../../node_modules/has-proto/index.js")();

var getProto = Object.getPrototypeOf || (
	hasProto
		? function (x) { return x.__proto__; } // eslint-disable-line no-proto
		: null
);

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "../../node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! hasown */ "../../node_modules/hasown/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "../../node_modules/gopd/index.js":
/*!****************************************!*\
  !*** ../../node_modules/gopd/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../../node_modules/get-intrinsic/index.js");

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ "../../node_modules/has-property-descriptors/index.js":
/*!************************************************************!*\
  !*** ../../node_modules/has-property-descriptors/index.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../../node_modules/get-intrinsic/index.js");

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
			return true;
		} catch (e) {
			// IE 8 has a broken defineProperty
			return false;
		}
	}
	return false;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!hasPropertyDescriptors()) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;


/***/ }),

/***/ "../../node_modules/has-proto/index.js":
/*!*********************************************!*\
  !*** ../../node_modules/has-proto/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";


var test = {
	foo: {}
};

var $Object = Object;

module.exports = function hasProto() {
	return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
};


/***/ }),

/***/ "../../node_modules/has-symbols/index.js":
/*!***********************************************!*\
  !*** ../../node_modules/has-symbols/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "../../node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "../../node_modules/has-symbols/shams.js":
/*!***********************************************!*\
  !*** ../../node_modules/has-symbols/shams.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "../../node_modules/hasown/index.js":
/*!******************************************!*\
  !*** ../../node_modules/hasown/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __webpack_require__(/*! function-bind */ "../../node_modules/function-bind/index.js");

/** @type {(o: {}, p: PropertyKey) => p is keyof o} */
module.exports = bind.call(call, $hasOwn);


/***/ }),

/***/ "../../node_modules/object-inspect/index.js":
/*!**************************************************!*\
  !*** ../../node_modules/object-inspect/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var utilInspect = __webpack_require__(/*! ./util.inspect */ "?c95a");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */
    if (typeof window !== 'undefined' && obj === window) {
        return '{ [object Window] }';
    }
    if (obj === __webpack_require__.g) {
        return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "../../node_modules/qs/lib/formats.js":
/*!********************************************!*\
  !*** ../../node_modules/qs/lib/formats.js ***!
  \********************************************/
/***/ (function(module) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "../../node_modules/qs/lib/index.js":
/*!******************************************!*\
  !*** ../../node_modules/qs/lib/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "../../node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "../../node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "../../node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "../../node_modules/qs/lib/parse.js":
/*!******************************************!*\
  !*** ../../node_modules/qs/lib/parse.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../../node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = { __proto__: null };

    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "../../node_modules/qs/lib/stringify.js":
/*!**********************************************!*\
  !*** ../../node_modules/qs/lib/stringify.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ "../../node_modules/side-channel/index.js");
var utils = __webpack_require__(/*! ./utils */ "../../node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "../../node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "../../node_modules/qs/lib/utils.js":
/*!******************************************!*\
  !*** ../../node_modules/qs/lib/utils.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "../../node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "../../node_modules/set-function-length/index.js":
/*!*******************************************************!*\
  !*** ../../node_modules/set-function-length/index.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../../node_modules/get-intrinsic/index.js");
var define = __webpack_require__(/*! define-data-property */ "../../node_modules/define-data-property/index.js");
var hasDescriptors = __webpack_require__(/*! has-property-descriptors */ "../../node_modules/has-property-descriptors/index.js")();
var gOPD = __webpack_require__(/*! gopd */ "../../node_modules/gopd/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $floor = GetIntrinsic('%Math.floor%');

/** @typedef {(...args: unknown[]) => unknown} Func */

/** @type {<T extends Func = Func>(fn: T, length: number, loose?: boolean) => T} */
module.exports = function setFunctionLength(fn, length) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
		throw new $TypeError('`length` must be a positive 32-bit integer');
	}

	var loose = arguments.length > 2 && !!arguments[2];

	var functionLengthIsConfigurable = true;
	var functionLengthIsWritable = true;
	if ('length' in fn && gOPD) {
		var desc = gOPD(fn, 'length');
		if (desc && !desc.configurable) {
			functionLengthIsConfigurable = false;
		}
		if (desc && !desc.writable) {
			functionLengthIsWritable = false;
		}
	}

	if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
		if (hasDescriptors) {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length, true, true);
		} else {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length);
		}
	}
	return fn;
};


/***/ }),

/***/ "../../node_modules/side-channel/index.js":
/*!************************************************!*\
  !*** ../../node_modules/side-channel/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../../node_modules/get-intrinsic/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "../../node_modules/call-bind/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "../../node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "./src/feathers.ts":
/*!*************************!*\
  !*** ./src/feathers.ts ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.socketio = exports.rest = exports.authentication = exports.errors = void 0;
const feathers_1 = __webpack_require__(/*! @feathersjs/feathers */ "../feathers/lib/index.js");
const authentication_client_1 = __importDefault(__webpack_require__(/*! @feathersjs/authentication-client */ "../authentication-client/lib/index.js"));
exports.authentication = authentication_client_1.default;
const rest_client_1 = __importDefault(__webpack_require__(/*! @feathersjs/rest-client */ "../rest-client/lib/index.js"));
exports.rest = rest_client_1.default;
const socketio_client_1 = __importDefault(__webpack_require__(/*! @feathersjs/socketio-client */ "../socketio-client/lib/index.js"));
exports.socketio = socketio_client_1.default;
__exportStar(__webpack_require__(/*! @feathersjs/feathers */ "../feathers/lib/index.js"), exports);
exports.errors = __importStar(__webpack_require__(/*! @feathersjs/errors */ "../errors/lib/index.js"));
exports["default"] = feathers_1.feathers;
if (true) {
    module.exports = Object.assign(feathers_1.feathers, module.exports);
}


/***/ }),

/***/ "?c95a":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "../../node_modules/@feathersjs/hooks/script/base.js":
/*!***********************************************************!*\
  !*** ../../node_modules/@feathersjs/hooks/script/base.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setMiddleware = exports.getMiddleware = exports.setManager = exports.getManager = exports.convertOptions = exports.HookManager = exports.BaseHookContext = exports.HOOKS = void 0;
var utils_js_1 = __webpack_require__(/*! ./utils.js */ "../../node_modules/@feathersjs/hooks/script/utils.js");
exports.HOOKS = Symbol('@feathersjs/hooks');
/**
 * The base hook context.
 */
var BaseHookContext = /*#__PURE__*/function () {
  function BaseHookContext() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, BaseHookContext);
    Object.defineProperty(this, "self", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.assign(this, data);
  }
  _createClass(BaseHookContext, [{
    key: "toJSON",
    value: function toJSON() {
      var _this = this;
      var keys = Object.keys(this);
      var proto = Object.getPrototypeOf(this);
      while (proto) {
        keys.push.apply(keys, _toConsumableArray(Object.keys(proto)));
        proto = Object.getPrototypeOf(proto);
      }
      return keys.reduce(function (result, key) {
        result[key] = _this[key];
        return result;
      }, {});
    }
  }]);
  return BaseHookContext;
}();
exports.BaseHookContext = BaseHookContext;
var HookManager = /*#__PURE__*/function () {
  function HookManager() {
    _classCallCheck(this, HookManager);
    Object.defineProperty(this, "_parent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "_params", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "_middleware", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "_props", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "_defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _createClass(HookManager, [{
    key: "parent",
    value: function parent(_parent) {
      this._parent = _parent;
      return this;
    }
  }, {
    key: "middleware",
    value: function middleware(_middleware) {
      this._middleware = _middleware !== null && _middleware !== void 0 && _middleware.length ? _middleware : null;
      return this;
    }
  }, {
    key: "getMiddleware",
    value: function getMiddleware() {
      var _this$_parent;
      var previous = (_this$_parent = this._parent) === null || _this$_parent === void 0 ? void 0 : _this$_parent.getMiddleware();
      if (previous && this._middleware) {
        return previous.concat(this._middleware);
      }
      return previous || this._middleware;
    }
  }, {
    key: "collectMiddleware",
    value: function collectMiddleware(self, _args) {
      var otherMiddleware = getMiddleware(self);
      var middleware = this.getMiddleware();
      if (otherMiddleware && middleware) {
        return otherMiddleware.concat(middleware);
      }
      return otherMiddleware || middleware || [];
    }
  }, {
    key: "props",
    value: function props(_props) {
      if (!this._props) {
        this._props = {};
      }
      (0, utils_js_1.copyProperties)(this._props, _props);
      return this;
    }
  }, {
    key: "getProps",
    value: function getProps() {
      var _this$_parent2;
      var previous = (_this$_parent2 = this._parent) === null || _this$_parent2 === void 0 ? void 0 : _this$_parent2.getProps();
      if (previous && this._props) {
        return (0, utils_js_1.copyProperties)({}, previous, this._props);
      }
      return previous || this._props || null;
    }
  }, {
    key: "params",
    value: function params() {
      for (var _len = arguments.length, _params = new Array(_len), _key = 0; _key < _len; _key++) {
        _params[_key] = arguments[_key];
      }
      this._params = _params;
      return this;
    }
  }, {
    key: "getParams",
    value: function getParams() {
      var _this$_parent3;
      var previous = (_this$_parent3 = this._parent) === null || _this$_parent3 === void 0 ? void 0 : _this$_parent3.getParams();
      if (previous && this._params) {
        return previous.concat(this._params);
      }
      return previous || this._params;
    }
  }, {
    key: "defaults",
    value: function defaults(_defaults) {
      this._defaults = _defaults;
      return this;
    }
  }, {
    key: "getDefaults",
    value: function getDefaults(self, args, context) {
      var _this$_parent4;
      var defaults = typeof this._defaults === 'function' ? this._defaults(self, args, context) : null;
      var previous = (_this$_parent4 = this._parent) === null || _this$_parent4 === void 0 ? void 0 : _this$_parent4.getDefaults(self, args, context);
      if (previous && defaults) {
        return Object.assign({}, previous, defaults);
      }
      return previous || defaults;
    }
  }, {
    key: "getContextClass",
    value: function getContextClass() {
      var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : BaseHookContext;
      var ContextClass = /*#__PURE__*/function (_Base) {
        _inherits(ContextClass, _Base);
        function ContextClass(data) {
          _classCallCheck(this, ContextClass);
          return _callSuper(this, ContextClass, [data]);
        }
        return _createClass(ContextClass);
      }(Base);
      var params = this.getParams();
      var props = this.getProps();
      if (params) {
        params.forEach(function (name, index) {
          if ((props === null || props === void 0 ? void 0 : props[name]) !== undefined) {
            throw new Error("Hooks can not have a property and param named '".concat(name, "'. Use .defaults instead."));
          }
          Object.defineProperty(ContextClass.prototype, name, {
            enumerable: true,
            get: function get() {
              return this === null || this === void 0 ? void 0 : this.arguments[index];
            },
            set: function set(value) {
              this.arguments[index] = value;
            }
          });
        });
      }
      if (props) {
        (0, utils_js_1.copyProperties)(ContextClass.prototype, props);
      }
      return ContextClass;
    }
  }, {
    key: "initializeContext",
    value: function initializeContext(self, args, context) {
      var ctx = this._parent ? this._parent.initializeContext(self, args, context) : context;
      var defaults = this.getDefaults(self, args, ctx);
      if (self) {
        ctx.self = self;
      }
      ctx.arguments = args;
      if (defaults) {
        for (var _i = 0, _Object$keys = Object.keys(defaults); _i < _Object$keys.length; _i++) {
          var name = _Object$keys[_i];
          if (ctx[name] === undefined) {
            ctx[name] = defaults[name];
          }
        }
      }
      return ctx;
    }
  }]);
  return HookManager;
}();
exports.HookManager = HookManager;
function convertOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (!options) {
    return new HookManager();
  }
  return Array.isArray(options) ? new HookManager().middleware(options) : options;
}
exports.convertOptions = convertOptions;
function getManager(target) {
  return target && target[exports.HOOKS] || null;
}
exports.getManager = getManager;
function setManager(target, manager) {
  var parent = getManager(target);
  target[exports.HOOKS] = manager.parent(parent);
  return target;
}
exports.setManager = setManager;
function getMiddleware(target) {
  var manager = getManager(target);
  return manager ? manager.getMiddleware() : null;
}
exports.getMiddleware = getMiddleware;
function setMiddleware(target, middleware) {
  var manager = new HookManager().middleware(middleware);
  return setManager(target, manager);
}
exports.setMiddleware = setMiddleware;

/***/ }),

/***/ "../../node_modules/@feathersjs/hooks/script/compose.js":
/*!**************************************************************!*\
  !*** ../../node_modules/@feathersjs/hooks/script/compose.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.compose = void 0;
function compose(middleware) {
  if (!Array.isArray(middleware)) {
    throw new TypeError('Middleware stack must be an array!');
  }
  var _iterator = _createForOfIteratorHelper(middleware),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var fn = _step.value;
      if (typeof fn !== 'function') {
        throw new TypeError('Middleware must be composed of functions!');
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return function (context, next) {
    // last called middleware #
    var index = -1;
    return dispatch.call(this, 0);
    function dispatch(i) {
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times'));
      }
      index = i;
      var fn = middleware[i];
      if (i === middleware.length) {
        fn = next;
      }
      if (!fn) {
        return Promise.resolve();
      }
      try {
        return Promise.resolve(fn.call(this, context, dispatch.bind(this, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
exports.compose = compose;

/***/ }),

/***/ "../../node_modules/@feathersjs/hooks/script/hooks.js":
/*!************************************************************!*\
  !*** ../../node_modules/@feathersjs/hooks/script/hooks.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hookDecorator = exports.objectHooks = exports.functionHooks = exports.getOriginal = void 0;
var compose_js_1 = __webpack_require__(/*! ./compose.js */ "../../node_modules/@feathersjs/hooks/script/compose.js");
var base_js_1 = __webpack_require__(/*! ./base.js */ "../../node_modules/@feathersjs/hooks/script/base.js");
var utils_js_1 = __webpack_require__(/*! ./utils.js */ "../../node_modules/@feathersjs/hooks/script/utils.js");
function getOriginal(fn) {
  return typeof fn.original === 'function' ? getOriginal(fn.original) : fn;
}
exports.getOriginal = getOriginal;
function functionHooks(fn, managerOrMiddleware) {
  if (typeof fn !== 'function') {
    throw new Error('Can not apply hooks to non-function');
  }
  var manager = (0, base_js_1.convertOptions)(managerOrMiddleware);
  var wrapper = function wrapper() {
    var _this = this;
    var Context = wrapper.Context,
      original = wrapper.original;
    // If we got passed an existing HookContext instance, we want to return it as well
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var returnContext = args[args.length - 1] instanceof Context;
    // Use existing context or default
    var base = returnContext ? args.pop() : new Context();
    // Initialize the context
    var context = manager.initializeContext(this, args, base);
    // Assemble the hook chain
    var hookChain = [
    // Return `ctx.result` or the context
    function (ctx, next) {
      return next().then(function () {
        return returnContext ? ctx : ctx.result;
      });
    }];
    // Create the hook chain by calling the `collectMiddleware function
    var mw = manager.collectMiddleware(this, args);
    if (mw) {
      Array.prototype.push.apply(hookChain, mw);
    }
    // Runs the actual original method if `ctx.result` is not already set
    hookChain.push(function (ctx, next) {
      if (!Object.prototype.hasOwnProperty.call(context, 'result')) {
        return Promise.resolve(original.apply(_this, ctx.arguments)).then(function (result) {
          ctx.result = result;
          return next();
        });
      }
      return next();
    });
    return (0, compose_js_1.compose)(hookChain).call(this, context);
  };
  (0, utils_js_1.copyFnProperties)(wrapper, fn);
  (0, utils_js_1.copyProperties)(wrapper, fn);
  (0, base_js_1.setManager)(wrapper, manager);
  return Object.assign(wrapper, {
    original: getOriginal(fn),
    Context: manager.getContextClass(),
    createContext: function createContext() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new wrapper.Context(data);
    }
  });
}
exports.functionHooks = functionHooks;
function objectHooks(obj, hooks) {
  if (Array.isArray(hooks)) {
    return (0, base_js_1.setMiddleware)(obj, hooks);
  }
  for (var _i = 0, _Object$keys = Object.keys(hooks); _i < _Object$keys.length; _i++) {
    var method = _Object$keys[_i];
    var target = typeof obj[method] === 'function' ? obj : obj.prototype;
    var fn = target && target[method];
    if (typeof fn !== 'function') {
      throw new Error("Can not apply hooks. '".concat(method, "' is not a function"));
    }
    var manager = (0, base_js_1.convertOptions)(hooks[method]);
    target[method] = functionHooks(fn, manager.props({
      method: method
    }));
  }
  return obj;
}
exports.objectHooks = objectHooks;
var hookDecorator = function hookDecorator(managerOrMiddleware) {
  var wrapper = function wrapper(_target, method, descriptor) {
    var manager = (0, base_js_1.convertOptions)(managerOrMiddleware);
    if (!descriptor) {
      (0, base_js_1.setManager)(_target.prototype, manager);
      return _target;
    }
    var fn = descriptor.value;
    if (typeof fn !== 'function') {
      throw new Error("Can not apply hooks. '".concat(method, "' is not a function"));
    }
    descriptor.value = functionHooks(fn, manager.props({
      method: method
    }));
    return descriptor;
  };
  return wrapper;
};
exports.hookDecorator = hookDecorator;

/***/ }),

/***/ "../../node_modules/@feathersjs/hooks/script/index.js":
/*!************************************************************!*\
  !*** ../../node_modules/@feathersjs/hooks/script/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hooks = exports.middleware = void 0;
var base_js_1 = __webpack_require__(/*! ./base.js */ "../../node_modules/@feathersjs/hooks/script/base.js");
var hooks_js_1 = __webpack_require__(/*! ./hooks.js */ "../../node_modules/@feathersjs/hooks/script/hooks.js");
__exportStar(__webpack_require__(/*! ./hooks.js */ "../../node_modules/@feathersjs/hooks/script/hooks.js"), exports);
__exportStar(__webpack_require__(/*! ./compose.js */ "../../node_modules/@feathersjs/hooks/script/compose.js"), exports);
__exportStar(__webpack_require__(/*! ./base.js */ "../../node_modules/@feathersjs/hooks/script/base.js"), exports);
__exportStar(__webpack_require__(/*! ./regular.js */ "../../node_modules/@feathersjs/hooks/script/regular.js"), exports);
/**
 * Initializes a hook settings object with the given middleware.
 * @param mw The list of middleware
 * @param options Middleware options (params, default, props)
 */
function middleware(mw, options) {
  var manager = new base_js_1.HookManager().middleware(mw);
  if (options) {
    if (options.params) {
      manager.params.apply(manager, _toConsumableArray(options.params));
    }
    if (options.defaults) {
      manager.defaults(options.defaults);
    }
    if (options.props) {
      manager.props(options.props);
    }
  }
  return manager;
}
exports.middleware = middleware;
// Fallthrough to actual implementation
function hooks() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var target = args[0],
    _hooks = args[1];
  if (typeof target === 'function' && (_hooks instanceof base_js_1.HookManager || Array.isArray(_hooks) || args.length === 1)) {
    return (0, hooks_js_1.functionHooks)(target, _hooks);
  }
  if (args.length === 2) {
    return (0, hooks_js_1.objectHooks)(target, _hooks);
  }
  return (0, hooks_js_1.hookDecorator)(target);
}
exports.hooks = hooks;

/***/ }),

/***/ "../../node_modules/@feathersjs/hooks/script/regular.js":
/*!**************************************************************!*\
  !*** ../../node_modules/@feathersjs/hooks/script/regular.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.collect = exports.fromErrorHook = exports.fromAfterHook = exports.fromBeforeHook = exports.runHooks = exports.runHook = void 0;
var compose_js_1 = __webpack_require__(/*! ./compose.js */ "../../node_modules/@feathersjs/hooks/script/compose.js");
var runHook = function runHook(hook, context, type) {
  var typeBefore = context.type;
  if (type) context.type = type;
  return Promise.resolve(hook.call(context.self, context)).then(function (res) {
    if (type) context.type = typeBefore;
    if (res && res !== context) {
      Object.assign(context, res);
    }
  });
};
exports.runHook = runHook;
var runHooks = function runHooks(hooks) {
  return function (context) {
    return hooks.reduce(function (promise, hook) {
      return promise.then(function () {
        return (0, exports.runHook)(hook, context);
      });
    }, Promise.resolve(context));
  };
};
exports.runHooks = runHooks;
function fromBeforeHook(hook) {
  return function (context, next) {
    return (0, exports.runHook)(hook, context, 'before').then(next);
  };
}
exports.fromBeforeHook = fromBeforeHook;
function fromAfterHook(hook) {
  return function (context, next) {
    return next().then(function () {
      return (0, exports.runHook)(hook, context, 'after');
    });
  };
}
exports.fromAfterHook = fromAfterHook;
function fromErrorHook(hook) {
  return function (context, next) {
    return next().catch(function (error) {
      if (context.error !== error || context.result !== undefined) {
        context.original = _objectSpread({}, context);
        context.error = error;
        delete context.result;
      }
      return (0, exports.runHook)(hook, context, 'error').then(function () {
        if (context.result === undefined && context.error !== undefined) {
          throw context.error;
        }
      }).catch(function (error) {
        context.error = error;
        throw context.error;
      });
    });
  };
}
exports.fromErrorHook = fromErrorHook;
function collect(_ref) {
  var _ref$before = _ref.before,
    before = _ref$before === void 0 ? [] : _ref$before,
    _ref$after = _ref.after,
    after = _ref$after === void 0 ? [] : _ref$after,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? [] : _ref$error;
  var beforeHooks = before.map(fromBeforeHook);
  var afterHooks = _toConsumableArray(after).reverse().map(fromAfterHook);
  var errorHooks = error.length ? [fromErrorHook((0, exports.runHooks)(error))] : [];
  return (0, compose_js_1.compose)([].concat(errorHooks, _toConsumableArray(beforeHooks), _toConsumableArray(afterHooks)));
}
exports.collect = collect;

/***/ }),

/***/ "../../node_modules/@feathersjs/hooks/script/utils.js":
/*!************************************************************!*\
  !*** ../../node_modules/@feathersjs/hooks/script/utils.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.copyFnProperties = exports.copyProperties = void 0;
function copyProperties(target) {
  for (var _len = arguments.length, originals = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    originals[_key - 1] = arguments[_key];
  }
  for (var _i = 0, _originals = originals; _i < _originals.length; _i++) {
    var original = _originals[_i];
    var originalProps = Object.keys(original).concat(Object.getOwnPropertySymbols(original));
    var _iterator = _createForOfIteratorHelper(originalProps),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        var propDescriptor = Object.getOwnPropertyDescriptor(original, prop);
        if (propDescriptor && !Object.prototype.hasOwnProperty.call(target, prop)) {
          Object.defineProperty(target, prop, propDescriptor);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return target;
}
exports.copyProperties = copyProperties;
function copyFnProperties(target, original) {
  var internalProps = ['name', 'length'];
  try {
    for (var _i2 = 0, _internalProps = internalProps; _i2 < _internalProps.length; _i2++) {
      var prop = _internalProps[_i2];
      var value = original[prop];
      Object.defineProperty(target, prop, {
        value: value
      });
    }
  } catch (_e) {
    // Avoid IE error
  }
  return target;
}
exports.copyFnProperties = copyFnProperties;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/feathers.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=feathers.js.map