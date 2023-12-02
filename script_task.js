const data = {
	"text": [
		{
			"text1": "Web",
			"text2": "Developer"
		},
		{
			"text1": "Tech",
			"text2": "Enthusiast"
		},
		{
			"text1": "UI/UX",
			"text2": "Designer"
		}
	],
};

let i = 0; 
function printOutput() {
    let TextList = data.text;
    let element;
    element = TextList[i];
    let Text1 = document.getElementById("top");
    let Text2 = document.getElementById("bottom");
    var topString = ` <span id="top">${element.text1}</span>`;
    var bottomString = `<span id="bottom">${element.text2}</span>`;
    Text1.innerHTML = topString;
    Text2.innerHTML = bottomString;
    i = (i + 1) % TextList.length;
}
console.log(printOutput);
window.setInterval(printOutput, 2500);

