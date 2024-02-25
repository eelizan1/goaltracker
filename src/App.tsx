import { useState } from "react";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

// export so CourseGoalList can use type
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // initalizes goals as an empty array of type CourseGoal
  // setGoals will be used to set the values of goals
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    // 1. create new goal object
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: summary,
    };

    setGoals([...goals, newGoal]);
  };

  // prop drilling - passing this function as a value into the multiple child layer components
  const handleDeleteGoal = (id: number) => {
    setGoals(goals.filter((prevGoal) => prevGoal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>You Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
