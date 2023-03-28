// Percabangan bersarang, sebanarnya bisa kita buat lebih sederhana lagi dengan menggunakan operator logika.
// Contohnya:

var username = prompt("Username:");
var password = prompt("Password:");

if(username == "petanikode"){
    if(password == "kopi"){
        document.write("<h2>Selamat datang pak bos!</h2>");
    } else {
        document.write("<p>Password salah, coba lagi!</p>");
    }
} else {
    document.write("<p>Anda tidak terdaftar!</p>");
}

// Ini dapat kita buat lebih sederhana lagi dengan operator logika AND (&&).

var username = prompt("Username:");
var password = prompt("Password:");

if(username == "petanikode" && password == "kopi"){
    document.write("<h2>Selamat datang pak bos!</h2>");
} else {
    document.write("<p>Password salah, coba lagi!</p>");
}

// Namun, ini bukanlah solusi terbaik.
// Karena kita tidak bisa mengecek, apakah user teradaftar atau tidak.