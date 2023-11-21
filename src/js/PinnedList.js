export default class PinnedList {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this._element = element;
    this.tasks = [];
    this.warningClassCss = ".no-pinned";
  }

  _clear() {
    const items = this._element.querySelectorAll(".task-container");
    for (const child of items) {
      child.remove();
    }
  }

  _renderItems(items) {
    this._clear();
    items.forEach((task) => {
      this._element.insertAdjacentElement("beforeend", task.element);
    });
  }

  renderTasks() {
    this.showOrHideWarning();
    this._renderItems(this.tasks);
  }

  add(task) {
    if (!this.tasks.some((el) => el.text === task.text)) {
      this.tasks.push(task);
      this.renderTasks();
    }
  }

  remove(task) {
    const indexEl = this.tasks.findIndex((el) => task === el);
    if (indexEl > -1) {
      this.tasks.splice(indexEl, 1);
    }
    this.renderTasks();
  }

  showOrHideWarning() {
    if (this.tasks.length === 0) {
      document.querySelector(this.warningClassCss).classList.remove("hidden");
    } else {
      document.querySelector(this.warningClassCss).classList.add("hidden");
    }
  }
}
