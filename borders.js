/*
URI: http://www.borders.altervista.org
Description: 
Author: Andrea Zangheri
Author URI: arkznh@gmail.com
Version: 1.1
Tags: p5.js, javascript, html, DOM
*/
var rw;
rw = new RiGrammar();
rw.addRule("<start>", "borders ə(r) <V> <N>", 1);
rw.addRule("<V>", "kəˈmjuːnɪkətɪv | kʌltʃərəl | ɑːtɪˈfɪʃl | daɪˈnæmɪk | kʌmfətəbl | ʌnˈnəʊn | hɪdn | ɪmˈpasəbl | daɪˈnæmɪk | saɪlənt | vəːtʃuəl | səʊʃl | pasəbl | rɪˈleɪʃənl | pəːsənl | ɔːdəbl | mjuːt | def | nɔɪzi | praɪvət | sensəbl");
rw.addRule("<N>", "dɪstənsɪz | lɪmɪtz | pleɪsɪz | fəʊbɪəz | brɪdʒɪz | bærɪəz | ɪmɪdʒɪz | speɪsɪz | daɪˈmənʃənz | juːnɪvəːsəz | bʌblz | saɪnz | geɪmz | kɒntæktz | ʃædəʊz | wəːdz | rɪðəmz | kɒmprəmaɪzɪz | ruːmz | tʃeɪmbə(r) | fɔːmz | rɪˈleɪʃn | vɜːtʃuəl | pi:pəlz");
var rw_result = rw.expand("<start>");
// ===== ARRAY SONUS FUNCTION ===== //
 var sonus = ["bɔ:dəz","wɜːdz","ðiːz", "wɜː(r)","sɒnərəs", "wɜːld", "fəˈnetɪk", "nɔɪzi", "vɔɪsɪz", "ka-a-za", "weə(r)", "ɪz", "ðə", "vɔɪsɪz", "wɒt", "tuː", "rɪˈmembə(r)", "rrr", "ɽa-ɽa-ɽa", "aɪ", "tɜːnd", "siː", "ðæt", "ˌtɔːkɪŋ", "‘miː","huːz", "spiːkɪŋ", "ðaʊ", "ənd", "aɪ", "viːz", "ɑː", "ˈviː", "fɔːml", "reprɪzenˈteɪʃn", "kʌm", "lɑːst", "wʌn", "sa-asa", "fə(r)", "ðʌs", "frendz", "æbsənt", "spiːk", "sha", "sah", "asha", "hasa", "siːk", "swɪtʃ", "sɪk", "spiːk", "ɪn", "ə", "saɪlənt", "spiːtʃ", "ŋa-ɱŋa", "empti", "fʊl", "ruːm", "nɒkˈtɜːnl", "duː", "nɒt", "fɒləʊ", "fʊtsteps", "waɪz", "ɒv", "ðə", "mmm", "jɔːn", "saɪlənt", "saʊnd", "krɪˈtiːk", "kɪk'ɪ rɪk'ɪ", "pr-aprr", "fʌŋkʃn", "ɒbdʒɪk", "neɪm", "siːn", "kra", "akra", "kraa", "kar","akar","akra", "kro", "okro", "kroo", "kəˈpriːs", "fl-af-afl", "wɪspərs", "sa-za-sa", "wi", "həv", "meɪd", "selɪbreɪt", "zəʊn", "gu-aglu", "siːkrət", "getɪŋ", "ækt", "θɪŋz", "dʌn", "θɪŋz", "ɳo-oɳo", "ga-hag", "ɱia", "aɱia", "iɱaa", "iaɱ", "ɱai", "aɱii", "ioɱ", "aioɱ", "iɱoa", "br-abr", "templ", "stɒps", "bʌt", "stɪl", "hɪə(r)", "bel"];
