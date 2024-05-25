(function($) {
    var methods = {
        init: function(options) {
            // Tu código de inicialización original aquí
        },
        update: function(options) {
            // Tu código de actualización original aquí
        },
        show: function(options) {
            var $this = $(this);
            $this.addClass('diamond-effect').stop().fadeTo(options.speed, 1, function() {
                $this.removeClass('diamond-effect');
            });
            if (!options.tip_follows_cursor) {
                $(document).unbind("mousemove");
            }
        },
        hide: function(options) {
            // Tu código de ocultar original aquí
        },
        position: function(options) {
            // Tu código de posicionamiento original aquí
        }
    }

    $.fn.style_my_tooltips = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist");
        }
    };
})(jQuery);
