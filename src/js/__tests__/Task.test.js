/**
 * @jest-environment jsdom
 */

import Task from "../Task";

test("class Task", () => {
  const task = new Task("задача");
  expect(task.text).toBe("задача");
});
