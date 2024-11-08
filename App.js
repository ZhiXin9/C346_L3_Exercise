import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Question from './components/Question';

const App = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');

    const questions = [
        {
            image: require('./img/Question1Pic.jpg'),
            questionText: "What is the real name of Conan Edogawa?",
            options: [
                { label: 'Select an answer', value: '' },
                { label: 'Heiji Hattori', value: 'Heiji Hattori' },
                { label: 'Eisuke Hondou', value: 'Eisuke Hondou' },
                { label: 'Shinichi Kudo', value: 'Shinichi Kudo' },
            ],
        },
        {
            image: require('./img/Question2Pic.jpg'),
            questionText: "What year was this movie released?",
            options: [
                { label: 'Select an answer', value: '' },
                { label: '1998', value: '1998' },
                { label: '2001', value: '2001' },
                { label: '2008', value: '2008' },
            ],
        },
        {
            image: require('./img/Question3Pic.png'),
            questionText: "What is the name of the detective agency where Conan works?",
            options: [
                { label: 'Select an answer', value: '' },
                { label: 'Teitan High School Detective Club', value: 'Teitan High School Detective Club' },
                { label: 'Mouri Detective Agency', value: 'Mouri Detective Agency' },
                { label: 'Kudo Detective Agency', value: 'Kudo Detective Agency' },
            ],
        },
        {
            image: require('./img/Question4Pic.png'),
            questionText: "When is Shinichi Kudo's Birthday?",
            options: [
                { label: 'Select an answer', value: '' },
                { label: '4th May', value: '4th May' },
                { label: '21st May', value: '21st May' },
                { label: '21st June', value: '21st June' },
            ],
        },
        {
            image: require('./img/Question5Pic.jpg'),
            questionText: "Who is the Night Baron?",
            options: [
                { label: 'Select an answer', value: '' },
                { label: 'A famous murderer', value: 'A famous murderer' },
                { label: 'The rival of Kudo Shinichi', value: 'The rival of Kudo Shinichi' },
                { label: "A character from one of Kudo Yusaku's books", value: "A character from one of Kudo Yusaku's books" },
            ],
        },
    ];

    const handleSubmit = () => {
        const correctAnswers = ['Shinichi Kudo', '1998', 'Mouri Detective Agency', '4th May', "A character from one of Kudo Yusaku's books"];
        const userAnswers = [answer1, answer2, answer3, answer4, answer5];
        const correctCount = userAnswers.reduce((count, answer, index) => (answer === correctAnswers[index] ? count + 1 : count), 0);
        const message = `You have ${correctCount} correct answers!`;
        Alert.alert(message);
    };

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Case Closed Quiz!</Text>
            {questions.map((question, index) => (
                <View key={index} style={styles.questionContainer}>
                    <Question
                        question={question}
                        selectedAnswer={[answer1, answer2, answer3, answer4, answer5][index]}
                        setSelectedAnswer={[setAnswer1, setAnswer2, setAnswer3, setAnswer4, setAnswer5][index]}
                    />
                </View>
            ))}
            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit Answers</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default App;

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: 'skyblue',
        minHeight: '100%',
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        color: '#4B6587',
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 40,
        letterSpacing: 1.5,
        fontFamily: 'Roboto',
    },
    questionContainer: {
        width: '100%',
        marginBottom: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButton: {
        backgroundColor: 'darkblue',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        width: '90%',
        marginTop: 30,
        elevation: 2,
        justifyContent: 'center',
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});
