import TaskList from "./TaskList";
import EntryField from "./EntryField";
import PinnedList from "./PinnedList";
import TaskBook from "./TaskBook";

const taskList = new TaskList("#all-tasks");

const entryField = new EntryField(".entry-field");

const pinnedList = new PinnedList("#pinned");

const taskBook = new TaskBook(entryField, pinnedList, taskList);

taskBook.init();
