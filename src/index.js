import React, {props} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fontawesome-free-5.14.0-web/css/all.css'
// import { message } from 'statuses';
let gotInputValue = ' H';
function getInputValue(){
    gotInputValue = document.getElementById("inputValue").value; 
    return gotInputValue;
}
function Tweet() {
    
    return(
        <div className='tweet'>
            <Avatar/>
            
            <div className='content'>
                <Author/> 
                <Time/>
                <Message/>
                <TakeName />
                <Dave name={gotInputValue} last='Hafiz'/>
                <div className='buttons'>
                
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>   
            </div>
            
        </div>  
    );
}


function TakeName(){
    
    return(
        <span>
            <input id="inputValue"></input>
            <button onClick={getInputValue}>Button</button>
        </span>
        
    );
}
function Avatar() {
    return(
        <img src='https://www.gravatar.com/avatar/nothing'
        className='avatar'
        alt='Avatar'/>
    );
}
function Message(){
    return(
        <div className='message'>
            This is less than 140 characters.
        </div>
    );
}
function Author(){
    return(
        <span className='author'>
            <span className='name'>
                Your name..
            </span>
            <span className='handle'> @yourhandle</span>
        </span>
    );
}

const Time = () => (
    <span className='time'> 3Hours ago.</span>
)
const ReplyButton = () => (
<i className='fa fa-reply reply-button fa'></i>
);
const RetweetButton = () => (
    <i className='fa fa-retweet retweetbutton'></i>
);
function LikeButton(props){
    return(
        <i className= "fa fa-heart like-button"> </i>
    );
}

const MoreOptionsButton = () =>(
<i className='fa fa-ellipsis-h more-options-button'></i>
);

function Dave(props){
    
    return(
        <div>
            {props.name + props.last}
        </div>
    );
}

ReactDOM.render(<Tweet/>, document.querySelector('#root'));