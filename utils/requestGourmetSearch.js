const requestGourmetSearch = params => {
  let paramsToString = '';
  for (const key in params) {
    paramsToString += `${key}=${params[key]}&`;
  }
  paramsToString = paramsToString.slice(0, -1);

  const script = document.createElement('script');
  script.src = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${paramsToString}`;
  document.head.insertAdjacentElement('beforeend', script);
  script.remove();
};

export default requestGourmetSearch;
