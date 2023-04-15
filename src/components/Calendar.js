import React, { Component } from 'react';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    // You can load events from a server here
  }

  handleTimeRangeSelected = async (args) => {
    const name = prompt("New event name:", "Event");
    if (!name) return;

    const e = {
      start: args.start,
      end: args.end,
      id: DayPilot.guid(),
      text: name,
    };

    this.setState((prevState) => {
      return { events: [...prevState.events, e] };
    });
  };

  handleEventMove = async (args) => {
    this.setState((prevState) => {
      return {
        events: prevState.events.map((event) => {
          if (event.id === args.e.id()) {
            event.start = args.newStart;
            event.end = args.newEnd;
          }
          return event;
        }),
      };
    });
  };

  handleEventResize = async (args) => {
    this.setState((prevState) => {
      return {
        events: prevState.events.map((event) => {
          if (event.id === args.e.id()) {
            event.start = args.newStart;
            event.end = args.newEnd;
          }
          return event;
        }),
      };
    });
  };

  render() {
    const { events } = this.state;

    const config = {
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: this.handleTimeRangeSelected,
      eventMoveHandling: "Update",
      onEventMove: this.handleEventMove,
      eventResizeHandling: "Update",
      onEventResize: this.handleEventResize,
    };

    return (
      <div>
        <DayPilotCalendar {...config} events={events} />
      </div>
    );
  }
}

export default Calendar;
