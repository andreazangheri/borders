/*
URI: http://www.borders.altervista.org
Author URI: arkznh@gmail.com
Version: 1.1
Tags: javascript
*/
		var d = new Date();
    	var h = d.getHours();
		var frase1 = ["kəˈmjuːnɪkətɪv", "kʌltʃərəl", "ɑːtɪˈfɪʃl", "daɪˈnæmɪk", "kʌmfətəbl", "ʌnˈnəʊn", "hɪdn", "ɪmˈpasəbl", "saɪlənt", "vəːtʃuəl", "səʊʃl", "pasəbl", "rɪˈleɪʃənl", "pəːsənl", "ɔːdəbl", "mjuːt", "def", "nɔɪzi ", "praɪvət", "sensəbl"];
		var i = Math.floor(Math.random() * ((frase1.length+1) - 0) + 0);
		var valueFrase1 = frase1[i];
		var frase2 = ["dɪstənsɪz", "lɪmɪtz", "pleɪsɪz", "fəʊbɪəz",  "brɪdʒɪz", "bærɪəz", "ɪmɪdʒɪz", "speɪsɪz", "daɪˈmənʃənz", "juːnɪvəːsəz", "bʌblz", "saɪnz", "geɪmz", "kɒntæktz", "ʃædəʊz", "wəːdz", "rɪðəmz", "kɒmprəmaɪzɪz", "ruːmz", "tʃeɪmbə(r)", "fɔːmz", "rɪˈleɪʃn", "vɜːtʃuəl", "pi:pəlz"];
		var e = Math.floor(Math.random() * ((frase2.length+1) - 0) + 0);
		var valueFrase2 = frase2[e];
		if(h >= 0 && h <= 8) {
			(function() {
			var canvas= document.getElementById("canvas");
			canvas.style.backgroundColor = "#000";
}());
			(function() {
    			var load = document.getElementById("loader");
				load.style.backgroundColor  = "black";
				load.style.color  = "white";
				load.style.padding = "20px";
				load.style.boxSizing ="border-box";
				load.style.display = "block";
				load.style.position = "absolute";
				load.style.height = "100%";
				load.style.width = "100%";
				load.style.zIndex = "1000";
				load.style.background = "black url(data/load_white.svg) no-repeat fixed center";
				if(window.innerHeight > window.innerWidth){
								load.style.backgroundSize = "20vw";
				} else {
								load.style.backgroundSize = "10vw";
				}
}());
			(function(){
				var frase = document.createElement("a");
				frase.style.color = "black";
				frase.textContent = "borders ə(r) " + valueFrase1 + " " + valueFrase2;
				frase.setAttribute = "class", " no-link";
				document.getElementById("footer").appendChild(frase);
}());
			 (function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon-precomposed.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon-114x114.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon-120x120.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon-144x144.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "../data/favicon/white/apple-icon-152x152.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "../data/favicon/white/apple-icon-167x167.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon-180x180.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon-57x57.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon-60x60.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon-72x72.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon-76x76.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon-precomposed.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white/apple-icon.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/white/android-icon-192x192.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/white/favicon-32x32.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/white/favicon-96x96.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/white/favicon-16x16.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='manifest']") || document.createElement('link');
	link.rel = "manifest";
    link.href = "data/favicon/white/manifest.json";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/white/ms-icon-70x70.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/white/ms-icon-144x144.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/white/ms-icon-150x150.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/white/ms-icon-310x310.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/x-icon";
	link.rel = "shortcut icon";
    link.href = "data/favicon/white/favicon.ico";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
		(function(){
			var white= document.querySelectorAll("li");
			for (var i = 0; i < white.length; i++) {
							white[i].style.backgroundColor = "#fff";
							white[i].style.color ="#000";
}}());
			(function(){
			var white_logotype= document.querySelectorAll(".logotype");
			for (var i = 0; i < white_logotype.length; i++) {
							white_logotype[i].style.backgroundColor = "#fff";
							white_logotype[i].style.borderTop = "3px solid #ffffff";
							white_logotype[i].style.borderBottom = "3px solid #ffffff";
							white_logotype[i].style.borderRight = "3px solid #ffffff";
							white_logotype[i].style.color ="#000";
}}());
			(function(){
			var white_menu_left= document.querySelectorAll(".menu-pad-left");
			for (var i = 0; i < white_menu_left.length; i++) {
							white_menu_left[i].style.backgroundColor = "#fff";
							white_menu_left[i].style.borderTop = "3px solid #ffffff";
							white_menu_left[i].style.borderBottom = "3px solid #ffffff";
							white_menu_left[i].style.borderLeft = "3px solid #ffffff";
							white_menu_left[i].style.color ="#000";
}}());
			(function(){
			var white_menu_right= document.querySelectorAll(".menu-pad-right");
			for (var i = 0; i < white_menu_right.length; i++) {
							white_menu_right[i].style.backgroundColor = "#fff";
							white_menu_right[i].style.borderTop = "3px solid #ffffff";
							white_menu_right[i].style.borderBottom = "3px solid #ffffff";
							white_menu_right[i].style.borderRight = "3px solid #ffffff";
							white_menu_right[i].style.color ="#000";
}}());
			(function(){
			
			var white_footer= document.querySelectorAll("footer");
			for (var i = 0; i < white_footer.length; i++) {
							white_footer[i].style.backgroundColor = "#fff";
							white_footer[i].style.borderTop = "3px solid #ffffff";
							white_footer[i].style.borderBottom = "3px solid #ffffff";
							white_footer[i].style.borderLeft = "3px solid #ffffff";
							white_footer[i].style.color ="#000";
}}());
			(function(){
			var white_img= document.querySelectorAll(".aabb");
			for (var i = 0; i < white_img.length; i++) {
							white_img[i].style.color ="#000";
}}());
			(function(){
			var white_img= document.createElement("img");
			var x = Math.floor((Math.random() * 50) + 0);
			white_img.src = "data/logo/white/white" + x + ".svg";
			white_img.setAttribute("alt","Borders' Logo");
			document.getElementById("logo").appendChild(white_img);
}());
		} else if (h > 8 && h <= 12){
			(function() {
			var canvas= document.getElementById("canvas");
			canvas.style.backgroundColor = "#fff";
}());
			(function() {
				var load = document.getElementById("loader");
				load.style.backgroundColor  = "white";
				load.style.color  = "black";
				load.style.padding = "20px";
				load.style.boxSizing ="border-box";
				load.style.display = "block";
				load.style.position = "absolute";
				load.style.height = "100%";
				load.style.width = "100%";
				load.style.zIndex = "1000";
				load.style.background = "white url(data/load_black_b.svg) no-repeat fixed center";
				if(window.innerHeight > window.innerWidth){
								load.style.backgroundSize = "20vw";
				} else {
								load.style.backgroundSize = "10vw";
				}
}());
			(function(){
				var frase = document.createElement("a");
				frase.style.color = "#000";
				frase.textContent = "borders ə(r) " + valueFrase1 + " " + valueFrase2;
				frase.setAttribute = "class", " no-link";
				document.getElementById("footer").appendChild(frase);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black_b/apple-icon-precomposed.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black_b/apple-icon-114x114.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black_b/apple-icon-120x120.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black_b/apple-icon-144x144.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "../data/favicon/black_b/apple-icon-152x152.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "../data/favicon/black_b/apple-icon-167x167.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black_b/apple-icon-180x180.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black_b/apple-icon-57x57.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black_b/apple-icon-60x60.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black_b/apple-icon-72x72.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "../data/favicon/black_b/apple-icon-76x76.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black_b/apple-icon-precomposed.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black_b/apple-icon.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/black_b/android-icon-192x192.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/black_b/favicon-32x32.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/black_b/favicon-96x96.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/black_b/favicon-16x16.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='manifest']") || document.createElement('link');
	link.rel = "manifest";
    link.href = "data/favicon/black_b/manifest.json";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/black_b/ms-icon-70x70.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/black_b/ms-icon-144x144.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/black_b/ms-icon-150x150.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/black_b/ms-icon-310x310.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/x-icon";
	link.rel = "shortcut icon";
    link.href = "data/favicon/black_b/favicon.ico";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function(){
			
			var black_b= document.querySelectorAll("li");
			for (var i = 0; i < black_b.length; i++) {
							black_b[i].style.backgroundColor = "#fff";
							black_b[i].style.color ="#000";
}}());
			(function(){
			var black_b_logotype= document.querySelectorAll(".logotype");
			for (var i = 0; i < black_b_logotype.length; i++) {
							black_b_logotype[i].style.backgroundColor = "#fff";
							black_b_logotype[i].style.borderTop = "3px solid #000";
							black_b_logotype[i].style.borderBottom = "3px solid #000";
							black_b_logotype[i].style.borderRight = "3px solid #000";
							black_b_logotype[i].style.color ="#000";
}}());
			(function(){
			var black_b_menu_left= document.querySelectorAll(".menu-pad-left");
			for (var i = 0; i < black_b_menu_left.length; i++) {
							black_b_menu_left[i].style.backgroundColor = "#fff";
							black_b_menu_left[i].style.borderTop = "3px solid #000";
							black_b_menu_left[i].style.borderBottom = "3px solid #000";
							black_b_menu_left[i].style.borderRight = "3px solid #000";
							black_b_menu_left[i].style.color ="#000";
}}());
			(function(){
			var black_b_menu_right= document.querySelectorAll(".menu-pad-right");
			for (var i = 0; i < black_b_menu_right.length; i++) {
							black_b_menu_right[i].style.backgroundColor = "#fff";
							black_b_menu_right[i].style.borderTop = "3px solid #000";
							black_b_menu_right[i].style.borderBottom = "3px solid #000";
							black_b_menu_right[i].style.borderLeft = "3px solid #000";
							black_b_menu_right[i].style.color ="#000";
}}());
			(function(){
			var black_b_footer= document.querySelectorAll("footer");
			for (var i = 0; i < black_b_footer.length; i++) {
							black_b_footer[i].style.backgroundColor = "#fff";
							black_b_footer[i].style.borderTop = "3px solid #000";
							black_b_footer[i].style.borderBottom = "3px solid #000";
							black_b_footer[i].style.borderLeft = "3px solid #000";
							black_b_footer[i].style.color ="#000";
}}());
			(function(){
			var black_b_aabb= document.querySelectorAll(".aabb");
			for (var i = 0; i < black_b_aabb.length; i++) {
							black_b_aabb[i].style.color ="#000";
}}());
			(function(){
			var black_b_img= document.createElement("img");
			var x = Math.floor((Math.random() * 50) + 0);
			black_b_img.src = "data/logo/white/white" + x + ".svg";
			black_b_img.style.borderTop = "3px solid #000";
			black_b_img.style.borderBottom = "3px solid #000";
			black_b_img.style.borderRight = "3px solid #000";
			black_b_img.setAttribute("alt","Borders' Logo");
			document.getElementById("logo").appendChild(black_b_img);
}());
		}else if (h > 12 && h <= 18){
			(function() {
			var canvas = document.getElementById("canvas");
			canvas.style.backgroundColor = "#fff";
}());
			(function() {
				var load = document.getElementById("loader");
				load.style.backgroundColor  = "white";
				load.style.color  = "black";
				load.style.padding = "20px";
				load.style.boxSizing ="border-box";
				load.style.display = "block";
				load.style.position = "absolute";
				load.style.height = "100%";
				load.style.width = "100%";
				load.style.zIndex = "1000";
				load.style.background = "white url(data/load_black.svg) no-repeat fixed center";
				if(window.innerHeight > window.innerWidth){
								load.style.backgroundSize = "16vw";
				} else {
								load.style.backgroundSize = "10vw";
				}
}());
			(function(){
				var frase = document.createElement("a");
				frase.style.color = "#fff";
				frase.textContent = "borders ə(r) " + valueFrase1 + " " + valueFrase2;
				frase.setAttribute = "class", " no-link";
				document.getElementById("footer").appendChild(frase);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-precomposed.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-precomposed.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-114x114.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-120x120.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-144x144.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-152x152.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-167x167.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-180x180.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-57x57.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-60x60.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-72x72.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-76x76.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-precomposed.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/black/android-icon-192x192.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/black/favicon-32x32.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/black/favicon-96x96.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/black/favicon-16x16.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='manifest']") || document.createElement('link');
	link.rel = "manifest";
    link.href = "data/favicon/black/manifest.json";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/black/ms-icon-70x70.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/black/ms-icon-144x144.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/black/ms-icon-150x150.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/black/ms-icon-310x310.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/x-icon";
	link.rel = "shortcut icon";
    link.href = "data/favicon/black/favicon.ico";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function(){
			var black_b= document.querySelectorAll("li");
			for (var i = 0; i < black_b.length; i++) {
							black_b[i].style.backgroundColor = "#fff";
							black_b[i].style.color ="#000";
}}());
			(function(){
			var white_b_logotype= document.querySelectorAll(".logotype");
			for (var i = 0; i < white_b_logotype.length; i++) {
							white_b_logotype[i].style.backgroundColor = "#000";
							white_b_logotype[i].style.borderTop = "3px solid #000";
							white_b_logotype[i].style.borderBottom = "3px solid #000";
							white_b_logotype[i].style.borderRight = "3px solid #000";
							white_b_logotype[i].style.color ="#fff";
}}());
			(function(){
			var white_b_menu_left= document.querySelectorAll(".menu-pad-left");
			for (var i = 0; i < white_b_menu_left.length; i++) {
							white_b_menu_left[i].style.backgroundColor = "#000";
							white_b_menu_left[i].style.backgroundColor = "#000";
							white_b_menu_left[i].style.borderTop = "3px solid #000";
							white_b_menu_left[i].style.borderBottom = "3px solid #000";
							white_b_menu_left[i].style.borderLeft = "3px solid #000";
							white_b_menu_left[i].style.color ="#fff";
}}());
			(function(){
			var white_b_menu_right= document.querySelectorAll(".menu-pad-right");
			for (var i = 0; i < white_b_menu_right.length; i++) {
							white_b_menu_right[i].style.backgroundColor = "#000";
							white_b_menu_right[i].style.backgroundColor = "#000";
							white_b_menu_right[i].style.borderTop = "3px solid #000";
							white_b_menu_right[i].style.borderBottom = "3px solid #000";
							white_b_menu_right[i].style.borderRight = "3px solid #000";
							white_b_menu_right[i].style.color ="#fff";
}}());
			(function(){
			var white_b_footer= document.querySelectorAll("footer");
			for (var i = 0; i < white_b_footer.length; i++) {
							white_b_footer[i].style.backgroundColor = "#000";
							white_b_footer[i].style.backgroundColor = "#000";
							white_b_footer[i].style.borderTop = "3px solid #000";
							white_b_footer[i].style.borderBottom = "3px solid #000";
							white_b_footer[i].style.borderLeft = "3px solid #000";
							white_b_footer[i].style.color ="#fff";
}}());
			(function(){
			var white_b_aabb= document.querySelectorAll(".aabb");
			for (var i = 0; i < white_b_aabb.length; i++) {
							white_b_aabb[i].style.color ="#fff";
}}());
			(function(){
			var white_b_img= document.createElement("img");
			var x = Math.floor((Math.random() * 50) + 0);
			white_b_img.src = "data/logo/black/black" + x + ".svg";
			white_b_img.setAttribute("alt","Borders' Logo");
			document.getElementById("logo").appendChild(white_b_img);
}());
		}else if (h > 18 && h <= 23) {
			(function() {
			var canvas= document.getElementById("canvas");
			canvas.style.backgroundColor = "#000";
}());
			(function() {
				var load = document.getElementById("loader");
				load.style.backgroundColor  = "black";
				load.style.color  = "white";
				load.style.padding = "20px";
				load.style.boxSizing ="border-box";
				load.style.display = "block";
				load.style.position = "absolute";
				load.style.height = "100%";
				load.style.width = "100%";
				load.style.zIndex = "1000";
				load.style.background = "black url(data/load_white_b.svg) no-repeat fixed center";
				if(window.innerHeight > window.innerWidth){
								load.style.backgroundSize = "20vw";
				} else {
								load.style.backgroundSize = "10vw";
				}
}());
			(function(){
				var frase = document.createElement("a");
				frase.style.color = "#fff";
				frase.textContent = "borders ə(r) " + valueFrase1 + " " + valueFrase2;
				frase.setAttribute = "class", " no-link";
				document.getElementById("footer").appendChild(frase);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-precomposed.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-114x114.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-120x120.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-144x144.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-152x152.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-167x167.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-180x180.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-57x57.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-60x60.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-72x72.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon-76x76.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/black/apple-icon-precomposed.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "apple-touch-icon";
    link.href = "data/favicon/white_b/apple-icon.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/white_b/android-icon-192x192.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/white_b/favicon-32x32.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/white_b/favicon-96x96.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/png";
	link.rel = "icon";
    link.href = "data/favicon/white_b/favicon-16x16.png";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var link = document.querySelector("link[rel*='manifest']") || document.createElement('link');
	link.rel = "manifest";
    link.href = "data/favicon/white_b/manifest.json";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/white_b/ms-icon-70x70.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/white_b/ms-icon-144x144.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/white_b/ms-icon-150x150.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var meta = document.querySelector("meta[name*='msapplication-TileImage']") || document.createElement('meta');
	meta.name = "msapplication-TileImage";
    meta.href = "data/favicon/white_b/ms-icon-310x310.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
}());
			(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = "image/x-icon";
	link.rel = "shortcut icon";
    link.href = "data/favicon/white_b/favicon.ico";
    document.getElementsByTagName('head')[0].appendChild(link);
}());
		(function(){
			var black= document.querySelectorAll("li");
			for (var i = 0; i < black.length; i++) {
							black[i].style.backgroundColor = "#000";
							black[i].style.color ="#fff";
}}());
			(function(){
			var black_logotype= document.querySelectorAll(".logotype");
			for (var i = 0; i < black_logotype.length; i++) {
							black_logotype[i].style.backgroundColor = "#000";
							black_logotype[i].style.borderTop = "3px solid #ffffff";
							black_logotype[i].style.borderBottom = "3px solid #ffffff";
							black_logotype[i].style.borderRight = "3px solid #ffffff";
							black_logotype[i].style.color ="#fff";
}}());
			(function(){
			var black_menu_left= document.querySelectorAll(".menu-pad-left");
			for (var i = 0; i < black_menu_left.length; i++) {
							black_menu_left[i].style.backgroundColor = "#000";
							black_menu_left[i].style.borderTop = "3px solid #ffffff";
							black_menu_left[i].style.borderBottom = "3px solid #ffffff";
							black_menu_left[i].style.borderRight = "3px solid #ffffff";
							black_menu_left[i].style.color ="#fff";
}}());
			(function(){
			var black_menu_right= document.querySelectorAll(".menu-pad-right");
			for (var i = 0; i < black_menu_right.length; i++) {
							black_menu_right[i].style.backgroundColor = "#000";
							black_menu_right[i].style.borderTop = "3px solid #ffffff";
							black_menu_right[i].style.borderBottom = "3px solid #ffffff";
							black_menu_right[i].style.borderLeft = "3px solid #ffffff";
							black_menu_right[i].style.color ="#fff";
}}());
			(function(){
			var black_footer= document.querySelectorAll("footer");
			for (var i = 0; i < black_footer.length; i++) {
							black_footer[i].style.backgroundColor = "#000";
							black_footer[i].style.borderTop = "3px solid #ffffff";
							black_footer[i].style.borderBottom = "3px solid #ffffff";
							black_footer[i].style.borderLeft = "3px solid #ffffff";
							black_footer[i].style.color ="#fff";
}}());
			(function(){
			var black_aabb= document.querySelectorAll(".aabb");
			for (var i = 0; i < black_aabb.length; i++) {
							black_aabb[i].style.color ="#fff";
}}());
			(function(){
			var black_img= document.createElement("img");
			var x = Math.floor((Math.random() * 50) + 0);
			black_img.src = "data/logo/black/black" + x + ".svg";
			black_img.style.borderTop = "3px solid #ffffff";
			black_img.style.borderBottom = "3px solid #ffffff";
			black_img.style.borderRight = "3px solid #ffffff";
			black_img.setAttribute("alt","Borders' Logo");
			document.getElementById("logo").appendChild(black_img);
}());
}	