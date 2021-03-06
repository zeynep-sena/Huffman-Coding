function yaprak_dugumleri_olustur(input){
    var yaprak_dugumler = [];
	
	for(i = 0; i < input.length; i++){
		var bulundu = false;
		
        for(j = 0; j < yaprak_dugumler.length && !bulundu; j++){
			if(yaprak_dugumler[j].name == input.charAt(i)){
				yaprak_dugumler[j].frequency++;
				bulundu = true;
			}

		}

		// bir karakter ilk defa çıkıyorsa buraya geliyor
		if(!bulundu){
			yaprak_dugumler[yaprak_dugumler.length] = {
				"id": "0", //agac_olustur.js'de değişiyor
				"name": input.charAt(i),
				"children": [], //agac_olustur.js'de atanıyor
				"frequency": 1,
			};
		}
	}
	for(i = 0; i < yaprak_dugumler.length; i++){ //tüm frekanslar için bir sütun tablo oluşturur.
		frekansTablosuOlustur(yaprak_dugumler[i].name, yaprak_dugumler[i].frequency);
	}
	return yaprak_dugumler;
}
