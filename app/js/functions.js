$(document).ready(function() {
    $('pre.copytoclipboard').each(function() {
        $this = $(this);
        $button = $('<button>Copy</button>');
        $this.wrap('<div/>').removeClass('copytoclipboard');
        $wrapper = $this.parent();
        $wrapper.addClass('copytoclipboard-wrapper').css({ position: 'relative' })
        $button.css({ position: 'absolute', top: 10, right: 10 }).appendTo($wrapper).addClass('copytoclipboard btn');
        /* */
        var copyCode = new Clipboard('button.copytoclipboard', {
            target: function(trigger) {
                return trigger.previousElementSibling;
            }
        });
        copyCode.on('success', function(event) {
            event.clearSelection();
            event.trigger.textContent = 'Copied';
            window.setTimeout(function() {
                event.trigger.textContent = 'Copy';
            }, 2000);
        });
        copyCode.on('error', function(event) {
            event.trigger.textContent = 'Press "Ctrl + C" to copy';
            window.setTimeout(function() {
                event.trigger.textContent = 'Copy';
            }, 2000);
        });
    });

    $('#sidebar').affix({
        offset: {
            top: -1
        }
    });

    var $body = $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 10;

    $body.scrollspy({
        target: '#leftCol',
        offset: navHeight
    });
});
