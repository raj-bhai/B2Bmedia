"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 71:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    "apiRoot": "http://localhost:9000"
});


/***/ }),

/***/ 149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: ./redux/action/dashboard.js
var dashboard = __webpack_require__(556);
;// CONCATENATED MODULE: ./redux/reducer/dashboard.js

const initialState = {
    Task: [],
    ClientType: []
};
/* harmony default export */ const reducer_dashboard = ((state = initialState, action)=>{
    switch(action.type){
        case dashboard/* TASKS */.XB:
            return {
                ...state,
                Task: action.data
            };
        case dashboard/* CLIENTTYPE */.c7:
            return {
                ...state,
                ClientType: action.data
            };
    }
    return state;
});

;// CONCATENATED MODULE: ./redux/reducer/index.js


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    dashboard: reducer_dashboard
});
/* harmony default export */ const reducer = (rootReducer);

;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./redux/store/index.js



const store = (0,external_redux_namespaceObject.createStore)(reducer, (0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: redux_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XB": () => (/* binding */ TASKS),
/* harmony export */   "_X": () => (/* binding */ getTask),
/* harmony export */   "_v": () => (/* binding */ getClientType),
/* harmony export */   "c7": () => (/* binding */ CLIENTTYPE)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);


const TASKS = "TASKS";
const CLIENTTYPE = "CLIENTTYPE";
const getTask = ()=>{
    return (dispatch)=>{
        axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_constants_url__WEBPACK_IMPORTED_MODULE_1__/* ["default"].apiRoot */ .Z.apiRoot}/dashboard/getTask`, {}).then((res)=>{
            dispatch({
                type: TASKS,
                data: res.data.data
            });
        }).catch((err)=>{
            console.log("GetTask Error :", err);
        });
    };
};
const getClientType = ()=>{
    return (dispatch)=>{
        axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_constants_url__WEBPACK_IMPORTED_MODULE_1__/* ["default"].apiRoot */ .Z.apiRoot}/dashboard/getClientType`, {}).then((res)=>{
            dispatch({
                type: CLIENTTYPE,
                data: res.data.data
            });
        }).catch((err)=>{
            console.log("GetTask Error :", err);
        });
    };
};


/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(149));
module.exports = __webpack_exports__;

})();