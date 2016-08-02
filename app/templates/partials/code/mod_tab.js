var handleTabs = function() {
  //activate tab if tab id provided in the URL
  if (location.hash) {
      var tabid = encodeURI(location.hash.substr(1));
      $('a[href="#' + tabid + '"]').parents('.tab-pane:hidden').each(function() {
          var tabid = $(this).attr("id");
          $('a[href="#' + tabid + '"]').click();
      });
      $('a[href="#' + tabid + '"]').click();
  }

  if ($().tabdrop) {
      $('.tabbable-tabdrop .nav-pills, .tabbable-tabdrop .nav-tabs').tabdrop({
          text: '<i class="fa fa-ellipsis-v" aria-hidden="true"></i>&nbsp;<i class="fa fa-angle-down" aria-hidden="true"></i>'
      });
  }
};
