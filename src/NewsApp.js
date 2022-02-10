import React, { Component } from 'react'
import NavBar from './NewsAppComponents/NavBar'
import { NewsComponent } from './NewsAppComponents/NewsComponent'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default class NewsApp extends Component {
    render() {
        return (
            <>            
            <div>
        <Router>
            <NavBar/>

            <Routes>
                <Route exact path="/" element={<NewsComponent key="general" pageSize={5} newsCategory="general"/>} />
                <Route exact path="/Sports" element={<NewsComponent key="sports" pageSize={5} newsCategory="sports"/>} />
                <Route exact path="/Entertainment" element={<NewsComponent key="entertainment" pageSize={5} newsCategory="entertainment"/>} />
                <Route exact path="/health" element={<NewsComponent key="health" pageSize={5} newsCategory="health"/>} />
                <Route exact path="/science" element={<NewsComponent key="science" pageSize={5} newsCategory="science"/>} />
                <Route exact path="/technology" element={<NewsComponent key="technology" pageSize={5} newsCategory="technology"/>} />
            </Routes>            
        
        </Router>
            </div>
            </>
        )
    }
}
