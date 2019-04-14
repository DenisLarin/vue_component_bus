<template>
    <div>
        <div class="col-xs-12 col-sm-6" v-if="!selectedSercver">
            <p>Server Details are currently not updated</p>
        </div>
        <div class="col-xs-12 col-sm-6" v-else>
            <p>server index is {{selectedSercver.index}}</p>
            <br>
            <p>server status is {{selectedSercver.status}}</p>
        </div>
        <hr>
        <button @click="makeNormal">make server normal</button>
    </div>
</template>

<script>
    import {serverBus} from "../../main";

    export default {
        name: "ServerDetail",
        data() {
            return {
                selectedSercver: null
            }
        },
        created() {
            serverBus.$on("serverSelected", (selectedServer) => {
                this.selectedSercver = selectedServer;
            });
        },
        methods:{
            makeNormal(){
                this.selectedSercver.status = "work"
            }
        }
    }
</script>

<style scoped>

</style>