var maxString;// Number of words inside sonus[] 
// ===== ARRAY LUDUS FUNCTION ===== //
var ludus = ["◦", "˹", "˻", "˺", "˼", "ˑ", "ˏˏ", "ˏˎ", "ˎˎ", "˩", "˨", "˧", "͡", "“", "”", "ː", "-", "_", "—", ",", "/", ":", ";", "~", "←", "↨", "→", "↓", "↔", "↕", "╩", "╦", "╝", "╔", ",", ".", "-", "?", "^", "'", "=", "<", ">", ":", ";", "_", "┴", "┼", "├", "⌠", "⌡", "│", "≈≈","⧵", "⧵⧵", "⧵⧵⧵", "●", "◘", "■", "□", "▲", "▼", "○", "◙", "ꜜ", "ꜛ", "[", "]", "∫", "∫", "›››", ">", "<", "ˁˁ", "ˀˀ"];
var maxSymbol;// Number of symbols inside ludus[] 
//  Imago ai em dgi Composed Phrase
var ri_result = ["wʌn", "tuː", "θriː", "fɔː(r)", "faɪv", "sɪks", "sevn", "eɪt", "naɪn", "ten", "ɪˈlevn", "twelv", "θɜːˈtiːn", "fɔːˈtiːn", "fɪfˈtiːn", "sɪksˈtiːn", "sevnˈtiːn", "eɪˈtiːn", "naɪnˈtiːn", "twenti", "twentiwʌn", "twentituː", "twentiθriː", "twentifɔː(r)", "twentifaɪv", "twentisɪks", "twentisevn", "twentieɪt", "twentinaɪn", "θɜːti", "θɜːtiwʌn", "θɜːtituː", "θɜːtiθriː", "θɜːtifɔː(r)", "θɜːtifaɪv", "θɜːtisɪks", "θɜːtisevn", "θɜːtieɪt", "θɜːtinaɪn", "fɔːti", "fɔːtiwʌn", "fɔːtituː", "fɔːtiθriː", "fɔːtifɔː(r)", "fɔːtifaɪv", "fɔːtisiks", "fɔːtisevn", "fɔːtieɪt", "fɔːtinaɪn", "fɪfti", "fɪftiwʌn", "fɪftituː", "fɪftiθriː", "fɪftifɔː(r)", "fɪftifaɪv", "fɪftisiks", "fɪftisevn", "fɪftieɪt", "fɪftinaɪn", "sɪksti", "sɪkstiwʌn", "sɪkstituː", "sɪkstiθriː", "sɪkstifɔː(r)", "sɪkstifaɪv", "sɪkstisɪks", "sɪkstisevn", "sɪkstieɪt", "sɪkstinaɪn", "sevnti", "sevntiwʌn", "sevntituː", "sevntiθriː", "sevntifɔː(r)", "sevntifaɪv", "sevntisɪks", "sevntisevn", "sevntieɪt", "sevntinaɪn", "eɪti", "eɪtiwʌn", "eɪtituː", "eɪtiθriː", "eɪtifɔː(r)", "eɪtifaɪv", "eɪtisɪks", "eɪtisevn", "eɪtieɪt", "eɪtinaɪn", "naɪnti", "naɪntiwʌn", "naɪntituː", "naɪntiθriː", "naɪntifɔː(r)", "naɪntifaɪv", "naɪntisɪks", "naɪntisevn", "naɪntieɪt", "naɪntinaɪn"];
var myVoice = new p5.Speech(); // speech synthesis object
var myRec = new p5.SpeechRec(); // new p5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate) 
lexicon = new RiLexicon();// p5.RiTa Lexicon
var fontRegular;// Declare font style
var mic;// p5 mic input
mic = new p5.AudioIn();// Mic AudioIn, Mic start
mic.start();
amp = new p5.Amplitude();// Amplitude analyzer
amp.setInput(mic);  
var amp;// p5 amplitude
var scala;// amplitude scale
var h; // hour
function setup() {// ===== Setup ===== //
myCanvas = createCanvas(windowWidth,windowHeight);
myCanvas.parent('canvas');
fontRegular = loadFont("data/font/NotoSansUI-Regular.ttf");
myRec.start();
 frameRate(5);
 textSize(16);
 myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
myVoice.speak(rw_result);
}  
function draw() {// ===== Draw ===== //
    }
