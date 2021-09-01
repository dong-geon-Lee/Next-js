"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.js":
/*!******************************!*\
  !*** ./pages/api/graphql.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nconst typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`\n  type BlogPost {\n    id: String\n    text: String\n  }\n\n  type Query {\n    blogPosts: [BlogPost]\n  }\n\n  type Mutation {\n    addBlogPost(text: String): BlogPost\n    editBlogPost(id: String, text: String): BlogPost\n    deleteBlogPost(id: String): BlogPost\n  }\n`;\nconst resolvers = {\n  Query: {\n    blogPosts: (_parent, _args) => {\n      return prisma.blogPost.findMany();\n    }\n  },\n  Mutation: {\n    addBlogPost: (_parent, {\n      text\n    }) => {\n      return prisma.blogPost.create({\n        data: {\n          text\n        }\n      });\n    },\n    editBlogPost: (_parent, {\n      id,\n      text\n    }) => {\n      return prisma.blogPost.update({\n        where: {\n          id\n        },\n        data: {\n          text\n        }\n      });\n    },\n    deleteBlogPost: (_parent, {\n      id\n    }) => {\n      return prisma.blogPost.delete({\n        where: {\n          id\n        }\n      });\n    }\n  }\n};\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  typeDefs,\n  resolvers\n});\nconst handler = apolloServer.createHandler({\n  path: \"/api/graphql\"\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ3JhcGhxbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUcsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFQSxNQUFNRSxRQUFRLEdBQUdILG9EQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZBO0FBaUJBLE1BQU1JLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLFNBQVMsRUFBRSxDQUFDQyxPQUFELEVBQVVDLEtBQVYsS0FBb0I7QUFDN0IsYUFBT04sTUFBTSxDQUFDTyxRQUFQLENBQWdCQyxRQUFoQixFQUFQO0FBQ0Q7QUFISSxHQURTO0FBT2hCQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFLENBQUNMLE9BQUQsRUFBVTtBQUFFTSxNQUFBQTtBQUFGLEtBQVYsS0FBdUI7QUFDbEMsYUFBT1gsTUFBTSxDQUFDTyxRQUFQLENBQWdCSyxNQUFoQixDQUF1QjtBQUFFQyxRQUFBQSxJQUFJLEVBQUU7QUFBRUYsVUFBQUE7QUFBRjtBQUFSLE9BQXZCLENBQVA7QUFDRCxLQUhPO0FBSVJHLElBQUFBLFlBQVksRUFBRSxDQUFDVCxPQUFELEVBQVU7QUFBRVUsTUFBQUEsRUFBRjtBQUFNSixNQUFBQTtBQUFOLEtBQVYsS0FBMkI7QUFDdkMsYUFBT1gsTUFBTSxDQUFDTyxRQUFQLENBQWdCUyxNQUFoQixDQUF1QjtBQUM1QkMsUUFBQUEsS0FBSyxFQUFFO0FBQUVGLFVBQUFBO0FBQUYsU0FEcUI7QUFFNUJGLFFBQUFBLElBQUksRUFBRTtBQUFFRixVQUFBQTtBQUFGO0FBRnNCLE9BQXZCLENBQVA7QUFJRCxLQVRPO0FBVVJPLElBQUFBLGNBQWMsRUFBRSxDQUFDYixPQUFELEVBQVU7QUFBRVUsTUFBQUE7QUFBRixLQUFWLEtBQXFCO0FBQ25DLGFBQU9mLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQlksTUFBaEIsQ0FBdUI7QUFBRUYsUUFBQUEsS0FBSyxFQUFFO0FBQUVGLFVBQUFBO0FBQUY7QUFBVCxPQUF2QixDQUFQO0FBQ0Q7QUFaTztBQVBNLENBQWxCO0FBdUJBLE1BQU1LLFlBQVksR0FBRyxJQUFJdkIsNkRBQUosQ0FBaUI7QUFBRUksRUFBQUEsUUFBRjtBQUFZQyxFQUFBQTtBQUFaLENBQWpCLENBQXJCO0FBRUEsTUFBTW1CLE9BQU8sR0FBR0QsWUFBWSxDQUFDRSxhQUFiLENBQTJCO0FBQUVDLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQTNCLENBQWhCO0FBRU8sTUFBTUMsTUFBTSxHQUFHO0FBQUVDLEVBQUFBLEdBQUcsRUFBRTtBQUFFQyxJQUFBQSxVQUFVLEVBQUU7QUFBZDtBQUFQLENBQWY7QUFFUCxpRUFBZUwsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvYXBpL2dyYXBocWwuanM/NzQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIsIGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLW1pY3JvXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5jb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgdHlwZSBCbG9nUG9zdCB7XG4gICAgaWQ6IFN0cmluZ1xuICAgIHRleHQ6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgYmxvZ1Bvc3RzOiBbQmxvZ1Bvc3RdXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBhZGRCbG9nUG9zdCh0ZXh0OiBTdHJpbmcpOiBCbG9nUG9zdFxuICAgIGVkaXRCbG9nUG9zdChpZDogU3RyaW5nLCB0ZXh0OiBTdHJpbmcpOiBCbG9nUG9zdFxuICAgIGRlbGV0ZUJsb2dQb3N0KGlkOiBTdHJpbmcpOiBCbG9nUG9zdFxuICB9XG5gO1xuXG5jb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgYmxvZ1Bvc3RzOiAoX3BhcmVudCwgX2FyZ3MpID0+IHtcbiAgICAgIHJldHVybiBwcmlzbWEuYmxvZ1Bvc3QuZmluZE1hbnkoKTtcbiAgICB9LFxuICB9LFxuXG4gIE11dGF0aW9uOiB7XG4gICAgYWRkQmxvZ1Bvc3Q6IChfcGFyZW50LCB7IHRleHQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHByaXNtYS5ibG9nUG9zdC5jcmVhdGUoeyBkYXRhOiB7IHRleHQgfSB9KTtcbiAgICB9LFxuICAgIGVkaXRCbG9nUG9zdDogKF9wYXJlbnQsIHsgaWQsIHRleHQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHByaXNtYS5ibG9nUG9zdC51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgICBkYXRhOiB7IHRleHQgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsZXRlQmxvZ1Bvc3Q6IChfcGFyZW50LCB7IGlkIH0pID0+IHtcbiAgICAgIHJldHVybiBwcmlzbWEuYmxvZ1Bvc3QuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSk7XG5cbmNvbnN0IGhhbmRsZXIgPSBhcG9sbG9TZXJ2ZXIuY3JlYXRlSGFuZGxlcih7IHBhdGg6IFwiL2FwaS9ncmFwaHFsXCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFwaTogeyBib2R5UGFyc2VyOiBmYWxzZSB9IH07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiQXBvbGxvU2VydmVyIiwiZ3FsIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsImJsb2dQb3N0cyIsIl9wYXJlbnQiLCJfYXJncyIsImJsb2dQb3N0IiwiZmluZE1hbnkiLCJNdXRhdGlvbiIsImFkZEJsb2dQb3N0IiwidGV4dCIsImNyZWF0ZSIsImRhdGEiLCJlZGl0QmxvZ1Bvc3QiLCJpZCIsInVwZGF0ZSIsIndoZXJlIiwiZGVsZXRlQmxvZ1Bvc3QiLCJkZWxldGUiLCJhcG9sbG9TZXJ2ZXIiLCJoYW5kbGVyIiwiY3JlYXRlSGFuZGxlciIsInBhdGgiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/graphql.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.js"));
module.exports = __webpack_exports__;

})();