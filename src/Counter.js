
import './App.css';


function Counter(props){


    return  (
        <div className="container"> 
          <span className="btn btn-primary mr-2">{props.count}</span>
          <div className='button'>
          <span onClick={props.increment} className="btn btn-secondary m-2" ><i className="fas fa-plus-circle"></i></span>
          <span onClick={props.decrement} className="btn btn-info mr-2"><i className="fas fa-minus-circle"></i></span>
          <span onClick={props.reset} className="btn btn-success m-2"><i className="fas fa-refresh"></i></span>
          </div>
        </div>
      );
}

export default Counter;