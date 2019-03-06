$(function() { 
    var year = (new Date()).getFullYear();
    if ($("footer .year").text() != year) {
        $("footer .year").text(year);
    }
});