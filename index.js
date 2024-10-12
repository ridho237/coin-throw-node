// Fungsi utama yang menghasilkan simulasi lempar koin dengan menggunakan metode Linear Congruential Generator
const congruenMul = (a, x0, m, randomNum) => {
	// Inisialisasi array x dengan elemen pertama x0 (nilai awal)
	let x = [x0];

	// Loop untuk menghasilkan 'randomNum' banyaknya angka acak berdasarkan metode kongruen
	for (let n = 1; n <= randomNum; n++) {
		// Menghitung xn dengan rumus: xn = (a * x[n-1]) % m
		let xn = (a * x[n - 1]) % m;
		// Tambahkan hasil ke dalam array x
		x.push(xn);
	}

	// Menghapus nilai awal (x0) dari array x
	x = x.slice(1);

	console.log(x);

	// Menghitung nilai r = xn / m untuk setiap elemen di x
	const r = x.map((val) => val / m);

	// Mengubah nilai r menjadi 'G' jika >= 0.5 (anggap sebagai gambar), atau 'A' jika < 0.5 (anggap sebagai angka)
	const numOrPic = r.map((val) => (val >= 0.5 ? 'G' : 'A'));

	// Menghitung jumlah 'A' (angka) dari hasil simulasi
	const number = numOrPic.filter((val) => val === 'A').length;

	// Menghitung jumlah 'G' (gambar) dari hasil simulasi
	const picture = numOrPic.filter((val) => val === 'G').length;

	// Menghitung probabilitas kemunculan 'A' (angka) dalam persentase
	const probNum = (number / numOrPic.length) * 100;

	// Menghitung probabilitas kemunculan 'G' (gambar) dalam persentase
	const probPic = (picture / numOrPic.length) * 100;

	// Menampilkan hasil simulasi
	console.log('Lempar Coin');
	console.log('-'.repeat(28)); // Garis pembatas
	console.log(`Diketahui X\t= ${numOrPic.length}`); // Jumlah observasi
	console.log(`Angka\t= ${number}`); // Frekuensi angka
	console.log(`Gambar\t= ${picture}`); // Frekuensi gambar
	console.log(`Probability Angka\t= ${probNum.toFixed()}%`); // Probabilitas angka dalam %
	console.log(`Probability Gambar\t= ${probPic.toFixed()}%`); // Probabilitas gambar dalam %
};

// Memanggil fungsi dengan parameter: a=67, x0=129, m=2048, randomNum=1000000
congruenMul(67, 129, 2048, 1000000);
