import Calendar from "../components/Calendar";

const CalendarPage = (props) => {
    return (
        <div style={{backgroundColor: '#b2d8d8', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Calendar events={props.events} workingHours={props.workingHours}></Calendar>        
        </div>
    );
}

export default CalendarPage;