function imagoFunction(){   // ===== Imago ===== //  
	if((!('webkitSpeechRecognition' in window)) || (!window.hasOwnProperty("webkitSpeechRecognition")) || (typeof(webkitSpeechRecognition) != "function")){
		imagoNoSpeech();
	} else {
		myRec.onResult = imagoResult();
	}}
function imagoResult() {
var maxT = 100;
var minT = 8;
var scalaM = 3;
var h = hour();
if(myRec.resultValue==true) {
if (h >= 0 && h <= 8) {
                maxString = int(random(28));
                fill(255);
				stroke('#000');
				strokeWeight(1);
                scala = map(amp.getLevel(),0,1.0,minT,maxT);
                rect(random(50,width), random(50,height), scala*scalaM, scala*scalaM);
				textFont(fontRegular);
                textSize(2*scala);
                //text("ɑɪ em dʒiː [" + ri_result[maxString] + "]", random(120,width), random(0,height-120));
				console.log(ri_result[maxString]);
            } else if (h > 8 && h <= 12) {
                maxString = int(random(28));
                fill(0);
				stroke('#fff');
				strokeWeight(1);
                scala = map(amp.getLevel(),0,1.0,minT,maxT);
                rect(random(50,width), random(50,height), scala*scalaM, scala*scalaM);
				textFont(fontRegular);
                textSize(2*scala);
                //text("ɑɪ em dʒiː [" + ri_result[maxString] + "]", random(120,width), random(0,height-120));
				console.log(ri_result[maxString]);
            } else if (h > 12 && h <= 18) {
                maxString = int(random(28));
                fill(0);
				stroke('#fff');
				strokeWeight(1);
                scala = map(amp.getLevel(),0,1.0,minT,maxT);
                rect(random(50,width), random(50,height), scala*scalaM, scala*scalaM);
				textFont(fontRegular);
                textSize(2*scala); 
                //text("ɑɪ em dʒiː [" + ri_result[maxString] + "]", random(120,width), random(0,height-120));
				console.log(ri_result[maxString]);
            } else if (h > 18 && h <= 23) {
                maxString = int(random(sonus.length));
                fill(255);
				stroke('#000');
				strokeWeight(1);
                scala = map(amp.getLevel(),0,1.0,minT,maxT);
                rect(random(50,width), random(50,height), scala*scalaM, scala*scalaM);
               	textFont(fontRegular);
                textSize(2*scala);
                //text("ɑɪ em dʒiː [" + ri_result[maxString] + "]", random(120,width), random(0,height-120));
				console.log(ri_result[maxString]);
            } }} 

function imagoNoSpeech(){
var i = Math.floor(Math.random()*((sonus.length+1)-0)+0);//random number sonus Array
var r = Math.random() * (0,5 - 0,1 + 0,1) ;//random number rectSize
var k = Math.floor(Math.random() * (23 - 15 + 1) + 15);//random number textFont
            var h = hour();
if (h >= 0 && h <= 8) {
                maxString = int(random(sonus.length));
                fill(255);
				stroke('#000');
				strokeWeight(1);
                rect(random(50,width), random(50,height), random(r*width/8,r*height/8), random(r*width/8,r*height/8));
				textFont(fontRegular);
                textSize(k);
                //text("ɑɪ em dʒiː [" + ri_result[maxString] + "]", random(r,width), random(r,height));
				console.log(ri_result[maxString]);
            } else if (h > 8 && h <= 12) {
                maxString = int(random(sonus.length));
                fill(0);
				stroke('#fff');
				strokeWeight(1);
                rect(random(50,width), random(50,height), random(r*width/8,r*height/8), random(r*width/8,r*height/8));
				textFont(fontRegular);
                textSize(k);
               // text("ɑɪ em dʒiː [" + ri_result[maxString] + "]", random(120,width), random(0,height-120));
				console.log(ri_result[maxString]);
            } else if (h > 12 && h <= 18) {
                maxString = int(random(sonus.length));
                fill(0);
				stroke('#fff');
				strokeWeight(1);
                rect(random(50,width), random(50,height), random(r*width/8,r*height/8), random(r*width/8,r*height/8));
				textFont(fontRegular);
                textSize(k); 
                //text("ɑɪ em dʒiː [" + ri_result[maxString] + "]", random(120,width), random(0,height-120));
				console.log(ri_result[maxString]);
            } else if (h > 18 && h <= 23) {
                maxString = int(random(sonus.length));
                fill(255);
				stroke('#000');
				strokeWeight(k);
                rect(random(10,width), random(50,height), random(r*width/8,r*height/8), random(r*width/8,r*height/8)); 
               	textFont(fontRegular);
                textSize(r);
                //text("ɑɪ em dʒiː [" + ri_result[maxString] + "]", random(120,width), random(0,height-120)); //FIX:posizionare la frase sotto al quadrato.
				console.log(ri_result[maxString]);
            } 
}
function sonusFunction(){   // ===== Imago ===== //  
	if((!('webkitSpeechRecognition' in window)) || (!window.hasOwnProperty("webkitSpeechRecognition")) || (typeof(webkitSpeechRecognition) != "function")){
		sonusNoSpeech();
	} else {
		myRec.onResult = displayResult();
	}}
