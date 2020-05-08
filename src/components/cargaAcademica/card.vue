<template>
    <div
    :id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop>

    <slot />
    </div>
</template>

<script>
export default {
    pops: ['id','draggable'],
    methods: {
        dragStart: e=> {
            const target = e.target;
            e.dataTransfer.setData('card_id', target.id);
            card.style.display="block";
            /*setTimeout(()=>{
                target.style.display = "none";
            },e);*/
        }
    }
}
</script>