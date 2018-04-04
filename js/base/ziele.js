
	//console.log('>> Konstik,... ich komme aus der ziele.js <<')
$(function(){
	// GET api/lebenslauf.json
	var restAPI = 'http://127.0.0.1:1337/lebenslauf/webpage/api/ziel.json'
	$.ajax({
		url: restAPI,
		type: 'GET',
		async: false,
		dataType: 'json',
		success: function(data){
			var out = '';
			var ziele = '';
			

			// Ziele
			
		
			ziele += '<p> Ajax:' + data.ziele.ajax + '</p>';
			ziele += '<p> React.js:' + data.ziele.react + '</p>';
			ziele += '<p> Angular.js:' + data.ziele.angular + '</p>';
			ziele += '<p> Node.js' + data.ziele.node + '</p>';
			ziele += '<p> Git:' + data.ziele.git + '</p>';
			ziele += '<p> Chell:' + data.ziele.chell + '</p>';
		 		

			$('#kak').html(ziele);
			
			//Beschreibung
			out +='<p>'+data.besch.text+ '</p>'
			$('#out').html(out);
		}
	});

});
