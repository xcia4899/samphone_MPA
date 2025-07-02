

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
          gsap.to(".row-01", {
            scrollTrigger: {
              trigger: ".row-01",
              start: "top top",
              end: "+=2000",  // 滾動距離 2000px 後解除固定
              scrub: true,
              pin: true,
              markers: true, // 開發時用，記得完成後刪掉
            },
          });
        });

      }
    }
  },
  mounted() {
    document.body.classList.add("no-scroll");
    gsap.registerPlugin(ScrollTrigger);
    // 這裡不要執行 .block1還沒出現
  }

};
