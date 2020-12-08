import { fetchTodoList } from '@store/actions/todo'
import { getToken } from '@store/selectors/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import TaskItem from '../components/taskItem'
import { getTodoList } from '../store/selectors/todos'

const ToDoList = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const token = useSelector(getToken)
  const todoList: yellowhead.Todo[] = useSelector(getTodoList)

  useEffect(() => {
    token && dispatch(fetchTodoList())
  }, [token])

  useEffect(() => {
    !token && router.push('/')
  }, [])

  return (
    <div className='tasks-view'>
      {todoList.map(t => <TaskItem key={t.id} title={t.title} description={t.description} createdAt={t.createdAt} updatedAt={t.updatedAt} />)}
    </div>
  )
}

export default ToDoList;