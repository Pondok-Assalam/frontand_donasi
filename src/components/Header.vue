<template>
    <div>
        <!-- header -->
        <header>
            <div class="bg-green-700 text-white text-center fixed inset-x-0 top-0 z-10" style="background-color: #467F4D;">
                <div class="container mx-auto grid grid-cols-10 p-3 sm:w-full md:w-5/12">
                <div class="col-span-2 bg-white rounded-full h-10 w-10 p-0.5 mr-3 shadow-sm">
                    <router-link :to="{name: 'home'}">
                        <img src="../assets/images/assalam.png" class="inline-block">
                    </router-link>
                </div>
                <div class="col-span-8">
                    <input type="text" @click="linkToSearch" v-model="search" @keyup="searchQuery" class="appearance-none w-full bg-green-900 rounded-full h-7 shadow-md placeholder-white focus:outline-none focus:placeholder-white focus:bg-white focus-within:text-white p-5" style="background-color: #34663A;"
                    placeholder="Cari yang ingin kamu bantu...">
                </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
  
//hook vue
  import { ref } from 'vue'
  
  //hook vue router
  import { useRouter } from 'vue-router'
  
  //hook vuex
  import { useStore } from 'vuex'
  
  export default {

    name: 'HeaderComponent',

    setup() {

      //router
      const router = useRouter()

      //store
      const store = useStore()

      //state seacrh
      const search = ref(null)

      //queryString
      function searchQuery() {
        store.dispatch('campaign/searchCampaign', search.value)
      }

      //redirect to route search
      function linkToSearch() {
        router.push({
          name: 'search'
        })
      }

      return {
        search,         // <-- state search
        linkToSearch,   // <-- method linkToSearch
        searchQuery     // <-- method searchQuery
      }
    }

  }
</script>

<style>

</style>