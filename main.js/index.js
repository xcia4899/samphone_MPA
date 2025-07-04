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
          this.blockSetAniTimeline();  // 改用 timeline 版
        });
      }
    },

    // 你的 row 固定動畫保持不動
    rowSetAni() {
      const rows = [
        {
          selector: ".background-fixed",
          steps: [
            {
              animation: { top: 300 },
              scroll: { start: "top top", end: "+=1000", pin: false },
            },
          ],
        },
        {
          selector: ".row-01",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=3600", pin: true },
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
              scroll: { start: "top top", end: "+=3000", pin: true },
            },
          ],
        },
        {
          selector: ".row-02 .r2-img ",
          steps: [
            {
              animation: { width: "60%",padding:16 },
              scroll: { start: "top+=200", end: "+=1000", pin: false },
            },
          ],
        },
        {
          selector: ".row-03",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=2000", pin: true },
            },
          ],
        },
         {
          selector: ".row-03 .r3-img ",
          steps: [
            {
              animation: { width: "60%",padding:16 },
              scroll: { start: "top+=200", end: "+=1000", pin: false },
            },
          ],
        },
      ];

      rows.forEach(({ selector, steps }) => {
        steps.forEach(({ animation, scroll }) => {
          this.scrollAnimation(selector, animation, scroll);
        });
      });
    },

    // 你的 scrollAnimation 保留給 row
    scrollAnimation(selector, animation, scroll) {
      gsap.to(selector, {
        ...animation,
        scrollTrigger: {
          trigger: selector,
          start: scroll.start,
          end: scroll.end,
          scrub: true,
          pin: scroll.pin || false,
          markers: true,
        },
      });
    },

    // block 改用 timeline 版本
    blockSetAniTimeline() {
      const blocks = [
        {
          selector: ".block1",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 2 },
            { scaleY: 1, duration: 4, delay: 7 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "600", end: "5000" },
        },
        {
          selector: ".block2",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 2 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "650", end: "5000" },
        },
        {
          selector: ".block3",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 2 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "700", end: "5000" },
        },
        {
          selector: ".block4",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 1, duration: 2 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "750", end: "5000" },
        },
        {
          selector: ".block5",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 2 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "800", end: "5000" },
        },
        {
          selector: ".block6",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 2 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "850", end: "5000" },
        },
        {
          selector: ".block7",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 1, duration: 2 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "900", end: "5000" },
        },
        {
          selector: ".block8",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 2 },
            { scaleY: 1, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "900", end: "5000" },
        },
        {
          selector: ".block9",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 1, duration: 2 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "850", end: "5000" },
        },
        {
          selector: ".block10",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 1, duration: 2 },
            { scaleY: 1, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "950", end: "5000" },
        },
        {
          selector: ".block11",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 0, duration: 2 },
            { scaleY: 1, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "850", end: "5000" },
        },
        {
          selector: ".block12",
          initial: { scaleY: 1 },
          steps: [
            { scaleY: 1, duration: 2 },
            { scaleY: 1, duration: 4, delay: 6 },
            { scaleY: 0, duration: 4, delay: 6 },
            { scaleY: 1, duration: 4, delay: 3 },
          ],
          scrollTrigger: { start: "950", end: "5000" },
        },
      ];

      blocks.forEach(({ selector, initial, steps, scrollTrigger }) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: selector,
            start: scrollTrigger.start,
            end: scrollTrigger.end,
            scrub: true,
            markers: true,
          },
        });

        if (initial) {
          tl.set(selector, initial);
        }

        steps.forEach((step) => {
          tl.to(selector, { ...step });
        });
      });
    },


  },
  mounted() {
    document.body.classList.add("no-scroll");
  },
};
