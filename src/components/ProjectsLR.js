import React, { useState } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

export default function ProjectsLR() {
  const [isClicked, setIsClicked] = useState(false);

  const handleReadMore = () => {
    console.log("clicked yo");
    gsap.fromTo(
      ".proj__lr-readMore-afterclick",
      {
        x: 600,

        opacity: 0
      },
      { x: 0, duration: 1, opacity: 1 }
    );
    setIsClicked(true);
  };

  const handleBack = () => {
    gsap.fromTo(
      ".proj__lr-readMore-afterclick",
      {
        x: 0,

        opacity: 1
      },
      { x: 600, duration: 0.5, opacity: 0 }
    );
    setIsClicked(false);
  };
  return (
    <div className="proj__lr">
      <div className="proj__lr-readMore-afterclick">
        <div className="proj__lr-ac-text">
          <div className="proj__lr-ac-text-box">
            <p>
              I love music and like to make lots of playlists on Spotify but the
              Spotify interface in my opinion is a little clunky. I decided to
              create a web application that allows anyone with a Spotify account
              to quickly and intuitively create playlists that save to the users
              Spotify account. Using Spotify’s Implicit Grant Flow authorization
              a user if not already logged in is directed to Spotify’s login
              page. alt_text Once logged in the user will be redirected to the
              application and granted an access token that will allow him/her to
              interact with the Spotify Api. The user is requested to search for
              a song, artist, or album and when entered the results come in the
              search results portion of the application. alt_text alt_text The
              user can now scroll through all the results, preview the tracks
              and add the desired tracks over to the playlist section. Once the
              tracks are in the playlist the user can choose to remove them by
              clicking the minus symbol, make other searches and add new songs.
              After building the playlist to the desired length all that is left
              is naming the playlist and pressing the save to Spotify button
              then just like that the playlist will be saved in the users
              Spotify account ready to use immediately.
              <br />
              <br />
              Technology
              <br />
              <br />
              This project was actually the first React project I ever built
              before React Hooks had been introduced. After learning React
              Hook’s I thought it would be beneficial for me to refactor the
              entire project simplifying the code as much as possible using
              Stateless Components and React hooks. It was very gratifying for
              me to see how far I had come in my coding journey and how much
              cleaner I could make the code. This project required extensive
              work with the Spotify API. The first step was implementing the
              Grant Flow authorization which required creating a complex
              function that ascertains if a user is logged in or not in their
              browser if not they are directed to the login page, if so, they
              are directed to the Application with a special token unique to
              that user. Now that the user has this access to the Spotify API
              they can make requests for songs, albums, or Artists. This
              required an Api call with a response that mapped through and
              rendered gives the search results list. For this project the state
              management was getting cumbersome with needing to pass so many
              props down through the component hierarchy. I decided to use the
              useReducer and useContext hooks that allowed me to simplify the
              state management significantly. Instead of having to have all my
              functions on the top level I could now place them with the
              component they belonged to and dispatch the appropriate action,
              making the code cleaner and the components more reusable. I
              realised that the combination of useReducer and useContext is very
              similar to Redux which I enjoyed. The app has full CRUD
              functionality, and every aspect had a similar process: create the
              reducer which takes in an action and returns a new state, setting
              up the useReducer that holds the initial state and gives the
              ability to dispatch the action, setting up the action that feeds
              the reducer the data it needs, and finally dispatching the actions
              in the correct places within the app. The workflow was almost
              identical to building an app using Redux.
              <br />
              <br />
              Possible added features
              <br />
              <br />
              At the moment when a user previews a track the application
              redirects to a url where the song preview can be played. It would
              be better if the widget was actually on the song list so the song
              could be previewed without having to open another page in the
              browser.
            </p>
          </div>
        </div>
        <div className="proj__lr-ac-header">
          <div></div>
          <h1>Playlist Builder</h1>

          <button onClick={() => handleBack()} className="buttons__ac">
            X
          </button>
        </div>
      </div>
      <div className="proj__lr-buttons-container">
        <div className="proj__lr-link">
          {!isClicked && (
            <a href="https://silly-wescoff-4d18fa.netlify.app">
              {" "}
              <button className="buttons buttons--lr">To Site</button>
            </a>
          )}
        </div>
        <div className="proj__lr-repo">
          {!isClicked && (
            <a
              className="link"
              href="https://github.com/JesseSkralskis/PlaylistBuilder"
            >
              <button className="buttons buttons--lr">Repository</button>
            </a>
          )}
        </div>

        <div className="proj__lr-readMore">
          <Link
            className="link"
            to="/"
            onClick={() => {
              handleReadMore();
            }}
          >
            {!isClicked && (
              <button className="buttons buttons--lr">Read More</button>
            )}
          </Link>
        </div>
      </div>

      <div className="proj__spot-header">
        <h1>PlayList Builder</h1>
      </div>
      <div className="proj__photo-text-wrapper-lr">
        <div className="proj__spot-ss">
          <div className="proj__spot-photo"></div>
        </div>
        <div className="proj__spot-sum-wrapper">
          <div className="proj__spot-sum">
            <p>
              A third party web application that allows a user to search for
              songs using the Spotify API and add them to a playlist. When the
              user saves a playlist, it appears in that user's Spotify account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
