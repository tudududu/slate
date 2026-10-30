//	filename_segment_01_03
//  231128_v04
//	slouceni s fileName_03_(date, version)

let switchBrand = thisComp.layer("controls").effect("brand_switch")("Checkbox");
let switchLang = thisComp.layer("controls").effect("language_Switch")("Checkbox");
let switchTitle = thisComp.layer("controls").effect("title_switch")("Checkbox");

let compName = thisComp.layer("compName").text.sourceText;
let compNameSplit = compName.split(/[\s_-]+/);	//splitting (space, _, -)

//	==============================
//	Duration For FileName_AUTO 230714
//	AP version durationIn =  durationManually;
let sourceComp = thisComp.layer("compName").text.sourceText; //sourceComp
let durationIn = thisComp.layer("DurationAuto").text.sourceText;
let frames; let secondsIn; let m; let h; let s; let sRound;
//	fps kvuli zaookrouhleni vterin
let frame = comp(sourceComp).frameDuration;
let fpsRaw = 1 / frame; //fps zdrojove kompozice

function roundSeconds(string) {	// zaookrouhleni vterin (vystup: cislo)
	let numSecIn = parseInt(string); //	menime na cislo
	let numSecOut;
	if ( frames < fpsRaw / 2 ) { // zaookrouhleni pokud je oken vice nez fps/2
	numSecOut = numSecIn;
	} else {
	numSecOut = numSecIn + 1;
	}
	return numSecOut;
}

function stringTwoDigit(number) {	//	jednociferne cislo na dvouciferne (vystup: string)
	let numMod;
	let numRaw = number.toString();
	let numLenght =	number.toString().length;
	if ( numLenght < 2) {
		numMod = "0" + numRaw;
		} else {
		numMod = numRaw;
		}
	return numMod;
}

function durationFileName() {	//	vystup
	if ( h > 0 ) {
		return h + "h" + m + "m" + s + "s";
	} else if ( m > 0 ) {
		return m + "m" + s + "s";
	} else if ( s >= 0 ) {
		return s + "s";
	}
}

frames = durationIn.substr(9, 2);
secondsIn = durationIn.substr(6, 2);
m = durationIn.substr(3, 2);
h = durationIn.substr(0, 2);
sRound = roundSeconds(secondsIn); 	//	zaookrouhleni vterin (number)
s = stringTwoDigit(sRound); 		//	dvouciferne vteriny (string)
									//	protoze automaticky ctena delka dava 0-9s jednociferne
//	==============================

let movingEnd = 4 + switchBrand + switchLang + switchTitle;
const compNameSplitTrimmed = compNameSplit.slice(0, movingEnd);
const compNameSplitTrimmed2 = compNameSplit.slice(compNameSplit.length - 2);

compNameSplitTrimmed.push(durationFileName());
const compNameResult = compNameSplitTrimmed.concat(compNameSplitTrimmed2);

compNameResult;