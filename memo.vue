HeaderItem

<template>
    <div class="menu">
        <h1>{{ now }}</h1>
        <h1>{{ nowMessage }}</h1>
        <button @click="assignment1()">{{ "切り替え1" }}</button>
        <button @click="assignment2()">{{ "切り替え2" }}</button>
    </div>
</template>

<script>
import { MAX_COUNT } from '@/common'; 


// export 輸出・単体でも可、複数可。
// export default 一つしか使えない。
// data 変数

export default {
    data () {
        return {
            title1: "押されてねえお",
            title2: "これがまた押されたんだなあ、、、",
            message: MAX_COUNT,
        }
    },
    // ユーザーの操作によって表示の切り替え
    computed: {
              now () {
                  return new Date()
              },
              nowMessage () {
                  return this.message
              }
          },
// methods関数
    methods: {
        assignment1 () {
            if(this.message !== "押されてねえお") this.message = this.title1
        },
        assignment2 () {
            if(this.message !== "これがまた押されたんだなあ、、、") this.message = this.title2
        }
    }

}
</script>

<style lang="scss">
.menu {
    background-color: rgb(56, 192, 56);
}
h1{
    color: rgb(255, 255, 255)
}
</style>




defo

