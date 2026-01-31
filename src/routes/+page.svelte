<script>
  import Report from '../components/home/Report.svelte';
  export let data;
</script>

<div class="banner">
  <img src="banner4.jpg" alt="">
</div>
<div class="content">  
  <div class="intro">
    <h1>NÉT VĂN HÓA TRÀ ĐẠO CỦA NGƯỜI VIỆT</h1>
    <h4>PHẨM TRÀ TINH TÚY – KẾT TÌNH TÂM GIAO</h4>
    <div class="imgs">
      <img src="intro/1.jpg" alt="">
      <img src="intro/2.jpg" alt="">
      <img src="intro/3.jpg" alt="">
    </div>
    <p>
      Vào những ngày lễ tết người Việt luôn có thói quen thăm hỏi người thân bạn bè và đặc biệt dành những món quà ý nghĩa để tri ân đồng nghiệp, đối tác, để báo hiếu, trả nghĩa ân tình. Một hộp quà trà Tết cao cấp, sang trọng mang đậm ý nghĩa sức khỏe và nhân văn sâu sắc sẽ giúp mối cho quan hệ đối tác, bằng hữu, người thân gia đình càng trở nên bền chặt, sắt son.
    </p>

    <hr>
    <hr>
  </div>
  
  <div class="products">
    <h1>BỘ SƯU TẬP QUÀ TẾT CAO CẤP 2024 TỪ LÊ GIA TRÀ</h1>
    <h5>TẾT TRAO QUÀ SỨC KHỎE – XUÂN KHỞI SẮC THỊNH VƯỢNG</h5>
    <div class="cards">
      {#each data.products as p}
        <div class="card">
          <a href="/product/{p.id}">
            <img src="product/{p.img}" alt="" style="width: 310px; height: 250px;">
            <p class="category">SÉT TRÀ BIẾU</p>
            <hr>
            <p class="name">{p.name}</p>
            <p class="cost">GIÁ: {p.cost}₫</p>
            <button> MUA NGAY</button>
          </a>
        </div>
      {/each}
    </div>
  </div>
  
  <div class="sale">
  
  </div>
  
  <Report></Report>
  
  <div class="stories">
    
  </div>
</div>


<style>
  .content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .banner img{
    width: 100%;
    /* height: 700px; */
  }

  /* intro */
  .intro{
    /* width: 70%; */
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;

    color: rgb(149, 5, 5);
    font-weight: 600;
  }

  .intro h1{
    text-align: center;
    font-size: 30px;
    font-weight: 800;
  }

  .intro h4{
    font-size: 16px;
    font-weight: 500;
  }

  .intro p{
    width: 70%;
    font-size: 12px;
    text-align: justify;
  }

  .intro .imgs{
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 10px; */
  }

  .intro .imgs img{
    margin: 0 20px 10px 20px;
    width: 350px;
    height: 280px;

    border: 3px solid rgb(175, 17, 17);
    border-radius: 15px;
  }

  .intro hr{
    height: 1px solid rgb(175, 17, 17);
  }

  


  /* products */
  .products{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: rgb(149, 5, 5);
    font-weight: 600;
  }

  .products h1{
    font-size: 30px;
    font-weight: 800;
  }

  .products h5{
    font-size: 16px;
    font-weight: 500;
  }

  .products .cards{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 70%;
  }

  .products .cards .card{
    width: 30%;
    padding: 0;
    margin: 10px 10px 20px 10px;
    border: 3px solid rgb(175, 17, 17);
  }

  .products .cards .card a{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
  }

  .products .cards .card hr{
    height: 3px solid rgb(175, 17, 17);
    border: 1px solid rgb(175, 17, 17);
    width: 80%;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .products .cards .card img{
    width: 100%;
    height: 250px;
  }

  .products .cards .card .category{
    font-weight: 800;
    margin-top: 5px;
    margin-bottom: 0;
  }

  .products .cards .card .name{
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 0;
  }

  .products .cards .card .cost{
    font-size: 11px;
    margin-bottom: 10px;
  }

  .products .cards .card button{
    background-color: rgb(175, 17, 17);
    color: aliceblue;
    border: none;
    border-radius: 15px;
    padding: 0 15px 0 15px;
    margin-bottom: 20px;
  }

@media screen and (max-width: 800px) {
  .intro .imgs{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .products{
    text-align: center;
  }

  .products .cards .card{
    width: 100%;
  }

  .products .cards{

    width: 100%;
  }
}

</style>