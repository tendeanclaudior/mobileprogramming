// 1. Destructuring (Array & Object)

// Array
let Kelas = ["Matematika", "Fisika", "Kimia"];

let [Kelas1, Kelas2, Kelas3] = Kelas;
console.log(Kelas1);
console.log(Kelas2);
console.log(Kelas3);

let [namaDepan, , noReg, fakultas, , ] = ["Inka", "P", "S2194313", "Kedokteran", "Vini"];
console.log(namaDepan);
console.log(noReg);
console.log(fakultas);
// elemen kedua ("P") dan elemen kelima ("Vini") ridak disimpan ke variavel element karena mengosongkan tempat kedua dan kelima

// Object
let Student = {
    firstName : 'Tomy',
    faculty : 'System Information',
    noReg : 'S2483932',
    yourAge : 20
};

let { firstName, faculty, noReg = '', yourAge: Age = 14 } = Student;
console.log(noReg);
console.log(Age);
// kami menetapkan string kosong ke noReg variabel saat objek tidak memiliki noReg properti.
// kami menetapkan yourAge properti ke age variabel denga nilai default 14


// 2. Destructuring dengan mengambil sebagian item (Array & Object)

// Array
function Hewan(makan = "makannya", durasi = "sembarangan", keluar = "Hutan") { 
    return `Gajah ${makan} tidak boleh ${durasi} jika diluar ${keluar}`;
}
Hewan("Makan", "10 Menit");

// Object
function printAddress({ streetName, houseNumber, city }) {
    return `${streetName} No. ${houseNumber}, ${city}`;
}
  
let address = printAddress({ streetName: 'Jalan Airmadidi', houseNumber: '12A', city: 'Modoinding' });
console.log(address);

// 3. Destructuring dengan menggunakan default value (Array & Object)

// Array
let arr = [0, 1, 2, 3];
let a, b, c, d, e;

[a, b, c, d, e=50] = arr;
console.log(e);

// Object
function Student({ firstName = 'Jalan X', noReq = 'S11910260', city = 'Kota Y' }) {
    return `${firstName} noReg ${noReq}, ${city}`;
  }
  
let address = Student({ firstName: 'Claudio', city: 'Manado' });
console.log(address);

// 4.Destructuring dengan menggunakan rest operator (Array & Object)

// Array
let fruits = (buah1, buah2, ...buah) => {
    console.log("Buah Pertama", buah1);
    console.log("Buah Kedua", buah2);
    console.log("Sisa Buah", buah);
}
fruits("Semangka", "Apel", "Melon", "Alpukat", "Pisang");

let number= [0, 1, 3, 4, 5, 6];

let [a, b, ...rest] = number;
console.log(a);
console.log(b);
console.log(rest);

// Object
let obj = { a: 0, b: 1, c: 2, d: 3 };

let { a, b, ...rest} = obj;
console.log(a);
console.log(b);
console.log(rest);
  