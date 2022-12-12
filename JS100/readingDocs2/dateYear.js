// What is the difference between the two methods?
// Which should you use?
let today = new Date();

today.getYear(); // returns year - 1900 -> depreciated, don't use!
today.getFullYear(); // returns the year of the specified date according to local time.