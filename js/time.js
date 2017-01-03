function Time() {
  this.alarms = [];
}

Time.prototype.getTime = function () {
  $('#time').text(moment().format('h:mm:ss a'));
};

Time.prototype.setAlarm = function (alarmSetTime) {
  var alarmSetTimeObject = new Date(moment().format('YYYY-MM-DD') + ' ' + alarmSetTime);
  this.alarms.push(alarmSetTimeObject);
};

Time.prototype.checkAlarm = function() {
  var result = false;
  this.alarms.forEach(function(currentAlarm) {
    if (moment(currentAlarm).format('hh:mm a') === moment().format('hh:mm a')) {
      result = true;
    }
  });
  return result;
};

Time.prototype.removeAlarm = function () {
  var i = 0;
  var currentAlarms = this.alarms;
  currentAlarms.forEach(function(currentAlarm) {
    if (moment(currentAlarm).format('kk:mm') === moment().format('kk:mm')) {
      currentAlarms.splice(i, 1);
    }
    i += 1;
  });
  this.alarms = currentAlarms;
};

exports.timeModule = Time;
