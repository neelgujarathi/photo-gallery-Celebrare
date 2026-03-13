export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        placeholder="Search by author..."
        value={value}
        onChange={onChange}
        className="border p-2 rounded w-full max-w-md"
      />
    </div>
  );
}