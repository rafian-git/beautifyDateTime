# beautifyDateTime
a date time beautifier sized only 2kb . takes JS date format as input .
Made it for one of my projects . But i uploaded it as it may help others by not making one from scratch 

Example--------------------------
takes input >> 2011-02-06 14:21:00.014
returns >> 06/02/2011 at 2:21 pm

takes input >> 2018-08-10 21:47:06.731 (Today's date)
returns >> today at 9:47 pm

takes input >> 2018-08-09 21:47:06.731 (Yesterday's date)
returns >> yesterday at 9:47 pm

takes input >> 2018-02-06 14:21:00.014 (Current year)
returns >> 6 February at 2:21 pm

Demonstration-------------------------
var beautifyDateTime = require('./beautifyDateTime');

var anyDate = "2011-02-06 14:21:00.014";
var outputDate = beautifyDateTime(anyDate);

console.log(outputDate);