function displayResult() {
		var maxT = 100;
        var minT = 8;
        var scalaM = 3;
        var h = hour();
        if(myRec.resultValue==true) {
            if (h >= 0 && h <= 8) {
                fill(255);
                var output = myRec.resultString;
                var ph = RiTa.getPhonemes(myRec.resultString);
                ipaPhones = arpaToIPA(lexicon._getRawPhones(output));
                scala = map(amp.getLevel(),0,1.0,minT,maxT);
                if (ipaPhones == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                    fill(0);
                } else {
                    myVoice.setVolume(1);
                    fill(255);
					stroke('#000');
					strokeWeight(1);
					textFont(fontRegular);
                    textSize(2*scala);
                    text(ipaPhones, random(120,width), random(0,height-120));
                }
                console.log(ipaPhones);
            } else if (h > 8 && h <= 12) {
                fill(0);
                var output = myRec.resultString;
                var ph = RiTa.getPhonemes(myRec.resultString);
                ipaPhones = arpaToIPA(lexicon._getRawPhones(output));
                scala = map(amp.getLevel(),0,1.0,minT,maxT);
                if (ipaPhones == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                    fill(255);
                } else {
                    myVoice.setVolume(1);
                    fill(0);
					stroke('#fff');
					strokeWeight(1);
					textFont(fontRegular);
                    textSize(2*scala);
                    text(ipaPhones, random(120,width), random(0,height-120));
                }
                console.log(ipaPhones);
            } else if (h > 12 && h <= 18) {
                fill(0);
                var output = myRec.resultString;
                var ph = RiTa.getPhonemes(myRec.resultString);
                ipaPhones = arpaToIPA(lexicon._getRawPhones(output));
                scala = map(amp.getLevel(),0,1.0,minT,maxT);
                if (ipaPhones == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                    fill(255);
                } else {
                    myVoice.setVolume(1);
                    fill(0);
					stroke('#fff');
					strokeWeight(1);
					textFont(fontRegular);
                    textSize(2*scala);
                    text(ipaPhones, random(120,width), random(0,height-120));
                }
                console.log(ipaPhones);
            } else if (h > 18 && h <= 23) {
                fill(255);
                var output = myRec.resultString;
                var ph = RiTa.getPhonemes(myRec.resultString);
                ipaPhones = arpaToIPA(lexicon._getRawPhones(output));
                scala = map(amp.getLevel(),0,1.0,minT,maxT);
                if (ipaPhones == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                    fill(0);
                } else {
                    myVoice.setVolume(1);
                    fill(255);
					stroke('#000');
					strokeWeight(1);
					textFont(fontRegular);
                    textSize(2*scala);
                    text(ipaPhones, random(120,width), random(0,height-120));
                }
                console.log(ipaPhones);
            }}}
