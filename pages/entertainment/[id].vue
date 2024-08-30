<template>
    <div>
        <h1>{{ news.content }}</h1>
    </div>
</template>

<script setup>
    const { id } = useRoute().params;
    const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(id)}&searchIn=title&apiKey=6963a7ab8e04414faaf88818fad733a9`;
    let { data: news } = await useFetch(apiUrl);
    console.log(news);
</script>