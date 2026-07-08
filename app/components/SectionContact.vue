<script setup>
import FormInput from './FormInput.vue'
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800/60 text-center space-y-8">
    <div class="space-y-3">
      <h2 class="text-2xl font-black text-white sm:text-3xl">Zaujal jsem vás?</h2>
      <p class="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
        Hledáte zapáleného juniora do týmu, nebo potřebujete pomoct s projektem? Napište mi přímo odsud, budu se těšit na spolupráci.
      </p>
    </div>

    <form action="https://api.web3forms.com/submit" method="POST" class="mt-8 max-w-md mx-auto text-left space-y-4">
      <input type="hidden" name="access_key" value="TVŮJ_ZKOPIROVANÝ_KLÍČ">

      <FormInput id="name" label="Jméno / Firma" :required="true" />
      <FormInput id="email" label="E-mailová adresa" type="email" :required="true" />
      <FormInput id="message" label="Vaše zpráva" :isTextarea="true" :required="true" />

      <button type="submit" class="w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-colors duration-200 shadow-lg shadow-emerald-500/10">
        Odeslat zprávu
      </button>
    </form>
  </section>
</template>