export const fetchData = (url: string, urlParams: string[] | string) => {
  if (typeof urlParams !== "string") {
    return Promise.all(
      urlParams.map((it) =>
        fetch(`${url}${it}`).then(async (res) => await res.json())
      )
    );
  }
  return fetch(`${url}${urlParams}`).then((res) => res.json());
};
