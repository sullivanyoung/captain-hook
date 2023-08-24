import { HomeButton } from '@/components/home-button';

export default function UseImperativeHandleComponent() {
  return (
    <div className="flex mt-4">
      <HomeButton />
      <h1 className="font-bold text-xl text-center w-full mb-12">
        useImperativeHandle Hook
      </h1>
    </div>
  );
}
