function Draw5(no,div1,canv1,div2,canv2,nourut){
	function RandomMyArray(Arr){
		/* ---- RANDOM isi Array ---- */
		for (var i=0; i<Arr.length; i++){
			var r = Math.floor(Math.random() * Arr.length);
			var a = Arr[i];
			Arr[i] = Arr[r];
			Arr[r] = a;
		}
		return Arr;
	}
	//https://angel-rs.github.io/css-color-filter-generator/
	var jadi_dasar = 	"none";
	var jadi_hitam = 	"brightness(0) saturate(100%)";
	var jadi_putih = 	"brightness(0) saturate(100%) invert(100%) sepia(4%) saturate(2%) hue-rotate(109deg) brightness(104%) contrast(101%)";
	var jadi_merah = 	"brightness(0) saturate(100%) invert(27%) sepia(73%) saturate(6772%) hue-rotate(354deg) brightness(89%) contrast(130%)";
	var jadi_kuning = 	"brightness(0) saturate(100%) invert(99%) sepia(99%) saturate(5076%) hue-rotate(357deg) brightness(101%) contrast(105%)";
	var jadi_hijaumuda = 	"brightness(0) saturate(100%) invert(69%) sepia(81%) saturate(4659%) hue-rotate(83deg) brightness(117%) contrast(126%)";
	var jadi_biru = 	"brightness(0) saturate(100%) invert(8%) sepia(100%) saturate(6898%) hue-rotate(246deg) brightness(96%) contrast(145%)";
	var jadi_ungu = 	"brightness(0) saturate(100%) invert(21%) sepia(56%) saturate(4894%) hue-rotate(292deg) brightness(111%) contrast(134%)";
	var jadi_birumuda = "brightness(0) saturate(100%) invert(92%) sepia(100%) saturate(6302%) hue-rotate(158deg) brightness(105%) contrast(93%)";
	var jadi_oren = 	"brightness(0) saturate(100%) invert(64%) sepia(14%) saturate(6095%) hue-rotate(359deg) brightness(101%) contrast(101%)";
	var jadi_merahmuda = 	"brightness(0) saturate(100%) invert(86%) sepia(88%) saturate(7490%) hue-rotate(268deg) brightness(112%) contrast(93%)";
	var jadi_coklat = 	"brightness(0) saturate(100%) invert(66%) sepia(59%) saturate(268%) hue-rotate(356deg) brightness(90%) contrast(93%)";
	var jadi_hijau = "brightness(0) saturate(100%) invert(33%) sepia(96%) saturate(542%) hue-rotate(74deg) brightness(101%) contrast(85%)";
	
	
	var arcolor = [	[jadi_merah,"merah"],
					[jadi_kuning,"kuning"],
					[jadi_hijaumuda,"hijau muda"],
					[jadi_biru,"biru"],
					[jadi_ungu,"ungu"],
					[jadi_birumuda,"biru muda"],
					[jadi_oren,"oren"],
					[jadi_merahmuda,"merah muda"],
					[jadi_coklat,"coklat"],
					[jadi_hijau,"hijau"]]
	arcolor=RandomMyArray(arcolor);
	arcolor=[jadi_dasar].concat(arcolor);
	arcolor=arcolor.concat([jadi_hitam]);
	
	var arpalet = "data:image/png;base64,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";			
	const canvas1 = document.getElementById(canv1);
	const ctx1 = canvas1.getContext('2d');
	const canvas2 = document.getElementById(canv2);
	const ctx2 = canvas2.getContext('2d');
	
	
	ctx1.reset();
	ctx2.reset();
	canvas1.width = 700;
	canvas1.height = 490;
	canvas2.width = 700;
	canvas2.height = 490;
	const divisi1 = document.getElementById(div1);
	const divisi2 = document.getElementById(div2);
	
	var arimg
	if(nourut!==0){
		//get Array image from file dataimg.js dan palet []
		arimg = Get5Base64(no-1);
	
		divisi1.innerHTML = "Soal "+nourut;
		divisi2.innerHTML = "Jawaban "+nourut;
	}else{
		//get Array image from file dataimg.js dan palet []
		arimg = Get5Base64(no-1);
		
		divisi1.innerHTML = " Bagian 5 (Pixel Angka) - Soal "+no;
		divisi2.innerHTML = "Jawaban "+no;
	}
	
	
	var selesai;
	var startDraw = drawAll();
	async function drawAll() {
		var fcek = [false,false,false,false,false,false,false,false];
		//base 1 --> ambil gambar untuk diwarnain
		//base 2 --> warna + img palet
		var arrbase1 = [];
		var arrpalet = [];
		var arrbase2 = [];
		var maxlength = arimg.length-1;
		for(var i=0;i<arimg.length;i++){
			arrbase1[i] = arimg[i];
			if(i<arimg.length-2){
				arrpalet[i] = arpalet;
			}
		}
		
		arrbase2 = arrbase1.concat(arrpalet);
		const images = arrbase2.map(src => {
			return new Promise(resolve => {
				const img = new Image();
				img.onload = () => resolve(img);
				img.src = src;
			});
		});
		
		ctx1.fillStyle = "white";
		ctx1.fillRect(0, 0, 700, 500);
		ctx2.fillStyle = "white";
		ctx2.fillRect(0, 0, 700, 500);
		
		const loadedImages = await Promise.all(images);
		loadedImages.forEach((img, index) => {
			ctx1.restore();
			if(index==0){
				ctx1.filter = arcolor[index][0];
				ctx2.filter = arcolor[index][0];
				ctx1.drawImage(img, 0, 0);
				ctx2.drawImage(img, 0, 0);
				ctx2.filter = "none";
				ctx2.save();
			}else if(index<maxlength){
				ctx2.filter = arcolor[index][0];
				ctx2.drawImage(img, 0, 0);
				ctx2.filter = "none";
				ctx2.save();
			}else if(index==maxlength){
				ctx1.filter = "none";
				ctx1.drawImage(img, 0, 0);
				ctx1.filter = "none";
				ctx1.save();
			}else{
				//index =  9 - 16
				ctx1.filter = arcolor[index-maxlength][0];
				ctx1.drawImage(img, 518, 80+30*(index-maxlength));
				ctx1.font = "18px Arial";
				ctx1.filter = "none";
				ctx1.fillStyle = "black";
				ctx1.textAlign = "center";
				ctx1.fillText((index-maxlength),530, 100+30*(index-maxlength));
				ctx1.textAlign = "left";
				ctx1.fillText(": "+arcolor[(index-maxlength)][1], 530+25, 100+30*(index-maxlength));
				ctx2.save();
			}
			// menunggu
			setTimeout(() => {
				//console.log("1 seconds have passed. Executing action now.");
				Cek(index);
			}, 1000); // 5000ms = 5 seconds
		});
		
		function Cek(n){
			var count=0;
			fcek[n] = true;
			for(var i=0;i<16;i++){
				if(fcek[i]) count++;
			}
			if(count==16){
				selesai=true;
				//console.log("selesai="+selesai);
			}
		}
		return 1;
	}
}