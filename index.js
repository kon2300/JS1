  const taskList = () => {
  console.log('============================');
  console.log('現在持っているのタスク一覧');
  console.log('============================');
  };
  taskList();

  let currentTask = [
    "掃除", "買い物", "散歩"
  ];
  
  let i = 0;
  for (let i = 0; i < currentTask.length; i++) {
    console.log(i + ' : ' + currentTask[i]);
  };
  
  const newTask = prompt('タスクを入力してください');
  currentTask.push(newTask);
  alert('新しいタスクを追加しました。');

  taskList();

  for (let int = 0; int < currentTask.length; int++) {
    console.log(int + ' : ' + currentTask[int]);
  };

  const next = prompt('「確認,追加,削除,終了」の４つのいずれかを入力してください');