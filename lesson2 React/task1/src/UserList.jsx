import React, { Component } from "react";
import User from "./User";
import Pagination from "./Pagination";

//1. render users +++
//2.render users by page
//3.write pagination logic
//4.combine it

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      itemsPerPage: 3,
    };
  }

  //[1,2,3,4,5]

  // isNextAvai = (currentPage,
  // totalItems,
  // itemsPerPage)
  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };
  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const { users } = this.props;
    const { currentPage, itemsPerPage } = this.state;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const usersToShow = users.slice(startIndex, endIndex);
    return (
      <div>
        <Pagination
          goNext={this.goNext}
          goPrev={this.goPrev}
          currentPage={currentPage + 1}
          itemsPerPage={itemsPerPage}
          totalItems={users.length}
        />
        <ul className="users">
          {usersToShow.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
