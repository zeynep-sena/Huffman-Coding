function yaprak_dugumleri_olustur(input){
    var yaprak_dugumler = [];
	
	for(i = 0; i < input.length; i++){
		var bulundu = false;
		
        for(j = 0; j < yaprak_dugumler.length && !bulundu; j++){
			if(yaprak_dugumler[j].name == input.charAt(i)){
				yaprak_dugumler[j].frekans++;
				bulundu = true;
			}

		}

		// bir karakter ilk defa çıkıyorsa buraya geliyor
		if(!bulundu){
			yaprak_dugumler[yaprak_dugumler.length] = {
				"id": "0", //agac_olustur.js'de değişiyor
				"isim": input.charAt(i),
				"cocuk": [], //agac_olustur.js'de atanıyor
				"frekans": 1,
			};
		}
	}
	
	return yaprak_dugumler;
}