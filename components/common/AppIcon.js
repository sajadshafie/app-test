import React from 'react';
import {View} from 'react-native';
import Icons from './Icons';
export default function AppIcon({
  name,
  color = 'white',
  style,
  icon,
  size,
  onPress,
}) {
  const nameIcon = [
    'AntDesign',
    'Entypo',
    'EvilIcons',
    'MaterialCommunityIcons',
    'FontAwesome5',
    'Feather',
    'Ionicons',
    'SimpleLineIcons',
    'MaterialIcons',
    'FontAwesome',
  ];

  return (
    <>
      {nameIcon.map((item, index) => {
        const Icon = Icons[item];
        return (
          icon == item && (
            <React.Fragment key={index}>
              <Icon
                name={name}
                color={color}
                size={size}
                style={style}
                onPress={onPress}
              />
            </React.Fragment>
          )
        );
      })}
    </>
  );
}
