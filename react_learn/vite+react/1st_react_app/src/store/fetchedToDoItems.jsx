

// method - 2 of fetching data from server (using react-router's "loader"), when a page is loaded.
export const todoLoader = () => {



    return fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(data => {
            console.log(data.todos)
            return data.todos
         
        })
}

