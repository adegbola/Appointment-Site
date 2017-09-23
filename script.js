$(document).ready(function(){
	$("#blank").submit(function(event){
		var blanks=["FirstName","LastName","Description","Date","starttime","EndTime"];
		blanks.forEach(function(blank){
			var Input=$("input#"+blank).val();
			$("."+blank).text(Input);


		$("#message").show();
		event.preventDefault(event);
	});

	});
});