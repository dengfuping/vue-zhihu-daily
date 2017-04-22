<template>
    <div class="theme-daily-list">
        <div class="card-row">
            <div class="card-col" v-for="story in themes.others" :key="story.id">
                <router-link :to="{name: 'ThemeItemView', params: {id: story.id}}">
                    <div class="card-item">
                        <img :src="story.thumbnail"/>
                        <p style="font-size: 12px; color: black">{{story.description}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'theme-list',
        data () {
            return {}
        },
        computed: {
            themes(){
                return this.$store.state.themes;
            }
        },
        mounted(){
            this.fetchThemes();
        },
        methods: {
            fetchThemes(){
                this.$store.dispatch('getThemesAction');
            }
        }
    }
</script>


<style scoped>
    a {
        text-decoration: none;
    }

    .card-row {
        margin-left: 15rem;
        margin-right: 15rem;
        display: flex;
        flex-wrap: wrap;
    }
    .card-col{
        margin: 3.5rem;
    }
    .card-item{
        width: 10rem;
    }
    .card-item img{
        width: 15rem;
    }
</style>
