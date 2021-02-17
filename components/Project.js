import Image from 'next/image';
import github from '../images/icons/github.svg'
import web from '../images/icons/globe.svg'

export default function Project({ name, image, title, site, git , techno, description }) {
      return (
            <>
            <div class="container">
	   <div class="Box">
	   	<div class="FlipBox">
	   		<div class="Front">
	   			<img src={image} alt="image"/>
	   		</div>
	   		<div class="Back">
	   			<div>
	   			<h3>{name}</h3>
	   			<p className="description">
	   				{description}
	   			</p>
                           <div className="Box_button">
                                 <a className="FirstButton" href={git} target="_blank">
                                       <img src={github} alt="img_github" width="25px"/>
                                 </a>
                                 <a className="SecondButton" href={site} target="_blank">
                                       <img src={web} alt="img_web" width="25px"/>
                                 </a>
                           </div>
	   			</div>
	   		</div>
	   	</div>
	   </div>
	</div>
            </>
      )
}
