export default class Task {
  constructor(text) {
    this.text = text;
    this.pinned = false;
    this.changeHandler = null;
    this.onChange = this.onChange.bind(this);
    this._element = document.createElement("article");
    this._element.classList.add("task-container");
    this._element.innerHTML = `
    <div class="task-field">
      <h3>${this.text}</h3>
    </div>
    <input type="checkbox" class="task-choice">`;
    this._element
      .querySelector('[type="checkbox"]')
      .addEventListener("input", this.onChange);
  }

  get element() {
    this._element.querySelector('[type="checkbox"]').checked = this.pinned;
    return this._element;
  }

  onChange(e) {
    e.preventDefault();
    this.pinned = e.currentTarget.checked;
    this.changeHandler(this);
  }
}
