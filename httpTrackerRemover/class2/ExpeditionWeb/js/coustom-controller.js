$(document).ready(function() {
    $(".box-a").click(function() {
        var dataTarget = $(this).attr('data-target');
		$(".FibErr").hide();
		$("#resultt").hide();
        $('#openmenu').show();
        $('#menu-optn').hide();
        $('.data-list').hide();
        $(dataTarget).show();        
		$("a.w3-button").css('opacity','1');
		$("a[data-target='" + dataTarget + "']").css('opacity','0.5');
			
    });
    $('#openmenu').click(function() {
        $('.data-list').hide();
        $(this).hide();
        $('#menu-optn').show();
        $("#resultt").hide();
        $("#tnff").show();
        $("#mchh").show();
        location.reload();
    });
	
});

/** ============== Matching ================= **/
var correctCards = 0;
var matchLen;
//var qanswer=1;
if (can_mch == 'mch') {
    $(init);
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }	
    return array;
}

function init() {
    // Hide the success message
    $('#successMessage').hide();
    $('#successMessage').css({
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    });
    // Reset the game
    correctCards = 0;

    $('#cardPile').html('');
    $('#cardSlots').html('');

    matchLen = matchArr.data[cc].qanswer.length;
    var keys = new Array;
    var valu = new Array;
    $.each(matchArr.data[cc].qanswer, function(key, val) {
        keys.push(key);
        valu.push(val);
    });

    var numbers = keys;
    var sb = matchArr.data[cc].right;
    var terms = shuffle(sb);
	
    var bal = matchArr.data[cc].qanswer;
    var aanswer = bal;
    for (var i = 0; i < matchLen; i++) {
        $('<div>' + terms[i] + '</div>').data('number', terms[i]).attr('id', 'card' + numbers[i]).appendTo('#cardPile').draggable({
            stack: '#cardPile div',
            cursor: 'move',
            revert: true,
            revertDuration: 0
        });
    }

    var words = matchArr.data[cc].left;
    for (var i = 0; i < matchLen; i++) {
        $('<div>' + words[i] + '</div>').data('number', aanswer[i]).appendTo('#cardSlots').droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
    }
}

function handleCardDrop(event, ui) {
        var slotNumber = $(this).data('number');
        var cardNumber = ui.draggable.data('number');
        if (slotNumber == cardNumber) {
            ui.draggable.addClass('correct');
            ui.draggable.draggable('disable');
            $(this).droppable('disable');
            ui.draggable.position({
                of: $(this),
                my: 'left top',
                at: 'left top'
            });
            ui.draggable.draggable('option', 'revert', true);
            var color = $("#" + ui.draggable[0].id).css("background-color");
            $(this).css('background-color', color);
            correctCards++;
        }

        if (correctCards == matchLen) {
            //$("#score").text("Your Total Score is : " + correctCards);
			$("a.w3-button").css('pointer-events','none');
			setTimeout(function(){
			$("#score").text("Congratulations! You've done.");
            $("#mchh").hide();
            $("#mch").hide();
            Cat_index = ArrCat.indexOf('mch');
			var tN = (Cat_index+1);		
			if(ArrCat.length>tN){
					//$("#"+ArrCat[tN]).show();
					document.cookie = "lastactive=mch";
					document.cookie = "nextactive="+ArrCat[tN];				
					$("#resultt").show();	
				}else{
					document.cookie = "lastactive=mch";
					document.cookie = "nextactive=''";
				    $('#nextExc').hide();
					$("#resultt").show();		
			}
			},4000);
        }
    }
