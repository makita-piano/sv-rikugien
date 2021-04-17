<template>
  <nuxt-img v-if="pc" :src="src" :alt="alt" :width="width" :height="height" />
  <nuxt-img v-else :src="src" :alt="alt" :width="sm_width" :height="sm_height" />
</template>

<script>
  export default {
    name: 'img-imagin',
    props: {
      src: String,
      alt: String,
      sm_width: Number,
      sm_height: Number,
      width: Number,
      height: Number,
    },
    data() {
      return {
        pc: false
      }
    },
    mounted() {
      this.pc = (window.innerWidth > 768)
      if(this.sm_width == undefined){
        this.sm_width = this.width
      }
      if(this.sm_height == undefined){
        this.sm_height = this.height
      }
    },
  }
</script>