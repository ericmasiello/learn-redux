import { createSelector } from 'reselect';
import { filterNewsBySearchTerm } from '../util/dataTransformations';

const newsSelector = state => state.news;
const searchTermSelector = state => state.searchTerm;

const caseInsensitiveSearchTermSelector = createSelector(
  [searchTermSelector],
  searchTerm => searchTerm.toLowerCase()
);

export const searchNewsSelector = createSelector(
  [newsSelector, caseInsensitiveSearchTermSelector],
  filterNewsBySearchTerm,
);
