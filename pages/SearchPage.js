import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, FlatList } from "react-native";

import { fetchArticles } from "../store/articles/actions";

function SearchPage() {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articlesReducer);
  const keyword = "keyword";

  useEffect(() => {
    dispatch(fetchArticles(keyword));
  }, []);

  console.log("The articles:", articles);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {articles.map((article) => {
        return <Text>1 {article.title}</Text>;
      })}
    </View>
  );
}

export default SearchPage;
