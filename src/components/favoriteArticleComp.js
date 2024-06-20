
// Getting all the Stored Favorite articles from local storage in the favorite component.
const FavouriteArticles = () => {
    const favourite = JSON.parse(localStorage.getItem("articles"));

    return (
        <>
            {favourite !== null &&
                favourite.map((f) => (
                    <div className="ml-56  mr-96 mt-2 max-lg:ml-2 max-lg:mr-2  max-sm:max-w-fit max-sm:mt-20">
                    <div className="mt-4 border rounded-md border-gray-200 p-3 h-auto flex justify-around flex-wrap ">
                        <div className="text-center w-full">
                            <h1 className="text-xl font-semibold">{f?.title}</h1>
                        </div>
                        <div className="w-1/2 float-left mt-6">
                            <p className="">{f?.description}</p>

                        </div>
                        <div className="w-1/3 float-right mt-6">
                            <img className="w-60 mt-6" src={f?.urlToImage} alt=""></img>


                            <a href={f?.url}>
                                {" "}
                                <button className="border border-red-600 text-white bg-red-600 p-1 mt-5 float-right w-36">
                                    Read More..
                                </button>
                            </a>

                        </div>
                    </div>
                    </div>
                ))

            }
        </>)

}
export default FavouriteArticles;