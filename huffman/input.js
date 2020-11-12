//aaabbh örneğini kullanarak
function inputu_yorumla(input){
    //yazılan inputu alır
    var sonuc = {
        "input": input, //alınan input
        "kodlanmis_string": "", //inputun bitler halinde kodlanmış şekli (a = 0, b = 11, h = 10 son string = 000111110) 
        "agac": {}, //huffman ağacı
        "yuzdelik": 0.0, //sıkıştırma yüzdesi (%81.25)
    };

    var yaprak_dugumler = yaprak_dugumleri_olustur(input); // (a b h için ayrı ayrı node oluşturur)
    var agac = agac_olustur(yaprak_dugumler);   // diğer düğümleri oluşturur (6, 3)

    sonuc.agac = agac;

    var yollar = {};    
    yol_olustur(agac, yollar); // her karakterin yolunu atıyor (a = 0, b = 11, h = 10)
    var bit_string = encode(input, yollar); //(000111110)

    sonuc.kodlanmis_string = bit_string;

    sonuc.yuzdelik = (1 - (bit_string.length / (input.length*8))) * 100;

    // dizayndaki componentlere göre gerekenler down below :)
    // frekanslar = yaprak_dugumler.frekans (a = 3, b = 2, h = 1)
    // output = sonuc.kodlanmis_string ya da bit_string

    return sonuc;
}