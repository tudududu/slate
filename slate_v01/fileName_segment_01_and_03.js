//	filename_segment_01_03
//  251223_v05
//	duration for fileName extracted to layer durationFormated

let switchBrand = thisComp.layer("controls").effect("brand_switch")("Checkbox");
let switchLang = thisComp.layer("controls").effect("language_Switch")("Checkbox");
let switchTitle = thisComp.layer("controls").effect("title_switch")("Checkbox");

let compName = thisComp.layer("compName").text.sourceText;
let compNameSplit = compName.split(/[\s_-]+/);	//splitting (space, _, -)
let durationFormated = thisComp.layer("durationFormated").text.sourceText.replace(/\W/gi, "");
//	==============================
//	Duration For FileName_AUTO 230714
//	AP version durationIn =  durationManually;
let sourceComp = thisComp.layer("compName").text.sourceText; //sourceComp
let durationIn = thisComp.layer("durationAuto").text.sourceText;
let frames; let secondsIn; let m; let h; let s; let sRound;
//	fps kvuli zaookrouhleni vterin
let frame = comp(sourceComp).frameDuration;
let fpsRaw = 1 / frame; //fps zdrojove kompozice

//	==============================

let movingEnd = 4 + switchBrand + switchLang + switchTitle;
const compNameSplitTrimmed = compNameSplit.slice(0, movingEnd);
const compNameSplitTrimmed2 = compNameSplit.slice(compNameSplit.length - 2);

compNameSplitTrimmed.push(durationFormated);
const compNameResult = compNameSplitTrimmed.concat(compNameSplitTrimmed2);

compNameResult;