gsap.to("#page2 h1", {
    transform: "translateX(-65%)",
    scrollTrigger: {
        trigger: "#page2",
        scroll: "body",
        markers: true,
        start: "top 0%",
        end :"top -100%",
        scrub: 2,
        pin: true
    }
})