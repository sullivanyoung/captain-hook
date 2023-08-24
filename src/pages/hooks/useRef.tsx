import { HomeButton } from '@/components/home-button';

export default function UseRefComponent() {
  return (
    <div className="flex mt-4">
      <HomeButton />
      <h1 className="font-bold text-xl text-center w-full mb-12">
        useRef Hook
      </h1>
    </div>
  );
}
