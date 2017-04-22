<template>
    <div class="daily-detail">
        <div class="daily-detail-content">
            <div v-if="themeItemDetail.images" class="daily-detail-cover" :style="{'background-image': 'url('+themeItemDetail.images+')'}">
                <p class="daily-detail-title">{{themeItemDetail.title}}</p>
            </div>
            <div class="daily-detail-body" v-html="themeItemDetail.body">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'theme-item-detail',
        props: ['id'],
        data () {
            return {

            }
        },
        computed: {
            themeItemDetail(){
                return this.$store.state.themeItemDetail;
            }
        },
        mounted(){
            this.fetchThemeItemDetailById();
        },
        methods: {
            fetchThemeItemDetailById(){
                let id = this.$route.params.id;
                this.$store.dispatch('getThemeItemDetailByIdAction', id);
            }
        }
    }
</script>

<style scoped>
    .daily-detail{
        margin-left: 16rem;
        margin-right: 16rem;
    }
    .daily-detail-cover{
        height: 25rem;
        background-repeat: no-repeat;
        background-size: 100%;

    }
    .daily-detail-title {
        font-size: 3rem;
        color: #fff;
        position: relative;
        top: 12rem;
        left: 3rem;

    }
    .daily-detail-cover-source {
        color: #fff;
        position: relative;
        top: 15rem;
        left: 62rem;
        opacity: 0.4;
    }

    .daily-detail-body{
        font-size: 1.6rem;
        line-height: 2;
    }



    /*    .daily-detail-content {
            width: 60rem;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 0 0 .625rem .08rem rgba(0,0,0,.05);
        }
        .daily-detail-content p > img {
            width: 100%;
        }
        .daily-detail-cover {
            height: 25rem;
            background-size: cover;
            position: relative;
        }
        .daily-detail-title {
            font-size: 3rem;
            color: #fff;
            position: absolute;
            bottom: 4rem;
            width: 75rem;
            left: 2.5rem;
        }
        .daily-detail-cover-source {
            color: #E2E2E2;
            bottom: .5rem;
            right: 2.5rem;
            position: absolute;
            font-size: 1.5rem;
        }
        p {
            font-size: 1.6rem;
            line-height: 2;
        }
        .main-wrap {
            max-width: 80rem;
        }
        @media all and (max-width: 768px) {
            .daily-detail-content {
                width: 100%;
            }
            .daily-detail-title {
                width: 100%;
                left: 0;
                padding: 1rem;
                box-sizing: border-box;
            }
        }*/
</style>
