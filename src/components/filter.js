import React from 'react';


const Form  = ({ handleSubmit}) => (
    
            <>
            <form className="form-inline justify-content-center mt-3" onSubmit={handleSubmit}>
            <div className="form-group mb-2">
            <label htmlFor="filter">Filtrer</label>
            <input id="filter" type="text" name="filter"/>
            </div>
            <button type="submit" className="btn btn-dark mb-2">Confirm identity</button>
            </form>
            
           
            </>
            )
 



export default Form