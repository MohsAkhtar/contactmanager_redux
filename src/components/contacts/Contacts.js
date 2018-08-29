import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
// when we have an action or bring in anything from redux state its called into prop
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

// mapping contacts to this.state.contacts
// so we're mapping state of redux to this local component
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

// We put two things inside connect, anything we want to map from
// Redux state to the props inside a Component and any actions we
// want to dispatch.
export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
