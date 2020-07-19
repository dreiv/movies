import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getItem<T>(key: string): T | void {
    const item = localStorage.getItem(key);

    if (item) {
      try {
        return JSON.parse(item);
      } catch (e) {
        console.error('Error getting data from localStorage', e);
      }
    }
  }

  setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }
}
