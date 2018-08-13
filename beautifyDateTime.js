
const beautifyDateTime = function(aDate){
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  var day =new Date(aDate);
  var dd = day.getDate();
  var mm = day.getMonth()+1; //January is 0!
  var yyyy = day.getFullYear();
  var hours=day.getHours() ;
  var minutes=day.getMinutes() ;
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var t = hours + ':' + minutes + ' ' + ampm;
  var today = new Date();
//  console.log(dd + "/" + mm +"/"+yyyy+"  "+hours+":"+minutes+" "+ampm);

  if(dd == today.getDate() && mm == today.getMonth()+1 && yyyy== today.getFullYear()){
    if (day.getHours() == today.getHours() && day.getMinutes() == today.getMinutes() ) {
      var nDate =  "Just now";
    }
    else if (day.getHours() == today.getHours()) {
      if(day.getMinutes() == today.getMinutes()-1 )
      var nDate =  "A minute ago";
      else if (day.getMinutes() == '59' && today.getMinutes()== "0")
      var nDate =  "A minute ago";
      else if (today.getMinutes() - day.getMinutes() >1){
      var diff = today.getMinutes() - day.getMinutes();
      var nDate =  diff+" minutes ago";
      }
      else if (day.getMinutes() >today.getMinutes()){
      var diff = 60 - day.getMinutes();
      diff += today.getMinutes();
      var nDate =  diff+" minutes ago";
      }
      else
      var nDate =  "Within the hour";

    }
    else if (day.getHours() == today.getHours()-1) {
      if (today.getMinutes() > day.getMinutes()) {
        var nDate =  "An hour ago";
      }
    }
    else {
      if (today.getHours() > day.getHours()) {
        var diff = today.getHours() - day.getHours();
        var nDate =  diff+" hours ago";
      }
      else
      var nDate =  "today at "+t   // for today
    }
    return nDate;
  }
// for yesterday
  else if (dd == today.getDate()-1 && mm == today.getMonth()+1 && yyyy== today.getFullYear()) {
    var nDate = "yesterday at " + t;
return nDate;
  }
// for current year
  else if (yyyy== today.getFullYear()) {
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
