firebase.collection('tareas').orderBy('titulo').onSnapshot( snapshot =>{
    let cambios = snapshot.docChanges();
    console.log(cambios)
})