import { InjectionToken } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage>('LOCAL_STORAGE');

export const provideLocalStorage = (localStorage: Storage) => {
  return {
    provide: LOCAL_STORAGE,
    useValue: localStorage,
  };
};
