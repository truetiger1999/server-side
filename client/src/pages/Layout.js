import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { meta } from 'react-isomorphic-render'

import Menu, { MenuLink } from '../components/Menu'
import Preloading from '../components/Preloading'

import Home  from '../../assets/images/home.svg'
import Users from '../../assets/images/users.svg'

@meta(({ state }) =>
({
	site_name   : 'WebApp',
	title       : 'WebApp',
	description : 'A generic web application boilerplate',
	image       : 'https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
	locale      : 'ru_RU'
}))
export default class Layout extends Component
{
	static propTypes =
	{
		children : PropTypes.node.isRequired
	}

	render()
	{
		const { children } = this.props

		return (
			<div>
				<Preloading/>

				<div className="webpage">
					<nav className="webpage__header">
						<Menu>
							<MenuLink to="/">
								<Home className="menu-item__icon menu-item__icon--home"/>
								Home
							</MenuLink>
							<MenuLink to="/users">
								<Users className="menu-item__icon menu-item__icon--users"/>
								Users
							</MenuLink>
						</Menu>
					</nav>

					<div className="webpage__content">
						{ children }
					</div>

					<footer className="webpage__footer">
						{/* */}
					</footer>
				</div>
			</div>
		)
	}
}