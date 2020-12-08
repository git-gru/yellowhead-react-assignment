const TaskItem = ({ title, description, createdAt, updatedAt }: yellowhead.Todo) => (
  <div className='task-item'>
    <span>{title}</span>
    <span>{description}</span>
    <span>{createdAt}</span>
    <span>{updatedAt}</span>
  </div>
)

export default TaskItem;