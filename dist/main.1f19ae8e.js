// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data.json":[function(require,module,exports) {
module.exports = [{
  "name": "Banshee",
  "evidence": {
    "EMF5": false,
    "Spirit Box": false,
    "Fingerprints": true,
    "Ghost Orb": true,
    "Ghost writing": false,
    "Freezing temperature": false,
    "D.O.T.S.": true
  }
}, {
  "name": "Demon",
  "evidence": {
    "EMF5": false,
    "Spirit Box": false,
    "Fingerprints": true,
    "Ghost Orb": false,
    "Ghost writing": true,
    "Freezing temperature": true,
    "D.O.T.S.": false
  }
}, {
  "name": "Goryo",
  "evidence": {
    "EMF5": true,
    "Spirit Box": false,
    "Fingerprints": true,
    "Ghost Orb": false,
    "Ghost writing": false,
    "Freezing temperature": false,
    "D.O.T.S.": true
  }
}, {
  "name": "Hantu",
  "evidence": {
    "EMF5": false,
    "Spirit Box": false,
    "Fingerprints": true,
    "Ghost Orb": true,
    "Ghost writing": false,
    "Freezing temperature": true,
    "D.O.T.S.": false
  }
}, {
  "name": "Jinn",
  "evidence": {
    "EMF5": true,
    "Spirit Box": false,
    "Fingerprints": true,
    "Ghost Orb": false,
    "Ghost writing": false,
    "Freezing temperature": true,
    "D.O.T.S.": false
  }
}, {
  "name": "Mare",
  "evidence": {
    "EMF5": false,
    "Spirit Box": true,
    "Fingerprints": false,
    "Ghost Orb": true,
    "Ghost writing": true,
    "Freezing temperature": false,
    "D.O.T.S.": false
  }
}, {
  "name": "Mimic",
  "evidence": {
    "EMF5": false,
    "Spirit Box": true,
    "Fingerprints": true,
    "Ghost Orb": true,
    "Ghost writing": false,
    "Freezing temperature": true,
    "D.O.T.S.": false
  }
}, {
  "name": "Myling",
  "evidence": {
    "EMF5": true,
    "Spirit Box": false,
    "Fingerprints": true,
    "Ghost Orb": false,
    "Ghost writing": true,
    "Freezing temperature": false,
    "D.O.T.S.": false
  }
}, {
  "name": "Obake",
  "evidence": {
    "EMF5": true,
    "Spirit Box": false,
    "Fingerprints": true,
    "Ghost Orb": true,
    "Ghost writing": false,
    "Freezing temperature": false,
    "D.O.T.S.": false
  }
}, {
  "name": "Oni",
  "evidence": {
    "EMF5": true,
    "Spirit Box": false,
    "Fingerprints": false,
    "Ghost Orb": false,
    "Ghost writing": false,
    "Freezing temperature": true,
    "D.O.T.S.": true
  }
}, {
  "name": "Onryo",
  "evidence": {
    "EMF5": false,
    "Spirit Box": true,
    "Fingerprints": false,
    "Ghost Orb": true,
    "Ghost writing": false,
    "Freezing temperature": true,
    "D.O.T.S.": false
  }
}, {
  "name": "Phantom",
  "evidence": {
    "EMF5": false,
    "Spirit Box": true,
    "Fingerprints": true,
    "Ghost Orb": false,
    "Ghost writing": false,
    "Freezing temperature": false,
    "D.O.T.S.": true
  }
}, {
  "name": "Poltergeist",
  "evidence": {
    "EMF5": false,
    "Spirit Box": true,
    "Fingerprints": true,
    "Ghost Orb": false,
    "Ghost writing": true,
    "Freezing temperature": false,
    "D.O.T.S.": false
  }
}, {
  "name": "Raiju",
  "evidence": {
    "EMF5": true,
    "Spirit Box": false,
    "Fingerprints": false,
    "Ghost Orb": true,
    "Ghost writing": false,
    "Freezing temperature": false,
    "D.O.T.S.": true
  }
}, {
  "name": "Revenant",
  "evidence": {
    "EMF5": false,
    "Spirit Box": false,
    "Fingerprints": false,
    "Ghost Orb": true,
    "Ghost writing": true,
    "Freezing temperature": true,
    "D.O.T.S.": false
  }
}, {
  "name": "Shade",
  "evidence": {
    "EMF5": true,
    "Spirit Box": false,
    "Fingerprints": false,
    "Ghost Orb": false,
    "Ghost writing": true,
    "Freezing temperature": true,
    "D.O.T.S.": false
  }
}, {
  "name": "Spirit",
  "evidence": {
    "EMF5": true,
    "Spirit Box": true,
    "Fingerprints": false,
    "Ghost Orb": false,
    "Ghost writing": true,
    "Freezing temperature": false,
    "D.O.T.S.": false
  }
}, {
  "name": "The Twins",
  "evidence": {
    "EMF5": true,
    "Spirit Box": true,
    "Fingerprints": false,
    "Ghost Orb": false,
    "Ghost writing": false,
    "Freezing temperature": true,
    "D.O.T.S.": false
  }
}, {
  "name": "Wraith",
  "evidence": {
    "EMF5": true,
    "Spirit Box": true,
    "Fingerprints": false,
    "Ghost Orb": false,
    "Ghost writing": false,
    "Freezing temperature": false,
    "D.O.T.S.": true
  }
}, {
  "name": "Yokai",
  "evidence": {
    "EMF5": false,
    "Spirit Box": true,
    "Fingerprints": false,
    "Ghost Orb": true,
    "Ghost writing": false,
    "Freezing temperature": false,
    "D.O.T.S.": true
  }
}, {
  "name": "Yurei",
  "evidence": {
    "EMF5": false,
    "Spirit Box": false,
    "Fingerprints": false,
    "Ghost Orb": true,
    "Ghost writing": false,
    "Freezing temperature": true,
    "D.O.T.S.": true
  }
}, {
  "name": "Moroi",
  "evidence": {
    "EMF5": false,
    "Spirit Box": true,
    "Fingerprints": false,
    "Ghost Orb": false,
    "Ghost writing": true,
    "Freezing temperature": true,
    "D.O.T.S.": false
  }
}, {
  "name": "Deogen",
  "evidence": {
    "EMF5": false,
    "Spirit Box": true,
    "Fingerprints": false,
    "Ghost Orb": false,
    "Ghost writing": true,
    "Freezing temperature": false,
    "D.O.T.S.": true
  }
}, {
  "name": "Thaye",
  "evidence": {
    "EMF5": false,
    "Spirit Box": false,
    "Fingerprints": false,
    "Ghost Orb": true,
    "Ghost writing": true,
    "Freezing temperature": false,
    "D.O.T.S.": true
  }
}];
},{}],"main.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var data = require("./data.json");

