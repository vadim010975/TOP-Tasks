export default class EntryField {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this.onFilter = this.onFilter.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this._element = element;
    this.filterHandler = null;
    this.createHandler = null;
    this._element.addEventListener("input", (event) => this.onFilter(event));
    this._element.addEventListener("keydown", this.onCreate);
    this.warningEl = document.querySelector(".warning");
  }

  onFilter(e) {
    e.preventDefault();
    this.hideWarning();
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    const text = this._element.value;
    this._timeout = setTimeout(() => this.filterHandler(text), 300);
  }

  onCreate(e) {
    if (e.code === "Enter") {
      e.preventDefault();
      const value = e.currentTarget.value;
      if (value === "") {
        this.showWarning();
        return;
      }
      this.createHandler(value);
      e.currentTarget.value = "";
    }
  }

  showWarning() {
    this.warningEl.classList.remove("hidden");
  }

  hideWarning() {
    this.warningEl.classList.add("hidden");
  }
}
