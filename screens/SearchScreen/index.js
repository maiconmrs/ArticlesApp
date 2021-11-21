import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { View } from "react-native";
import { Text } from "react-native";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchArea,
  SearchInput,
} from "./styles";

import { fetchArticles } from "../../store/articles/actions";

function SearchPage() {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articlesReducer);

  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    dispatch(fetchArticles(keyWord));
  }, [keyWord]);

  console.log("The articles:", articles);
  console.log("KW:", keyWord);
  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={4}>
            Hi,<br></br>
            about what do you want to get information?
          </HeaderTitle>
        </HeaderArea>

        <SearchArea>
          <SearchInput
            placeholder="Keyword"
            value={keyWord}
            onChangeText={(word) => setKeyWord(word)}
          />
        </SearchArea>

        {keyWord ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {articles.map((article) => {
              return <Text>1 {article.title}</Text>;
            })}
          </View>
        ) : null}
      </Scroller>
    </Container>
  );
}

export default SearchPage;
