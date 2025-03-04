import React, { useState, useRef, useEffect } from 'react'
import styles from "../Library/Library.module.css"
import Modal from "../Modal/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ShareOption from "../Dashboard/ShareOption"
import PieChartComponent from '../chartAndGraphs/pieChart';
import DailyTraffic from '../chartAndGraphs/DailyTraffic';
import SalesRep from '../Dashboard/SalesRep';

const countries = [
    { code: "US", name: "US", flag: "UsFlag-img.png" },
    { code: "UAE", name: "UAE", flag: "images/uaeFlag.png" },
    { code: "FR", name: "France", flag: "images/france.png" },
    { code: "DE", name: "Germany", flag: "images/germany.png" },
];
const QuickBytes = () => {
    const [startDate, setStartDate] = useState(null);
    const [isOpenCalender, setIsOpenCalender] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [openSections, setOpenSections] = useState({
        dealflow: true,
        pipeline: true,
        sortby: true,
    });
    const [tableOpen, setTableOpen] = useState(false)
    const [featureOpen, setfeatureOpen] = useState(false)
    const [istechnical, setisTechnical] = useState(false)
    const [isSales, setisSales] = useState(false)
    const toggleSection = (section) => {
        setOpenSections({ ...openSections, [section]: !openSections[section] });
    };

    const handleSelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    // Modal Content//

    const modalsubheading = [
        "Product Description",
        "Typical Applications",
        "Preparation & Knowledge",
        "AI-driven insights",
        "Audio Visual Byte",
        "Benefits",
    ];
    const subdescriptions = [
        "Polystick® XFR is a dual-purpose fire resistant and self-adhered waterproofing underlayment approved for applications up to 265°F.",
        "Polystick® XFR is a dual-purpose fire resistant and self-adhered waterproofing underlayment approved for applications up to 265°F.",
        "Polystick P is a self-adhered high-temp waterproofing underlayment for use under metal and various other roof coverings. The top surface comprises a UV-resistant high, strong polyolefin composite film with Hi-Tread™ slip-resistant coating, which is mated to a high-temperature SBS (elastomeric) self-adhered compound.",
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
            }, 100);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpenCalender]);

    const table = () => {
        setTableOpen(true)
    }
    const feature = () => {
        setfeatureOpen(true)
    }
    const technical = () => {
        setisTechnical(true)
    }
    const sales = () => {
        setisSales(true)
    }
    return (
        <div>
            <div className={styles.Library}>
                <div className={styles.Quick}>
                    <h2>Quick Bytes</h2>
                </div>
                <div className={styles.shortMain} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight2">
                    <div className={styles.shortTittle}>
                        <p>Sort by</p>
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
                        <p data-bs-dismiss="offcanvas" aria-label="Close"><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></p>
                    </div>
                    <div class="offcanvas-body">
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
                                        <span>Polstick euphoria</span>
                                    </label>
                                    <label className={styles.checkbox}>
                                        <input type="checkbox" />
                                        <span>Polystick xfr</span>
                                    </label>
                                    <label className={styles.checkbox}>
                                        <input type="checkbox" />
                                        <span>Midi fleece</span>
                                    </label>
                                    {/* <label className={styles.checkbox}>
                                        <input type="checkbox" />
                                        <span>Application Instructions</span>
                                    </label> */}

                                </div>
                            )}
                        </div>
                        {/* Dealflow section */}
                        <div className={styles.filterMain}>
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
                                        <span>Newest First</span>
                                    </label>
                                    <label className={styles.radio}>
                                        <input type="radio" name="sort" />
                                        <span>Oldest First</span>
                                    </label>
                                    <label className={styles.radio}>
                                        <input type="radio" name="sort" />
                                        <span>A to Z</span>
                                    </label>
                                </div>
                            )}
                        </div>


                    </div>
                </div>
            </div>
            {/* Modal Component */}
            {isModalOpen && selectedIndex !== null && (
                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <div className={styles.contentDetails}>
                        <div className={styles.modTitle}>
                            {videoLinks[selectedIndex] ?
                                <div className={styles.titleFlex}>
                                    <img src='/video-icon.svg' alt='' />
                                    <h5>{modalsubheading[selectedIndex]}</h5>
                                </div>
                                : null}

                        </div>
                        {videoLinks[selectedIndex] ?
                            <div className={styles.visualImg}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={videoLinks[selectedIndex]}
                                    title="Embedded Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div> :
                            <div className={styles.modTitle}>
                                <div className={styles.titleFlex}>
                                    <img src='/sell-icon.svg' alt='' />
                                    <h5> Must Complete to Sell</h5>
                                </div>
                                <div className={styles.sellDiv}>
                                    <label className={styles.checkbox2}>
                                        <span>Capturing Distributor Mind</span>
                                        <input type="checkbox" checked />
                                    </label>
                                    <label className={styles.checkbox2}>
                                        <span>Safety Datasheet</span>
                                        <input type="checkbox" checked />
                                    </label>
                                    <label className={styles.checkbox2}>
                                        <span>Product Datasheets</span>
                                        <input type="checkbox" checked />
                                    </label>
                                    <label className={styles.checkbox2}>
                                        <span>PolyGlass Case Studies</span>
                                        <input type="checkbox" checked />
                                    </label>
                                    <label className={styles.checkbox2}>
                                        <span>PolyGlass Sales Process</span>
                                        <input type="checkbox" checked />
                                    </label>
                                    <label className={styles.checkbox2}>
                                        <span>Opportunity Management</span>
                                        <input type="checkbox" checked />
                                    </label>
                                    <label className={styles.checkbox2}>
                                        <span>Outreach Best Practices</span>
                                        <input type="checkbox" checked />
                                    </label>
                                    <label className={styles.checkbox2}>
                                        <span>Salesforce(Official CRM)</span>
                                        <input type="checkbox" disabled />
                                    </label>
                                    <label className={styles.checkbox2}>
                                        <span>MOfficial LMS</span>
                                        <input type="checkbox" disabled />
                                    </label>
                                    <label className={styles.checkbox2}>
                                        <span>Polyglass.com</span>
                                        <input type="checkbox" disabled />
                                    </label>
                                </div>
                                <div className={styles.SubmitBtn}>
                                    <p>Okay</p>
                                </div>
                                {/* <div className={styles.closeBtn} aria-label="Close" data-bs-dismiss="offcanvas">
                                    <p>Close</p>
                                </div> */}
                            </div>
                        }
                        {videoLinks[selectedIndex] ?
                            <>
                                <div className={styles.ShareIconMain}><ShareOption /></div>
                                <div className={styles.contents}>
                                    <h5>{modalsubheading[selectedIndex]}</h5>
                                    <p>{subdescriptions[selectedIndex]}</p>
                                </div>
                            </>
                            : null}

                    </div>
                </Modal>
            )}

            {tableOpen ? <Modal isOpen={tableOpen} onClose={() => setTableOpen(false)}>
                <div className={styles.contentDetails}>
                    <div className={styles.modTitle}>
                        <div className={styles.titleFlex}>
                            <img src='/deal-Icon.svg' alt='' />
                            <h5>Active Deals</h5>
                        </div>
                        <div className={styles.tableContainer}>
                            <table className={styles.table}>
                                <thead>
                                    <tr className={styles.Headingtable}>
                                        <th>Name</th>
                                        <th>Company Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className={styles.ProductDiv}>
                                                <img src="svg/green-drop.svg" alt="" />
                                                <span>Ava Mitchell</span>
                                            </div>
                                        </td>
                                        <td>BlueWave Technologies</td>
                                        <td>Active</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={styles.ProductDiv}>
                                                <img src="svg/red-drop.svg" alt="" />
                                                <span>Daniel Roberts</span>
                                            </div>
                                        </td>
                                        <td>Pioneer Systems</td>
                                        <td>Inactive</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={styles.ProductDiv}>
                                                <img src="svg/green-drop.svg" alt="" />
                                                <span>Olivia Hayes</span>
                                            </div>
                                        </td>
                                        <td>EcoFuture Solutions</td>
                                        <td>Active</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={styles.ProductDiv}>
                                                <img src="svg/green-drop.svg" alt="" />
                                                <span>William Carter</span>
                                            </div>
                                        </td>
                                        <td>Velocity Networks</td>
                                        <td>Active</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={styles.ProductDiv}>
                                                <img src="svg/red-drop.svg" alt="" />
                                                <span>Sophia Bennett</span>
                                            </div>
                                        </td>
                                        <td>Zenith Enterprises</td>
                                        <td>Inactive</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={styles.ProductDiv}>
                                                <img src="svg/green-drop.svg" alt="" />
                                                <span>James Anderson</span>
                                            </div>
                                        </td>
                                        <td>NeonWave Technologies</td>
                                        <td>Active</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={styles.ProductDiv}>
                                                <img src="svg/green-drop.svg" alt="" />
                                                <span>Emma Brooks</span>
                                            </div>
                                        </td>
                                        <td>NextGen Robotics</td>
                                        <td>Active</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={styles.ProductDiv}>
                                                <img src="svg/red-drop.svg" alt="" />
                                                <span>Benjamin Foster</span>
                                            </div>
                                        </td>
                                        <td>CloudSync Solutions</td>
                                        <td>Inactive</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={styles.ProductDiv}>
                                                <img src="svg/green-drop.svg" alt="" />
                                                <span>Lucas Taylor</span>
                                            </div>
                                        </td>
                                        <td>AI Nexus Labs</td>
                                        <td>Active</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={styles.ProductDiv}>
                                                <img src="svg/green-drop.svg" alt="" />
                                                <span>Chloe Martinez</span>
                                            </div>
                                        </td>
                                        <td>SmartGrid Innovations</td>
                                        <td>Active</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className={styles.pagination}>
                            {[1, 2, 3].map((num) => (
                                <span
                                    key={num}
                                    className={`${styles.pageNumber} ${activePage === num ? styles.active : ""}`}
                                    onClick={() => setActivePage(num)}
                                >
                                    {num}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal> : null}

            {/* FeatureOpen Div */}
            {featureOpen ? <Modal isOpen={featureOpen} onClose={() => setfeatureOpen(false)}>
                <div className={styles.contentDetails}>
                    <div className={styles.modTitle}>
                        <div className={styles.titleFlex}>
                            <img src='/inforaphic-icon.svg' alt='' />
                            <h5>Features & Benefits</h5>
                        </div>

                        <iframe
                            src="https://docs.google.com/gview?embedded=true&url=https://polyglass.us/wp-content/uploads/2024/01/Polyflex-5.0-PDS_.pdf"
                            width="100%"
                            height="500px"
                        >
                            <p>Features & Benefits <a href="https://polyglass.us/wp-content/uploads/2024/01/Polyflex-5.0-PDS_.pdf" target="_blank">pdf</a>.</p>
                        </iframe>

                    </div>
                </div>
            </Modal> : null}

            {/* FeatureOpen Div */}
            {istechnical ? <Modal isOpen={setisTechnical} onClose={() => setisTechnical(false)}>
                <div className={styles.contentDetails}>
                    <div className={styles.modTitle}>
                        <div className={styles.titleFlex}>
                            <img src='/inforaphic-icon.svg' alt='' />
                            <h5>Technical Specs</h5>
                        </div>
                        <iframe
                            src="https://docs.google.com/gview?embedded=true&url=https://polyglass.us/wp-content/uploads/2024/01/Polyflex-5.0-PDS_.pdf"
                            width="100%"
                            height="500px"
                        >
                            <p>Features & Benefits <a href="https://polyglass.us/wp-content/uploads/2024/01/Polyflex-5.0-PDS_.pdf" target="_blank">pdf</a>.</p>
                        </iframe>
                    </div>
                </div>
            </Modal> : null}

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
                    <div className={styles.Bytes} onClick={() => handleOpenModal(3)} >
                        <div className={styles.vidIcon}>
                            <img src={icons[2]} alt="icon" />

                        </div>
                        <div className={styles.bytesTittle}>
                            <p>{titles[2]}</p>
                            <strong>{subtitles[2]}</strong>
                        </div>
                    </div>
                    <div className={styles.Bytes} onClick={table}>
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
                    <div className={styles.Bytes} onClick={feature} >
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
                    <div className={styles.Bytes} onClick={technical}>
                        <div className={styles.vidIcon}>
                            <img src={icons[7]} alt="icon" />

                        </div>
                        <div className={styles.bytesTittle}>
                            <p>{titles[7]}</p>
                            <strong>{subtitles[7]}</strong>
                        </div>
                    </div>
                </div>

                {/* Total sales Div */}
                {isSales ? <Modal isOpen={setisSales} onClose={() => setisSales(false)}>
                    <div className={styles.contentDetails}>
                        <div className={styles.modTitle}>
                            <div className={styles.titleFlex}>
                                <img src='/dollor-icon.svg' alt='' />
                                <h5>Total Sales</h5>
                            </div>

                        </div>
                        <div className={styles.forChart}>
                            <DailyTraffic />
                            <div className={styles.dailytraffic}>
                                <PieChartComponent />
                            </div>
                        </div>
                        <div>
                            <SalesRep />
                        </div>
                    </div>
                </Modal> : null}

                <div className={styles.boardContainer}>
                    {/* Total Sales Card */}
                    <div className={styles.card1} onClick={sales} >
                        <p className={styles.cardTitle}>Total Sales</p>
                        <h2 className={styles.amount}>$84.31m</h2>
                        <p className={styles.growth}>
                            <span className={styles.positive}>+23%</span> since last month
                        </p>
                    </div>
                    {/* Deals by Country Card */}
                    <div className={styles.card2}>
                        <div onClick={sales} >
                            <p className={styles.cardTitle}>Deals by Country</p>
                            <h2 className={styles.amount}>$21,480,000</h2>
                        </div>

                        <div className={styles.dropdownMain}>
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
                                            src={isOpen ? "svg/ArrowUp.svg" : "svg/ArrowDown.svg"}
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
