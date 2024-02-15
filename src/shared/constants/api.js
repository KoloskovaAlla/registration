export const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

// export const ERROR_MODAL_TITLE = 'Сообщение об ошибке';
export const POST_ERRORS = {
  en: {
    postErrorModalMessage: 'There is no such post but it will be here soon',
    errorModalTitle: 'Error!'
  },
  ru: {
    postErrorModalMessage: 'Пост еще не готов, но скоро здесь появится',
    errorModalTitle: 'Ошибка!'
  },
};

export const NOT_FOUND_PAGE = {
  en: {
    title: 'The page was not found'
  },
  ru: {
    title: 'Страница не найдена'
  }
};
