import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Location from '../../assets/icons/place.svg';

export default class PredictionListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li onClick={this.select}>
				<div className="marker-icon">
					<img src={Location} />
				</div>

				<div></div>

				{
					this.props.item.structured_formatting ?
					<div>
						<div className="main">{this.props.item.structured_formatting.main_text}</div>
						<div className="sub">{this.props.item.structured_formatting.secondary_text}</div>
					</div> :
					<div>
						<div className="main">{this.props.item.main_text}</div>
						<div className="sub">{this.props.item.secondary_text}</div>
					</div>

				}

			</li>
		)
	}

	select = () => this.props.select(this.props.item.place_id);
}

PredictionListItem.propTypes = {
	item: PropTypes.object,
	select: PropTypes.func
}