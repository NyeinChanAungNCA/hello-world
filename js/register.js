$(document).ready(function() {
	$('#number').keypress(function(event) {
		var length = event.target.value.length;
		if(length < 6) {
			switch(event.which) {
				case 48:
					setTimeout(function() {
					  event.target.value += '၀';
					}, 4);
					event.preventDefault();
				break;
				case 49:
					setTimeout(function() {
					  event.target.value += '၁';
					}, 4);
					event.preventDefault();
				break;
				case 50:
					setTimeout(function() {
					  event.target.value += '၂';
					}, 4);
					event.preventDefault();
				break;
				case 51:
					setTimeout(function() {
					  event.target.value += '၃';
					}, 4);
					event.preventDefault();
				break;
				case 52:
					setTimeout(function() {
					  event.target.value += '၄';
					}, 4);
					event.preventDefault();
				break;
				case 53:
					setTimeout(function() {
					  event.target.value += '၅';
					}, 4);
					event.preventDefault();
				break;
				case 54:
					setTimeout(function() {
					  event.target.value += '၆';
					}, 4);
					event.preventDefault();
				break;
				case 55:
					setTimeout(function() {
					  event.target.value += '၇';
					}, 4);
					event.preventDefault();
				break;
				case 56:
					setTimeout(function() {
					  event.target.value += '၈';
					}, 4);
					event.preventDefault();
				break;
				case 57:
					setTimeout(function() {
					  event.target.value += '၉';
					}, 4);
					event.preventDefault();
				break;
				default :
					// event.preventDefault();
			}
			// end switch
		}
	});
});
