/*
jQuery.reduce - a jQuery plugin for functional programming
@author	John Hunter
created	2010-09-17
use: $.reduce(arr, fnReduce, valueInitial);
fnReduce is called with arguments: [valueInitial, value, i, arr]
	
reduce will never be jQuery core - its not prototype :p (http://dev.jquery.com/ticket/1886)
*/
(function ($) {

    $.reduce = function (arr, fnReduce, valueInitial) {
        if (Array.prototype.reduce) {
            return Array.prototype.reduce.call(arr, fnReduce, valueInitial);
        }

        $.each(arr, function (i, value) {
            valueInitial = fnReduce.call(null, valueInitial, value, i, arr);
        });
        return valueInitial;
    };

})(jQuery);