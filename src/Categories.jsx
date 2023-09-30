const Categories = ({ categories, sortItems }) => {
  return (
    <section className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="btn"
            type="button"
            key={category}
            onClick={() => sortItems(category)}
          >
            {" "}
            {category}{" "}
          </button>
        );
      })}
    </section>
  );
};
export default Categories;
