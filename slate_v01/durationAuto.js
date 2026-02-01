// durationAuto v251223

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

// vyber metody vypoctu TC
function vyhybka (fps, dur, dur23) {
	let tc;
	if (fps == "29.970") {
			tc = timeToNTSCTimecode(dur, ntscDropFrame = false, isDuration = true);
	} else if (fps == "23.976"){
			tc = timeToTimecode(dur, fps);
	} else {
			tc = timeToTimecode(dur, fps);
	}
	return tc;
}

let autoTC = vyhybka(timeBaseString, compDurationAdjusted, compDurAdj23);

autoTC;