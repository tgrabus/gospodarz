/**
 * Created by Tomek on 2014-11-01.
 */

define([], function () {
    var strings = function () {
    }

    strings.prototype.isNullOrEmpty = function isEmpty(source) {
        return (!source || 0 === source.length);
    };

    strings.prototype.capitalize = function(source) {
        return source.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    };

    return new strings();
});


