const TaskItem = ({ todo: { title, description, createdAt, updatedAt } }: { todo: yellowhead.Todo }) => (
  <div className='task-item'>
    <span>{title}</span>
    <span>{description}</span>
    <span>{createdAt}</span>
    <span>{updatedAt}</span>
  </div>
)

export default TaskItem;