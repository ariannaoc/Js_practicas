export default function Clock({ time }) {
  let hours = time.getHours();
  let clN = '';
  if (hours >= 0 && hours <= 6) {
    clN = 'night';
  } else {
    clN = 'day';
  }
  
  return (
    <h1 id="time" className={clN}>
      {time.toLocaleTimeString()}
    </h1>
  );
}