
const form = document.querySelector(".form");
const input = document.querySelector('[name="search-text"]');
const bntLoad = document.querySelector(".showLoad");

// Import first function
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації

import { getImagesByQuery } from "./js/pixabay-api";
import { showLoader, hideLoader, showLoadMoreButton, 
  hideLoadMoreButton, clearGallery, createGallery } from "./js/render-functions";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const errorMessage = (msg) =>{
    iziToast.error({
    title: 'Error',
    position: 'topRight',
    message: msg,
});
}

let search = "";
let page = 1;


form.addEventListener("submit", async (event) =>{
  event.preventDefault();
  search = input.value.trim();
  clearGallery();
  hideLoadMoreButton();
  if(search === ""){
    errorMessage("Невалидный ввод")
    return
  }
  showLoader();
      try{
        page = 1;
        const data = await getImagesByQuery(search, page);
        if(data.hits.length === 0){
          errorMessage(
          "Sorry, there are no images matching your search query. Please try again!");
          }else{
            const totalPages = Math.ceil(data.totalHits / data.perPage); 
            if( page > totalPages ){
                createGallery(data.hits);
                  errorMessage(
                "We're sorry, but you've reached the end of search results.")
            }
            createGallery(data.hits);
                showLoadMoreButton();  
        }
      }catch (error) {
        errorMessage("Sorry, there are no images matching your search query. Please try again!");
      } finally{
        hideLoader();
      };
});
  
 bntLoad.addEventListener("click", async () => {
          page += 1;
          hideLoadMoreButton();
            showLoader();
            try{
              const data = await getImagesByQuery(search,page);
              const totalPages = Math.ceil(data.totalHits / data.perPage); 
            if(totalPages < page){
              createGallery(data.hits);
              hideLoadMoreButton();
              errorMessage(
                "We're sorry, but you've reached the end of search results.")
            }else{
            
            createGallery(data.hits);
            const img = document.querySelector(".gallery-item")
            const rect = img.getBoundingClientRect();
            window.scrollBy({
              top: rect.height * 2,
              behavior: "smooth"
            });
            showLoadMoreButton();
            }
            } catch(error) {
            errorMessage("We're sorry, щось трапилося")
          }finally{
          hideLoader();
        }
 });