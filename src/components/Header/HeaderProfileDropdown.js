import React, {Component} from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  Button
} from 'reactstrap';

class HeaderProfileDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropAccnt() {
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <i className="fa fa-user-circle-o fa-2x"></i>
          {/* <img src={'img/avatars/6.jpg'} className="img-avatar" alt=""/> */}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag="div" className="text-center">
            <img src="https://via.placeholder.com/150X100" />
          </DropdownItem>
          <DropdownItem> 
            <p><strong>Jean Donas</strong></p>
            <p>Parking Solution Admin</p>
            <p>Robert Bosch Pvt Ltd</p> 
          </DropdownItem>
          <DropdownItem><a> View Profile</a></DropdownItem>
          <DropdownItem divider/>
          <DropdownItem className="text-center">
            <Button color="danger">Logout</Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const {...attributes} = this.props;
    return (
      this.dropAccnt()
    );
  }
}

export default HeaderProfileDropdown;
