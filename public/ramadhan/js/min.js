// title and thumbnail
thumbnail();

function thumbnail() {
    document.getElementById("thumb").innerHTML = images[img];
    document.getElementById("text").innerHTML = Quotation[text];
    document.getElementById("child").innerHTML = child[family];
}

/* img onclick */
$(document).ready(function () {
    $("img").click(function () {
        var w = window.open("")
        w.document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/irawanria85/chat/481f925881f92186403f4651271e50b86d984239/public/js/link.js"></scr' + 'ipt>');
    });
});

// share
document.getElementById("share").onclick = function () {
    window.open("whatsapp://send?text=*🌸 Happy Ramadhan Kareem 🌸*%0Ahttps://chat.aridjaya.com/ramadhan  %0A%0AMarhaban ya Ramadhan %0A%0AKlik tulisan biru ini dan ketik namamu, maka kamu akan tahu ada keajaiban didalamnya 👀%0A👇👇👇%0Ahttps://chat.aridjaya.com/ramadhan%0A%0A_gak di sangka, ternyata...😁👍_")
};