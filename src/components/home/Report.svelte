<script>
  let datas = [
    { 
      img: "profile/a.png",
      content: "Rất hài lòng với chất lượng! Dụng cụ trà đạo từ cửa hàng này không chỉ đẹp mắt mà còn chắc chắn, tạo cảm giác sang trọng khi sử dụng.",
      name: "Chị Minh Ngọc"
    },
    { 
      img: "profile/2.png",
      content: "Mua một bộ dụng cụ trà đạo tại đây và thật sự ấn tượng. Chất liệu cao cấp và thiết kế tinh tế. Đặc biệt, giúp tôi trải nghiệm trà đạo một cách tuyệt vời",
      name: "Chị Thanh Thảo"
    },
    { 
      img: "profile/3.jpg",
      content: "Mua một bộ dụng cụ trà đạo tại đây và thật sự ấn tượng. Chất liệu cao cấp và thiết kế tinh tế. Đặc biệt, giúp tôi trải nghiệm trà đạo một cách tuyệt vời",
      name: "Anh Cường"
    },
    { 
      img: "profile/a1.png",
      content: "Thích thú với sự đa dạng của sản phẩm. Họ có một loạt các dụng cụ trà đạo với giá cả phải chăng. Rất hài lòng với sự lựa chọn của mình.",
      name: "Anh Ngọc Hải"
    },
    { 
      img: "profile/a2.png",
      content: "Đặt hàng trực tuyến và nhận được sự hỗ trợ tận tình từ đội ngũ khách hàng. Dụng cụ trà đạo tôi mua đẹp không tưởng và thực sự đáp ứng mong đợi",
      name: "Anh Hải Nam"
    },
    { 
      img: "profile/a4.png",
      content: "Không chỉ cung cấp các sản phẩm chất lượng, mà còn có các hướng dẫn sử dụng chi tiết. Điều này giúp tôi, người mới bắt đầu với trà đạo, nắm bắt nhanh chóng.",
      name: "Anh Đình Hùng"
    },
    { 
      img: "profile/a5.png",
      content: "Dụng cụ trà đạo từ cửa hàng này thực sự nâng cao trải nghiệm trà của tôi. Rất ấn tượng với sự chú ý đến chi tiết và chất lượng sản phẩm.",
      name: "Anh Park"
    },
    { 
      img: "profile/a6.png",
      content: "Mua một bộ dụng cụ trà đạo tại đây và thật sự ấn tượng. Chất liệu cao cấp và thiết kế tinh tế. Đặc biệt, giúp tôi trải nghiệm trà đạo một cách tuyệt vời",
      name: "Chị Cẩm Vân"
    },
    { 
      img: "profile/a7.png",
      content: "Mua một bộ dụng cụ trà đạo tại đây và thật sự ấn tượng. Chất liệu cao cấp và thiết kế tinh tế. Đặc biệt, giúp tôi trải nghiệm trà đạo một cách tuyệt vời",
      name: "Chị Tú"
    },
  ];

</script>

<div class="report">
  <h1>PHẢN HỒI CỦA KHÁCH HÀNG</h1>
  <h5>
    CHÚNG TÔI TIN RẰNG TẤT CẢ CÁC KHÁCH HÀNG ĐỀU HÀI LÒNG VỀ SẢN PHẨM CỦA CHÚNG
    TÔI
  </h5>
  <div class="profiles">
    {#each datas as data}
      <div class="profile">
        <img src={data.img} alt="img" />
        <div class="content">
          <div class="rating"></div>
          <div class="comment">
            <p>{data.content}</p>
          </div>
          <div class="name">{data.name} / Khách hàng</div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  /* report */
  .report {
    width: 70%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: rgb(149, 5, 5);
    font-weight: 600;
    
  }

  .report h1 {
    font-size: 30px;
    font-weight: 800;
    text-align: center;
  }

  .report h5 {
    font-size: 16px;
    font-weight: 500;
  }

  .report p {
    font-weight: 300;
  }

  .report .profiles {
    font-size: 10px;
    color: black;

    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    width: 100%;
    overflow: scroll;
  }

  .report .profiles .profile {
    margin: 0px 20px 0px 20px;
    padding: 10px 5px 0px 5px;
    background-color: antiquewhite;
    border: 3px solid rgb(175, 17, 17);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;
    max-width: 300px;
    min-width: 300px;
    height: auto;
  }

  .report .profiles .profile img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .report .profiles .profile p {
    font-size: 14px;
  }

  .report .profiles .profile .name {
    font-size: 14px;
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    .report {
      text-align: center;
    }

    .report .profiles {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .report .profiles .profile {
      width: 100%;
      margin-bottom: 20px;
    }
  }
</style>
