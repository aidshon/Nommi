import React, { SFC } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface IProps {
    item: any;
    showResourceDetail: any;
}

const Card: SFC<IProps> = props => {
    const { item, showResourceDetail } = props;
    const { button, text } = styles;

    return (
        <TouchableOpacity style={button} onPress={showResourceDetail}>
            <Text style={text}>
                {item.name.toUpperCase()}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        marginTop: 15,
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'blue'
    },
    text: {
        fontSize: 18,
    }
})

export default Card;