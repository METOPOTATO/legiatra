<script>
  import { goto } from '$app/navigation';

  export let data;

  let pcount = 0;

  let result = null;

  let phoneNumber = '';
  let isValid = false;

  async function sendPhonenumber(){
    const phoneRegex = /^(0|\+84)\d{9,10}$/;
    isValid = phoneRegex.test(phoneNumber);
    if (isValid){
      const res = await fetch('https://api.legiatra.com/contact', {
			  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'phone': phoneNumber
        })
      })
      
      const json = await res.json()

      if (json.result === "ok"){
        alert('Đã gửi thành công, chúng mình sẽ gọi lại cho bạn sớm nhất !')
        phoneNumber = '';
      }
    }
    else{
      console.log('Số điện thoại không hợp lệ!')
    }
	}

  function toOrderDetail(){
    goto(`/order?product=${data.p.id}&qty=${pcount}`)
  }
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
        <div class="value">
          <button on:click={()=>{ pcount > 0? pcount--: pcount ==0 }}>-</button>
          <span>{pcount}</span>
          <button on:click={()=>{pcount ++}}>+</button>
        </div>
        <div>
          <button class="btn-order" on:click={toOrderDetail}>Đặt hàng ngay</button>
        </div>
         
      </div>
      <div class="consult">
        <p>Nhập số điện thoại để chúng mình tư vấn nhé!</p>
        <input type="text" placeholder="Nhập số điện thoại" bind:value={phoneNumber} > 
        <button on:click={sendPhonenumber}>Gửi</button>
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

  .content .product .detail .consult{
    margin: 20px 20px 20px 0;
    padding: 20px;
    border: 3px solid rgb(216, 21, 21);
  }

  .content .product .detail .consult p{
    font-size: 18px;
    font-weight: 600;
  }
  .content .product .detail .consult input{
    height: 40px;
    border: 2px solid rgb(216, 21, 21);
    border-radius: 5px;
    padding-left: 10px;
  }

  .content .product .detail .consult button{
    height: 40px;
    width: 60px;
    border: none;
    margin-left: 20px;
    color: white;
    background-color: rgb(216, 21, 21);
    font-size: 18px;
    
  }

  .content .product .detail .order .value{
    height: 40px;
    width: 200px;
    background-color: #b0dbfc;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    align-self: center;
    font-size: 25px;
    color: rgb(131, 75, 75);
    border: 1px solid rgb(132, 160, 252);
    float: left;
  }  

  content .product .detail .order .value::after{
    clear: both;
  }

  .content .product .detail .order .btn-order{
    height: 40px;
    width: 140px;
    border: none;
    margin: auto 20px auto 20px;
    background-color: #b0dbfc;
    border: 2px solid #0866FF;
  }
  
  .content .product .detail .order .value button{
    background: #0091ff;
    border: none;
    font-size: 20px;
    font-weight: 600;
    padding: 0 15px 0 15px;
    height: 100%;
    color: #ffffff;
    
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