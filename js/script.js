
const { createApp } = Vue 
const app = createApp({
    data(){
        return {
            parentMessage: 'Parent',
            items: [{ message: 'Foo' }, { message: 'Bar' }, {message:'todo'}],
            ciao: "cece"
        }
    },
    methods:{

    }
})
app.mount("#app")