function sonusNoSpeech() {
var i = Math.floor(Math.random()*((sonus.length+1)-0)+0);//random number sonus Array
var r = Math.floor(Math.random() * (23 - 15 + 1) + 15);//random number textFont
            var h = hour();
            if (h >= 0 && h <= 8) {
                	fill(255);
					stroke('#000');
					strokeWeight(1);
                	var output = sonus[i];
					textFont(fontRegular);
					strokeWeight(1);
                    text(output, random(120,width), random(0,height-120));
					console.log(output);
            } else if (h > 8 && h <= 12) {
					fill(0);
					stroke('#fff');
					strokeWeight(1);
                	var output = sonus[i];
					textFont(fontRegular);
                    textSize(r);
                    text(output, random(120,width), random(0,height-120));
					console.log(output);
            } else if (h > 12 && h <= 18) {
                	fill(0);
					stroke('#fff');
					strokeWeight(1);
					var output = sonus[i];
					textFont(fontRegular);
                    textSize(r);
                    text(output, random(120,width), random(0,height-120));
					console.log(output);
            } else if (h > 18 && h <= 23) {
                	fill(255);
					stroke('#000');
					strokeWeight(1);
                	var output = sonus[i];
					textFont(fontRegular);
                    textSize(r);
                    text(output, random(120,width), random(0,height-120));
					console.log(output);
                }
            }
function areaFunction(){   // ===== Imago ===== //  
	if((!('webkitSpeechRecognition' in window)) || (!window.hasOwnProperty("webkitSpeechRecognition")) || (typeof(webkitSpeechRecognition) != "function")){
		areaNoSpeech();
	} else {
		myRec.onResult = areaResult();
	}}
function areaResult() {      
        var h = hour();
        if(myRec.resultValue==true) {
            if (h >= 0 && h <= 8) {
                var output = myRec.resultString;
                var ph = RiTa.getPhonemes(myRec.resultString);
                ipaPhones = arpaToIPA(lexicon._getRawPhones(output));
                myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
				 if (ipaPhones == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                } else {
                    myVoice.setVolume(1);
					myVoice.speak(ipaPhones);
                }
                myVoice.speak(ipaPhones);
            } else if (h > 8 && h <= 12) {
                var output = myRec.resultString;
                var ph = RiTa.getPhonemes(myRec.resultString);
                ipaPhones = arpaToIPA(lexicon._getRawPhones(output));
                myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
                 if (ipaPhones == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                } else {
                    myVoice.setVolume(1);
					myVoice.speak(ipaPhones);
                }
            } else if (h > 12 && h <= 18) {
                var output = myRec.resultString;
                var ph = RiTa.getPhonemes(myRec.resultString);
                ipaPhones = arpaToIPA(lexicon._getRawPhones(output));
                myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
                 if (ipaPhones == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                } else {
                    myVoice.setVolume(1);
					myVoice.speak(ipaPhones);
                }
            } else if (h > 18 && h <= 23) {
                var output = myRec.resultString;
                var ph = RiTa.getPhonemes(myRec.resultString);
                ipaPhones = arpaToIPA(lexicon._getRawPhones(output));
                myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
                 if (ipaPhones == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                } else {
                    myVoice.setVolume(1);
					myVoice.speak(ipaPhones);
                }
            }}}
function areaNoSpeech() {
var i = Math.floor(Math.random()*(sonus.length+1));//random number sonus Array
            var h = hour();
            if (h >= 0 && h <= 8) {
                var output = sonus[i];
                myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
				 if (output == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                } else {
                    myVoice.setVolume(1);
					myVoice.speak(output);
                }
            } else if (h > 8 && h <= 12) {
                var output = sonus[i];
                myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
                 if (output == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                } else {
                    myVoice.setVolume(1);
					myVoice.speak(output);
                }
            } else if (h > 12 && h <= 18) {
                var output = sonus[i];
                myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
                 if (output == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                } else {
                    myVoice.setVolume(1);
					myVoice.speak(output);
                }
            } else if (h > 18 && h <= 23) {
                var output = sonus[i];
                myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
                 if (output == "undefined"){// IF rec result == undefine -- MUTE SPEECH
                    myVoice.setVolume(0);
                } else {
                    myVoice.setVolume(1);
					myVoice.speak(output);
                }
            }}
