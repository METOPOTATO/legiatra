<script>
  import { onMount } from "svelte";

  /**
   * @type {any[]}
   */
  let listData = [];
  onMount(async() =>{
    try{
      const response = await fetch('https://api.legiatra.com/order')
      const data = await response.json();
      listData = data;
      console.log(data)
    }catch{
      console.log('error')
    }
  })

  async function update(id){
    const res = await fetch('https://api.legiatra.com/order', {
			  method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'order_id': id
        })
      })
    
      const data = await res.json()

      listData = data;

  }
</script>

<div>
  <div class="data">
    <div class="customer">
      <div class="name">Người Mua</div>
      <div class="phone">Số Điện Thoại      </div>
      <div class="email">Email</div>
      <div class="address">Địa chỉ</div>
    </div>
    <div class="pname">Tên sản phẩm</div>
    <div class="order">Số Lượng</div>
    <div class="status">Trạng Thái</div>
  </div>
  {#each listData as d}
    <div class="data">
      <div class="customer">
        <div class="name">{d.buyer_name}</div>
        <div class="phone">{d.phone_number}</div>
        <div class="email">{d.email}</div>
        <div class="address">{d.address}</div>
      </div>
      <div class="pname">{d.product_name}</div>
      <div class="order">{d.order_number}</div>
      <div class="status">{d.status}</div>
   
      <div class="btn"><button on:click={()=>{update(d.order_id)}}>Update</button></div>
    </div>
  {/each}
</div>

<style>
.data{
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid black;
  padding-top: 1px;
  margin-left: 30px;
  margin-right: 30px;
}

.data .customer{
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.data .customer .name{
  width: 300px;
}

.data .customer .phone{
  width: 200px;
}

.data .customer .email{
  width: 200px;
}

.data .customer .address{
  width: 100%;
}


.data .pname{
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  /* background-color: antiquewhite; */
}

.data .order{
  display: flex;
  width: 100px;
  height: 40px;
  align-items: center;
  /* background-color: antiquewhite; */
}

.data .status{
  display: flex;
  width: 150px;
  height: 40px;
  align-items: center;
  /* background-color: antiquewhite; */
}

.data .btn{
  display: flex;
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  /* background-color: antiquewhite; */
}

.data .btn button{
  border: none;
  background-color: rgb(81, 192, 243);
  height: 38px;
  width: 100px;
  border-radius: 5px;
}
</style>