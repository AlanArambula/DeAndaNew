'use strict'

TweenMax.from(".logo", 1, {
    delay: 1,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from(".right", 1, {
    delay: 0.2,
    width: 0,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom(".nav ul li", 2, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.2)
TweenMax.from(".title", 2, {
    delay: 1.6,
    x: 40,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".desc", 2, {
    delay: 1.8,
    x: 40,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".right-sidebar ul li", 1, {
    delay: 1.6,
    x: -40,
    opacity: 0,
    ease: Power3.easeInOut
}, 0.08);
TweenMax.from(".product img", 3, {
    delay: 2,
    scale: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".left-bottom", 2, {
    delay: 1.4,
    x: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom(".media ul li", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.2)