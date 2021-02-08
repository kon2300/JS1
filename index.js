const taskList = () => {
  console.log(`
  ===================
  現在持っているのタスク
  ===================
  `);
};
taskList();

const currentTask = [
  {content: '机を片付ける', genre: '掃除'},
  {content: '牛乳を買う', genre: '買い物'},
  {content: '散歩する', genre: '運動'}
];

const taskDisplay = () => { 
  currentTask.forEach ((task , index) => {
    console.log(`${index} : [内容] ${task.content},[ジャンル] ${task.genre}`);
  });
};
taskDisplay();

const newTask = prompt('タスクを入力してください');
const newGenre = prompt('ジャンルを入力してください');
currentTask.push({content: newTask, genre: newGenre});
alert('新しいタスクを追加しました');

taskList();

taskDisplay();

prompt('「確認,追加,削除,終了」の４つのいずれかを入力してください');