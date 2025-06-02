import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="size-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold tracking-wide text-center mb-6">
        JUST A SIMPLE COUNTER
      </h1>
      <Counter />
    </div>
  );
}
