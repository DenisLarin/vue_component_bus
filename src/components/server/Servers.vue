<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <Server v-for="server in servers"
                    :key="server.index"
                    :server="server"></Server>
        </ul>
    </div>
</template>

<script>
    import Server from "./Server";
    export default {
        name: "Servers",
        components: {Server},
        data(){
            return{
                servers: [
                    {index: 1, status: "work"},
                    {index: 2, status: "broken"},
                    {index: 3, status: "work"},
                    {index: 4, status: "restarting"},
                    {index: 5, status: "stop"},
                    {index: 6, status: "sleep"},

                ]
            }
        }
    }
</script>

<style scoped>

</style>