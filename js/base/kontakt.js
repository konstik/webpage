$(function(){
	console.log('>> Konstik,... ich komme aus der kontakt.js <<')

		var restAPI ='http://127.0.0.1:1337/lebenslauf/webpage/api/kontakt.json'

		$.ajax({

			url: restAPI,
			type:'GET',
			dataType:'json',
			async:false,
			success: function(data){
				var kont= '';

			kont += '<p> Tel:' + data.kontakt.tel +'</p>';
			kont += '<p E-Mail>' + data.kontakt.mail + '</p>';
			kont += '<p> Web:' + data.kontakt.web + '</p>';
			kont += '<p>' + data.kontakt.adresse + '</p>';
			kont += '<p Stadt>' + data.kontakt.stadt + '</p>';
		
		//output kontakt.json
			$('#kontakt').html(kont);
					
			}
			


		});

});
//<div  id="kontakt"></ul>