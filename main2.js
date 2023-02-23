const manualSchedule = [
  { day_of_week: 'TUE', start: '14:30', end: '16:30' },
  { day_of_week: 'WED', start: '14:30', end: '16:30' },
  { day_of_week: 'THU', start: '14:30', end: '16:30' },
];
const startDates = [
  '20230220T070000-0400',
  '20230222T080000-0400',
  '20230224T090000-0400',
];
const endDates = [
  '20230220T160000-0400',
  '20230222T170000-0400',
  '20230224T180000-0400',
];
const dayInHours = [].concat(Array(24).fill(0));

const hourConverter = (time) => {
  const year = time.slice(0, 4);
  const month = parseInt(time.slice(4, 6), 10) - 1; // Month is zero-based in Date constructor
  const day = time.slice(6, 8);
  const hour = time.slice(9, 11);
  const minute = time.slice(11, 13);
  const second = time.slice(13, 15);
  const timezoneOffset = parseInt(time.slice(15, 17), 10) * 60 + parseInt(time.slice(17, 19), 10); // Convert minutes to seconds
  const date = new Date(Date.UTC(year, month, day, hour, minute, second) - timezoneOffset * 1000);
  return time = date.getHours();
}

startDates.map((startDate, index) => {
  const startHour = hourConverter(startDate);
  const endHour = hourConverter(endDates[index]);
  dayInHours.fill(1, startHour, endHour + 1 );
  console.log(dayInHours);
  console.log(startHour, endHour)
})
