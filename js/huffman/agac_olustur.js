function agac_olustur(yaprak_dugumler){
    
	var yaprak_dugum_sayisi = yaprak_dugumler.length;
	
	var queue = new PriorityQueue({ comparator: function(a, b) { return a.frequency - b.frequency; }});
	
	for(i = 0; i < yaprak_dugum_sayisi; i++){
		queue.queue(yaprak_dugumler[i]);
	}

	var id_sayaci = 1;

	for(i = 0; i < yaprak_dugum_sayisi-1; i++){
		var yeni_dugum = {
			"id": "0",
			"name": "",
			"children": [queue.dequeue(), queue.dequeue()],
			"frequency": null,
		};

		yeni_dugum.children[0].id = id_sayaci++;
		yeni_dugum.children[1].id = id_sayaci++;
		
		yeni_dugum.frequency = yeni_dugum.children[0].frequency + yeni_dugum.children[1].frequency;
		//yeni_dugum.isim = yeni_dugum.frequency;
		queue.queue(yeni_dugum);
		
	}
	
	return queue.dequeue();
}
