function agac_olustur(yaprak_dugumler){
    
	var yaprak_dugum_sayisi = yaprak_dugumler.length;
	
	var kuyruk = new PriorityQueue({ comparator: function(a, b) { return a.frequency - b.frequency; }});
	
	for(i = 0; i < yaprak_dugum_sayisi; i++){
		kuyruk.queue(yaprak_dugumler[i]);
	}

	var id_sayaci = 1;

	for(i = 0; i < yaprak_dugum_sayisi-1; i++){
		var yeni_dugum = {
			"id": "0",
			"isim": "",
			"cocuk": [kuyruk.dequeue(), kuyruk.dequeue()],
			"frekans": null,
		};

		yeni_dugum.cocuk[0].id = id_sayaci++;
		yeni_dugum.cocuk[1].id = id_sayaci++;
		
		yeni_dugum.frekans = yeni_dugum.cocuk[0].frekans + yeni_dugum.cocuk[1].frekans;
		yeni_dugum.isim = yeni_dugum.frekans;
		kuyruk.queue(yeni_dugum);
		
	}
	
	return kuyruk.dequeue();
}