import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { View, Linking } from "react-native";

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
} from "./styles";

function ReadingList() {
  return (
    <Container>
      <Scroller>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ArticleArea
          // onPress={() => Linking.openURL(`${article.url}`)}
          >
            <ArticleImage
            // source={{ uri: article.urlToImage }}
            />
            <ArticleInfoArea>
              <ArticleTitle>Title{/* {article.title} */}</ArticleTitle>
              <ArticleDescription>
                Description
                {/* {article.description} */}
              </ArticleDescription>
              <ArticleDate>
                2021-11-11
                {/* Published: {article.publishedAt.substr(0, 10)} */}
              </ArticleDate>
            </ArticleInfoArea>
          </ArticleArea>
        </View>
      </Scroller>
    </Container>
  );
}

export default ReadingList;
