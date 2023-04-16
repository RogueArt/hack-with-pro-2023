export const USER_ROLE = 'user';
export const SYSTEM_ROLE = 'system';
export const ASSISTANT_ROLE = 'assistant';
export const RULES_MESSAGE = 
`
I am going to provide a schedule of tasks in the message.
The working hours are: 9 AM to 5 PM
The days of the week are: Monday

The input format will be a list of tasks and a list of events:
The input format of tasks will be:
<Task Name> | <Time duration in MINUTES> | <Priority>

The input format of the events will be:
<Event Name> | <Start Time> - <End Time> | <Day of week>

The output format must be:
<Task Name> | <Start time> - <End time> | <Day of week>

Here are the rules for this:
- Higher priority number should be prioritized higher
- Tasks should not overlap
- Do NOT schedule tasks to overlap with an event
- Optimize for minimizing context switching
- Use 24 hour military time
- Do not exceed the total working hours. If it exceeds the total hours, schedule as many of the highest priority tasks possible. In the output list, do not include the skipped tasks.

Respond only in the output format and do NOT print anything else other than this list.
RESPOND ONLY IN THE OUTPUT FORMAT AND DO NOT PRINT ANYTHING ELSE.
`;