import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div
      className="bg-cover bg-center bg-[url('/hero.png')] h-[calc(100vh-6rem)] flex flex-col justify-center"
    >
      <p
        className="text-4xl font-semibold tracking-wide text-lime-800 ml-5"
      >
        Create, customize, and cherish <br /> your culinary creations—all in one place.
      </p>
      <div className="">
        <button 
          onClick={() => navigate('/all')}
          className="bg-lime-600 text-xl font-semibold tracking-wide text-amber-50 my-10 ml-14 py-2 w-40 rounded-full"
        >
          All Recipes
        </button>
        <button 
          onClick={() => navigate('/add')}
          className="bg-lime-600 text-xl font-semibold tracking-wide text-amber-50 my-10 ml-14 py-2 w-40 rounded-full"
        >
          Create Recipe
        </button>
      </div>
    </div>
  );
}