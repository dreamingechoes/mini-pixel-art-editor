!function(t){var e;t.fn.miniPixelArtEditor=function(){return this.data("miniPixelArtEditor",new e(this.get(0),key)),this},e=function(){function e(e,o){this.element=e,this.canvas=t(e),this.context=el.getContext("2d"),this.options=t.extend({defaultColor:"black",defaultSize:5},o),this.canvas.bind("click mousedown mouseup mousemove mouseleave mouseout touchstart touchmove touchend touchcancel",this.onEvent)}e.prototype.download=function(){var t;return format||(format="png"),"jpg"===format&&(format="jpeg"),t="image/"+format,window.open(this.element.toDataURL(t))}}}(jQuery);