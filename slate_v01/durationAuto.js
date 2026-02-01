// durationAuto v260201

let composition = thisComp.layer("compName").text.sourceText;
let compDuration = comp(composition).duration;
let startTC = comp(composition).displayStartTime;
let frameDur = comp(composition).frameDuration;
let timeBase = parseFloat((1.0 / frameDur).toFixed(3));
let compDurationAdjusted;

// Try to use reference layer "mediaPlaceholder" for duration
try {
    let refLayer = comp(composition).layer("mediaPlaceholder").source;
    compDurationAdjusted = refLayer.duration;
} catch (e) {
    // Fallback: calculate from comp duration minus preRoll
    let preRoll;
    if (startTC < 0) {
        // Negative pre-roll case (original logic)
        preRoll = -startTC;
    } else {
        // Positive timecode case: no adjustment
        preRoll = 0;
    }
    compDurationAdjusted = compDuration - preRoll;
}

function methodTC (dur, fps) {
	let tc;
    tc = timeToTimecode(dur, fps, isDuration = false);
	return tc;
}

let autoTC = methodTC(compDurationAdjusted, timeBase);

autoTC;