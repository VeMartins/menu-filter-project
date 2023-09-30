import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  // const tempCategories = menu.map((item) => item.category);
  // const tempSet = new Set(tempCategories);
  // const tempItems = ["all", ...tempSet];
  // setCategories(tempItems);

  const sortItems = (category) => {
    const sortedMenu = data.filter((item) => item.category === category);
    if (category === "all") {
      return setMenu(data);
    }

    return setMenu(sortedMenu);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our-menu" />

        <Categories categories={categories} sortItems={sortItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
