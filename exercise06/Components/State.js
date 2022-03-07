import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class State extends Component { // Komponen menerima beberapa masukan (biasa disebut “props”) dan mengembalikan element React yang mendeskripsikan apa yang seharusnya tampil pada layar.
    render() {

        constructor() // Constructor adalah spesial method untuk membuat dan meng-inisialisasi sebuah objek dibuat dengan kelas.
        {
            super() // super(props) itu memberitahu React.Component tentang isi dari props yang diterima si komponen.
            this.state = { // state merencanakan suatu pembaruan ke suatu state objek komponen.
                nama: '',
                asal: 'SULUT'
            },
        }

        return (
            <View>
                <TextInput 
                    onChangeText={(text) => {this.setState({nama.text})}} // onChangeText agar dapat merubah tampilan Text
                />
                <Text>Nama Saya Adalah {this.state.asal}</Text>
            </View>
        )
    }
}