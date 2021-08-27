import firebase from 'firebase/app';
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyDA4-y1npNUnp9JJ6uZR_ebPfFLuqd5sko",
  authDomain: "notereact-cd55f.firebaseapp.com",
  databaseURL: "https://notereact-cd55f-default-rtdb.firebaseio.com",
  projectId: "notereact-cd55f",
  storageBucket: "notereact-cd55f.appspot.com",
  messagingSenderId: "953127058519",
  appId: "1:953127058519:web:1987bba121089583dbf712",
  measurementId: "G-FHZ89DFLXV"
};
  const firebaseConnect = firebase.initializeApp(firebaseConfig);
  export default firebaseConnect;

  // var data = firebase.database().ref("dataForNote/note3");
  // // sửa dữ liệu, chưa có thì nó tạo mới, nhưng hàm này phải có id
  // // vd id là note3, nên ít dùng ni mà dùng push
  // data.set({
  //   id:1,
  //   titleNote: "Ghi chú sửa",
  //   contentNote:"Demo content"
  // })

//  lấy dữ liệu
//  var data = firebase.database().ref("dataForNote/");
//   data.once("value").then(function(snapshot)
//   {
//     console.log(snapshot.val());
//   })
  