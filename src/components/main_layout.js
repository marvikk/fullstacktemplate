import React, { Component } from "react";
import { Link } from "react-router";
import BookDetail from "../containers/book-detail";

export default class MainLayout extends Component {
  render() {
    // Note the `className` rather than `class`
    // `class` is a reserved word in JavaScript, so JSX uses `className`
    // Ultimately, it will render with a `class` in the DOM
    return (
      <div>
        <aside className="primary-aside">
          <ul>
            <li>
              <Link to="/">Home!</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/widgets">Widgets</Link>
            </li>
          </ul>
        </aside>
        <main>{this.props.children}</main>
        <BookDetail />
      </div>
    );
  }
}
