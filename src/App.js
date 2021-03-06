import React from 'react';

import './App.css';
import dp from './img/DisplayPicture.jpg';
import githubIcon from './img/GithubIcon.jpg';
import gmailIcon from './img/GmailIcon.jpg';
import facebookIcon from './img/FacebookIcon.jpg';
import twitchIcon from './img/TwitchIcon.jpg';

function App() {
    const twitchPage = "https://www.twitch.tv/sheng94";
    const journalPage = "https://www.google.com"; 
    const booksPage = "https://www.google.com";
    const codePage = "https://www.google.com";
    const webPage = "https://jeraldtsy.github.io/web/";
    const mailPage = "mailto:jeraldtsy@gmail.com";
    const githubPage = "https://github.com/jeraldtsy";
    const facebookPage = "https://www.facebook.com/jeraldtsy";

  return (
    <div>
        <div class="header"> 
             <a href = {webPage}>Jerald Tan</a>
             <a href = {booksPage}>Books</a>
             <a href = {codePage}>Codes</a>                   
             <a href = {journalPage}>Journal</a>            
        </div>

        <div class = ".displayPicture">
            <img src = {dp} alt = "dp" className = "displayPicture" /> 
                <div class = ".greet">
                    <p className = "greet">HELLO</p>               
                <div class = ".AboutMe">
                    <span className = "AboutMe"> I'm Jerald and I am a christian!<br/>
                    I like to read books, code and play <a href = "https://blog.dota2.com/?l=english">DotA</a>. <br/><br/>

                    I firmly believe that tech can be used to share the christian faith and books are a wealth of knowledge that reveals our creator<br/><br/>             
                    Corem deo, carpe diem~  </span>
                    </div>
            </div>
        </div>  

        <div class = ".bibleVerse">
            <span className = "bibleVerse">For the eyes of the Lord range throughout the earth<br/>
            to strengthen those whose hearts are fully committed to him </span>
		</div>

        <div class = "footer">
            <a href = {facebookPage}><img src = {facebookIcon} alt = "facebookIcon" className = "iconPictures" /></a>    
            <a href = {mailPage}><img src = {gmailIcon} alt = "gmailIcon" className = "iconPictures" /></a>
        	<a href = {githubPage}><img src = {githubIcon} alt = "githubIcon" className = "iconPictures" /></a>
            <a href = {twitchPage}><img src = {twitchIcon} alt = "twitchIcon" className = "iconPictures" /></a>  
        </div>
    </div>  
  );
}

export default App;