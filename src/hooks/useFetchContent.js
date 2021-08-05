import { useState } from "react";

export const useFetchContent = () => {
  const [imgList, setImgList] = useState([]);
  const [nextImgList, setNextImgList] = useState([]);
  const fetchData = async (name) => {
    /* TODO: fetch images from this url: https://rickandmortyapi.com/api/character/
      (to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick)
    */
    await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((x) => x.json())
        .then(res => {
          setImgList(res.results.splice(0, 10))
          setNextImgList(res.results)
        });

  };
  const fetchNextData = async () => {
    setImgList(nextImgList.splice(0,10))
    setNextImgList(nextImgList)
  }


  // TODO: Put fetchMore method here
  return [fetchData, fetchNextData, imgList];
};
