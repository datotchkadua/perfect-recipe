import { useDispatch } from "react-redux";
import { toggleModal } from "../features/userSlice";
const SearchRecipeModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center w-full md:inset-0 h-full	max-h-full">
      <div className="relative p-4 w-full max-w-md lg:max-w-lg ">
        <div className=" relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Search Favorite Recipe
            </h3>
            <button
              onClick={() => dispatch(toggleModal())}
              type="button"
              className="end-2.5 font-bold text-xl bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              X
            </button>
          </div>
          <div className="p-4 md:p-5 border-b  dark:border-gray-600 ">
            <form className="space-y-4" action="#">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Pizza"
                  required
                />
              </div>
            </form>
          </div>
          recipte content here
        </div>
      </div>
    </div>
  );
};

export default SearchRecipeModal;
