<script setup>
import ProjectCard from './ProjectCard.vue'
import BaseBadge from './BaseBadge.vue'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section class="max-w-5xl mx-auto px-6 py-12 border-t border-slate-800/60 space-y-8">
    <SectionHeading>Vybrané projekty</SectionHeading>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <ProjectCard
          title="Gambrinus Street"
          subtitle="První mimoškolní projekt & Komerční praxe"
          description="Čistě frontendová webová prezentace pro restauraci. Architektura využívá externí úložiště GitHub Gists pro dynamické asynchronní načítání a správu strukturovaných JSON dat (stálé menu, nápojový lístek a denní menu)."
          status="Live"
          statusType="live"
          github="https://github.com/skuda3/gambrinus-street"
          live="https://www.gstreet.cz/"
      >
        <BaseBadge>Vue.js</BaseBadge>
        <BaseBadge>GitHub Gists</BaseBadge>
        <BaseBadge>JSON Data</BaseBadge>
      </ProjectCard>

      <ProjectCard
          title="Interaktivní mapa odboje"
          subtitle="Projekt pro CHH Přibyslav"
          description="Klasická desktopová aplikace pro operační systém Windows vytvořená pro výstavní účely. Obsahuje interaktivní mapové podklady České republiky s podporou pro dynamické filtrování historických dat o odbojářích z řad hasičstva podle vybraných okresů."
          status="Windows App"
          github="https://github.com/skuda3/hasicsky-odboj"
      >
        <BaseBadge>Python</BaseBadge>
        <BaseBadge>Data Filtering</BaseBadge>
        <BaseBadge>Desktop UI</BaseBadge>
      </ProjectCard>

      <ProjectCard
          title="Enterprise aplikace (EA)"
          subtitle="Robustní firemní architektura"
          description="Komplexní podnikový systém pro detailní trasování a správu objednávek. Obsahuje databázové migrace, izolované servisní vrstvy a propracovaný backend s důrazem na robustnost dat."
          status="Full-Stack"
          github="https://github.com/skuda3/EA"
      >
        <BaseBadge>Spring Boot</BaseBadge>
        <BaseBadge>Vue.js</BaseBadge>
        <BaseBadge variant="amber">KeyCloak</BaseBadge>
        <BaseBadge variant="blue">Automatizované testy (Unit & Integrační)</BaseBadge>
      </ProjectCard>

      <ProjectCard
          title="Backend webové aplikace (WAB)"
          subtitle="Monitorovací systém"
          description="Aplikace pro sběr dat ze senzorů a distribuci automatických upozornění. Součástí projektu je klientské rozhraní a samostatný skript simulující chování reálných IoT čidel v síti."
          status="IoT / Web"
          github="https://github.com/skuda3/WAB"
      >
        <BaseBadge>Java</BaseBadge>
        <BaseBadge>Vue.js</BaseBadge>
        <BaseBadge variant="amber">JWT Auth</BaseBadge>
        <BaseBadge variant="blue">Automatizované testy</BaseBadge>
      </ProjectCard>

      <ProjectCard
          title="Třídění odpadu (VA2)"
          subtitle="Chytrá mobilní aplikace"
          description="Aplikace pro klasifikaci odpadu. Pomocí analýzy fotografie正式 rozpozna objekt a urči správný druh kontejneru. Integruje kompletní mapové podklady všech sběrných nádob v Brně."
          status="Android"
          github="https://github.com/skuda3/VA2"
      >
        <BaseBadge>Android SDK</BaseBadge>
        <BaseBadge>Kotlin</BaseBadge>
        <BaseBadge>Computer Vision</BaseBadge>
        <BaseBadge variant="amber">Firebase</BaseBadge>
        <BaseBadge variant="blue">Automatizované testy</BaseBadge>
      </ProjectCard>

      <ProjectCard
          title="Knihovna her (WAF)"
          subtitle="Komunitní katalog"
          description="Webový katalog her zaměřený na pokročilé klientské rozhraní vybudované na komponentovém frameworku Vuetify. Uživatelům umožňuje procházení, vyhledávání a hodnocení titulů."
          status="Frontend"
          github="https://github.com/skuda3/WAF"
      >
        <BaseBadge>Vue.js</BaseBadge>
        <BaseBadge>Vuetify</BaseBadge>
        <BaseBadge variant="amber">Firebase</BaseBadge>
        <BaseBadge variant="blue">Automatizované testy</BaseBadge>
      </ProjectCard>

      <ProjectCard
          title="iOS Školní Angry Birds (VI2)"
          subtitle="Mobilní hra s fyzikálním enginem"
          description="Fyzikální 2D hra vyvíjená pro systém iOS tematicky zasazená do akademického prostředí. Implementuje detekce kolizí, trajektorie letu a herní mechaniky inspirované Angry Birds."
          status="iOS"
          github="https://github.com/skuda3/VI2"
      >
        <BaseBadge>Swift</BaseBadge>
        <BaseBadge>SpriteKit</BaseBadge>
        <BaseBadge variant="blue">Automatizované testy</BaseBadge>
      </ProjectCard>

      <ProjectCard
          title="Mobilní E-shop (VI1)"
          subtitle="E-commerce aplikace"
          description="Komplexní klientská aplikace elektronického obchodu inspirovaná strukturou velkých e-shopů (Alza). Zpracovává ceníky, správu nákupního košíku a katalogizaci produktů."
          status="iOS"
          github="https://github.com/skuda3/VI1"
      >
        <BaseBadge>Swift</BaseBadge>
        <BaseBadge>UIKit / SwiftUI</BaseBadge>
        <BaseBadge variant="amber">Firebase Auth</BaseBadge>
        <BaseBadge variant="blue">Automatizované testy</BaseBadge>
      </ProjectCard>

      <ProjectCard
          title="Tréninkový manažer (VA1)"
          subtitle="Fitness asistent"
          description="Nástroj pro návrh, strukturování a detailní logování vlastních silových tréninků v posilovně. Podporuje perzistentní ukládání dat a správu uživatelských profilů."
          status="Android"
          github="https://github.com/skuda3/VA1"
      >
        <BaseBadge>Android SDK</BaseBadge>
        <BaseBadge>Kotlin / Java</BaseBadge>
        <BaseBadge variant="amber">Firebase Auth</BaseBadge>
        <BaseBadge variant="blue">Automatizované testy</BaseBadge>
      </ProjectCard>

    </div>
  </section>
</template>