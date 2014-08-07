angular.module('myApp', ['ngAnimate'])
.animation('.js-animation', function() {
    /* The following angular-javascript animation will animate the background-color
     * of any element that contains the ".js-animation" class. The jQuery.animate() function
     * is used to do the animation. The enter, leave, etc event functions are called by
     * angularJS at various phases of the animation. The jQuery.animate() function will only
     * animate any numeric CSS property, therefore the background-color will not animate. To make
     * the background-color property animate, the jQuery.color.js plugin was included. */
    return {
        enter : function(element, done) {
            console.log("entering/adding element" + element);
            element.css({"background-color":"#fff"});

            // Don't forget the 'done' parameter
            element.animate({"background-color":"#000"}, 2000, "linear", done);

            return function(cancelled) {
            /* This (optional) function is called when the animation is complete
               or when the animation has been cancelled (which is when
               another animation is started on the same element while the
               current animation is still in progress). */
                if(cancelled) {
                    jQuery(element).stop();
                }
            }
        },

        leave : function(element, done) {
            console.log("leaving/removing element" + element);
            element.css({"background-color":"#000"});

            // Note the done method here as the 2nd param
            element.animate({"background-color":"#fff"}, 2000, "linear", done);

            return function(cancelled) {
                if(cancelled) {
                    jQuery(element).stop();
                }
            }
        },
        move : function(element, done) { done(); },

        beforeAddClass : function(element, className, done) { done(); },
        addClass : function(element, className, done) { done(); },

        beforeRemoveClass : function(element, className, done) { done(); },
        removeClass : function(element, className, done) { done(); },

        allowCancel : function(element, event, className) {}
    };
});
