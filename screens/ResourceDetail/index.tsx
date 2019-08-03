import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { fetchSingleResource } from '../../actions/resourcesActions';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';


interface IProps {
    fetchSingleResource: any;
    id: number;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
    resource: any;
}

class ResourceDetailContainer extends Component<IProps, IState> {
    static navigationOptions = {
        title: 'Resource',
    };

    public state = {
        resource: {}
    };

    public componentDidMount() {
        const id = this.props.navigation.getParam('id');
        this.props.fetchSingleResource(id);
    }

    public componentWillReceiveProps(nextProps) {
        if (nextProps.singleResource) {
            this.setState({ resource: nextProps.singleResource });
        }
    };

    render() {
        const { resource } = this.state;
        const { text } = styles;

        return (
            <View>
                <Text style={text}>
                    ID: {resource.id}
                </Text>
                <Text style={text}>
                    NAME: {resource.name}
                </Text>
                <Text style={text}>
                    COLOR: {resource.color}
                </Text>
                <Text style={text}>
                    YEAR: {resource.year}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15,
        alignSelf: 'center'
    }
})

const mapStateToProps = state => ({
    singleResource: state.resources.singleResource,
});

export default connect(
    mapStateToProps,
    { fetchSingleResource },
)(ResourceDetailContainer);