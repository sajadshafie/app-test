import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default {
  AntDesign: ({name, color, style, key, size, onPress}) => {
    return (
      <AntDesign
        name={name}
        color={color}
        style={style}
        key={key}
        size={size}
        onPress={onPress}
      />
    );
  },
  Entypo: ({name, color, style, key, size, onPress}) => {
    return (
      <Entypo
        onPress={onPress}
        name={name}
        color={color}
        style={style}
        key={key}
        size={size}
      />
    );
  },
  EvilIcons: ({name, color, style, key, size, onPress}) => {
    return (
      <EvilIcons
        onPress={onPress}
        name={name}
        color={color}
        style={style}
        key={key}
        size={size}
      />
    );
  },
  Feather: ({name, color, style, key, size, onPress}) => {
    return (
      <Feather
        onPress={onPress}
        name={name}
        color={color}
        style={style}
        key={key}
        size={size}
      />
    );
  },
  FontAwesome: ({name, color, style, key, size, onPress}) => {
    return (
      <FontAwesome
        onPress={onPress}
        name={name}
        color={color}
        style={style}
        key={key}
        size={size}
      />
    );
  },
  FontAwesome5: ({name, color, style, key, size, onPress}) => {
    return (
      <FontAwesome5
        onPress={onPress}
        name={name}
        color={color}
        style={style}
        key={key}
        size={size}
      />
    );
  },
  Fontisto: ({name, color, style, key, size, onPress}) => {
    return (
      <Fontisto
        onPress={onPress}
        size={size}
        name={name}
        color={color}
        style={style}
        key={key}
      />
    );
  },
  MaterialCommunityIcons: ({name, color, style, key, size, onPress}) => {
    return (
      <MaterialCommunityIcons
        onPress={onPress}
        name={name}
        color={color}
        style={style}
        key={key}
        size={size}
      />
    );
  },
  Ionicons: ({name, color, style, key, size, onPress}) => {
    return (
      <Ionicons
        onPress={onPress}
        name={name}
        color={color}
        style={style}
        key={key}
        size={size}
      />
    );
  },
  SimpleLineIcons: ({name, color, style, key, size, onPress}) => {
    return (
      <SimpleLineIcons
        onPress={onPress}
        name={name}
        color={color}
        style={style}
        key={key}
        size={size}
      />
    );
  },
  MaterialIcons: ({name, color, style, key, size, onPress}) => {
    return (
      <MaterialIcons
        onPress={onPress}
        name={name}
        color={color}
        style={style}
        key={key}
        size={size}
      />
    );
  },
};
