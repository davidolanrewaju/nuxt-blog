<template>
    <div>
        <h1>Product Details for {{ id }}</h1>
    </div>
</template>

<script setup>
    const { id } = useRoute().params; 
</script>