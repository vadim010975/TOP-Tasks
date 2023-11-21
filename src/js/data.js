// заглушка
import Task from "./Task";

const tasks = [
  "первая задача",
  "вторая задача",
  "третья задача",
  "четвертая задача",
  "пятая задача",
];
const data = [];
tasks.forEach((task) => {
  data.push(new Task(task));
});
data[3].pinned = true;
data[4].pinned = true;

export default data;
