/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/angular/angular.js":
/*!******************************************!*\
  !*** ../node_modules/angular/angular.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "../node_modules/angular/index.js":
/*!****************************************!*\
  !*** ../node_modules/angular/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./angular */ \"../node_modules/angular/angular.js\");\nmodule.exports = angular;\n\n\n//# sourceURL=webpack:///../node_modules/angular/index.js?");

/***/ }),

/***/ "../node_modules/html-loader/index.js!../src/image-table/image-table.html":
/*!***********************************************************************!*\
  !*** ../node_modules/html-loader!../src/image-table/image-table.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"modal-body\\\" >\\r\\n  <div class=\\\"col-sm-8\\\" style=\\\"height: 400px;overflow: auto;\\\">\\r\\n    <div class=\\\"form-horizontal\\\">\\r\\n      <div class=\\\"form-group\\\">\\r\\n        <input type=\\\"text\\\" style=\\\"display: inline-block; width: 68%;margin-left: 15px;text-transform: uppercase;\\\" class=\\\"form-control\\\" ng-model=\\\"self.inputPattern\\\" ng-blur=\\\"self.updateInformation()\\\">\\r\\n        <div style=\\\"display: inline-block; position: relative;float: right; margin-right: 45px;\\\" >\\r\\n          <button class=\\\"btn btn-default\\\" ng-click=\\\"self.toggleShow()\\\" >Select pattern</button>\\r\\n          <div style=\\\"background-color: white;\\r\\n          position: absolute;\\r\\n          z-index: 100000;\\r\\n          border: 1px solid;\\r\\n          border-radius: 3px;\\r\\n          width: 100%;\\r\\n          list-style: none;\\\" class=\\\"{{ self.isShow ? 'show' : 'hide'}}\\\">\\r\\n          <ul style=\\\"list-style: none; padding-left: 0px;\\\" >\\r\\n            <li class=\\\"isHover\\\" ng-repeat=\\\"(index, pattern) in self.patterns\\\" ><a ng-click=\\\"self.selectPattern(pattern)\\\">{{pattern}}</a></li>\\r\\n          </ul>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    <form enctype='multipart/form-data'>\\r\\n      <div class=\\\"form-group col-sm-12\\\">\\r\\n        <button class=\\\"btn btn-default btn-block\\\" ngf-select=\\\"self.addForUpload($files)\\\" ngf-multiple=\\\"true\\\">\\r\\n          Select Files\\r\\n        </button>\\r\\n      </div>\\r\\n      <div class=\\\"form-group col-sm-12\\\">\\r\\n        <div class=\\\"upload-list\\\">\\r\\n          <ul class=\\\"\\\" style=\\\"padding-left: 0;\\\">\\r\\n            <li class=\\\"list-group-item\\\" ng-repeat=\\\"(index, uploadFile) in self.uploadFileList\\\" style=\\\"margin-bottom: 10px; display: block;overflow: hidden\\\">\\r\\n              <div  style=\\\"width: 100%;float: left;\\\">\\r\\n                <button style=\\\"padding: 0 10px;\\\" class=\\\"btn btn-sm btn-danger pull-right\\\" ng-click=\\\"self.removeFromUpload(index)\\\">\\r\\n                  ×\\r\\n                </button>\\r\\n                <button style=\\\"padding: 0 10px;\\\" class=\\\"btn btn-sm btn-success pull-right\\\" ng-click=\\\"self.showFileUpload(uploadFile.src)\\\">\\r\\n                  Show image\\r\\n                </button>\\r\\n                <h5 class=\\\"list-group-item-heading\\\"  ng-click=\\\"self.showFileUpload(uploadFile.src)\\\" style=\\\"cursor: pointer;\\\">{{uploadFile.name}}</h5>\\r\\n                <span ng-repeat=\\\"brand in uploadFile.information.arrayPattern track by $index\\\" style=\\\"display: block;\\\" >\\r\\n\\r\\n                  <show-edit-field input=\\\"uploadFile.information[brand]\\\" brand=\\\"{{brand}}\\\"></show-edit-field>\\r\\n                </span>\\r\\n                <span ng-if=\\\"uploadFile.information.MORE != null\\\">\\r\\n                  <!-- <b>MORE : </b> -->\\r\\n                  <show-edit-field input=\\\"uploadFile.information.MORE\\\" brand='MORE'></show-edit-field>\\r\\n                  <!-- <div ng-repeat=\\\"(index, infor) in uploadFile.information.MORE\\\" style=\\\"display: block;padding-left: 10px;\\\">\\r\\n                    <show-edit-field input=\\\"uploadFile.information.MORE[index]\\\" is-more='true' brand=''></show-edit-field>\\r\\n                  </div> -->\\r\\n                </span>\\r\\n              </div>\\r\\n            </li>\\r\\n          </ul>\\r\\n        </div>\\r\\n      </div>\\r\\n    </form>\\r\\n  </div>\\r\\n</div>\\r\\n<div class=\\\"col-sm-4\\\" style=\\\"right: 0px;\\\">\\r\\n  <img ng-show=\\\"self.showImage\\\" ng-src=\\\"{{self.src}}\\\" alt=\\\"{{self.nameImage}}\\\" style=\\\"width: 270px;top: 210px;\\\">\\r\\n  <button ng-show=\\\"self.showImage\\\" style=\\\"right: 0;position: absolute;\\\" class=\\\"btn btn-sm btn-danger pull-right\\\" ng-click=\\\"self.showImage = false\\\">\\r\\n    ×\\r\\n  </button>\\r\\n</div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///../src/image-table/image-table.html?../node_modules/html-loader");

/***/ }),