/** ============== MCQ ================= **/
$(document).ready(function() {
    $("#nextbtn").hide();
    $("#btnvalid").hide();
    $("#back").hide();
    var i = 0;
    var b;
    var total = []
    var finalResult = 0;
    var result = 0;
    var selected;

    function changeQuestion() {
        var j = 0;
        $("#titleQuestion").html(allQuestions[i].question.toString());
        $("#titleQuestion").hide().fadeIn('slow');
        //changes question title
        $("#radios").empty().hide();
      
        for (answers in allQuestions[i].answer) { //loops through array and dynamically adds answer values to radio buttons
            var radioBtn = $('<div id="radios" class="inputGroup bounceInLeft animated"><input type="radio" id="secondbtn' + allQuestions[i].answer[j] + '" class="radios option1" name="btnAnswers" value="' + allQuestions[i].answer[j] + '" /><label for ="secondbtn' + allQuestions[i].answer[j] + '">' +
                allQuestions[i].answer[j] + '</label></div>');
            radioBtn.appendTo('#radios');
            j++
        }
        $('#radios').fadeIn("slow");
        if (allQuestions[i].selected != "") {
            
            $('input[value = "' + allQuestions[i].selected + '"]').prop('checked', true);
            
            if(allQuestions[i].selected!=allQuestions[i].correctAnswer[0]){
           $('input[value = "' + allQuestions[i].selected + '"]').parent().addClass('wrongAns');
        }
        };
        return true;
    };
     
    function backQuestion() {
        var j = 0;
        $("#titleQuestion").html(allQuestions[i - 1].question.toString());
        $("#titleQuestion").hide().fadeIn('slow');
        //changes question title
        $("#radios").empty();
        $("#radios").hide();
        for (answers in allQuestions[i - 1].answer) { //loops through array and dynamically adds answer values to radio buttons
            var radioBtn = $('<div id="radios" class="inputGroup mcqq"><input type="radio" id="secondbtn' + allQuestions[i - 1].answer[j] + '"  class="radios option1" ' + allQuestions[i - 1].answer[j] + '" name="btnAnswers" value="' + allQuestions[i - 1].answer[j] + '" /><label for ="secondbtn' + allQuestions[i - 1].answer[j] + '">' +
                allQuestions[i - 1].answer[j] + '</label></div>');
            radioBtn.appendTo('#radios');
            j++
        }
        i--;
        $('#radios').fadeIn("slow");
        if (i == 0) {
            $("#back").hide();
        }
        return true;
    };
    //End backQuestion Options
    $(document).on('change', 'input[name = btnAnswers]', function() {
        var checked = $("input[name = btnAnswers]:checked").val();
        allQuestions[i].selected = checked;
        selected = allQuestions[i].selected;
		
		if(i==allQuestions.length - 1){
				$("#nextbtn").hide();
				$("#back").hide();
				$("a.w3-button").css('pointer-events','none');
				setTimeout(function(){					
                    $("#mcq").hide();
					Cat_index = ArrCat.indexOf('mcq');
					var tN = (Cat_index+1);		
					if(ArrCat.length>tN){
							document.cookie = "lastactive=mcq";
							document.cookie = "nextactive="+ArrCat[tN];	
							console.log(getCookie("nextactive"));
							$("#resultt").show();
						}else{
							document.cookie = "lastactive=mcq";
							document.cookie = "nextactive=''";
							$('#nextExc').hide();
							$("#resultt").show();	
					}				
				},4000);
			}
		
        if (i <= allQuestions.length - 1) {
            if (this.value == allQuestions[i].correctAnswer[0]) {
                $(this).parent().addClass('rightAns');
                b = allQuestions[i].correctAnswer[1];
                total[i] = b;
            } else {
                $(this).parent().addClass('wrongAns');
                total[i] = 0;
            }
            result = total.reduce(function(a, b) {
                return a + b;
            })
        }
    });
    $("#begin").ready(function() {
        result = 0;
        $("#nextbtn").show();
        $("#begin").hide();
        for (var h = 0; h <= allQuestions.length - 1; h++) {
            allQuestions[h].selected = "";
        }
        if (can_mcq == 'mcq') {
            changeQuestion();
        }
    });
    $("#nextbtn").click(function() {        
        if ($("input[name = btnAnswers]:checked").length > 0) {
            i++;
            if (i <= allQuestions.length - 1) {
                if (can_mcq == 'mcq') {
                    changeQuestion();
                }
            } 
        } else {
            $("#btnvalid").fadeIn(800).fadeOut(1100);
        }
		if (i != 0) {
            $("#back").show();
        }
    });
    $("#back").click(function() {
        backQuestion();
        $('input[value = "' + allQuestions[i].selected + '"]').prop('checked', true);

        
        if(allQuestions[i].selected!=allQuestions[i].correctAnswer[0]){
           $('input[value = "' + allQuestions[i].selected + '"]').parent().addClass('wrongAns');
        } 
        // i--;
    });
    //jquery close bracket  
});

