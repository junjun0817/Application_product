console.log("main.js!!");

// 1, Vue.jsで扱うデータを用意する
const myData = {
	appName: "今の時間",// アプリ名
	clock: "00:00:00"// 時計の文字列
}

// 2, Vue.jsの準備をする
const app = Vue.createApp({
	data(){
		return myData;// 扱うデータを指定する
	},
	created(){
		console.log("created!!");
		this.tick();// tick関数を実行する
	},
	methods:{
		tick(){// 現在時刻を取得する関数
			console.log("tick!!");

			const date = new Date();  // Dateオブジェクトを作る
			let h = date.getHours();  // 時
			let m = date.getMinutes();// 分
			let s = date.getSeconds();// 秒
			
			if(h < 10) h = "0" + h;   // 10未満であれば頭に0を付ける
			if(m < 10) m = "0" + m;
			if(s < 10) s = "0" + s;
			this.clock = h + ":" + m + ":" + s;// 文字列を結合する

			// 100ミリ秒経ったら1度だけ実行する
			setTimeout(()=>{
				this.tick();// tick関数を実行する
			}, 100);
		}
	}
});
app.mount("#app");// 3, Vue.jsを起動する