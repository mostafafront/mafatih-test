import Image from "next/image";
import React, { useEffect } from "react";

import logo from "../../../public/images/logo.png";
import darkTheme from "../../../public/images/darkTheme.png";
import footerPrayer from "../../../public/images/footerPrayer.svg";

import link from "../../../jsonApi/link.json";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ImageTest() {

  // let firstTag = link.body.indexOf(">");
  // let secondTag = link.body.indexOf("</a>");
  
  // let href = link.body.indexOf("href='");
  // let hrefEnd = link.body.indexOf("'>");
  // let hrefStr = link.body.slice(href +6, hrefEnd)

  // let aTag = link.body.slice(firstTag +1, secondTag);

  const router = useRouter();
  useEffect(() => {
    const Atag = document.querySelectorAll("a");

    Atag.forEach((itemA) => {
      itemA.addEventListener("click",  (e) => {
        e.preventDefault();
        router.push(itemA.href)
      })
    })

  },[])



  return (
    <>
   
      <p dangerouslySetInnerHTML={{ __html: link.body }}></p>


      <div className="box">
        <Image
          src={"/images/imam-hossein.jpg"}
          alt="logo"
          fill
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <Image
          src={logo}
          alt="logo"
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 100vw, 33vw"
        />
      </div>
      <div>
        <Image src={footerPrayer} alt="logo" />
      </div>
      <div>
        <Image src={logo} alt="logo" width={120} quality={100} />
      </div>
      <div>
        <Image src={darkTheme} alt="logo" width={222} height={160} />
      </div>
      <div>
        <img
          src={"/images/darkTheme.png"}
          alt="logo"
          width={222}
          height={160}
        />
      </div>
    </>
  );
}
