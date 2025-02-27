import React, { useState, useRef, useEffect } from 'react'
import styles from "../Library/Library.module.css"
import Modal from "../Modal/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ShareOption from "../Dashboard/ShareOption"

const countries = [
    { code: "US", name: "US", flag: "UsFlag-img.png" },
    { code: "UAE", name: "UAE", flag: "images/uaeFlag.png" },
    { code: "FR", name: "France", flag: "images/france.png" },
    { code: "DE", name: "Germany", flag: "images/germany.png" },
];
const QuickBytes = () => {
    const [startDate, setStartDate] = useState(null);
    const [isOpenCalender, setIsOpenCalender] = useState(false);

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
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

    // Modal Content//

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
    const videoLinks = [
        "https://www.youtube.com/embed/sHNX_AawsiM",
        "https://www.youtube.com/embed/sHNX_AawsiM",
        "https://www.youtube.com/embed/HiXBvjSQB30"
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


    const calendarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setIsOpenCalender(false);
        }
    };

    useEffect(() => {
        if (isOpenCalender) {
            setTimeout(() => {
                document.addEventListener("mousedown", handleClickOutside);
            }, 100); // تھوڑا سا delay تاکہ event ٹھیک سے attach ہو
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpenCalender]);

    return (
        <div>
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
                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className={styles.menuTittle}>Filters</h5>
                        {/* <p data-bs-dismiss="offcanvas" aria-label="Close">Clear All</p> */}
                    </div>
                    <div class="offcanvas-body">
                        <div className={styles.filtersContainer}>
                            <div className={styles.filterSection}>
                                <div className={styles.sectionHeader} onClick={() => toggleSection("dealflow")}>
                                    <h4>Type of Byte</h4>
                                    <span className={openSections.dealflow ? styles.arrowUp : styles.arrowDown}><img src="svg/dropdown-Icon.svg" alt="" /></span>
                                </div>
                                {openSections.dealflow && (
                                    <div className={styles.filterOptions}>
                                        <label className={styles.checkbox}>
                                            <span>Audio Visual </span>
                                            <input type="checkbox" defaultChecked />

                                        </label>
                                        <label className={styles.checkbox}>
                                            <span>Infographic</span>
                                            <input type="checkbox" defaultChecked />

                                        </label>
                                        <label className={styles.checkbox}>
                                            <span>Data Model</span>
                                            <input type="checkbox" defaultChecked />

                                        </label>
                                        <label className={styles.checkbox}>
                                            <span>Insights</span>
                                            <input type="checkbox" defaultChecked />
                                        </label>
                                    </div>
                                )}
                            </div>
                            {/* Input Search Start */}
                            <div className={styles.SearchMain}>
                                <div className={styles.FolderDiv}>
                                    <img src='svg/Folder-Icon.svg' alt='' />
                                    <p>Explore Topic</p>
                                </div>
                                <div>
                                    <div className={styles.search_box}>
                                        <span className={styles.icon}><img src='svg/Search_Icon.svg' alt='' /></span>
                                        <input type="text" placeholder="Search by Topic" />
                                    </div>
                                </div>

                                <div className={styles.FolderDiv}>
                                    <img src='svg/User-check_icon.svg' alt='' />
                                    <p>Search by Expert</p>
                                </div>
                                <div>
                                    <div className={styles.search_box}>
                                        <span className={styles.icon}><img src='svg/Search_Icon.svg' alt='' /></span>
                                        <input type="text" placeholder="Search by Expert Name" />
                                    </div>
                                </div>
                                <div ref={calendarRef} className={styles.container}>
                                    {/* Calendar Open Button */}
                                    <div className={styles.FolderDiv} onClick={() => setIsOpenCalender(!isOpenCalender)}>
                                        <img src="svg/Calendar-icon.svg" alt="Calendar Icon" />
                                        <p>Published Date Range</p>
                                    </div>

                                    {/* Calendar Dropdown */}
                                    {isOpenCalender && (
                                        <div className={styles.datePickerWrapper}>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                inline
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className={styles.BothBtn}>
                                    <div className={styles.showBtn}  aria-label="Close" data-bs-dismiss="offcanvas">
                                        <p>Show</p>
                                    </div>
                                    <div className={styles.closeBtn} aria-label="Close" data-bs-dismiss="offcanvas">
                                        <p>Close</p>
                                    </div>

                                </div>

                            </div>

                            {/* Pipeline Section */}
                            {/* <div className={styles.filterSection}>
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
                            </div> */}

                            {/* Sort by Section */}
                            {/* <div className={styles.filterSection}>
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
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
            {/* Modal Component */}
            {/* Modal Component */}
            {isModalOpen && selectedIndex !== null && (
                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <div className={styles.contentDetails}>
                        <div className={styles.modTitle}>
                            <h5>{modalsubheading[selectedIndex]}</h5>
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
                        <div className={styles.ShareIconMain}><ShareOption /></div>
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

                    <div className={styles.Bytes} onClick={() => handleOpenModal(1)}>
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
                    <div className={styles.Bytes} onClick={() => handleOpenModal(2)} >
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
        </div>
    )
}

export default QuickBytes
