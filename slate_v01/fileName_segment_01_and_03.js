//	fileName_segment_01_and_03
//  261030_v06
//	duration_Switch

let switchBrand = thisComp.layer("controls").effect("brand_switch")("Checkbox");
let switchLang = thisComp.layer("controls").effect("language_Switch")("Checkbox");
let switchTitle = thisComp.layer("controls").effect("title_switch")("Checkbox");
let duration_Switch = thisComp.layer("controls").effect("duration_Switch")("Checkbox");

let compName = thisComp.layer("compName").text.sourceText;
let compNameSplit = compName.split(/[\s_-]+/);	//splitting (space, _, -)
let durationFormated = thisComp.layer("durationFormated").text.sourceText.replace(/\W/gi, "");
let durationFormatedRounded = thisComp.layer("durationFormatedRounded").text.sourceText.replace(/\W/gi, "");
let durationOut;

if (duration_Switch == true) {
		durationOut = durationFormatedRounded;
	} else {
		durationOut = durationFormated; 
	}

//	==============================

let movingEnd = 4 + switchBrand + switchLang + switchTitle;
const compNameSplitTrimmed = compNameSplit.slice(0, movingEnd);
const compNameSplitTrimmed2 = compNameSplit.slice(compNameSplit.length - 2);

compNameSplitTrimmed.push(durationOut);
const compNameResult = compNameSplitTrimmed.concat(compNameSplitTrimmed2);

compNameResult;