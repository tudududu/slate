//	durationFormated 
//  251031

//duration s framy
let durationIn = thisComp.layer("durationAuto").text.sourceText;
//delime na casti
let f = durationIn.substr(9, 2);
let s = durationIn.substr(6, 2);
let m = durationIn.substr(3, 2);
let h = durationIn.substr(0, 2);

function frames(frame) { // zobraz framy pouze pokud nejsou nula
	if (frame > 0) {
		return frame + "f";
	}
	return "";
}

function tempo(hour, minute, second, frame) { // cas s mezerami za jednotkou
	if (hour > 0) {
		return hour + "h " + minute + "m " + second + "s " + frames(frame);
	}
	if (minute > 0) {
		return minute + "m " + second + "s " + frames(frame);
	}
	if (second >= 0) {
		return second + "s " + frames(frame);
	}
}

let durationFormated = tempo(h, m, s, f);

durationFormated;