document.observe('dom:loaded', function() {
  setTimeout(function(){
    document.getElementById('search-box').setAttribute("type","search");
  }, 500);

  window.jQuery('#top-panel table tbody tr td :first').html("<span id='heading'>jenkins &middot; continous integration</span>");
  window.jQuery('#heading').parent().parent().attr("style", "");
});
