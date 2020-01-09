var timers = require("timers");
// timers.setTimeout(() => console.log("timer"), 5000);
// timers.setInterval(() => console.log("timer"), 1000);
// console.log("enter");

var assert = require("assert");
// var minum = { kopi: ["luwak", "hitam", "susu"] };
// try {
//   assert.equal(minum.kopi.length, 4);
// } catch (error) {
//   console.log(error);
//   throw error;
// }

var URL = require("url");
// var link = " lin.id/data.htm?tgl=2&bln=july";
// var dataUrl = URL.parse(link, true);
// console.log(dataUrl);

var os = require("os");
var dataCPU = os.cpus();
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.userInfo());
// console.log(dataCPU[0].speed);

var events = require("events");
var eventKu = new events.EventEmitter();
