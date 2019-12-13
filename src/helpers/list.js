import { setState, getState } from './state';

export function initialize() {
  setState([]);
}

export function addItem(item) {
  setState([...getState(), item]);
}

export async function addItemAsync(item) {
  setState(await [...getState(), item]);
}

export function destroy() {
  setState(null);
}
