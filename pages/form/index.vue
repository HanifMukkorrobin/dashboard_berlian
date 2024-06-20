<template>
  <div class="p-10">
    <div class="text-lg font-semibold text-2B7FBC" @click="$router.push('/')">
      Form Input Data Dashboard
    </div>
    <div v-for="items in Object.keys(form)" :key="items" class="grid grid-cols-12 gap-4 mt-2">
      <div class="col-span-2 flex items-center">
        <div>
          {{items.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}}
        </div>
      </div>
      <div class="col-span-3">
        <div class="flex items-center gap-2">
          <div>:</div>
          <div class="relative mt-2 rounded-md shadow-sm flex-grow">
            <input v-model="form[items]" type="text" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
      </div>
    </div>
    <button class="mt-4 bg-2B7FBC text-FFFFFF rounded-md py-2 px-4" @click="simpanForm">Submit</button>
  </div>
</template>
<script>
export default {
  name: 'FormInputDataDashboard',
  data: () => ({
    form: {
      transferFg: null,
      fgInvLevel: null,
      absenteeismRate: null,
      p1: null,
      p2: null,
      ip: null,
      rubber: null,
      stockfit: null,
    }
  }),
  mounted() {
    this.form = {...this.$store.getters.getData}
  },
  methods: {
    simpanForm() {
      this.$store.dispatch('saveData', this.form)
      this.$router.push('/')
    }
  }
}
</script>