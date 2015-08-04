//dictionary api test


(function(){})

var searchWord = {


	//input: $("input").val(),

	pullAndPush: function(){
		var input = $("input").val();
		searchWord.lookUp(input);
	},

	lookUp: function(word){
	$.ajax({
	    url: 'https://montanaflynn-dictionary.p.mashape.com/define?word=' + word, // The URL to the API. You can get this in the API page of the API you intend to consume
	    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
	    data: {}, // Additional parameters here
	    dataType: 'json',
	    success: function(data) {
	    	console.log(data);
	    	searchWord.itWorked(data);
	 	},
	    error: function(err) { alert(err); },
	    beforeSend: function(xhr) {
	    	xhr.setRequestHeader("X-Mashape-Authorization", "LqrTkx80mzmshiorVbpSizgHg1ubp14GUHBjsnvffsxYgqrl6t"); // Enter here your Mashape key
    	}
	})

	},

	itWorked: function(returned){
		console.log("Almost there...");
		console.log(returned.definitions[0].text);
		$("h1").html(returned.definitions[0].text);
		$("h2").html(returned.definitions[1].text);
		$("h3").html(returned.definitions[2].text);

	}


};