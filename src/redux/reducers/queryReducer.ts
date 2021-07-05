function queryReducers(state: string = "Berlin", action: any): string {
  switch (action.type) {
    case "SET_QUERY":
      return (state = action.payload);
    default:
      return state;
  }
}

export default queryReducers;
