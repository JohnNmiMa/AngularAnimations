angular.module('myApp', ['ngAnimate'])
.animation('.ngif-js-animation', function() {
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
})
.animation('.ngrepeat-js-animation', function() {
    return {
        enter : function(element, done) {
            jQuery(element).css({
                position:'relative',
                left:-10,
                opacity:0
            });
            jQuery(element).animate({
                left:0,
                opacity:1
            }, done);
        },

        leave : function(element, done) {
            jQuery(element).css({
                position:'relative',
                left:0,
                opacity:1
            });
            jQuery(element).animate({
                left:-10,
                opacity:0
            }, done);
        },

        move : function(element, done) {
            jQuery(element).css({
                opacity:0.5
            });
            jQuery(element).animate({
                opacity:1
            }, done);
        }
    };
})
.animation('.nginclude-js-animation', function() {
    return {
        enter : function(element, done) {
            jQuery(element).css({
                position:'absolute',
                'z-index':100,
                top:600,
                opacity:0
            });
            jQuery(element).animate({
                top:0,
                opacity:1
            }, 2000, done);
        },

        leave : function(element, done) {
            jQuery(element).css({
                position:'absolute',
                'z-index':101,
                top:0,
                opacity:1
            });
            jQuery(element).animate({
                top:-600,
                opacity:0
                }, 2000, done);
        }
    };
})
.animation('.ngswitch-js-animation', function() {
    return {
        enter : function(element, done) {
            element = jQuery(element);
            element.css({
                position:'absolute',
                height:500,
                left:element.parent().width()
            });
            element.animate({
                left:0
            }, done);
        },

        leave : function(element, done) {
            element = jQuery(element);
            element.css({
                position:'absolute',
                height:500,
                left:0
            });
            element.animate({
                left:-element.parent().width()
            }, done);
        }
    };
})
.animation('.ngclass-js-animation', function() {
    return {
        beforeAddClass : function(element, className, done) {
            if(className == 'disabled3') {
                jQuery(element).animate({
                    'color':'#555',
                    'background-color':'#888',
                    'border-color':'#555'
                }, done);
            }
            else {
                done();
            }
        },

        beforeRemoveClass : function(element, className, done) {
            if(className == 'disabled3') {
                jQuery(element).animate({
                    'color':'#fff',
                    'background-color':'#000'
                }, done);
            }
            else {
                done();
            }
        }
    };
})
.animation('.nghide-js-animation', function() {
    return {
        beforeAddClass : function(element, className, done) {
            if(className == 'ng-hide') {
                jQuery(element).animate({
                    opacity:0
                }, done);
                }
                else {
                    done();
                }
        },
        removeClass : function(element, className, done) {
            if(className == 'ng-hide') {
                element.css('opacity',0);
                jQuery(element).animate({
                    opacity:1
                }, done);
            }
            else {
                done();
            }
        }
    };
});
