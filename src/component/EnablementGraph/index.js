import React,{useState,useRef} from "react";
import styles from './Style.module.css'
import Bardesign from '../images/bardesign.svg'
import CalanderIcon from '../images/calanderIcon.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "SEP", "My Sales":40, "My Team":60},
  { month: "OCT", "My Sales":35, "My Team":55},
  { month: "NOV", "My Sales":60, "My Team":80},
  { month: "DEC", "My Sales":55, "My Team":65},
  { month: "JAN", "My Sales":70, "My Team":90},
  { month: "FEB", "My Sales":75, "My Team":85},
];


const Graph = () => {
  const [startDate, setStartDate] = useState(new Date()); // Default current month
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  // जब बाहर क्लिक हो तो popup बंद करें
  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  // Event listener add करें
  React.useEffect(() => {
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCalendar]);
  return (
    <div className={styles.graph}>
      {/* Header Section */}
      <div className={styles.flexSo}>
        <div className={styles.graphDetail}>
          <div>
            <h2 className={styles.graphPrice}>$37.5K</h2>
            <p className={styles.TotalSpent}>My Sales</p>
          </div>
          <p className={styles.growthPercent}>+2.45%</p>
        </div>

        {/* Dropdown and Chart Button */}
        <div className={styles.charContro}>
        <div className={styles.calendarContainer} ref={calendarRef}>
      {/* बटन */}
      <button className={styles.dateStyl} onClick={() => setShowCalendar(!showCalendar)}>
        <img src={CalanderIcon} alt="Calendar Icon" />
        This month
      </button>

      {/* Calendar Popup */}
      {showCalendar && (
        <div className={styles.datePickerWrapper}>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setShowCalendar(false);
            }}
            inline
          />
        </div>
      )}
    </div>

          <button className={styles.BarDesign}>
            <img src={Bardesign} />
          </button>
        </div>
      </div>

      {/* Graph Section */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#bbb" />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip />
          <Line type="monotone" dataKey="My Sales" stroke="#4318FF" strokeWidth={3} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="My Team" stroke="#6AD2FF" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>

      {/* Status */}
      <p className={styles.TotalSpent1}>Team Target:<sapn className={styles.myTargetblue}> $95,000</sapn> </p>
      <div className={styles.TrackControl}>
        <p className={styles.TotalSpent1}>My Target:<span className={styles.myTargetPurpule}> $55,000</span> </p>
      <p className={styles.Ontrack}><span><img src="svg/track-icon.svg" alt="" /></span>  On Track</p></div>

     

    </div>

    
  );
};

export default Graph;
