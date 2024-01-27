<template>
    <main>
      <h2>{{title}}</h2>
    </main>
</template>
  
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js">

const url = axios.get("http://localhost:3000/")

// thenで成功した場合の処理
.then(() => {
    console.log("ステータスコード:", status);
})
// catchでエラー時の挙動を定義
.catch(err => {
    console.log("err:", err);
});
</script>

<style lang="scss">
main {
  height: calc(100vh - 152px);
  padding: 3% 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  margin: 0;
}
</style>