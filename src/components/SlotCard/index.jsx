import "./styles.css";

const SlotCard = ({ isSelected, startDate, endDate }) => {
  console.log({ startDate, endDate });
  const getTime = (date) => {
    const tempDate = new Date(date);

    const pad = (num) => {
      return (num < 10 ? "0" : "") + num;
    };

    const hours = tempDate?.getHours();

    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    // console.log({ tempDate, min: tempDate?.getMinutes() });

    return `${pad(formattedHours)}:${pad(tempDate?.getMinutes())} ${ampm}`;
  };

  return (
    <>
      <div className="flex-row slot-card-container">
        <span className="time-duration">{`${getTime(startDate)} - ${getTime(
          endDate
        )}`}</span>
        {isSelected && (
          <span className="material-symbols-rounded icon-check">
            check_circle
          </span>
        )}
      </div>
    </>
  );
};
export default SlotCard;
