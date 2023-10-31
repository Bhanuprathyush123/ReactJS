/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react'

export const TodoContext = createContext({
     todos: [
          {
               id: 1,
               todo: '',
               iscompleted  : false
          }
     ],
     addTodo: (todo) => { },
     updateTodo: (id, todo) => { },
     removeTodo: (id) => { },
     toggleComplete:(id)=>{}
})

export const useTodo = () => {
     return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
