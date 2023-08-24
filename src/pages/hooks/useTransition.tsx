import { HomeButton } from '@/components/home-button';

export default function UseTransitionComponent() {
  return (
    <div className="flex mt-4">
      <HomeButton />
      <h1 className="font-bold text-xl text-center w-full mb-12">
        useTransition Hook
      </h1>
    </div>
  );
}