/** ============== True & False ================= **/
$(document).ready(function() {
    $("#nextbtn1").hide();
    $("#btnvalid1").hide();
    $("#back1").hide();
    var i = 0;
    var b;
    var total = []
    var finalResult = 0;
    var result = 0;
    var selected;
    $("#begin1").ready(function() {
        result = 0;
        $("#nextbtn1").show();
        $("#begin1").hide();
        for (var h = 0; h <= allQuestions1.length - 1; h++) {
            allQuestions1[h].selected = "";
        }
        if (can_tnf == 'tnf') {
            changeQuestion1();
        }
    });

    function changeQuestion1() {
        var j = 0;
        $("#titleQuestion1").html(allQuestions1[i].question.toString());
        $("#titleQuestion1").hide().fadeIn('slow');
        //changes question title
        $("#radios1").empty().hide();
        for (answers in allQuestions1[i].answer) { //loops through array and dynamically adds answer values to radio buttons
            var radioBtn = $('<div id="radios1" class="inputGroup"><input type="radio" id="secondbtn1' + allQuestions1[i].answer[j] + '" class="radios option1" name="btnAnswers1" value="' + allQuestions1[i].answer[j] + '" /><label for ="secondbtn1' + allQuestions1[i].answer[j] + '">' +
                allQuestions1[i].answer[j] + '</label></div>');
            radioBtn.appendTo('#radios1');
            j++
        }
        $('#radios1').fadeIn("slow");
        if (allQuestions1[i].selected != "") {
            $('input[value = "' + allQuestions1[i].selected + '"]').prop('checked', true);
            if(allQuestions1[i].selected!=allQuestions1[i].correctAnswer[0]){
           $('input[value = "' + allQuestions1[i].selected + '"]').parent().addClass('wrongAns');
        }
        };
        return true;
    };

    function backQuestion1() {
        var j = 0;
        $("#titleQuestion1").html(allQuestions1[i - 1].question.toString());
        $("#titleQuestion1").hide().fadeIn('slow');
        //changes question title
        $("#radios1").empty();
        $("#radios1").hide();
        for (answers in allQuestions1[i - 1].answer) { //loops through array and dynamically adds answer values to radio buttons
            var radioBtn = $('<div id="radios1" class="inputGroup tnfff"><input type="radio" id="secondbtn1' + allQuestions1[i - 1].answer[j] + '"  class="radios option1" ' + allQuestions1[i - 1].answer[j] + '" name="btnAnswers1" value="' + allQuestions1[i - 1].answer[j] + '" /><label for ="secondbtn1' + allQuestions1[i - 1].answer[j] + '">' +
                allQuestions1[i - 1].answer[j] + '</label></div>');
            radioBtn.appendTo('#radios1');
            j++
        }
        i--;
        $('#radios1').fadeIn("slow");
        if (i == 0) {
            $("#back1").hide();
        }
        return true;
    };
    //End backQuestion Options
    $(document).on('change', 'input[name = btnAnswers1]', function() {
        //  console.log(this);
        var checked = $("input[name = btnAnswers1]:checked").val();
        allQuestions1[i].selected = checked;
        selected = allQuestions1[i].selected;
        if (i <= allQuestions1.length - 1) {
			
			//console.log(i+' = '+(allQuestions1.length - 1));
			
			if(i==allQuestions1.length - 1){
				$("#nextbtn1").hide();
				$("#back1").hide();
				$("a.w3-button").css('pointer-events','none');
				setTimeout(function(){					
					    $("#tnf").hide();
						Cat_index = ArrCat.indexOf('tnf');
						var tN = (Cat_index+1);		
						if(ArrCat.length>tN){
								//$("#"+ArrCat[tN]).show();
								document.cookie = "nextactive="+ArrCat[tN];
								document.cookie = "lastactive=tnf";
								$("#resultt").show();
							}else{
								document.cookie = "lastactive=tnf";
								document.cookie = "nextactive=''";
								$("#resultt").show();
								$('#nextExc').hide();
						}					
				},4000);
			}
			
            if (this.value == allQuestions1[i].correctAnswer[0]) {
                $(this).parent().addClass('rightAns');
                b = allQuestions1[i].correctAnswer[1];
                total[i] = b;
            } else {
                $(this).parent().addClass('wrongAns');
                total[i] = 0;
            }
            result = total.reduce(function(a, b) {
                return a + b;
            })
        }
    });
    $("#nextbtn1").click(function() {
	      
        if ($("input[name = btnAnswers1]:checked").length > 0) {
            i++;
            if (i <= allQuestions1.length - 1) {
                changeQuestion1();
            } else {
                $("#radios1").empty();
                //$("#score").text("Your Total Score is : " + result);
				$("a.w3-button").css('pointer-events','none');
				$("#score").text("Congratulations! You've done.");
                $("#tnff").hide();
                $("#tnf").hide();
                Cat_index = ArrCat.indexOf('tnf');
				var tN = (Cat_index+1);
				
				if(ArrCat.length>tN){
						//$("#"+ArrCat[tN]).show();	
						document.cookie = "lastactive=tnf";
						document.cookie = "nextactive="+ArrCat[tN];					
						$("#resultt").show();
					}else{
						document.cookie = "lastactive=tnf";
						document.cookie = "nextactive=''";
						$('#nextExc').hide();
						$("#resultt").show();	
				}
				
                i = 0;
                j = 0;
                total = [];
                result = 0;
                $("#nextbtn1").hide();
                $("#back1").hide();
                //$("#begin1").show();
            }			
        } else {
            $("#btnvalid1").fadeIn(800).fadeOut(1100);
        }
		if (i !=0) {
            $("#back1").show();
        }
    });
    $("#back1").click(function() {
        backQuestion1();
        $('input[value = "' + allQuestions1[i].selected + '"]').prop('checked', true);
        if(allQuestions1[i].selected!=allQuestions1[i].correctAnswer[0]){
           $('input[value = "' + allQuestions1[i].selected + '"]').parent().addClass('wrongAns');
        }
        // i--;
    });
    //jquery close bracket  
});
$('.next').click(function() {
  //  $(this).parent().hide().next().show(); //hide parent and show next
    var nextQ = $(this).attr('id');	
	if($("#div"+nextQ).text() == $("#ans_"+nextQ).val()){
		$(".FibErr").hide();	
		$(this).parent().hide().next().show(); 
	}else{ 	   
		$(".FibErr").show().fadeIn(800).fadeOut(1100);		
		//return false; 
	} 
	
});
$('.back').click(function() {
    $(this).parent().hide().prev().show(); //hide parent and show previous
});


