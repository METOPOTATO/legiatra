<script>
  export let data;
</script>

<h1 class="title">SẢN PHẨM TRÀ CHẤT LƯỢNG CAO</h1>
<div class="content">
  <div class="data">
    <p class="name">{data.p.name}</p>
    <img src={data.p.img} alt="img">
    <p class="cost">GIÁ CHỈ {data.p.cost}</p>
  </div>

  <div class="contact">
    <h4>LIÊN HỆ VỚI CHÚNG TÔI</h4>
    <button class="phone">SĐT:03.3310.1033</button>
    <button class="fb"><a href="https://www.facebook.com/legiatra36/">Facebook</a></button>
    <button class="zalo">Zalo: 03.3310.1033</button>
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
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;
  }
  .data{
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
  }

  .data .name{
    font-size: 25px !important;
    font-weight: 500;
  }

  .data .cost{
    margin-top: 20px;
    font-weight: 600;
  }

  .contact{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* background-color: aquamarine; */
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

@media screen and (max-width: 800px) {
  .content{
    display: flex;
    flex-direction: column;
  }

  .content .data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    width: 100%;
  }

  .content .data .name{
    width: 100%;
  }
}
</style>