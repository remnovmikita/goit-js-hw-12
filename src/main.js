
const form = document.querySelector(".form");
const input = document.querySelector('[name="search-text"]');
const bntLoad = document.querySelector(".showLoad");

// Import first function
import { errorMessage } from "./js/render-functions";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoadMoreButton } from "./js/render-functions";
import { hideLoadMoreButton } from "./js/render-functions";


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
          createGallery(data.hits);
          if(page >= 1){
            showLoadMoreButton();
          }
        }
      }catch (error) {
        errorMessage("Sorry, there are no images matching your search query. Please try again!");
      } finally{
        hideLoader();
      };
});
  
 bntLoad.addEventListener("click", async () => {
          page += 1;
          const search = input.value.trim();
          hideLoadMoreButton();
            showLoader();
            try{
              const data = await getImagesByQuery(search,page);
              const totalPages = Math.ceil(data.totalHits / 15); 
            hideLoader();
            if(totalPages <= page){
              hideLoadMoreButton();
              errorMessage(
                "We're sorry, but you've reached the end of search results.")
            }else{
            
            createGallery(data.hits);
            const img = document.querySelector(".gallary-item");
            const rect = img.getBoundingClientRect();
            window.scrollBy({
              top: (rect.x * 2),
              left: 100,
              behavior: "smooth",
              });
            showLoadMoreButton();
            }
            } catch(error) {
            errorMessage("We're sorry, but you've reached the end of search results.")
          }finally{
          hideLoader();
        }
 });