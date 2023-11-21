import { filterBy, containsText } from "./filter";
import Task from "./Task.js";
import PinnedList from "./PinnedList.js";

const filterCb = (search, task) => {
  return containsText(task.text, search);
};

export default class TaskList extends PinnedList {
  constructor(element) {
    super(element);
    this.filter = this.filter.bind(this);
    this.create = this.create.bind(this);
    this.changeTaskHandler = null;
    this.warningClassCss = ".no-tasks";
  }

  filter(text) {
    const fiterCallback = filterCb.bind(null, text);
    this._renderItems(filterBy(this.tasks, fiterCallback));
  }

  create(text) {
    const task = new Task(text);
    task.changeHandler = this.changeTaskHandler;
    this.add(task);
    this.renderTasks();
  }
}
