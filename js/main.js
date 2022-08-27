var eltext = document.querySelector('.text')

var fluy = 500
var hostel = 250
var musey = 120

var uzs = 11000
var euro = 11800

var all = (fluy + hostel) * uzs + euro * musey

var cash = +prompt('Nick sayohat uchun qancha pulingiz bor ? So`mda kiriting')

if (cash > all) {
    eltext.textContent = `Oq yol Nick sizda qoshimcha xarjatlarga ${(Math.round((cash - all)/uzs))} $ pulingiz bor `;
}
else{eltext.textContent = `Nick afsuski Mablag'ingiz etarli emas !
 Siz yana ${(Math.round((cash - all)/uzs))} $ topshingiz kerak`}
