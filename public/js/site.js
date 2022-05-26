/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/site.js":
/*!******************************!*\
  !*** ./resources/js/site.js ***!
  \******************************/
/***/ (() => {

// The Data that we wish to display on our graph, an array of Javascript Objects
var data = [{
  'name': "Bar Charts",
  'value': 7
}, {
  'name': "Pie Charts",
  'value': 19
}, {
  'name': "Scatterplots",
  'value': 12
}, {
  'name': "Timelines",
  'value': 14
}, {
  'name': "Node Graphs",
  'value': 23
}, {
  'name': "Tree Graphs",
  'value': 8
}, {
  'name': "Stream Graphs",
  'value': 11
}, {
  'name': "Voronoi Diagrams",
  'value': 14
}]; // Set the dimensions of our chart to be displayed 

var barsWidth = 500,
    barsHeight = 400,
    axisMargin = 100;
var chartHeight = barsHeight + axisMargin,
    chartWidth = barsWidth + axisMargin; // Select the chart element on the page so we can reference it in code
// Also set the width and height attributes of the chart SVG 

var chart = d3.select('#chart').attr('width', chartWidth + 100).attr('height', chartHeight); // Create a linear scale for our y-axis to map datapoint values to pixel heights of bars

var yScale = d3.scaleLinear().domain([0, d3.max(data, function (d) {
  // return the value property of each datapoint so the max function can compare
  return d.value;
})]).rangeRound([barsHeight, 0]); // Create a scale that returns the bands each bar should be in along the x-axis

var xScale = d3.scaleBand().domain(data.map(function (d) {
  // For each datapoint in our data array
  // Return the name property into our new domain array
  return d.name;
})).rangeRound([0, barsWidth]).padding(0.1); // Create an SVG group that we will add the individual bar elements of our chart to

var bars = chart.append('g').attr('id', "bars-container"); // Bind the data to our .bars svg elements
// Create a rectangle for each data point and set position and dimensions using scales

bars.selectAll('.bar').data(data).enter().append("rect").attr('class', "bar").attr('x', function (d) {
  return xScale(d.name);
}).attr('y', function (d) {
  return yScale(d.value);
}).attr('width', xScale.bandwidth()).attr('height', function (d) {
  return barsHeight - yScale(d.value);
}); // Move the bars so that there is space on the left for the y-axis

bars.attr('transform', 'translate(' + axisMargin + ',0)'); // Create a new SVG group for the y-axis elements
// Generate the y-axis with 10 ticks and move into position

yAxis = chart.append('g').attr('id', 'y-axis').call(d3.axisLeft(yScale).ticks(10)).attr('transform', 'translate(' + axisMargin + ',0)'); // Create another group for the x-axis elements
// Generate the x-axis using the our x scale and move into positon
// Select the text elements and rotate by 45 degrees

xAxis = chart.append('g').attr('id', 'x-axis').call(d3.axisBottom(xScale)).attr('transform', 'translate(' + axisMargin + ',' + barsHeight + ')').selectAll("text").style("text-anchor", 'start').attr('transform', 'rotate(45)');

/***/ }),

/***/ "./resources/css/tailwind.css":
/*!************************************!*\
  !*** ./resources/css/tailwind.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/site": 0,
/******/ 			"css/tailwind": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tailwind"], () => (__webpack_require__("./resources/js/site.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tailwind"], () => (__webpack_require__("./resources/css/tailwind.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;