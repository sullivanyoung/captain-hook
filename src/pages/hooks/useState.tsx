import { HomeButton } from '@/components/home-button';
import { useState } from 'react';

export default function UseStateComponent() {
  const [age, setAge] = useState(25);
  const [name, setName] = useState('Sullivan Young');

  return (
    <section>
      <HomeButton />
      <h1 className="font-bold text-xl text-center w-full mb-12">
        useState Hook
      </h1>
      <p className="font-bold text-center">
        A React hook that lets you add a state variable to your component
      </p>
      <div className="mt-24 text-center text-xl">
        <p className="flex justify-center mb-4">
          My Age: <b className="ml-2">{age}</b>
        </p>
        <button
          className="bg-white text-black rounded-md p-1 mr-1"
          onClick={() => setAge(age + 1)}
        >
          Increase Age
        </button>
        <button
          className="bg-white text-black rounded-md p-1 ml-1"
          onClick={() => setAge(age - 1)}
        >
          Decrease Age
        </button>
      </div>
      <div className="mt-24 text-center text-xl">
        <p className="mb-4">
          My Name: <b className="ml-2">{name}</b>
        </p>
        <input
          className="text-black"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </section>
  );
}
