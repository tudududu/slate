// jen durationAuto, manual odstranen 230830

let composition = thisComp.layer("compName").text.sourceText;
let compDuration = comp(composition).duration;
let startTC = comp(composition).displayStartTime;
let compDurationAdjusted = compDuration + startTC;
let frameDur = comp(composition).frameDuration;
let timeBase = parseFloat((1.0 / frameDur).toFixed(3));
let timeBaseString = (1.0 / frameDur).toFixed(3);
let compDurKoef = 0.999; 	// koeficient pro opravu delky pri 23.976 fpd
// 10738 / 10748.748748748749 // pomer spravne a spatne (23.976) delky zmerene pro 02:58:58:00
let compDurAdj23 = compDurationAdjusted * compDurKoef;



// muj timeToTimecode()-------------------------------
function timeToTimecodeMy(compDurLoc, frameDurLoc) {
// prevod jednocifra na dvoucifru
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
let ssFloor = Math.floor(compDurLoc % 60); // vteriny jen cele
let minutesZb = Math.floor((compDurLoc / 60) % 60);
let hhTotal = Math.floor(compDurLoc / 3600);

let mm = pad(minutesZb, 2);
let ss = pad(ssFloor, 2);
let ff = pad(ffZbRound, 2);
let hh = pad(hhTotal, 2);
let tc = `${hh}:${mm}:${ss}:${ff}`;

return tc;
}
// muj timeToTimecode()-------------------------------

// vyber metody vypoctu TC
function vyhybka (fps, dur, dur23) {
	let tc;
	if (fps == "29.970") {
			tc = timeToNTSCTimecode(dur, ntscDropFrame = false, isDuration = true);	//"29.97"
	} else if (fps == "23.976"){
			tc = timeToTimecodeMy(dur23, frameDur); // funguje
	} else {
			tc = timeToTimecodeMy(dur, frameDur);	//"ostatni"
	}
	return tc;
}

// automaticky TC
let autoTC = vyhybka(timeBaseString, compDurationAdjusted, compDurAdj23);

autoTC;