/** ============== Fill in the Blank ================= **/
var cnt = 1;
var cntt = 0;
var cnttt = 0;
var rightAnswer = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
        ev.preventDefault();
        //console.log(fibL);
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        $("#" + ev.target.id).css('padding', '0 5px');
        var dropNum = ev.target.id.replace('div', '');
        var dragNum = data.replace('drag', '');
        var dragVal = $("#" + ev.target.id).text();
        $("#d_" + dragNum).html(dragVal);
		//$("#d_"+dragNum ).attr("style","background-color:#51a640 ! important" );
		
        $("#d_"+dragNum ).css('padding','10px');
        $("#d_"+dragNum ).addClass('rightcross');
        $("#" + data).removeAttr('ondragstart draggable');
        $("#" + ev.target.id).removeAttr('ondrop ondragover');
        var ansVal = $("#ans_" + dropNum).val();
        if (dragVal == ansVal) {
            rightAnswer = cnt;
            cnt++;
            cnttt++;
        } else {
            cnttt++;
        }
        if (cnttt == fibL2) {
			$('.custmz2').css({'opacity':'0', 'margin-left':'500px'});
            //$("#score").text("Your Total Score is : " + rightAnswer);			
            //$("#fillBox").hide();
			$("a.w3-button").css('pointer-events','none');
			setTimeout(function(){
            $("#fib2").hide();
            Cat_index = ArrCat.indexOf('fib2');
			var tN = (Cat_index+1);			
			if(ArrCat.length>tN){
					//$("#"+ArrCat[tN]).show();	
					document.cookie = "lastactive=fib2";
					document.cookie = "nextactive="+ArrCat[tN];
					$("#resultt").show();	
				}else{
					document.cookie = "lastactive=fib2";
					document.cookie = "nextactive=''";					
				    $('#nextExc').hide();
					$("#resultt").show();	
			}
			
			},4000);
        }
    }
	
	//sleft click tru function
	
	function dragtrue(e, d)
	{
		//alert(e);
		if ($('#div'+d).html()=='') {
            cntt++;
        } 
		var ans = $('#drag'+e).text();
		$('#div'+d).html(ans);
		$('#div'+d).css('padding','0 10px')
		$('#drag'+e).addClass('rightcross');
		var ansVal = $("#ans_" + d).val();
        
        if (cntt == fibL) {
			$('.custmz2').css({'opacity':'0', 'margin-left':'500px'});
			$("a.w3-button").css('pointer-events','none');
			setTimeout(function(){
            //$("#score").text("Your Total Score is : " + rightAnswer);
			$("#score").text("Congratulations! You've done.");
            $("#fillBox").hide();
            $("#fib").hide();
            Cat_index = ArrCat.indexOf('fib');
			var tN = (Cat_index+1);		
			if(ArrCat.length>tN){
					//$("#"+ArrCat[tN]).show();	
					document.cookie = "lastactive=fib";
					document.cookie = "nextactive="+ArrCat[tN];
					$("#resultt").show();	
				}else{
					document.cookie = "lastactive=fib";
					document.cookie = "nextactive=''";					
				    $('#nextExc').hide();
					$("#resultt").show();	
			}
		},4000);
        }
		
	}
	
    /** ============== Cross Word ================= **/
