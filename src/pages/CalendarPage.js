import Calendar from "../components/Calendar";

const CalendarPage = (props) => {
    return (
      <div>
        {/* // <div style={{backgroundColor: '#b2d8d8', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> */}
        <h1>
          <span class="magic">Schedule</span>
        </h1>
        <Calendar
          events={props.events}
          workingHours={props.workingHours}
        ></Calendar>
      </div>
    )
}

export default CalendarPage;