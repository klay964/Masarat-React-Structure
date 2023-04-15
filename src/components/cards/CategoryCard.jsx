export default function CategoryCard({ category, setCatName }) {
  return (
    <div className='border boder-gray-100 bg-slate-300 p-4 rounded cursor-pointer hover:bg-slate-500 ease-in duration-200'>
      <button onClick={() => setCatName(category)}>{category}</button>
    </div>
  );
}
