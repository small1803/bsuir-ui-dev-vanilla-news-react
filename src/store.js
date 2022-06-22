import {createContext, useState} from "react";

const defaultState = {
  page: 1,
  sources: [],
  q: '',
};

export const StoreContext = createContext({
  state: defaultState,
  loadNextPage: () => {},
  updateSources: () => {},
  filterByQuery: () => {},
});

const StoreContextProvider = StoreContext.Provider;

export const StoreProvider = ({children}) => {
  const [state, setState] = useState(defaultState);

  const updateState = (newState) => {
    setState(Object.assign({}, state, newState));
  };

  const loadNextPage = () => {
    updateState({page: state.page + 1});
  };

  const updateSources = (source) => {
    const sources = [...state.sources];
    const sourceIndex = sources.indexOf(source);
    if (sourceIndex !== -1) {
      sources.splice(sourceIndex, 1);
    } else {
      sources.push(source);
    }

    updateState({page: 1, sources, news: []});
  };

  const filterByQuery = (q) => {
    updateState({page: 1, q, news: []});
  }

  const value = {
    state,
    loadNextPage,
    updateSources,
    filterByQuery,
  };

  return <StoreContextProvider value={value}>{children}</StoreContextProvider>;
};
