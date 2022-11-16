import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import CardItem from './CardItem';
export default function index() {
  const [data, setData] = useState([
    {
      image: require('../../../images/room1.jpeg'),
      isLiked: false,
      hotel_name: 'Meriam Hotel',
      star: 4,
      location: 'Hawai, 3.67 m from honolulu',
    },
    {
      image: require('../../../images/room2.jpg'),
      isLiked: false,
      hotel_name: 'Star Hotel',
      star: 2,
      location: 'Hawai, 4.67 m from honolulu',
    },
    {
      image: require('../../../images/room3.jpeg'),
      isLiked: false,
      hotel_name: 'Rain Hotel',
      star: 3,
      location: 'Hawai, 3.00 m from honolulu',
    },
    {
      image: require('../../../images/room4.jpg'),
      isLiked: false,
      hotel_name: 'ReMoox Hotel',
      star: 5,
      location: 'Hawai, 10.67 m from honolulu',
    },
  ]);
  const favHandler = i => {
    const dt = [...data];
    dt[i].isLiked = !dt[i].isLiked;
    setData(dt);
  };
  return (
    <View style={style.container}>
      <FlatList
        style={{flex: 1, marginTop: 50}}
        data={data}
        renderItem={({item, index}) => {
          return <CardItem data={item} favHandler={() => favHandler(index)} />;
        }}
      />
      {/* <CardItem
        data={{
          image: require('../../../images/room4.jpg'),
          isLiked: false,
          hotel_name: 'ReMoox Hotel',
          star: 5,
          location: 'Hawai, 10.67 m from honolulu',
        }} */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
});
