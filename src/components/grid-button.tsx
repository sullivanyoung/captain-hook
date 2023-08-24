import { useRouter } from 'next/router';

type GridButtonProps = {
  linkText: string;
};

export const GridButton: React.FC<GridButtonProps> = ({ linkText }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/hooks/${linkText}`)}
      className="bg-white text-black rounded-md p-4 w-48 m-4"
    >
      {linkText}
    </button>
  );
};
