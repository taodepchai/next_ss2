import Image from "next/image";
import React from "react";
import "./Bt10.scss";

export default function Bt10() {
  return (
    <div className="bt10-container">
      <div>
        <Image
          style={{ margin: "auto" }}
          src={
            "https://i.pinimg.com/originals/7b/f7/79/7bf779768412c7a9c578eeeb5c2602af.jpg"
          }
          alt="loading..."
          width={100}
          height={100}
        />
        <b>Áo Phông Nam</b>
        <p>Áo phông nam mát mẻ</p>
        <button>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
}
