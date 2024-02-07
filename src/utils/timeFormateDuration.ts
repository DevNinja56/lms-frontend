export const formatDuration = (durationInSeconds: any) => {
  const seconds = Math.floor(durationInSeconds % 60);
  const minutes = Math.floor(durationInSeconds / 60) % 60;
  const hours = Math.floor(durationInSeconds / 3600);

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  if (minutes >= 60) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
};
