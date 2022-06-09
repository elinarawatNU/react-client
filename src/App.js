import React from 'react';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Profile from './Profile';
import NavBar from './NavBar';
import { getHeaders } from './utils';

{/* TODO: Break up the HTML below into a series of React components. */}
class App extends React.Component {  

    constructor(props) {
        super(props);
        // issue fetch request to /api/profile endpoint:
        this.state = {
            user: {}
        }
    }

    render () {
        return (
            <div>

                <NavBar 
                    title="Photo App"
                    username={this.state.user.username} />

                <aside>
                    <Profile />
                    <Suggestions />
                </aside>

                <main className="content">
                    <Stories />
                    <Posts />
                </main>

            </div>
        );
    }
}

export default App;