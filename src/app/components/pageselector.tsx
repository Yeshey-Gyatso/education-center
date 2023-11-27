"use client"
import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { hasLoadedHomeState } from '../recoil/atoms';
import LoadingScreen from './loader';
import Home from './home';

function PageSelector() {
  const [loading, setLoading] = useState(true)
  const [hasLoadedHome] = useRecoilState(hasLoadedHomeState);
 
  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

 return hasLoadedHome ?
 ( 
    <Home/>
 ):(
  <LoadingScreen/>
)
}

export default PageSelector;