var sonuc; //ağaç ve kodlanmış metin sonuç içerisinde saklanır
var count = 0; //tıklanma sayısı
document.getElementById("encode-button").onclick = function(){ //encode button için click eventi -> anonymous function
    count++;
    if(count > 1){document.getElementById("div").innerHTML = '<div id="agac" style="height:500px;"><i style="line-height:500px;">Type to see the graph...</i></div>';}
    sonuc = enableEncode();
    document.getElementById("output").innerHTML = sonuc.kodlanmis_string;
    document.getElementById("yuzdelik").innerHTML = sonuc.yuzdelik;
    agacıCizdir(sonuc);
};


function enableEncode(){ //encode tıklandığında ağaç arraylerini oluşturur ve bunu döndürür.
    return inputu_yorumla(document.getElementById("input").value);
}

function agacıCizdir(sonuc){ //agac ögesinin içerisine gerekli şekli çizdirir.
    document.getElementById("agac").getElementsByTagName("i")[0].style.display = "none"; //information divini gizler
    visualize(sonuc.agac, true);
    // Animate tree building
    document.getElementById("#agac-canvaswidget").fadeTo(0, 0);
    timeout_to_show = setTimeout(function(){
        document.getElementById("#agac-canvaswidget").fadeTo(0, 1);
    }, 550);
}
