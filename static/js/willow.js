let DateTime = luxon.DateTime;

/* Convert a timestamp to a date string */
function ts2date(ts) {
  let dt = DateTime.fromSeconds(ts);
  return dt.toFormat("yyyy-MM-dd HH:mm:ss");
}


/* change */
