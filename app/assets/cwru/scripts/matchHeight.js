(function() {

    var resBreakpointSm = App.getResponsiveBreakpoint('sm');
    var width = App.getViewPort().width;

    $(function() {
        // apply matchHeight to each item container's items
        if (width > resBreakpointSm) {
            $('.eq-height').each(function() {
                $(this).children('[class*="col-"]').matchHeight({
                    byRow: true
                });
            });
        }
    });

})();
