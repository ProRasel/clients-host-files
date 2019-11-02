jQuery(document).ready(function (){
	var qs=1;
	//Question 2
	var q2="When and how the weight was gained is a critical factor when determining how to lose it:";
	var q2b="Which “weight-gain” story rings most true?";
	var q2a1="I have always been a little heavy and I have battled with weight loss my entire life.";
	var q2a2="I haven’t had any issues controlling my weight until recently.";
	var q2a3="I noticed more weight-gain after starting either birth control and/or depression/anxiety medication.";
	var q2a4="My ability to lose weight changed after giving birth to my first child.";
	//Question 3
	var q3="Your general mood and how you feel on a daily basis indicates how well your 3 Key Weight Loss Hormones are performing for you:";
	var q3b="Which answer best describes your general mood and energy on a daily basis:";
	var q3a1="I’m generally happy and have consistent energy throughout the day.";
	var q3a2="In the last 5-10 years I am more tired than I use to be.";
	var q3a3="I’m OK, but I just feel kind of “off” and not like myself.";
	var q3a4="I have good days (happy and energetic) mixed with bad days (fatigue, mild depression)";
	var q3a5="I use prescriptions and/or over-the-counter supplements to help with mood and energy.";
	//Question 4
	var q4="The way you lose weight “the best” or most efficiently will help us design your custom instructions.";
	var q4b="In the past, which weight-loss method has been most effective for you?";
	var q4a1="Low-Carb diets help me lose weight fastest.";
	var q4a2="A prescription pill or over-the-counter supplement worked really well.";
	var q4a3="Calorie Counting or Point Counting have helped the most.";
	var q4a4="Following an exercise or cardio program is the best way for me.";
	//Question 5
	var q5="The most common challenge you face during weight-loss will help us build out your specific recommendations:";
	var q5b="What is the biggest challenge you face while trying to lose weight?";
	var q5a1="I usually lose weight easily at the start, but then hit a plateau almost every time.";
	var q5a2="I experience intense cravings and/or mood-swings while losing weight.";
	var q5a3="When dieting, I generally feel fatigued and sometimes experience headaches and/or poor sleep.";
	var q5a4="I lose weight very slowly even when dieting or starting a new exercise program.";
	//Question 6
	var q6="As women, we are proven to have a 72-85% better chance of experiencing long-term weight loss if we trust or can identify with our source.";
	var q6b="Which statement best describes your preferred source of information and guidance for weight loss?";
	var q6a1="I believe that doctors should be the authority for nutrition and exercise and that certain medications are great for long-term weight loss.";
	var q6a2="The mainstream media (Bloggers, YouTube Gurus, TV Doctors etc.) seem to have the most up-to-date and useful information about weight loss.";
	var q6a3="I would prefer to take advice from a trusted authority who specializes in female-specific, permanent weight-loss and longevity.";
	var q6a4="Trying a little bit of everything from multiple sources is the most effective and safest way to lose weight.";
	var q6a5="I would prefer to take instruction from anyone with an extensive track-record of success using the most up to date methods.";
	//Question 7
	var q7="Depending on your age, there are certain nutrition and exercise principles that women must avoid. For example, low-carb and low-calorie diets are great for 18-25 year-old women, but can create long-term health consequences when used in our 30’s and 40’s.";
	var q7b="What age range are you:";
	var q7a1="18-29 years old";
	var q7a2="30-40 years old";
	var q7a3="41-59 years old";
	var q7a4="60+";
	jQuery(".surveyRadioOption").click(function (){
		ans=jQuery(this).attr("data-answer-id");
		qs++;
		switch(qs){
			case 1:case 2:totalans=5;
				break;
				case 3:totalans=4;
					jQuery("#qprogbar").removeClass('progressbar_w_33');
					jQuery("#qprogbar").addClass('progressbar_w_50');
				break;
				case 4:totalans=4;
					jQuery("#qprogbar").removeClass('progressbar_w_50');
					jQuery("#qprogbar").addClass('progressbar_w_75');
				break;
				case 5:totalans=4;
					jQuery("#qprogbar").removeClass('progressbar_w_75');
					jQuery("#qprogbar").addClass('progressbar_w_85');
				break;
				case 6:totalans=5;
					jQuery("#qprogbar").removeClass('progressbar_w_85');
					jQuery("#qprogbar").addClass('progressbar_w_90');
				break;
				case 7:totalans=4;
					jQuery("#qprogbar").removeClass('progressbar_w_90');
					jQuery("#qprogbar").addClass('progressbar_w_100');
				break;
				default:totalans=4;
				break;
			}
			jQuery("#qans"+ans).parent().find("input").prop('checked',true);
			//set progressbar
			jQuery(".surveyRadioOption").each(function (){
				jQuery(this).find("input").prop('checked',false);
			});
			if(qs==8){
				jQuery(".modalBackdropWrapper").attr("style","background-color: rgba(0, 0, 0, 0.4); height: 100%; opacity: 1; top: 0px; display: block;");
				jQuery(".modalBackdropWrapper").show();
				jQuery(".containerModal").attr("style","margin-top: 100px; padding-top: 0px; padding-bottom: 10px; outline: none; background-color: rgb(255, 255, 255); position: absolute; opacity: 1; top: 0px; display: block;");
				jQuery(".modalBackdropWrapper").show();
				jQuery("#qans"+ans).parent().find("input").prop('checked',true);
				qs--;
			}
			else{
				jQuery(".qprog").show();
				jQuery(".qrem").hide();
				jQuery(".qnum").html(qs);
				jQuery("#qmark").html(eval("q"+qs));
				jQuery("#qmark2").html(eval("q"+qs+"b"));
				jQuery("#qans1").html(eval("q"+qs+"a1"));
				jQuery("#qans2").html(eval("q"+qs+"a2"));
				jQuery("#qans3").html(eval("q"+qs+"a3"));
				jQuery("#qans4").html(eval("q"+qs+"a4"));
				if(totalans==5){
					jQuery("#qans5b").show();
				}
				else{
					jQuery("#qans5b").hide();
				}
			}
		});
	});
	jQuery(".modalBackdropWrapper").click(function (){
		jQuery(".modalBackdropWrapper").attr("style","background-color: rgba(0, 0, 0, 0.4); height: 100%; opacity: 1; top: 0px; ");
		jQuery(".modalBackdropWrapper").hide();
		jQuery(".containerModal").attr("style","margin-top: 100px; padding-top: 0px; padding-bottom: 10px; outline: none; background-color: rgb(255, 255, 255); position: absolute; opacity: 1; top: 0px;");
		jQuery(".containerModal ").hide();
	});