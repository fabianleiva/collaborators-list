const Search = ({ data, setDataFiltered }) => {
  const handleChange = (e) => {
    const seachedText = e.target.value.toLowerCase();

    const result = data.filter((collaborator) => { 
      return(
      collaborator.name.toLowerCase().includes(seachedText) ||
        collaborator.email.toLowerCase().includes(seachedText) ||
        collaborator.age.toString().toLowerCase().includes(seachedText) ||
        collaborator.position.toLowerCase().includes(seachedText) ||
        collaborator.phone.toString() .toLowerCase().includes(seachedText));
    });
    setDataFiltered(result);
  };
  return (
    <div className="searchBar">
      <input
        id="searcher"
        type="text"
        name="searcher"
        placeholder="Buscar . . ."
        className="form-control mb-4"
        onChange={handleChange}
      />
    </div>
  );
};
export default Search;
