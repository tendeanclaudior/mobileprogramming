import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Props extends Component {
    render() {

        constructor() // Constructor adalah spesial method untuk membuat dan meng-inisialisasi sebuah objek dibuat dengan kelas.
        {
            super() // super(props) itu memberitahu React.Component tentang isi dari props yang diterima si komponen.
        }

        return (
            <View>
                <Text style={styles.text}>{this.props.saya}</Text>
            </View>
        )
    }
}