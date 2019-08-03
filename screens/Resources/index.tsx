import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import { fetchResources } from '../../actions/resourcesActions';
import { Card } from '../../components';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface IProps {
  fetchResources: () => void;
  resources: {};
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
  resourcesList: string[];
}

class ResourcesContainer extends React.Component<IProps, IState> {
  static navigationOptions = {
    title: 'Resources',
  };

  public state = {
    resourcesList: []
  };

  public componentDidMount() {
    this.props.fetchResources();
  };

  public componentWillReceiveProps(nextProps) {
    if (nextProps.resources) {
      this.setState({ resourcesList: nextProps.resources });
    }
  };

  public renderResource = (item: any) =>
    <Card item={item.item} showResourceDetail={() => this.showResourceDetail(item.item.id)} />;

  public keyExtractor = (item: any, index: number): string => `${index}`;

  public showResourceDetail = (id: number) => {
    this.props.navigation.navigate('ResourceDetail', { id });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.resourcesList}
          renderItem={this.renderResource}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
});

const mapStateToProps = state => ({
  resources: state.resources.resources,
});

export default connect(
  mapStateToProps,
  { fetchResources },
)(ResourcesContainer);
