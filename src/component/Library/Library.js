import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import styles from "../Library/Library.module.css";
import Footer from "../Footer/index";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

const countries = [
  { code: "US", name: "US", flag: "UsFlag-img.png" },
  { code: "UAE", name: "UAE", flag: "images/uaeFlag.png" },
  { code: "FR", name: "France", flag: "images/france.png" },
  { code: "DE", name: "Germany", flag: "images/germany.png" },
];

const Library = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  // const [showCart, setShowCart] = useState(false);
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

  const navigate = useNavigate();

  const handleChatNavigation = () => {
    navigate("/chat");
  };
  // Modal Content//
  const modaltitles = [
    "Audio Visual Byte – Immersive Sound & Vision Technology",
    "Audio Visual Byte",
    "Must-Do Strategies to Achieve a 70+ Sales Score",
    "Active Deals: 235 and Growing!",
    "Audio Visual Byte",
    "Key Features & Benefits at a Glance",
    "Average Deal Size",
    "Data Models"
  ];
  const modalsubtitles = [
    "Elevate Your Senses with Cutting-Edge Audio-Visual Innovation",
    "Audio Visual Byte",
    "Must-Do Strategies to Achieve a 70+ Sales Score",
    "Active Deals: 235 and Growing!",
    "Audio Visual Byte",
    "Key Features & Benefits at a Glance",

  ];
  const modalsubheading = [
    "Audio Visual Byte",
    "Audio Visual Byte",
    "Preparation & Knowledge",
    "AI-driven insights",
    "Audio Visual Byte",
    "Benefits",

  ];
  const subdescriptions = [
    "Experience crystal-clear sound, vivid visuals, and seamless connectivity—perfect for business, education, and entertainment. Upgrade today!",
    "Experience crystal-clear sound, vivid visuals, and seamless connectivity.",
    "Achieving a high sales score requires a strategic approach, consistent effort, and smart selling techniques. This checklist will guide you through essential steps to boost your sales performance and ensure every interaction adds value to the customer.",
    "With 235 active deals in progress, Truet empowers sales teams with AI-driven insights and real-time assistance to accelerate deal closures. By providing instant access to the right information, Truet helps sales reps stay ahead of customer needs, handle objections smoothly, and drive higher success rates.",
    "Step-by-step guide on how to apply the product effectively.",
    "AI-powered real-time assistance ensures instant support, while interactive learning keeps users engaged. Visual infographics and analytics help track performance. CRM integrations provide a seamless experience, and gamification boosts engagement. With a mobile-first approach, users can access content anytime, anywhere.",
  ];
  const titles = [
    "Audio Visual Byte",
    "Audio Visual Byte",
    "Must do to sell",
    "Active Deals",
    "Audio Visual Byte",
    "List & Infographic",
    "Average Deal Size",
    "Data Models"
  ];

  const subtitles = [
    "Product Description",
    "Typical Applications",
    "Score 70+",
    "235",
    "Application Instructions",
    "Features & Benefits",
    "$50,200",
    "Technical Specs"
  ];


  const images = [
    "images/Visual-Img.png",
    "images/Visual-Img.png",
    "images/Visual-Img3.png",
    "images/Visual-Img4.png",
    "/images/Visual-Img5.png",
    "images/Visual-Img6.png",
  ];
  const videoLinks = [
    "https://www.youtube.com/embed/nWhnp5Fhe6w",
  ];
  const icons = [
    "/video-icon.svg",
    "/video-icon.svg",
    "/sell-icon.svg",
    "/deal-Icon.svg",
    "/video-icon.svg",
    "/inforaphic-icon.svg",
    "/dollor-icon.svg",
    "/inforaphic-icon.svg",
  ];

  // Function to open modal with specific index
  const handleOpenModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
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
              <img src="/Vector.svg" alt="" />
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
        {/* Modal Component */}
        {isModalOpen && selectedIndex !== null && (
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <div className={styles.contentDetails}>
              <div className={styles.modTitle}><h5>{modalsubheading[selectedIndex]}</h5>
              </div>
              <div className={styles.visualImg}>
                <iframe
                  width="100%"
                  height="100%"
                  src={videoLinks[selectedIndex]}
                  title="Embedded Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.contents}>
                <h5>{modalsubheading[selectedIndex]}</h5>
                <p>{subdescriptions[selectedIndex]}</p>
             
              </div>
            </div>
          </Modal>
        )}
        <div className={styles.bytesMain}>
          <div className={styles.bytesflex}>
            <div className={styles.Bytes} onClick={() => handleOpenModal(0)}>
              <div className={styles.vidIcon}>
                <img src={icons[0]} alt="icon" />
              </div>

              <div className={styles.bytesTittle}>
                <p>{titles[0]}</p>
                <strong>{subtitles[0]}</strong>
              </div>
            </div>

            <div className={styles.Bytes} >
              <div className={styles.vidIcon}>
                <img src={icons[1]} alt="icon" />
              </div>
              <div className={styles.bytesTittle}>
                <p>{titles[1]}</p>
                <strong>{subtitles[1]}</strong>

              </div>
            </div>
          </div>
          <div className={styles.bytesflex}>
            <div className={styles.Bytes} >
              <div className={styles.vidIcon}>
                <img src={icons[2]} alt="icon" />

              </div>
              <div className={styles.bytesTittle}>
                <p>{titles[2]}</p>
                <strong>{subtitles[2]}</strong>
              </div>
            </div>
            <div className={styles.Bytes} >
              <div className={styles.vidIcon}>
                <img src={icons[3]} alt="icon" />

              </div>
              <div className={styles.bytesTittle}>
                <p>{titles[3]}</p>
                <strong>{subtitles[3]}</strong>
              </div>
            </div>
          </div>
          <div className={styles.bytesflex}>
            <div className={styles.Bytes} >
              <div className={styles.vidIcon}>
                <img src={icons[4]} alt="icon" />

              </div>
              <div className={styles.bytesTittle}>
                <p>{titles[4]}</p>
                <strong>{subtitles[4]}</strong>
              </div>
            </div>
            <div className={styles.Bytes} >
              <div className={styles.vidIcon}>
                <img src={icons[5]} alt="icon" />

              </div>
              <div className={styles.bytesTittle}>
                <p>{titles[5]}</p>
                <strong>{subtitles[5]}</strong>
              </div>
            </div>
          </div>
          <div className={styles.bytesflex}>
            <div className={styles.Bytes} >
              <div className={styles.vidIcon}>
                <img src={icons[6]} alt="icon" />

              </div>
              <div className={styles.bytesTittle}>
                <p>{titles[6]}</p>
                <strong>{subtitles[6]}</strong>
              </div>
            </div>
            <div className={styles.Bytes} >
              <div className={styles.vidIcon}>
                <img src={icons[7]} alt="icon" />

              </div>
              <div className={styles.bytesTittle}>
                <p>{titles[7]}</p>
                <strong>{subtitles[7]}</strong>
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
                    {/* <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span> */}
                    <span className={styles.arrow}>
                      <img
                        src={isOpen ? "svg/Arrowdoun.svg" : "svg/ArrowDown.svg"}
                        alt="Arrow"
                        className={styles.arrowImage}
                      />
                    </span>
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
                <img src="images/card-Img1.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Capturing Distributor Mind</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" alt="" />
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
                <img src="images/card-Img2.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Safety Datasheet</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Polyglass.com</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" alt="" />
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
                <img src="images/card-Img3.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Product Datasheets</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Polyglass.com</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" alt="" />
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
                <img src="images/card-Img4.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>PolyGlass Case Studies</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Polyglass.com</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" alt="" />
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
                <img src="images/polly-glass.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>PolyGlass Sales Process</h2>
                    <p>By Peter Will</p>
                  </div>
                  <div className={styles.user}>
                    <img src="images/Avatars-Group2.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Salesforce</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" alt="" />
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
                <img src="images/polly-glass2.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Opportunity Management</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="images/Avatars-Group3.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" alt="" />
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
                <img src="images/polly-glass3.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Outreach Best Practices</h2>
                    <p>By Mark Benjamin</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" alt="" />
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
                <img src="images/polly-glass4.png" alt="" />
                <div className={styles.cardDeatils}>
                  <div className={styles.content}>
                    <h2>Sales Playbook</h2>
                    <p>By Manny Gates</p>
                  </div>
                  <div className={styles.user}>
                    <img src="/Avatars-Group.png" alt="" />
                  </div>
                </div>
                <div className={styles.shareDiv}>
                  <div className={styles.source}>
                    <p>Source: </p>
                    <span>Official LMS</span>
                  </div>
                  <div className={styles.accessMain}>
                    <div className={styles.share}>
                      <img src="/share-icon.svg" alt="" />
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
                <a href="intent://contacts/#Intent;action=android.intent.action.VIEW;scheme=content;end;" >
                  <img src="/add-icon.svg" alt="" />
                </a>
              </div>
            </div>
            <div className={styles.member}>
              <div className={styles.memberDetails} onClick={handleChatNavigation}>
                <img src="/Profile1.png" alt="" />
                <div className={styles.name}>
                  <p>Adela Parkson</p>
                  <text>Creative Director</text>
                </div>
              </div>
              <div className={styles.menuContainer}>
                {/* Clickable Div with Image */}
                <div className={styles.option} onClick={() => setIsOpen2(!isOpen2)}>
                  <img src="/option.svg" alt="Menu" />
                </div>

                {/* Dropdown Menu */}
                {isOpen2 && (
                  <div className={styles.menuDropdown}>
                    <p>Remove</p>
                    <p>Chat</p>
                  </div>
                )}
              </div>

            </div>
            <div className={styles.member}>
              <div className={styles.memberDetails} onClick={handleChatNavigation}>
                <img src="/Profile2.png" alt="" />
                <div className={styles.name}>
                  <p>Christian Mad</p>
                  <text>Product Designer</text>
                </div>
              </div>
              <div className={styles.menuContainer}>
                {/* Clickable Div with Image */}
                <div className={styles.option} onClick={() => setIsOpen3(!isOpen3)}>
                  <img src="/option.svg" alt="Menu" />
                </div>

                {/* Dropdown Menu */}
                {isOpen3 && (
                  <div className={styles.menuDropdown}>
                    <p>Remove</p>
                    <p>Chat</p>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.member}>
              <div className={styles.memberDetails} onClick={handleChatNavigation}>
                <img src="/Profile3.png" alt="" />
                <div className={styles.name}>
                  <p>Jason Statham</p>
                  <text>Junior Graphic Designer</text>
                </div>
              </div>
              <div className={styles.menuContainer}>
                {/* Clickable Div with Image */}
                <div className={styles.option} onClick={() => setIsOpen4(!isOpen4)}>
                  <img src="/option.svg" alt="Menu" />
                </div>

                {/* Dropdown Menu */}
                {isOpen4 && (
                  <div className={styles.menuDropdown}>
                    <p>Remove</p>
                    <p>Chat</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.business}>
            <div className={styles.header}>
              <div>
                <img src="/fire-icon.svg" alt="" />
              </div>
              <div className={styles.resourcesDatails}>
                <p>Sales opportunity</p>
                <b>Start selling Polypoin OPDS</b>
              </div>
            </div>
            <div className={styles.centretitle}>
              <h2>Start your onboarding process to be eligible and considered for selling</h2>
            </div>
            <div className={styles.footer}>
              <div className={styles.bottom}>
                <div className={styles.time}>
                  <img src="/timer.svg" alt="" />
                  <span>85 min</span>
                </div>
                <div className={styles.video}>
                  <img src="/slow_motion_video.svg" alt="" />
                  <span>Video format</span>
                </div>
              </div>
              <div className={styles.startdiv}>
                <div>
                  <img src="/Avatars-Group.png" alt="" />
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
              <img src="/thumb-icon.svg" alt="" />
              <h2>Apply for more sales opportunities in your region.</h2>
              <p>Discover products to boost your revenue.</p>
            </div>
            <div className={styles.cards}>
              <p>Find sales opportunities.</p>
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </selection>
  );
};

export default Library;
