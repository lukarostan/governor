<template>
    <div class="header">
        <img src="../assets/Icon-Menu-Logo.svg" alt="">
        <div class="lang">
            <button>EN</button>
            <button>HR</button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="sass" scoped>
@media only screen and (max-width: 600px)
    .header
        background: white
        width: 100%
        justify-content: space-evenly
        button
            color: #756DFF
            border: 1px solid #756DFF
        
@media only screen and (min-width: 600px)
    .header
        background: transparent
        width: 65%
        justify-content: space-between
        button
            color: white
            border: 1px solid white

.header
    display: flex
    flex-direction: row
    margin: auto
    padding: 10px 0
    position: sticky
    top: 0
    img
        width: 100px
    button
        background: transparent
        padding: 5px 30px
</style>