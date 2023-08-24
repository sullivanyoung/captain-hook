import { HomeButton } from '@/components/home-button';

export default function UseEffectComponent() {
  return (
    <div className="flex mt-4">
      <HomeButton />
      <h1 className="font-bold text-xl text-center w-full mb-12">
        useEffect Hook
      </h1>
    </div>
  );
}
