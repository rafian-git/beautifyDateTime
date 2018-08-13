# beautifyDateTime
a date time beautifier sized only 2kb . takes JS date format as input .
Made it for one of my projects . But i uploaded it as it may help others by not making one from scratch 

Example--------------------------
takes input >> 2011-02-06 14:21:00.014
returns >> 06/02/2011 at 2:21 pm

takes input >> 2018-08-10 21:47:06.731 (Current time)
returns >> Just now

takes input >> 2018-08-10 21:47:05.731 (a minute ago)
returns >> A minute ago

takes input >> 2018-08-10 21:47:02.731 (4 minutes ago)
returns >> A minute ago

takes input >> 2018-08-10 20:47:05.731 (an hour ago)
returns >> An hour ago

takes input >> 2018-08-10 17:47:05.731 (3 hours ago)
returns >> 3 hours ago

takes input >> 2018-08-10 21:47:06.731 (Today's date)
returns >> today at 9:47 pm

takes input >> 2018-08-09 21:47:06.731 (Yesterday's date)
returns >> yesterday at 9:47 pm

takes input >> 2018-02-06 14:21:00.014 (Current year)
returns >> 6 February at 2:21 pm

Demonstration-------------------------
var beautifyDateTime = require('./beautifyDateTime');

var anyDate = new Date("2011-02-06 14:21:00.014");
var outputDate = beautifyDateTime(anyDate);

console.log(outputDate);
