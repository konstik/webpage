$(function(){
	// GET api/lebenslauf.json
	var restAPI = 'http://127.0.0.1:1337/lebenslauf/webpage/api/lebenslauf.json'
	$.ajax({
		url: restAPI,
		type: 'GET',
		async: false,
		dataType: 'json',
		success: function(data){
			var bio = '',
			jahrgang = '',
			praktika = '',
			kenntnisse = ''
			sprache = '',
			references = '';

			// BIO
			bio += '<li>' + data.bio.name + '</li>';
			bio += '<li>' + data.bio.adresse + '</li>';
			bio += '<li>' + data.bio.plz + '</li>';
			bio += '<li>' + data.bio.mobil + '</li>';
			bio += '<li>' + data.bio.mail + '</li>';
			bio += '<li>' + data.bio.geburt + '</li>';
			bio += '<li>' + data.bio.stadtsangehorigkeit + '</li>';
			// JAHRGANGS
			var _jahrgangs = data.jahrgangs;
			// console.log(_jahrgangs.length)
			for(var i = 0; i < data.jahrgangs.length; i++){
				jahrgang += '<ul>'
				jahrgang += '<li> Firma: ' + _jahrgangs[i].firma + '</li>';
				jahrgang += '<li> Jahr: ' + _jahrgangs[i].jahr_gang + '</li>';
				jahrgang += '<li> Job Title: ' + _jahrgangs[i].title + '</li>';
				jahrgang += '<li> Beschäftstigungart: ' + _jahrgangs[i].beschaeftigungsart + '</li>';
				jahrgang += '</ul>'
				

			} 
			// PRAKTIKA
			var _praktika = data.praktika
			for(var i = 0; i < _praktika.length; i++){
				praktika += '<ul>';
				praktika += '<li> Firma: ' + _praktika[i].firma + '</li>';
				praktika += '<li> Jahr: ' + _praktika[i].jahr + '</li>';
				praktika += '</ul>';
			}

			// KENNTNISSE
			var _kentnisse=data.kenntnisse;
			for(var i=0; i< _kentnisse.length; i++){
				kenntnisse += '<ul>';
				kenntnisse +='<li> Kenntnisse: '+_kentnisse[i].name+'</li>';
				kenntnisse +='<li> Level: '+_kentnisse[i].level+'</li>';
				kenntnisse += '</ul>';
			}

			// SPRACHE
			var _sprache = data.sprache;
			for(var i = 0; i < _sprache.length; i++){
				sprache += '<ul>';
				sprache += '<li> Name: ' + _sprache[i].name + '</li>'; 
				sprache += '</ul>';
			}
			
			// REFERENCES
			var _reference = data.references;

			//OUTPUT
			$('#bio').html(bio)
			$('#jahrgangs').html(jahrgang)
			$('#praktika').html(praktika)
			$('#kenntnisse').html(kenntnisse);
			$('#sprachen').html(sprache);
			
		}
	});

});