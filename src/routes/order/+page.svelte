<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { products } from '../../data.js';

  let productId = '';
  let qty = '';
  let product = '' ;

  let userName = '';
  let phoneNumber = '';
  let address = ''
  let email = ''
  let checkbox = false;
  /**
   * @type {HTMLInputElement | null}
   */
  let ref = null;

  let nameError = false;
  let phoneError = false;
  // let emailError = false;
  let addressError = false;
  let confirmError = false;
  let error = true;

  /**
   * @param {string} id
   */
  function getProduct(id) {
    const p =  products.find((p) => p.id === id)
    return p
  }

  async function sendInfo(){
    let isValid = true;
    if (userName === ''){
      nameError = true;
      isValid = false;
    }else{
      nameError = false;
    }
    if (phoneNumber === ''){
      phoneError = true;
      isValid = false;
    }else{
      phoneError=false;
    }
    // if (email === ''){
    //   emailError = true;
    //   isValid = false;
    // }else{
    //   emailError = false;
    // }
    if (address === ''){
      addressError = true;
      isValid = false;
    }else{
      addressError=false;
    }
    if (checkbox == false){
      confirmError = true;
      isValid = false;
    }else{
      confirmError=false;
    }

    if (isValid){
      let result = null;

      const res = await fetch('https://api.legiatra.com/order', {
			  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'phone': phoneNumber,
          'name': userName,
          'address': address,
          'email': email,
          // @ts-ignore
          'productName': product.name,
          'quantity': qty
        })
      })

      const json = await res.json()
      result = JSON.stringify(json)

      alert('Đơn hàng đã tạo thành công, chúng mình sẽ liên hệ lại sớm nhất cho bạn!')
      // userName = '';
      // phoneNumber = '';
      // address = '';
      // email = '';
      // checkbox = false;
    }

  }

  onMount(() => {
    productId = $page.url.searchParams.get('product') || '';
    qty = $page.url.searchParams.get('qty') || '';
    // @ts-ignore
    product = getProduct(productId) || '';
    // @ts-ignore
    ref.focus()
  });



</script>
<div class="container">
  <div class="content">
    <h1>Đơn hàng của bạn</h1>
    <p>Tên Sản Phẩm: {product.name}</p>
    <p>Số Lượng: {qty}</p>
  
    <div class="name">
      <label for="Name">Họ và Tên</label>
      <input type="text" name="Name" bind:value={userName} bind:this={ref}>
      <p class:error={error} class:name-error={nameError}>Hãy nhập tên</p>
    </div>
  
    <div class="phone">
      <label for="phone">Số Điện thoại</label>
      <input type="text" name="phone" bind:value={phoneNumber} id="input2" >
      <p class:error={error} class="error" class:phone-error={phoneError}>Hãy nhập số điện thoại</p>
    </div>
  
    <div class="address">
      <label for="address">Địa chỉ</label>
      <input type="text" name="address" bind:value={address} id="input3" >
      <p class:error={error} class="error" class:address-error={addressError}>Hãy nhập địa chỉ</p>
    </div>
  
    <div class="email">
      <label for="email">Email</label>
      <input type="text" name="email" bind:value={email} id="input4" >
      <!-- <p class:error={error} class="error" class:email-error={emailError}>Hãy nhập email</p> -->
    </div>
    
    <div class="confirm">
      <label for="checkbox">Xác nhận thông tin</label>
      <input type="checkbox" name="checkbox" bind:value={checkbox} id="input5">
      <p class:error={error} class="error" class:confirm-error={confirmError}>Hãy xác nhận thông tin</p>
    </div>

    <button on:click={sendInfo}>Gửi</button>
  </div>
</div>



<style>
.content{
  width: 70%;
}

.content h1{
  text-align: center;
}

.content label{
  width: 120px;
}

.content input{
  width: 400px;
}

.content button{
  width: 100px;
  background-color: rgb(112, 191, 255);
  border: 1px solid rgb(112, 191, 255);
  padding: 5px 0 5px 0;
  border-radius: 5px;
}

.content .confirm label{
  width: auto;
}

.content .confirm input{
  width: 100px;
}

.error{
  display: none;
}

.name-error{
  display: block;
  margin-left: 122px;
  color: red;
}
.phone-error{
  display: block;
  margin-left: 122px;
  color: red;
}
.address-error{
  display: block;
  margin-left: 122px;
  color: red;
}
.email-error{
  display: block;
  margin-left: 122px;
  color: red;
}
.confirm-error{
  display: block;
  margin-left: 122px;
  color: red;
}
</style>