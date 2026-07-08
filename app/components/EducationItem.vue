<script setup>
defineProps({
  date: String,
  title: String,
  subtitle: String,
  description: String,
  active: { type: Boolean, default: false }
})
</script>

<template>
  <div class="relative pl-6 group">
    <div
        class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ring-4 ring-slate-900 transition-all duration-200"
        :class="active ? 'bg-emerald-500 group-hover:scale-125' : 'bg-slate-700 group-hover:bg-emerald-500'"
    ></div>
    <span class="text-xs font-semibold text-slate-500">{{ date }}</span>
    <h3 class="text-lg font-bold text-white mt-1 transition-colors duration-200" :class="{ 'group-hover:text-emerald-400': active }">
      {{ title }}
    </h3>
    <p class="text-sm text-slate-300">{{ subtitle }}</p>
    <p v-if="description" class="text-xs text-slate-400 mt-1">{{ description }}</p>
  </div>
</template>