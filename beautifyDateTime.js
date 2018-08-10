
const beautifyDateTime = function(aDate){
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  var today =new Date(aDate);
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var hours=today.getHours() ;
  var minutes=today.getMinutes() ;
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var t = hours + ':' + minutes + ' ' + ampm;
  var day = new Date();
//  console.log(dd + "/" + mm +"/"+yyyy+"  "+hours+":"+minutes+" "+ampm);

// for today
  if(dd == day.getDate() && mm == day.getMonth()+1 && yyyy== day.getFullYear()){
    var nDate =  "today at "+t;
    return nDate;
  }
// for yesterday
  else if (dd == day.getDate()-1 && mm == day.getMonth()+1 && yyyy== day.getFullYear()) {
    var nDate = "yesterday at " + t;
return nDate;
  }
// for current year
  else if (yyyy== day.getFullYear()) {
    var nDate = monthNames[mm-1] + " " + dd + " at " + t;
return nDate;
  }
//for any other past/future years
  else {

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    var nDate = dd + '/' + mm + '/' + yyyy +" at "+ t;
    return nDate;
  }

}



module.exports =  {
    beautifyDateTime
};
