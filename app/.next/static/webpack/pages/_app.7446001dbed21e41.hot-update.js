"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/style.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/style.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap\\\");\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nh1, h2, h3, h4, h5, h6, p, span, a {\\n  text-decoration: none;\\n  font-family: \\\"Rowdies\\\", cursive;\\n  color: #000;\\n}\\n\\n.navbar {\\n  background: #fff;\\n  border-bottom: 1px solid #f0f0f0;\\n}\\n.navbar .navbar-brand {\\n  height: 40px;\\n}\\n\\n.main {\\n  height: calc(100vh - 103px);\\n}\\n.main .nav.nav-tabs {\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\nfooter {\\n  border-top: 1px solid #f0f0f0;\\n}\\nfooter a {\\n  font-weight: 300;\\n  text-align: center;\\n  font-size: 0.8rem;\\n  letter-spacing: 1px;\\n}\\nfooter div {\\n  width: -webkit-max-content;\\n  width: -moz-max-content;\\n  width: max-content;\\n  display: block;\\n  margin: 10px auto;\\n}\\nfooter div a {\\n  padding: 10px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/style.scss\"],\"names\":[],\"mappings\":\"AAAQ,6FAAA;AAMR;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAJF;;AAOA;EACE,qBAAA;EACA,+BAAA;EACA,WAbM;AASR;;AAOA;EACE,gBAhBM;EAiBN,gCAAA;AAJF;AAKE;EACE,YAAA;AAHJ;;AAMA;EAKE,2BAAA;AAPF;AAGE;EACE,mBAAA;EACA,uBAAA;AADJ;;AAKA;EACE,6BAAA;AAFF;AAGE;EACE,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AADJ;AAGE;EACE,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,cAAA;EACA,iBAAA;AADJ;AAEG;EACG,aAAA;AAAN\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap');\\r\\n\\r\\n$black: #000;\\r\\n$white: #fff;\\r\\n$light-grey: #f0f0f0;\\r\\n\\r\\n*{\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nh1, h2, h3, h4, h5, h6, p, span, a{\\r\\n  text-decoration: none;\\r\\n  font-family: 'Rowdies', cursive;\\r\\n  color: $black;\\r\\n}\\r\\n\\r\\n.navbar{\\r\\n  background: $white;\\r\\n  border-bottom: 1px solid $light-grey;\\r\\n  .navbar-brand{\\r\\n    height: 40px;\\r\\n  }\\r\\n}\\r\\n.main{\\r\\n  .nav.nav-tabs{\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n  }\\r\\n  height: calc(100vh - 103px);\\r\\n}\\r\\nfooter{\\r\\n  border-top: 1px solid $light-grey;\\r\\n  a{\\r\\n    font-weight: 300;\\r\\n    text-align: center;\\r\\n    font-size: .8rem;\\r\\n    letter-spacing: 1px;\\r\\n  }\\r\\n  div{\\r\\n    width: max-content;\\r\\n    display: block;\\r\\n    margin: 10px auto;\\r\\n   a{\\r\\n      padding: 10px;\\r\\n    }\\r\\n  }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9zdHlsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxrSEFBa0gsSUFBSSxvQkFBb0IsS0FBSyxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsd0NBQXdDLDBCQUEwQixzQ0FBc0MsZ0JBQWdCLEdBQUcsYUFBYSxxQkFBcUIscUNBQXFDLEdBQUcseUJBQXlCLGlCQUFpQixHQUFHLFdBQVcsZ0NBQWdDLEdBQUcsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsR0FBRyxZQUFZLGtDQUFrQyxHQUFHLFlBQVkscUJBQXFCLHVCQUF1QixzQkFBc0Isd0JBQXdCLEdBQUcsY0FBYywrQkFBK0IsNEJBQTRCLHVCQUF1QixtQkFBbUIsc0JBQXNCLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLE9BQU8sd0ZBQXdGLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLGdHQUFnRyxJQUFJLG1CQUFtQixxQkFBcUIsaUJBQWlCLHlCQUF5QixVQUFVLGdCQUFnQixpQkFBaUIsNkJBQTZCLEtBQUssMkNBQTJDLDRCQUE0QixzQ0FBc0Msb0JBQW9CLEtBQUssZ0JBQWdCLHlCQUF5QiwyQ0FBMkMsb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssVUFBVSxvQkFBb0IsNEJBQTRCLGdDQUFnQyxPQUFPLGtDQUFrQyxLQUFLLFdBQVcsd0NBQXdDLFFBQVEseUJBQXlCLDJCQUEyQix5QkFBeUIsNEJBQTRCLE9BQU8sVUFBVSwyQkFBMkIsdUJBQXVCLDBCQUEwQixTQUFTLHdCQUF3QixTQUFTLE9BQU8sS0FBSyxtQkFBbUI7QUFDbHlFO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlLnNjc3M/NGFmNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um93ZGllczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIHNwYW4sIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb3dkaWVzXFxcIiwgY3Vyc2l2ZTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG59XFxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAzcHgpO1xcbn1cXG4ubWFpbiAubmF2Lm5hdi10YWJzIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xcbn1cXG5mb290ZXIgYSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5mb290ZXIgZGl2IHtcXG4gIHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5mb290ZXIgZGl2IGEge1xcbiAgcGFkZGluZzogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFRLDZGQUFBO0FBTVI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FiTTtBQVNSOztBQU9BO0VBQ0UsZ0JBaEJNO0VBaUJOLGdDQUFBO0FBSkY7QUFLRTtFQUNFLFlBQUE7QUFISjs7QUFNQTtFQUtFLDJCQUFBO0FBUEY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFLQTtFQUNFLDZCQUFBO0FBRkY7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFHRTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURKO0FBRUc7RUFDRyxhQUFBO0FBQU5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um93ZGllczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiRibGFjazogIzAwMDtcXHJcXG4kd2hpdGU6ICNmZmY7XFxyXFxuJGxpZ2h0LWdyZXk6ICNmMGYwZjA7XFxyXFxuXFxyXFxuKntcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBzcGFuLCBhe1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb3dkaWVzJywgY3Vyc2l2ZTtcXHJcXG4gIGNvbG9yOiAkYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJ7XFxyXFxuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XFxyXFxuICAubmF2YmFyLWJyYW5ke1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5tYWlue1xcclxcbiAgLm5hdi5uYXYtdGFic3tcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDNweCk7XFxyXFxufVxcclxcbmZvb3RlcntcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcXHJcXG4gIGF7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIH1cXHJcXG4gIGRpdntcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICAgYXtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/style.scss\n");

/***/ })

});