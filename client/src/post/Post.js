import React, {useState} from 'react';
import "./post.css";

function Post({article}) {

  const [isOn, setIsOn] = useState(false);

  function handleClick (){
    setIsOn(!isOn);
  }


  return <div className='box-container'>
    <div class="card" onMouseEnter={handleClick}>
		<div class={`card__inner  ${isOn && 'is-flipped'}`}>
			<div class="card__face card__face--front">
				<h2>Card Front</h2>
			</div>
			<div class="card__face card__face--back">
				<div class="card__content">
					<div class="card__header">
						<img src="pp.jpg" alt="" class="pp" />
						<h2>post title</h2>
					</div>
					<div class="card__body">
						<h3>JavaScript Wizard</h3>
						<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur <strong>adipiscing</strong> elit. Sed id erat a magna lobortis dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien placerat, <strong>laoreet</strong> tincidunt nulla.</p>
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
