import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Linking, Alert } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { fetchArticles, saveArticle } from "../../store/articles/actions";

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

function SearchPage() {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articlesReducer);
  const [keyWord, setKeyWord] = useState("");

  const addToReadingList = (article) => {
    Alert.alert("This article is now in your list!", "", [
      { text: "OK", onPress: () => console.log("Pressed") },
    ]);
    dispatch(saveArticle(article));
  };

  useEffect(() => {
    dispatch(fetchArticles(keyWord));
  }, []);

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

        {articles && articles.length > 0 ? (
          <NumberOfArticles>
            {`${articles.length}`} results found
          </NumberOfArticles>
        ) : null}

        {articles || keyWord ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {articles.map((article) => {
              return (
                <ArticleArea onPress={() => Linking.openURL(`${article.url}`)}>
                  <SaveArticle onPress={() => addToReadingList(article)}>
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
