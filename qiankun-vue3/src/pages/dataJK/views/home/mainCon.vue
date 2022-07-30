<template>
    <div class="content">
        <el-tabs type="border-card">
            <el-tab-pane :label="item" v-for="(item, index) in tabList" :key="index"></el-tab-pane>
        </el-tabs>
        <div class="table-row">


            <el-table :data="tableData" height="250" style="width: 100%">
                <el-table-column :prop="item.prop" v-for="(item, index) in tableRow" :key="index" :label="item.label"
                    :width="item.width" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
        </div>



    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

let tabList = ref([]);
let tableData = ref([])
let tableRow = ref([{
    prop: 'index',
    label: '序号',
    width: '100px'

}])
tabList = ['A系统-B系统', 'B系统-A系统']

onMounted(() => {

});

const insertName = () => {
}
</script>
<style scoped lang="scss">
.content {
    min-height: calc(100vh - 80px);
    // border: 1px solid #fff;
}
</style>