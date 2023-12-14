"use client";
import Image from "next/image";

export default function CustomsShare() {
  const share_url = "https://www.youtube.com";
  const handleShare = () => {
    if (navigator.share) {
      alert("Navigator share")
      navigator
        .share({
          title: "Check out this app!",
          text: "",
          url: share_url,
        })
        .catch((error) => {
          if (error.name === 'AbortError') {
            console.warn('Share operation canceled by the user.');
          } else {
            console.error('Error sharing:', error.message);
          }
        });
    } else {
      alert("Can not use Navigator share");
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
