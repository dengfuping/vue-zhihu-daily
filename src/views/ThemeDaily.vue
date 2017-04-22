<template>
    <div class="theme-daily">
        <nav-menu active="theme"></nav-menu>
        <theme-item-detail></theme-item-detail>
    </div>
</template>

<script>
    import NavMenu from '../components/NavMenu';
    import ThemeItemDetail from './../components/ThemeItemDetail';

    export default {
        name: 'theme-daily',
        components: {
            NavMenu, ThemeItemDetail
        },
        data () {
            return {

            }
        }
    }
</script>


<style scoped>

</style>
