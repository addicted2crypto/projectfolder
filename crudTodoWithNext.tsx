// This is the second page for the next.js using prisma todo app.
import { prisma } from './db'

import Link from "next/link"

import { TodoItem } from './componets/TodoItem'

function getTodos() {
  return prisma.todo.findMany()
}


export default async function home() {
 const todos = await getTodos()

  return (
    <>
  <header className="flex justify-between items-center mb-4">
    <h1 className="text-2xl">Todo research List</h1>
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"href="/new">
   
   New
  </Link>
  </header>
  <ul className="pl-4">
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} />
    ))}
  </ul>
  

  </>
  )
}

