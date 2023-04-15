import CategoryCard from '../cards/CategoryCard';

export default function CategoriesList({ categories, setCatName }) {
  return (
    <>
      {categories.map((category, i) => (
        <CategoryCard setCatName={setCatName} category={category} key={i} />
      ))}
    </>
  );
}