/***/ "../node_modules/html-loader/index.js!../src/show-edit-field/show-edit-field.html":
/*!*******************************************************************************!*\
  !*** ../node_modules/html-loader!../src/show-edit-field/show-edit-field.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div ng-if=\\\"!self.isArray\\\" ng-init=\\\"self.showEdit = true\\\">\\r\\n\\t<b ng-click=\\\"self.showEdit = !self.showEdit\\\" >{{self.brand}} : </b>\\r\\n\\t<span ng-show=\\\"self.showEdit\\\" ng-click=\\\"self.showEdit = !self.showEdit\\\">\\r\\n\\t\\t{{self.input}}\\r\\n\\t</span>\\r\\n\\t<span>\\r\\n\\t\\t<input ng-show=\\\"!self.showEdit\\\" type=\\\"text\\\" style=\\\"display: inline-block; width: auto;\\\" class=\\\"form-control\\\" ng-model=\\\"self.input\\\" ng-change=\\\"self.input = (self.input | uppercase)\\\" ng-blur=\\\"self.showEdit = !self.showEdit\\\" focus-me=\\\"!self.showEdit\\\">\\r\\n\\t</span>\\r\\n</div>\\r\\n<div ng-if=\\\"self.isArray\\\">\\r\\n\\t<b>{{self.brand}} : </b>\\r\\n\\t<div ng-repeat=\\\"(index, value) in self.input\\\" ng-init=\\\"self.showEdit[index] = true;input = self.input[index]\\\">\\r\\n\\t\\t<span ng-show=\\\"self.showEdit[index]\\\" ng-click=\\\"self.showEdit[index] = !self.showEdit[index]\\\">\\r\\n\\t\\t\\t{{input}}\\r\\n\\t\\t</span>\\r\\n\\t\\t<span>\\r\\n\\t\\t\\t<input ng-show=\\\"!self.showEdit[index]\\\" type=\\\"text\\\" style=\\\"display: inline-block; width: auto;\\\" class=\\\"form-control\\\" ng-model=\\\"input\\\" ng-change=\\\"input = (input | uppercase)\\\" ng-blur=\\\"self.changeValue(input,index)\\\" focus-me=\\\"!self.showEdit[index]\\\">\\r\\n\\t\\t</span>\\r\\n\\t</div>\\r\\n</div>\\r\\n\";\n\n//# sourceURL=webpack:///../src/show-edit-field/show-edit-field.html?../node_modules/html-loader");

/***/ }),

