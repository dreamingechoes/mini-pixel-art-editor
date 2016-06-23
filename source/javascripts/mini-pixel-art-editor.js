(function ( $ ) {
  var MiniPixelArtEditor;

  $.fn.miniPixelArtEditor = function() {
    this.data('miniPixelArtEditor', new MiniPixelArtEditor(this.get(0), key));
    return this;
  };

  MiniPixelArtEditor = (function() {
    function MiniPixelArtEditor(element, options) {
      this.element = element;
      this.canvas = $(element);
      this.context = el.getContext('2d');
      this.options = $.extend({
        defaultColor: 'black',
        defaultSize: 5
      }, options);
      this.canvas.bind('click mousedown mouseup mousemove mouseleave mouseout touchstart touchmove touchend touchcancel', this.onEvent);
    }

    MiniPixelArtEditor.prototype.download = function() {
      var mime;
      format || (format = "png");
      if (format === "jpg") {
        format = "jpeg";
      }
      mime = "image/" + format;
      return window.open(this.element.toDataURL(mime));
    };
  });

}( jQuery ));
