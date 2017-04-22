<template>
    <div class="daily">
        <nav-menu active="daily"></nav-menu>
        <daily-list></daily-list>
    </div>
</template>

<script>
    import NavMenu from '../components/NavMenu';
    import DailyList from './../components/DailyList';

    export default {
        name: 'daily',
        components: {
            NavMenu, DailyList
        },
        data () {
            return {

            }
        }
    }
</script>


<style scoped>

</style>
