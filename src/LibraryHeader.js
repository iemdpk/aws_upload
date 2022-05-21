import React from 'react'
import PropTypes from 'prop-types'

function LibraryHeader(props) {
  return (
    <div className="page">
        <div className="left">
            <div className="one">
                Library
            </div>
            <div className="two">
                <div className="dropdown">
                <button class="dropbtn">Videos</button>
                    <div class="dropdown-content">
                        <a href="#">Articles</a>
                        <a href="#">Question Paper</a>
                        <a href="#">Slideshows</a>
                    </div>
                </div>
                <div className="btn">All</div>
                <div className="btn">Trending</div>
                <div className="btn">Recommended</div>
                <div className="btn">Latest</div>
            </div>
            <div className="three">
                <div className="search">
                <input type="text" name="search" placeholder="     Search"/>
                </div>
                <div className="filters">
                    <div className="fbtn">
                    <div className="dropdon">
                <button class="dropbtn fb">Grade</button>
                    <div class="dropdon-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                    </div>
                    <div className="fbtn">
                    <div className="dropdon">
                <button class="dropbtn fb">Topic</button>
                    <div class="dropdon-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>           
                    </div>
                    <div className="fbtn">
                    <div className="dropdon">
                <button class="dropbtn fb">Assignment</button>
                    <div class="dropdon-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                    </div>
                    <div className="reset-all">
                        Reset All
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

LibraryHeader.propTypes = {}

export default LibraryHeader