var themeBtn = document.querySelector(".colorSwitch");
var ghostTable = document.querySelector(".ghostsTable");
var openPopup = document.querySelector(".popup");
var modal = document.querySelector(".modal-shadow");
var closePopupBtn = document.querySelector(".closePopup");
var color = true;
var evidenceArr = ["EMF5", "Spirit Box", "Fingerprints", "Ghost Orb", "Ghost writing", "Freezing temperature", "D.O.T.S."];

var setTheme = function setTheme(theme) {
  return document.documentElement.className = theme;
};

var active = [];
var notPosbbileArr = [];
themeBtn.addEventListener("click", function () {
  if (color == true) {
    setTheme("light"), color = false;
  } else {
    setTheme("dark");
    color = true;
  }
});

var handlePopup = function handlePopup() {
  if (modal.style.visibility === "visible") {
    setTimeout(function () {
      modal.style.visibility = "hidden";
    }, 300);
    modal.style.opacity = 0;
  } else {
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
  }
};

window.addEventListener("click", function (e) {
  return e.target === modal ? handlePopup() : false;
});
openPopup.addEventListener("click", handlePopup);
closePopupBtn.addEventListener("click", handlePopup);

var createGhostsTable = function createGhostsTable() {
  data.forEach(function (el) {
    var div = document.createElement("div");
    div.classList.add("ghostBox");
    var ghostName = document.createElement("h3");
    ghostName.classList.add("ghostName");
    ghostName.textContent = el.name;
    var ul = document.createElement("ul");
    ghostTable.appendChild(div);
    div.appendChild(ghostName);
    div.appendChild(ul);
    evidenceArr.forEach(function (elem) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode("".concat(elem)));
      li.classList.add(el.evidence[elem]);
      li.classList.add("evidence");
      ul.appendChild(li);
      ul.classList.add("ghost");
    });
  });
};

