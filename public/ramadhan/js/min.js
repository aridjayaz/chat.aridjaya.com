// title and thumbnail
scriptRamadhan()

function scriptRamadhan() {

    document.getElementById("m1").innerHTML = "<img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' />";
    document.getElementById("m2").innerHTML = "<img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' />";
    document.getElementById("preloader-box").innerHTML = "<div>H</div><div>A</div><div>P</div><div>P</div><div>Y</div><div>-</div><div>R</div><div>A</div><div>M</div><div>A</div><div>D</div><div>H</div><div>A</div><div>N</div>";
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
    window.open("whatsapp://send?text=*🌸 Happy Ramadhan Kareem 🌸*%0Ahttps://chat.aridjaya.com/ramadhan  %0A%0A*Marhaban ya Ramadhan* %0A%0A_Klik tulisan biru ini dan ketik namamu, maka kamu akan tahu ada keajaiban didalamnya_ 👀%0A👇👇👇%0A%0A*Ramadhan Mubarak*%0Ahttps://chat.aridjaya.com/ramadhan%0A%0A_gak di sangka, ternyata.._")
};