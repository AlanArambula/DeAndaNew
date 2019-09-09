'use strict'

TweenMax.from(".left-col", 2, {
    width: "0%",
    ease: Expo.easeInOut
})
TweenMax.from(".logo", 2, {
    delay: 2.4,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom(".nav-menu ul li", 1, {
    delay: 2.6,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.2)
TweenMax.from(".side-strip", 2, {
    delay: 2.8,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".title-name", 2, {
    delay: 3,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".title-text", 2, {
    delay: 3.2,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".media p", 2, {
    delay: 3.4,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom(".media ul li", 2, {
    delay: 3.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.1)
TweenMax.from(".about h2", 2, {
    delay: 3.6,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".text-about", 2, {
    delay: 3.8,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".title-photo", 2, {
    delay: 4,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".subtitle-photo", 2, {
    delay: 4.2,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})

