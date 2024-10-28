import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ToastAndroid, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native';
import Question from './components/Question';


const App = ()=> {
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
            questionText: "When is Shinichi Kudo Birthday?",
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

    return (
        <ScrollView style={{ padding: 50 }}>
            <Text style={{fontSize:35, fontWeight:'bold'}}>Case Closed Quiz!</Text>
            <Question question={questions[0]} selectedAnswer={answer1} setSelectedAnswer={setAnswer1} />
            <Question question={questions[1]} selectedAnswer={answer2} setSelectedAnswer={setAnswer2} />
            <Question question={questions[2]} selectedAnswer={answer3} setSelectedAnswer={setAnswer3} />
            <Question question={questions[3]} selectedAnswer={answer4} setSelectedAnswer={setAnswer4} />
            <Question question={questions[4]} selectedAnswer={answer5} setSelectedAnswer={setAnswer5} />

            <TouchableOpacity
                onPress={()=> {
                    const correctAnswers = ['Shinichi Kudo', '1998', 'Mouri Detective Agency', '4th May', "A character from one of Kudo Yusaku's books"];
                    const userAnswers = [answer1, answer2, answer3, answer4, answer5];
                    let correctCount = 0;

                    userAnswers.forEach((answer,index) => {
                        if (answer === correctAnswers[index]) {
                            correctCount++;
                        }
                    });
                    const message = `You have ${correctCount} correct answers!`;
                    Alert.alert(message);
                }}
                style={styles.submitButton}
            >
                <Text style={styles.submitButtonText}>Submit Answers</Text>
            </TouchableOpacity>
            <View style={styles.bottomSpace} />
        </ScrollView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333333',
        textAlign: 'center',
    },
    submitButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 30,
        width: '100%',
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    bottomSpace: {
        height: 50,
    },
});
