<template>
    <div class="container">
        <div class="title">
            TODO LIST VUE.JS ANJAI
        </div>
    </div>
   
</template>

<script lang="ts">
    export default {
        data() {
            return {
                navbarList: [
                    {name: "Home"},
                    {name: "List"}
                ]
            }
        }
    }
</script>

<style scoped> 
    .container {
        /* border: solid 1px ; */
        margin-top: 10px;
        padding: 20px;
        /* color: yellow; */
    }
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: 400;
    }
</style>