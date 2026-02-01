// durationAuto v251223

let composition = thisComp.layer("compName").text.sourceText;
let compDuration = comp(composition).duration;
let startTC = comp(composition).displayStartTime;
let compDurationAdjusted = compDuration + startTC;
let frameDur = comp(composition).frameDuration;
let timeBase = parseFloat((1.0 / frameDur).toFixed(3));
let timeBaseString = (1.0 / frameDur).toFixed(3);

function methodTC (fps, dur) {
	let tc;
	if (fps == "29.970") {
			tc = timeToNTSCTimecode(dur, ntscDropFrame = false, isDuration = true);
	} else {
			tc = timeToTimecode(dur, fps);
	}
	return tc;
}

let autoTC = methodTC(timeBaseString, compDurationAdjusted);

autoTC;