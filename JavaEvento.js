function iniciarMap(){
    var coord = {lat:-34.8741667 ,lng:-57.8939354};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 50,
      center: coord
    });
    var marker = new google.maps.Marker([
      position: coord,
      map: map
    ]);
}
var item = 0;
var left = document.querySelector("fas fa-angle-left");
var right = document.quertySelector("fas fa-angle-right");

left.addEventListener("click",()=>{changeItem(1)});
right.addEventListener("click",()=>{changeItem(2)});

function ChangeItem(n)
	if (n == 1)
		if(item =0) (
			item = 2;)
	else (
		if (item ==2)(
			item =0;)
	for{let i=0; i< document.quertySelectorAll(".item").length; i++}{
		document.quertySelectorAll(".item")[i].style.display = "none";
		}
