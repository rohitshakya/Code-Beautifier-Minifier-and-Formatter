$(function() {

    var v;
	//console.log(dragCorrect);
	
    var arrayValu = $.map(dragCorrect, function(value, index) {
        return [value];
    });
    var crt_ans_list = [];
    var crt_ans_list_1 = [];
    var crt_ans_list_2 = [];
    var crt_ans_list_3 = [];
    for (v = 0; v < arrayValu.length; v++) {

        if (typeof arrayValu[v][0] !== 'undefined' && arrayValu[v][0].length > 0) {
            crt_ans_list = crt_ans_list.concat(arrayValu[v][0]);
        }
        if (typeof arrayValu[v][1] !== 'undefined' && arrayValu[v][1].length > 0) {
            crt_ans_list_1 = crt_ans_list_1.concat(arrayValu[v][1]);
        }
        if (typeof arrayValu[v][2] !== 'undefined' && arrayValu[v][2].length > 0) {
            crt_ans_list_2 = crt_ans_list_2.concat(arrayValu[v][2]);
        }
        if (typeof arrayValu[v][3] !== 'undefined' && arrayValu[v][3].length > 0) {
            crt_ans_list_3 = crt_ans_list_3.concat(arrayValu[v][3]);
        }


    }

    reset_game(); // this initializes the game

    $('#game_container_wa #button_container_wa #reset_button').click(function() {
        reset_game();
    });

    $('#game_container_wa #button_container_wa #check_button').click(function() {
		if($("#draggable_container_wa > div").length==1)
		{
			$("#draggable_container_wa").html('');
		}
        $("#game_container_wa .qanswer").promise().done(function() { 
            score_game(); 
        });
    });

    $('#ok_button_wa').click(function() {
        /*$('#message_wa_area').animate({
            width: '0',
            height: '0',
            padding: '0',
            opacity: 0
        }, 1000).hide(1000);*/
		$('#message_wa_area').hide();
    });

    function reset_game() {
		$('#successMessage_wa_drag').hide();
        // empty the divs
        $('#game_container_wa #draggable_container_wa').html('').removeClass();
        $('#game_container_wa #droppable_container_wa').html('');

        // enable the "check" button
        $('#game_container_wa #check_button').removeAttr('disabled');

        // hide the incomplete message_wa and the game score if they are showing
        $('#message_wa_area').hide();
        $('#game_container_wa #score_container_wa').hide();


        for (var j = 0; j < subcontainers.length; j++) {
            $('<div><strong>' + subcontainers[j].text + '</strong></div>').attr('class', 'subcontainer').attr('id', subcontainers[j].id).appendTo('#game_container_wa #droppable_container_wa').sortable({
                containment: "#game_container_wa",
                cursor: "move",
                items: "div",
                revert: 250,
                connectWith: "#game_container_wa .subcontainer",
                receive: function(event, ui) {
                    if (ui.item.parents('#game_container_wa .subcontainer')) {
                        ui.item.removeClass('dragthis').addClass('dropped');
                    } else {
                        ui.item.removeClass('dropped').addClass('dragthis');
                    }
                }
            }).disableSelection();
        }

        // randomize the order of the answer divs
        answers.sort(function() {
            return (Math.round(Math.random()) - 0.5);
        });


        for (var i = 0; i < answers.length; i++) {
            $('<div>' + answers[i].text + '</div>').attr('id', answers[i].order).attr('class', 'dragthis qanswer').appendTo('#game_container_wa #draggable_container_wa').disableSelection();			
        }
		
		$('<div class="test" style="clear:both"></div>').appendTo('#game_container_wa #draggable_container_wa');
		$('.test').removeClass('ui-sortable-handle');
        $("#game_container_wa #draggable_container_wa").sortable({
            connectWith: '#game_container_wa .subcontainer',
            containment: '#game_container_wa',
            cursor: 'move',
            items: 'div',
            revert: 250
        }).disableSelection();
    }



    function score_game() {

        if (!$("#game_container_wa #draggable_container_wa").is(":empty")) {


            $('#message_wa_area #text').html('The game is not complete!');


            $('#message_wa_area').show().css({
                //top: '24vh',
                //left: $("#game_container_wa #droppable_container_wa").position().left + 100
				//left:'40vh'
            }).animate({
                /*width: 'auto',
                height: '250px',
                padding: '20px',
                opacity: 1*/
            }, 0);


            return;
        }


        $("#game_container_wa .subcontainer").each(function(index) {
            $(this).sortable("option", "disabled", true);
        });


        $('#game_container_wa #button_container_wa #check_button').attr("disabled", "disabled");
		
        $correctcounter = 0;


        $("#game_container_wa .dropped").each(function(index) {
            $thisid = $(this).attr('id'); // shortcuts
            $parentid = $(this).parent().attr('id');
            $(this).css('cursor', 'default'); 

            if (
                ($.inArray($thisid, crt_ans_list) > -1 && $parentid == subcontainers[0].id) ||
                ($.inArray($thisid, crt_ans_list_1) > -1 && $parentid == subcontainers[1].id) ||
                ($.inArray($thisid, crt_ans_list_2) > -1 && $parentid == subcontainers[2].id)
            ) {
                $(this).addClass('correct', 800).removeClass('dropped', 800);
                $correctcounter++; 
            } else {
                $(this).addClass('incorrect', 800).removeClass('dropped', 800); 
            }
        });
		$("#successMessage_wa_drag").show();
		$("a.w3-button").css('pointer-events','none');
        setTimeout(function() {
            //$("#score").text("Your Total Score is : " + $correctcounter);
			$("#score").text("Congratulations! You've done.");
            //$(".matchgame").hide();
            $("#drag").hide();
            Cat_index = ArrCat.indexOf('drag');
			var tN = (Cat_index+1);		
			if(ArrCat.length>tN){
					//$("#"+ArrCat[tN]).show();	
					document.cookie = "lastactive=drag";
					document.cookie = "nextactive="+ArrCat[tN];
					$("#resultt").show();
				}else{
					document.cookie = "lastactive=drag";
					document.cookie = "nextactive=''";				
				    $('#nextExc').hide();
					$("#resultt").show();	
			}
        }, 5000);

		$('#successMessage_wa_drag').animate({
         left: '0px',
         top: '0px',
         width: '50%',
         height: '20%',
         opacity: 1
       });
    }
})