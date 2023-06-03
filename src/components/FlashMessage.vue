<script setup>
const props = defineProps({
  flashMessage: Object
})
</script>
<template>
  <div>
    <div v-if="flashMessage" class="flex fixed z-10 top-0 left-0 w-full h-full bg-black/50 transition-opacity">
      <div class="grid place-items-center w-80 h-80 bg-white border border-black/80 mx-auto my-auto py-5 px-7 rounded-lg shadow-black transition duration-100 ease-out">
        <div>
          <svg class="w-24 h-24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill="#45f248" fill-rule="evenodd" d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"/>
          </svg>
          <div class="text-xl font-bold text-green-500">
          {{ flashMessage.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



