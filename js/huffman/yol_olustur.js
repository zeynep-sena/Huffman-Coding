function yol_olustur(agac, yollar, suanki_dugum, dugumun_yolu){
    dugumun_yolu = typeof dugumun_yolu !== 'undefined' ? dugumun_yolu : "";
	
	
	if(suanki_dugum === undefined)
		return yol_olustur(agac, yollar, agac);

	
	if(suanki_dugum.children.length == 0){
		yollar[suanki_dugum.name] = dugumun_yolu != "" ? dugumun_yolu : "0";
		return;
	}

	
	yol_olustur(agac, yollar, suanki_dugum.children[0], dugumun_yolu+"0");
	yol_olustur(agac, yollar, suanki_dugum.children[1], dugumun_yolu+"1");
}
