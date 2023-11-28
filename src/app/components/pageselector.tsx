import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { hasLoadedHomeState } from '../recoil/atoms';
import LoadingScreen from './loader';
import Home from './home';

function PageSelector() {
  const [hasLoadedHome] = useRecoilState(hasLoadedHomeState);
  const [loading, setLoading] = useState(!hasLoadedHome);

  useEffect(() => {
    if (!hasLoadedHome) {
      console.log(hasLoadedHome+"this is from pageselector ")
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 3400);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [hasLoadedHome]);

  return loading ? <LoadingScreen /> : <Home />;
}

export default PageSelector;
