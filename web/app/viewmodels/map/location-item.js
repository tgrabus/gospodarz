/**
 * Created by tgrabus on 2015-10-30.
 */


define(['knockout'], function(ko)
{
    var Model = function(city)
    {
        this.name = city ? city.name : '';
        this.positionX = city ? city.positionX : null;
        this.positionY = city ? city.positionY : null;
    };

    return Model;
})