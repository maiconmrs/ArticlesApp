import React from "react";
import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: flex-end;
`;

export const ModalBody = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 80%;
  padding: 10px 20px 10px 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

export const ModalArticle = styled.View`
  background-color: #ffffff;
  height: 90%;
  margin-bottom: 20px;
`;

export const ArticleImage = styled.Image`
  background-color: #000000;
  width: 100%;
  height: 30%;
  border-radius: 20px;
`;

export const ArticleArea = styled.View`
  background-color: #ffffff;
  flex: ;
  margin-top: 10px;
  height: 80%;
`;

export const ArticleTitle = styled.Text`
  color: #cc0000;
  font-size: 22px;
  font-weight: bold;
  text-align: justify;
`;

export const ArticleDate = styled.Text`
  color: #cc0000;
  font-size: 12px;
  text-align: left;
`;

export const ArticleContent = styled.Text`
  margin-top: 10px;
  color: #000000;
  font-size: 18px;

  text-align: justify;
`;

export const ArticleURL = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
`;

export const Message = styled.Text`
  color: #cc0000;
  font-size: 14px;
  text-align: left;
`;
