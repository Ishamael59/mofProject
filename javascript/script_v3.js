 
 //This section lists all possible questions and faults.
 let q1 = "Does the fault report indicate shipping damage?";
 let q2 = "Does the failure appear to be from mechanical damage or liquid contamination?";
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
 let shp1 = "Shipping damage or manual handling damage to unit: Failure code is: SHP1";
 let cnsq ="Failure code is: CNSQ";
 let elf1 ="Debris have contaminated the LCD leading to flashover: Failure code is: ELF1";
 let site ="Failure code is: SITE";
 let man ="Failure code is: MAN";
 let lam5 ="Failure code is:LAM5";
 let lam4 ="Failure code is: LAM4";
 let leak1 ="Failure code is: LEAK 1";
 let leak3 =" Failure code is: LEAK 3";
 let elf3 ="Failure code is: ELF 3";
 let mech ="Failure code is: MECH";
 let shr ="Failure code is: SHR";
 let dib ="Failure code is: DIB";
 let skiip ="Failure code is: SKIIP";
 let nff_par ="Failure code is: NFF_PAR";
 let nff_high ="Failure code is: NFF_HIGH";
 let nff_sharing ="Failure code is: NFF_SHARING";
 let elf2b ="Failure code is: ELF2B";
 let leak4 ="Failure code is: LEAK 4";
 let ribbon ="Failure code is: RIBBON";
 let hwv2 ="Failure code is: HWV2";
 let snb ="Failure code is: SNB";
 let dc_foil ="Failure code is: DC_FOIL";
 let cnsq_of_skiip ="Failure code is: CNSQ_OF_SKIIP";
 let xov ="Failure code is: XOV";
 let gatedriver ="Failure code is: GATEDRIVER";
 let dcap2 ="Failure code is: DCAP 2";
 let min1 ="Failure code is: MIN 1";
 
//This section creates the buttons for the app and assigns them as a variable to be called in a function.
const $startButton = $('<div id="start" class="button button-start">Start</div>');
$('.buttonspace').append($startButton);
const $yesButton = $('<div class="button button-yes">Yes</div>');
const $noButton = $('<div class="button button-no">No</div>');
const $question = $('.question');
const $failure = $('.failure');
const $resetButton = $('<div class="button button-reset">Reset</div> ');

//This is the function that will display the failure and stop the app.
function failureIs(x){
	$failure.text(x);
	 $('.buttonspace').append($resetButton);
	 $resetButton.on('click',function() {
		 reloadPage();
	 });
	 $yesButton.remove();
	 $noButton.remove();	
};
//This is the function that will allow the user to reload the page to start again.
function reloadPage(){
	location.reload();
};
//The following are functions representing each possible question, each will pass its specific question text into the question function

