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
      }
    }
  },
  mounted() {
    document.body.classList.add("no-scroll");
  }
};
