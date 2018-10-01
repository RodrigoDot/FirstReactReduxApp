import React from 'react'

export default props => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#/todos">
          <i className="fa fa-list-ul" aria-hidden="true"></i> TodoApp
        </a>
        <ul className="nav navbar-nav">
          <li className="">
            <a href="#/todos">
              Tarefas <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="">
            <a href="#/about">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
