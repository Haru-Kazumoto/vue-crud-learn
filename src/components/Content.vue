<template>
    <div class="button-wrapper">
        <div class="date-container">
            <input type="text" class="date size" placeholder="Start" v-model="start">
            <span>-</span>
            <input type="text" class="date size" placeholder="End" v-model="end">
        </div>
        <input type="text" class="content size" placeholder="Content" v-model="content">
        <button @click="addTodo" class="size">Add TODO</button>
    </div>
    <div class="list-content">
        <div v-for="(item, index) in dataList" class="list">
            <button @click="doneTodo(index)" class="size button-content">Done</button>
            <button @click="deleteTodo(index)" class="size button-content">Delete</button>
            <div v-bind:class="{doneText: item.done}">{{ item.start }} <span>-</span> {{ item.end }} : {{ item.content }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    interface InputField {
        start: string;
        end: string;
        content: string;
        done: boolean;
    }
    export default {
        data() {
            return {
                dataList: [
                    {content: "Learn Vuejs 1", start: "08:00", end: "12:00", done: false},
                    {content: "Learn Vuejs 2", start: "08:00", end: "12:00", done: false},
                    {content: "Learn Vuejs 3", start: "08:00", end: "12:00", done: false},
                    {content: "Learn Vuejs 4", start: "08:00", end: "12:00", done: false},
                    {content: "Learn Vuejs 5", start: "08:00", end: "12:00", done: false},
                    {content: "Learn Vuejs 6", start: "08:00", end: "12:00", done: false},
                    {content: "Learn Vuejs 7", start: "08:00", end: "12:00", done: false},
                ],
                start: '',
                end: '',
                content: ''
            }
        },
        methods: {
            addTodo(){
                let newItem : InputField= {
                    start: this.start,
                    end: this.end,
                    content: this.content,
                    done: false
                }

                this.dataList.push(newItem);
            },
            deleteTodo(index: number){
                this.dataList.splice(index, 1);
            },
            doneTodo(index: number){
                this.dataList[index].done = true;
            }
        }
    }
</script>

<style scoped>
    .button-wrapper {
        display: flex;
        /* border: solid 1px; */
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 5px 50px;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
    }

    .doneText {
        text-decoration: line-through;
        color: red;
    }

    .button-wrapper button {
        border-radius: 3px;
        border: 1px solid;
        padding: 5px 10px;
        align-self: self-end;
    }

    .date-container {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .content {
        width: 240px;
    }

    .date {
        width: 70px;
    }

    .size {
        padding: 4px;
    }

    .list-content {
        display: flex;
        flex-direction: column;;
        padding: 6px 130px;
        gap: 10px;
    }

    .list {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .button-content {
        width: 50px;
    }
</style>