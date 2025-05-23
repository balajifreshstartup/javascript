import icons from 'url:../../img/icons.svg';
import View from './view';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    return this._generateMarkupPreview();
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkupPreview() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    if (numPages <= 1) return '';

    if (curPage === 1) return this._createBtn('next', curPage + 1);
    if (curPage === numPages) return this._createBtn('prev', curPage - 1);

    return (
      this._createBtn('prev', curPage - 1) +
      this._createBtn('next', curPage + 1)
    );
  }

  _createBtn(type, page) {
    return `
      <button data-goto="${page}" class="btn--inline pagination__btn--${type}">
        <span>Page ${page}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-${
      type === 'next' ? 'right' : 'left'
    }"></use>
        </svg>
      </button>
    `;
  }
}

export default new PaginationView();
