var handleAccordions = function() {
    $('body').on('shown.bs.collapse', '.accordion.scrollable', function(e) {
        App.scrollTo($(e.target));
    });
};