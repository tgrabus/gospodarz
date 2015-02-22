/**
 * Created by tgrabus on 2015-02-15.
 */

define([], function() {

    return {
        FRUIT: 1,
        VEGETABLE: 2,
        MEAT: 3,
        DAIRY: 4,

        validate: function(category){
            switch (category) {
                case this.FRUIT:
                case this.VEGETABLE:
                case this.MEAT:
                case this.DAIRY:
                    return true;
                default:
                    return false;
            }
        }
    }
})