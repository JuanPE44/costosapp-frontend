import { useState } from "react";
import Card from "./Card";
import { IconPlus } from "../Icons/IconPlus";

interface TypeIngredients {
  id: number;
  name: string;
  price: number;
}

function Ingredients() {
  const [ingredients, setIngredients] = useState<TypeIngredients[]>([]);
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.target[0].value;
    addTask({ id: Date.now(), name, price: 1000 });
  };

  const handleOnChange = (e) => {
    const taskId = parseInt(e.target.value);
    console.log(taskId);
    const newingredients = ingredients.map((task) => {
      if (task.id == taskId) {
        task.price = !task.price;
      }
      return task;
    });
    setIngredients(newingredients);
  };

  const addTask = ({ id, name, price }: TypeIngredients) => {
    setIngredients([{ id, name, price }, ...ingredients]);
    setIsFocus(false);
  };

  return (
    <Card className="min-h-60">
      <header className="flex justify-between w-full items-center">
        <div className="flex items-center gap-0.5">
          <span className="font-semibold">Ingredients</span>
        </div>
        <div className="flex gap-1 items-center">
          <div
            className="hover:bg-neutral-700 rounded-sm p-1 cursor-pointer"
            onClick={() => setIsFocus(!isFocus)}
          >
            <IconPlus />
          </div>
        </div>
      </header>
      {ingredients.length === 0 && !isFocus ? (
        <div className="p-8 text-center flex flex-col items-center gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">Stay on track</h3>
            <p className="text-sm text-neutral-200">
              Add ingredients and assign then to focus sessions throughout your
              day
            </p>
          </div>
          <button
            className="flex gap-1 items-center px-3 py-1 bg-neutral-700 rounded-sm curson-pointer"
            onClick={() => setIsFocus(!isFocus)}
          >
            <IconPlus />
            <span>Añadi un ingrediente</span>
          </button>
        </div>
      ) : (
        <div className="py-2 flex flex-col gap-2">
          <p className="text-xs text-neutral-400">
            Select a task for your focus session
          </p>
          {isFocus && (
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                required
                type="text"
                placeholder="nombre del ingrediente"
                autoFocus={isFocus}
                className="w-full bg-neutral-800 px-2 py-1 border-b-task border-b rounded-md outline-none"
              />
              <input
                required
                type="text"
                placeholder="precio del ingrediente"
                className="w-full bg-neutral-800 px-2 py-1 border-b-task border-b rounded-md outline-none"
              />
            </form>
          )}
          {ingredients.map((task) => {
            return (
              <div
                key={task.id}
                className="flex items-center w-full bg-neutral-700 p-2 border border-neutral-600 rounded-md"
              >
                <label
                  className={`ms-2 text-sm font-medium text-neutral-100 ${
                    task.price && "line-through text-neutral-400"
                  }`}
                >
                  {task.name}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}

export default Ingredients;
