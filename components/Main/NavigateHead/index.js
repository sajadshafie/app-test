import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AppButton from '../../common/AppButton';
export default function index() {
  const [isActive, setIsActive] = useState(false);
  const handleNavigate = () => {
    setIsActive(!isActive);
  };
  return (
    <View style={style.container}>
      <AppButton.touchOpacity
        onPress={handleNavigate}
        content={'Upcoming'}
        styleText={isActive ? style.isActive : style.isDeactive}
      />
      <AppButton.touchOpacity
        onPress={handleNavigate}
        content={'Favorite'}
        styleText={!isActive ? style.isActive : style.isDeactive}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'rgb(247, 167, 142)',
    height: 100,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15,
    paddingHorizontal: 75,
    justifyContent: 'space-between',
  },
  isActive: {
    color: 'black',
  },
  isActive: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  isDeactive: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.4)',
  },
});
