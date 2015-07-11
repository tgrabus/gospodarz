/**
 * Created by tgrabus on 2015-02-15.
 */

define([], function() {

    return {
        FRUIT: 1,
        VEGETABLE: 2,
        MEAT: 3,
        DAIRY: 4,
        MUSHROOM: 5,
        FISH: 6,
        NUT: 7,

        validate: function(category){
            switch (category) {
                case this.FRUIT:
                case this.VEGETABLE:
                case this.MEAT:
                case this.DAIRY:
                case this.MUSHROOM:
                case this.FISH:
                case this.NUT:
                    return true;
                default:
                    return false;
            }
        }
    }
})