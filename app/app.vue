<script setup>
useHead({
  title: 'David Skucius — Junior Software & Web Developer',
  meta: [
    {
      name: 'description',
      content: 'Osobní portfolio softwarového a webového vývojáře. Ukázky reálných a školních projektů v jazycích Java, Vue.js, Swift a Kotlin. Jihlava / Brno.'
    },
    {
      name: 'keywords',
      content: 'David Skucius, softwarový vývojář, webový vývojář, developer, Java, Vue.js, Swift, Kotlin, Spring Boot, Android, iOS, portfolio, Brno, Jihlava'
    },
    { property: 'og:title', content: 'David Skucius — Software & Web Developer' },
    { property: 'og:description', content: 'Osobní portfolio vývojáře se zaměřením na full-stack, mobilní a desktopové aplikace.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://skucius.cz' },
    { property: 'og:site_name', content: 'David Skucius Portfolio' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  htmlAttrs: {
    lang: 'cs'
  }
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">

    <TheHeader />

    <main class="max-w-5xl mx-auto py-14 px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
      <SectionEducation />
      <SectionTechStack />
    </main>

    <SectionProjects />

    <SectionContact />

    <TheFooter />

  </div>
</template>

<style>
html, body {
  background-color: #020617;
}
</style>