<template>
    <div>
        <div class="top-row bg">
            监视系统
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

</script>
<style lang="scss" scoped>
.top-row {
    font-size: 26px;
    font-weight: 600;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #fff;
    letter-spacing: 10px;
    text-shadow: 2px 3px 1px #06090f
}

.bg {
    background: url(../../assets/img/top5.png);
    background-size: 100%;
    width: 100%;
    background-repeat: no-repeat;
    height: 100%;
}
</style>