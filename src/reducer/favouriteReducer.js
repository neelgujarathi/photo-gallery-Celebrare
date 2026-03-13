export const initialState = {
  favourites: JSON.parse(localStorage.getItem("favourites")) || []
};

export function favouriteReducer(state, action) {

  switch (action.type) {

    case "TOGGLE_FAV":

      const exists = state.favourites.find(
        (photo) => photo.id === action.payload.id
      );

      let updated;

      if (exists) {
        updated = state.favourites.filter(
          (photo) => photo.id !== action.payload.id
        );
      } else {
        updated = [...state.favourites, action.payload];
      }

      localStorage.setItem("favourites", JSON.stringify(updated));

      return {
        ...state,
        favourites: updated
      };

    default:
      return state;
  }
}