$(document).ready(function() {
    var answerN;
    var valueN;
    var cross_L;
    var pos;
    var arr = jQuery.parseJSON(keyVal);
    $("#di").on("click", "a", function(event) {
        $('#check-in').val('');
        answerN = $(this).attr('id');
        cross_L = $('#di a').length;
        valueN = $(this).attr('value').toUpperCase();
        ansln = $(this).attr('in');
        pos = $(this).attr('pos');
        $('#no').text(answerN);
        $('#btnn').show();
        $('td').css("background-color", "rgb(100,149,237)");
        var entryArray = Array.prototype.slice.call(valueN)
        if (ansln == 1) {
            var d = 0;
            for (var j = 0; j < entryArray.length; j++) {
                var left = pos.split('-')[0];
                var right = parseInt(pos.split('-')[1]) + parseInt(d);
                var com = left + '-' + right;
                if (arr[com].toUpperCase() == entryArray[j]) {
                    $('#' + com + '').css("background-color", "pink");

                }
                ++d;
            }
        }
        if (ansln == 0) {
            var m = 0;
            for (var j = 0; j < entryArray.length; j++) {
                var left = parseInt(pos.split('-')[0]) + parseInt(m);
                var right = pos.split('-')[1];
                var com = left + '-' + right;
                if (arr[com].toUpperCase() == entryArray[j]) {
                    $('#' + com + '').css("background-color", "pink");

                }
                ++m;
            }
        }


    });
    var ctotal = 0;
    var crct_count = 0;
    $(".sm").click(function() {
        var count = 1;

        $('.answer1').prop('value', valueN);
        if ($(this).find('span').length == 0) {
            var tt = $('.answer1').val();
            $('.msg').hide();
            $(".popup-overlay, .popup-content").removeClass("active");
        } else {
            var tt = $('.answer').val().toUpperCase();
        }
        var ttlen = tt.length;
        var entryArray = Array.prototype.slice.call(valueN)
        if (tt == '') {
            $("#cross_error").text('Please type the answer in box').fadeIn(800).fadeOut(1000);
            return false;
        }
        if (tt != valueN) {
            $('.msg').show();
            return false;
        }


        if (tt == valueN) {
            crct_count++;

        }

        if (ansln == 1) {
            var d = 0;
            ++ctotal;
            for (var j = 0; j < entryArray.length; j++) {
                var left = pos.split('-')[0];
                var right = parseInt(pos.split('-')[1]) + parseInt(d);
                var com = left + '-' + right;
                if (arr[com].toUpperCase() == entryArray[j]) {
                    $('#' + com + '').css("color", "red");
                    $('#' + com + '').text(entryArray[j]);
                }
                ++d;
            }
        }
        if (ansln == 0) {
            ++ctotal;
            var m = 0;
            for (var j = 0; j < entryArray.length; j++) {
                var left = parseInt(pos.split('-')[0]) + parseInt(m);
                var right = pos.split('-')[1];
                var com = left + '-' + right;
                if (arr[com].toUpperCase() == entryArray[j]) {
                    $('#' + com + '').css("color", "red");
                    $('#' + com + '').text(entryArray[j]);
                }
                ++m;
            }
        }
	
        $('#' + answerN).attr('style', "pointer-events: none; cursor: default; color:white ; font-size: 20px; text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;");

        if (cross_L == ctotal) {
            $("#score").text("Congratulations! You've done.");
            $(".cross-main").hide();
            $("#crossword").hide();
            Cat_index = ArrCat.indexOf('crossword');
			var tN = (Cat_index+1);		
			if(ArrCat.length>tN){
					//$("#"+ArrCat[tN]).show();	
					document.cookie = "lastactive=crossword";
					document.cookie = "nextactive="+ArrCat[tN];
				    $("#resultt").show();
				}else{
					document.cookie = "lastactive=crossword";				
					document.cookie = "nextactive=''";
					$("#resultt").show();
					$('#nextExc').hide();	
			}
        }

    });
});

