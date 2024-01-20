<template>
  <h1 class="main-title">
  MEMOしよう...
  </h1>
<!--検索-->
    <div class="form-memo">
      <form action="#" class="search-form-2">
        <label>
            <input type="text" placeholder="記入してください">
        </label>
        <router-link to="/AfterTreatment">
          <button v-on:click="NextScreen" type="submit" aria-label="検索">
        </button>
        </router-link>
      </form>
    </div>
</template>

<script>
export default {
  methods: {
    home(){
      this.router.push('/AfterTreatment')
    }
  }
}
</script>

<style lang="scss">

.main-title {
  color: #18913c;
  font-size: 50px;
  text-align: center;
  padding-top: 225px;
}

.form-memo {

}

.search-form-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 25px;
}

.search-form-2 input {
    width: 700px;
    height: 45px;
    padding: 5px 15px;
    border: none;
    border-radius: 3px 0 0 3px;
    box-sizing: border-box;
    background-color: #a6f2c3;
    font-size: 1em;
    outline: none;
}

.search-form-2 input::placeholder {
    color: #18913c;
}

.search-form-2 button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 45px;
    border: none;
    border-radius: 0 3px 3px 0;
    background-color: #39db3b;
    cursor: pointer;
}

.search-form-2 button::after {
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z' fill='%23fff'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    content: '';
}
</style>