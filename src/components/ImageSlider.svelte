<script>
  // List ảnh (bạn thay bằng list của bạn)
  export let images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg"
  ];

  let currentIndex = 0;

  function prev() {
    currentIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  }

  function next() {
    currentIndex =
      currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  }
</script>

<div class="slider">
  <button class="arrow left" on:click={prev}>❮</button>

  <img
    src={images[currentIndex]}
    alt="slider image"
    class="slide"
    max-width="470px"
    max-height="300px"
  />

  <button class="arrow right" on:click={next}>❯</button>
</div>

<style>
  .slider {
    position: relative;
    width: 410px;
    height: 270px;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
    object-fit: scale-down ;
  }

  .slide {
    width: 100%;
    height: 100%;

    border-radius: 12px;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    font-size: 24px;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 50%;
  }

  .left {
    left: 10px;
  }

  .right {
    right: 10px;
  }

  .arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }
</style>
