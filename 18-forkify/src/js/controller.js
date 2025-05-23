import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/PaginationView';
import bookmarksView from './views/bookmarksView';
import addRecipeView from './views/addRecipeView';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return;
  try {
    // Load recipe
    recipeView.renderSpinner();
    // 0 Results view to mark selected search result
    resultsView.update(model.getSearchResultPage());
    //1 Updating bookmark
    // debugger;
    bookmarksView.update(model.state.bookmarks);

    //2 Loading recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    //3 Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResult = async function () {
  try {
    resultsView.renderSpinner();
    // 1) Get Search Query.
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load Search
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultPage());

    // 4) Render Initial Pagination buttons.
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const controlPagination = function (pageNo) {
  // 1) Render New results
  resultsView.render(model.getSearchResultPage(pageNo));

  // 2) Render New Pagination buttons.
  paginationView.render(model.state.search);
};

const controlServings = function (newServing) {
  model.updateServings(newServing);

  //2 Rendering recipe
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1 Add / Remove Bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //2 Update recipeView
  recipeView.update(model.state.recipe);

  // Add bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandleUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
