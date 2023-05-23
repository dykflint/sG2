/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/utils/enums.js":
/*!*******************************!*\
  !*** ./src/js/utils/enums.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "MESSAGE_TYPES": () => (/* binding */ MESSAGE_TYPES)
    /* harmony export */ });
    /**
     * @enum Used in postmessage between SG & Correction tool.
     */
    var MESSAGE_TYPES = {
      GET_AUTH_DATA: "GET_AUTH_DATA",
      AUTH_DATA: "AUTH_DATA",
      RESIZE_IFRAME: "RESIZE_IFRAME"
    };
    
    /***/ }),
    
    /***/ "./src/js/utils/functions.js":
    /*!***********************************!*\
      !*** ./src/js/utils/functions.js ***!
      \***********************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "trimZeroWidthSpace": () => (/* binding */ trimZeroWidthSpace),
    /* harmony export */   "_32_BIT_CHAR_TABLE": () => (/* binding */ _32_BIT_CHAR_TABLE),
    /* harmony export */   "replace32BitChars": () => (/* binding */ replace32BitChars),
    /* harmony export */   "contains32BitChars": () => (/* binding */ contains32BitChars),
    /* harmony export */   "trimSkipSequence": () => (/* binding */ trimSkipSequence),
    /* harmony export */   "countWords": () => (/* binding */ countWords),
    /* harmony export */   "trimSeparators": () => (/* binding */ trimSeparators),
    /* harmony export */   "trimExtraEntries": () => (/* binding */ trimExtraEntries),
    /* harmony export */   "trimgDuplicateSpaces": () => (/* binding */ trimgDuplicateSpaces),
    /* harmony export */   "trimNewline": () => (/* binding */ trimNewline),
    /* harmony export */   "trimAll": () => (/* binding */ trimAll),
    /* harmony export */   "UMLAUT_CHARS": () => (/* binding */ UMLAUT_CHARS),
    /* harmony export */   "replaceWithUmlauts": () => (/* binding */ replaceWithUmlauts),
    /* harmony export */   "containsUmlautPattern": () => (/* binding */ containsUmlautPattern),
    /* harmony export */   "firstUmlautPatternOccurence": () => (/* binding */ firstUmlautPatternOccurence),
    /* harmony export */   "sendIframeMessageToChild": () => (/* binding */ sendIframeMessageToChild),
    /* harmony export */   "sendIframeMessageToParent": () => (/* binding */ sendIframeMessageToParent)
    /* harmony export */ });
    /* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./src/js/utils/enums.js");
    
    /**
     * Removes HTML zero width space character entity &ZeroWidthSpace; from text;
     *
     * @param {String} text Represents the text that will be trimmed.
     * @returns String Represents the text without the zero width space entity.
     */
    
    var trimZeroWidthSpace = function trimZeroWidthSpace(text) {
      return text.replace(/\u200b/gm, "");
    };
    /* Fix German Encoding */
    
    var _32_BIT_CHAR_TABLE = {
      aÌˆ: "Ã¤",
      oÌˆ: "Ã¶"
    };
    /**
     * This function checks if there is a double char aÌˆ represented by
     *  a + 'Ìˆ ' with char codes of 97 + 776, and if found it is replaced with
     *  a single char Ã¤ with charcode of 228.
     *
     * @example aÌˆ [97 + 776 ] => Ã¤ [288]
     * @example oÌˆ [111 + 776 ] => Ã¶ [246]
     */
    
    var replace32BitChars = function replace32BitChars(text) {
      var fixedText = text;
    
      for (var _char in _32_BIT_CHAR_TABLE) {
        var replace = _32_BIT_CHAR_TABLE[_char];
        fixedText = fixedText.replace(new RegExp(_char), replace);
      }
    
      return fixedText;
    };
    /**
     * Checks if the text contains german chars [aÌˆ oÌˆ] that is represented by two chars
     * instead of one.
     *
     * @param {string} text
     * @returns {boolean}
     */
    
    function contains32BitChars(text) {
      if (!text) return false;
      return /aÌˆ|oÌˆ/gim.test(text);
    }
    /**
     * Trims skip sequence i.e. backward slashes.
     *
     * @param {string} text
     * @returns {string}
     */
    
    function trimSkipSequence(text) {
      if (!text) return "";
      return text.replace(/\\/gm, "");
    }
    /**
     * Counts the number of words in a text.
     *
     * @param {string} text
     * @returns {number}
     */
    
    function countWords(text) {
      if (!text) return 0;
      var words = trimSeparators(trimSpecialChars(text).replace(/\n/gm, " ")).split(" ");
      var wordsTrimmed = words.filter(function (word) {
        return trimZeroWidthSpace(word).trim().length;
      });
      return wordsTrimmed.length;
    }
    /**
     * Trim special char separators.
     *
     * @param {string} text
     * @returns {string}
     */
    
    function trimSeparators(text) {
      if (!text) return "";
      return text.replace(/[-!,./_]/gm, "");
    }
    /**
     * Trims:
     * - Newlines \n
     * - Tabs \t
     * - Skip sequence
     * - Duplicate spaces, like more than one space in series
     *
     * @param {string} text
     * @returns {string}
     */
    
    function trimExtraEntries(text) {
      if (!text) return "";
      return trimgDuplicateSpaces(trimNonBreakingSpace(text.replace(/[\n*\t*]/gm, " "))).trim();
    }
    /**
     * Trims duplicate spaces e.g. two or more adjacent spaces.
     *
     * @param {string} text
     * @returns {string}
     */
    
    function trimgDuplicateSpaces(text) {
      if (!text) return "";
      return text.replace(/  +/gm, " ");
    }
    /**
     * Trims HTML entity spaces such as &nbsp; and similar spaces.
     *
     * @param {string} text
     * @returns {string}
     */
    
    function trimNonBreakingSpace(text) {
      if (!text) return "";
      return text.replace(/[\u202F\u00A0\u2000\u2001\u2003\u200b]/gm, "");
    }
    /**
     * Trims new lines.
     *
     * @param {string} text
     * @returns {string}
     */
    
    
    function trimNewline(text) {
      if (!text) return "";
      return text.replace(/\n/gm, "");
    }
    /**
     * Trims all special chars leavning only:
     * - English alphabets.
     * - German Ã¼ Ã¤ Ã¶ ÃŸ.
     * - Numbers.
     * - Spaces.
     *
     * @param {string} text
     * @returns {string}
     */
    
    function trimSpecialChars(text) {
      if (!text) return "";
      return text.replace(/((?![a-zA-zÃ¼Ã¤Ã¶ÃŸ0-9\s]).)+/gim, " ");
    }
    /**
     * Trims:
     * - Duplicate spaces.
     * - Special chars.
     * - New lines and tabs.
     * - No breaking spaces.
     * - Zero width spaces.
     *
     * @param {string} text
     * @returns {string}
     */
    
    
    function trimAll(text) {
      if (!text) return "";
      return trimgDuplicateSpaces(trimNonBreakingSpace(trimSkipSequence(trimSpecialChars(trimZeroWidthSpace(trimExtraEntries(text)))))).trim();
    }
    /* Handle Umlauts */
    
    var UMLAUT_CHARS = {
      u: "Ã¼",
      a: "Ã¤",
      o: "Ã¶",
      s: "ÃŸ"
    };
    /**
     * Replaces backslash + umlaut like char to correspondig German umlaut char.
     *
     * @param {string} text
     * @example \u => Ã¼
     * @example \a => Ã¤
     * @example \o => Ã¶
     * @example \s => ÃŸ
     * @returns {string}
     */
    
    function replaceWithUmlauts(text) {
      if (!text) return "";
      return text.replace(/\\u/gm, "Ã¼").replace(/\\a/gm, "Ã¤").replace(/\\o/gm, "Ã¶").replace(/\\s/gm, "ÃŸ").replace(/\\A/gm, "Ã„").replace(/\\O/gm, "Ã–").replace(/\\U/gm, "Ãœ");
    }
    /**
     * Checks whether any umlaut pattern (\u, \o etc.) exists in the passed text or not.
     *
     * @param {string} text
     * @returns {boolean}
     */
    
    function containsUmlautPattern(text) {
      if (!text) return false;
      return /\\u|\\a|\\s|\\o/gim.test(text);
    }
    /**
     * Gets the first occurence position of the umlaut pattern.
     *
     * @param {string} text
     * @returns {number} Represents first occurence or -1 in case no occurences exist.
     * @example 'ab\u' => 2
     */
    
    function firstUmlautPatternOccurence(text) {
      if (!text) return -1;
      return text.search(/\\u|\\a|\\s|\\o/gim);
    }
    /**
     * Sends messages of certain type and payload it to a child iframe correction tool.
     *
     * @param {MESSAGE_TYPES} type
     * @param {any} payload Message contents to be send
     */
    
    function sendIframeMessageToChild(type, payload) {
      var iframe = document.getElementById("correction-tool-iframe");
      showTypeCheckWarning(type);
    
      if (iframe) {
        var iframeWindow = iframe.contentWindow;
    
        if (iframeWindow) {
          var message = {
            type: type,
            payload: payload
          };
          var targetSite = new URL(iframe.src);
          iframeWindow.postMessage(message, targetSite.origin);
        }
      }
    }
    /* Messaging Between 'Smarter German' & Correction Tool Iframe Utils
     */
    
    /**
     * Sends a message to the iframe parent window.
     *
     * @param {MESSAGE_TYPES} type
     * @param {any} payload Message contents to be send
     */
    
    function sendIframeMessageToParent(type, payload) {
      var _script_global_vars;
    
      var topWindow = getTopWindow();
      var courseSite = (_script_global_vars = script_global_vars) === null || _script_global_vars === void 0 ? void 0 : _script_global_vars.course_site;
      showTypeCheckWarning(type);
    
      if (topWindow && courseSite) {
        var targetSite = new URL(courseSite);
        var origin = targetSite.origin;
        var message = {
          type: type,
          payload: payload
        };
        topWindow.postMessage(message, origin);
      }
    }
    /**
     * Gets the top window of the current window.
     *
     * @returns {Window | undefined}
     */
    
    function getTopWindow() {
      var topWindow = window.top;
    
      if (topWindow == window) {
        console.log("%c No top windows were found", "color: pink");
        return;
      }
    
      return topWindow;
    }
    /**
     * Shows a console alert in case the iframe message type does not match
     * with any expected MESSAGE_TYPES type.
     *
     * @param {any} type
     */
    
    
    function showTypeCheckWarning(type) {
      if (!(type in _enums__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_TYPES)) {
        console.warn("Message type of ".concat(type, " does not exist!"));
      }
    }
    
    /***/ }),
    
    /***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
      \*******************************************************************/
    /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "default": () => (/* binding */ _defineProperty)
    /* harmony export */ });
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
    
      return obj;
    }
    
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
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
    /*!*******************************!*\
      !*** ./src/js/embed/embed.js ***!
      \*******************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
    /* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/enums */ "./src/js/utils/enums.js");
    /* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functions */ "./src/js/utils/functions.js");
    
    
    var _execTable;
    
    
    
    appendIframeWrapper();
    /**
     * Creats & Appends the iframe to the host page.
     */
    
    function appendIframeWrapper() {
      var iframeSrc = getIframeSrc();
    
      if (iframeSrc !== -1) {
        var iframeWrapper = createIframeWrapper(iframeSrc);
        var toolContainer = getIToolContainer();
    
        if (toolContainer !== -1) {
          toolContainer.appendChild(iframeWrapper);
        }
      }
    }
    /**
     * Gets the element that will contain the tool's iframe wrapper.
     *
     * @returns {HTMLLIElement | -1}
     * - HTMLLIElement: If a dataset.containerSelector is found it will return the elment of this
     * selector otherwise it will return the document body.
     * - -1: If dataset.containerSelector is set but no matching element is found.
     */
    
    
    function getIToolContainer() {
      var script = getToolScript();
      if (script === -1) return -1;
      var selector = script.dataset.containerSelector;
    
      if (selector) {
        return document.querySelector(selector) || -1;
      }
    
      return document.body;
    }
    /**
     * Gets correction tool page url that will be the source of the iframe.
     *
     * @returns {string | -1}
     */
    
    
    function getIframeSrc() {
      var script = getToolScript();
    
      if (script === -1 || !script.dataset.toolSrc) {
        console.log("%cCorrection tool script source is not found!", "color: blue;");
        return -1;
      }
    
      return script.dataset.toolSrc;
    }
    /**
     * Gets the tool's embed code script.
     *
     * @returns {HTMLScriptElement | -1}
     */
    
    
    function getToolScript() {
      return document.getElementById("correction-tool-embed-script") || -1;
    }
    /**
     * Creates a wrapper containing the tool's iframe.
     *
     * @param {string} iframeSrc
     * @returns {HTMLElement}
     */
    
    
    function createIframeWrapper(iframeSrc) {
      var iframe = document.createElement("iframe");
      var iframeWrapper = document.createElement("div");
      iframe.id = "correction-tool-iframe";
      iframe.className = "correction-tool-iframe";
      iframe.src = iframeSrc;
      iframe.style.width = "100%";
      iframe.style.overflow = "auto";
      iframe.style.height = "520px";
      iframe.style.resize = "vertical";
      iframe.dir = "rtl";
      iframeWrapper.id = "correction-tool-iframe-wrapper";
      iframeWrapper.className = "correction-tool-iframe-wrapper";
      iframeWrapper.appendChild(iframe);
      return iframeWrapper;
    }
    /**
     * Gets the iframe element.
     *
     * @returns {HTMLIFrameElement}
     */
    
    
    function getIframe() {
      return document.getElementById("correction-tool-iframe");
    }
    /* Handle Messaging Between SG & Correction Tool Iframe*/
    
    
    window.addEventListener("message", handleReceivedIframeMessages);
    var execTable = (_execTable = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_execTable, _utils_enums__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_TYPES.GET_AUTH_DATA, sendSGAuthData), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_execTable, _utils_enums__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_TYPES.RESIZE_IFRAME, resizeIframeHeight), _execTable);
    /**
     * Handles receiving messages from the inner correction tool window.
     *
     * @param {MessageEvent} e
     */
    
    function handleReceivedIframeMessages(e) {
      var data = e.data;
    
      if (data && execTable[data.type]) {
        execTable[data.type](data.payload);
      }
    }
    /**
     * Resize the iframe height to fit the passed height.
     *
     * @param {number} newSize Height in pixels.
     */
    
    
    function resizeIframeHeight(newSize) {
      var iframe = getIframe();
    
      if (iframe && !isNaN(newSize)) {
        iframe.style.height = newSize + "px";
      }
    }
    /**
     * Sends a message to the correction tool's iframe with 'Smarter German'
     * logged in user data.
     */
    
    
    function sendSGAuthData() {
      var auth = getSGAuthData();
    
      if (auth !== -1) {
        (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.sendIframeMessageToChild)(_utils_enums__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_TYPES.AUTH_DATA, auth);
      }
    }
    /**
     * Gets 'Smarter German' logged in user data to send with each request
     * the correction tool makes.
     *
     * @returns {{id: number, email: string, name: string} | -1}
     */
    
    
    function getSGAuthData() {
      if (window.currentUser && typeof window.currentUser === "function") {
        var _window$currentUser = window.currentUser(),
            id = _window$currentUser.id,
            email = _window$currentUser.email,
            name = _window$currentUser.name;
    
        return {
          id: id,
          email: email,
          name: name
        };
      }
    
      return -1;
    }
    /* 
      <script>
            var correctionToolScript = document.createElement('script');
            correctionToolScript.id = "correction-tool-embed-script"
            correctionToolScript.defer = "true";
            
            // Add correction tool's script location
            correctionToolScript.src = "https://corrections.smartergerman.com/wp-content/plugins/correcting-writing-exercises-tool/public/embed/correctionToolEmbed.min.js";
    
            //Add correction tool page url
            correctionToolScript.dataset.toolSrc = "https://corrections.smartergerman.com/correcting_writing_exercises_tool"
            
            // Pass the elment/container selector to which the tool's iframe will be added
            correctionToolScript.dataset.containerSelector = "#tool-container"
            
            if(document.body) {
                document.body.appendChild(correctionToolScript);
            }
        </script>
    */
    })();
    
    /******/ })()
    ;
    //# sourceMappingURL=correctionToolEmbed.min.js.map