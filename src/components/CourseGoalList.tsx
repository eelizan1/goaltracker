import { CourseGoal } from "../App";
import CourseGoals from "./CourseGoals";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CourseGoal[];
  onDeleteGoal: (id: number) => void; // function type; onDelete is naming convention
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  // show infobox if there are no goals
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  // set warning box
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal: CourseGoal) => (
          <li key={goal.id}>
            <CourseGoals
              title={goal.title}
              onDeleteGoal={onDeleteGoal}
              id={goal.id}
            >
              <p>{goal.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
