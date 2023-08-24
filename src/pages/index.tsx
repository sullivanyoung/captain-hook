import { GridButton } from '@/components/grid-button';

export default function Home() {
  return (
    <main>
      <div className="flex mt-4">
        <h1 className="font-bold text-xl text-center w-full mb-12">
          {'Learn React Hooks'}
        </h1>
      </div>
      <div className="grid justify-center">
        <div>
          <GridButton linkText="useCallback" />
          <GridButton linkText="useContext" />
          <GridButton linkText="useDebugValue" />
          <GridButton linkText="useDeferredValue" />
          <GridButton linkText="useEffect" />
        </div>
        <div>
          <GridButton linkText="useId" />
          <GridButton linkText="useImperativeHandle" />
          <GridButton linkText="useInsertionEffect" />
          <GridButton linkText="useLayoutEffect" />
          <GridButton linkText="useMemo" />
        </div>
        <div>
          <GridButton linkText="useReducer" />
          <GridButton linkText="useRef" />
          <GridButton linkText="useState" />
          <GridButton linkText="useSyncExternalStore" />
          <GridButton linkText="useTransition" />
        </div>
      </div>
    </main>
  );
}
