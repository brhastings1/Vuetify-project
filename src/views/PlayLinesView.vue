<template>
  <div class="lines bg-amber-lighten-5">
    <h1>This is the PlayLinesView Component</h1>
    <div v-for="line in lines" :key="line.id" class="line">{{ line.text_a }}</div>
  </div>

</template>

<script setup>
import {ref} from 'vue'

const lines = ref([
{
  id: 1,
  text_a: 'This is the first line of basic text',
  text_b: 'This is the first line of more expanded text',
},
{
  id: 2,
  text_a: 'This is the second line of basic text',
  text_b: 'This is the second line of more expanded text',
},
{
  id: 3,
  text_a: 'This is the third line of basic text',
  text_b: 'This is the third line of more expanded text',
},
{
  id: 4,
  text_a: 'This is the forth line of basic text',
  text_b: 'This is the forth line of more expanded text',
},
{
  id: 5,
  text_a: 'This is the fifth line of basic text',
  text_b: 'This is the fifth line of more expanded text',
},
{
  id: 6,
  text_a: 'This is the sixth line of basic text',
  text_b: 'This is the sixth line of more expanded text',
},
])
  // 
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
