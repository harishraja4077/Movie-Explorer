const STORAGE_KEY = "movieExplorerFavourites";

export function getFavourites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveFavourites(favourites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
}
