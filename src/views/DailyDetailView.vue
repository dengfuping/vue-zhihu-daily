<template>
    <div class="daily-detail-view">
        <nav-menu active="daily"></nav-menu>
        <daily-detail></daily-detail>
    </div>
</template>

<script>
    import NavMenu from './../components/NavMenu';
    import DailyDetail from './../components/DailyDetail';

    export default {
        name: 'daily-detail-view',
        components: {
            NavMenu, DailyDetail
        },
        data () {
            return {

            }
        },
        computed: {

        },

    }
</script>


<style scoped>

</style>
