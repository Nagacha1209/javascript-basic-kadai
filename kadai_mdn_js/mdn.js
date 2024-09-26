//関数の定義
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1;
const day = today.getDate();

const todayDate = () =>{
    console.log(year+'年'+month+'月'+day+'日');
}

//出力
todayDate();
