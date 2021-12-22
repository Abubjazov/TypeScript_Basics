import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/14'

interface Todo {
    id: number
    title: string
    completed: boolean
}

axios.get(url)
    .then(res => {
        const {id, title, completed } = res.data as Todo

        console.log(`
        The Todo with ID: ${id}
        Has title: ${title} 
        Is finished: ${completed}
        `)
    })
