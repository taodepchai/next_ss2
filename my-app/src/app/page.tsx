"use client";
import Image from "next/image";
import Bt1 from "../../components/Bt1";
import Bt2 from "../../components/Bt2";
import Bt3 from "../../components/Bt3";
import Bt4 from "../../components/Bt4";
import Bt5 from "../../components/Bt5";
import Bt6 from "../../components/Bt6";
import Bt7 from "../../components/Bt7";
import Bt8 from "../../components/Bt8";
import Bt9 from "../../components/Bt9";
import Bt10 from "../../components/Bt10";
import Bt11 from "../../components/Bt11";
import { useState } from "react";
import Bt12 from "../../components/Bt12";

export default function Home() {
   const [selectedValue, setSelectedValue] = useState({});

   const options = [
     { value: 1, label: "HTML" },
     { value: 2, label: "CSS" },
     { value: 3, label: "JavaScript" },
     { value: 4, label: "NextJS" },
   ];

   const handleChange = (option: any) => {
     setSelectedValue(option);
   };
  return (
    <div>
      <Bt1 label={"label"} placeholder={"placeholder"}></Bt1>
      <Bt2 label={"label"} options={[1, 2, 3, 4, 5]}></Bt2>
      <Bt3></Bt3>
      <Bt4></Bt4>
      <Bt5></Bt5>
      <Bt6></Bt6>
      <Bt7></Bt7>
      <Bt8></Bt8>
      <Bt9></Bt9>
      <Bt10></Bt10>
      <Bt11
        options={options}
        value={selectedValue}
        handleChange={handleChange}
      ></Bt11>
      <Bt12></Bt12>
    </div>
  );
}
