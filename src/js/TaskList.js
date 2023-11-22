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
    this.filterText = '';
  }

  add(task) {
    if (!this.tasks.some((el) => el.text === task.text)) {
      this.tasks.push(task);
      this.filter(this.filterText);
    }
  }

  remove(task) {
    const indexEl = this.tasks.findIndex((el) => task === el);
    if (indexEl > -1) {
      this.tasks.splice(indexEl, 1);
    }
    this.filter(this.filterText);
  }

  filter(text) {
    this.filterText = text;
    const fiterCallback = filterCb.bind(null, text);
    this._renderItems(filterBy(this.tasks, fiterCallback));
  }

  create(text) {
    this.filterText = '';
    const task = new Task(text);
    task.changeHandler = this.changeTaskHandler;
    this.add(task);
    this.renderTasks();
  }
}
