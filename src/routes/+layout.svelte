<script>
  let display = true;
  function displayMenu(){
    display = !display;
  }

  function hideMenu(){
    display = true;
    console.log('hehehe')
  }
</script>

<header>
  <div class="navbar navbar-expand-lg navbar-light ">
    <div class="icon"><img src="/abc.png" alt="iconimg/abc.png"></div>
    <div class="items">
      <button class="menu" id="menu" on:click={displayMenu}>
        <img src="/1.svg" alt="">
      </button>
        <ul class="navbar-nav" class:display={display}  id="myLinks">
          <li class="nav-item">
            <a class="nav-link" href="/" on:click={hideMenu}>TRANG CHỦ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/products" on:click={hideMenu}>SÉT TRÀ BIẾU</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about" on:click={hideMenu}>VỀ CHÚNG TÔI</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about" on:click={hideMenu}>LIÊN HỆ</a>
          </li>
          <li>
            <a class="nav-link" href="/about" on:click={hideMenu}>GIỎ HÀNG  <img src="shopping-bag.svg" alt="" style="height: 25px;"> </a>
          </li>
        </ul>
      
    </div>

  </div>
</header>

<div class="main">
  <slot></slot>
</div>


<footer>
  <div class="content">
    <div class="colx col1">
      <h1>LÊ GIA TRÀ</h1>
      <p>Hotline: 03.3310.1033</p>
      <p>CS1: LK23, Khu Đô Thị Sông Hồng, Trâu Quỳ, Gia Lâm, Hà Nội</p>
      <p>CS2:  47 Đường Lái Thiêu 16, KP Bình Hòa, Phường Lái Thiêu, TP Thuận An, Bình Dương</p>
      <p>Email: legiatra@gmail.com</p>
    </div>
    <div class="colx col2">
      <h1>CHÍNH SÁCH HỖ TRỢ</h1>
      <p>Hướng dẫn thanh toán</p>
      <p>Hướng dẫn đặt hàng</p>
      <p>Chính sách bảo hành đổi trả</p>
      <p>Vân Chuyển và giao nhận</p>
    </div>
    <div class="colx col3">
      <h1>LÊ GIA TRÀ</h1>
      <p>LÊ GIA TRÀ là thương hiệu đi đầu trong việc phát triển các dòng sản phẩm trà chất lượng & quà tặng cao cấp. Sản phẩm được đón nhận trong nước & xuất khẩu sang các thị trường quốc tế.
        Tinh Hoa Trà Việt, Biếu có tâm - Tặng có tầm.
      </p>
  
    </div>
  </div>
  <hr>
  <p>
    Copyright © 2018 - Bản quyền thuộc về Lê Gia Trà
  </p>

</footer>


<style>
  header{
    display: flex;
    background-color: #e0052b;
    justify-content: center;
    flex-direction: row;
  }

  header .navbar{
    width: 70%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
  }

  header .navbar .items button{
    display: none;
  }

  header .navbar a{
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    color: #ffffff;
    font-family: Inter, sans-serif;
    font-size: 15px;
    font-weight: 700;
  }

  header .navbar li{
    display: flex;
    justify-content: center;
    height: 80px;
    align-items: center;
  }

  header .navbar .icon img{
    height: 80px;
  }

  .display{
    display: flex;
  }

  /* footer */
  footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    background-color: #a81d1d;
    opacity: 95%;
    color: #ffffff;
    padding-bottom: 20px;
    padding-top: 50px;
    /* top: 500px; */
  }

  footer .content{
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  footer .col1{
    width: 30%
  }

  footer h1{
    font-size: 25px;
    font-weight: 500;
  }

  footer p{
    font-size: 12px;
    font-weight: 500;
    margin: 5px;
  }

  footer .col2{
    width: 37%;
  }

  footer .col3{
    width: 28%;
  }

  footer hr{
    width: 80%;
  }


@media screen and (max-width: 800px) {
  header{
    width: 100%;
  }
  header .navbar{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between ;
    align-items: center;
    padding: 0;
    margin: 0;
    flex-wrap: nowrap;
  }

  header .navbar .items button{
    display: block;
  }

  header .navbar .icon{
    width: 60px;
    height: 60px;
    margin: 0 0px 0 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header .navbar .items{
    height: 60px;
    flex-wrap: wrap;
  }

  header .navbar .menu{
    height: 60px;
    width: 60px;
    flex-wrap: wrap;
    border: none;
    background-color: transparent;
  }

  header .navbar .menu img{
    background-color: #e0052b;
    height: 30px;
    width: 30px;
  }

  header .navbar .items{
    width: 100%;
    position: absolute;
    left: 0px;
  }

  header .navbar .items ul{
    /* display: {isMenuVisible ? 'block' : 'none'}; */
    /* display: flex;
    flex-direction: column; */
    /* top: 0px; */
    height: 60px;
    width: 100%;
  }
  header .navbar .items ul li{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #e0052b;
    color: #ffffff;
    width: 100%;
    border-top: 1px solid rgb(232, 255, 206);
  }

  header .navbar .items ul li a{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: rgb(240, 248, 255);
    height: 60px;
    font-size: 13px;
  }

  .display{
    display: none;
  }

  footer .content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  footer .col1{
    width: 100%
  }
  footer .col3{
    width: 100%
  }
  footer .col2{
    width: 100%
  }
}
</style>
