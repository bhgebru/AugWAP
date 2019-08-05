/*jshint esversion: 6 */

(function () {
    "use strict";

    window.onload = function () {


        Array.prototype.sortBubble = function() {

            if(this.length<= 1){
                return this;
            }
            let arr = this.slice(0);
            for(let i =0; i<this.length;i++){
                for(let j =0; j<arr.length-i;j++) {

                    if (arr[j] > arr[j+1]) {
                        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                    }
                }

            }
            return arr;
        };

        String.prototype.filter = function(str){
            let strArr = this.trim().split(" ");
            let strip = strArr.filter(function (elem) {

                    return elem !== str;
            });

            return strip.join(' ');

        };

        console.log("~~~~~~~~~~~ Filter- String ~~~~~~~~~~~");
        console.log("This car is not cool!".filter('not'));
        console.log("~~~~~~~~~~~ Bubble Sort ~~~~~~~~~~~");
        console.log([9,8,0,7,-34,1].sortBubble());
    };


})();
