"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiences: function() { return /* binding */ experiences; },\n/* harmony export */   projects: function() { return /* binding */ projects; },\n/* harmony export */   skills: function() { return /* binding */ skills; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n\nconst skills = [\n    {\n        skill: \"HTML\",\n        percentage: 60\n    },\n    {\n        skill: \"CSS\",\n        percentage: 40\n    },\n    {\n        skill: \"JavaScript\",\n        percentage: 45\n    }\n];\nconst experiences = [\n    {\n        title: \"Auxiliar de planta en AutoMercado\",\n        description: \"Encargado de multiples tareas en la planta, incluido servicio al cliente\",\n        from: 2018,\n        to: 2019\n    },\n    {\n        title: \"Dependiente en Coopebrunka\",\n        description: \"Encargado de multiples tareas en el local, desde labores administrativas, apertura y cierre de cajas, manejo de inventario, atenci\\xf3n al cliente y funciones de mantenimiento\",\n        from: 2015,\n        to: 2019\n    }\n];\nconst projects = [\n    {\n        name: \"Freelancer\",\n        description: \"Pagina web de un freelancer\",\n        image: \"Portafolio1.PNG\",\n        link: \"https://github.com/Arnold-935/Freelancer-Webpage.git\"\n    },\n    {\n        name: \"Fronted Store\",\n        description: \"Pagina web de una tienda de camisas\",\n        image: \"FrontedStore.PNG\",\n        link: \"https://github.com/Arnold-935/Fronted-Store.git\"\n    },\n    {\n        name: \"Barbershop\",\n        description: \"Pagina de una Barberia\",\n        image: \"Barber Shop logo.jpg\",\n        link: \"https://github.com/Arnold-935/BarberShop.git\"\n    },\n    {\n        name: \"CrabStore\",\n        description: \"Pagina de una Barberia\",\n        image: \"a crab.jpg\",\n        link: \"https://github.com/Arnold-935/CrabStore.git\"\n    },\n    {\n        name: \"ArtShop\",\n        description: \"Pagina de una Barberia\",\n        image: \"van gogh style\",\n        link: \"https://github.com/Arnold-935/ArtShop.git\"\n    },\n    {\n        name: \"Tours Golfito\",\n        description: \"Pagina de una Barberia\",\n        image: \"Portafolio1.PNG\",\n        link: \"https://github.com/Arnold-935/Tours-Golfito.git\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRCO0FBRXJCLE1BQU1DLFNBQVM7SUFDbEI7UUFDSUMsT0FBTztRQUNQQyxZQUFZO0lBQ2hCO0lBRUE7UUFDSUQsT0FBTztRQUNQQyxZQUFZO0lBQ2hCO0lBRUE7UUFDSUQsT0FBTztRQUNQQyxZQUFZO0lBQ2hCO0NBR0g7QUFFTSxNQUFNQyxjQUFjO0lBQ3ZCO1FBQ0lDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLElBQUk7SUFDUjtJQUVBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLElBQUk7SUFDUjtDQUNIO0FBRU0sTUFBTUMsV0FBVztJQUNwQjtRQUNJQyxNQUFLO1FBQ0xKLGFBQVk7UUFDWkssT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFFQTtRQUNJRixNQUFLO1FBQ0xKLGFBQVk7UUFDWkssT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFFQTtRQUNJRixNQUFLO1FBQ0xKLGFBQVk7UUFDWkssT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFFQTtRQUNJRixNQUFLO1FBQ0xKLGFBQVk7UUFDWkssT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFFQTtRQUNJRixNQUFLO1FBQ0xKLGFBQVk7UUFDWkssT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFFQTtRQUNJRixNQUFLO1FBQ0xKLGFBQVk7UUFDWkssT0FBTztRQUNQQyxNQUFNO0lBQ1Y7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcm9maWxlLmpzPzlkYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSFRNTCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNjAsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0NTUycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNDAsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0phdmFTY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDQ1LFxyXG4gICAgfVxyXG5cclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0F1eGlsaWFyIGRlIHBsYW50YSBlbiBBdXRvTWVyY2FkbycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRW5jYXJnYWRvIGRlIG11bHRpcGxlcyB0YXJlYXMgZW4gbGEgcGxhbnRhLCBpbmNsdWlkbyBzZXJ2aWNpbyBhbCBjbGllbnRlXCIsXHJcbiAgICAgICAgZnJvbTogMjAxOCxcclxuICAgICAgICB0bzogMjAxOVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdEZXBlbmRpZW50ZSBlbiBDb29wZWJydW5rYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRW5jYXJnYWRvIGRlIG11bHRpcGxlcyB0YXJlYXMgZW4gZWwgbG9jYWwsIGRlc2RlIGxhYm9yZXMgYWRtaW5pc3RyYXRpdmFzLCBhcGVydHVyYSB5IGNpZXJyZSBkZSBjYWphcywgbWFuZWpvIGRlIGludmVudGFyaW8sIGF0ZW5jacOzbiBhbCBjbGllbnRlIHkgZnVuY2lvbmVzIGRlIG1hbnRlbmltaWVudG9cIixcclxuICAgICAgICBmcm9tOiAyMDE1LFxyXG4gICAgICAgIHRvOiAyMDE5XHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOlwiRnJlZWxhbmNlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiUGFnaW5hIHdlYiBkZSB1biBmcmVlbGFuY2VyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiUG9ydGFmb2xpbzEuUE5HXCIsXHJcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vQXJub2xkLTkzNS9GcmVlbGFuY2VyLVdlYnBhZ2UuZ2l0XCJcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6XCJGcm9udGVkIFN0b3JlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJQYWdpbmEgd2ViIGRlIHVuYSB0aWVuZGEgZGUgY2FtaXNhc1wiLFxyXG4gICAgICAgIGltYWdlOiBcIkZyb250ZWRTdG9yZS5QTkdcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Bcm5vbGQtOTM1L0Zyb250ZWQtU3RvcmUuZ2l0XCJcclxuICAgIH0sIFxyXG5cclxuICAgIHtcclxuICAgICAgICBuYW1lOlwiQmFyYmVyc2hvcFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiUGFnaW5hIGRlIHVuYSBCYXJiZXJpYVwiLFxyXG4gICAgICAgIGltYWdlOiBcIkJhcmJlciBTaG9wIGxvZ28uanBnXCIsXHJcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vQXJub2xkLTkzNS9CYXJiZXJTaG9wLmdpdFwiXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBuYW1lOlwiQ3JhYlN0b3JlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJQYWdpbmEgZGUgdW5hIEJhcmJlcmlhXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiYSBjcmFiLmpwZ1wiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Fybm9sZC05MzUvQ3JhYlN0b3JlLmdpdFwiXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBuYW1lOlwiQXJ0U2hvcFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiUGFnaW5hIGRlIHVuYSBCYXJiZXJpYVwiLFxyXG4gICAgICAgIGltYWdlOiBcInZhbiBnb2doIHN0eWxlXCIsXHJcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vQXJub2xkLTkzNS9BcnRTaG9wLmdpdFwiXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBuYW1lOlwiVG91cnMgR29sZml0b1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiUGFnaW5hIGRlIHVuYSBCYXJiZXJpYVwiLFxyXG4gICAgICAgIGltYWdlOiBcIlBvcnRhZm9saW8xLlBOR1wiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Fybm9sZC05MzUvVG91cnMtR29sZml0by5naXRcIlxyXG4gICAgfVxyXG5dXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwic2tpbGxzIiwic2tpbGwiLCJwZXJjZW50YWdlIiwiZXhwZXJpZW5jZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdHMiLCJuYW1lIiwiaW1hZ2UiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./profile.js\n"));

/***/ })

});