if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/samplepwd/sw.js')
  .then((reg)=>{
    console.log(reg);
  })
  .catch((err)=>{
    console.log(err);
  })
  ;
}
