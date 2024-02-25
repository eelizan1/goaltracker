import { type ReactNode } from "react";

export type CourseGoalProps = {
  id: number;
  title: string;
  children: ReactNode; // the JSX type to be passed down as prop
  onDeleteGoal: (id: number) => void; // function type; onDelete is naming convention
};

const CourseGoals = ({
  title,
  children,
  onDeleteGoal,
  id,
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {/* JSX prop */}
        {children}
      </div>
      {/* invoke anonymous function passing in the id to trigger the delete function */}
      <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  );
};

export default CourseGoals;
