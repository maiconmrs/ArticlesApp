import React from "react";
import { useNavigation } from "@react-navigation/core";

import { Text, Linking } from "react-native";

import {
  Modal,
  ModalArea,
  ModalBody,
  CloseButton,
  ModalArticle,
  ArticleImage,
  ArticleTitle,
  ArticleDate,
  ArticleContent,
  ArticleURL,
  ArticleArea,
  Message,
} from "./styles";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default ({ show, setShow, article }) => {
  const closeModal = () => {
    setShow(false);
  };

  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={closeModal}>
            <FontAwesome5 color="#cc0000" name="arrow-alt-circle-down" />
          </CloseButton>
          {article ? (
            <ModalArticle>
              <ArticleImage source={{ uri: article.urlToImage }} />
              <ArticleArea>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDate>
                  Published: {article.publishedAt.substr(0, 10)}
                </ArticleDate>

                <ArticleContent>{article.content}</ArticleContent>
                <ArticleURL onPress={() => Linking.openURL(`${article.url}`)}>
                  <Message>
                    <FontAwesome5
                      name="external-link-square-alt"
                      color="#cc0000"
                    />
                    Link to original article
                  </Message>
                </ArticleURL>
              </ArticleArea>
            </ModalArticle>
          ) : (
            <ArticleTitle>Article not fount</ArticleTitle>
          )}
        </ModalBody>
      </ModalArea>
    </Modal>
  );
};
