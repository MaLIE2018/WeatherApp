const Init: string[] = [];
function favoritesReducers(state: string[] = Init, action: any): string[] {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "REMOVE_FAVORITE": {
      const newFavorites = state.filter((fav) => fav !== action.payload);
      return [...newFavorites];
    }
    default:
      return state;
  }
}

export default favoritesReducers;
