import { useCallback, useMemo, useReducer, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouriteReducer, initialState } from "../reducer/favouriteReducer";

import PhotoCard from "./PhotoCard";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";

export default function Gallery() {

  const { photos, loading, error } = useFetchPhotos();

  const [state, dispatch] = useReducer(
    favouriteReducer,
    initialState
  );

  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(
        search.toLowerCase()
      )
    );

  }, [photos, search]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>

      <SearchBar
        value={search}
        onChange={handleSearch}
      />

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-4
      "
      >

        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            dispatch={dispatch}
            favourites={state.favourites}
          />
        ))}

      </div>

    </div>
  );
}