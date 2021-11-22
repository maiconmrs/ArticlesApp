import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { View, Linking, Alert } from "react-native";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchArea,
  SearchInput,
  NumberOfArticles,
  ArticleArea,
  ArticleImage,
  ArticleInfoArea,
  ArticleTitle,
  ArticleDescription,
  ArticleDate,
  SaveArticle,
} from "./styles";

import { fetchArticles } from "../../store/articles/actions";

function SearchPage() {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articlesReducer);

  const [keyWord, setKeyWord] = useState("");

  const addToReadingList = () => {
    Alert.alert("This article is now in your list!", "", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  useEffect(() => {
    dispatch(fetchArticles(keyWord));
  }, []);

  console.log("The articles:", articles);
  console.log("KW:", keyWord);

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={4}>
            Hi, what do you want to be informed about?
          </HeaderTitle>
        </HeaderArea>

        <SearchArea>
          <SearchInput
            placeholder="Subject"
            value={keyWord}
            onChangeText={(word) => setKeyWord(word)}
          />

          <TouchableOpacity onPress={() => dispatch(fetchArticles(keyWord))}>
            <FontAwesome5 name="search" />
          </TouchableOpacity>
        </SearchArea>

        {articles.length > 0 ? (
          <NumberOfArticles>
            {`${articles.length}`} results found
          </NumberOfArticles>
        ) : null}

        {keyWord ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {articles.map((article) => {
              return (
                <ArticleArea onPress={() => Linking.openURL(`${article.url}`)}>
                  <SaveArticle onPress={() => addToReadingList()}>
                    <FontAwesome5 name="bookmark" color="#cc0000" />
                  </SaveArticle>
                  <ArticleImage source={{ uri: article.urlToImage }} />
                  <ArticleInfoArea>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleDescription>
                      {article.description}
                    </ArticleDescription>
                    <ArticleDate>
                      Published: {article.publishedAt.substr(0, 10)}
                    </ArticleDate>
                  </ArticleInfoArea>
                </ArticleArea>
              );
            })}
          </View>
        ) : null}
      </Scroller>
    </Container>
  );
}

export default SearchPage;
