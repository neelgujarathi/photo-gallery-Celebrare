export default function PhotoCard({ photo, dispatch, favourites }) {

  const isFav = favourites.find((p) => p.id === photo.id);

  const toggleFav = () => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo
    });
  };

  return (
    <div className="border rounded shadow p-2">

      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover rounded"
      />

      <div className="flex justify-between items-center mt-2">

        <p className="text-sm">{photo.author}</p>

        <button
          onClick={toggleFav}
          className="text-xl"
        >
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>

    </div>
  );
}