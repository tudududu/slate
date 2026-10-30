//	durationFormatedRounded
//  v261030

//duration s framy
let durationIn = thisComp.layer("durationAuto").text.sourceText;
let sourceComp = thisComp.layer("compName").text.sourceText; //sourceComp
let frame = comp(sourceComp).frameDuration;
let fpsRaw = 1 / frame; //fps zdrojove kompozice
let sRound;

//delime na casti
let f = durationIn.substr(9, 2);
let s = durationIn.substr(6, 2);
let m = durationIn.substr(3, 2);
let h = durationIn.substr(0, 2);

function roundSeconds(seconds, frames, fps) {	// zaookrouhleni vterin (vystup: cislo)
	let numSecIn = parseInt(seconds); //	menime na cislo
	let numSecOut;
	if ( frames < fps / 2 ) { // zaookrouhleni pokud je oken vice nez fps/2
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
function tempo(hour, minute, second, frame) { // cas s mezerami za jednotkou
	if (hour > 0) {
		return hour + "h " + minute + "m " + second + "s ";
	}
	if (minute > 0) {
		return minute + "m " + second + "s ";
	}
	if (second >= 0) {
		return second + "s ";
	}
}
sRound = roundSeconds(s, f, fpsRaw);
s = stringTwoDigit(sRound);
let durationFormated = tempo(h, m, s, f);

durationFormated;