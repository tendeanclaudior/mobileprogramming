import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Index from './Components/Index';
export default class Fresh extends Component {
  render() { // render untuk membuat representasi elemen dari state
    return ( // return itu adalah nilai kembalian. artinya dimanapun fungsi itu dipanggil, dia akan berubah menjadi nilai kembalian.
      <Index /> // Index disini agar pada android studio dapat manampilkan hasil dari Index
    );
  }
}

AppRegistry.registerComponent('Fresh', () => Fresh); 