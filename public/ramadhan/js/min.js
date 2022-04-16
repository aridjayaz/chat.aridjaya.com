// title and thumbnail
thumbnail();

function thumbnail() {
    document.getElementById("thumb").innerHTML = images[img];
    document.getElementById("text").innerHTML = Quotation[text];
    document.getElementById("child").innerHTML = child[family];
}

// share
document.getElementById('share').onclick = function () {
    window.open("whatsapp://send?text=*Marhaban ya Ramadhan*%0A%0A*Saya telah mencobanya.. .*%0A%0A*Klik Tulisan Biru ini dan Ketik Namamu, maka kamu akan tahu ada keajaiban didalamnya*%0A👇👇👇%0Ahttps://chat.aridjaya.com/ramadhan%0A%0A*Gak di sangka, ternyata.... .😁👍*")
};