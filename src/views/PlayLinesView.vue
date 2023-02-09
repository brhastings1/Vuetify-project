<template>
  <div class="lines bg-amber-lighten-5">
    <h1>This is the PlayLinesView Component</h1>
    <div class="pa-3">
      <v-btn @click="lineCounter.decreaseCounter" variant="outlined">decrease</v-btn>
      <span class="px-3"> Line counter: {{ lineCounter.count }}</span>
      <v-btn @click="lineCounter.increaseCounter" variant="outlined">increase</v-btn>
    </div>
    
    <div v-for="line in lines" :key="line.id" class="line"  :class="lineMatch(line.id) ? 'bg-amber-lighten-3' : 'bg-amber-lighten-5'">{{
      line.text_a
    }}, counter: {{ lineCounter.count }}, id: {{ line.id }}, {{ lineCounter.count === line.id }}</div>
  </div>
  
  <div class="pa-3">
    <v-btn @click="lineStyleCounter.decreaseCounter" variant="outlined">decrease</v-btn>
    <span class="px-3"> Line counter: {{ lineStyleCounter.count }}</span>
    <v-btn @click="lineStyleCounter.increaseCounter" variant="outlined">increase</v-btn>
  </div>


</template>

<script setup>
import { ref } from 'vue'
import { useLineCountStore } from '@/store/lineCount'
import { useLineStyleCountStore } from '@/store/lineCount'
import {lineData} from '@/assets/lineData'

const lines =ref(lineData)

const lineCounter = useLineCountStore()
const lineMatch = lineNo => {
  if (lineNo === lineCounter.count) {return true}
  return false
}

const lineStyleCounter = useLineStyleCountStore()
const lineStyleMatch = lineNo => {
  if (lineNo === lineStyleCounter.count) {return true}
  return false
}

</script>



<style scoped>
.line {
  margin: -2px 0 -2px 0;
  padding: 5px;
  border: solid 2px #FFCA28;
}

.lines {
  width: 500px;
  padding: 10px;
}
</style>
