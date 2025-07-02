export const indexdrop = {
  data() {
    return {
      introPlayed: false
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
          this.blockSetAni();
        });
      }
    },
    // 動畫執行函式
    scrollAnimation(selector, animation, scroll) {
      gsap.to(selector, {
        ...animation,//動畫執行
        scrollTrigger: {
          trigger: selector,//目標
          start: scroll.start,
          end: scroll.end,
          scrub: true,       // 動畫隨滾動進度同步播放
          pin: scroll.pin || false,  // 是否固定元素（黏住）
          markers: true, // 確認其始結束位子正式用移除
        },
      });
    },
    // row 固定動畫
    rowSetAni() {
      const rows = [
        {
          selector: ".row-01",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=2000", pin: true },
            },
          ],
        },
        {
          selector: ".row-02",
          steps: [
            {
              animation: {},
              scroll: { start: "top top", end: "+=2000", pin: true },
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
      ];

      rows.forEach(({ selector, steps }) => {
        steps.forEach(({ animation, scroll }) => {
          this.scrollAnimation(selector, animation, scroll);
        });
      });
    },
    // block動畫
    blockSetAni() {
      const blocks = [
        {
          selector: ".block1",
          steps: [
            { animation: { rotate: 0, opacity: 0.8 }, scroll: { start: "top 80%", end: "900" } },
            { animation: { rotate: 360, opacity: 1 }, scroll: { start: "1000", end: "1200" } },
            { animation: { rotate: -180, opacity: 1 }, scroll: { start: "1500", end: "2000" } },
          ],
        },
        {
          selector: ".block2",
          steps: [
            { animation: { x: 50, opacity: 0.7 }, scroll: { start: "top 95%", end: "top 50%" } },
            { animation: { x: 100, opacity: 0.8 }, scroll: { start: "top 50%", end: "top 20%" } },
          ],
        },
        {
          selector: ".block3",
          steps: [
            { animation: { y: -25, opacity: 0.8 }, scroll: { start: "top 100%", end: "top 60%" } },
            { animation: { y: -50, scale: 0.8, opacity: 0.6 }, scroll: { start: "top 60%", end: "top 40%" } },
          ],
        },
        {
          selector: ".block4",
          steps: [
            { animation: { x: 100, opacity: 0.7 }, scroll: { start: "top 95%", end: "top 70%" } },
            { animation: { x: 200, scale: 0.5, opacity: 0.3 }, scroll: { start: "top 70%", end: "top 30%" } },
          ],
        },
        {
          selector: ".block5",
          steps: [
            { animation: { scale: 1.1, y: 50 }, scroll: { start: "top 90%", end: "top 70%" } },
            { animation: { scale: 1.2, y: 100 }, scroll: { start: "top 70%", end: "top 30%" } },
          ],
        },
        {
          selector: ".block6",
          steps: [
            { animation: { x: -50, opacity: 0.7 }, scroll: { start: "top 95%", end: "top 60%" } },
            { animation: { x: -100, opacity: 0.5 }, scroll: { start: "top 60%", end: "top 40%" } },
          ],
        },
        {
          selector: ".block7",
          steps: [
            { animation: { scale: 1.3, rotate: 20 }, scroll: { start: "top 100%", end: "top 70%" } },
            { animation: { scale: 1.5, rotate: 45 }, scroll: { start: "top 70%", end: "top 30%" } },
          ],
        },
        {
          selector: ".block8",
          steps: [
            { animation: { y: -50, opacity: 0.8 }, scroll: { start: "top 85%", end: "top 50%" } },
            { animation: { y: -100, opacity: 0.7 }, scroll: { start: "top 50%", end: "top 30%" } },
          ],
        },
        {
          selector: ".block9",
          steps: [
            { animation: { scale: 0.7, opacity: 0.8 }, scroll: { start: "top 95%", end: "top 60%" } },
            { animation: { scale: 0.5, opacity: 1 }, scroll: { start: "top 60%", end: "top 30%" } },
          ],
        },
        {
          selector: ".block10",
          steps: [
            { animation: { x: 75, rotate: 45 }, scroll: { start: "top 90%", end: "top 60%" } },
            { animation: { x: 150, rotate: 90 }, scroll: { start: "top 60%", end: "top 30%" } },
          ],
        },
        {
          selector: ".block11",
          steps: [
            { animation: { y: 75, scale: 1.05 }, scroll: { start: "top 95%", end: "top 60%" } },
            { animation: { y: 150, scale: 1.1 }, scroll: { start: "top 60%", end: "top 30%" } },
          ],
        },
        {
          selector: ".block12",
          steps: [
            { animation: { rotate: 180, opacity: 0.7 }, scroll: { start: "top 90%", end: "top 60%" } },
            { animation: { rotate: 360, opacity: 0.5 }, scroll: { start: "top 60%", end: "top 30%" } },
          ],
        },
      ];

      blocks.forEach(({ selector, steps }) => {
        steps.forEach(({ animation, scroll }) => {
          this.scrollAnimation(selector, animation, scroll);
        });
      });
    },
  },
  mounted() {
    document.body.classList.add("no-scroll");
  }
};
