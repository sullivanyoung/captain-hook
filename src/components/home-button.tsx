import { useRouter } from 'next/router';

export const HomeButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/`)}
      className="border border-white rounded-md ml-4 w-36 h-12 text-center mt-4"
    >
      Home
    </button>
  );
};
