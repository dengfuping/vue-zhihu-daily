<template>
    <div class="about">
        <nav-menu active="about"></nav-menu>
        <about></about>
    </div>
</template>

<script>
    import NavMenu from '../components/NavMenu';
    import About from './../components/About';

    export default {
        name: 'about-view',
        components: {
            NavMenu, About
        },
        data () {
            return {

            }
        }
    }
</script>


<style scoped>

</style>
