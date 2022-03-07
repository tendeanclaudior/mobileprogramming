import React, { Component } from 'react';
import { Text, View } from 'react-native';
import State from './State';
import Props from './Props';

export default class App extends Component {
    render() {
        return (
            <State /> // State adalah data private sebuah component.

            <Props saya='Claudio Tendean'/>
            <Props saya='Hiskia Bororing'/>
            <Props saya='Tesalonika Wangania'/>
            <Props saya='Anatasya Kuron'/>
            <Props saya='Vini Tandiseru'/>
        ) // Props adalah data yang memiliki fungsi ganda yaitu selain untuk menyimpan data, Props juga berfungsi untuk “melempar data” antar components view jika ada perubahan data di state.
    }
}