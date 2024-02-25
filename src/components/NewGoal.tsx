import { FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null); // capture reference to the goal input and add initial value of null
  const summary = useRef<HTMLInputElement>(null); // capture reference to the summar input

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // .current() property will refer you to the input element
    // you can then access the method and properties of that DOM element
    // goal.current! with "!" means we know this wont be null so ignore error
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        {/* reference the useRef goal */}
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        {/* reference the summary useRef */}
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
