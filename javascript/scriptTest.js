/*
function eventHandler() {
yes.addEventListener("click",failureIs);
no.addEventListener("click",failureIs);	
};
*/

const start = document.getElementById("start");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const restart = document.getElementById("restart");
start.addEventListener("click",startApp);


let q1 = "Does the fault report indicate shipping damage?";
let q2 = "Does the failure appear to be from mechanical damage (YES) or liquid contamination?(NO)";
let q3 = "Is delta module damaged with traces of debris or dust from flashover?";
let q4 = "Is it a partner module?";
let q5 = "Are there any loose connections/terminations?";
let q6 = "Are there any loose connections on the main DC laminates?";
let q7 = "Is the fault due to a crimp error, lead break or manufacuring fault?";
let q8 = "Evidence of arching on main laminates?";
let q9 = "Evidence of main laminate breakdown or arcing?";
let q10 = "Is there any indication of mechanical damage?";
let q11 = "Is it a partner module?";
let q12 = "Is it a partner module?";
let q13 = "Any DC cap breakdown?";
let q14 = "Is it a partner module?";
let q15 = "Are the sharing resistors open circuit?";
let q16 = "Does the unit pass gate driver and diode checks?";
let q17 = "Is there significant damage to SKiiP modules?";
let q18 = "Is there evidence of DC foils breakdown, or faulty mini laminates?";
let q19 = "Are the DC foils intact on the SKiiP module?";
let q20 = "Does the unit have damage to multiple components?";
let q21 = "Is the unit from a 3.6MW turbine?";
let q22 = "Does the unit power up healthy?";
let q23 = "Does the unit run small motor and fully pass tests?";
let q24 = "Is the fault due to DIB/DIBe?";
let q25 = "Is the unit a partner module?";
let q26 = "Does the fault report indicate a high current fault?";
let q27 = "Does the fault report indicate a sharing fault?";
let q28 = "Is the unit a partner module?";
let q29 = "Has the mini laminate failed?";
let q30 = "Is their evidence of moisture/condensation around foil area?";
let q31 = "Are there multiple DC foils damaged?";
let q32 = "Do ribbon cables pass continuity tests?";
let q33 = "Do all phases show permanent sharing faults?";
let q34 = "Is there any signs of coolant leakage? (excluding bag marking)";
let q35 = "Any evidence of coolant leakage around the duct/heat plate area?";
let q36 = "Is the coolant duct out of latness tolerance after measurement?";
let q37 = "Is there evidence of a coolant leak from an external source, I.E. manifold/hose/reactor?";

 



//NEED TO ADD ENDING FAILURE TO 'YES'
function startApp() {
document.getElementById("start").style.display="none";
document.getElementById("yes").style.display="block";
document.getElementById("no").style.display="block";
question1();
};

function failureIs() {
	document.getElementById("question").innerHTML = "This is your failure";
	return;
};

function startOver() {
	document.getElementById('question').innerHTML = "<p><strong>Delta investigation mode of failure</strong>
	<br>Note:</br>Do not assess module without a fault report</p>"
	document.getElementById("start").style.display="block";
	document.getElementById("yes").style.display="none";
	document.getElementById("no").style.display="none";
};

function question1() {
	document.getElementById('question').innerHTML = q1;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",question2);	
};
//NEED TO CHANGE 'YES' AND 'NO' TO 'MECHANICAL' AND 'LIQUID'
 function question2() {
	document.getElementById('question').innerHTML = q2;
	yes.addEventListener("click",question3);
	no.addEventListener("click",question34);	
}; 
function question3() {
	document.getElementById('question').innerHTML = q3;
	yes.addEventListener("click",question4);
	no.addEventListener("click",question5);	
};
function question4() {
	document.getElementById('question').innerHTML = q4;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question5() {
	document.getElementById('question').innerHTML = q5;
	yes.addEventListener("click",question6);
	no.addEventListener("click",question9);	
};
function question6() {
	document.getElementById('question').innerHTML = q6;
	yes.addEventListener("click",question8);
	no.addEventListener("click",question7);	
};
function question7() {
	document.getElementById('question').innerHTML = q7;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question8() {
	document.getElementById('question').innerHTML = q8;
	yes.addEventListener("click",question11);
	no.addEventListener("click",question7);	
};
function question9() {
	document.getElementById('question').innerHTML = q9;
	yes.addEventListener("click",question13);
	no.addEventListener("click",question10);	
};
function question10() {
	document.getElementById('question').innerHTML = q10;
	yes.addEventListener("click",question21);
	no.addEventListener("click",question15);	
};
function question11() {
	document.getElementById('question').innerHTML = q11;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question12() {
	document.getElementById('question').innerHTML = q12;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question13() {
	document.getElementById('question').innerHTML = q13;
	yes.addEventListener("click",question14);
	no.addEventListener("click",question12);	
};
function question14() {
	document.getElementById('question').innerHTML = q14;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question15() {
	document.getElementById('question').innerHTML = q15; 
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",question16);	
};
function question16() {
	document.getElementById('question').innerHTML = q16;
	yes.addEventListener("click",question22);
	no.addEventListener("click",question17);	
};
function question17() {
	document.getElementById('question').innerHTML = q17;
	yes.addEventListener("click",question18);
	no.addEventListener("click",failureIs);	
};
function question18() {
	document.getElementById('question').innerHTML = q18;
	yes.addEventListener("click",question19);
	no.addEventListener("click",question28);	
};
function question19() {
	document.getElementById('question').innerHTML = q19;
	yes.addEventListener("click",question20);
	no.addEventListener("click",question29);	
};
function question20() {
	document.getElementById('question').innerHTML = q20;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question21() {
	document.getElementById('question').innerHTML = q21;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question22() {
	document.getElementById('question').innerHTML = q22;
	yes.addEventListener("click",question23);
	no.addEventListener("click",question32);	
};
function questio23() {
	document.getElementById('question').innerHTML = q23;
	yes.addEventListener("click",question25);
	no.addEventListener("click",question24);	
};
function question24() {
	document.getElementById('question').innerHTML = q24;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question25() {
	document.getElementById('question').innerHTML = q25;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",question26);	
};
function question26() {
	document.getElementById('question').innerHTML = q26;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",question27);	
};
function question27() {
	document.getElementById('question').innerHTML = q27;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question28() {
	document.getElementById('question').innerHTML = q28;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question29() {
	document.getElementById('question').innerHTML = q29;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",question30);	
};
function question30() {
	document.getElementById('question').innerHTML = q30;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",question31);	
};
function question31() {
	document.getElementById('question').innerHTML = q31;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question32() {
	document.getElementById('question').innerHTML = q32;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",question33);	
};
function question33() {
	document.getElementById('question').innerHTML = q33;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question34() {
	document.getElementById('question').innerHTML = q34;
	yes.addEventListener("click",question35);
	no.addEventListener("click",failureIs);	
};
function question35() {
	document.getElementById('question').innerHTML = q35;
	yes.addEventListener("click",question36);
	no.addEventListener("click",question37);	
};
function question36() {
	document.getElementById('question').innerHTML = q36;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
};
function question37() {
	document.getElementById('question').innerHTML = q37;
	yes.addEventListener("click",failureIs);
	no.addEventListener("click",failureIs);	
}; 

 

/* function noOut() {
	document.getElementById("question").innerHTML = "The answer was no";
}; 
 */

/* function askQuestion() {
	document.getElementById().innerHTML = "";
	yes.addEventListener("click",yesOut);
	no.addEventListener("click", noOut);
}; */


