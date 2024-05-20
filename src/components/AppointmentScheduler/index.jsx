import { useEffect, useState } from "react";
import "./styles.css";
import CustomCalender from "../Calender";
import axios from "axios";

const AppointmentScheduler = () => {
  const [value, onChange] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState(null);

  const getAvailableSlots = async (date) => {
    axios
      .get(
        `https://app.appointo.me/scripttag/mock_timeslots?start_date=${date?.startDate}&end_date=${date?.endDate}`
      )
      .then((res) => setAvailableSlots(res.data))
      .catch((e) => console.log({ e }));
  };

  useEffect(() => {
    const startDate = new Date(value);
    let endDate = new Date(value);
    endDate.setDate(endDate.getDate() + 1);

    console.log({
      value,
    });

    getAvailableSlots({
      startDate: `${startDate.getFullYear()}-${
        startDate.getMonth() + 1
      }-${startDate.getDate()}`,
      endDate: `${endDate.getFullYear()}-${
        endDate.getMonth() + 1
      }-${endDate.getDate()}`,
    });
  }, [value]);

  useEffect(() => {
    console.log({ availableSlots });
  }, [availableSlots]);

  return (
    <div className="flex-col appointment-container">
      <div className="flex-row body">
        <div className="flex-col calender-container">
          <div className="flex-col header">
            <h2 className="heading">Test Service</h2>
            <div className="flex-row timezone-wrapper">
              <span className="timezone-label">Timezone:</span>
              <span className="timezone-value">Asia/Calcutta</span>
            </div>
          </div>
          <div className="calender-wrapper">
            <CustomCalender value={value} onChange={onChange} />
          </div>
        </div>
        <div className="slots-wrapper">{`${availableSlots
          ?.at(0)
          ?.slots?.reduce((a, b) => (a += "\n" + b.start_time))}`}</div>
      </div>
      <div className="footer">
        <span className="text">
          POWERED BY <a href="">APPOINTO</a>
        </span>
        <button className="button-next"></button>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
