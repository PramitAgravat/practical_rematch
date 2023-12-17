const profile = {
  initialState: {
    isEmpty: true,
    id: 0,
    nameOfCompany: '',
    contactPersonName: '',
    mobileNo: '',
    landlineNo: '',
    liceriseNo: '',
    emailAddress: '',
    secondEmailAddress: ''
  },
  reducers: {
    setProfile: (state = initialState, payload) => ({ ...state, ...payload }),
    resetProfile: (state = initialState) = ({ state })
  },
  effects: (dispatch) => ({
    // asynchronous effects can be added here
  }),
};

export default profile;