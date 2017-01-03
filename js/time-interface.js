var Time = require('./../js/time.js').timeModule;

$(document).ready(function(){
  var newAlarm = new Time();
  var alarmTime = function() {
    $('#alarm-list').empty();
    newAlarm.alarms.forEach(function(currentAlarm) {
      $('#alarm-list').append("<li class=" + (moment(currentAlarm).format('kk:mm')) + ">" + moment(currentAlarm).format('hh:mm a') + "</li>");
    });
    newAlarm.getTime();
    if (newAlarm.checkAlarm() === true) {
      alert('Your alarm is going off')
      newAlarm.removeAlarm()
    }
  };
  setInterval(alarmTime, 1000);

  $('.set-alarm').click(function() {
    $('#alarm-list').empty();
    var alarmSetTime = $('#alarm-time').val();
    newAlarm.setAlarm(alarmSetTime);
    newAlarm.alarms.forEach(function(currentAlarm) {
    $('#alarm-list').append("<li class=" + (moment(currentAlarm).format('kk:mm')) + ">" + moment(currentAlarm).format('hh:mm a') + "</li>");
  });
  });
});