function question1() {
	$question.text(q1);   					//passes the question into the question function
	$yesButton.click(function(){			// establishes the event listener and tells the script to run the following function
		$yesButton.off();					//turns the event handler off in preperation for the next question, this effecivly removes the pointer
		$noButton.off();
		failureIs(shp1);
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question2();
	});
};
//
function question2() {
	$question.text(q2);
	$yesButton.text("Mechanical");
	$noButton.text("Liquid");
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question3();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question34();
	});
}; 
//
function question3() {
	$question.text(q3);
	$yesButton.text("Yes");
	$noButton.text("No");
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question4();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question5();
	});
}; 
//
function question4() {
	$question.text(q4);
	$yesButton.click(function(){
		failureIs(cnsq);
	});
	$noButton.click(function(){
		failureIs(elf1);
	});
}; 
//
function question5() {
	$question.text(q5);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question6();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question9();
	});
}; 
//
function question6() {
	$question.text(q6);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question8();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question7();
	});
}; 
//
function question7() {
	$question.text(q7);
	$yesButton.click(function(){
		failureIs(man);
	});
	$noButton.click(function(){
		failureIs(site);
	});
}; 
//
function question8() {
	$question.text(q8);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question11();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question7();
	});
}; 
//
function question9() {
	$question.text(q9);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question13();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question10();
	});
}; 
//
function question10() {
	$question.text(q10);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question21();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question15();
	});
}; 
//
function question11() {
	$question.text(q11);
	$yesButton.click(function(){
		failureIs(cnsq);
	});
	$noButton.click(function(){
		failureIs(lam5);
	});
}; 
//
function question12() {
	$question.text(q12);
	$yesButton.click(function(){
		failureIs(cnsq);
	});
	$noButton.click(function(){
		failureIs(lam4);
	});
}; 
//
function question13() {
	$question.text(q13);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question14();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question12();
	});
}; 
//
function question14() {
	$question.text(q14);
	$yesButton.click(function(){
		failureIs(cnsq);
	});
	$noButton.click(function(){
		failureIs(dcap2);
	});
}; 
//
function question15() {
	$question.text(q15);
	$yesButton.click(function(){
		failureIs(shr);
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question16();
	});
}; 
//
function question16() {
	$question.text(q16);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question22();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question17();
	});
}; 
//
function question17() {
	$question.text(q17);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question18();
	});
	$noButton.click(function(){
		failureIs(gatedriver);
	});
}; 
//
function question18() {
	$question.text(q18);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question19();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question28();
	});
};
//
function question19() {
	$question.text(q19);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question20();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question29();
	});
};
//
function question20() {
	$question.text(q20);
	$yesButton.click(function(){
		failureIs(xov);
	});
	$noButton.click(function(){
		failureIs(cnsq_of_skiip);
	});
};
//
function question21() {
	$question.text(q21);
	$yesButton.click(function(){
		failureIs(mech);
	});
	$noButton.click(function(){
		failureIs(site);
	});
};
//
function question22() {
	$question.text(q22);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question23();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question32();
	});
};
//
function question23() {
	$question.text(q23);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question25();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question24();
	});
};
//
function question24() {
	$question.text(q24);
	$yesButton.click(function(){
		failureIs(dib);
	});
	$noButton.click(function(){
		failureIs(skiip);
	});
};
//
function question25() {
	$question.text(q25);
	$yesButton.click(function(){
		failureIs(nff_par);
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question26();
	});
};
//
function question26() {
	$question.text(q26);
	$yesButton.click(function(){
		failureIs(nff_high);
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question27();
	});
};
//
function question27() {
	$question.text(q27);
	$yesButton.click(function(){
		failureIs(nff_sharing);
	});
	$noButton.click(function(){
		failureIs(nff);
	});
};
//
function question28() {
	$question.text(q28);
	$yesButton.click(function(){
		failureIs(cnsq_of_skiip);
	});
	$noButton.click(function(){
		failureIs(skiip);
	});
};
//
function question29() {
	$question.text(q29);
	$yesButton.click(function(){
		failureIs(min1);
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question30();
	});
};
//
function question30() {
	$question.text(q30);
	$yesButton.click(function(){
		failureIs(elf3);
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question31();
	});
};
//
function question31() {
	$question.text(q31);
	$yesButton.click(function(){
		failureIs(dc_foil);
	});
	$noButton.click(function(){
		failureIs(snb);
	});
};
//
function question32() {
	$question.text(q32);
	$yesButton.click(function(){
		failureIs(dib);
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question33();
	});
};
//
function question33() {
	$question.text(q33);
	$yesButton.click(function(){
		failureIs(hwv2);
	});
	$noButton.click(function(){
		failureIs(ribbon);
	});
};
//
function question34() {
	$question.text(q34);
	$yesButton.text("Yes");
	$noButton.text("No");
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question35();
	});
	$noButton.click(function(){
		failureIs(elf3);
	});
};
//
function question35() {
	$question.text(q35);
	$yesButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question36();
	});
	$noButton.click(function(){
		$yesButton.off();
		$noButton.off();
		question37();
	});
};
//
function question36() {
	$question.text(q36);
	$yesButton.click(function(){
		failureIs(leak3);
	});
	$noButton.click(function(){
		failureIs(leak1);
	});
};
//
function question37() {
	$question.text(q37);
	$yesButton.click(function(){
		failureIs(leak4);
	});
	$noButton.click(function(){
		failureIs(elf2b);
	});
};
//



//This function starts the app.
	$startButton.on('click', function(){			//event listner on for the start button
	$startButton.remove();							// removes the start button from the dom 
	$('.buttonspace').append($yesButton);			//adds the yes button to the dom
	$('.buttonspace').append($noButton);			//adds the no button to the dom
	question1();									// asks the first question
});





