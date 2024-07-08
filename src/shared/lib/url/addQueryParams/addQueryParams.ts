export const getQueryParams = (params: Record<string, string | undefined>) => {
  const existingSearchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value === undefined || value === "") {
      existingSearchParams.delete(name);

      return;
    }

    existingSearchParams.set(name, value);
  });

  return existingSearchParams.toString().length
    ? `?${existingSearchParams}`
    : "";
};

/**
 * Функция для добавления query параметров в строку запроса
 * @param params
 */
export const addQueryParams = (params: Record<string, string>) => {
  window.history.pushState(null, "", getQueryParams(params));
};
