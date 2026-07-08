<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})
</script>

<template>
  <span
      class="px-2.5 py-1 rounded-md text-xs font-medium border transition-all duration-200 whitespace-nowrap"
      :class="{
      'bg-slate-800/60 text-slate-200 border-slate-700/30 hover:scale-105 hover:bg-slate-800': variant === 'default',
      'bg-amber-500/10 text-amber-400 border-amber-500/20': variant === 'amber',
      'bg-blue-500/10 text-blue-400 border-blue-500/20': variant === 'blue'
    }"
  >
    <slot />
  </span>
</template>