import { HomeButton } from '@/components/home-button';

export default function UseCallbackComponent() {
  return (
    <section>
      <HomeButton />
      <h1 className="font-bold text-xl text-center w-full mb-12">
        useCallback Hook
      </h1>
      <p className="font-bold text-center">
        A React hook that lets you cache a function definition between
        re-renders
      </p>
    </section>
  );
}
