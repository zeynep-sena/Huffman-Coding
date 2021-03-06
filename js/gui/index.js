var sonuc; //ağaç ve kodlanmış metin sonuç içerisinde saklanır
var count = 0; //tıklanma sayısı
document.getElementById("encode-button").onclick = function(){ //encode button için click eventi -> anonymous function
    count++;
    
    //Her girdi için frekans tablosunun içini yeniler ve temizler.
    if(document.getElementById("harfler").hasChildNodes){
        harfler = document.getElementById("harfler");
        harfler.innerHTML = '';
    }
    if(document.getElementById("frekanslar").hasChildNodes){
        frekanslar = document.getElementById("frekanslar");
        frekanslar.innerHTML = '';
    }
    
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

    if(document.getElementById("agac-canvaswidget")){ //eğer alanda varsa önceki ağacı siler
        canvas = document.getElementById("agac-canvaswidget");
        document.getElementById("agac-canvaswidget").parentNode.removeChild(canvas);
    }
    visualize(sonuc.agac, true);
}

function frekansTablosuOlustur(name, frequency){ //htmldeki tabloları girilen parametrelere göre dom objeleri oluşturup doldurur. yaprak_dugumleri_olustur dosyasının içinde çalışır.
    var harf = document.createElement("th");
    harf.innerHTML = name;
    document.getElementById("harfler").appendChild(harf);

    var frekans = document.createElement("td");
    frekans.innerHTML = frequency;
    document.getElementById("frekanslar").appendChild(frekans);
}