import * as React from 'react';
import { Switch } from 'react-native-paper';

class SwitchComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isSwitchOn: (this.props.value == null) ? false : this.props.value
    }

    this.handleValueChange = this.handleValueChange.bind(this);
    this.props.onValueChange(this.state.isSwitchOn);
  }

  handleValueChange() {
    this.props.onValueChange(!this.state.isSwitchOn);
    this.setState({isSwitchOn : !this.state.isSwitchOn})
  }



  render() {
    return (
      <Switch
        value={this.state.isSwitchOn}
        onValueChange={this.handleValueChange}/>
    );
  }
}

SwitchComponent.defaultProps = {
  onValueChange: () => {}
}

export {SwitchComponent};
