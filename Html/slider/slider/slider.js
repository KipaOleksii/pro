class Slider {
  constructor() {
    this.prevBtn = null;
    this.nextBtn = null;
    this.imgSrc = null;
    this.currentIndex = 0;
    this.imgUrls = [];

    this.start = function (elId) {
      let that = this;
      let elSelector = '#' + elId;
      let el = document.querySelector(elSelector);

      this.prevBtn = el.querySelector('.prev-button');
      this.nextBtn = el.querySelector('.next-button');
      this.imgSrc = el.querySelector('.imgCard');

      this.prevBtn.addEventListener("click", function (e) {
        that.onShowPrevImg(e);
      });
      this.nextBtn.addEventListener("click", function (e) {
        that.onShowNextImg(e);
      });

      this.imgUrls.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5y6bbIZkUWbmVFHzdRJ3Je1kobn9QM8WMdg&usqp=CAU"
      );
      this.imgUrls.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXTarEhQ1mGCTm5Cjg6RyjBg6uT8pV8KJng&usqp=CAU"
      );
      this.imgUrls.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0HpuZvXHPjbwR2UolIWlJ9x9MCXQRGV-dg&usqp=CAU"
      );
      this.imgUrls.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMYFoT-jDPg5IpCpTzYnpLe-MqIKxL7Aksg&usqp=CAU"
      );

      this.imgSrc.src = this.imgUrls[this.currentIndex];
      this.prevBtn.disabled = true;
    };
    this.onShowPrevImg = function (e) {
      this.currentIndex--;
      this.imgSrc.src = this.imgUrls[this.currentIndex];
      this.nextBtn.disabled = false;
      if (this.currentIndex === 0) {
        this.prevBtn.disabled = true;
      }
    };
    this.onShowNextImg = function (e) {
      this.currentIndex++;
      this.imgSrc.src = this.imgUrls[this.currentIndex];
      this.prevBtn.disabled = false;
      if (this.currentIndex === this.imgUrls.length - 1) {
        this.nextBtn.disabled = true;
      }
    };
  }
}
