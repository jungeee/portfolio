$(function(){
    const horizontal = document.querySelector("#horizontal");
        const sections = gsap.utils.toArray("#horizontal > section");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top top",
                end: () => "+=" + (horizontal.offsetWidth - innerWidth),
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 / (sections.length - 1),
                    inertia: false,
                    duration: { min: 0.1, max: 0.1 }
                },
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });
        // document.addEventListener('DOMContentLoaded', () => {
        //     new TypeIt('.title') 
        //       .pause(1000)
        //       .delete(7, { delay: 1000 })
        //       .go();
        //   });
          AOS.init()
})