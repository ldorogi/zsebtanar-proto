import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { signOut } from '../../shared/store/actions/auth'
import { ROLE_USER } from 'shared/services/user'
import Button from 'shared/component/general/Button'
import { openSideNav } from 'shared/store/reducers/sideNav'
import { openSignInModal, openSignUpModal } from 'shared/store/actions/modal'
import Link from 'shared/component/general/Link'

const mapStateToProps = state => ({
  session: state.app.session,
  sideNav: state.app.sideNav
})

export default withRouter(
  connect(mapStateToProps, { signOut, openSideNav, openSignInModal, openSignUpModal })(function Header(props) {
    return (
      <div className="header clearfix">
        <div className="desktop-header">
          <nav>
            <ul className="nav nav-pills float-right">
              {props.session.signedIn && props.session.userDetails.role > ROLE_USER ? (
                <li className="nav-item" key="admin">
                  <a href="/admin/" className="nav-link">
                    Admin
                  </a>
                </li>
              ) : (
                ''
              )}
              {props.session.signedIn ? (
                [
                  <li className="nav-item" key="sing-out">
                    <a href="#" className="nav-link" onClick={props.signOut}>
                      Kijelentkezés
                    </a>
                  </li>
                ]
              ) : (
                [
                  <li className="nav-item" key="sign-up">
                    <Link className="nav-link" onAction={props.openSignUpModal}>
                      <i className="fa fa-plus" /> Regisztráció
                    </Link>
                  </li>,
                  <li className="nav-item" key="sign-in">
                    <Link className="nav-link" onAction={props.openSignInModal}>
                      <i className="fa fa-sign-in" /> Belépés
                    </Link>
                  </li>
                ]
              )}
            </ul>
          </nav>
          <NavLink exact to="/">
            <h4 className="text-muted logo" />
          </NavLink>
        </div>

        <div className="mobile-header ">
          <Button
            className="navbar-toggler float-left"
            onAction={props.openSideNav}
            aria-expanded={props.sideNav.active}
            aria-label="Menü megnyitása"
          >
            <span className="fa fa-bars fa-lg" />
          </Button>

          <NavLink exact to="/" className="logo-link float-right">
            <h4 className="text-muted logo" />
          </NavLink>
        </div>
      </div>
    )
  })
)