/***/ "../src/image-table/image-table.js":
/*!*****************************************!*\
  !*** ../src/image-table/image-table.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const componentName = 'imageTable';\r\nconst moduleName = 'image-table';\r\nvar angular = __webpack_require__(/*! angular */ \"../node_modules/angular/index.js\");\r\nfunction ImageStableController() {\r\n    const self = this;\r\n    this.showImage = false;\r\n    this.uploadFileList = [];\r\n    this.arrayPattern = [];\r\n    this.patterns = ['WELLNAME','DETPH','UNIT'];\r\n    this.inputPattern = '';\r\n    this.addForUpload = function (files) {\r\n        this.isShow = false;\r\n        if (files && files.length) {\r\n            for(let i in files){\r\n                preProcessImage(files[i],this.inputPattern);\r\n                    this.uploadFileList.push(files[i]);\r\n                console.log(files[i]);\r\n            }\r\n            // this.uploadFileList = this.uploadFileList.concat(files);\r\n        }\r\n        console.log(this.uploadFileList);\r\n    }\r\n    this.isShow = false;\r\n    this.toggleShow = function() {\r\n        this.isShow = !this.isShow;\r\n    }\r\n    this.selectPattern = function (pattern) {\r\n        // console.log('On Click');\r\n        if( this.inputPattern ) {\r\n            if(this.inputPattern[this.inputPattern.length - 1] == '%') {\r\n                this.inputPattern += pattern + '%';\r\n            } else this.inputPattern +='%' + pattern + '%';\r\n        } else {\r\n            this.inputPattern +='%'+ pattern + '%';\r\n        }\r\n        this.updateInformation();\r\n    }\r\n    this.updateInformation = function() {\r\n        for(i in this.uploadFileList) {\r\n            for(j in this.uploadFileList[i].information.arrayPattern) {\r\n                delete this.uploadFileList[i].information[this.uploadFileList[i].information.arrayPattern[j]];\r\n                delete this.uploadFileList[i].information.MORE;\r\n            }\r\n            this.uploadFileList[i].information.arrayPattern = [];\r\n            processUpdate(this.uploadFileList[i],this.inputPattern)\r\n            console.log(this.uploadFileList[i]);\r\n\r\n        }\r\n        // console.log('On Blur');\r\n    } \r\n    this.removeFromUpload = function (index) {\r\n        this.uploadFileList.splice(index,1);\r\n    }\r\n    this.showFileUpload = function(src) {\r\n        this.src = src;\r\n        this.showImage = true;\r\n    }\r\n    var preProcessImage = function(file,pattern) {\r\n        pattern = pattern.toUpperCase();\r\n        pattern = pattern.replace(/MORE/g,'');\r\n        // pattern = pattern.replace('more','');\r\n        pattern = formatString(pattern);\r\n        if(!pattern) pattern = 'WELLNAME%DETPH%UNIT';\r\n        else if (pattern[0] == '%' && pattern[pattern.length - 1] == '%') pattern = pattern.slice(1, pattern.length - 1);\r\n        else if (pattern[0] == '%' ) pattern = pattern.slice(1,pattern.length);\r\n        else if (pattern[pattern.length - 1] == '%') pattern = pattern.slice(0, pattern.length - 1 );\r\n\r\n        var reader = new FileReader();\r\n\r\n        let indexOfExt = file.name.lastIndexOf('.');\r\n        let stringProcess = file.name.toUpperCase().slice(0,indexOfExt);\r\n        let arrayPatternProcess = pattern.split('%');\r\n\r\n        console.log(arrayPatternProcess);\r\n\r\n        let arrayStringProcess = stringProcess.split('-'); \r\n        let arrayPattern = [];\r\n        file.information = {};\r\n        arrayPatternProcess = removeDuplicates(arrayPatternProcess);\r\n\r\n        if( arrayStringProcess.length > arrayPatternProcess.length ) {\r\n            for(let i in arrayPatternProcess ) {\r\n                file.information[arrayPatternProcess[i]] = arrayStringProcess[i] || '';\r\n                arrayPattern.push(arrayPatternProcess[i]);\r\n            }\r\n            file.information['MORE'] = [];\r\n            for(let i = arrayPatternProcess.length; i < arrayStringProcess.length; i++ )  {\r\n                file.information['MORE'].push(arrayStringProcess[i]);\r\n            }\r\n        } else {\r\n            for(let i in arrayPatternProcess ) {\r\n                file.information[arrayPatternProcess[i]] = arrayStringProcess[i] || '';\r\n                arrayPattern.push(arrayPatternProcess[i]);\r\n            }\r\n        }\r\n\r\n        file.information.arrayPattern = arrayPattern;\r\n        reader.onload = function(data){\r\n            var src = data.target.result;\r\n            file.src = src;\r\n        }\r\n        reader.readAsDataURL(file);\r\n    }\r\n    var processUpdate = function(file, pattern) {\r\n        pattern = pattern.toUpperCase();\r\n        pattern = pattern.replace(/MORE/g,'');\r\n        // pattern = pattern.replace('more','');\r\n        pattern = formatString(pattern);\r\n        if(!pattern) pattern = 'WELLNAME%DETPH%UNIT';\r\n        else if (pattern[0] == '%' && pattern[pattern.length - 1] == '%') pattern = pattern.slice(1,pattern.length-1);\r\n        else if (pattern[0] == '%' ) pattern = pattern.slice(1,pattern.length);\r\n        else if (pattern[pattern.length - 1] == '%') pattern = pattern.slice(0,pattern.length-1);\r\n\r\n        let indexOfExt = file.name.lastIndexOf('.');\r\n        let stringProcess = file.name.toUpperCase().slice(0,indexOfExt);\r\n        // let patternProcess = pattern.toUpperCase();\r\n        let arrayPatternProcess = pattern.split('%');\r\n\r\n        // console.log(arrayPatternProcess);\r\n\r\n        let arrayStringProcess = stringProcess.split('-'); \r\n        let arrayPattern = [];\r\n        file.information = {};\r\n        arrayPatternProcess = removeDuplicates(arrayPatternProcess);\r\n        if( arrayStringProcess.length > arrayPatternProcess.length ) {\r\n            for(let i in arrayPatternProcess ) {\r\n                file.information[arrayPatternProcess[i]] = arrayStringProcess[i] || '';\r\n                arrayPattern.push(arrayPatternProcess[i]);\r\n            }\r\n            file.information['MORE'] = [];\r\n            for(let i = arrayPatternProcess.length; i < arrayStringProcess.length; i++ )  {\r\n                file.information['MORE'].push(arrayStringProcess[i]);\r\n            }\r\n        } else {\r\n            for(let i in arrayPatternProcess ) {\r\n                file.information[arrayPatternProcess[i]] = arrayStringProcess[i] || '';\r\n                arrayPattern.push(arrayPatternProcess[i]);\r\n            }\r\n        }\r\n        file.information.arrayPattern = arrayPattern;\r\n    }\r\n    var formatString = function (pattern) {\r\n        let myPattern = '';\r\n        for (let i = 0 ; i < pattern.length - 1; i++ ) {\r\n            if( pattern[i] != '%' || pattern[i - 1 ] !='%' || i < 1 ) {\r\n                myPattern += pattern[i];\r\n            }\r\n        }\r\n        console.log(myPattern);\r\n        return myPattern;\r\n        // pattern = myPattern\r\n        // angular.copy(pattern,) ;\r\n    }\r\n    var removeDuplicates = function (a) {\r\n        return Array.from(new Set(a));\r\n    }\r\n}\r\n\r\nlet app = angular.module(moduleName, []);\r\n\r\napp.component(componentName, {\r\n    template: __webpack_require__(/*! html-loader!./image-table.html */ \"../node_modules/html-loader/index.js!../src/image-table/image-table.html\"),\r\n    controller: ImageStableController,\r\n    controllerAs: 'self',\r\n    bindings: {\r\n        uploadFileList: '=',\r\n    }\r\n});\r\nexports.name = moduleName;\n\n//# sourceURL=webpack:///../src/image-table/image-table.js?");

