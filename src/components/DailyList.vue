<template>
    <div class="daily-list">
        <div class="card-row">
            <div class="card-col" v-for="story in dailies.stories" :key="story.id">
                <router-link :to="{name: 'DailyDetailView', params: {id: story.id}}">
                    <div class="card-item">
                        <img :src="story.images[0]"/>
                        <p style="font-size: 12px; color: black">{{story.title}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'daily-list',
        data () {
            return {}
        },
        computed: {
            dailies(){
                return this.$store.state.dailies;
            }
        },
        mounted(){
            this.fetchDailies();
        },
        methods: {
            fetchDailies(){
                this.$store.dispatch('getDailiesAction');
            }
        }
    }
</script>


<style scoped>
    a {
        text-decoration: none;
    }

    .card-row {
        margin-left: 200px;
        margin-right: 200px;
        display: flex;
        flex-wrap: wrap;
    }
    .card-col{
        margin: 15px;
    }
    .card-item{
        width: 200px;
    }
</style>
