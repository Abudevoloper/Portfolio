<template>
    <MedianCol/>
    <router-view/>
    <FullDisplay/>

</template>

<script>


import MedianCol from "@/components/HeaderList";
import FullDisplay from "@/components/AboutList";

export default {
    name: 'App',
    components: {FullDisplay, MedianCol}
}
</script>

<style>
body {

}
</style>