//値の代入
const holiDays = ['正月','成人の日','建国記念日','天皇誕生日','春分の日','昭和の日','憲法記念日','みどりの日','こどもの日','海の日','山の日','敬老の日','秋分の日','スポーツの日','文化の日','勤労感謝の日']

//for文で配列の値をすべて出力する
for (let i=0; i<=15; i++){
    console.log(holiDays[i]);
}

//while文で配列の値をすべて出力する
let i = 0

console.log(holiDays[i]);

while (i<=15){
    i += 1;
    console.log(holiDays[i]);
}
