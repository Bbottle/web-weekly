"use strict";

~(function (global) {
  var doc = global.document,
      base = undefined;

  base = {
    $: function $(selector) {
      return doc.querySelectorAll(selector);
    }
  };
})(window);
"use strict";

~(function () {
  setTimeout(function () {
    document.getElementById("overlay").classList.add("hide");
  }, 1000);
})();
//# sourceMappingURL=index.js.map