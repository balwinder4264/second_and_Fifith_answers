import axios from "axios"
import { useState } from "react"
const Search = () => {
    const [listOfWords, setListOfWords] = useState(null)
    const onChangeHandler = async (txt) => {
        const api = "https://api.datamuse.com/words?ml=" + txt.target.value;
        console.log("api=>", api)
        const response = await axios.get(api)
        setListOfWords(response.data);
        console.log("response=>", response)


    }
    return <div className=" flex justify-center items-center h-screen">
        <div class="w-full max-w-screen-xl mx-auto px-6">
            <div class="flex justify-center p-4 px-3 py-10">
                <div class="w-full max-w-md">
                    <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                        <div class="block text-gray-700 text-lg font-semibold py-2 px-2">
                            Item List
                        </div>
                        <div class="flex items-center bg-gray-200 rounded-md">
                            <div class="pl-2">
                                <svg class="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path class="heroicon-ui"
                                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                </svg>
                            </div>
                            <input
                                onChange={(txt) => onChangeHandler(txt)}
                                class="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                                id="search" type="text" placeholder="Search teams or members" />
                        </div>
                        <div className=" overflow-y-auto h-80">
                            {listOfWords ? listOfWords.map((item) => {
                                return <div class="py-3 text-sm">
                                    <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                        <div class="flex-grow font-medium px-2">{item.word}</div>
                                    </div>
                                </div>
                            }) : null}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Search;