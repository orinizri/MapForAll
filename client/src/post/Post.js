import React, { useState } from 'react';
import "./post.css";

function Post({ article }) {

	const [isOn, setIsOn] = useState(false);

	function handleClick() {
		setIsOn(!isOn);
	}


	return <div className='box-container'>
		<div className="card" onMouseEnter={handleClick}>
			<div className={`card__inner  ${isOn && 'is-flipped'}`}>
				<div className="card__face card__face--front">
					<h2>Card Front</h2>
				</div>
				<div className="card__face card__face--back">
					<div className="card__content">
						<div className="card__header">
							<img src="pp.jpg" alt="" className="pp" />
							<h2>post title</h2>
						</div>
						<div className="card__body">
							<h3>JavaScript Wizard</h3>
							<p>{article}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <div className='box'>
        {article}
      </div> */}
	</div>;
}

export default Post;
