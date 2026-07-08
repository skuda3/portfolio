<script setup>
defineProps({
  label: String,
  id: String,
  type: { type: String, default: 'text' },
  required: { type: Boolean, default: false },
  isTextarea: { type: Boolean, default: false }
})
</script>

<template>
  <div>
    <label :for="id" class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">{{ label }}</label>
    <textarea
        v-if="isTextarea"
        :name="id"
        :id="id"
        rows="4"
        :required="required"
        class="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
    ></textarea>
    <input
        v-else
        :type="type"
        :name="id"
        :id="id"
        :required="required"
        class="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
    >
  </div>
</template>