/***/ }),

/***/ "../src/main.js":
/*!**********************!*\
  !*** ../src/main.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.imageTable = __webpack_require__(/*! ./image-table/image-table */ \"../src/image-table/image-table.js\");\r\nexports.showEditField = __webpack_require__(/*! ./show-edit-field/show-edit-field */ \"../src/show-edit-field/show-edit-field.js\");\n\n//# sourceURL=webpack:///../src/main.js?");

/***/ }),

/***/ "../src/show-edit-field/show-edit-field.js":
/*!*************************************************!*\
  !*** ../src/show-edit-field/show-edit-field.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const componentName = 'showEditField';\r\nconst moduleName = 'show-edit-field';\r\nvar angular = __webpack_require__(/*! angular */ \"../node_modules/angular/index.js\");\r\nfunction ShowEditImportController() {\r\n    let self = this;\r\n    this.$onInit = function() {\r\n        // this.showInput = this.input;\r\n        this.isArray = Array.isArray(this.input);\r\n    }\r\n    this.changeValue = function(input,index) {\r\n        this.showEdit[index] = !this.showEdit[index];\r\n        this.input[index] = input;    \r\n    }\r\n}\r\n\r\nlet app = angular.module(moduleName, []);\r\n\r\napp.component(componentName, {\r\n    template: __webpack_require__(/*! html-loader!./show-edit-field.html */ \"../node_modules/html-loader/index.js!../src/show-edit-field/show-edit-field.html\"),\r\n    controller: ShowEditImportController,\r\n    controllerAs: 'self',\r\n    bindings: {\r\n        input: '=',\r\n        brand: '@'\r\n    }\r\n});\r\napp.directive('focusMe', ['$timeout', '$parse', function ($timeout, $parse) {\r\n    return {\r\n        link: function (scope, element, attrs) {\r\n            var model = $parse(attrs.focusMe);\r\n            scope.$watch(model, function (value) {\r\n                if (value === true) {\r\n                    $timeout(function () {\r\n                        element[0].focus();\r\n                    });\r\n                }\r\n            });\r\n        }\r\n    };\r\n}]);\r\nexports.name = moduleName;\n\n//# sourceURL=webpack:///../src/show-edit-field/show-edit-field.js?");

/***/ })

/******/ });