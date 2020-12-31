import React from 'react';
import classes from './QuizList.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Loader from '../../components/UI/Loader/Loader';
import {fetchQuizes} from '../../redux/actions/quiz'

class QuizList extends React.Component {
   renderQuizez() {
      return this.props.quizes.map(quiz => {
         return (
            <li
               key={quiz.id}
            >
               <NavLink
                  to={`/quiz/${quiz.id}`}
               >
                  {quiz.name}
               </NavLink>
            </li>
         )
      })
   }

   componentDidMount() {
      this.props.fetchQuizes()
   }

   render() {
      return (
         <div className={classes.QuizList}>
            <div>
               <h1>Список тестов</h1>

               <ul>
                  {
                  this.props.loading && this.props.quizes.length !== 0
                     ? <Loader/> 
                     : this.renderQuizez()
                  }
               </ul>
            </div>
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      quizes: state.quiz.quizes,
      loading: state.quiz.loading
   }
}

function mapDispatchToProps(dispatch) {
   return {
      fetchQuizes: () => dispatch(fetchQuizes())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)