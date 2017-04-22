<template>
    <div class="nav-menu">
        <el-menu theme="dark" :default-active="activeNav" mode="horizontal" @select="handleSelect">
            <el-menu-item index="daily">首页</el-menu-item>
            <el-menu-item index="theme">主题日报</el-menu-item>
            <el-menu-item index="about">关于</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'nav-menu',
        props: ['active'],
        data () {
            return {

            }
        },
        computed: {
            activeNav(){
                return this.active;
            }
        },
        mounted() {

        },
        methods: {
            handleSelect(key) {
                this.$router.push({path: '/'});
                this.$router.push({path: key});
            }
        }
    }
</script>


<style scoped>

</style>