createGhostsTable();
var ghosts = document.querySelectorAll(".ghost");

var ghostRemaining = _toConsumableArray(ghosts);

var checkGhosts = function checkGhosts() {
  ghostRemaining.forEach(function (el) {
    var ghostArr = [];

    for (var i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].classList.contains("true")) {
        ghostArr.push(el.childNodes[i].textContent);
      }

      var found = active.every(function (r) {
        return ghostArr.indexOf(r) >= 0;
      });

      if (found === true) {
        el.parentElement.style.background = "green";
      } else {
        el.parentElement.style.background = "gray";
      }

      if (active.length === 0 && notPosbbileArr.length === 0) {
        el.parentElement.style.background = "none";
      }
    }
  });
};

var checkNotPossible = function checkNotPossible() {
  ghostRemaining.forEach(function (el) {
    var notGhostArr = [];

    for (var i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].classList.contains("false")) {
        notGhostArr.push(el.childNodes[i].textContent);
      }

      var foundNot = notPosbbileArr.every(function (r) {
        return notGhostArr.indexOf(r) >= 0;
      });

      if (foundNot === true) {
        el.parentElement.style.background = "green";
      } else {
        el.parentElement.style.background = "gray";
      }

      if (active.length === 0 && notPosbbileArr.length === 0) {
        el.parentElement.style.background = "none";
      }
    }
  });
};

var addEvidence = function addEvidence(x, e, z) {
  var value = x;

  if (active.includes(value)) {
    active = active.filter(function (item) {
      return item !== value;
    });
    e.classList.remove("activeEvidence");
  } else if (notPosbbileArr.includes(value) || notPosbbileArr.length >= 0) {
    active.push(value);
    e.classList.add("activeEvidence");
    notPosbbileArr = notPosbbileArr.filter(function (item) {
      return item !== value;
    });
    z.classList.remove("excludedEvidence");
  }

  checkGhosts();
};

var checkNotPossibleGhosts = function checkNotPossibleGhosts(x, e, z) {
  var value = x;

  if (notPosbbileArr.includes(value)) {
    notPosbbileArr = notPosbbileArr.filter(function (item) {
      return item !== value;
    });
    console.log(notPosbbileArr);
    z.classList.remove("excludedEvidence");
  } else if (active.includes(value) || active.length >= 0) {
    active = active.filter(function (item) {
      return item !== value;
    });
    e.classList.remove("activeEvidence");
    notPosbbileArr.push(value);
    z.classList.add("excludedEvidence");
    console.log(notPosbbileArr);
  }

  checkNotPossible();
};

var excludedEvidences = document.querySelectorAll(".excluded");
var confirmedEvidences = document.querySelectorAll(".confirmed");

var handleConfirmed = function handleConfirmed(el) {
  confirmedEvidences.forEach(function (ele) {
    addEvidence("".concat(el.innerHTML), ele, el);
  });
};

confirmedEvidences.forEach(function (el) {
  el.addEventListener("click", function () {
    handleConfirmed(el);
  });
});

var handleExcluded = function handleExcluded(el) {
  confirmedEvidences.forEach(function (ele) {
    checkNotPossibleGhosts("".concat(el.innerHTML), ele, el);
  });
};

excludedEvidences.forEach(function (el) {
  el.addEventListener("click", function () {
    handleExcluded(el);
  });
});
},{"./data.json":"data.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59469" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map