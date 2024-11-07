// Question.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Question = ({ question, selectedAnswer, setSelectedAnswer }) => {
    return (
        <View style={styles.container}>
            <Image source={question.image} style={styles.image} />
            <Text style={styles.questionText}>{question.questionText}</Text>
            <RNPickerSelect
                onValueChange={(value) => setSelectedAnswer(value)}
                items={question.options}
                value={selectedAnswer}
                style={pickerSelectStyles}
            />
        </View>
    );
};

export default Question;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    image: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    questionText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
        marginBottom: 15,
    },
});

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        width: '100%',
        backgroundColor: 'white',
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        width: '100%',
        backgroundColor: 'white',
    },
};
