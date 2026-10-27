// text set 01: slate 261027
// camelCase splitting update:
// AYSBarista -> AYS Barista

let switchBrand = thisComp.layer("controls").effect("brand_switch")("Checkbox");
let switchLang = thisComp.layer("controls").effect("language_Switch")("Checkbox");
let switchTitle = thisComp.layer("controls").effect("title_switch")("Checkbox");

let compName = thisComp.layer("compName").text.sourceText;
let compNameSplit = compName.split(/[\s_-]+/);	//splitting (space, _, -)
// camelCase splitting

// Instead of a direct replacement, use this two-step approach
function processText(input) {
    if (!input) return "";
    
    // First, handle transitions between character types by placing markers
    let marked = input;

    // splits an uppercase abbreviation from the capitalized word that follows
    marked = marked.replace(/([A-Z]+)([A-Z][a-z])/g, '$1|$2');
    // Handle lowercase to uppercase transitions (camelCase)
    marked = marked.replace(/([a-z])([A-Z])/g, '$1|$2');
    
    // Handle digit to letter transitions
    marked = marked.replace(/([0-9])([a-zA-Z])/g, '$1|$2');
    
    // Handle letter to digit transitions
    marked = marked.replace(/([a-zA-Z])([0-9])/g, '$1|$2');
    
    // Finally, replace all markers with spaces
    return marked.replace(/\|/g, ' ');
}

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
`${processText(textIn_Client)}
${processText(text_Brand)}
${processText(textIn_Campaign)}
${processText(text_Title)}
${textIn_Country}										${text_Lang}`;