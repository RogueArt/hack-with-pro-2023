export const USER_ROLE = 'user';
export const SYSTEM_ROLE = 'system';
export const ASSISTANT_ROLE = 'assistant';
export const RULES_MESSAGE = 
`I am going to provide a schedule of tasks in the message.
The working hours are: 9 AM to 5 PM
The days of the week are: Monday

The input format will be:
<Task Name> - <Time duration> - <Priority>

The output format must be:
<Task Name> - <Start time> - <End time> - <Day of week>

Here are the rules for this:
- Higher priority number should be prioritized higher
- Tasks should not overlap
- Optimize for minimizing context switching
- Respond only in the output format and do not print anything else other than this list
- Do not exceed the total working hours. If it exceeds the total hours, schedule as many of the highest priority tasks possible. In the output list, do not include the skipped tasks.
`;