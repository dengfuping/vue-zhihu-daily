<template>
    <div class="theme">
        <nav-menu active="theme"></nav-menu>
        <theme-list></theme-list>
    </div>
</template>

<script>
    import NavMenu from '../components/NavMenu';
    import ThemeList from '../components/ThemeList';

    export default {
        name: 'theme',
        components: {
            NavMenu, ThemeList
        },
        data () {
            return {

            }
        }
    }
</script>


<style scoped>

</style>
