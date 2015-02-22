/**
 * Created by tgrabus on 2015-02-15.
 */

define([], function ()
{
    function divideArrayBy(arraySource, spliceDivider)
    {
        var arrays = [];
        var spliceLength = Math.ceil(arraySource.length / spliceDivider);

        while (arraySource.length > 0) {
            arrays.push(arraySource.splice(0, spliceLength));
        }

        return arrays;
    }

    return {
        divideArrayBy: divideArrayBy
    }
});