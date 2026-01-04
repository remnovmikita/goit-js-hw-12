
const form = document.querySelector(".form");
const input = document.querySelector('[name="search-text"]');
const bntLoad = document.querySelector(".showLoad");

// Import first function
import { getImagesByQuery } from "./js/pixabay-api";
import { showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, clearGallery, createGallery, errorMessage } from "./js/render-functions";




let page = 1;


form.addEventListener("submit", async (event) =>{
  event.preventDefault();
  const search = input.value.trim();
  clearGallery();
  hideLoadMoreButton();
  if(search === ""){
    errorMessage("Невалидный ввод")
    return
  }
  showLoader();
      try{
        const data = await getImagesByQuery(search, page);
        if(data.hits.length === 0){
          errorMessage(
          "Sorry, there are no images matching your search query. Please try again!");
          }else{
            const totalPages = Math.ceil(data.totalHits / data.perPage); 
            if( totalPages <= data.perPage){
                createGallery(data.hits);
                showLoadMoreButton();
            }
        }
      }catch (error) {
        errorMessage("Sorry, there are no images matching your search query. Please try again!");
      } finally{
        hideLoader();
        page = 1;
        // input.value = "";
      };
});
  
 bntLoad.addEventListener("click", async () => {
          page += 1;
          const search = input.value.trim();
          hideLoadMoreButton();
            showLoader();
            try{
              const data = await getImagesByQuery(search,page);
              const totalPages = Math.ceil(data.totalHits / data.perPage); 
            if(totalPages <= page){
              createGallery(data.hits);
              hideLoadMoreButton();
              errorMessage(
                "We're sorry, but you've reached the end of search results.")
            }else{
            
            createGallery(data.hits);
            const img = document.querySelector(".gallery-item");
            // const rect = img.getBoundingClientRect();
            
            showLoadMoreButton();
            }
            } catch(error) {
            errorMessage("We're sorry, but you've reached the end of search results.")
          }finally{
          hideLoader();
        }
 });