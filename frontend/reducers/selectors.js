export const selectCurrentUser = (state) => (
  state.entities.users[state.session.id]
);

export const selectErrors = (state) => (
  state.errors.session
);