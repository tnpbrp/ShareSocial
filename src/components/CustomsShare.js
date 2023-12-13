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

  const shareLinkForIOS = () => {
    const appName = "your-ios-app"; // ตัวแทนชื่อแอปของคุณ
    const appScheme = `${appName}://`; // URI Scheme ของแอป

    // สร้าง URI Scheme สำหรับแชร์
    const shareLink = `mailto:?subject=Check%20out%20${appName}&body=Download%20${appName}%20app%20here:%20${appScheme}`;

    // ส่งไปยังแอปอีเมลหรือแชร์ไปยังโซเชียลมีเดียอื่น ๆ
    window.location.href = shareLink;
  };

  const shareLinkForAndroid = () => {
    const appName = "your-android-app"; // ตัวแทนชื่อแอปของคุณ
    const appPackage = "com.your.android.app"; // แพคเกจของแอปของคุณ

    // สร้าง App Link สำหรับแชร์
    const shareLink = `https://play.google.com/store/apps/details?id=${appPackage}`;

    // ส่งไปยังแอปเบราว์เซอร์หรือแชร์ไปยังโซเชียลมีเดียอื่น ๆ
    window.location.href = shareLink;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this app!",
          url: share_url, // URL ของเว็บไซต์ของคุณ
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // ถ้าไม่สามารถใช้ navigator.share ได้, ให้ตรวจสอบอุปกรณ์ที่ใช้กด
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        // สำหรับ iOS
        shareLinkForIOS();
      } else if (/Android/.test(navigator.userAgent)) {
        // สำหรับ Android
        shareLinkForAndroid();
      } else {
        // ถ้าไม่รู้จักอุปกรณ์, สามารถแสดงป๊อปอัพขึ้นมาแสดงข้อความหรือลิงค์ที่สามารถคัดลอกได้
        alert("Click here to copy the link: https://your-website.com");
        console.log("Share on Browser");
      }
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
