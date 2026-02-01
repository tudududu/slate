// durationAuto v260131

let composition = thisComp.layer("compName").text.sourceText;
let compDuration = comp(composition).duration;
let startTC = comp(composition).displayStartTime;
let frameDur = comp(composition).frameDuration;
let timeBase = parseFloat((1.0 / frameDur).toFixed(3));
let timeBaseString = (1.0 / frameDur).toFixed(3);
let preRoll;
let compDurationAdjusted = compDuration - preRoll;

// Get the offset between displayStartTime and actual content start
// You need to define where your content actually starts
let contentStart = 36000; // 10:00:00:00 in seconds (or get from a reference layer)
let displayStartTC = comp(composition).displayStartTime;

if (displayStartTC < 0) {
    // Negative pre-roll case (original logic)
    preRoll = -displayStartTC;
} else {
    // Positive timecode case - calculate pre-roll from offset
    preRoll = contentStart - displayStartTC;
}

function methodTC (dur, fps) {
	let tc;
	if (fps == "29.970") {
			tc = timeToNTSCTimecode(dur, ntscDropFrame = false, isDuration = true);
	} else {
			tc = timeToTimecode(dur, fps, isDuration=false);
	}
	return tc;
}

let autoTC = methodTC(compDurationAdjusted, timeBaseString);

autoTC;