export const selectCurrentUser = (state) => (
  state.entities.users[state.session.id]
);
