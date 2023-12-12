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
      <EmailShareButton url={share_url}>
        <EmailIcon size={32} round />
        {/* Email */}
      </EmailShareButton>

      <FacebookShareButton url={share_url}>
        <FacebookIcon size={32} round />
        {/* Facebook */}
      </FacebookShareButton>

      <LineShareButton url={share_url}>
        <LineIcon size={32} round />
        {/* Line */}
      </LineShareButton>

      <TwitterShareButton url={share_url}>
        <XIcon size={32} round />
        {/* X */}
      </TwitterShareButton>

      <WhatsappShareButton url={share_url}>
        <WhatsappIcon size={32} round />
        {/* WhatsApp */}
      </WhatsappShareButton>
    </div>
  );
}
