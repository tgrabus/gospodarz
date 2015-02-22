/**
 * Created by Tomek on 2014-11-01.
 */

define([], function ()
{
    var strings = function () {}

    strings.prototype.isNullOrEmpty = function isEmpty(source) {
        return (!source || 0 === source.length);
    };

    strings.prototype.format = function(text, placeholders) {
        var s = text;
        for(var propertyName in placeholders) {
            var re = new RegExp('{' + propertyName + '}', 'gm');
            s = s.replace(re, placeholders[propertyName]);
        }
        return s;
    };

    return new strings();
});


