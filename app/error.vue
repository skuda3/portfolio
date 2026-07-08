<script setup>
defineProps({
  error: Object
})

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 font-sans text-center">
    <div class="space-y-4 max-w-sm">
      <h1 class="text-7xl font-black text-emerald-500 tracking-tight">404</h1>
      <h2 class="text-xl font-bold text-white">Stránka nebyla nalezena</h2>
      <p class="text-sm text-slate-400 leading-relaxed">
        Omlouvám se, ale tato adresa na mém portfoliu neexistuje. Možná jsem ji při refaktorizaci přesunul.
      </p>
      <div class="pt-4">
        <button @click="handleClearError" class="bg-slate-900 hover:bg-slate-800 text-emerald-400 font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl border border-slate-800 transition-colors">
          Zpět na úvodní stránku
        </button>
      </div>
    </div>
  </div>
</template>