<template>
  <div id="home">
    <main>
      <section>
        <h1>Carlos Mendonça</h1>
        <span>Programador, músico, aspirante a professor.</span>
      </section>

      <article>
        <ContentDoc />
      </article>
    </main>
    <aside>
      <NuxtImg src="https://avatars.githubusercontent.com/u/3859329" alt="Foto de perfil" />
      <nav>
        <NuxtLink to="/projects" class="projects">Projetos</NuxtLink>
        <NuxtLink to="/blog" class="blog">Blog</NuxtLink>
        <NuxtLink to="/about" class="about">Sobre mim</NuxtLink>
      </nav>
    </aside>
  </div>
</template>

<script setup>
useHead({
  title: 'Carlinhos'
});
</script>

<style src="~/assets/css/home.css" />
