import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const UselessTextInput = () => {
  const [Username, onChangeText] = React.useState(null);
  const [Email, onChangeText2] = React.useState(null);
  const [Pass, onChangePass] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={Email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={Pass}
        placeholder="Password"
        keyboardType="numeric"
      />

      <Button title="Login" onPress={() => console.log({Username, Email, Pass})} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;