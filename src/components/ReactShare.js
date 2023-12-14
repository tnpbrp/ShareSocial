"use client";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  //   FacebookMessengerIcon,
  //   FacebookMessengerShareButton,
  FacebookShareButton,
  //   FacebookShareCount,
  LineIcon,
  LineShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

export default function ReactShare() {
  const share_url = "https://google.com";

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Plugin React-Share for Desktop &nbsp;</h1>
      {/* Support Chorme,FireFox,Safari */}
      {/* Edge don't know */}
      <EmailShareButton url={share_url} style={{padding:"5px"}}>
        <EmailIcon size={40} round />
        {/* Email */}
      </EmailShareButton>

      <FacebookShareButton url={share_url} style={{padding:"5px"}}>
        <FacebookIcon size={40} round />
        {/* Facebook */}
      </FacebookShareButton>

      <LineShareButton url={share_url} style={{padding:"5px"}}>
        <LineIcon size={40} round />
        {/* Line */}
      </LineShareButton>

      <TwitterShareButton url={share_url} style={{padding:"5px"}}>
        <XIcon size={40} round />
        {/* X */}
      </TwitterShareButton>

      <WhatsappShareButton url={share_url} style={{padding:"5px"}}>
        <WhatsappIcon size={40} round />
        {/* WhatsApp */}
      </WhatsappShareButton>
    </div>
  );
}
