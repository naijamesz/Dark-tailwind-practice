import './index.css';
function App() {
  // const handleClick = () => {
  //   setAnimals([...animals, getRandomAnimal()]);
  // };
  return (
    <div className='flex items-center justify-center w-auto h-screen bg-slate-100'>
      <div className='p-12 rounded-lg shadow-xl bg-slate-50 dark:bg-indigo-950 dark:shadow-md'>
        <h2 className='text-2xl font-semibold text-gray-800 dark:text-slate-50'>Card Title</h2>
        <p className='mt-2 text-gray-600 dark:text-gray-300'>This is the main content of the card.</p>
        <p className='mt-2 text-gray-400 dark:text-gray-100'>Subtext of additional information goes here.</p>
        <button
          onClick={() => {
            document.documentElement.classList.toggle('dark');
          }}
          className='px-4 py-2 m-4 font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-800'>
          Dark Mode
        </button>
        <button className='px-4 py-2 m-4 font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-800'>
          Button
        </button>
      </div>
    </div>
  );
}

export default App;
