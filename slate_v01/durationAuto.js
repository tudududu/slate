// durationAuto, version 230830

let composition = thisComp.layer("compName").text.sourceText;
let compDuration = comp(composition).duration;
let startTC = comp(composition).displayStartTime;
let compDurationAdjusted = compDuration + startTC;
let frameDur = comp(composition).frameDuration;
let timeBase = parseFloat((1.0 / frameDur).toFixed(3));
let timeBaseString = (1.0 / frameDur).toFixed(3);
let compDurKoef = 0.999; 	// coefficient for duration at 23.976 fps
// 10738 / 10748.748748748749 // ratio of correct and incorrect (23.976) length measured for 02:58:58:00
let compDurAdj23 = compDurationAdjusted * compDurKoef;



// my timeToTimecode()-------------------------------
function timeToTimecodeMy(compDurLoc, frameDurLoc) {
// conversion one digit -> two digits
function pad(num, positions) {
    num = num.toString();
    while (num.length < positions) {
		num = "0" + num
		};
    return num;
	}

let ffTotalZbytek = compDurLoc % 1;
let ffZb = ffTotalZbytek / frameDurLoc;
let ffZbRound = Math.floor(ffZb);
let ssFloor = Math.floor(compDurLoc % 60); // seconds only whole
let minutesZb = Math.floor((compDurLoc / 60) % 60);
let hhTotal = Math.floor(compDurLoc / 3600);

let mm = pad(minutesZb, 2);
let ss = pad(ssFloor, 2);
let ff = pad(ffZbRound, 2);
let hh = pad(hhTotal, 2);
let tc = `${hh}:${mm}:${ss}:${ff}`;

return tc;
}
// my timeToTimecode()-------------------------------

// TC method
function methodTC (fps, dur, dur23) {
	let tc;
	if (fps == "29.970") {
			tc = timeToNTSCTimecode(dur, ntscDropFrame = false, isDuration = true);
	} else if (fps == "23.976"){
			tc = timeToTimecodeMy(dur23, frameDur);
	} else {
			tc = timeToTimecodeMy(dur, frameDur);
	}
	return tc;
}

let autoTC = methodTC(timeBaseString, compDurationAdjusted, compDurAdj23);

autoTC;
