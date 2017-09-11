export const selectUser = (state, ownProps) => {
  let name = ownProps.match.params.username;
  for (let key in state.users) {
    if (state.users[key].username === name) {
      return state.users[key];
    }
  };
  return {};
};

export const selectCourse = (state, ownProps) => {
  let courseId = ownProps.match.params.id;
  for (let key in state.courses) {
    if (state.courses[key].id === courseId) {
      return state.courses[key];
    }
  };
  return {};
};