/** ============== typing ================= **/
$(document).ready(function() {
    var typL = tyL;
    $('#typbtn').click(function() {
        var type_all = 0;
        var type_crct = 0;
        for (var i = 1; i <= typL; i++) {
            var type_val = $('#type_' + i).val().toLowerCase();
            var type_ans_val = $('#type_ans_' + i).val().toLowerCase();
            if (type_val == '') {
                $("#type_error").text("Please fill the value").fadeIn(800).fadeOut(1100);
                $(".typing").hide();
                $("#type_div_" + i).show();
                break;
            }
            if (type_val == type_ans_val) {
                type_crct++;
            }
            if (type_val != '') {
                type_all++;
            }

        }

        if (type_all == typL) {
			$("a.w3-button").css('pointer-events','none');
            //$("#score").text("Your Total Score is : " + type_crct);
			$("#score").text("Congratulations! You've done.");
            $("#typing-box").hide();
            $(".typing").hide();
            $("#typing").hide();
            $("#type_error").hide();
            Cat_index = ArrCat.indexOf('typing');
			var tN = (Cat_index+1);		
			if(ArrCat.length>tN){
					//$("#"+ArrCat[tN]).show();	
					document.cookie = "lastactive=typing";
				    $("#resultt").show();
				}else{
					document.cookie = "lastactive=typing";				
					$("#resultt").show();	
			}
        }

    });
});