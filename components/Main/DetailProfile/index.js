import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from '../../common/AppText';
import AppButton from '../../common/AppButton';
export default function index({name = 'Maia Blunt', countFriend = '22'}) {
  return (
    <View style={style.container_detail}>
      <Image
        source={require('../../../images/profile1.jpg')}
        style={style.image_profile}
      />
      <AppText content={name} styleText={style.name_profile} />
      <View style={style.friend}>
        <AppText content={countFriend} styleText={{color: 'rgba(0,0,0,0.6)'}} />
        <AppText content={'Friend'} styleText={{color: 'rgba(0,0,0,0.6)'}} />
      </View>
      <View style={style.btns}>
        <AppButton.touchOpacity
          content={'Message'}
          stylePress={style.btnMessage}
          styleText={{
            color: 'black',
          }}
        />
        <AppButton.touchOpacity
          content={'Friend'}
          stylePress={style.btnFriend}
          textColor={'white'}
          styleText={{
            color: 'white',
          }}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container_detail: {
    alignItems: 'center',
    marginTop: -25,
  },
  friend: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 15,
  },
  btnMessage: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width: 100,
    height: 40,
  },
  btnFriend: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 7,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  btns: {
    flexDirection: 'row',
  },
  image_profile: {
    width: 90,
    height: 100,
    borderRadius: 20,
    marginBottom: 5,
  },
  name_profile: {fontSize: 18, fontWeight: '600', color: 'black'},
});
