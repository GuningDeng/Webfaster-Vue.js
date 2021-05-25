<template>
    <div class="post-list">
        <h3>API with the letter 'x'</h3>
        <ul>
            <li v-for="item in list" :key="item.API">
                {{ item.API }}
            </li>
        </ul>
    </div>
</template>

<script>
import { apiHttpClient } from '@/app/app.service'
// import axios from 'axios'

export default {
    data() {
        return {
            list: []
        }
    },

    created() {
        this.getList();
    },

    methods: {
        async getList() {
            try {
                
                const response = await apiHttpClient.get('/match')

                this.list = response.data
                // console.log(response.data);

            } catch (error) {
                console.log(error.response);
            }
        },        
    },

}
</script>

<style scoped>
.post-list {
    padding: 0 15vw;
}

ul {
    text-align: left;
}
</style>