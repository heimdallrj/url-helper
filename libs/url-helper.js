UrlHelper = {};
UrlHelper.queryParams = {};

UrlHelper.queryParams.getValue = function(q) {
  q = q.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + q + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

if(typeof module !== "undefined") {
  module.exports = UrlHelper;
} else {
  window.UrlHelper = UrlHelper;
}
