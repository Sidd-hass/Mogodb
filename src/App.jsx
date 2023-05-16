import React from 'react';
import {StreamChat} from 'stream-chat';
import {chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './components';

import './App.css';


const apiKey = 'tne25wwsp4r9';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper" >
        <chat client={client} theme="team light">
            <ChannelListContainer/>
            <ChannelContainer/>
        </chat>
    </div>
  );
}

export default App;