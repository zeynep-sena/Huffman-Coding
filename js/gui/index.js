var sonuc;
document.getElementById("encode-button").onclick = function(){
    sonuc = calistir();
    console.log(sonuc);
};


function calistir(){
    return inputu_yorumla(document.getElementById("input").value);
}