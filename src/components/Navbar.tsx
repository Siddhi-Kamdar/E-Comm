interface Props {
  search: string;
  onSearchChange: (value: string) => void;
}

const Navbar = ({ search, onSearchChange }: Props) => {
  return (
    <header className="w-full bg-black text-white px-6 py-4 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center">
      <h1 className="text-xl font-bold">E-Comm</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full sm:w-72 px-3 py-2 rounded bg-white text-black outline-none"
      />
    </header>
  );
};

export default Navbar;