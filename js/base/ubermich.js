$(function(){
	console.log('>> Konstik,... ich komme aus der ubermich.js <<')
	console.log('>> hier wird ajax gerufen mit der restAPI von den uebermich.json <<')
	
	var restAPI = 'http://127.0.0.1:1337/lebenslauf/webpage/api/uebermich.json'

	 $.ajax({

	 	url: restAPI,
		type: 'GET',
		async: false,
		dataType: 'json',
		success: function(data){
			var u = data.ueber.text;
			var the = data.these.title;
			var output ='<p>'+ u +'</p>'+ '<p>' + the+ '</p>';
				//console.log(u)
		
		$('#ueber').html(output);
	 	}

	 });



});