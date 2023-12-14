"use client";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookShareCount,
  LineIcon,
  WhatsappIcon,
  XIcon,
} from "react-share";
import { Button } from "antd";
import { useState } from "react";
import Image from "next/image";

export default function CustomsShare({ browser, device }) {
  const socialMedia = [
    {
      name: "Email",
      icon: <EmailIcon round size={35} />,
    },
    {
      name: "Facebook",
      icon: <FacebookIcon round size={35} />,
    },
    {
      name: "Line",
      icon: <LineIcon round size={35} />,
    },
    {
      name: "X",
      icon: <XIcon round size={35} />,
    },
    {
      name: "WhatsApp",
      icon: <WhatsappIcon round size={35} />,
    },
  ];
  const [browserInfo, setBrowserInfo] = useState(browser);
  const [deviceInfo, setDeviceInfo] = useState(device);

  const share_url = "https://agency-station.bangkoklife.com";

  const handleShare = () => {
    alert(navigator.share)
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this app!",
          url: share_url,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      return false;
    }
  };


  return (
    <div>
      <h1>Customs button share for native</h1>
      {/* <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {socialMedia.map((item, idx) => (
          <li key={idx} style={{ padding: "3px" }}> */}
      <div style={{ textAlign: "center" }}>
        <a
          onClick={() => {
            handleShare();
          }}
          //   icon={item.icon}
          style={{
            width: "fit-content",
            height: "fit-content",
            cursor: "pointer",
          }}
        >
          <Image
            src="../share-orange.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          {/* {item.icon} */}
        </a>
      </div>
      {/* </li>
        ))}
      </ul> */}
    </div>
  );
}
