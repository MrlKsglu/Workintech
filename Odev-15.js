/* 
1. Bir dizideki en büyük sayıyı bulmak için reduce metodunu kullanın.

Örnek Dizi: [3, 5, 7, 2, 8, 6]

2 Bir dizideki en küçük sayıyı bulmak için reduce metodunu kullanın.

Örnek Dizi: [3, 5, 7, 2, 8, 6]
*/

function enBuyukSayi(arr)
{
    let enBuyuk=arr.sort((a,b)=>b-a);
    return enBuyuk[0];


}

function enKucukSayi(arr)
{
    let enKucuk=arr.sort((a,b)=>a-b);
    return enKucuk[0];
}

let dizi=[3, 5, 7, 2, 8, 6];

console.log(enBuyukSayi(dizi));
console.log(enKucukSayi(dizi));