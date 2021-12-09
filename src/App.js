import Nav from './Component/Nav/nav';
import ButonCss from './Component/ButtonCss/ButonCss';
import TodoList from './Component/todoList/todoList';
import ListPost from './Component/posts/ListPosts';
import PostDetail from './Component/posts/PostDetail';
import ToastMessage from './Component/toastMessage/ToastMessage';
import Login from './Component/login/Login';
import { connect } from 'react-redux';
import "./fontawesome"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';

function App({isLogin}) {
  return (
    <Router>
    <div className="App">
      {isLogin === 'true' && <Nav />}
   <Switch>
          <Route path="/my-app" exact >
            <Home />
          </Route>
          <Route path="/my-app/button" >
            <ButonCss />
          </Route>
          <Route path="/my-app/todo">
            <TodoList />
          </Route>
          <Route path="/my-app/post" exact>
            <ListPost />
          </Route>
          <Route path="/my-app/post/:id">
            <PostDetail />
          </Route>
          <Route path="/my-app/toast">
            <ToastMessage />
          </Route>
          <Route path="/my-app/login" >
            <Login />
          </Route>
  </Switch> 
    </div>
  </Router>
  
  );
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getListTodo: (list) => dispatch({ type: "LIST_TODO", payload: list }),
    updateTodo: (todo) => dispatch({ type: "UPDATE_TODO", payload: todo }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
