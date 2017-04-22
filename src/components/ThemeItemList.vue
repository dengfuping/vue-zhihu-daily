<template>
    <div class="theme-item-list">
        <div class="card-row">
            <div class="card-col" v-for="story in themeItems.stories" :key="story.id">
                <router-link :to="{name: 'ThemeItemDetailView', params: {id: story.id}}">
                    <div class="card-item">
                        <span v-if="story.images">
                            <img :src="story.images[0]"/>
                        </span>

                        <p style="font-size: 12px; color: black">{{story.title}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'theme-item-list',
        props: ['id'],
        data () {
            return {

            }
        },
        computed: {
            themeItems(){
                return this.$store.state.themeItems;
            }
        },
        mounted(){
            this.fetchThemeItemsById();
        },
        methods: {
            fetchThemeItemsById(){
                let id = this.$route.params.id;
                this.$store.dispatch('getThemeItemsByIdAction', id);
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
