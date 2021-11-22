import React from "react";
import { useSelector } from "react-redux";

import { View, Linking } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  ArticleArea,
  ArticleImage,
  ArticleInfoArea,
  ArticleTitle,
  ArticleDescription,
  ArticleDate,
  RemoveArticle,
} from "./styles";

function ReadingList() {
  const { articles, savedArticles } = useSelector(
    (state) => state.articlesReducer
  );
  console.log("All:", articles);
  console.log("Saved:", savedArticles);

  return (
    <Container>
      <Scroller>
        {savedArticles && savedArticles.length > 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <HeaderTitle numberOfLines={4}>
              Enjoy your saved Articles!
            </HeaderTitle>
            {savedArticles.map((article) => {
              return (
                <ArticleArea onPress={() => Linking.openURL(`${article.url}`)}>
                  <RemoveArticle>
                    <FontAwesome5 name="minus-circle" color="#cc0000" />
                  </RemoveArticle>
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
        ) : (
          <HeaderArea>
            <HeaderTitle numberOfLines={4}>
              You don't have articles saved
            </HeaderTitle>
          </HeaderArea>
        )}
      </Scroller>
    </Container>
  );
}

export default ReadingList;
