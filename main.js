// IDEA: uzsibreziam funkcija ir ja pavadinti.
//norim sita funkcija iskviesti kai vartotojas paspaudzia mygtuka
//console.log("Labas");

// IDEA: kad zinotu i kuri laukeli irasyti reiksme. tai nurodyti pagal ID elementa
// IDEA: document naudojam gauti elementa id ir ji issisaugoti ekrane
// IDEA:   var ekranas = document.getElementById('ekranas') - sitas  consolej per inspect element
// atspausdina ekrano reiksme is index failo, kodo gabala
// IDEA: is document susiradom musu ekrano objekta, input.
//kadangi panaudojom metoda kuriuo priskyrem kintamaji, tai jis paveldejo ir kitas savybes,
//tai su juo galima elgtis kaip su objektu ir keisti jo savybes, norimpakiesit value savybe,
// jos neturim html apsirase,, bet su js galima priskirti reiksme ekranas.value = skaitmuo;
// IDEA: += leis irasyti keleta skaitmenu

var ekranas = document.getElementById('ekranas'),
pirmasisDaugiklis; // IDEA: mes ji apsibreziam tik.
//cia veikia priskyrimas ekranui, nes yra kableliais atskirti du kintamieji kuriem galima priskirt skirtingas reiksmes

//-----cia bandymai
var duomenys = { // IDEA: sukuriamas tuscias objektas {}. siam objektui priskirtos 3 reiksmes. (viduj objekto galima ir funkcija aspsirasyt)
skaicius1: 100,
skaicius2: 200,
skaicius3: 300
}; // IDEA: pvz gaunu duomenis is serverio, su js galiu html uzpildyt duomenimis

var duomenys2 = JSON.parse('{"skaicius1: 100, skaicius2: 200, skaicius3: 300}'); //cia json formatas. is stringo eilutes pasivercia i duomenu formata - objekta.
//----cia bandymas baigiasi
var skaicius = function(skaitmuo) {
  ekranas.value += skaitmuo;
  console.log(ekranas.value);
};
//console.log(this);

// IDEA: paspaudus mygtuka daugybos, turi issaugot ivesta skaiciu ir isvalyti ekrana
//problema - ekrano neturim, norim paimti ta pati kintamaji kuri turejo ankstesnje funkcijoj
//tai var ekranas eilute iskelt is funkcijos i globalia pozicija,
//kad galetumem is kitos (daugybos) funkcijos ja paimti
// IDEA: isvalyt ekrana, ekranas.value - null; null nera tas pats kas tuscia, null reiskia nera reiksmes, tuscia reiksme reiskia kad reiksme yra tuscia
// IDEA: cia daugyba abu skaicius leis suvest
var daugyba = function() {
  var pirmasisDaugiklis = ekranas.value;
  ekranas.value = null;
  console.log(pirmasisDaugiklis); // IDEA: kad sita fja iskviest, turim ji prisegti prie onclick mygtuko index faile
};

var rezultatas = function() {
  ekranas.value = pirmasisDaugiklis * ekranas.value;
  console.log(ekranas.value);
};

//------cia irgi bandymas
var sandauga = function() {
  ekranas.value = duomenys.skaicius1 * duomenys.skaicius2;
};

sandauga();//iskvieciam funkcija vos tik uzkrovus js faila

//----o cia irgi bandymas baigiasi
