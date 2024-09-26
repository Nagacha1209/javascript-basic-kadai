//関数の定義
const today = new Date();
const todaysData = () => {
    console.log(today.getUTCFullYear()+'年'+today.getUTCMonth()+'月'+today.getUTCDate()+'日');
}

//出力
todaysData();