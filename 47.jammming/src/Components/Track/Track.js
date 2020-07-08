import React from 'react';
import './Track.css';

class Track extends React.Component{
    renderAction() {
        if(this.props.isRemoval) {
            return <button className='Track-action'>-</button> 
        } else {
            return <button className='Track-action'>+</button>
        }
    }
    render(){
        return (
          <div className = 'Track' > 
            <div className = 'Track-information'>
                <h3>
                    {/* track name will go here  */}
                    {/* <h3>Track Name</h3> */}
                    <h3>{this.props.track.name}</h3>
                </h3>
                <p>
                    {/* track artist will go here */}
                    {/* Track Artist |Track Album */}
                    {this.props.track.artist} | {this.props.track.album}
                    
                    {/* track album will go here  */}
                </p>
            </div>
           {/* <button className = "Track-action"> + or - will go here < /button> */}
           {this.renderAction()}
          </div>
        );
    }
}

export default Track;

