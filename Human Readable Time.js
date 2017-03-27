function humanReadable(seconds) {
  var hours=Math.floor(seconds/3600);
  if(hours<10){hours="0"+hours;}
  var minutes=Math.floor((seconds%3600)/60);
  if(minutes<10){minutes="0"+minutes;}
  var secs=seconds%60;
  if(secs<10){secs="0"+secs;}
  return hours+":"+minutes+":"+secs;
}
