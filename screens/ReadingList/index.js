import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { View, Linking, Button, Alert } from "react-native";

import { deleteAllArticles, deleteArticle } from "../../store/articles/actions";

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
  NumberOfArticles,
} from "./styles";

function ReadingList() {
  const { articles, savedArticles } = useSelector(
    (state) => state.articlesReducer
  );
  const dispatch = useDispatch();

  const clearMyList = () => {
    Alert.alert("Your list is clean now!", "", [
      { text: "OK", onPress: () => console.log("Pressed") },
    ]);
    dispatch(deleteAllArticles());
  };

  const removeArticle = (index) => {
    Alert.alert("The article was removed", "", [
      { text: "OK", onPress: () => console.log("Pressed") },
    ]);
    dispatch(deleteArticle(index));
  };

  console.log("All:", articles);
  console.log("Saved:", savedArticles);

  return (
    <Container>
      <Scroller>
        {savedArticles && savedArticles.length > 0 ? (
          <View>
            <HeaderTitle numberOfLines={4}>
              Enjoy your saved Articles!
            </HeaderTitle>
            <NumberOfArticles>
              You have {`${savedArticles.length}`}{" "}
              {savedArticles.length > 1 ? "articles" : "article"} in your list
            </NumberOfArticles>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {savedArticles.map((article, index) => {
                return (
                  <ArticleArea
                    onPress={() => Linking.openURL(`${article.url}`)}
                  >
                    <RemoveArticle
                      onPress={() =>
                        Alert.alert(
                          "Do you want remove this article from your list?",
                          `"${article.title}" will be removed from your reading list.`,
                          [
                            {
                              text: "Yes",

                              onPress: () => removeArticle(index),
                            },
                            {
                              text: "No",
                              onPress: () => console.log("Pressed"),
                            },
                          ]
                        )
                      }
                    >
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
              <Button
                color="#cc0000"
                border-radius="5px"
                title="Clean "
                onPress={() =>
                  Alert.alert(
                    "Do you want clean your list?",
                    "This action will remove all articles from your reading list.",
                    [
                      {
                        text: "Yes",
                        onPress: () => clearMyList(),
                      },
                      { text: "No", onPress: () => console.log("Pressed") },
                    ]
                  )
                }
              />
            </View>
          </View>
        ) : (
          <HeaderArea>
            <HeaderTitle numberOfLines={4}>
              You don't have articles in your list.
            </HeaderTitle>
          </HeaderArea>
        )}
      </Scroller>
    </Container>
  );
}

export default ReadingList;
