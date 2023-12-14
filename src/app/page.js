"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

import ReactShare from "@/components/ReactShare";
import CustomsShare from "@/components/CustomsShare";

export default function SharePage() {
  const [browserInfo, setBrowserInfo] = useState(null);
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    const detectBrowser = () => {
      const userAgent = navigator.userAgent;
      let browserInfo = "Unknown Browser";

      if (userAgent.includes("Firefox")) {
        browserInfo = "Mozilla Firefox";
      } else if (userAgent.includes("Chrome")) {
        browserInfo = "Google Chrome";
      } else if (userAgent.includes("Safari")) {
        browserInfo = "Apple Safari";
      } else if (userAgent.includes("Edge")) {
        browserInfo = "Microsoft Edge";
      } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        browserInfo = "Opera";
      } else if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) {
        browserInfo = "Internet Explorer";
      }

      setBrowserInfo(browserInfo);
    };

    const detectDevice = () => {
      const isMobile =
        /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const deviceInfo = isMobile ? "Mobile Device" : "Desktop Device";
      setDeviceInfo(deviceInfo);
    };

    detectBrowser();
    detectDevice();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Share Social</h1>
      </div>
      <div className={styles.description}>
        {browserInfo && <p>Browser: {browserInfo}</p>}
        {deviceInfo && <p>Device: {deviceInfo}</p>}
      </div>

      <br></br>
      {/* {deviceInfo === "Desktop Device" ? <ReactShare /> : <CustomsShare />} */}

      {/* Use for web browser */}
      <ReactShare />
      {/* Use for link native app */}
      <CustomsShare  />
    </main>
  );
}
