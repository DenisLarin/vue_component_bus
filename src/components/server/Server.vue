<template>
    <div >
        <li class="list-group-item" @click="serverSelected">
            Server #{{server.index}}
        </li>
    </div>
</template>

<script>
    import {serverBus} from './../../main.js';
    export default {
        name: "Server",
        props:['server'],
        methods:{
            serverSelected(){
                serverBus.$emit("serverSelected", this.server);
            }
        }
    }
</script>

<style scoped>
    .list-group-item:hover{
        cursor: pointer;
        background-color: #0e0e0e;
        color: #fff;
        transition: 1s;
    }
</style>