import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { home, login, beerList } from '../constants';

export function useNavigation() {
  const history = useHistory();

  const goToLogin = useCallback(() => {
    history.push(login);
  }, [history]);

  const goToHome = useCallback(() => {
    history.push(home);
  }, [history]);

  const goToBeerList = useCallback(() => {
    history.push(beerList);
  }, [history]); 

  return {
    goToLogin,
    goToHome,
    goToBeerList
  }
}
