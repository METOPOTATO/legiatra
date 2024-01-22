<script>
  export let data;
</script>

<h1 class="title">SẢN PHẨM TRÀ CHẤT LƯỢNG CAO</h1>
<div class="content">
  <div class="product">
    <div class="img">
      <img src={data.p.img} alt="img">
    </div>
    <div class="detail">
      <p class="name">Sét Trà: {data.p.name}</p>
      <div class="p-cost">
        <p class="origin-cost">Giá gốc: {data.p.originCost}đ</p>
        <p class="cost">GIÁ ƯU ĐÃI CHỉ CÒN: {data.p.cost}đ</p>
      </div>
      
      <div class="order">

      </div>
      <div class="consult">

      </div>
    </div>
    <div class="contact">
      <h4>LIÊN HỆ VỚI CHÚNG TÔI</h4>
      <button class="phone">SĐT:03.3310.1033</button>
      <button class="fb"><a href="https://www.facebook.com/legiatra36/">Facebook</a></button>
      <button class="zalo">Zalo: 03.3310.1033</button>
    </div>
  </div>

  <div class="data">
    <div class="data1">
      <p>Sét Trà Bao Gồm</p>
      <ul>
        {#each data.p.data1 as d1}
          <li>{d1}</li>
        {/each}
      </ul>

    </div>
    <div class="data2">{data.p.data2}
    </div>
    <div class="data3">
      <ul>
        {#each data.p.data3 as d3}
          <li>{d3}</li>
        {/each}
      </ul>

    </div>
  </div>

</div>


<style>
  .title{
    text-align: center;
    margin-top: 70px;
    font-weight: 700;
  }
  .content{
    display: flex;
    flex-direction: column;
    width: 65%;
    justify-content: center;
    /* align-items: center; */
    margin-top: 50px;
    margin-bottom: 100px;
    margin-left: 20%;
  }

  .content .product{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .content .product .img{
    width: 420px;
    height: 350px;
    /* margin-right: 50px; */
  }

  .content .product .img img{
    width: 100%;
    border-radius: 10px;
    border: 5px solid rgb(143, 40, 40);
  }

  .content .product .detail{
    margin-left: -30px;
  }

  .content .product .detail .name{
    font-size: 35px;
    font-weight: 600;
  }

  /* .content .product .detail .p-cost{
    display: flex;
    flex-direction: row;
    align-items: center;
  } */
  .content .product .detail .origin-cost{
    font-size: 18px;
    font-weight: 600;
    text-decoration: line-through;
    margin-bottom: 0px;
  }

  .content .product .detail .cost{
    font-size: 25px;
    font-weight: 600;
    text-decoration: underline;
    color: brown;
  }

  .contact{
    display: flex;
    flex-direction: column;
    /* margin-left: 50px; */
    /* width: 230px; */
  }

  .contact h4{
    margin-top: 0px;
    padding-top: 0px;
    text-align: center;
  }

  .contact button{
    background-color: rgb(19, 163, 31);
    color: aliceblue;
    border: none;
    border-radius: 15px;
    padding: 10px 20px 10px 20px;
    margin-bottom: 20px;
  }

  button.fb{
    background-color: #0866FF;
    color: #ffffff;
  }

  button.zalo{
    background-color: #0091ff;
  }

  button a{
    color: #ffffff;
    text-decoration: none;
  }
  
  .content .data {
    font-weight: 200;
    font-size: 18px;
  }
  .content .data .data1{
    display: flex;
    flex-direction: column;
  
  }

  .content .data .data1 p{
    font-size: 24px;
    font-weight: 700;
  }
  .content .data .data1 ul li{
    margin-left: 20px;
  }

  .content .data .data2 {
    margin-bottom: 20px;
  }

  .content .data .data3 ul li{
    list-style-type: none;
  }

@media screen and (max-width: 800px) {
  .content{
    display: flex;
    flex-direction: column;
    
    margin: 0px 0px 0px 0px;
    padding: 0 0 0 0;
    width: 100%;
  } 

  .content .product{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  .content .product .img{
    width: 100%;
    
    height: auto;
    display: flex;
    align-self: center;
  }

  .content .product .img img{
    width: 100%;
  }

  .content .product .detail .name{
    width: 100%;
    text-align: center;
    font-size: 30px;
  }

  .content .product .detail{
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
  .content .data {
    padding-left: 10px;
  }


}
</style>