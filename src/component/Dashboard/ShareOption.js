import React from "react";
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


 

  return (
    <div className="offCANVAS_ShareMain">
 <div  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight" >
            <img src="/More-icon.svg" />
          </div>


          {/* content */}

           <div id="offCANVAS_Share">
                  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                      {/* <h5 className={styles.menuTittle}>Menu</h5> */}
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
<p className="share">Share</p>

                    <div style={{ display: "flex", gap: "15px" }}>
      {/* Facebook Share */}
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={70} round />
      </FacebookShareButton>

      {/* Twitter Share */}
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={70} round />
      </TwitterShareButton>

      {/* WhatsApp Share */}
      <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
        <WhatsappIcon size={70} round />
      </WhatsappShareButton>

      {/* LinkedIn Share */}
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={70} round />
      </LinkedinShareButton>
    </div>
                    </div>
                  </div>
                </div>





    
   

    </div>
  );
};

export default ShareComponent;
