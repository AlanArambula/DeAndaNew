'use strict'

TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".logo", 2, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".nav ul li", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".social ul li", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.2)

TweenMax.from(".side-strip", 2, {
    delay: 2.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})


TweenMax.from(".row", 2, {
    delay: 2.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".row h3", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".row p", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.3)

TweenMax.from(".header h1", 2, {
    delay: 3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".header h2", 2, {
    delay: 3.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".header p", 2, {
    delay: 3.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".wrapper_form", 2, {
    delay: 3.6,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.2)



