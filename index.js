function panggilSort(){
  var angka = [2,39,76,50,9,7,41,2,24,1,16];
  console.log(angka)
  angka = angka.sort()
  console.log(angka)
  angka = angka.reverse()
  console.log(angka)
  angka = angka.filter(angka=>{
    return angka>10
  })
  console.log(angka)
  return angka
}
panggilSort()
