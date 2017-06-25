$( document ).ready(function() {
    var heights = $(".eq-height").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".eq-height").height(maxHeight);
});
