/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/main.ts":
/*!********************************!*\
  !*** ./src/components/main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonsBlock": () => (/* binding */ buttonsBlock),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "newsBlock": () => (/* binding */ newsBlock)
/* harmony export */ });
/* harmony import */ var _mainClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainClass */ "./src/components/mainClass.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var startUrl = "https://newsapi.org/v2/top-headlines/sources?apiKey=3000231c228d4d13b42806036c3a767f";
var buttonsBlock = document.querySelector(".buttons");
var newsBlock = document.querySelector(".news-block");
var showHtml = new _mainClass__WEBPACK_IMPORTED_MODULE_0__.ShowInHtml();
function getData(url, type) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    if (type == "btn") {
                        showHtml.showData(data.sources);
                    }
                    else if (type == "news") {
                        showHtml.showNews(data.articles);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
getData(startUrl, "btn");


/***/ }),

/***/ "./src/components/mainClass.ts":
/*!*************************************!*\
  !*** ./src/components/mainClass.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowInHtml": () => (/* binding */ ShowInHtml)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/components/main.ts");

var ShowInHtml = /** @class */ (function () {
    function ShowInHtml() {
    }
    ShowInHtml.prototype.showData = function (dataSources) {
        for (var i = 0; i < dataSources.length; i++) {
            var btn = document.createElement("button");
            var currentSource = dataSources[i];
            btn.className = "btn";
            btn.id = currentSource.id;
            btn.innerHTML = currentSource.name;
            _main__WEBPACK_IMPORTED_MODULE_0__.buttonsBlock.append(btn);
        }
        var allButtons = document.querySelectorAll(".btn");
        allButtons.forEach(function (el) {
            el.addEventListener("click", function () {
                var esspecialUrl = "https://newsapi.org/v2/top-headlines?sources=" +
                    el.id +
                    "&apiKey=3000231c228d4d13b42806036c3a767f";
                (0,_main__WEBPACK_IMPORTED_MODULE_0__.getData)(esspecialUrl, "news");
            });
        });
    };
    ShowInHtml.prototype.showNews = function (dataArticles) {
        _main__WEBPACK_IMPORTED_MODULE_0__.newsBlock.innerHTML = "";
        for (var i = 0; i < 10; i++) {
            var news = document.createElement("div");
            var newsImg = document.createElement("img");
            var newsContent = document.createElement("div");
            var newsTitle = document.createElement("h3");
            var newsName = document.createElement("p");
            var line = document.createElement("hr");
            var newsDescrpt = document.createElement("p");
            var readMore = document.createElement("a");
            news.className = "news";
            newsImg.className = "news-img";
            newsContent.className = "news-content";
            newsTitle.className = "news-title";
            newsName.className = "news-name";
            newsDescrpt.className = "news-descrpt";
            readMore.className = "read-more";
            newsImg.src = dataArticles[i].urlToImage;
            newsTitle.innerHTML = dataArticles[i].title;
            newsName.innerHTML = dataArticles[i].source.name;
            newsDescrpt.innerHTML = dataArticles[i].description;
            readMore.href = dataArticles[i].url;
            readMore.innerHTML = "Read More";
            _main__WEBPACK_IMPORTED_MODULE_0__.newsBlock.append(news);
            news.append(newsImg);
            news.append(newsContent);
            newsContent.append(newsTitle);
            newsContent.append(newsName);
            newsContent.append(line);
            newsContent.append(newsDescrpt);
            newsContent.append(readMore);
            if (i % 2 == 1) {
                news.style.flexDirection = "row-reverse";
                newsImg.style.borderRadius = "0 20px 20px 0";
            }
        }
    };
    return ShowInHtml;
}());



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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QixXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO2dCQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUM7YUFDOUM7U0FDRjtJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7O1VDN0REO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlncmF0aW9uLW5ld2lwLXRvLXRzLy4vc3JjL2NvbXBvbmVudHMvbWFpbi50cyIsIndlYnBhY2s6Ly9taWdyYXRpb24tbmV3aXAtdG8tdHMvLi9zcmMvY29tcG9uZW50cy9tYWluQ2xhc3MudHMiLCJ3ZWJwYWNrOi8vbWlncmF0aW9uLW5ld2lwLXRvLXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pZ3JhdGlvbi1uZXdpcC10by10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWlncmF0aW9uLW5ld2lwLXRvLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWlncmF0aW9uLW5ld2lwLXRvLXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWlncmF0aW9uLW5ld2lwLXRvLXRzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWlncmF0aW9uLW5ld2lwLXRvLXRzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9taWdyYXRpb24tbmV3aXAtdG8tdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNob3dJbkh0bWwgfSBmcm9tIFwiLi9tYWluQ2xhc3NcIjtcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5sZXQgc3RhcnRVcmw6IHN0cmluZyA9XHJcbiAgXCJodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXMvc291cmNlcz9hcGlLZXk9MzAwMDIzMWMyMjhkNGQxM2I0MjgwNjAzNmMzYTc2N2ZcIjtcclxuZXhwb3J0IGxldCBidXR0b25zQmxvY2s6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5idXR0b25zXCJcclxuKSBhcyBIVE1MRWxlbWVudDtcclxuZXhwb3J0IGxldCBuZXdzQmxvY2s6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5uZXdzLWJsb2NrXCJcclxuKSBhcyBIVE1MRWxlbWVudDtcclxubGV0IHNob3dIdG1sID0gbmV3IFNob3dJbkh0bWwoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhKHVybDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCByZXM6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCBkYXRhOiBEYXRhVHlwZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgaWYgKHR5cGUgPT0gXCJidG5cIikge1xyXG4gICAgc2hvd0h0bWwuc2hvd0RhdGEoZGF0YS5zb3VyY2VzKTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJuZXdzXCIpIHtcclxuICAgIHNob3dIdG1sLnNob3dOZXdzKGRhdGEuYXJ0aWNsZXMpO1xyXG4gIH1cclxufVxyXG5nZXREYXRhKHN0YXJ0VXJsLCBcImJ0blwiKTtcclxuIiwiaW1wb3J0IHsgYnV0dG9uc0Jsb2NrLCBnZXREYXRhLCBuZXdzQmxvY2sgfSBmcm9tIFwiLi9tYWluXCI7XHJcbmltcG9ydCB7IERhdGFUeXBlLCBTb3VyY2VUeXBlLCBBcnRpY2xlVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmV4cG9ydCBjbGFzcyBTaG93SW5IdG1sIHtcclxuICBzaG93RGF0YShkYXRhU291cmNlczogU291cmNlVHlwZVtdKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGJ0bjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBsZXQgY3VycmVudFNvdXJjZTogU291cmNlVHlwZSA9IGRhdGFTb3VyY2VzW2ldO1xyXG4gICAgICBidG4uY2xhc3NOYW1lID0gXCJidG5cIjtcclxuICAgICAgYnRuLmlkID0gY3VycmVudFNvdXJjZS5pZDtcclxuICAgICAgYnRuLmlubmVySFRNTCA9IGN1cnJlbnRTb3VyY2UubmFtZTtcclxuICAgICAgYnV0dG9uc0Jsb2NrLmFwcGVuZChidG4pO1xyXG4gICAgfVxyXG4gICAgbGV0IGFsbEJ1dHRvbnM6IE5vZGVMaXN0T2Y8RWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0blwiKTtcclxuICAgIGFsbEJ1dHRvbnMuZm9yRWFjaCgoZWw6IEVsZW1lbnQpOiB2b2lkID0+IHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgZXNzcGVjaWFsVXJsOiBzdHJpbmcgPVxyXG4gICAgICAgICAgXCJodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/c291cmNlcz1cIiArXHJcbiAgICAgICAgICBlbC5pZCArXHJcbiAgICAgICAgICBcIiZhcGlLZXk9MzAwMDIzMWMyMjhkNGQxM2I0MjgwNjAzNmMzYTc2N2ZcIjtcclxuICAgICAgICBnZXREYXRhKGVzc3BlY2lhbFVybCwgXCJuZXdzXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzaG93TmV3cyhkYXRhQXJ0aWNsZXM6IEFydGljbGVUeXBlW10pIHtcclxuICAgIG5ld3NCbG9jay5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGxldCBuZXdzOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGxldCBuZXdzSW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgbGV0IG5ld3NDb250ZW50OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGxldCBuZXdzVGl0bGU6IEhUTUxIZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgbGV0IG5ld3NOYW1lOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBsZXQgbGluZTogSFRNTEhSRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICAgICAgbGV0IG5ld3NEZXNjcnB0OiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBsZXQgcmVhZE1vcmU6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIG5ld3MuY2xhc3NOYW1lID0gXCJuZXdzXCI7XHJcbiAgICAgIG5ld3NJbWcuY2xhc3NOYW1lID0gXCJuZXdzLWltZ1wiO1xyXG4gICAgICBuZXdzQ29udGVudC5jbGFzc05hbWUgPSBcIm5ld3MtY29udGVudFwiO1xyXG4gICAgICBuZXdzVGl0bGUuY2xhc3NOYW1lID0gXCJuZXdzLXRpdGxlXCI7XHJcbiAgICAgIG5ld3NOYW1lLmNsYXNzTmFtZSA9IFwibmV3cy1uYW1lXCI7XHJcbiAgICAgIG5ld3NEZXNjcnB0LmNsYXNzTmFtZSA9IFwibmV3cy1kZXNjcnB0XCI7XHJcbiAgICAgIHJlYWRNb3JlLmNsYXNzTmFtZSA9IFwicmVhZC1tb3JlXCI7XHJcbiAgICAgIG5ld3NJbWcuc3JjID0gZGF0YUFydGljbGVzW2ldLnVybFRvSW1hZ2U7XHJcbiAgICAgIG5ld3NUaXRsZS5pbm5lckhUTUwgPSBkYXRhQXJ0aWNsZXNbaV0udGl0bGU7XHJcbiAgICAgIG5ld3NOYW1lLmlubmVySFRNTCA9IGRhdGFBcnRpY2xlc1tpXS5zb3VyY2UubmFtZTtcclxuICAgICAgbmV3c0Rlc2NycHQuaW5uZXJIVE1MID0gZGF0YUFydGljbGVzW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICByZWFkTW9yZS5ocmVmID0gZGF0YUFydGljbGVzW2ldLnVybDtcclxuICAgICAgcmVhZE1vcmUuaW5uZXJIVE1MID0gXCJSZWFkIE1vcmVcIjtcclxuICAgICAgbmV3c0Jsb2NrLmFwcGVuZChuZXdzKTtcclxuICAgICAgbmV3cy5hcHBlbmQobmV3c0ltZyk7XHJcbiAgICAgIG5ld3MuYXBwZW5kKG5ld3NDb250ZW50KTtcclxuICAgICAgbmV3c0NvbnRlbnQuYXBwZW5kKG5ld3NUaXRsZSk7XHJcbiAgICAgIG5ld3NDb250ZW50LmFwcGVuZChuZXdzTmFtZSk7XHJcbiAgICAgIG5ld3NDb250ZW50LmFwcGVuZChsaW5lKTtcclxuICAgICAgbmV3c0NvbnRlbnQuYXBwZW5kKG5ld3NEZXNjcnB0KTtcclxuICAgICAgbmV3c0NvbnRlbnQuYXBwZW5kKHJlYWRNb3JlKTtcclxuICAgICAgaWYgKGkgJSAyID09IDEpIHtcclxuICAgICAgICBuZXdzLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvdy1yZXZlcnNlXCI7XHJcbiAgICAgICAgbmV3c0ltZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjAgMjBweCAyMHB4IDBcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbXBvbmVudHMvbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==