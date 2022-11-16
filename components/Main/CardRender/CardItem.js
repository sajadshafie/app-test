import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import AppIcon from '../../common/AppIcon';
import AppText from '../../common/AppText';
import AppButton from '../../common/AppButton';
export default function CardItem({data, favHandler}) {
  return (
    <View style={style.container}>
      <View style={style.container_image}>
        <Image source={data.image} style={style.image} />
        <TouchableOpacity style={style.fav_container} onPress={favHandler}>
          <AppIcon
            icon={'AntDesign'}
            name="heart"
            size={22}
            color={data.isLiked ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>
      <AppText content={data.hotel_name} styleText={style.name} />
      <View style={style.container_star}>
        <AppIcon name={'star'} icon={'FontAwesome'} size={10} color="black" />
        <AppIcon name={'star'} icon={'FontAwesome'} size={10} color="black" />
        <AppIcon name={'star'} icon={'FontAwesome'} size={10} color="black" />
        <AppIcon name={'star'} icon={'FontAwesome'} size={10} color="black" />
      </View>
      <View style={style.location_container}>
        <AppIcon
          name={'ios-location-sharp'}
          icon={'Ionicons'}
          color={'rgba(0,0,0,0.6)'}
          size={20}
        />
        <AppText content={data.location} styleText={style.location} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AppButton.pressable
          content={'View Details'}
          stylePress={style.btn_view}
          styleText={style.text_btn}
          style={style.btn_view_content}
        />
        <AppIcon icon={'Feather'} name="share" color="black" size={25} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  name: {
    color: 'black',
    fontSize: 17,
    fontWeight: '700',
  },
  container: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 20,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  container_image: {
    position: 'relative',
    height: 120,
    width: '100%',
    marginBottom: 10,
  },
  fav_container: {
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 4,
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 4,
  },
  location: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 10,
    marginLeft: 7,
  },
  btn_view: {
    backgroundColor: 'black',
    borderRadius: 7,
    width: '88%',
    height: 40,
  },
  text_btn: {
    color: 'white',
    fontSize: 15,
  },
  location_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  container_star: {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 10,
  },
  btn_view_content: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
