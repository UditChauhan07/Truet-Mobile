import React, { useState } from "react";
import Navbar from "../Navbar";
import styles from "../Library/Library.module.css";
import Footer from "../Footer/index";
const countries = [
  { code: "US", name: "US", flag: "UsFlag-img.png" },
  { code: "IN", name: "India", flag: "images/indiaflag.png" },
  { code: "FR", name: "France", flag: "images/france.png" },
  { code: "DE", name: "Germany", flag: "images/germany.png" },
];

const Library = () => {

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    dealflow: true,
    pipeline: true,
    sortby: true,
  });
  const toggleSection = (section) => {
    setOpenSections({ ...openSections, [section]: !openSections[section] });
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };
  return (
    <selection>
      <Navbar></Navbar>
      <div className={styles.LibraryMain}>
        <div className={styles.Library}>
          <div className={styles.Quick}>
            <h2>Quick Bytes</h2>
          </div>
          <div className={styles.shortMain} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight2">
            <div className={styles.shortTittle}>
              <p>Short by</p>
            </div>
            <div className={styles.shortIcon}>
              <img src="/Vector.svg" />
            </div>
          </div>




        </div>
        {/* Offcanvas */}
        <div id="offCANVAS">
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 className={styles.menuTittle}>Filters</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div className={styles.filtersContainer}>
                {/* <h2>Filters</h2> */}
                {/* Dealflow Section */}
                <div className={styles.filterSection}>
                  <div className={styles.sectionHeader} onClick={() => toggleSection("dealflow")}>
                    <h4>Dealflow</h4>
                    <span className={openSections.dealflow ? styles.arrowUp : styles.arrowDown}><img src="svg/dropdown-Icon.svg" alt="" /></span>
                  </div>
                  {openSections.dealflow && (
                    <div className={styles.filterOptions}>
                      <label className={styles.checkbox}>
                        <input type="checkbox" defaultChecked />
                        <span>All Open Deals</span>
                      </label>
                      <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>Members only deals</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Pipeline Section */}
                <div className={styles.filterSection}>
                  <div className={styles.sectionHeader} onClick={() => toggleSection("pipeline")}>
                    <h4>Pipeline</h4>
                    <span className={openSections.pipeline ? styles.arrowUp : styles.arrowDown}><img src="svg/dropdown-Icon.svg" alt="" /></span>
                  </div>
                  {openSections.pipeline && (
                    <div className={styles.filterOptions}>
                      <label className={styles.checkbox}>
                        <input type="checkbox" defaultChecked />
                        <span>Polyflex 5.0 PDS</span>
                      </label>
                      <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>Polyflex 5.0 PDS</span>
                      </label>
                      <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>Polyflex 5.0 PDS</span>
                      </label>
                      <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>Greater than $500</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Sort by Section */}
                <div className={styles.filterSection}>
                  <div className={styles.sectionHeader} onClick={() => toggleSection("sortby")}>
                    <h4>Sort by</h4>
                    <span className={openSections.sortby ? styles.arrowUp : styles.arrowDown}><img src="svg/dropdown-Icon.svg" alt="" /></span>
                  </div>
                  {openSections.sortby && (
                    <div className={styles.filterOptions}>
                      <label className={styles.radio}>
                        <input type="radio" name="sort" defaultChecked />
                        <span>Most Relevant First</span>
                      </label>
                      <label className={styles.radio}>
                        <input type="radio" name="sort" />
                        <span>Most Relevant First</span>
                      </label>
                      <label className={styles.radio}>
                        <input type="radio" name="sort" />
                        <span>Most Relevant First</span>
                      </label>
                      <label className={styles.radio}>
                        <input type="radio" name="sort" />
                        <span>Most Relevant First</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className={styles.bytesMain}>
          <div className={styles.bytesflex}>
            <div className={styles.Bytes}>
              <div className={styles.vidIcon}>
                <img src="/video-icon.svg" />
              </div>
              <div className={styles.bytesTittle}>
                <p>Audio Visual Byte</p>
                <strong>Product Description</strong>
              </div>
            </div>
            <div className={styles.Bytes}>
              <div className={styles.vidIcon}>
                <img src="/video-icon.svg" />
              </div>
              <div className={styles.bytesTittle}>
                <p>Audio Visual Byte</p>
                <strong>Typical Applications</strong>
              </div>
            </div>
          </div>
          <div className={styles.bytesflex}>
            <div className={styles.Bytes}>
              <div className={styles.vidIcon}>
                <img src="/sell-icon.svg" />
              </div>
              <div className={styles.bytesTittle}>
                <p>Must do to sell</p>
                <strong>Score 70+</strong>
              </div>
            </div>
            <div className={styles.Bytes}>
              <div className={styles.vidIcon}>
                <img src="/deal-Icon.svg" />
              </div>
              <div className={styles.bytesTittle}>
                <p>Active Deals</p>
                <strong>235</strong>
              </div>
            </div>
          </div>
          <div className={styles.bytesflex}>
            <div className={styles.Bytes}>
              <div className={styles.vidIcon}>
                <img src="/video-icon.svg" />
              </div>
              <div className={styles.bytesTittle}>
                <p>Audio Visual Byte</p>
                <strong>Application Instructions</strong>
              </div>
            </div>
            <div className={styles.Bytes}>
              <div className={styles.vidIcon}>
                <img src="/inforaphic-icon.svg" />
              </div>
              <div className={styles.bytesTittle}>
                <p>List & Infographic</p>
                <strong>Features & Benefits</strong>
              </div>
            </div>
          </div>
          <div className={styles.bytesflex}>
            <div className={styles.Bytes}>
              <div className={styles.vidIcon}>
                <img src="/dollor-icon.svg" />
              </div>
              <div className={styles.bytesTittle}>
                <p>Average Deal Size</p>
                <strong>$50,200</strong>
              </div>
            </div>
            <div className={styles.Bytes}>
              <div className={styles.vidIcon}>
                <img src="/inforaphic-icon.svg" />
              </div>
              <div className={styles.bytesTittle}>
                <p>Data Models</p>
                <strong>Technical Specs</strong>
              </div>
            </div>
          </div>
          <div className={styles.boardContainer}>
            {/* Total Sales Card */}
            <div className={styles.card1}>
              <p className={styles.cardTitle}>Total Sales</p>
              <h2 className={styles.amount}>$84.31m</h2>
              <p className={styles.growth}>
                <span className={styles.positive}>+23%</span> since last month
              </p>
            </div>
            {/* Deals by Country Card */}
            <div className={styles.card2}>
              <p className={styles.cardTitle}>Deals by Country</p>
              <div className={styles.dropdownMain}>
                <h2 className={styles.amount}>$21,480,000</h2>
                <div className={styles.dropdown}>
                  <div
                    className={styles.selected}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <img
                      src={selectedCountry.flag}
                      alt={selectedCountry.name}
                      className={styles.flag}
                    />
                    <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
                  </div>
                  {isOpen && (
                    <ul className={styles.menu}>
                      {countries.map((country) => (
                        <li
                          key={country.code}
                          className={styles.menuItem}
                          onClick={() => handleSelect(country)}
                        >
                          <img
                            src={country.flag}
                            alt={country.name}
                            className={styles.flag}
                          />{" "}
                          {country.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <hr className={styles.line} />
        </div>
        <div className={styles.KnowledgeDiv}>
          <div className={styles.KnowledgeTittle}>
            <h2>The Knowledge Matrix</h2>
          </div>
          <div className={styles.slideMain}>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="/card-Img1.png" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Capturing Distributor Mind</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" />
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="/card-Img1.png" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Capturing Distributor Mind</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" />
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="/card-Img1.png" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Capturing Distributor Mind</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" />
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="/card-Img1.png" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Capturing Distributor Mind</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" />
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.slideMain}>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="/polly-glass.png" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Capturing Distributor Mind</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" />
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="/polly-glass.png" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Capturing Distributor Mind</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" />
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="/polly-glass.png" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Capturing Distributor Mind</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" />
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slideDiv}>
              <div className={styles.slideCard}>
                <img src="/polly-glass.png" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Capturing Distributor Mind</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" />
                    </div>
                    <div className={styles.accessDiv}>
                      <p>Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.resourcesMain}>
          <div className={styles.resourcesTittle}>
            <h2>Other Resources</h2>
          </div>
          <div className={styles.teamDiv}>
            <div className={styles.teamcontent}>
              <div className={styles.teamtittle}>
                <h2>Team members (Ask a Question)</h2>
              </div>
              <div>
                <a  href="intent://contacts/#Intent;action=android.intent.action.VIEW;scheme=content;end;" >
                <img src="/add-icon.svg" />
                </a>
              </div>
            </div>
            <div className={styles.member}>
              <div className={styles.memberDetails}>
                <img src="/Profile1.png" />
                <div className={styles.name}>
                  <p>Adela Parkson</p>
                  <text>Creative Director</text>
                </div>
              </div>
              <div className={styles.option}>
                <img src="/option.svg" />
              </div>
            </div>
            <div className={styles.member}>
              <div className={styles.memberDetails}>
                <img src="/Profile2.png" />
                <div className={styles.name}>
                  <p>Christian Mad</p>
                  <text>Product Designer</text>
                </div>
              </div>
              <div className={styles.option}>
                <img src="/option.svg" />
              </div>
            </div>
            <div className={styles.member}>
              <div className={styles.memberDetails}>
                <img src="/Profile3.png" />
                <div className={styles.name}>
                  <p>Jason Statham</p>
                  <text>Junior Graphic Designer</text>
                </div>
              </div>
              <div className={styles.option}>
                <img src="/option.svg" />
              </div>
            </div>
          </div>
          <div className={styles.business}>
            <div className={styles.header}>
              <div>
                <img src="/fire-icon.svg" />
              </div>
              <div className={styles.resourcesDatails}>
                <p>Business Design</p>
                <b> New lession is available</b>
              </div>
            </div>
            <div className={styles.centretitle}>
              <h2>What do you need to know to create better products?</h2>
            </div>
            <div className={styles.footer}>
              <div className={styles.bottom}>
                <div className={styles.time}>
                  <img src="/timer.svg" />
                  <span>85 mint</span>
                </div>
                <div className={styles.video}>
                  <img src="/slow_motion_video.svg" />
                  <span>Video format</span>
                </div>
              </div>
              <div className={styles.startdiv}>
                <div>
                  <img src="/Avatars-Group.png" />
                </div>
                <div>
                  <div className={styles.started}>
                    <p>Get Started</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.security}>
            <div className={styles.securityDetails}>
              <img src="/thumb-icon.svg" />
              <h2>Control card security in-app with a tap</h2>
              <p>Discover our cards benefits, with one tap.</p>
            </div>
            <div className={styles.cards}>
              <p>Cards</p>
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </selection>
  );
};

export default Library;
