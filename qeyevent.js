(function($) {
    'use strict';
    function checkKeys(event, keys) {
        var actualKeys = '';
        if(event.ctrlKey)
            actualKeys += 'ctrl+';

        if(event.shiftKey)
            actualKeys += 'shift+';

        if(event.metaKey)
            actualKeys += 'meta+';

	if(event.altKey)
	    actualKeys += 'alt';

        var which = event.which;

        if((which >= 48 && which <= 57) || (which >= 65 && which <= 90)) {
            actualKeys += String.fromCharCode(which);
        }

        return actualKeys.toLowerCase() === keys.toLowerCase();
    }

    $.fn.qeydown = function(keys, handler) {
        this.keydown(function(e) {
            if(checkKeys(e, keys))
                handler(e);
        });
        return this;
    };

    $.fn.qeyup = function(keys, handler) {
        this.keyup(function(e) {
            if(checkKeys(e, keys))
                handler(e);
        });
        return this;
    };

    $.fn.qeypress = function(keys, handler) {
        this.keypress(function(e) {
            if(checkKeys(e, keys))
                handler(e);
        });
        return this;
    };
})(jQuery);
