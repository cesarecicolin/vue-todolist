
const { createApp } = Vue 
const app = createApp({
    data(){
        
        return {
            parentMessage: 'Parent',
            items: [{ message: 'pulire' }, { message: 'mangiare' }, {message:'scoprire come rimuovere un todo'}],
            newTodo:{
                message:""
            }
        }
    },
    methods:{
        remove: function(index)
        {
            const curIndex = index
            this.items.splice(curIndex)
            
        },
        addTask: function() {
            
            this.items.push({...this.newTodo})
            console.log(this.items)
            
        },
    }
})
app.mount("#app")
