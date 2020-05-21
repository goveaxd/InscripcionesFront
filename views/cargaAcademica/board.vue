<template>
    <div 
    :id="id"
    class="board"
    @dragover.prevent
    @drop.prevent="drop">
        <slot />
    </div>
</template>

<script>
let idM=(idMateria)=>{
    let matAgreg=[]
    try{
        matAgreg=JSON.parse(localStorage.matAgreg)
    }catch{}
    let verif=matAgreg.indexOf(idMateria);
    if(verif<0){
        matAgreg.push(idMateria)
    }else{
         matAgreg.splice(verif,1)
    }
    localStorage.setItem("matAgreg",JSON.stringify(matAgreg));
};
export default {
    props: ['id'],
    methods:{
        drop: e=>{
            const card_id = e.dataTransfer.getData('card_id');
            const card = document.getElementById(card_id);
            idM(card_id);
            e.target.appendChild(card);
        }
    }
}
</script>>