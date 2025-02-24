import { InjectionToken, Provider } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage>('LOCAL_STORAGE');

export const provideLocalStorage = (localStorage: Storage): Provider => {
  return {
    provide: LOCAL_STORAGE,
    useValue: localStorage,
  };
};
