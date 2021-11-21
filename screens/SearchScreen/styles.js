import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
    flex:1
    padding: 20px`;

export const HeaderArea = styled.View`
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
`;

export const HeaderTitle = styled.Text`
  width: 300px;
  font-size: 25px;
  font-weight: bold;
  color: #000000;
`;

export const SearchArea = styled.View`
  background-color: #ffffff;
  height: 50px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 5px;
  border: 0.5px;
  border-color: red;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 20px;
  color: #000000;
`;

export const ArticleArea = styled.TouchableOpacity`
  background-color: #ffffff;
  height: 100px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 20px;
  flex-direction: row;
`;

export const ArticleImage = styled.Image`
  background-color: #000000;
  width: 90px;
  height: 90px;
  border-radius: 20px;
`;
export const ArticleInfoArea = styled.View`
  background-color: #ffffff;
  height: 90px;
  margin-left: 5px;
  margin-right: 2px;
  flex: 1;
`;

export const ArticleTitle = styled.Text`
  flex: 0.4;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
`;

export const ArticleDescription = styled.Text`
  flex: 1.3;
  font-size: 12px;
  color: #000000;
  text-align: justify;
`;

export const ArticleDate = styled.Text`
  flex: 0.3;
  font-size: 8px;
  font-weight: bold;
  color: #000000;
  text-align: right;
`;
