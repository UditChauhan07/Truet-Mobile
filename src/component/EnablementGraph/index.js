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
  { month: "SEP", value1: 50, value2: 40 },
  { month: "OCT", value1: 60, value2: 50 },
  { month: "NOV", value1: 80, value2: 60 },
  { month: "DEC", value1: 65, value2: 55 },
  { month: "JAN", value1: 90, value2: 70 },
  { month: "FEB", value1: 85, value2: 75 },
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
            <p className={styles.TotalSpent}>Total Spent</p>
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
          <Line type="monotone" dataKey="value1" stroke="#4c3cff" strokeWidth={3} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="value2" stroke="#63c7ff" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>

      {/* Status */}
      <p className={styles.Ontrack}><span><img src="svg/track-icon.svg" alt="" /></span>  On Track</p>
    </div>
  );
};

export default Graph;
