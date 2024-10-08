import { FC } from 'react'
import { useQueryTasks } from '../hooks/useQueryTasks'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

export const ReactQueryA: FC = () => {
  const navigate = useNavigate()
  const { status, data } = useQueryTasks()

  if (status === 'pending') return <div>{'Loading ...'}</div>
  if (status === 'error') return <div>{'Error'}</div>
  return (
    <>
      <p className="font-bold my-3">ReactQueryA</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => navigate('/query-b')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query B</p>
    </>
  )
}

export default ReactQueryA
