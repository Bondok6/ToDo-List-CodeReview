import Tasks from '../classTasks.js';

// check Duplication
const checkDuplicate = (desc) => {
  const status = document.querySelector('.status');
  const div = document.createElement('div');
  const span = document.createElement('span');

  const t = Tasks.tasks.filter((task) => desc === task.description);

  if (!t.length) {
    div.classList.add('success');
    span.textContent = '✅ The task is added successfully';
    div.appendChild(span);
    status.appendChild(div);
    return true;
  }
  div.classList.add('error');
  span.textContent = '❌ OOPS!! this task is already added';
  div.appendChild(span);
  status.appendChild(div);
  return false;
};

export default checkDuplicate;
