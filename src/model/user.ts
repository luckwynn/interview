export default {
  namespace: 'products',
  state: {
    
  },
  reducers: {
    delete(state: any[], { payload: id }: any) {
      return state.filter((item: { id: any; }) => item.id !== id);
    },
  },
};
