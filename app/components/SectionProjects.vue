<template>
  <section class="max-w-5xl mx-auto px-6 py-12 border-t border-slate-800/60 space-y-8">
    <h2 class="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md inline-block">
      Vybrané projekty
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div class="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div class="flex justify-between items-start gap-4">
            <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
              Valentýnské překvapení
            </h3>
            <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-md border border-emerald-500/20">Live</span>
          </div>
          <p class="mt-3 text-sm text-slate-300 leading-relaxed">
            Interaktivní jednostránková webová aplikace s responzivním designem a animovaným efektem utíkajícího tlačítka. Nasazeno na vlastní doméně s automatickým deploymentem.
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md">Vue.js</span>
            <span class="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md">Tailwind CSS</span>
            <span class="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md">Cloudflare DNS</span>
          </div>
        </div>
        <div class="mt-6 flex gap-4 text-sm font-medium">
          <a href="https://github.com/skuda3/valentine" target="_blank" class="text-slate-400 hover:text-white transition-colors duration-200">GitHub →</a>
          <a href="https://skucius.cz" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors duration-200">Otevřít web ooо</a>
        </div>
      </div>

      <div class="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div class="flex justify-between items-start gap-4">
            <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
              Školní / Semestrální projekt
            </h3>
            <span class="px-2 py-0.5 bg-slate-800 text-slate-400 text-xs font-medium rounded-md border border-slate-700/50">Repository</span>
          </div>
          <p class="mt-3 text-sm text-slate-300 leading-relaxed">
            Ukázka backendové nebo desktopové aplikace přenesené ze školního GitLabu. Implementace objektově orientovaného návrhu a unit testů.
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md">Java</span>
            <span class="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md">Spring Boot</span>
            <span class="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md">Unit Testing</span>
          </div>
        </div>
        <div class="mt-6 flex gap-4 text-sm font-medium">
          <a href="https://github.com/skuda3" target="_blank" class="text-slate-400 hover:text-white transition-colors duration-200">GitHub →</a>
        </div>
      </div>

    </div>
  </section>
</template>