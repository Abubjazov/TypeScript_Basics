import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/14'

axios.get(url)
    .then(res => {
        const {id, title, completed } = res.data
        console.log(`
        The Todo with ID: ${id}
        Has title: ${title} 
        Is finished: ${completed}
        `)
    })
