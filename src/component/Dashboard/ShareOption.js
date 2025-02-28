import React from "react";
import style from "../Dashboard/style.module.css"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from "react-share";

const ShareComponent = () => {
  const shareUrl = window.location.href; // Current page URL
  const title = "Check this out!";



const handleShare = () => {
  const shareData = {
    title: "Check out this event!",
    text: "I found an awesome event for you!",
    url: window.location.href, // Current event URL
  };

  if (navigator.share) {
    navigator.share(shareData)
      .then(() => console.log("Shared successfully!"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    // Fallback: Copy link to clipboard
    navigator.clipboard.writeText(shareData.url);
    alert("Link copied to clipboard!");
  }
};
  return (
    <div className="offCANVAS_ShareMain">
      <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight" >
        {/* <img src="/share-icon.svg" alt="" /> */}
        
      </div>
      
        <div onClick={handleShare}>   <img src="/share-icon.svg" alt="" /> </div>

      {/* content */}

      <div id="offCANVAS_Share">
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            {/* <h5 className={styles.menuTittle}>Menu</h5> */}
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <p className="share">Share</p>

            <div className={style.shareDiv}>
              {/* Facebook Share */}
              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={50} round />
              </FacebookShareButton>

              {/* Twitter Share */}
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={50} round />
              </TwitterShareButton>

              {/* WhatsApp Share */}
              <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
                <WhatsappIcon size={50} round />
              </WhatsappShareButton>

              {/* LinkedIn Share */}
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={50} round />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>








    </div>
  );
};

export default ShareComponent;
