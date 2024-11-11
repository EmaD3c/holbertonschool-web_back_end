export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskIf = true;  // Variable spécifique au bloc if
    const task2If = false; // Variable spécifique au bloc if
  }

  return [task, task2];
}
