<script>
  export let data;
</script>

<div class="products">
  <h1>BỘ SƯU TẬP QUÀ TẾT CAO CẤP 2023 TỪ LÊ GIA TRÀ</h1>
  <h5>TẾT TRAO QUÀ SỨC KHỎE – XUÂN KHỞI SẮC THỊNH VƯỢNG</h5>
  <div class="cards">
    {#each data.products as p}
      <div class="card">
        <a href="/product/{p.id}">
          <img src="product/{p.img}" alt="">
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

<style>
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
  }

  .products{
    text-align: center;
  }

  .products .cards .card{
    width: 100%;
  }

  .report{
    text-align: center;
  }

  .report .profiles{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .report .profiles .profile{
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>