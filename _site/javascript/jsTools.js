jsTools = (function() {

  function timeString() {
    var d = new Date();
    return '' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds();
  }


  function noCache(script) {
    script += (script.search(/\?/) == -1 ? '?' : '&') + 'timestamp=' + timeString();
    var el = document.createElement('script');
    el.type = 'application/javascript';
    el.src = script;
    document.getElementsByTagName('head')[0].appendChild(el);
  }

  return {
    noCache: noCache
  };
})();
