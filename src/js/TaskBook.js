import data from "./data.js";

export default class TaskBook {
  constructor(entryField, pinnedList, taskList) {
    this.entryField = entryField;
    this.pinnedList = pinnedList;
    this.taskList = taskList;
    this._tasks = data;
    this.instHandlerOnChange = this.instHandlerOnChange.bind(this);
  }

  init() {
    this.sort();
    this.pinnedList.renderTasks();
    this.taskList.renderTasks();
    this.entryField.filterHandler = this.taskList.filter;
    this.entryField.createHandler = this.taskList.create;
    this.taskList.changeTaskHandler = this.instHandlerOnChange;
  }

  sort() {
    this._tasks.forEach((task) => {
      task.changeHandler = this.instHandlerOnChange;
      if (task.pinned) {
        this.pinnedList.add(task);
      } else {
        this.taskList.add(task);
      }
    });
  }

  instHandlerOnChange(task) {
    if (task.pinned) {
      this.taskList.remove(task);
      this.pinnedList.add(task);
    } else {
      this.pinnedList.remove(task);
      this.taskList.add(task);
    }
  }
}
