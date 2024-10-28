import React from 'react';
import { View, Text, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Question = ({ question, options, selectedAnswer, setSelectedAnswer }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Image source={question.image} style={{ width: 400, height: 550 }} />
            <Text style={{ fontSize: 18, marginVertical: 10 }}>{question.questionText}</Text>
            <RNPickerSelect
                onValueChange={(value) => setSelectedAnswer(value)}
                items={question.options}
                style={pickerSelectStyles}
            />
        </View>
    );
};

const pickerSelectStyles = {
    inputIOS: {
        color: 'black',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 15,
    },
    inputAndroid: {
        color: 'black',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 15,
    },
};

export default Question;
