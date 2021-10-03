import React from 'react';


function Video(props) {
    const { handleSubmit, handleChange, searchString } = props;
    return (

    <div>


        <form onSubmit={handleSubmit} className="form-horizontal">
            <input
                placeholder="Search"
                type="text"
                name="searchString"
                required
                onChange={handleChange}
                value={searchString}
            />
    
                <button type="submit">Search</button>
        </form>

        

    
        <div className="workoutVideo">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/ml6cT4AZdqI" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        
        </div>
    </div>
    );
}

export default Video;