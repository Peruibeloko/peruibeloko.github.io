<script setup lang="ts">
definePageMeta({
  name: "month-listing",
  path: "/blog/:year(\\d{4})/:month(0[1-9]|1[0-2])"
});

const route = useRoute();
const { page = 1, size = 5 } = route.query as unknown as {
  page: number;
  size: number;
};

const query = queryContent("blog")
  .where({
    date: {
      $regex: `${route.params.year}-${route.params.month}-\\d{2}`
    }
  })
  .skip((page - 1) * size)
  .limit(size)
  .sort({ date: -1 })
  .params();

const MONTHS_BR: Record<string, string> = {
  "01": "janeiro",
  "02": "fevereiro",
  "03": "março",
  "04": "abril",
  "05": "maio",
  "06": "junho",
  "07": "julho",
  "08": "agosto",
  "09": "setembro",
  "10": "outubro",
  "11": "novembro",
  "12": "dezembro"
};
</script>
<template>
  Posts feitos em {{ MONTHS_BR[$route.params.month as string] }} de {{ $route.params.year }}
  <ContentList :query="query">
    <template #default="{ list }">
      <ul class="post-list">
        <li v-for="post in list" :key="post._path">
          <a :href="post._path?.replace('blog', 'blog/post')">{{ post.title }}</a>
          <time :datetime="post.date">{{
            `${new Date(post.date).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC"
            })}`
          }}</time>
        </li>
      </ul>
    </template>
    <template #not-found>
      <p>Nenhum post nesse período</p>
    </template>
  </ContentList>
</template>
