import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const PracticeTextInput = () => {
  const [text, setText] = useState('');

  const handleInputChange = (input) => {
    setText(input);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleInputChange}
        value={text}
      />
    </View>
  );
};

export default PracticeTextInput;