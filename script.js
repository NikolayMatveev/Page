function start() {
	var p=document.getElementById('zagol').value;
	var p1=document.getElementById('k1');
	var p2=document.getElementById('k2');
	var p3=document.getElementById('k3');
	var p4=document.getElementById('tekst').value;
	var p5=document.getElementById('white');
	var p6=document.getElementById('black');
	var p7=document.getElementById('blue');
	var p8=document.getElementById('bwhite');
	var p9=document.getElementById('bblack');
	var p10=document.getElementById('bblue');

	st1="<body"
	st4="<h2>"
	st5=p;
	st6="</h2><img src="
	st8="/><p>"
	st9=p4;
	st10="</p></body>"

		if (p1.checked)
			{st7="'haski.jpg'"}
		if (p2.checked)
			{st7="'orig.jpg'"} 
		if (p3.checked)
			{st7="'buket.jpg'"}
		if (p5.selected)
			{st2=" style='background-color: white;"}
		if (p6.selected)
			{st2=" style='background-color: black;"}
		if (p7.selected)
			{st2=" style='background-color: blue;"}
		if (p8.checked) 
			{st3="color:white';>"}
		if (p9.checked) 
			{st3="color:black';>"}
		if (p10.checked) 
			{st3="color:blue';>"}
		
	var win=window.open("","","width=600, height=500");
	win.document.open();
	str=st1+st2+st3+st4+st5+st6+st7+st8+st9+st10
	win.document.write(str);
	win.document.close();
}
