export const indexdrop = {
  data() {
    return {
      introPlayed: false,

    };
  },
  methods: {
    onIntroEnd(event) {
      if (event.animationName === "fadeOut") {
        this.introPlayed = true;
        document.body.classList.remove("no-scroll");

        this.$nextTick(() => {

          gsap.registerPlugin(ScrollTrigger);

          this.rowSetAni();
          this.Row01BlockTimeline();  // 改用 timeline 版

        });
      }
    },


    // row 固定動畫
    rowSetAni() {
      const rows = [
        {
          selector: ".background-fixed",
          steps: [
            {
              animation: { top: 300 },
              scroll: { start: "top top", end: "+=1000", },
            },
          ],
        },
        {
          selector: ".row-01",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=6400", pin: true },
              // markers: true,
            },
          ],
        },
        {
          selector: ".row-01 .bg-layer",
          steps: [
            {
              animation: { opacity: 1 },
              scroll: { start: "top top", end: "+=500" },
            },

          ],
        },
        {
          selector: ".row-02 ",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=4000", pin: true },
            },
          ],
        },
        {
          selector: ".row-02 .r2-img ",
          steps: [
            {
              animation: { width: "60%", padding: 16 },
              scroll: { start: "top+=200", end: "+=600", },
              // markers:true,
            },
          ],
        },
        {
          selector: ".row-02 .text-area ",
          steps: [
            {
              animation: { width: "40%", padding: 48 },
              scroll: { start: "top+=200", end: "+=600", },
              // markers:true,
            },
          ],
        },
        {
          selector: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1, },
              scroll: { start: "top+=600 top", end: "+=600", },
              // markers:true,
            },
          ],
        },
        {

          selector: ".row-02 .text-area .content-01",
          trigger: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1, },
              scroll: { start: "top+=1000 top", end: "+=600", },
              // markers:true,
            },
          ],
        },
        {
          selector: ".row-02 .text-area .content-02",
          trigger: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1, },
              scroll: { start: "top+=1400 top", end: "+=600", },
              // markers: true,
            },
          ],
        },
        {
          selector: ".row-02 .text-area .content-03",
          trigger: ".row-02 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1, },
              scroll: { start: "top+=1800 top", end: "+=600", },
              // markers: true,
            },
          ],
        },
        {
          selector: ".row-03 ",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=4000", pin: true },
            },
          ],
        },
        {
          selector: ".row-03 .r3-img ",
          steps: [
            {
              animation: { width: "60%", padding: 16 },
              scroll: { start: "top+=200", end: "+=600", },
              // markers:true,
            },
          ],
        },
        {
          selector: ".row-03 .text-area ",
          steps: [
            {
              animation: { width: "40%", padding: 48 },
              scroll: { start: "top+=200", end: "+=600", },
              // markers:true,
            },
          ],
        },
        {
          selector: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1, },
              scroll: { start: "top+=600 top", end: "+=600", },
              // markers:true,
            },
          ],
        },
        {

          selector: ".row-03 .text-area .content-01",
          trigger: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1, },
              scroll: { start: "top+=1000 top", end: "+=600", },
              // markers:true,
            },
          ],
        },
        {
          selector: ".row-03 .text-area .content-02",
          trigger: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1, },
              scroll: { start: "top+=1400 top", end: "+=600", },
              // markers: true,
            },
          ],
        },
        {
          selector: ".row-03 .text-area .content-03",
          trigger: ".row-03 .text-area .title",
          steps: [
            {
              animation: { y: -32, opacity: 1, },
              scroll: { start: "top+=1800 top", end: "+=600", },
              // markers: true,
            },
          ],
        },

        {
          selector: ".row-04",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=3000", pin: true },
            },
          ],
        },
        {
          selector: ".row-04 .horizontal-area",
          steps: [
            {
              animation: { x: "-66%" },
              scroll: { start: "top 20%", end: "+=3000", },
            },
          ],
        },
      ];

      rows.forEach(({ selector, steps, trigger }) => {
        steps.forEach(({ animation, scroll, markers }) => {
          this.scrollAnimation(selector, animation, scroll, trigger, markers);
        });
      });

    },

    // scrollAnimation 給 row
    scrollAnimation(selector, animation, scroll, trigger, markers = false) {
      gsap.to(selector, {
        ...animation,
        scrollTrigger: {
          trigger: trigger || selector,
          start: scroll.start,
          end: scroll.end,
          scrub: true,
          pin: scroll.pin || false,
          markers: markers,
        },
      });
    },


    // block 改用 timeline 版本
    Row01BlockTimeline() {
      const blocks = [
        {
          selector: ".textani-LT .anitlogo",
          initial: { opacity:1,x: "-100%", },
          // markers: true,
          steps: [
           { opacity:1,x: "-100%", duration: 2 },
            { opacity:1,x: "-100%", duration: 12 },

            { opacity:1,x: "0%", duration: 8 },
            { opacity:1,x: "0%", duration: 16 },

            { opacity:1,x: "0%", duration: 0 },
            { opacity:1,x: "0%", duration: 6 },

            { opacity:0,x: "-100%", duration: 10 },
            { opacity:0,x: "-100%", duration: 4 },

            { opacity:0,x: "-100%", duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=200 20%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".textani-RT .anitlogo",
          initial: { opacity:0,x: "0%", },
          // markers: true,
          steps: [
            { opacity:0,x: "0%", duration: 2 },
            { opacity:1,x: "0%", duration: 14 },

            { opacity:1,x: "0%", duration: 6 },
            { opacity:1,x: "100%", duration: 12 },

            { opacity:1,x: "100%", duration: 4 },
            { opacity:0,x: "100%", duration: 10 },

            { opacity:0,x: "100%", duration: 4 },
            { opacity:0,x: "100%", duration: 4 },

            { opacity:0,x: "100%", duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=200 20%",
            end: "top+=4000 top",
          }
        },
        {
          selector: ".aniwe",
          initial: { y: "100%", },
          // markers: true,
          steps: [
            { y: "100%", duration: 2 },
            { y: "0%", duration: 14 },

            { y: "0%", duration: 6 },
            { y: "100%", duration: 10 },

            { y: "100%", duration: 6 },
            { y: "100%", duration: 10 },

            { y: "100%", duration: 4 },
            { y: "100%", duration: 4 },

            { y: "100%", duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=0 20%",
            end: "top+=4000 top",
          }
        },
        {
          selector: ".aniare",
          initial: { y: "100%", },
          // markers: true,
          steps: [
           { y: "100%", duration: 2 },
            { y: "0%", duration: 14 },

            { y: "0%", duration: 6 },
            { y: "100%", duration: 10 },

            { y: "100%", duration: 6 },
            { y: "100%", duration: 10 },

            { y: "100%", duration: 4 },
            { y: "100%", duration: 4 },

            { y: "100%", duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=100 20%",
            end: "top+=4000 top",
          }
        },
        {
          selector: ".anitech",
          initial: { y: "-100%", },
          // markers: true,
          steps: [
            { y: "-100%", duration: 10 },
            { y: "-100%", duration: 6 },

            { y: "-100%", duration: 8 },
            { y: "0%", duration: 12 },

            { y: "0%", duration: 2 },
            { y: "0%", duration: 12 },

            { y: "100%", duration: 10 },
            { y: "100%", duration: 0 },

            { y: "100%", duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=100 20%",
            end: "top+=4000 top",
          }
        },
        {
          selector: ".anitpro",
          initial: { y: "-100%", },
          // markers: true,
          steps: [
             { y: "-100%", duration: 10 },
            { y: "-100%", duration: 6 },

            { y: "-100%", duration: 6 },
            { y: "0%", duration: 10 },

            { y: "0%", duration: 6 },
            { y: "0%", duration: 16 },

            { y: "100%", duration: 16 },
            { y: "100%", duration: 0 },

            { y: "100%", duration: 0 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=100 20%",
            end: "top+=4000 top",
          }
        },
        {
          selector: ".block1",
          initial: { scaleY: 1 },
          // markers: true,
          steps: [
            { scaleY: 0, duration: 10 },
            { scaleY: 0, duration: 6 },

            { scaleY: 1, duration: 6 },
            { scaleY: 1, duration: 10 },

            { scaleY: 1, duration: 6 },
            { scaleY: 1, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=-300 20%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block2",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 10 },
            { scaleY: 0, duration: 6 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 1, duration: 6 },
            { scaleY: 1, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=-200 20%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block3",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 10 },
            { scaleY: 0, duration: 6 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=-100 20%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block4",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 1, duration: 10 },
            { scaleY: 1, duration: 6 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=0 20%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block5",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 10 },
            { scaleY: 0, duration: 6 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=-300 30%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block6",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 10 },
            { scaleY: 0, duration: 6 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=-200 20%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block7",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 1, duration: 10 },
            { scaleY: 1, duration: 6 },

            { scaleY: 1, duration: 6 },
            { scaleY: 1, duration: 10 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=-100 30%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block8",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 10 },
            { scaleY: 0, duration: 6 },

            { scaleY: 1, duration: 6 },
            { scaleY: 1, duration: 10 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=0 30%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block9",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 1, duration: 10 },
            { scaleY: 1, duration: 6 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 1, duration: 6 },
            { scaleY: 1, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=-300 40%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block10",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 1, duration: 10 },
            { scaleY: 1, duration: 6 },

            { scaleY: 1, duration: 6 },
            { scaleY: 1, duration: 10 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=-200 40%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block11",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 1, duration: 10 },
            { scaleY: 1, duration: 6 },

            { scaleY: 0, duration: 6 },
            { scaleY: 0, duration: 10 },

            { scaleY: 1, duration: 6 },
            { scaleY: 1, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=-100 40%",
            end: "top+=7000 top",
          }
        },
        {
          selector: ".block12",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 10 },
            { scaleY: 0, duration: 6 },

            { scaleY: 1, duration: 6 },
            { scaleY: 1, duration: 10 },

            { scaleY: 1, duration: 6 },
            { scaleY: 1, duration: 10 },

            { scaleY: 0, duration: 4 },
            { scaleY: 0, duration: 4 },

            { scaleY: 1, duration: 10 },
          ],
          scrollTrigger: {
            trigger: ".block1",
            start: "top+=0 40%",
            end: "top+=7000 top",
          }
        },
      ];

      blocks.forEach(({ selector, initial, steps, scrollTrigger, markers }) => {
        this.scrollTimeline(selector, initial, steps, scrollTrigger, markers);
      });
    },
    // timeline 版本
    scrollTimeline(selector, initial, steps, scroll, markers = false) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scroll.trigger || selector,
          start: scroll.start,
          end: scroll.end,
          scrub: true,
          markers: markers,
        },
      });

      if (initial) {
        tl.set(selector, initial);
      }

      steps.forEach((step) => {
        tl.to(selector, { ...step });
      });
    },



  },
  mounted() {
    document.body.classList.add("no-scroll");
    let resizeTimer;

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        ScrollTrigger.refresh();
      }, 200);
    });
  },
};
