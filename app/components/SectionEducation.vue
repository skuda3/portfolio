<script setup>
import EducationItem from './EducationItem.vue'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section class="space-y-8">
    <SectionHeading>Vzdělání</SectionHeading>

    <div class="relative border-l-2 border-slate-800 ml-2 space-y-8">
      <EducationItem
          date="2023 — 01/2027 (Očekávané ukončení)"
          title="Mendelova univerzita v Brně"
          subtitle="Provozně ekonomická fakulta (PEF)"
          description="Obor Otevřená informatika"
          :active="true"
      />
      <EducationItem
          date="Předchozí studium"
          title="Soukromé gymnázium AD Fontes"
          subtitle="Jihlava"
      />
    </div>

    <div class="pt-4 space-y-4">
      <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider">Kurzy & Certifikáty</h4>

      <div class="space-y-3">
        <a href="/certs/Coursera%207FP8II7QTAYQ.pdf" target="_blank" class="block p-3 bg-slate-800/30 rounded-xl border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-800/50 transition-all duration-200 group">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">Google Professional Certificate</p>
              <p class="text-xs text-slate-400">Coursera</p>
            </div>
            <span class="text-xs text-slate-500 group-hover:text-slate-300">Otevřít PDF →</span>
          </div>
        </a>

        <div class="p-4 bg-slate-800/20 rounded-xl border border-slate-800/60 space-y-2">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">MathWorks MATLAB Certifikace</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <a href="/certs/MATLAB%20Onramp%20certificate.pdf" target="_blank" class="p-2 bg-slate-900/40 rounded border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors">Onramp Certificate</a>
            <a href="/certs/MATLAB%20Explore%20Data%20with%20MATLAB%20Plots%20certificate.pdf" target="_blank" class="p-2 bg-slate-900/40 rounded border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors">Explore Data with Plots</a>
            <a href="/certs/MATLAB%20Import%20Data%20from%20Multiple%20Files%20certificate.pdf" target="_blank" class="p-2 bg-slate-900/40 rounded border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors">Import Data from Multiple Files</a>
            <a href="/certs/MATLAB%20Plot%20Beyond%20the%20Second%20Dimension%20certificate.pdf" target="_blank" class="p-2 bg-slate-900/40 rounded border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors">Plot Beyond 2D</a>
            <a href="/certs/MATLAB%20Tables%20certificate.pdf" target="_blank" class="p-2 bg-slate-900/40 rounded border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors">MATLAB Tables</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>