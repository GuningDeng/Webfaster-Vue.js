import { createApp } from 'vue'
import App from './app/App.vue'
import axios from 'axios'

// let url = "http://localhost:3000/" // all API
let url = "http://localhost:3000/match" // API with 'x'. 'x' can be modified by 'webfaster-app/routes/match'

axios
    .get(url + "/")   
    .then(function(response) {
        window.console.log(response);
    })
    .catch(function(error) {
        window.console.log(error)
    })


// createApp(App).mount('#app')
const app = createApp(App)

app.mount('#app')

