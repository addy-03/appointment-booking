import "./styles.css";

const AppointmentScheduler = () => {
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
          <div className="calender-wrapper">Calender Grid</div>
        </div>
        <div className="slots-wrapper"></div>
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
