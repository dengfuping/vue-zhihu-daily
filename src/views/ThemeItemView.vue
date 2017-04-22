<template>
    <div class="theme-item-view">
        <nav-menu active="theme"></nav-menu>
        <theme-item-list></theme-item-list>
    </div>
</template>

<script>
    import NavMenu from './../components/NavMenu';
    import ThemeItemList from '../components/ThemeItemList';

    export default {
        name: 'theme-item-view',
        components: {
            NavMenu, ThemeItemList
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
