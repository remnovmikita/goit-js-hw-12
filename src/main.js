
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


form.addEventListener("submit", (event) =>{
  let page = 1;
  let search = input.value.trim();
  event.preventDefault();
  clearGallery();
  hideLoadMoreButton();
  if(search === ""){
    errorMessage("Невалидный ввод")
    return
  }else{
      showLoader();
      hideLoader();
          if (page > 1){
            showLoadMoreButton();
            hideLoader();
            }
      getImagesByQuery(search, page)
      .then((data) => {
          if(data.hits.length === 0){
          errorMessage(
          "Sorry, there are no images matching your search query. Please try again!");
          }else{
          createGallery(data.hits);
          hideLoader();
          showLoadMoreButton();
      }
      })
      .catch((error) =>{
        hideLoader();
        errorMessage("Sorry, there are no images matching your search query. Please try again!");
      })
        
   
  }
});
  
 bntLoad.addEventListener("click", () => {
          page += 1;
          let search = input.value.trim();
          hideLoadMoreButton();
            showLoader();
              getImagesByQuery(search, page)
              .then(data => {
            const totalPages = Math.ceil(data.totalHits / 15); 
            hideLoader();
            if(totalPages <= page){
              hideLoadMoreButton();
              errorMessage(
                "We're sorry, but you've reached the end of search results.")
            }else{
            
            createGallery(data.hits);
            const img = document.querySelector(".gallarey-item");
            const rect = img.getBoundingClientRect();
            window.scrollBy({
              top: (rect.x * 4),
              left: 100,
              behavior: "smooth",
              });
            showLoadMoreButton();
            }
          })
          .catch(error => {
            hideLoader();
            errorMessage(
                "We're sorry, but you've reached the end of search results.")});
          
        }
      )