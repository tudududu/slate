//	slate 240529
//	set 01
//	vlozen replace pro rozdeleni camel textu zobrazovaneho v polich

let switchBrand = thisComp.layer("controls").effect("brand_switch")("Checkbox");
let switchLang = thisComp.layer("controls").effect("language_Switch")("Checkbox");
let switchTitle = thisComp.layer("controls").effect("title_switch")("Checkbox");

let compName = thisComp.layer("compName").text.sourceText;
let compNameSplit = compName.split(/[\s_-]+/);	//splitting (space, _, -)
const regex = /([a-z])([A-Z])/g;
let replacement = "$1 $2";

// "gumuje" pole pokud je vynuto vypinacem
function vyplneno(txtField, fieldSwitch) {
	let result
	if (fieldSwitch == 1) {
	result = txtField;
	} else {
	result = "";
	}
return result;
}

// txtSrc
let textIn_Client = compNameSplit[0];
let textIn_Brand = compNameSplit[1];
let text_Brand = vyplneno(textIn_Brand, switchBrand);
let textIn_Country = compNameSplit[1 + switchBrand];
let textIn_Lang = compNameSplit[2 + switchBrand];
let text_Lang = vyplneno(textIn_Lang, switchLang);
let textIn_JobNum = compNameSplit[2 + switchBrand + switchLang];
let textIn_Campaign = compNameSplit[3 + switchBrand + switchLang];
let textIn_Title = compNameSplit[4 + switchBrand + switchLang];
let text_Title = vyplneno(textIn_Title, switchTitle);

// txtOut
`${textIn_Client.replace(regex, replacement)}
${text_Brand.replace(regex, replacement)}
${textIn_Campaign.replace(regex, replacement)}
${text_Title.replace(regex, replacement)}
${textIn_Country}										${text_Lang}`;