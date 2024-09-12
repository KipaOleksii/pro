// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, message: "Hi, how are you?", likesCount: "15" },
//         { id: 2, message: "It's my first post!", likesCount: "8" },
//         { id: 3, message: "I love you", likesCount: "22" },
//       ],
//       newPostText: "enter the text",
//     },
//     dialogsPage: {
//       dialogs: [
//         {
//           id: 1,
//           name: "Anton",
//           avatar:
//             "https://media.istockphoto.com/id/1473767584/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B1%D0%B5%D0%B7%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B4%D0%B5%D0%BB%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BB%D1%8E%D0%B4%D0%B8-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F.jpg?s=612x612&w=0&k=20&c=LALW-ofvBzkqDXJOQ4WMyiDKiS2RVRf84nwwdeyI94c=",
//         },
//         {
//           id: 2,
//           name: "Oleksii",
//           avatar:
//             "https://media.istockphoto.com/id/1473767584/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B1%D0%B5%D0%B7%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B4%D0%B5%D0%BB%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BB%D1%8E%D0%B4%D0%B8-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F.jpg?s=612x612&w=0&k=20&c=LALW-ofvBzkqDXJOQ4WMyiDKiS2RVRf84nwwdeyI94c=",
//         },
//         {
//           id: 3,
//           name: "Iren",
//           avatar:
//             "https://st4.depositphotos.com/7752738/38185/v/1600/depositphotos_381852360-stock-illustration-user-profile-or-my-account.jpg",
//         },
//         {
//           id: 4,
//           name: "Mari",
//           avatar:
//             "https://st4.depositphotos.com/7752738/38185/v/1600/depositphotos_381852360-stock-illustration-user-profile-or-my-account.jpg",
//         },
//         {
//           id: 5,
//           name: "Vova",
//           avatar:
//             "https://media.istockphoto.com/id/1473767584/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B1%D0%B5%D0%B7%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B4%D0%B5%D0%BB%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BB%D1%8E%D0%B4%D0%B8-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F.jpg?s=612x612&w=0&k=20&c=LALW-ofvBzkqDXJOQ4WMyiDKiS2RVRf84nwwdeyI94c=",
//         },
//         {
//           id: 6,
//           name: "Vlad",
//           avatar:
//             "https://media.istockphoto.com/id/1473767584/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B1%D0%B5%D0%B7%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B4%D0%B5%D0%BB%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BB%D1%8E%D0%B4%D0%B8-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F.jpg?s=612x612&w=0&k=20&c=LALW-ofvBzkqDXJOQ4WMyiDKiS2RVRf84nwwdeyI94c=",
//         },
//       ],
//       messages: [
//         { id: 1, message: "Hi, how are you?" },
//         { id: 2, message: "I'm fine" },
//         { id: 3, message: "What's up?" },
//         { id: 4, message: "Yo" },
//         { id: 5, message: "Tell me something" },
//         { id: 6, message: "Ha ha ha" },
//       ],
//       newMessageBody: "",
//     },
//   },
//   _callSubscriber() {
//     console.log("State changed");
//   },
//   getState() {
//     return this._state;
//   },
//   renderEntireTree() {
//     console.log("state update");
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._callSubscriber(this._state);
//   },
// };

// export default store;
