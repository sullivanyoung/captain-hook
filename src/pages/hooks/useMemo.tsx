import { HomeButton } from '@/components/home-button';

export default function UseMemoComponent() {
  return (
    <div className="flex mt-4">
      <HomeButton />
      <h1 className="font-bold text-xl text-center w-full mb-12">
        useMemo Hook
      </h1>
    </div>
  );
}
