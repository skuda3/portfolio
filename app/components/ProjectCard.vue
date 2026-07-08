<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
  status: String,
  statusType: { type: String, default: 'default' },
  github: String,
  live: String
})
</script>
<template>
  <div class="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group">
    <div>
      <div class="flex justify-between items-start gap-4">
        <h3 class="text-base font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
          {{ title }}
        </h3>
        <span
            class="px-2 py-0.5 text-[11px] font-medium rounded border whitespace-nowrap"
            :class="{
            'bg-emerald-500/10 text-emerald-400 border-emerald-500/20': statusType === 'live',
            'bg-slate-800 text-slate-400 border-slate-700/50': statusType === 'default'
          }"
        >
          {{ status }}
        </span>
      </div>
      <p class="mt-2 text-xs text-slate-400">{{ subtitle }}</p>
      <p class="mt-2 text-sm text-slate-300 leading-relaxed">{{ description }}</p>
      <div class="mt-4 flex flex-wrap gap-1.5">
        <slot />
      </div>
    </div>
    <div class="mt-6 flex gap-4 text-xs font-medium border-t border-slate-800/60 pt-4">
      <a v-if="github" :href="github" target="_blank" class="text-slate-400 hover:text-white transition-colors">GitHub →</a>
      <a v-if="live" :href="live" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors">Přejít na web →</a>
    </div>
  </div>
</template>