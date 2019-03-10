import React, {Component} from 'react';
import {Text, View} from 'react-native';

import URLParse from './URLParse';

export default class App extends Component {
  state = {
    urlSpec: 'https://foobar.com:8080/root/child?a=1&b=2&c=#index',
    protocol: '',
    host: '',
    port: -1,
    path: '',
    query: '',
    ref: '',
    queryMap: '',
  };

  async componentDidMount(): void {
    // parse() returns Promise
    const url = await URLParse.parse(this.state.urlSpec);

    this.setState({
      protocol: url.protocol,
      host: url.host,
      port: url.port,
      path: url.path,
      query: url.query,
      ref: url.ref,
      queryMap: url.queryMap,
    });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={{fontSize: 24}}>URL parse example App</Text>
        <View style={{justifyContent: 'flex-start', padding: 8}}>
          <Text style={{fontSize: 16}}>{`url: ${this.state.urlSpec}`}</Text>
          <Text style={{fontSize: 16}}>{`protocol: ${this.state.protocol}`}</Text>
          <Text style={{fontSize: 16}}>{`host: ${this.state.host}`}</Text>
          <Text style={{fontSize: 16}}>{`port: ${this.state.port}`}</Text>
          <Text style={{fontSize: 16}}>{`path: ${this.state.path}`}</Text>
          <Text style={{fontSize: 16}}>{`query: ${this.state.query}`}</Text>
          <Text style={{fontSize: 16}}>{`ref: ${this.state.ref}`}</Text>
          <Text style={{fontSize: 16}}>{`queryMap: ${JSON.stringify(this.state.queryMap)}`}</Text>
        </View>
      </View>
    );
  }
}
