import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function handleInputGoal(enteredText) {
        // console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandle(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }

    return(
        <view style={StyleSheet.inputContainer}>
            <TextInput
            style={StyleSheet.TextInput}
            placeholder='Your Goal1'
            onChangeText={handleInputGoal}
            value={enteredGoalText}
        />
        <Button
        title="Add Goal"
        color={'#A3FFD6'}
        onPress={addGoalHandle}
        />
        </view>    
    )
}

export default GoalInput

const styles = StyleSheet({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#7BC9FF'
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 3,
        padding: 8,
        borderRadius: 5
    },
})