function ludusFunction(){   // ===== Ludus ===== //  
	if((!('webkitSpeechRecognition' in window)) || (!window.hasOwnProperty("webkitSpeechRecognition")) || (typeof(webkitSpeechRecognition) != "function")){
		ludusNoSpeech();
	} else {
		myRec.onResult = ludusResult();
	}}
    function ludusResult() {// ===== Ludus ===== //
			var maxT = 100;
        	var minT = 8;
        	var scalaM = 3;
            var h = hour();
            if (h >= 0 && h <= 8) {
                maxSymbol = int(random(60));
                fill(255);
                textFont(fontRegular);
				scala = map(amp.getLevel(),0,1.0,minT,maxT);
                textSize(2*scala);
                text(ludus[maxSymbol], random(120,width), random(0,height-120));
            } else if (h > 8 && h <= 12) {
                maxSymbol = int(random(60));
                fill(0);
                textFont(fontRegular);
				scala = map(amp.getLevel(),0,1.0,minT,maxT);
                textSize(2*scala);
                text(ludus[maxSymbol], random(120,width), random(0,height-120));
                myVoice.speak(sonus[maxSymbol]);
            } else if (h > 12 && h <= 18) {
                maxSymbol = int(random(60));
                fill(0);
                textFont(fontRegular);
				scala = map(amp.getLevel(),0,1.0,minT,maxT);
                textSize(2*scala);
                text(ludus[maxSymbol], random(120,width), random(0,height-120));
            } else if (h > 18 && h <= 23) {
                maxSymbol = int(random(60));
                fill(255);
                textFont(fontRegular);
				scala = map(amp.getLevel(),0,1.0,minT,maxT);
                textSize(2*scala);
                text(ludus[maxSymbol], random(120,width), random(0,height-120));
            }}
    function ludusNoSpeech() {// ===== Ludus ===== //
		var r = Math.floor(Math.random() * (23 - 15 + 1) + 15);//random number textFont
            var h = hour();
            if (h >= 0 && h <= 8) {
                maxSymbol = int(random(60));
                fill(255);
                textFont(fontRegular);
                textSize(r);
                text(ludus[maxSymbol], random(120,width), random(0,height-120));
            } else if (h > 8 && h <= 12) {
                maxSymbol = int(random(60));
                fill(0);
                textFont(fontRegular);
                textSize(r);
                text(ludus[maxSymbol], random(120,width), random(0,height-120));
                myVoice.speak(sonus[maxSymbol]);
            } else if (h > 12 && h <= 18) {
                maxSymbol = int(random(60));
                fill(0);
                textFont(fontRegular);
                textSize(r);
                text(ludus[maxSymbol], random(120,width), random(0,height-120));
            } else if (h > 18 && h <= 23) {
                maxSymbol = int(random(60));
                fill(255);
                textFont(fontRegular);
                textSize(r);
                text(ludus[maxSymbol], random(120,width), random(0,height-120));
            }}
function stopFunction(){//=====Stop====//
    myVoice.cancel();
    myVoice.stop();
}
function clearFunction(){//=====Clear====//
        h = hour();
            if (h >= 0 && h <= 8) {// 0-8 BLACK BG
            myCanvas = createCanvas(windowWidth,windowHeight);
            myCanvas.parent('canvas');
            //myVoice.speak(rw_result);
        } else if (h > 8 && h <= 12) { // 8-12 WHITE BG
myCanvas = createCanvas(windowWidth,windowHeight);
            myCanvas.parent('canvas');
            //myVoice.speak(rw_result);
        }   else if (h > 12 && h <= 18) {// 12-18 WHITE BG BORDER_BLACK
            myCanvas = createCanvas(windowWidth,windowHeight);
            myCanvas.parent('canvas');
            //myVoice.speak(rw_result);
        } else if (h > 18 && h <= 23) {// 18-23 BLACK BG BORDER_WHITE
myCanvas = createCanvas(windowWidth,windowHeight);
            myCanvas.parent('canvas');
}}
function saveFunction(){
    saveCanvas(myCanvas, "canvas","jpg");
}