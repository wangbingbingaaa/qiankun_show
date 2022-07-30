<template>
    <div class="home">
        <div class="top-row">
            <Head-con></Head-con>
        </div>
        <div class="content">
            <Main-con></Main-con>

        </div>
    </div>
</template>

<script setup>
import HeadCon from './headCon.vue';
import MainCon from './mainCon.vue';
import { ref, reactive, onMounted } from "vue";

onMounted(() => {

});

</script>
<style scoped lang="scss">
.home {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    .top-row {
        height: 70px;
    }

    .content {
        flex: 1;
    }

}
</style>